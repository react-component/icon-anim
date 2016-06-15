webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(277);


/***/ },

/***/ 276:
2,

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _rcIconAnim = __webpack_require__(4);
	
	var _rcIconAnim2 = _interopRequireDefault(_rcIconAnim);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(42);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _button = __webpack_require__(266);
	
	var _button2 = _interopRequireDefault(_button);
	
	__webpack_require__(272);
	
	__webpack_require__(274);
	
	__webpack_require__(276);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // use jsx to render html, do not modify iconsvg.html
	
	
	var IconSVGAnim = _rcIconAnim2.default.IconSVGAnim;
	
	var Demo = function (_React$Component) {
	  _inherits(Demo, _React$Component);
	
	  function Demo() {
	    _classCallCheck(this, Demo);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
	    ['onClick'].forEach(function (method) {
	      return _this[method] = _this[method].bind(_this);
	    });
	    _this.state = {
	      children: [_react2.default.createElement('path', { d: 'M160.5,512L863.61,512', strokeWidth: '79', key: 'a0' }), _react2.default.createElement('path', { d: 'M509.5,165.5L509.5,859.66', strokeWidth: '79', key: 'a1' })],
	      type: '+',
	      animation: [{ style: { SVGDraw: 0, opacity: 0 }, type: 'from' }, { style: { SVGDraw: 0, opacity: 0 }, delay: 100, type: 'from' }]
	    };
	    return _this;
	  }
	
	  Demo.prototype.onClick = function onClick() {
	    var type = void 0;
	    var children = void 0;
	    var animation = void 0;
	    if (this.state.type === '+') {
	      type = 'x';
	      children = [_react2.default.createElement('path', { d: 'M229.5,229.5 L794.5,794.5', strokeWidth: '79', key: 'b0' }), _react2.default.createElement('path', { d: 'M794.5,229.5 L229.5,794.5', strokeWidth: '79', key: 'b1' })];
	      animation = [{ d: 'M229.5,229.5L794.5,794.5', ease: 'easeOutBack' }, { d: 'M794.5,229.5L229.5,794.5', ease: 'easeOutBack', delay: 100 }];
	    } else {
	      type = '+';
	      children = [_react2.default.createElement('path', { d: 'M160.5,512L863.61,512', strokeWidth: '79', key: 'a0' }), _react2.default.createElement('path', { d: 'M509.5,165.5L509.5,859.66', strokeWidth: '79', key: 'a1' })];
	      animation = [{ d: 'M160.5,512L863.616699,512', ease: 'easeOutBack' }, { d: 'M509.5,165.5L509.5,859.66', ease: 'easeOutBack', delay: 100 }];
	    }
	    this.setState({ type: type, children: children, animation: animation });
	  };
	
	  Demo.prototype.render = function render() {
	    var style = 'path{\n          transform-origin: center;\n        }\n        #qrcode{\n          text-align: center;\n        }';
	    return _react2.default.createElement(
	      'div',
	      { style: { height: 300, margin: 20, textAlign: 'center' } },
	      _react2.default.createElement(
	        'style',
	        null,
	        style
	      ),
	      _react2.default.createElement(
	        IconSVGAnim,
	        {
	          className: 'icon-svg',
	          animation: this.state.animation
	        },
	        this.state.children
	      ),
	      _react2.default.createElement(
	        'ul',
	        { className: 'icon-font-demo-ul' },
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _button2.default,
	            { type: 'primary', onClick: this.onClick },
	            '切换 ICON'
	          )
	        )
	      )
	    );
	  };
	
	  return Demo;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=iconSVGCustom.js.map