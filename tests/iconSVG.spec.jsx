/* eslint no-console:0 */
import React from 'react';
import ReactDom from 'react-dom';
import IconAnim from '../index';
import expect from 'expect.js';
import TestUtils from 'react-addons-test-utils';
const IconSVGAnim = IconAnim.IconSVGAnim;
describe('icon-svg', () => {
  let div;
  let instance;

  function createIconFontAnim(props) {
    class IconSVGAnimDemo extends React.Component {
      constructor() {
        super(...arguments);
        this.state = {
          type: this.props.type,
          children: this.props.children,
          animation: this.props.animation,
        };
      }

      render() {
        return (
          <IconSVGAnim animation={this.state.animation}
            type={this.state.type}
          >
            {this.state.children}
          </IconSVGAnim>
        );
      }
    }
    IconSVGAnimDemo.propTypes = {
      type: React.PropTypes.string,
      animation: React.PropTypes.array,
      children: React.PropTypes.any,
    };
    return ReactDom.render(<IconSVGAnimDemo {...props} />, div);
  }

  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  afterEach(() => {
    try {
      ReactDom.unmountComponentAtNode(div);
      document.body.removeChild(div);
    } catch (e) {
      console.log(e);
    }
  });

  it('single icon-svg-anim', () => {
    instance = createIconFontAnim({
      type: 'left',
      appear: false,
    });
    const child = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'path');
    console.log(`child path length: ${child.length}`);
    expect(child.length).to.be(2);
  });

  it('icon-svg-anim default animType is scale', (done) => {
    instance = createIconFontAnim({
      type: 'left',
    });
    setTimeout(() => {
      const child = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'path');
      console.log(child[0].style);
      const scale = child[0].style.transform.split('scale(')[1].split(')')[0].split(',');
      console.log(scale);
      expect(scale.length).to.be(2);
      done();
    }, 200);
  });

  it('icon-svg-anim change type', (done) => {
    instance = createIconFontAnim({
      type: 'left',
    });
    setTimeout(() => {
      instance.setState({ type: 'doubleleft' });
      setTimeout(() => {
        const child = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'path');
        console.log(`left to doubleleft length is: ${child.length}`);
        expect(child.length).to.be(4);
        done();
      }, 100);
    }, 500);
  });

  it('icon-svg-anim children change', (done) => {
    instance = createIconFontAnim({
      children: [
        <path d="M300,510L725,172" strokeWidth="87" key="a0" />,
        <path d="M300,510L725,852" strokeWidth="87" key="a1" />,
      ],
    });
    let child = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'path');
    expect(child.length).to.be(2);
    setTimeout(() => {
      instance.setState({
        children: [
          <path d="M136,510 L559,172" strokeWidth="87" key="b0" />,
          <path d="M136,510 L559,852" strokeWidth="87" key="b1" />,
          <path d="M466,510 L889,172" strokeWidth="87" key="b2" />,
          <path d="M466,510 L889,852" strokeWidth="87" key="b3" />,
        ],
      });
      child = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'path');
      expect(child.length).to.be(4);
      done();
    }, 500);
  });

  it('icon-svg-anim animation', (done) => {
    instance = createIconFontAnim({
      type: 'left',
      animation: [
        { style: { left: 100 }, type: 'from' },
        { style: { left: 100 }, type: 'from' },
      ],
    });
    let child = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'path');
    console.log(child[0].style.left);
    expect(parseFloat(child[0].style.left)).to.be(100);
    setTimeout(() => {
      child = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'path');
      console.log(child[0].style.left);
      expect(parseFloat(child[0].style.left)).to.be(0);
      instance.setState({
        type: 'right',
        animation: [
          { style: { top: 100 } },
          { style: { top: 100 } },
        ],
      });
      console.log(child[0].style.top);
      expect(parseFloat(child[0].style.top)).to.be(0);
      setTimeout(() => {
        child = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'path');
        console.log(child[0].style.top);
        expect(parseFloat(child[0].style.top)).to.be(100);
        done();
      }, 500);
    }, 500);
  });
});
