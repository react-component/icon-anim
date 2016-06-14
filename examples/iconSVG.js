// use jsx to render html, do not modify iconsvg.html
import 'rc-icon-anim/assets/antd-iconfont.less';
import './assets/iconfont.less';
import IconAnim from 'rc-icon-anim';
import React from 'react';
import ReactDOM from 'react-dom';
import Input from 'antd/lib/input';
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
      'defaultTypeFunc',
      'changeTypeFunc',
    ].forEach((method) => this[method] = this[method].bind(this));
    this.defalutType = 'left';
    this.changeType = 'right';
    this.state = {
      type: this.defalutType,
    };
  }

  onClick() {
    const type = this.state.type === this.defalutType ? this.changeType : this.defalutType;
    this.setState({ type });
  }

  defaultTypeFunc(e) {
    this.defalutType = e.target.value;
  }

  changeTypeFunc(e) {
    this.changeType = e.target.value;
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
        <IconSVGAnim type={this.state.type}
          animType={this.state.animType}
          className="icon-svg"
        />
        <ul className="icon-font-demo-ul">
          <li>
            icon 默认样式：
            <Input defaultValue={this.defalutType} onBlur={this.defaultTypeFunc} />
          </li>
          <li>
            icon 切换样式：
            <Input defaultValue={this.changeType} onBlur={this.changeTypeFunc} />
          </li>
          <li>
            <Button type="primary" onClick={this.onClick}>切换 ICON</Button>
          </li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById('__react-content'));
