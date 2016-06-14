import React, { Component, PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import morphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
import svgType from './svg';
import animType from './animTypeSVG';
import { toArrayChildren } from './util';

TweenOne.plugins.push(morphPlugin);
TweenOne.plugins.push(SvgDrawPlugin);
const noop = () => {
};

class IconSVGAnim extends Component {
  constructor() {
    super(...arguments);
    [
      'getStartChildren',
      'changeProps',
    ].forEach((method) => this[method] = this[method].bind(this));
    const children = this.getStartChildren(this.props);
    this.state = {
      children,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.props.type) {
      const type = `${this.props.type}to${nextProps.type}`;
      this.changeProps(nextProps, svgType[nextProps.type], type);
      return;
    }
    const currentChildren = toArrayChildren(this.props.children);
    const newChildren = toArrayChildren(nextProps.children);
    let childrenDiffer = currentChildren.length !== newChildren.length;
    if (!childrenDiffer) {
      toArrayChildren(currentChildren).forEach((item, i) => {
        const newItem = newChildren[i];
        if (item.key !== newItem.key) {
          childrenDiffer = true;
        }
      });
    }
    if (childrenDiffer) {
      this.changeProps(nextProps, newChildren);
    }
  }

  getStartChildren(props) {
    const svg = props.children || svgType[props.type];
    return toArrayChildren(svg).map((item, i) => {
      if (this.props.appear) {
        let animation = animType.scale;
        if (props.appearAnim && props.appearAnim[i]) {
          animation = props.appearAnim[i];
        } else if (!animType[props.type]) {
          animation = { ...animation, delay: i * 100 };
        }
        return React.createElement(TweenOne, {
          ...this.allToPath(item),
          animation,
          component: 'path',
          key: item.key || i,
          attr: 'attr',
        });
      }
      return React.cloneElement(item, { key: item.key || i });
    });
  }

  allToPath(item) {
    const props = { ...item.props };
    if (typeof item.type !== 'string') {
      throw new Error('svg tag error.');
    }
    const name = item.type.toUpperCase();
    let cx;
    let cy;
    let rx;
    let ry;
    switch (name) {
      case 'CIRCLE': {
        cx = parseFloat(props.cx);
        cy = parseFloat(props.cy);
        const r = parseFloat(props.r);
        delete props.cx;
        delete props.cy;
        delete props.r;
        return {
          ...props,
          d: `M${cx - r},${cy} a${r},${r} 0 1,0 ${r * 2},0a${r},${r} 0 1,0 ${-r * 2},0z`,
        };
      }
      case 'ELLIPSE': {
        cx = parseFloat(props.cx);
        cy = parseFloat(props.cy);
        rx = parseFloat(props.rx);
        ry = parseFloat(props.ry);
        delete props.cx;
        delete props.cy;
        delete props.rx;
        delete props.ry;
        return {
          ...props,
          d: `M${cx - rx},${cy}a${rx},${ry} 0 1,0 ${rx * 2},0a${rx},${ry} 0 1,0 ${-rx * 2},0z`,
        };
      }
      case 'RECT': {
        const x = parseFloat(props.x);
        const y = parseFloat(props.y);
        const w = parseFloat(props.width);
        const h = parseFloat(props.height);
        rx = parseFloat(props.rx);
        ry = parseFloat(props.ry);
        delete props.x;
        delete props.y;
        delete props.width;
        delete props.height;
        delete props.rx;
        delete props.ry;
        if (!rx && !ry) {
          return { d: `M${x},${y}l${w},0l0,${h}l${-w},0z` };
        }
        return {
          ...props,
          d: `M${x + rx},${y}
l${w - rx * 2},0
a${rx},${ry} 0 0,1 ${rx},${ry}
l0,${h - ry * 2}
a${rx},${ry} 0 0,1 ${-rx},${ry}
l${rx * 2 - w},0
a${rx},${ry} 0 0,1 ${-rx},${-ry}
l0,${ry * 2 - h}
a${rx},${ry} 0 0,1 ${rx},${-ry}z`,
        };
      }
      case 'POLYGON': {
        const points = parseFloat(props.points);
        delete props.points;
        const p = points.split(/\s+/);
        let path = '';
        for (let i = 0; i < p.length; i++) {
          path += (i && 'L' || 'M') + p[i];
        }
        return { ...props, d: `${path}z` };
      }
      case 'LINE': {
        const x1 = parseFloat(props.x1);
        const x2 = parseFloat(props.x2);
        const y1 = parseFloat(props.y1);
        const y2 = parseFloat(props.y2);
        delete props.x1;
        delete props.x2;
        delete props.y1;
        delete props.y2;
        return { ...props, d: `M${x1},${y1}L${x2},${y2}z` };
      }
      default: {
        return { ...props };
      }
    }
  }

  tweenEndRemove(key) {
    const children = this.state.children.map(item => {
      if (!item) {
        return null;
      }
      if (parseFloat(item.key) !== key) {
        return item;
      }
      return null;
    }).filter(item => item);
    this.setState({
      children,
    });
  }

  changeProps(nextProps, newChild, type) {
    const currentChildren = this.state.children;
    const newChildren = newChild.map(item =>
      React.createElement('path', { ...this.allToPath(item) })
    );
    const children = [];
    currentChildren.forEach((item, i) => {
      const d = item.props.animation ?
      item.props.animation.d || item.props.d : item.props.d;
      const itemProps = { ...item.props };
      const toChildren = newChildren[i];
      const toChildrenProps = { ...(toChildren ? toChildren.props : {}) };
      let animation = {
        style: { scale: 0, opacity: 0 },
        onComplete: this.tweenEndRemove.bind(this, i),
      };
      if (toChildren) {
        if (nextProps.animation && nextProps.animation[i]) {
          animation = nextProps.animation[i];
        } else if (animType[type]) {
          animation = animType[type][i];
        } else {
          animation = {
            d: toChildren.props.d,
          };
        }
      }
      children.push(React.createElement(TweenOne,
        { ...(toChildren ? {} : itemProps), ...toChildrenProps,
          component: 'path', attr: 'attr', animation, d, key: i,
        }
      ));
    });
    // 多出的再行插入
    if (newChildren.length > currentChildren.length) {
      newChildren.forEach((item, i) => {
        if (i >= currentChildren.length) {
          let _a = { ...animType.scale };
          if (nextProps.animation && nextProps.animation[i]) {
            _a = nextProps.animation[i];
          } else if (animType[type]) {
            _a = animType[type][i];
          } else {
            _a.delay = (i - currentChildren.length) * 100 + 100;
          }
          children.push(React.createElement(TweenOne,
            { ...item.props, animation: _a, key: i, attr: 'attr', component: 'path' }
          ));
        }
      });
    }
    this.setState({ children });
  }

  render() {
    return (<svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      {...this.props}
    >
      {this.state.children}
    </svg>);
  }
}

IconSVGAnim.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  viewBox: PropTypes.string,
  width: PropTypes.any,
  height: PropTypes.any,
  onChange: PropTypes.func,
  type: PropTypes.any,
  animType: PropTypes.any,
  appear: PropTypes.bool,
  appearAnim: PropTypes.any,
  animation: PropTypes.any,
};

IconSVGAnim.defaultProps = {
  appear: true,
  viewBox: '0 0 1024 1024',
  width: 100,
  height: 100,
  onChange: noop,
};

export default IconSVGAnim;
