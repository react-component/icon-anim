// use jsx to render html, do not modify iconfont.html
import 'rc-icon-anim/assets/antd-iconfont.less';
import './assets/index.less';
import './assets/iconfont.less';
import IconAnim from 'rc-icon-anim';
import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import 'antd/lib/select/style';
import 'antd/lib/button/style';
const Option = Select.Option;
const IconFontAnim = IconAnim.IconFontAnim;

const animTypeData = {
  alpha: '淡入淡出',
  leftToRight: '左进右出',
  rightToLeft: '右进左出',
  scale: '缩放',
  scaleBack: '缩放弹动',
  scaleBig: '从大到小',
  rotate: '旋转切换',
  rotateX: 'X轴旋转',
  rotateY: 'Y轴旋转',
  left3dFlip: '左往右翻转切换',
  right3dFlip: '右往左翻转切换',
  top3dFlip: '上往下翻转切换',
  bottom3dFlip: '下往上翻转切换',
  rubberBand: '橡皮弹动切换',
};

class Demo extends React.Component {
  constructor() {
    super(...arguments);
    [
      'onClick',
      'onChange',
      'defaultTypeFunc',
      'changeTypeFunc',
    ].forEach((method) => this[method] = this[method].bind(this));
    this.defalutType = 'circle-o-down';
    this.changeType = 'circle-down';
    this.state = {
      type: this.defalutType,
      animType: 'rubberBand',
    };
  }

  onChange(value) {
    this.setState({ animType: value });
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
    return (
      <div style={{ height: 300, margin: 20 }}>
        <IconFontAnim type={this.state.type}
          animType={this.state.animType}
          className="icon-font"
        />
        <ul className="icon-font-demo-ul">
          <li><b> icon 样式去 <a href="http://ant.design/components/icon" target="_blank">
            antd icon
          </a> 复制</b></li>
          <li>
            icon 默认样式：
            <Input defaultValue="circle-down" onBlur={this.defaultTypeFunc} />
          </li>
          <li>
            icon 切换样式：
            <Input defaultValue="circle-o-up" onBlur={this.changeTypeFunc} />
          </li>
          <li>
            进场样式：
            <Select style={{ width: 250 }}
              placeholder="请选择"
              defaultValue={this.state.animType}
              onChange={this.onChange}
            >
              {Object.keys(animTypeData).map(key =>
                (<Option value={key} key={key}>{`${animTypeData[key]}进出-${key}`}</Option>)
              )}
            </Select>
          </li>
          <li><Button type="primary" onClick={this.onClick}>切换 ICON</Button></li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById('__react-content'));
