// use jsx to render html, do not modify iconsvg.html
import IconAnim from 'rc-icon-anim';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'antd/lib/button';
import 'antd/lib/input/style';
import 'antd/lib/button/style';
import './assets/iconsvg.less';
const IconSVGAnim = IconAnim.IconSVGAnim;

class Demo extends React.Component {
  constructor() {
    super(...arguments);
    [
      'onClick',
    ].forEach((method) => this[method] = this[method].bind(this));
    this.appearAnim = [
      { style: { SVGDraw: 0, opacity: 0 }, type: 'from' },
      { style: { SVGDraw: 0, opacity: 0 }, delay: 100, type: 'from' },
    ];
    this.state = {
      show: true,
    };
  }

  onClick() {
    let animation;
    if (this.state.show) {
      animation = [
        { style: { SVGDraw: '100% 100%', opacity: 0 } },
        { style: { SVGDraw: '100% 100%', opacity: 0 }, delay: 100 },
      ];
    } else {
      animation = this.appearAnim;
    }
    this.setState({ show: !this.state.show, animation });
  }

  render() {
    const style = `path{
          transform-origin: center;
        }
        #qrcode{
          text-align: center;
        }`;
    return (
      <div style={{ height: 300, margin: 20, textAlign: 'center' }}>
        <style>
          {style}
        </style>
        <IconSVGAnim
          className="icon-svg"
          appearAnim={this.appearAnim}
          animation={this.state.animation}
        >
          {this.state.show ? [
            <path d="M160.5,512L863.61,512" strokeWidth="79" key="a0" />,
            <path d="M509.5,165.5L509.5,859.66" strokeWidth="79" key="a1" />,
          ] : null}
        </IconSVGAnim>
        <ul className="icon-svg-demo-ul">
          <li>
            <Button type="primary" onClick={this.onClick}>切换 ICON</Button>
          </li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById('__react-content'));
