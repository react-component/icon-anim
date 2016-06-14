// use jsx to render html, do not modify iconsvg.html
import 'rc-icon-anim/assets/antd-iconfont.less';
import './assets/iconfont.less';
import IconAnim from 'rc-icon-anim';
import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'antd/lib/select';
import Button from 'antd/lib/button';
import 'antd/lib/select/style';
import 'antd/lib/button/style';
import './assets/iconsvg.less';
const IconSVGAnim = IconAnim.IconSVGAnim;
const Option = Select.Option;

const typeData = {
  'cross-check': 'cross与check',
  'up-down': 'up与down',
  'left-right': 'left与right',
  'plus-cross': 'plus与cross',
  'doubleleft-doubleright': 'doubleleft与doubleright',
  'caretdown-caretup': 'caretdown与caretup',
  'caretleft-caretright': 'caretleft与caretright',
};

class Demo extends React.Component {
  constructor() {
    super(...arguments);
    [
      'onClick',
      'onChange',
    ].forEach((method) => this[method] = this[method].bind(this));
    this.defalutType = 'caretleft';
    this.changeType = 'caretright';
    this.state = {
      type: this.defalutType,
    };
  }

  onClick() {
    const type = this.state.type === this.defalutType ? this.changeType : this.defalutType;
    this.setState({ type });
  }

  onChange(value) {
    const d = value.split('-');
    this.defalutType = d[0];
    this.changeType = d[1];
    this.setState({
      type: this.defalutType,
    });
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
          className="icon-svg"
        />
        <ul className="icon-font-demo-ul">
          <li>
            icon 样式：
            <Select style={{ width: 250 }}
              placeholder="请选择"
              defaultValue={`${this.defalutType}to${this.changeType}`}
              onChange={this.onChange}
            >
              {Object.keys(typeData).map(key =>
                (<Option value={key} key={key}>{`${typeData[key]}切换`}</Option>)
              )}
            </Select>
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
