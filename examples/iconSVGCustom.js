// use jsx to render html, do not modify iconsvg.html
import 'rc-icon-anim/assets/antd-iconfont.less';
import './assets/iconfont.less';
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
    this.state = {
      children: [
        <path d="M160.5,512L863.61,512" strokeWidth="79" key="a0" />,
        <path d="M509.5,165.5L509.5,859.66" strokeWidth="79" key="a1" />,
      ],
      type: '+',
      animation: [
        { d: 'M229.5,229.5L794.5,794.5', ease: 'easeOutBack' },
        { d: 'M794.5,229.5L229.5,794.5', ease: 'easeOutBack', delay: 100 },
      ],
    };
  }

  onClick() {
    let type;
    let children;
    let animation;
    if (this.state.type === '+') {
      type = 'x';
      children = [
        <path d="M229.5,229.5 L794.5,794.5" strokeWidth="79" key="b0" />,
        <path d="M794.5,229.5 L229.5,794.5" strokeWidth="79" key="b1" />,
      ];
      animation = [
        { d: 'M229.5,229.5L794.5,794.5', ease: 'easeOutBack' },
        { d: 'M794.5,229.5L229.5,794.5', ease: 'easeOutBack', delay: 100 },
      ];
    } else {
      type = '+';
      children = [
        <path d="M160.5,512L863.61,512" strokeWidth="79" key="a0" />,
        <path d="M509.5,165.5L509.5,859.66" strokeWidth="79" key="a1" />,
      ];
      animation = [
        { d: 'M160.5,512L863.616699,512', ease: 'easeOutBack' },
        { d: 'M509.5,165.5L509.5,859.66', ease: 'easeOutBack', delay: 100 },
      ];
    }
    this.setState({ type, children, animation });
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
          appearAnim={[
            { style: { SVGDraw: 0, opacity: 0 }, type: 'from' },
            { style: { SVGDraw: 0, opacity: 0 }, delay: 100, type: 'from' },
          ]}
          animation={this.state.animation}
        >
          {this.state.children}
        </IconSVGAnim>
        <ul className="icon-font-demo-ul">
          <li>
            <Button type="primary" onClick={this.onClick}>切换 ICON</Button>
          </li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById('__react-content'));
