import React, { Component, PropTypes } from 'react';
import Icon from 'antd/lib/icon';
import { TweenOneGroup } from 'rc-tween-one';
import animType from './animTypesIconFont';
import { transformArguments } from './util';
let keysNumber = 0;
class IconFontAnim extends Component {
  constructor() {
    super(...arguments);
    [
      'getTweenType',
      'getAnimType',
      'getChildren',
      'getChildrenToRender',
    ].forEach((method) => this[method] = this[method].bind(this));
    this.onApper = false;
    this.getAnimType(this.props);
    const children = this.getChildren(this.props);
    this.state = {
      children,
    };
  }

  componentDidMount() {
    this.onApper = true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.props.type) {
      this.getAnimType(nextProps);
      const children = this.getChildren(nextProps);
      this.setState({ children });
    }
  }

  getChildren(props) {
    const style = {};
    if (typeof this.type[0] === 'string' &&
      this.type[0].indexOf('3d') &&
      this.type[0].indexOf('rotate') === 0) {
      style.transform = 'perspective(200px)';
    }
    const key = this.newKeys();
    return props.type ? (<Icon type={props.type} style={style} key={key} />) : null;
  }

  getTweenType(type, typeName) {
    return (animType[type] || type)[typeName];
  }

  getAnimType(props) {
    this.type = transformArguments(props.animType);
    this.toEnter = !this.onApper ?
      (this.getTweenType(this.type, 'appear') || this.getTweenType(this.type, 'enter')) :
      this.getTweenType(this.type, 'enter');
    this.toLeave = this.getTweenType(this.type, 'leave');
  }

  getChildrenToRender() {
    const props = { ...this.props };
    return (<TweenOneGroup
      appear={this.props.appear}
      enter={this.toEnter}
      leave={this.toLeave}
      {...props}
    >
      {this.state.children}
    </TweenOneGroup>);
  }

  newKeys() {
    const key = `${Date.now()}-${keysNumber}`;
    keysNumber++;
    return key;
  }

  render() {
    const childrenToRender = this.getChildrenToRender();
    return childrenToRender;
  }
}
IconFontAnim.propTypes = {
  className: PropTypes.string,
  component: PropTypes.any,
  children: PropTypes.any,
  style: PropTypes.object,
  type: PropTypes.string,
  animType: PropTypes.any,
  appear: PropTypes.bool,
};

IconFontAnim.defaultProps = {
  component: 'div',
  animType: 'leftToRight',
  appear: true,
};
export default IconFontAnim;
