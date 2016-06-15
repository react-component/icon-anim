/* eslint no-console:0 */
import React from 'react';
import ReactDom from 'react-dom';
import IconAnim from '../index';
import expect from 'expect.js';
import TestUtils from 'react-addons-test-utils';
const IconFontAnim = IconAnim.IconFontAnim;
describe('icon-font', () => {
  let div;
  let instance;

  function createIconFontAnim(props) {
    class IconFontAnimDemo extends React.Component {
      constructor() {
        super(...arguments);
        this.state = {
          type: this.props.type || 'left',
          animType: this.props.animType,
        };
      }

      render() {
        return (
          <IconFontAnim type={this.state.type} animType={this.state.animType} />
        );
      }
    }
    IconFontAnimDemo.propTypes = {
      type: React.PropTypes.string,
      animType: React.PropTypes.any,
    };
    return ReactDom.render(<IconFontAnimDemo {...props} />, div);
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

  it('single icon-font-anim', () => {
    instance = createIconFontAnim({
      type: 'left',
      appear: false,
    });
    const child = TestUtils.findRenderedDOMComponentWithTag(instance, 'div');
    expect(!!child.children[0].className.indexOf('left')).to.be(true);
  });
  it('icon-font-anim left to right', (done) => {
    instance = createIconFontAnim({
      type: 'left',
    });
    const child = TestUtils.findRenderedDOMComponentWithTag(instance, 'div');
    console.log(child.children[0].className);
    expect(!!child.children[0].className.indexOf('left')).to.be(true);
    instance.setState({ type: 'right' });
    setTimeout(() => {
      console.log(child.children[0].className);
      expect(!!child.children[0].className.indexOf('right')).to.be(true);
      done();
    }, 500);
  });
  it('icon-font-anim animType', (done) => {
    instance = createIconFontAnim({
      type: 'left',
      animType: 'rubberBand',
    });
    const child = TestUtils.findRenderedDOMComponentWithTag(instance, 'div');
    console.log(child.children[0].className);
    expect(!!child.children[0].className.indexOf('left')).to.be(true);
    setTimeout(() => {
      instance.setState({ type: 'right', animType: 'bottom3dFlip' });
      setTimeout(() => {
        console.log(child.children[0].className);
        expect(!!child.children[0].className.indexOf('right')).to.be(true);
        done();
      }, 500);
    }, 650);
  });
});
