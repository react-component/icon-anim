# rc-icon-anim
---

React IconAnim Component


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-icon-anim.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-icon-anim
[travis-image]: https://img.shields.io/travis/react-component/icon-anim.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/icon-anim
[coveralls-image]: https://img.shields.io/coveralls/react-component/icon-anim.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/icon-anim?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/icon-anim.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/icon-anim
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-icon-anim.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-icon-anim


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


## Development

```
npm install
npm start
```

## Example

http://localhost:8030/examples/


online example: http://react-component.github.io/icon-anim/


## install


[![rc-icon-anim](https://nodei.co/npm/rc-icon-anim.png)](https://npmjs.org/package/rc-icon-anim)


## Usage

## IconFontAnim 
```js
import IconAnim from 'rc-icon-anim';
const IconFontAnim = IconAnim.IconFontAnim;
React.render(<IconFontAnim type="left" />, container);
```

## IconSVGAim
```js
import IconAnim from 'rc-icon-anim';
const IconSVGAnim = IconAnim.IconSVGAnim;
React.render(<IconSVGAnim type="left" />, container);
```

## API

### IconFontAnim

|    name    |   type   |   default    |      description      |
|------------|----------|--------------|-----------------------|
|  type      | string   |  null        |  antd of icon name    |
|  appear    | bool     | true         | appear anim   |
|  animType  | string / object | `leftToRight` | animate type, provide : `alpha` `leftToRight` `rightToLeft` `scale` `scaleBack` `scaleBig` `rotate` `rotateX` `rotateY` `left3dFlip` `right3dFlip` `top3dFlip` `bottom3dFlip` `rubberBand`; <br/> if the is object: { appear, enter, leave }, appear is null, with enter; |
| component  | string / React.Element | `div` | component tag |

### IconSVGAnim 

|    name    |   type   |   default    |      description      |
|------------|----------|--------------|-----------------------|
|  type      | string   |   null       | provide: [svg](https://github.com/react-component/icon-anim/blob/master/src/svg.js)  |
|  children  | React.Element |  null   | children can not coexist with the type,  Normative References [svg](https://github.com/react-component/icon-anim/blob/master/src/svg.js) |
|  appear    |  bool  | true   | appear anim  | 
|  animType  | string | null   |  animation of a single element, provide: [animTypeSVG](https://github.com/react-component/icon-anim/blob/master/src/animTypeSVG.js) |
|  animation | array  | null   | animType of Custom, is null we will use [`scale`](https://github.com/react-component/icon-anim/blob/master/src/animTypeSVG.js#L5) |
|  viewBox   | string   | '0 0 1024 1024' | svg viewBox |