var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by tommyZZM on 2015/7/16.
	 */
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _viewAppJs = __webpack_require__(3);
	
	var _viewAppJs2 = _interopRequireDefault(_viewAppJs);
	
	var _coreSampleManagerJs = __webpack_require__(29);
	
	var _coreSampleManagerJs2 = _interopRequireDefault(_coreSampleManagerJs);
	
	var _coreAnimationManagerJs = __webpack_require__(43);
	
	var _coreAnimationManagerJs2 = _interopRequireDefault(_coreAnimationManagerJs);
	
	var _viewContentSampleFieldJs = __webpack_require__(40);
	
	var _viewContentSampleFieldJs2 = _interopRequireDefault(_viewContentSampleFieldJs);
	
	var Main = function Main() {
	    _classCallCheck(this, Main);
	
	    _react2['default'].render(_react2['default'].createElement(_viewAppJs2['default'], null), document.getElementById("app")); //
	};
	
	var app;
	module.exports = {
	    launch: function launch() {
	        if (app instanceof Main) return;
	        app = new Main();
	    },
	    SampleField: _viewContentSampleFieldJs2['default'],
	    AnimationManager: _coreAnimationManagerJs2['default']
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = window.React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/4.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _layoutHeaderJs = __webpack_require__(4);
	
	var _layoutHeaderJs2 = _interopRequireDefault(_layoutHeaderJs);
	
	var _layoutBodyJs = __webpack_require__(5);
	
	var _layoutBodyJs2 = _interopRequireDefault(_layoutBodyJs);
	
	var _layoutFooterJs = __webpack_require__(42);
	
	var _layoutFooterJs2 = _interopRequireDefault(_layoutFooterJs);
	
	var _coreSampleManagerJs = __webpack_require__(29);
	
	var _coreSampleManagerJs2 = _interopRequireDefault(_coreSampleManagerJs);
	
	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        var _this = this;
	
	        _classCallCheck(this, App);
	
	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
	
	        this.state = this.initializeState;
	        _coreSampleManagerJs2['default'].addListener(_coreSampleManagerJs2['default'].CONFIG_LOADED, this.onSampleConfigReady.bind(this));
	        _coreSampleManagerJs2['default'].addListener(_coreSampleManagerJs2['default'].TOGGLE_TO_SAMPLE, this.onSampleToggle.bind(this));
	
	        window.addEventListener('resize', function () {
	            if (_this.isMount) {
	                _this.onResize();
	            }
	        });
	    }
	
	    _createClass(App, [{
	        key: 'onResize',
	        //当前例子
	        value: function onResize() {
	            if (this.state.style.minHeight !== window.innerHeight - 16) {
	                this.setState({
	                    style: {
	                        minHeight: window.innerHeight - 16 //document margin
	                    }
	                });
	            }
	        }
	    }, {
	        key: 'onSampleConfigReady',
	        value: function onSampleConfigReady() {
	            this.setState({
	                samplesData: _coreSampleManagerJs2['default'].samplesData
	            });
	        }
	    }, {
	        key: 'onSampleToggle',
	        value: function onSampleToggle(e) {
	            this.setState({
	                sampleCurr: e.sample
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.isMount = true;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.isMount = false;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            //this.state.windowResized = true;
	            var app = _react2['default'].createElement(
	                'div',
	                { className: 'row' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-md-10 pull-center paper', style: this.state.style },
	                    _react2['default'].createElement(_layoutHeaderJs2['default'], null),
	                    _react2['default'].createElement(_layoutBodyJs2['default'], { sampleCurr: this.state.sampleCurr, samplesData: this.state.samplesData }),
	                    _react2['default'].createElement(_layoutFooterJs2['default'], null)
	                )
	            );
	            return app;
	        }
	    }, {
	        key: 'initializeState',
	        get: function get() {
	            return {
	                style: {
	                    minHeight: window.innerHeight - 16 //document margin
	                },
	                samplesData: null,
	                sampleCurr: null };
	        }
	    }]);
	
	    return App;
	})(_react2['default'].Component);
	
	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/7.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Header = (function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header() {
	        _classCallCheck(this, Header);
	
	        _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'header',
	                null,
	                _react2['default'].createElement(
	                    'h1',
	                    null,
	                    'title'
	                )
	            );
	        }
	    }]);
	
	    return Header;
	})(_react2['default'].Component);
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/7.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(6);
	
	var _incContentJs = __webpack_require__(7);
	
	var _incContentJs2 = _interopRequireDefault(_incContentJs);
	
	var _incSideBarJs = __webpack_require__(41);
	
	var _incSideBarJs2 = _interopRequireDefault(_incSideBarJs);
	
	var Body = (function (_React$Component) {
	    _inherits(Body, _React$Component);
	
	    function Body() {
	        _classCallCheck(this, Body);
	
	        _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Body, [{
	        key: 'render',
	        value: function render() {
	            var _this = this;
	
	            return _react2['default'].createElement(
	                'div',
	                { className: 'body' },
	                _react2['default'].createElement(_incContentJs2['default'], { sampleContent: this.props.sampleCurr }),
	                _react2['default'].createElement(_incSideBarJs2['default'], { samplesList: (function () {
	                        if (_this.props.samplesData && Array.isArray(_this.props.samplesData.posts)) {
	                            return _this.props.samplesData.posts;
	                        } else {
	                            return [];
	                        }
	                    })() })
	            );
	        }
	    }]);
	
	    return Body;
	})(_react2['default'].Component);
	
	exports['default'] = Body;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = window.ReactBootstrap;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/8.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(6);
	
	var _commonmark = __webpack_require__(8);
	
	var Commonmark = _interopRequireWildcard(_commonmark);
	
	var _contentSampleRendererJs = __webpack_require__(28);
	
	var _contentSampleRendererJs2 = _interopRequireDefault(_contentSampleRendererJs);
	
	var _coreSampleManagerJs = __webpack_require__(29);
	
	var _coreSampleManagerJs2 = _interopRequireDefault(_coreSampleManagerJs);
	
	var Content = (function (_React$Component) {
	    _inherits(Content, _React$Component);
	
	    function Content() {
	        _classCallCheck(this, Content);
	
	        _get(Object.getPrototypeOf(Content.prototype), 'constructor', this).call(this);
	    }
	
	    _createClass(Content, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;
	
	            return _react2['default'].createElement(
	                _reactBootstrap.Col,
	                { className: 'content ', md: 8 },
	                (function () {
	                    if (_this.props.sampleContent && _this.props.sampleContent.id) {
	                        return _react2['default'].createElement(Markdown, { id: _this.props.sampleContent.id, source: _this.props.sampleContent.markdown });
	                    }
	                })()
	            );
	        }
	    }]);
	
	    return Content;
	})(_react2['default'].Component);
	
	var Markdown = (function (_React$Component2) {
	    _inherits(Markdown, _React$Component2);
	
	    function Markdown() {
	        var _this2 = this;
	
	        _classCallCheck(this, Markdown);
	
	        _get(Object.getPrototypeOf(Markdown.prototype), 'constructor', this).call(this);
	        this.markPraser = new Commonmark.Parser();
	        this.markRenderer = new _contentSampleRendererJs2['default']({ sourcepos: true });
	
	        this.canvasQuery = [];
	        this.canvasDict = {};
	
	        this.markRenderer.renderHtml("canvas", function (tag, attrs) {
	            return _react2['default'].createElement(Canvas, { parent: _this2, attrs: attrs });
	        });
	    }
	
	    _createClass(Markdown, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var dict = {};
	            for (var i in this.canvasDict) {
	                dict[i] = _react2['default'].findDOMNode(this.canvasDict[i]);
	            }
	
	            var data = {
	                canvas: {
	                    query: this.canvasQuery.map(function (canvas) {
	                        return _react2['default'].findDOMNode(canvas);
	                    }),
	                    dirct: dict
	                }
	            };
	            _coreSampleManagerJs2['default'].readySample(this.props.id, data);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (typeof this.props.source === "string") {
	                var ast = this.markPraser.parse(this.props.source || '');
	                var elements = this.markRenderer.render(ast);
	
	                return _react2['default'].createElement.apply(_react2['default'], ["div", { className: "markdown" }].concat(elements));
	            } else {
	                return _react2['default'].createElement('div', { className: 'noop' });
	            }
	        }
	    }]);
	
	    return Markdown;
	})(_react2['default'].Component);
	
	var Canvas = (function (_React$Component3) {
	    _inherits(Canvas, _React$Component3);
	
	    function Canvas() {
	        _classCallCheck(this, Canvas);
	
	        _get(Object.getPrototypeOf(Canvas.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Canvas, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var parent = this.props.parent;
	            var canvas = _react2['default'].findDOMNode(this);
	            parent.canvasQuery.push(canvas);
	            if (this.props.attrs.name) parent.canvasDict[this.props.attrs.name] = canvas;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement("canvas", this.props.attrs);
	        }
	    }]);
	
	    return Canvas;
	})(_react2['default'].Component);
	
	exports['default'] = Content;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// commonmark.js - CommomMark in JavaScript
	// Copyright (C) 2014 John MacFarlane
	// License: BSD3.
	
	// Basic usage:
	//
	// var commonmark = require('commonmark');
	// var parser = new commonmark.Parser();
	// var renderer = new commonmark.HtmlRenderer();
	// console.log(renderer.render(parser.parse('Hello *world*')));
	
	module.exports.Node = __webpack_require__(9);
	module.exports.Parser = __webpack_require__(10);
	module.exports.HtmlRenderer = __webpack_require__(26);
	module.exports.XmlRenderer = __webpack_require__(27);


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	function isContainer(node) {
	    switch (node._type) {
	    case 'Document':
	    case 'BlockQuote':
	    case 'List':
	    case 'Item':
	    case 'Paragraph':
	    case 'Header':
	    case 'Emph':
	    case 'Strong':
	    case 'Link':
	    case 'Image':
	        return true;
	    default:
	        return false;
	    }
	}
	
	var resumeAt = function(node, entering) {
	    this.current = node;
	    this.entering = (entering === true);
	};
	
	var next = function(){
	    var cur = this.current;
	    var entering = this.entering;
	
	    if (cur === null) {
	        return null;
	    }
	
	    var container = isContainer(cur);
	
	    if (entering && container) {
	        if (cur._firstChild) {
	            this.current = cur._firstChild;
	            this.entering = true;
	        } else {
	            // stay on node but exit
	            this.entering = false;
	        }
	
	    } else if (cur === this.root) {
	        this.current = null;
	
	    } else if (cur._next === null) {
	        this.current = cur._parent;
	        this.entering = false;
	
	    } else {
	        this.current = cur._next;
	        this.entering = true;
	    }
	
	    return {entering: entering, node: cur};
	};
	
	var NodeWalker = function(root) {
	    return { current: root,
	             root: root,
	             entering: true,
	             next: next,
	             resumeAt: resumeAt };
	};
	
	var Node = function(nodeType, sourcepos) {
	    this._type = nodeType;
	    this._parent = null;
	    this._firstChild = null;
	    this._lastChild = null;
	    this._prev = null;
	    this._next = null;
	    this._sourcepos = sourcepos;
	    this._lastLineBlank = false;
	    this._open = true;
	    this._string_content = null;
	    this._literal = null;
	    this._listData = null;
	    this._info = null;
	    this._destination = null;
	    this._title = null;
	    this._isFenced = false;
	    this._fenceChar = null;
	    this._fenceLength = 0;
	    this._fenceOffset = null;
	    this._level = null;
	};
	
	var proto = Node.prototype;
	
	Object.defineProperty(proto, 'isContainer', {
	    get: function () { return isContainer(this); }
	});
	
	Object.defineProperty(proto, 'type', {
	    get: function() { return this._type; }
	});
	
	Object.defineProperty(proto, 'firstChild', {
	    get: function() { return this._firstChild; }
	});
	
	Object.defineProperty(proto, 'lastChild', {
	    get: function() { return this._lastChild; }
	});
	
	Object.defineProperty(proto, 'next', {
	    get: function() { return this._next; }
	});
	
	Object.defineProperty(proto, 'prev', {
	    get: function() { return this._prev; }
	});
	
	Object.defineProperty(proto, 'parent', {
	    get: function() { return this._parent; }
	});
	
	Object.defineProperty(proto, 'sourcepos', {
	    get: function() { return this._sourcepos; }
	});
	
	Object.defineProperty(proto, 'literal', {
	    get: function() { return this._literal; },
	    set: function(s) { this._literal = s; }
	});
	
	Object.defineProperty(proto, 'destination', {
	    get: function() { return this._destination; },
	    set: function(s) { this._destination = s; }
	});
	
	Object.defineProperty(proto, 'title', {
	    get: function() { return this._title; },
	    set: function(s) { this._title = s; }
	});
	
	Object.defineProperty(proto, 'info', {
	    get: function() { return this._info; },
	    set: function(s) { this._info = s; }
	});
	
	Object.defineProperty(proto, 'level', {
	    get: function() { return this._level; },
	    set: function(s) { this._level = s; }
	});
	
	Object.defineProperty(proto, 'listType', {
	    get: function() { return this._listData.type; },
	    set: function(t) { this._listData.type = t; }
	});
	
	Object.defineProperty(proto, 'listTight', {
	    get: function() { return this._listData.tight; },
	    set: function(t) { this._listData.tight = t; }
	});
	
	Object.defineProperty(proto, 'listStart', {
	    get: function() { return this._listData.start; },
	    set: function(n) { this._listData.start = n; }
	});
	
	Object.defineProperty(proto, 'listDelimiter', {
	    get: function() { return this._listData.delimiter; },
	    set: function(delim) { this._listData.delimiter = delim; }
	});
	
	Node.prototype.appendChild = function(child) {
	    child.unlink();
	    child._parent = this;
	    if (this._lastChild) {
	        this._lastChild._next = child;
	        child._prev = this._lastChild;
	        this._lastChild = child;
	    } else {
	        this._firstChild = child;
	        this._lastChild = child;
	    }
	};
	
	Node.prototype.prependChild = function(child) {
	    child.unlink();
	    child._parent = this;
	    if (this._firstChild) {
	        this._firstChild._prev = child;
	        child._next = this._firstChild;
	        this._firstChild = child;
	    } else {
	        this._firstChild = child;
	        this._lastChild = child;
	    }
	};
	
	Node.prototype.unlink = function() {
	    if (this._prev) {
	        this._prev._next = this._next;
	    } else if (this._parent) {
	        this._parent._firstChild = this._next;
	    }
	    if (this._next) {
	        this._next._prev = this._prev;
	    } else if (this._parent) {
	        this._parent._lastChild = this._prev;
	    }
	    this._parent = null;
	    this._next = null;
	    this._prev = null;
	};
	
	Node.prototype.insertAfter = function(sibling) {
	    sibling.unlink();
	    sibling._next = this._next;
	    if (sibling._next) {
	        sibling._next._prev = sibling;
	    }
	    sibling._prev = this;
	    this._next = sibling;
	    sibling._parent = this._parent;
	    if (!sibling._next) {
	        sibling._parent._lastChild = sibling;
	    }
	};
	
	Node.prototype.insertBefore = function(sibling) {
	    sibling.unlink();
	    sibling._prev = this._prev;
	    if (sibling._prev) {
	        sibling._prev._next = sibling;
	    }
	    sibling._next = this;
	    this._prev = sibling;
	    sibling._parent = this._parent;
	    if (!sibling._prev) {
	        sibling._parent._firstChild = sibling;
	    }
	};
	
	Node.prototype.walker = function() {
	    var walker = new NodeWalker(this);
	    return walker;
	};
	
	module.exports = Node;
	
	
	/* Example of use of walker:
	
	 var walker = w.walker();
	 var event;
	
	 while (event = walker.next()) {
	 console.log(event.entering, event.node.type);
	 }
	
	 */


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Node = __webpack_require__(9);
	var unescapeString = __webpack_require__(11).unescapeString;
	var OPENTAG = __webpack_require__(11).OPENTAG;
	var CLOSETAG = __webpack_require__(11).CLOSETAG;
	
	var CODE_INDENT = 4;
	
	var C_NEWLINE = 10;
	var C_GREATERTHAN = 62;
	var C_LESSTHAN = 60;
	var C_SPACE = 32;
	var C_OPEN_BRACKET = 91;
	
	var InlineParser = __webpack_require__(22);
	
	var reHtmlBlockOpen = [
	   /./, // dummy for 0
	   /^<(?:script|pre|style)(?:\s|>|$)/i,
	   /^<!--/,
	   /^<[?]/,
	   /^<![A-Z]/,
	   /^<!\[CDATA\[/,
	   /^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|head|header|hr|html|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|pre|section|source|title|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i,
	    new RegExp('^(?:' + OPENTAG + '|' + CLOSETAG + ')\s*$', 'i')
	];
	
	var reHtmlBlockClose = [
	   /./, // dummy for 0
	   /<\/(?:script|pre|style)>/i,
	   /-->/,
	   /\?>/,
	   />/,
	   /\]\]>/
	];
	
	var reHrule = /^(?:(?:\* *){3,}|(?:_ *){3,}|(?:- *){3,}) *$/;
	
	var reMaybeSpecial = /^[#`~*+_=<>0-9-]/;
	
	var reNonSpace = /[^ \t\f\v\r\n]/;
	
	var reBulletListMarker = /^[*+-]( +|$)/;
	
	var reOrderedListMarker = /^(\d{1,9})([.)])( +|$)/;
	
	var reATXHeaderMarker = /^#{1,6}(?: +|$)/;
	
	var reCodeFence = /^`{3,}(?!.*`)|^~{3,}(?!.*~)/;
	
	var reClosingCodeFence = /^(?:`{3,}|~{3,})(?= *$)/;
	
	var reSetextHeaderLine = /^(?:=+|-+) *$/;
	
	var reLineEnding = /\r\n|\n|\r/;
	
	// Returns true if string contains only space characters.
	var isBlank = function(s) {
	    return !(reNonSpace.test(s));
	};
	
	var peek = function(ln, pos) {
	    if (pos < ln.length) {
	        return ln.charCodeAt(pos);
	    } else {
	        return -1;
	    }
	};
	
	// DOC PARSER
	
	// These are methods of a Parser object, defined below.
	
	// Returns true if block ends with a blank line, descending if needed
	// into lists and sublists.
	var endsWithBlankLine = function(block) {
	    while (block) {
	        if (block._lastLineBlank) {
	            return true;
	        }
	        var t = block.type;
	        if (t === 'List' || t === 'Item') {
	            block = block._lastChild;
	        } else {
	            break;
	        }
	    }
	    return false;
	};
	
	// Break out of all containing lists, resetting the tip of the
	// document to the parent of the highest list, and finalizing
	// all the lists.  (This is used to implement the "two blank lines
	// break of of all lists" feature.)
	var breakOutOfLists = function(block) {
	    var b = block;
	    var last_list = null;
	    do {
	        if (b.type === 'List') {
	            last_list = b;
	        }
	        b = b._parent;
	    } while (b);
	
	    if (last_list) {
	        while (block !== last_list) {
	            this.finalize(block, this.lineNumber);
	            block = block._parent;
	        }
	        this.finalize(last_list, this.lineNumber);
	        this.tip = last_list._parent;
	    }
	};
	
	// Add a line to the block at the tip.  We assume the tip
	// can accept lines -- that check should be done before calling this.
	var addLine = function() {
	    this.tip._string_content += this.currentLine.slice(this.offset) + '\n';
	};
	
	// Add block of type tag as a child of the tip.  If the tip can't
	// accept children, close and finalize it and try its parent,
	// and so on til we find a block that can accept children.
	var addChild = function(tag, offset) {
	    while (!this.blocks[this.tip.type].canContain(tag)) {
	        this.finalize(this.tip, this.lineNumber - 1);
	    }
	
	    var column_number = offset + 1; // offset 0 = column 1
	    var newBlock = new Node(tag, [[this.lineNumber, column_number], [0, 0]]);
	    newBlock._string_content = '';
	    this.tip.appendChild(newBlock);
	    this.tip = newBlock;
	    return newBlock;
	};
	
	// Parse a list marker and return data on the marker (type,
	// start, delimiter, bullet character, padding) or null.
	var parseListMarker = function(ln, offset, indent) {
	    var rest = ln.slice(offset);
	    var match;
	    var spaces_after_marker;
	    var data = { type: null,
	                 tight: true,  // lists are tight by default
	                 bulletChar: null,
	                 start: null,
	                 delimiter: null,
	                 padding: null,
	                 markerOffset: indent };
	    if ((match = rest.match(reBulletListMarker))) {
	        spaces_after_marker = match[1].length;
	        data.type = 'Bullet';
	        data.bulletChar = match[0][0];
	
	    } else if ((match = rest.match(reOrderedListMarker))) {
	        spaces_after_marker = match[3].length;
	        data.type = 'Ordered';
	        data.start = parseInt(match[1]);
	        data.delimiter = match[2];
	    } else {
	        return null;
	    }
	    var blank_item = match[0].length === rest.length;
	    if (spaces_after_marker >= 5 ||
	        spaces_after_marker < 1 ||
	        blank_item) {
	        data.padding = match[0].length - spaces_after_marker + 1;
	    } else {
	        data.padding = match[0].length;
	    }
	    return data;
	};
	
	// Returns true if the two list items are of the same type,
	// with the same delimiter and bullet character.  This is used
	// in agglomerating list items into lists.
	var listsMatch = function(list_data, item_data) {
	    return (list_data.type === item_data.type &&
	            list_data.delimiter === item_data.delimiter &&
	            list_data.bulletChar === item_data.bulletChar);
	};
	
	// Finalize and close any unmatched blocks. Returns true.
	var closeUnmatchedBlocks = function() {
	    if (!this.allClosed) {
	        // finalize any blocks not matched
	        while (this.oldtip !== this.lastMatchedContainer) {
	            var parent = this.oldtip._parent;
	            this.finalize(this.oldtip, this.lineNumber - 1);
	            this.oldtip = parent;
	        }
	        this.allClosed = true;
	    }
	};
	
	// 'finalize' is run when the block is closed.
	// 'continue' is run to check whether the block is continuing
	// at a certain line and offset (e.g. whether a block quote
	// contains a `>`.  It returns 0 for matched, 1 for not matched,
	// and 2 for "we've dealt with this line completely, go to next."
	var blocks = {
	    Document: {
	        continue: function() { return 0; },
	        finalize: function() { return; },
	        canContain: function(t) { return (t !== 'Item'); },
	        acceptsLines: false
	    },
	    List: {
	        continue: function() { return 0; },
	        finalize: function(parser, block) {
	            var item = block._firstChild;
	            while (item) {
	                // check for non-final list item ending with blank line:
	                if (endsWithBlankLine(item) && item._next) {
	                    block._listData.tight = false;
	                    break;
	                }
	                // recurse into children of list item, to see if there are
	                // spaces between any of them:
	                var subitem = item._firstChild;
	                while (subitem) {
	                    if (endsWithBlankLine(subitem) &&
	                        (item._next || subitem._next)) {
	                        block._listData.tight = false;
	                        break;
	                    }
	                    subitem = subitem._next;
	                }
	                item = item._next;
	            }
	        },
	        canContain: function(t) { return (t === 'Item'); },
	        acceptsLines: false
	    },
	    BlockQuote: {
	        continue: function(parser) {
	            var ln = parser.currentLine;
	            if (!parser.indented &&
	                peek(ln, parser.nextNonspace) === C_GREATERTHAN) {
	                parser.advanceNextNonspace();
	                parser.advanceOffset(1, false);
	                if (peek(ln, parser.offset) === C_SPACE) {
	                    parser.offset++;
	                }
	            } else {
	                return 1;
	            }
	            return 0;
	        },
	        finalize: function() { return; },
	        canContain: function(t) { return (t !== 'Item'); },
	        acceptsLines: false
	    },
	    Item: {
	        continue: function(parser, container) {
	            if (parser.blank) {
	                parser.advanceNextNonspace();
	            } else if (parser.indent >=
	                       container._listData.markerOffset +
	                       container._listData.padding) {
	                parser.advanceOffset(container._listData.markerOffset +
	                    container._listData.padding, true);
	            } else {
	                return 1;
	            }
	            return 0;
	        },
	        finalize: function() { return; },
	        canContain: function(t) { return (t !== 'Item'); },
	        acceptsLines: false
	    },
	    Header: {
	        continue: function() {
	            // a header can never container > 1 line, so fail to match:
	            return 1;
	        },
	        finalize: function() { return; },
	        canContain: function() { return false; },
	        acceptsLines: false
	    },
	    HorizontalRule: {
	        continue: function() {
	            // an hrule can never container > 1 line, so fail to match:
	            return 1;
	        },
	        finalize: function() { return; },
	        canContain: function() { return false; },
	        acceptsLines: false
	    },
	    CodeBlock: {
	        continue: function(parser, container) {
	            var ln = parser.currentLine;
	            var indent = parser.indent;
	            if (container._isFenced) { // fenced
	                var match = (indent <= 3 &&
	                    ln.charAt(parser.nextNonspace) === container._fenceChar &&
	                    ln.slice(parser.nextNonspace).match(reClosingCodeFence));
	                if (match && match[0].length >= container._fenceLength) {
	                    // closing fence - we're at end of line, so we can return
	                    parser.finalize(container, parser.lineNumber);
	                    return 2;
	                } else {
	                    // skip optional spaces of fence offset
	                    var i = container._fenceOffset;
	                    while (i > 0 && peek(ln, parser.offset) === C_SPACE) {
	                        parser.advanceOffset(1, false);
	                        i--;
	                    }
	                }
	            } else { // indented
	                if (indent >= CODE_INDENT) {
	                    parser.advanceOffset(CODE_INDENT, true);
	                } else if (parser.blank) {
	                    parser.advanceNextNonspace();
	                } else {
	                    return 1;
	                }
	            }
	            return 0;
	        },
	        finalize: function(parser, block) {
	            if (block._isFenced) { // fenced
	                // first line becomes info string
	                var content = block._string_content;
	                var newlinePos = content.indexOf('\n');
	                var firstLine = content.slice(0, newlinePos);
	                var rest = content.slice(newlinePos + 1);
	                block.info = unescapeString(firstLine.trim());
	                block._literal = rest;
	            } else { // indented
	                block._literal = block._string_content.replace(/(\n *)+$/, '\n');
	            }
	            block._string_content = null; // allow GC
	        },
	        canContain: function() { return false; },
	        acceptsLines: true
	    },
	    HtmlBlock: {
	        continue: function(parser, container) {
	            return ((parser.blank &&
	                     (container._htmlBlockType === 6 ||
	                      container._htmlBlockType === 7)) ? 1 : 0);
	        },
	        finalize: function(parser, block) {
	            block._literal = block._string_content.replace(/(\n *)+$/, '');
	            block._string_content = null; // allow GC
	        },
	        canContain: function() { return false; },
	        acceptsLines: true
	    },
	    Paragraph: {
	        continue: function(parser) {
	            return (parser.blank ? 1 : 0);
	        },
	        finalize: function(parser, block) {
	            var pos;
	            var hasReferenceDefs = false;
	
	            // try parsing the beginning as link reference definitions:
	            while (peek(block._string_content, 0) === C_OPEN_BRACKET &&
	                   (pos =
	                    parser.inlineParser.parseReference(block._string_content,
	                                                       parser.refmap))) {
	                block._string_content = block._string_content.slice(pos);
	                hasReferenceDefs = true;
	            }
	            if (hasReferenceDefs && isBlank(block._string_content)) {
	                block.unlink();
	            }
	        },
	        canContain: function() { return false; },
	        acceptsLines: true
	    }
	};
	
	// block start functions.  Return values:
	// 0 = no match
	// 1 = matched container, keep going
	// 2 = matched leaf, no more block starts
	var blockStarts = [
	    // block quote
	    function(parser) {
	        if (!parser.indented &&
	            peek(parser.currentLine, parser.nextNonspace) === C_GREATERTHAN) {
	            parser.advanceNextNonspace();
	            parser.advanceOffset(1, false);
	            // optional following space
	            if (peek(parser.currentLine, parser.offset) === C_SPACE) {
	                parser.advanceOffset(1, false);
	            }
	            parser.closeUnmatchedBlocks();
	            parser.addChild('BlockQuote', parser.nextNonspace);
	            return 1;
	        } else {
	            return 0;
	        }
	    },
	
	    // ATX header
	    function(parser) {
	        var match;
	        if (!parser.indented &&
	            (match = parser.currentLine.slice(parser.nextNonspace).match(reATXHeaderMarker))) {
	            parser.advanceNextNonspace();
	            parser.advanceOffset(match[0].length, false);
	            parser.closeUnmatchedBlocks();
	            var container = parser.addChild('Header', parser.nextNonspace);
	            container.level = match[0].trim().length; // number of #s
	            // remove trailing ###s:
	            container._string_content =
	                parser.currentLine.slice(parser.offset).replace(/^ *#+ *$/, '').replace(/ +#+ *$/, '');
	            parser.advanceOffset(parser.currentLine.length - parser.offset);
	            return 2;
	        } else {
	            return 0;
	        }
	    },
	
	    // Fenced code block
	    function(parser) {
	        var match;
	        if (!parser.indented &&
	            (match = parser.currentLine.slice(parser.nextNonspace).match(reCodeFence))) {
	            var fenceLength = match[0].length;
	            parser.closeUnmatchedBlocks();
	            var container = parser.addChild('CodeBlock', parser.nextNonspace);
	            container._isFenced = true;
	            container._fenceLength = fenceLength;
	            container._fenceChar = match[0][0];
	            container._fenceOffset = parser.indent;
	            parser.advanceNextNonspace();
	            parser.advanceOffset(fenceLength, false);
	            return 2;
	        } else {
	            return 0;
	        }
	    },
	
	    // HTML block
	    function(parser, container) {
	        if (!parser.indented &&
	            peek(parser.currentLine, parser.nextNonspace) === C_LESSTHAN) {
	            var s = parser.currentLine.slice(parser.nextNonspace);
	            var blockType;
	
	            for (blockType = 1; blockType <= 7; blockType++) {
	                if (reHtmlBlockOpen[blockType].test(s) &&
	                    (blockType < 7 ||
	                     container.type !== 'Paragraph')) {
	                    parser.closeUnmatchedBlocks();
	                    // We don't adjust parser.offset;
	                    // spaces are part of the HTML block:
	                    var b = parser.addChild('HtmlBlock',
	                                            parser.offset);
	                    b._htmlBlockType = blockType;
	                    return 2;
	                }
	            }
	        }
	
	        return 0;
	
	    },
	
	    // Setext header
	    function(parser, container) {
	        var match;
	        if (!parser.indented &&
	            container.type === 'Paragraph' &&
	                   (container._string_content.indexOf('\n') ===
	                      container._string_content.length - 1) &&
	                   ((match = parser.currentLine.slice(parser.nextNonspace).match(reSetextHeaderLine)))) {
	            parser.closeUnmatchedBlocks();
	            var header = new Node('Header', container.sourcepos);
	            header.level = match[0][0] === '=' ? 1 : 2;
	            header._string_content = container._string_content;
	            container.insertAfter(header);
	            container.unlink();
	            parser.tip = header;
	            parser.advanceOffset(parser.currentLine.length - parser.offset, false);
	            return 2;
	        } else {
	            return 0;
	        }
	    },
	
	    // hrule
	    function(parser) {
	        if (!parser.indented &&
	            reHrule.test(parser.currentLine.slice(parser.nextNonspace))) {
	            parser.closeUnmatchedBlocks();
	            parser.addChild('HorizontalRule', parser.nextNonspace);
	            parser.advanceOffset(parser.currentLine.length - parser.offset, false);
	            return 2;
	        } else {
	            return 0;
	        }
	    },
	
	    // list item
	    function(parser, container) {
	        var data;
	        var i;
	        if ((data = parseListMarker(parser.currentLine,
	                                    parser.nextNonspace, parser.indent))) {
	            parser.closeUnmatchedBlocks();
	            if (parser.indented && parser.tip.type !== 'List') {
	                return 0;
	            }
	            parser.advanceNextNonspace();
	            // recalculate data.padding, taking into account tabs:
	            i = parser.column;
	            parser.advanceOffset(data.padding, false);
	            data.padding = parser.column - i;
	
	            // add the list if needed
	            if (parser.tip.type !== 'List' ||
	                !(listsMatch(container._listData, data))) {
	                container = parser.addChild('List', parser.nextNonspace);
	                container._listData = data;
	            }
	
	            // add the list item
	            container = parser.addChild('Item', parser.nextNonspace);
	            container._listData = data;
	            return 1;
	        } else {
	            return 0;
	        }
	    },
	
	    // indented code block
	    function(parser) {
	        if (parser.indented &&
	            parser.tip.type !== 'Paragraph' &&
	            !parser.blank) {
	            // indented code
	            parser.advanceOffset(CODE_INDENT, true);
	            parser.closeUnmatchedBlocks();
	            parser.addChild('CodeBlock', parser.offset);
	            return 2;
	        } else {
	            return 0;
	        }
	     }
	
	];
	
	var advanceOffset = function(count, columns) {
	    var i = 0;
	    var cols = 0;
	    var currentLine = this.currentLine;
	    while (columns ? (cols < count) : (i < count)) {
	        if (currentLine[this.offset + i] === '\t') {
	            cols += (4 - (this.column % 4));
	        } else {
	            cols += 1;
	        }
	        i++;
	    }
	    this.offset += i;
	    this.column += cols;
	};
	
	var advanceNextNonspace = function() {
	    this.offset = this.nextNonspace;
	    this.column = this.nextNonspaceColumn;
	};
	
	var findNextNonspace = function() {
	    var currentLine = this.currentLine;
	    var i = this.offset;
	    var cols = this.column;
	    var c;
	
	    while ((c = currentLine.charAt(i)) !== '') {
	        if (c === ' ') {
	            i++;
	            cols++;
	        } else if (c === '\t') {
	            i++;
	            cols += (4 - (cols % 4));
	        } else {
	            break;
	        }
	    }
	    this.blank = (c === '\n' || c === '\r' || c === '');
	    this.nextNonspace = i;
	    this.nextNonspaceColumn = cols;
	    this.indent = this.nextNonspaceColumn - this.column;
	    this.indented = this.indent >= CODE_INDENT;
	};
	
	// Analyze a line of text and update the document appropriately.
	// We parse markdown text by calling this on each line of input,
	// then finalizing the document.
	var incorporateLine = function(ln) {
	    var all_matched = true;
	    var t;
	
	    var container = this.doc;
	    this.oldtip = this.tip;
	    this.offset = 0;
	    this.lineNumber += 1;
	
	    // replace NUL characters for security
	    if (ln.indexOf('\u0000') !== -1) {
	        ln = ln.replace(/\0/g, '\uFFFD');
	    }
	
	    this.currentLine = ln;
	
	    // For each containing block, try to parse the associated line start.
	    // Bail out on failure: container will point to the last matching block.
	    // Set all_matched to false if not all containers match.
	    var lastChild;
	    while ((lastChild = container._lastChild) && lastChild._open) {
	        container = lastChild;
	
	        this.findNextNonspace();
	
	        switch (this.blocks[container.type].continue(this, container)) {
	        case 0: // we've matched, keep going
	            break;
	        case 1: // we've failed to match a block
	            all_matched = false;
	            break;
	        case 2: // we've hit end of line for fenced code close and can return
	            this.lastLineLength = ln.length;
	            return;
	        default:
	            throw 'continue returned illegal value, must be 0, 1, or 2';
	        }
	        if (!all_matched) {
	            container = container._parent; // back up to last matching block
	            break;
	        }
	    }
	
	    this.allClosed = (container === this.oldtip);
	    this.lastMatchedContainer = container;
	
	    // Check to see if we've hit 2nd blank line; if so break out of list:
	    if (this.blank && container._lastLineBlank) {
	        this.breakOutOfLists(container);
	    }
	
	    var matchedLeaf = container.type !== 'Paragraph' &&
	            blocks[container.type].acceptsLines;
	    var starts = this.blockStarts;
	    var startsLen = starts.length;
	    // Unless last matched container is a code block, try new container starts,
	    // adding children to the last matched container:
	    while (!matchedLeaf) {
	
	        this.findNextNonspace();
	
	        // this is a little performance optimization:
	        if (!this.indented &&
	            !reMaybeSpecial.test(ln.slice(this.nextNonspace))) {
	            this.advanceNextNonspace();
	            break;
	        }
	
	        var i = 0;
	        while (i < startsLen) {
	            var res = starts[i](this, container);
	            if (res === 1) {
	                container = this.tip;
	                break;
	            } else if (res === 2) {
	                container = this.tip;
	                matchedLeaf = true;
	                break;
	            } else {
	                i++;
	            }
	        }
	
	        if (i === startsLen) { // nothing matched
	            this.advanceNextNonspace();
	            break;
	        }
	    }
	
	    // What remains at the offset is a text line.  Add the text to the
	    // appropriate container.
	
	   // First check for a lazy paragraph continuation:
	    if (!this.allClosed && !this.blank &&
	        this.tip.type === 'Paragraph') {
	        // lazy paragraph continuation
	        this.addLine();
	
	    } else { // not a lazy continuation
	
	        // finalize any blocks not matched
	        this.closeUnmatchedBlocks();
	        if (this.blank && container.lastChild) {
	            container.lastChild._lastLineBlank = true;
	        }
	
	        t = container.type;
	
	        // Block quote lines are never blank as they start with >
	        // and we don't count blanks in fenced code for purposes of tight/loose
	        // lists or breaking out of lists.  We also don't set _lastLineBlank
	        // on an empty list item, or if we just closed a fenced block.
	        var lastLineBlank = this.blank &&
	            !(t === 'BlockQuote' ||
	              (t === 'CodeBlock' && container._isFenced) ||
	              (t === 'Item' &&
	               !container._firstChild &&
	               container.sourcepos[0][0] === this.lineNumber));
	
	        // propagate lastLineBlank up through parents:
	        var cont = container;
	        while (cont) {
	            cont._lastLineBlank = lastLineBlank;
	            cont = cont._parent;
	        }
	
	        if (this.blocks[t].acceptsLines) {
	            this.addLine();
	            // if HtmlBlock, check for end condition
	            if (t === 'HtmlBlock' &&
	                container._htmlBlockType >= 1 &&
	                container._htmlBlockType <= 5 &&
	                reHtmlBlockClose[container._htmlBlockType].test(this.currentLine.slice(this.offset))) {
	                this.finalize(container, this.lineNumber);
	            }
	
	        } else if (this.offset < ln.length && !this.blank) {
	            // create paragraph container for line
	            container = this.addChild('Paragraph', this.offset);
	            this.advanceNextNonspace();
	            this.addLine();
	        }
	    }
	    this.lastLineLength = ln.length;
	};
	
	// Finalize a block.  Close it and do any necessary postprocessing,
	// e.g. creating string_content from strings, setting the 'tight'
	// or 'loose' status of a list, and parsing the beginnings
	// of paragraphs for reference definitions.  Reset the tip to the
	// parent of the closed block.
	var finalize = function(block, lineNumber) {
	    var above = block._parent;
	    block._open = false;
	    block.sourcepos[1] = [lineNumber, this.lastLineLength];
	
	    this.blocks[block.type].finalize(this, block);
	
	    this.tip = above;
	};
	
	// Walk through a block & children recursively, parsing string content
	// into inline content where appropriate.
	var processInlines = function(block) {
	    var node, event, t;
	    var walker = block.walker();
	    this.inlineParser.refmap = this.refmap;
	    this.inlineParser.options = this.options;
	    while ((event = walker.next())) {
	        node = event.node;
	        t = node.type;
	        if (!event.entering && (t === 'Paragraph' || t === 'Header')) {
	            this.inlineParser.parse(node);
	        }
	    }
	};
	
	var Document = function() {
	    var doc = new Node('Document', [[1, 1], [0, 0]]);
	    return doc;
	};
	
	// The main parsing function.  Returns a parsed document AST.
	var parse = function(input) {
	    this.doc = new Document();
	    this.tip = this.doc;
	    this.refmap = {};
	    this.lineNumber = 0;
	    this.lastLineLength = 0;
	    this.offset = 0;
	    this.column = 0;
	    this.lastMatchedContainer = this.doc;
	    this.currentLine = "";
	    if (this.options.time) { console.time("preparing input"); }
	    var lines = input.split(reLineEnding);
	    var len = lines.length;
	    if (input.charCodeAt(input.length - 1) === C_NEWLINE) {
	        // ignore last blank line created by final newline
	        len -= 1;
	    }
	    if (this.options.time) { console.timeEnd("preparing input"); }
	    if (this.options.time) { console.time("block parsing"); }
	    for (var i = 0; i < len; i++) {
	        this.incorporateLine(lines[i]);
	    }
	    while (this.tip) {
	        this.finalize(this.tip, len);
	    }
	    if (this.options.time) { console.timeEnd("block parsing"); }
	    if (this.options.time) { console.time("inline parsing"); }
	    this.processInlines(this.doc);
	    if (this.options.time) { console.timeEnd("inline parsing"); }
	    return this.doc;
	};
	
	
	// The Parser object.
	function Parser(options){
	    return {
	        doc: new Document(),
	        blocks: blocks,
	        blockStarts: blockStarts,
	        tip: this.doc,
	        oldtip: this.doc,
	        currentLine: "",
	        lineNumber: 0,
	        offset: 0,
	        column: 0,
	        nextNonspace: 0,
	        nextNonspaceColumn: 0,
	        indent: 0,
	        indented: false,
	        blank: false,
	        allClosed: true,
	        lastMatchedContainer: this.doc,
	        refmap: {},
	        lastLineLength: 0,
	        inlineParser: new InlineParser(options),
	        findNextNonspace: findNextNonspace,
	        advanceOffset: advanceOffset,
	        advanceNextNonspace: advanceNextNonspace,
	        breakOutOfLists: breakOutOfLists,
	        addLine: addLine,
	        addChild: addChild,
	        incorporateLine: incorporateLine,
	        finalize: finalize,
	        processInlines: processInlines,
	        closeUnmatchedBlocks: closeUnmatchedBlocks,
	        parse: parse,
	        options: options || {}
	    };
	}
	
	module.exports = Parser;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var encode = __webpack_require__(12);
	var decode = __webpack_require__(13);
	
	var C_BACKSLASH = 92;
	
	var decodeHTML = __webpack_require__(14).decodeHTML;
	
	var ENTITY = "&(?:#x[a-f0-9]{1,8}|#[0-9]{1,8}|[a-z][a-z0-9]{1,31});";
	
	var TAGNAME = '[A-Za-z][A-Za-z0-9-]*';
	var ATTRIBUTENAME = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
	var UNQUOTEDVALUE = "[^\"'=<>`\\x00-\\x20]+";
	var SINGLEQUOTEDVALUE = "'[^']*'";
	var DOUBLEQUOTEDVALUE = '"[^"]*"';
	var ATTRIBUTEVALUE = "(?:" + UNQUOTEDVALUE + "|" + SINGLEQUOTEDVALUE + "|" + DOUBLEQUOTEDVALUE + ")";
	var ATTRIBUTEVALUESPEC = "(?:" + "\\s*=" + "\\s*" + ATTRIBUTEVALUE + ")";
	var ATTRIBUTE = "(?:" + "\\s+" + ATTRIBUTENAME + ATTRIBUTEVALUESPEC + "?)";
	var OPENTAG = "<" + TAGNAME + ATTRIBUTE + "*" + "\\s*/?>";
	var CLOSETAG = "</" + TAGNAME + "\\s*[>]";
	var HTMLCOMMENT = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
	var PROCESSINGINSTRUCTION = "[<][?].*?[?][>]";
	var DECLARATION = "<![A-Z]+" + "\\s+[^>]*>";
	var CDATA = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
	var HTMLTAG = "(?:" + OPENTAG + "|" + CLOSETAG + "|" + HTMLCOMMENT + "|" +
	        PROCESSINGINSTRUCTION + "|" + DECLARATION + "|" + CDATA + ")";
	var reHtmlTag = new RegExp('^' + HTMLTAG, 'i');
	
	var reBackslashOrAmp = /[\\&]/;
	
	var ESCAPABLE = '[!"#$%&\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]';
	
	var reEntityOrEscapedChar = new RegExp('\\\\' + ESCAPABLE + '|' + ENTITY, 'gi');
	
	var XMLSPECIAL = '[&<>"]';
	
	var reXmlSpecial = new RegExp(XMLSPECIAL, 'g');
	
	var reXmlSpecialOrEntity = new RegExp(ENTITY + '|' + XMLSPECIAL, 'gi');
	
	var unescapeChar = function(s) {
	    if (s.charCodeAt(0) === C_BACKSLASH) {
	        return s.charAt(1);
	    } else {
	        return decodeHTML(s);
	    }
	};
	
	// Replace entities and backslash escapes with literal characters.
	var unescapeString = function(s) {
	    if (reBackslashOrAmp.test(s)) {
	        return s.replace(reEntityOrEscapedChar, unescapeChar);
	    } else {
	        return s;
	    }
	};
	
	var normalizeURI = function(uri) {
	    try {
	        return encode(decode(uri));
	    }
	    catch(err) {
	        return uri;
	    }
	};
	
	var replaceUnsafeChar = function(s) {
	    switch (s) {
	    case '&':
	        return '&amp;';
	    case '<':
	        return '&lt;';
	    case '>':
	        return '&gt;';
	    case '"':
	        return '&quot;';
	    default:
	        return s;
	    }
	};
	
	var escapeXml = function(s, preserve_entities) {
	    if (reXmlSpecial.test(s)) {
	        if (preserve_entities) {
	            return s.replace(reXmlSpecialOrEntity, replaceUnsafeChar);
	        } else {
	            return s.replace(reXmlSpecial, replaceUnsafeChar);
	        }
	    } else {
	        return s;
	    }
	};
	
	module.exports = { unescapeString: unescapeString,
	                   normalizeURI: normalizeURI,
	                   escapeXml: escapeXml,
	                   reHtmlTag: reHtmlTag,
	                   OPENTAG: OPENTAG,
	                   CLOSETAG: CLOSETAG,
	                   ENTITY: ENTITY,
	                   ESCAPABLE: ESCAPABLE
	                 };


/***/ },
/* 12 */
/***/ function(module, exports) {

	
	'use strict';
	
	
	var encodeCache = {};
	
	
	// Create a lookup array where anything but characters in `chars` string
	// and alphanumeric chars is percent-encoded.
	//
	function getEncodeCache(exclude) {
	  var i, ch, cache = encodeCache[exclude];
	  if (cache) { return cache; }
	
	  cache = encodeCache[exclude] = [];
	
	  for (i = 0; i < 128; i++) {
	    ch = String.fromCharCode(i);
	
	    if (/^[0-9a-z]$/i.test(ch)) {
	      // always allow unencoded alphanumeric characters
	      cache.push(ch);
	    } else {
	      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
	    }
	  }
	
	  for (i = 0; i < exclude.length; i++) {
	    cache[exclude.charCodeAt(i)] = exclude[i];
	  }
	
	  return cache;
	}
	
	
	// Encode unsafe characters with percent-encoding, skipping already
	// encoded sequences.
	//
	//  - string       - string to encode
	//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
	//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
	//
	function encode(string, exclude, keepEscaped) {
	  var i, l, code, nextCode, cache,
	      result = '';
	
	  if (typeof exclude !== 'string') {
	    // encode(string, keepEscaped)
	    keepEscaped  = exclude;
	    exclude = encode.defaultChars;
	  }
	
	  if (typeof keepEscaped === 'undefined') {
	    keepEscaped = true;
	  }
	
	  cache = getEncodeCache(exclude);
	
	  for (i = 0, l = string.length; i < l; i++) {
	    code = string.charCodeAt(i);
	
	    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
	      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
	        result += string.slice(i, i + 3);
	        i += 2;
	        continue;
	      }
	    }
	
	    if (code < 128) {
	      result += cache[code];
	      continue;
	    }
	
	    if (code >= 0xD800 && code <= 0xDFFF) {
	      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
	        nextCode = string.charCodeAt(i + 1);
	        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
	          result += encodeURIComponent(string[i] + string[i + 1]);
	          i++;
	          continue;
	        }
	      }
	      result += '%EF%BF%BD';
	      continue;
	    }
	
	    result += encodeURIComponent(string[i]);
	  }
	
	  return result;
	}
	
	encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
	encode.componentChars = "-_.!~*'()";
	
	
	module.exports = encode;


/***/ },
/* 13 */
/***/ function(module, exports) {

	
	'use strict';
	
	
	/* eslint-disable no-bitwise */
	
	var decodeCache = {};
	
	function getDecodeCache(exclude) {
	  var i, ch, cache = decodeCache[exclude];
	  if (cache) { return cache; }
	
	  cache = decodeCache[exclude] = [];
	
	  for (i = 0; i < 128; i++) {
	    ch = String.fromCharCode(i);
	    cache.push(ch);
	  }
	
	  for (i = 0; i < exclude.length; i++) {
	    ch = exclude.charCodeAt(i);
	    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
	  }
	
	  return cache;
	}
	
	
	// Decode percent-encoded string.
	//
	function decode(string, exclude) {
	  var cache;
	
	  if (typeof exclude !== 'string') {
	    exclude = decode.defaultChars;
	  }
	
	  cache = getDecodeCache(exclude);
	
	  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
	    var i, l, b1, b2, b3, b4, char,
	        result = '';
	
	    for (i = 0, l = seq.length; i < l; i += 3) {
	      b1 = parseInt(seq.slice(i + 1, i + 3), 16);
	
	      if (b1 < 0x80) {
	        result += cache[b1];
	        continue;
	      }
	
	      if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
	        // 110xxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	
	        if ((b2 & 0xC0) === 0x80) {
	          char = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);
	
	          if (char < 0x80) {
	            result += '\ufffd\ufffd';
	          } else {
	            result += String.fromCharCode(char);
	          }
	
	          i += 3;
	          continue;
	        }
	      }
	
	      if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
	        // 1110xxxx 10xxxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
	
	        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
	          char = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);
	
	          if (char < 0x800 || (char >= 0xD800 && char <= 0xDFFF)) {
	            result += '\ufffd\ufffd\ufffd';
	          } else {
	            result += String.fromCharCode(char);
	          }
	
	          i += 6;
	          continue;
	        }
	      }
	
	      if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
	        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
	        b4 = parseInt(seq.slice(i + 10, i + 12), 16);
	
	        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
	          char = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);
	
	          if (char < 0x10000 || char > 0x10FFFF) {
	            result += '\ufffd\ufffd\ufffd\ufffd';
	          } else {
	            char -= 0x10000;
	            result += String.fromCharCode(0xD800 + (char >> 10), 0xDC00 + (char & 0x3FF));
	          }
	
	          i += 9;
	          continue;
	        }
	      }
	
	      result += '\ufffd';
	    }
	
	    return result;
	  });
	}
	
	
	decode.defaultChars   = ';/?:@&=+$,#';
	decode.componentChars = '';
	
	
	module.exports = decode;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var encode = __webpack_require__(15),
	    decode = __webpack_require__(18);
	
	exports.decode = function(data, level){
		return (!level || level <= 0 ? decode.XML : decode.HTML)(data);
	};
	
	exports.decodeStrict = function(data, level){
		return (!level || level <= 0 ? decode.XML : decode.HTMLStrict)(data);
	};
	
	exports.encode = function(data, level){
		return (!level || level <= 0 ? encode.XML : encode.HTML)(data);
	};
	
	exports.encodeXML = encode.XML;
	
	exports.encodeHTML4 =
	exports.encodeHTML5 =
	exports.encodeHTML  = encode.HTML;
	
	exports.decodeXML =
	exports.decodeXMLStrict = decode.XML;
	
	exports.decodeHTML4 =
	exports.decodeHTML5 =
	exports.decodeHTML = decode.HTML;
	
	exports.decodeHTML4Strict =
	exports.decodeHTML5Strict =
	exports.decodeHTMLStrict = decode.HTMLStrict;
	
	exports.escape = encode.escape;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var inverseXML = getInverseObj(__webpack_require__(16)),
	    xmlReplacer = getInverseReplacer(inverseXML);
	
	exports.XML = getInverse(inverseXML, xmlReplacer);
	
	var inverseHTML = getInverseObj(__webpack_require__(17)),
	    htmlReplacer = getInverseReplacer(inverseHTML);
	
	exports.HTML = getInverse(inverseHTML, htmlReplacer);
	
	function getInverseObj(obj){
		return Object.keys(obj).sort().reduce(function(inverse, name){
			inverse[obj[name]] = "&" + name + ";";
			return inverse;
		}, {});
	}
	
	function getInverseReplacer(inverse){
		var single = [],
		    multiple = [];
	
		Object.keys(inverse).forEach(function(k){
			if(k.length === 1){
				single.push("\\" + k);
			} else {
				multiple.push(k);
			}
		});
	
		//TODO add ranges
		multiple.unshift("[" + single.join("") + "]");
	
		return new RegExp(multiple.join("|"), "g");
	}
	
	var re_nonASCII = /[^\0-\x7F]/g,
	    re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	
	function singleCharReplacer(c){
		return "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";";
	}
	
	function astralReplacer(c){
		// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
		var high = c.charCodeAt(0);
		var low  = c.charCodeAt(1);
		var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
		return "&#x" + codePoint.toString(16).toUpperCase() + ";";
	}
	
	function getInverse(inverse, re){
		function func(name){
			return inverse[name];
		}
	
		return function(data){
			return data
					.replace(re, func)
					.replace(re_astralSymbols, astralReplacer)
					.replace(re_nonASCII, singleCharReplacer);
		};
	}
	
	var re_xmlChars = getInverseReplacer(inverseXML);
	
	function escapeXML(data){
		return data
				.replace(re_xmlChars, singleCharReplacer)
				.replace(re_astralSymbols, astralReplacer)
				.replace(re_nonASCII, singleCharReplacer);
	}
	
	exports.escape = escapeXML;


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
		"amp": "&",
		"apos": "'",
		"gt": ">",
		"lt": "<",
		"quot": "\""
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
		"Aacute": "Á",
		"aacute": "á",
		"Abreve": "Ă",
		"abreve": "ă",
		"ac": "∾",
		"acd": "∿",
		"acE": "∾̳",
		"Acirc": "Â",
		"acirc": "â",
		"acute": "´",
		"Acy": "А",
		"acy": "а",
		"AElig": "Æ",
		"aelig": "æ",
		"af": "⁡",
		"Afr": "𝔄",
		"afr": "𝔞",
		"Agrave": "À",
		"agrave": "à",
		"alefsym": "ℵ",
		"aleph": "ℵ",
		"Alpha": "Α",
		"alpha": "α",
		"Amacr": "Ā",
		"amacr": "ā",
		"amalg": "⨿",
		"amp": "&",
		"AMP": "&",
		"andand": "⩕",
		"And": "⩓",
		"and": "∧",
		"andd": "⩜",
		"andslope": "⩘",
		"andv": "⩚",
		"ang": "∠",
		"ange": "⦤",
		"angle": "∠",
		"angmsdaa": "⦨",
		"angmsdab": "⦩",
		"angmsdac": "⦪",
		"angmsdad": "⦫",
		"angmsdae": "⦬",
		"angmsdaf": "⦭",
		"angmsdag": "⦮",
		"angmsdah": "⦯",
		"angmsd": "∡",
		"angrt": "∟",
		"angrtvb": "⊾",
		"angrtvbd": "⦝",
		"angsph": "∢",
		"angst": "Å",
		"angzarr": "⍼",
		"Aogon": "Ą",
		"aogon": "ą",
		"Aopf": "𝔸",
		"aopf": "𝕒",
		"apacir": "⩯",
		"ap": "≈",
		"apE": "⩰",
		"ape": "≊",
		"apid": "≋",
		"apos": "'",
		"ApplyFunction": "⁡",
		"approx": "≈",
		"approxeq": "≊",
		"Aring": "Å",
		"aring": "å",
		"Ascr": "𝒜",
		"ascr": "𝒶",
		"Assign": "≔",
		"ast": "*",
		"asymp": "≈",
		"asympeq": "≍",
		"Atilde": "Ã",
		"atilde": "ã",
		"Auml": "Ä",
		"auml": "ä",
		"awconint": "∳",
		"awint": "⨑",
		"backcong": "≌",
		"backepsilon": "϶",
		"backprime": "‵",
		"backsim": "∽",
		"backsimeq": "⋍",
		"Backslash": "∖",
		"Barv": "⫧",
		"barvee": "⊽",
		"barwed": "⌅",
		"Barwed": "⌆",
		"barwedge": "⌅",
		"bbrk": "⎵",
		"bbrktbrk": "⎶",
		"bcong": "≌",
		"Bcy": "Б",
		"bcy": "б",
		"bdquo": "„",
		"becaus": "∵",
		"because": "∵",
		"Because": "∵",
		"bemptyv": "⦰",
		"bepsi": "϶",
		"bernou": "ℬ",
		"Bernoullis": "ℬ",
		"Beta": "Β",
		"beta": "β",
		"beth": "ℶ",
		"between": "≬",
		"Bfr": "𝔅",
		"bfr": "𝔟",
		"bigcap": "⋂",
		"bigcirc": "◯",
		"bigcup": "⋃",
		"bigodot": "⨀",
		"bigoplus": "⨁",
		"bigotimes": "⨂",
		"bigsqcup": "⨆",
		"bigstar": "★",
		"bigtriangledown": "▽",
		"bigtriangleup": "△",
		"biguplus": "⨄",
		"bigvee": "⋁",
		"bigwedge": "⋀",
		"bkarow": "⤍",
		"blacklozenge": "⧫",
		"blacksquare": "▪",
		"blacktriangle": "▴",
		"blacktriangledown": "▾",
		"blacktriangleleft": "◂",
		"blacktriangleright": "▸",
		"blank": "␣",
		"blk12": "▒",
		"blk14": "░",
		"blk34": "▓",
		"block": "█",
		"bne": "=⃥",
		"bnequiv": "≡⃥",
		"bNot": "⫭",
		"bnot": "⌐",
		"Bopf": "𝔹",
		"bopf": "𝕓",
		"bot": "⊥",
		"bottom": "⊥",
		"bowtie": "⋈",
		"boxbox": "⧉",
		"boxdl": "┐",
		"boxdL": "╕",
		"boxDl": "╖",
		"boxDL": "╗",
		"boxdr": "┌",
		"boxdR": "╒",
		"boxDr": "╓",
		"boxDR": "╔",
		"boxh": "─",
		"boxH": "═",
		"boxhd": "┬",
		"boxHd": "╤",
		"boxhD": "╥",
		"boxHD": "╦",
		"boxhu": "┴",
		"boxHu": "╧",
		"boxhU": "╨",
		"boxHU": "╩",
		"boxminus": "⊟",
		"boxplus": "⊞",
		"boxtimes": "⊠",
		"boxul": "┘",
		"boxuL": "╛",
		"boxUl": "╜",
		"boxUL": "╝",
		"boxur": "└",
		"boxuR": "╘",
		"boxUr": "╙",
		"boxUR": "╚",
		"boxv": "│",
		"boxV": "║",
		"boxvh": "┼",
		"boxvH": "╪",
		"boxVh": "╫",
		"boxVH": "╬",
		"boxvl": "┤",
		"boxvL": "╡",
		"boxVl": "╢",
		"boxVL": "╣",
		"boxvr": "├",
		"boxvR": "╞",
		"boxVr": "╟",
		"boxVR": "╠",
		"bprime": "‵",
		"breve": "˘",
		"Breve": "˘",
		"brvbar": "¦",
		"bscr": "𝒷",
		"Bscr": "ℬ",
		"bsemi": "⁏",
		"bsim": "∽",
		"bsime": "⋍",
		"bsolb": "⧅",
		"bsol": "\\",
		"bsolhsub": "⟈",
		"bull": "•",
		"bullet": "•",
		"bump": "≎",
		"bumpE": "⪮",
		"bumpe": "≏",
		"Bumpeq": "≎",
		"bumpeq": "≏",
		"Cacute": "Ć",
		"cacute": "ć",
		"capand": "⩄",
		"capbrcup": "⩉",
		"capcap": "⩋",
		"cap": "∩",
		"Cap": "⋒",
		"capcup": "⩇",
		"capdot": "⩀",
		"CapitalDifferentialD": "ⅅ",
		"caps": "∩︀",
		"caret": "⁁",
		"caron": "ˇ",
		"Cayleys": "ℭ",
		"ccaps": "⩍",
		"Ccaron": "Č",
		"ccaron": "č",
		"Ccedil": "Ç",
		"ccedil": "ç",
		"Ccirc": "Ĉ",
		"ccirc": "ĉ",
		"Cconint": "∰",
		"ccups": "⩌",
		"ccupssm": "⩐",
		"Cdot": "Ċ",
		"cdot": "ċ",
		"cedil": "¸",
		"Cedilla": "¸",
		"cemptyv": "⦲",
		"cent": "¢",
		"centerdot": "·",
		"CenterDot": "·",
		"cfr": "𝔠",
		"Cfr": "ℭ",
		"CHcy": "Ч",
		"chcy": "ч",
		"check": "✓",
		"checkmark": "✓",
		"Chi": "Χ",
		"chi": "χ",
		"circ": "ˆ",
		"circeq": "≗",
		"circlearrowleft": "↺",
		"circlearrowright": "↻",
		"circledast": "⊛",
		"circledcirc": "⊚",
		"circleddash": "⊝",
		"CircleDot": "⊙",
		"circledR": "®",
		"circledS": "Ⓢ",
		"CircleMinus": "⊖",
		"CirclePlus": "⊕",
		"CircleTimes": "⊗",
		"cir": "○",
		"cirE": "⧃",
		"cire": "≗",
		"cirfnint": "⨐",
		"cirmid": "⫯",
		"cirscir": "⧂",
		"ClockwiseContourIntegral": "∲",
		"CloseCurlyDoubleQuote": "”",
		"CloseCurlyQuote": "’",
		"clubs": "♣",
		"clubsuit": "♣",
		"colon": ":",
		"Colon": "∷",
		"Colone": "⩴",
		"colone": "≔",
		"coloneq": "≔",
		"comma": ",",
		"commat": "@",
		"comp": "∁",
		"compfn": "∘",
		"complement": "∁",
		"complexes": "ℂ",
		"cong": "≅",
		"congdot": "⩭",
		"Congruent": "≡",
		"conint": "∮",
		"Conint": "∯",
		"ContourIntegral": "∮",
		"copf": "𝕔",
		"Copf": "ℂ",
		"coprod": "∐",
		"Coproduct": "∐",
		"copy": "©",
		"COPY": "©",
		"copysr": "℗",
		"CounterClockwiseContourIntegral": "∳",
		"crarr": "↵",
		"cross": "✗",
		"Cross": "⨯",
		"Cscr": "𝒞",
		"cscr": "𝒸",
		"csub": "⫏",
		"csube": "⫑",
		"csup": "⫐",
		"csupe": "⫒",
		"ctdot": "⋯",
		"cudarrl": "⤸",
		"cudarrr": "⤵",
		"cuepr": "⋞",
		"cuesc": "⋟",
		"cularr": "↶",
		"cularrp": "⤽",
		"cupbrcap": "⩈",
		"cupcap": "⩆",
		"CupCap": "≍",
		"cup": "∪",
		"Cup": "⋓",
		"cupcup": "⩊",
		"cupdot": "⊍",
		"cupor": "⩅",
		"cups": "∪︀",
		"curarr": "↷",
		"curarrm": "⤼",
		"curlyeqprec": "⋞",
		"curlyeqsucc": "⋟",
		"curlyvee": "⋎",
		"curlywedge": "⋏",
		"curren": "¤",
		"curvearrowleft": "↶",
		"curvearrowright": "↷",
		"cuvee": "⋎",
		"cuwed": "⋏",
		"cwconint": "∲",
		"cwint": "∱",
		"cylcty": "⌭",
		"dagger": "†",
		"Dagger": "‡",
		"daleth": "ℸ",
		"darr": "↓",
		"Darr": "↡",
		"dArr": "⇓",
		"dash": "‐",
		"Dashv": "⫤",
		"dashv": "⊣",
		"dbkarow": "⤏",
		"dblac": "˝",
		"Dcaron": "Ď",
		"dcaron": "ď",
		"Dcy": "Д",
		"dcy": "д",
		"ddagger": "‡",
		"ddarr": "⇊",
		"DD": "ⅅ",
		"dd": "ⅆ",
		"DDotrahd": "⤑",
		"ddotseq": "⩷",
		"deg": "°",
		"Del": "∇",
		"Delta": "Δ",
		"delta": "δ",
		"demptyv": "⦱",
		"dfisht": "⥿",
		"Dfr": "𝔇",
		"dfr": "𝔡",
		"dHar": "⥥",
		"dharl": "⇃",
		"dharr": "⇂",
		"DiacriticalAcute": "´",
		"DiacriticalDot": "˙",
		"DiacriticalDoubleAcute": "˝",
		"DiacriticalGrave": "`",
		"DiacriticalTilde": "˜",
		"diam": "⋄",
		"diamond": "⋄",
		"Diamond": "⋄",
		"diamondsuit": "♦",
		"diams": "♦",
		"die": "¨",
		"DifferentialD": "ⅆ",
		"digamma": "ϝ",
		"disin": "⋲",
		"div": "÷",
		"divide": "÷",
		"divideontimes": "⋇",
		"divonx": "⋇",
		"DJcy": "Ђ",
		"djcy": "ђ",
		"dlcorn": "⌞",
		"dlcrop": "⌍",
		"dollar": "$",
		"Dopf": "𝔻",
		"dopf": "𝕕",
		"Dot": "¨",
		"dot": "˙",
		"DotDot": "⃜",
		"doteq": "≐",
		"doteqdot": "≑",
		"DotEqual": "≐",
		"dotminus": "∸",
		"dotplus": "∔",
		"dotsquare": "⊡",
		"doublebarwedge": "⌆",
		"DoubleContourIntegral": "∯",
		"DoubleDot": "¨",
		"DoubleDownArrow": "⇓",
		"DoubleLeftArrow": "⇐",
		"DoubleLeftRightArrow": "⇔",
		"DoubleLeftTee": "⫤",
		"DoubleLongLeftArrow": "⟸",
		"DoubleLongLeftRightArrow": "⟺",
		"DoubleLongRightArrow": "⟹",
		"DoubleRightArrow": "⇒",
		"DoubleRightTee": "⊨",
		"DoubleUpArrow": "⇑",
		"DoubleUpDownArrow": "⇕",
		"DoubleVerticalBar": "∥",
		"DownArrowBar": "⤓",
		"downarrow": "↓",
		"DownArrow": "↓",
		"Downarrow": "⇓",
		"DownArrowUpArrow": "⇵",
		"DownBreve": "̑",
		"downdownarrows": "⇊",
		"downharpoonleft": "⇃",
		"downharpoonright": "⇂",
		"DownLeftRightVector": "⥐",
		"DownLeftTeeVector": "⥞",
		"DownLeftVectorBar": "⥖",
		"DownLeftVector": "↽",
		"DownRightTeeVector": "⥟",
		"DownRightVectorBar": "⥗",
		"DownRightVector": "⇁",
		"DownTeeArrow": "↧",
		"DownTee": "⊤",
		"drbkarow": "⤐",
		"drcorn": "⌟",
		"drcrop": "⌌",
		"Dscr": "𝒟",
		"dscr": "𝒹",
		"DScy": "Ѕ",
		"dscy": "ѕ",
		"dsol": "⧶",
		"Dstrok": "Đ",
		"dstrok": "đ",
		"dtdot": "⋱",
		"dtri": "▿",
		"dtrif": "▾",
		"duarr": "⇵",
		"duhar": "⥯",
		"dwangle": "⦦",
		"DZcy": "Џ",
		"dzcy": "џ",
		"dzigrarr": "⟿",
		"Eacute": "É",
		"eacute": "é",
		"easter": "⩮",
		"Ecaron": "Ě",
		"ecaron": "ě",
		"Ecirc": "Ê",
		"ecirc": "ê",
		"ecir": "≖",
		"ecolon": "≕",
		"Ecy": "Э",
		"ecy": "э",
		"eDDot": "⩷",
		"Edot": "Ė",
		"edot": "ė",
		"eDot": "≑",
		"ee": "ⅇ",
		"efDot": "≒",
		"Efr": "𝔈",
		"efr": "𝔢",
		"eg": "⪚",
		"Egrave": "È",
		"egrave": "è",
		"egs": "⪖",
		"egsdot": "⪘",
		"el": "⪙",
		"Element": "∈",
		"elinters": "⏧",
		"ell": "ℓ",
		"els": "⪕",
		"elsdot": "⪗",
		"Emacr": "Ē",
		"emacr": "ē",
		"empty": "∅",
		"emptyset": "∅",
		"EmptySmallSquare": "◻",
		"emptyv": "∅",
		"EmptyVerySmallSquare": "▫",
		"emsp13": " ",
		"emsp14": " ",
		"emsp": " ",
		"ENG": "Ŋ",
		"eng": "ŋ",
		"ensp": " ",
		"Eogon": "Ę",
		"eogon": "ę",
		"Eopf": "𝔼",
		"eopf": "𝕖",
		"epar": "⋕",
		"eparsl": "⧣",
		"eplus": "⩱",
		"epsi": "ε",
		"Epsilon": "Ε",
		"epsilon": "ε",
		"epsiv": "ϵ",
		"eqcirc": "≖",
		"eqcolon": "≕",
		"eqsim": "≂",
		"eqslantgtr": "⪖",
		"eqslantless": "⪕",
		"Equal": "⩵",
		"equals": "=",
		"EqualTilde": "≂",
		"equest": "≟",
		"Equilibrium": "⇌",
		"equiv": "≡",
		"equivDD": "⩸",
		"eqvparsl": "⧥",
		"erarr": "⥱",
		"erDot": "≓",
		"escr": "ℯ",
		"Escr": "ℰ",
		"esdot": "≐",
		"Esim": "⩳",
		"esim": "≂",
		"Eta": "Η",
		"eta": "η",
		"ETH": "Ð",
		"eth": "ð",
		"Euml": "Ë",
		"euml": "ë",
		"euro": "€",
		"excl": "!",
		"exist": "∃",
		"Exists": "∃",
		"expectation": "ℰ",
		"exponentiale": "ⅇ",
		"ExponentialE": "ⅇ",
		"fallingdotseq": "≒",
		"Fcy": "Ф",
		"fcy": "ф",
		"female": "♀",
		"ffilig": "ﬃ",
		"fflig": "ﬀ",
		"ffllig": "ﬄ",
		"Ffr": "𝔉",
		"ffr": "𝔣",
		"filig": "ﬁ",
		"FilledSmallSquare": "◼",
		"FilledVerySmallSquare": "▪",
		"fjlig": "fj",
		"flat": "♭",
		"fllig": "ﬂ",
		"fltns": "▱",
		"fnof": "ƒ",
		"Fopf": "𝔽",
		"fopf": "𝕗",
		"forall": "∀",
		"ForAll": "∀",
		"fork": "⋔",
		"forkv": "⫙",
		"Fouriertrf": "ℱ",
		"fpartint": "⨍",
		"frac12": "½",
		"frac13": "⅓",
		"frac14": "¼",
		"frac15": "⅕",
		"frac16": "⅙",
		"frac18": "⅛",
		"frac23": "⅔",
		"frac25": "⅖",
		"frac34": "¾",
		"frac35": "⅗",
		"frac38": "⅜",
		"frac45": "⅘",
		"frac56": "⅚",
		"frac58": "⅝",
		"frac78": "⅞",
		"frasl": "⁄",
		"frown": "⌢",
		"fscr": "𝒻",
		"Fscr": "ℱ",
		"gacute": "ǵ",
		"Gamma": "Γ",
		"gamma": "γ",
		"Gammad": "Ϝ",
		"gammad": "ϝ",
		"gap": "⪆",
		"Gbreve": "Ğ",
		"gbreve": "ğ",
		"Gcedil": "Ģ",
		"Gcirc": "Ĝ",
		"gcirc": "ĝ",
		"Gcy": "Г",
		"gcy": "г",
		"Gdot": "Ġ",
		"gdot": "ġ",
		"ge": "≥",
		"gE": "≧",
		"gEl": "⪌",
		"gel": "⋛",
		"geq": "≥",
		"geqq": "≧",
		"geqslant": "⩾",
		"gescc": "⪩",
		"ges": "⩾",
		"gesdot": "⪀",
		"gesdoto": "⪂",
		"gesdotol": "⪄",
		"gesl": "⋛︀",
		"gesles": "⪔",
		"Gfr": "𝔊",
		"gfr": "𝔤",
		"gg": "≫",
		"Gg": "⋙",
		"ggg": "⋙",
		"gimel": "ℷ",
		"GJcy": "Ѓ",
		"gjcy": "ѓ",
		"gla": "⪥",
		"gl": "≷",
		"glE": "⪒",
		"glj": "⪤",
		"gnap": "⪊",
		"gnapprox": "⪊",
		"gne": "⪈",
		"gnE": "≩",
		"gneq": "⪈",
		"gneqq": "≩",
		"gnsim": "⋧",
		"Gopf": "𝔾",
		"gopf": "𝕘",
		"grave": "`",
		"GreaterEqual": "≥",
		"GreaterEqualLess": "⋛",
		"GreaterFullEqual": "≧",
		"GreaterGreater": "⪢",
		"GreaterLess": "≷",
		"GreaterSlantEqual": "⩾",
		"GreaterTilde": "≳",
		"Gscr": "𝒢",
		"gscr": "ℊ",
		"gsim": "≳",
		"gsime": "⪎",
		"gsiml": "⪐",
		"gtcc": "⪧",
		"gtcir": "⩺",
		"gt": ">",
		"GT": ">",
		"Gt": "≫",
		"gtdot": "⋗",
		"gtlPar": "⦕",
		"gtquest": "⩼",
		"gtrapprox": "⪆",
		"gtrarr": "⥸",
		"gtrdot": "⋗",
		"gtreqless": "⋛",
		"gtreqqless": "⪌",
		"gtrless": "≷",
		"gtrsim": "≳",
		"gvertneqq": "≩︀",
		"gvnE": "≩︀",
		"Hacek": "ˇ",
		"hairsp": " ",
		"half": "½",
		"hamilt": "ℋ",
		"HARDcy": "Ъ",
		"hardcy": "ъ",
		"harrcir": "⥈",
		"harr": "↔",
		"hArr": "⇔",
		"harrw": "↭",
		"Hat": "^",
		"hbar": "ℏ",
		"Hcirc": "Ĥ",
		"hcirc": "ĥ",
		"hearts": "♥",
		"heartsuit": "♥",
		"hellip": "…",
		"hercon": "⊹",
		"hfr": "𝔥",
		"Hfr": "ℌ",
		"HilbertSpace": "ℋ",
		"hksearow": "⤥",
		"hkswarow": "⤦",
		"hoarr": "⇿",
		"homtht": "∻",
		"hookleftarrow": "↩",
		"hookrightarrow": "↪",
		"hopf": "𝕙",
		"Hopf": "ℍ",
		"horbar": "―",
		"HorizontalLine": "─",
		"hscr": "𝒽",
		"Hscr": "ℋ",
		"hslash": "ℏ",
		"Hstrok": "Ħ",
		"hstrok": "ħ",
		"HumpDownHump": "≎",
		"HumpEqual": "≏",
		"hybull": "⁃",
		"hyphen": "‐",
		"Iacute": "Í",
		"iacute": "í",
		"ic": "⁣",
		"Icirc": "Î",
		"icirc": "î",
		"Icy": "И",
		"icy": "и",
		"Idot": "İ",
		"IEcy": "Е",
		"iecy": "е",
		"iexcl": "¡",
		"iff": "⇔",
		"ifr": "𝔦",
		"Ifr": "ℑ",
		"Igrave": "Ì",
		"igrave": "ì",
		"ii": "ⅈ",
		"iiiint": "⨌",
		"iiint": "∭",
		"iinfin": "⧜",
		"iiota": "℩",
		"IJlig": "Ĳ",
		"ijlig": "ĳ",
		"Imacr": "Ī",
		"imacr": "ī",
		"image": "ℑ",
		"ImaginaryI": "ⅈ",
		"imagline": "ℐ",
		"imagpart": "ℑ",
		"imath": "ı",
		"Im": "ℑ",
		"imof": "⊷",
		"imped": "Ƶ",
		"Implies": "⇒",
		"incare": "℅",
		"in": "∈",
		"infin": "∞",
		"infintie": "⧝",
		"inodot": "ı",
		"intcal": "⊺",
		"int": "∫",
		"Int": "∬",
		"integers": "ℤ",
		"Integral": "∫",
		"intercal": "⊺",
		"Intersection": "⋂",
		"intlarhk": "⨗",
		"intprod": "⨼",
		"InvisibleComma": "⁣",
		"InvisibleTimes": "⁢",
		"IOcy": "Ё",
		"iocy": "ё",
		"Iogon": "Į",
		"iogon": "į",
		"Iopf": "𝕀",
		"iopf": "𝕚",
		"Iota": "Ι",
		"iota": "ι",
		"iprod": "⨼",
		"iquest": "¿",
		"iscr": "𝒾",
		"Iscr": "ℐ",
		"isin": "∈",
		"isindot": "⋵",
		"isinE": "⋹",
		"isins": "⋴",
		"isinsv": "⋳",
		"isinv": "∈",
		"it": "⁢",
		"Itilde": "Ĩ",
		"itilde": "ĩ",
		"Iukcy": "І",
		"iukcy": "і",
		"Iuml": "Ï",
		"iuml": "ï",
		"Jcirc": "Ĵ",
		"jcirc": "ĵ",
		"Jcy": "Й",
		"jcy": "й",
		"Jfr": "𝔍",
		"jfr": "𝔧",
		"jmath": "ȷ",
		"Jopf": "𝕁",
		"jopf": "𝕛",
		"Jscr": "𝒥",
		"jscr": "𝒿",
		"Jsercy": "Ј",
		"jsercy": "ј",
		"Jukcy": "Є",
		"jukcy": "є",
		"Kappa": "Κ",
		"kappa": "κ",
		"kappav": "ϰ",
		"Kcedil": "Ķ",
		"kcedil": "ķ",
		"Kcy": "К",
		"kcy": "к",
		"Kfr": "𝔎",
		"kfr": "𝔨",
		"kgreen": "ĸ",
		"KHcy": "Х",
		"khcy": "х",
		"KJcy": "Ќ",
		"kjcy": "ќ",
		"Kopf": "𝕂",
		"kopf": "𝕜",
		"Kscr": "𝒦",
		"kscr": "𝓀",
		"lAarr": "⇚",
		"Lacute": "Ĺ",
		"lacute": "ĺ",
		"laemptyv": "⦴",
		"lagran": "ℒ",
		"Lambda": "Λ",
		"lambda": "λ",
		"lang": "⟨",
		"Lang": "⟪",
		"langd": "⦑",
		"langle": "⟨",
		"lap": "⪅",
		"Laplacetrf": "ℒ",
		"laquo": "«",
		"larrb": "⇤",
		"larrbfs": "⤟",
		"larr": "←",
		"Larr": "↞",
		"lArr": "⇐",
		"larrfs": "⤝",
		"larrhk": "↩",
		"larrlp": "↫",
		"larrpl": "⤹",
		"larrsim": "⥳",
		"larrtl": "↢",
		"latail": "⤙",
		"lAtail": "⤛",
		"lat": "⪫",
		"late": "⪭",
		"lates": "⪭︀",
		"lbarr": "⤌",
		"lBarr": "⤎",
		"lbbrk": "❲",
		"lbrace": "{",
		"lbrack": "[",
		"lbrke": "⦋",
		"lbrksld": "⦏",
		"lbrkslu": "⦍",
		"Lcaron": "Ľ",
		"lcaron": "ľ",
		"Lcedil": "Ļ",
		"lcedil": "ļ",
		"lceil": "⌈",
		"lcub": "{",
		"Lcy": "Л",
		"lcy": "л",
		"ldca": "⤶",
		"ldquo": "“",
		"ldquor": "„",
		"ldrdhar": "⥧",
		"ldrushar": "⥋",
		"ldsh": "↲",
		"le": "≤",
		"lE": "≦",
		"LeftAngleBracket": "⟨",
		"LeftArrowBar": "⇤",
		"leftarrow": "←",
		"LeftArrow": "←",
		"Leftarrow": "⇐",
		"LeftArrowRightArrow": "⇆",
		"leftarrowtail": "↢",
		"LeftCeiling": "⌈",
		"LeftDoubleBracket": "⟦",
		"LeftDownTeeVector": "⥡",
		"LeftDownVectorBar": "⥙",
		"LeftDownVector": "⇃",
		"LeftFloor": "⌊",
		"leftharpoondown": "↽",
		"leftharpoonup": "↼",
		"leftleftarrows": "⇇",
		"leftrightarrow": "↔",
		"LeftRightArrow": "↔",
		"Leftrightarrow": "⇔",
		"leftrightarrows": "⇆",
		"leftrightharpoons": "⇋",
		"leftrightsquigarrow": "↭",
		"LeftRightVector": "⥎",
		"LeftTeeArrow": "↤",
		"LeftTee": "⊣",
		"LeftTeeVector": "⥚",
		"leftthreetimes": "⋋",
		"LeftTriangleBar": "⧏",
		"LeftTriangle": "⊲",
		"LeftTriangleEqual": "⊴",
		"LeftUpDownVector": "⥑",
		"LeftUpTeeVector": "⥠",
		"LeftUpVectorBar": "⥘",
		"LeftUpVector": "↿",
		"LeftVectorBar": "⥒",
		"LeftVector": "↼",
		"lEg": "⪋",
		"leg": "⋚",
		"leq": "≤",
		"leqq": "≦",
		"leqslant": "⩽",
		"lescc": "⪨",
		"les": "⩽",
		"lesdot": "⩿",
		"lesdoto": "⪁",
		"lesdotor": "⪃",
		"lesg": "⋚︀",
		"lesges": "⪓",
		"lessapprox": "⪅",
		"lessdot": "⋖",
		"lesseqgtr": "⋚",
		"lesseqqgtr": "⪋",
		"LessEqualGreater": "⋚",
		"LessFullEqual": "≦",
		"LessGreater": "≶",
		"lessgtr": "≶",
		"LessLess": "⪡",
		"lesssim": "≲",
		"LessSlantEqual": "⩽",
		"LessTilde": "≲",
		"lfisht": "⥼",
		"lfloor": "⌊",
		"Lfr": "𝔏",
		"lfr": "𝔩",
		"lg": "≶",
		"lgE": "⪑",
		"lHar": "⥢",
		"lhard": "↽",
		"lharu": "↼",
		"lharul": "⥪",
		"lhblk": "▄",
		"LJcy": "Љ",
		"ljcy": "љ",
		"llarr": "⇇",
		"ll": "≪",
		"Ll": "⋘",
		"llcorner": "⌞",
		"Lleftarrow": "⇚",
		"llhard": "⥫",
		"lltri": "◺",
		"Lmidot": "Ŀ",
		"lmidot": "ŀ",
		"lmoustache": "⎰",
		"lmoust": "⎰",
		"lnap": "⪉",
		"lnapprox": "⪉",
		"lne": "⪇",
		"lnE": "≨",
		"lneq": "⪇",
		"lneqq": "≨",
		"lnsim": "⋦",
		"loang": "⟬",
		"loarr": "⇽",
		"lobrk": "⟦",
		"longleftarrow": "⟵",
		"LongLeftArrow": "⟵",
		"Longleftarrow": "⟸",
		"longleftrightarrow": "⟷",
		"LongLeftRightArrow": "⟷",
		"Longleftrightarrow": "⟺",
		"longmapsto": "⟼",
		"longrightarrow": "⟶",
		"LongRightArrow": "⟶",
		"Longrightarrow": "⟹",
		"looparrowleft": "↫",
		"looparrowright": "↬",
		"lopar": "⦅",
		"Lopf": "𝕃",
		"lopf": "𝕝",
		"loplus": "⨭",
		"lotimes": "⨴",
		"lowast": "∗",
		"lowbar": "_",
		"LowerLeftArrow": "↙",
		"LowerRightArrow": "↘",
		"loz": "◊",
		"lozenge": "◊",
		"lozf": "⧫",
		"lpar": "(",
		"lparlt": "⦓",
		"lrarr": "⇆",
		"lrcorner": "⌟",
		"lrhar": "⇋",
		"lrhard": "⥭",
		"lrm": "‎",
		"lrtri": "⊿",
		"lsaquo": "‹",
		"lscr": "𝓁",
		"Lscr": "ℒ",
		"lsh": "↰",
		"Lsh": "↰",
		"lsim": "≲",
		"lsime": "⪍",
		"lsimg": "⪏",
		"lsqb": "[",
		"lsquo": "‘",
		"lsquor": "‚",
		"Lstrok": "Ł",
		"lstrok": "ł",
		"ltcc": "⪦",
		"ltcir": "⩹",
		"lt": "<",
		"LT": "<",
		"Lt": "≪",
		"ltdot": "⋖",
		"lthree": "⋋",
		"ltimes": "⋉",
		"ltlarr": "⥶",
		"ltquest": "⩻",
		"ltri": "◃",
		"ltrie": "⊴",
		"ltrif": "◂",
		"ltrPar": "⦖",
		"lurdshar": "⥊",
		"luruhar": "⥦",
		"lvertneqq": "≨︀",
		"lvnE": "≨︀",
		"macr": "¯",
		"male": "♂",
		"malt": "✠",
		"maltese": "✠",
		"Map": "⤅",
		"map": "↦",
		"mapsto": "↦",
		"mapstodown": "↧",
		"mapstoleft": "↤",
		"mapstoup": "↥",
		"marker": "▮",
		"mcomma": "⨩",
		"Mcy": "М",
		"mcy": "м",
		"mdash": "—",
		"mDDot": "∺",
		"measuredangle": "∡",
		"MediumSpace": " ",
		"Mellintrf": "ℳ",
		"Mfr": "𝔐",
		"mfr": "𝔪",
		"mho": "℧",
		"micro": "µ",
		"midast": "*",
		"midcir": "⫰",
		"mid": "∣",
		"middot": "·",
		"minusb": "⊟",
		"minus": "−",
		"minusd": "∸",
		"minusdu": "⨪",
		"MinusPlus": "∓",
		"mlcp": "⫛",
		"mldr": "…",
		"mnplus": "∓",
		"models": "⊧",
		"Mopf": "𝕄",
		"mopf": "𝕞",
		"mp": "∓",
		"mscr": "𝓂",
		"Mscr": "ℳ",
		"mstpos": "∾",
		"Mu": "Μ",
		"mu": "μ",
		"multimap": "⊸",
		"mumap": "⊸",
		"nabla": "∇",
		"Nacute": "Ń",
		"nacute": "ń",
		"nang": "∠⃒",
		"nap": "≉",
		"napE": "⩰̸",
		"napid": "≋̸",
		"napos": "ŉ",
		"napprox": "≉",
		"natural": "♮",
		"naturals": "ℕ",
		"natur": "♮",
		"nbsp": " ",
		"nbump": "≎̸",
		"nbumpe": "≏̸",
		"ncap": "⩃",
		"Ncaron": "Ň",
		"ncaron": "ň",
		"Ncedil": "Ņ",
		"ncedil": "ņ",
		"ncong": "≇",
		"ncongdot": "⩭̸",
		"ncup": "⩂",
		"Ncy": "Н",
		"ncy": "н",
		"ndash": "–",
		"nearhk": "⤤",
		"nearr": "↗",
		"neArr": "⇗",
		"nearrow": "↗",
		"ne": "≠",
		"nedot": "≐̸",
		"NegativeMediumSpace": "​",
		"NegativeThickSpace": "​",
		"NegativeThinSpace": "​",
		"NegativeVeryThinSpace": "​",
		"nequiv": "≢",
		"nesear": "⤨",
		"nesim": "≂̸",
		"NestedGreaterGreater": "≫",
		"NestedLessLess": "≪",
		"NewLine": "\n",
		"nexist": "∄",
		"nexists": "∄",
		"Nfr": "𝔑",
		"nfr": "𝔫",
		"ngE": "≧̸",
		"nge": "≱",
		"ngeq": "≱",
		"ngeqq": "≧̸",
		"ngeqslant": "⩾̸",
		"nges": "⩾̸",
		"nGg": "⋙̸",
		"ngsim": "≵",
		"nGt": "≫⃒",
		"ngt": "≯",
		"ngtr": "≯",
		"nGtv": "≫̸",
		"nharr": "↮",
		"nhArr": "⇎",
		"nhpar": "⫲",
		"ni": "∋",
		"nis": "⋼",
		"nisd": "⋺",
		"niv": "∋",
		"NJcy": "Њ",
		"njcy": "њ",
		"nlarr": "↚",
		"nlArr": "⇍",
		"nldr": "‥",
		"nlE": "≦̸",
		"nle": "≰",
		"nleftarrow": "↚",
		"nLeftarrow": "⇍",
		"nleftrightarrow": "↮",
		"nLeftrightarrow": "⇎",
		"nleq": "≰",
		"nleqq": "≦̸",
		"nleqslant": "⩽̸",
		"nles": "⩽̸",
		"nless": "≮",
		"nLl": "⋘̸",
		"nlsim": "≴",
		"nLt": "≪⃒",
		"nlt": "≮",
		"nltri": "⋪",
		"nltrie": "⋬",
		"nLtv": "≪̸",
		"nmid": "∤",
		"NoBreak": "⁠",
		"NonBreakingSpace": " ",
		"nopf": "𝕟",
		"Nopf": "ℕ",
		"Not": "⫬",
		"not": "¬",
		"NotCongruent": "≢",
		"NotCupCap": "≭",
		"NotDoubleVerticalBar": "∦",
		"NotElement": "∉",
		"NotEqual": "≠",
		"NotEqualTilde": "≂̸",
		"NotExists": "∄",
		"NotGreater": "≯",
		"NotGreaterEqual": "≱",
		"NotGreaterFullEqual": "≧̸",
		"NotGreaterGreater": "≫̸",
		"NotGreaterLess": "≹",
		"NotGreaterSlantEqual": "⩾̸",
		"NotGreaterTilde": "≵",
		"NotHumpDownHump": "≎̸",
		"NotHumpEqual": "≏̸",
		"notin": "∉",
		"notindot": "⋵̸",
		"notinE": "⋹̸",
		"notinva": "∉",
		"notinvb": "⋷",
		"notinvc": "⋶",
		"NotLeftTriangleBar": "⧏̸",
		"NotLeftTriangle": "⋪",
		"NotLeftTriangleEqual": "⋬",
		"NotLess": "≮",
		"NotLessEqual": "≰",
		"NotLessGreater": "≸",
		"NotLessLess": "≪̸",
		"NotLessSlantEqual": "⩽̸",
		"NotLessTilde": "≴",
		"NotNestedGreaterGreater": "⪢̸",
		"NotNestedLessLess": "⪡̸",
		"notni": "∌",
		"notniva": "∌",
		"notnivb": "⋾",
		"notnivc": "⋽",
		"NotPrecedes": "⊀",
		"NotPrecedesEqual": "⪯̸",
		"NotPrecedesSlantEqual": "⋠",
		"NotReverseElement": "∌",
		"NotRightTriangleBar": "⧐̸",
		"NotRightTriangle": "⋫",
		"NotRightTriangleEqual": "⋭",
		"NotSquareSubset": "⊏̸",
		"NotSquareSubsetEqual": "⋢",
		"NotSquareSuperset": "⊐̸",
		"NotSquareSupersetEqual": "⋣",
		"NotSubset": "⊂⃒",
		"NotSubsetEqual": "⊈",
		"NotSucceeds": "⊁",
		"NotSucceedsEqual": "⪰̸",
		"NotSucceedsSlantEqual": "⋡",
		"NotSucceedsTilde": "≿̸",
		"NotSuperset": "⊃⃒",
		"NotSupersetEqual": "⊉",
		"NotTilde": "≁",
		"NotTildeEqual": "≄",
		"NotTildeFullEqual": "≇",
		"NotTildeTilde": "≉",
		"NotVerticalBar": "∤",
		"nparallel": "∦",
		"npar": "∦",
		"nparsl": "⫽⃥",
		"npart": "∂̸",
		"npolint": "⨔",
		"npr": "⊀",
		"nprcue": "⋠",
		"nprec": "⊀",
		"npreceq": "⪯̸",
		"npre": "⪯̸",
		"nrarrc": "⤳̸",
		"nrarr": "↛",
		"nrArr": "⇏",
		"nrarrw": "↝̸",
		"nrightarrow": "↛",
		"nRightarrow": "⇏",
		"nrtri": "⋫",
		"nrtrie": "⋭",
		"nsc": "⊁",
		"nsccue": "⋡",
		"nsce": "⪰̸",
		"Nscr": "𝒩",
		"nscr": "𝓃",
		"nshortmid": "∤",
		"nshortparallel": "∦",
		"nsim": "≁",
		"nsime": "≄",
		"nsimeq": "≄",
		"nsmid": "∤",
		"nspar": "∦",
		"nsqsube": "⋢",
		"nsqsupe": "⋣",
		"nsub": "⊄",
		"nsubE": "⫅̸",
		"nsube": "⊈",
		"nsubset": "⊂⃒",
		"nsubseteq": "⊈",
		"nsubseteqq": "⫅̸",
		"nsucc": "⊁",
		"nsucceq": "⪰̸",
		"nsup": "⊅",
		"nsupE": "⫆̸",
		"nsupe": "⊉",
		"nsupset": "⊃⃒",
		"nsupseteq": "⊉",
		"nsupseteqq": "⫆̸",
		"ntgl": "≹",
		"Ntilde": "Ñ",
		"ntilde": "ñ",
		"ntlg": "≸",
		"ntriangleleft": "⋪",
		"ntrianglelefteq": "⋬",
		"ntriangleright": "⋫",
		"ntrianglerighteq": "⋭",
		"Nu": "Ν",
		"nu": "ν",
		"num": "#",
		"numero": "№",
		"numsp": " ",
		"nvap": "≍⃒",
		"nvdash": "⊬",
		"nvDash": "⊭",
		"nVdash": "⊮",
		"nVDash": "⊯",
		"nvge": "≥⃒",
		"nvgt": ">⃒",
		"nvHarr": "⤄",
		"nvinfin": "⧞",
		"nvlArr": "⤂",
		"nvle": "≤⃒",
		"nvlt": "<⃒",
		"nvltrie": "⊴⃒",
		"nvrArr": "⤃",
		"nvrtrie": "⊵⃒",
		"nvsim": "∼⃒",
		"nwarhk": "⤣",
		"nwarr": "↖",
		"nwArr": "⇖",
		"nwarrow": "↖",
		"nwnear": "⤧",
		"Oacute": "Ó",
		"oacute": "ó",
		"oast": "⊛",
		"Ocirc": "Ô",
		"ocirc": "ô",
		"ocir": "⊚",
		"Ocy": "О",
		"ocy": "о",
		"odash": "⊝",
		"Odblac": "Ő",
		"odblac": "ő",
		"odiv": "⨸",
		"odot": "⊙",
		"odsold": "⦼",
		"OElig": "Œ",
		"oelig": "œ",
		"ofcir": "⦿",
		"Ofr": "𝔒",
		"ofr": "𝔬",
		"ogon": "˛",
		"Ograve": "Ò",
		"ograve": "ò",
		"ogt": "⧁",
		"ohbar": "⦵",
		"ohm": "Ω",
		"oint": "∮",
		"olarr": "↺",
		"olcir": "⦾",
		"olcross": "⦻",
		"oline": "‾",
		"olt": "⧀",
		"Omacr": "Ō",
		"omacr": "ō",
		"Omega": "Ω",
		"omega": "ω",
		"Omicron": "Ο",
		"omicron": "ο",
		"omid": "⦶",
		"ominus": "⊖",
		"Oopf": "𝕆",
		"oopf": "𝕠",
		"opar": "⦷",
		"OpenCurlyDoubleQuote": "“",
		"OpenCurlyQuote": "‘",
		"operp": "⦹",
		"oplus": "⊕",
		"orarr": "↻",
		"Or": "⩔",
		"or": "∨",
		"ord": "⩝",
		"order": "ℴ",
		"orderof": "ℴ",
		"ordf": "ª",
		"ordm": "º",
		"origof": "⊶",
		"oror": "⩖",
		"orslope": "⩗",
		"orv": "⩛",
		"oS": "Ⓢ",
		"Oscr": "𝒪",
		"oscr": "ℴ",
		"Oslash": "Ø",
		"oslash": "ø",
		"osol": "⊘",
		"Otilde": "Õ",
		"otilde": "õ",
		"otimesas": "⨶",
		"Otimes": "⨷",
		"otimes": "⊗",
		"Ouml": "Ö",
		"ouml": "ö",
		"ovbar": "⌽",
		"OverBar": "‾",
		"OverBrace": "⏞",
		"OverBracket": "⎴",
		"OverParenthesis": "⏜",
		"para": "¶",
		"parallel": "∥",
		"par": "∥",
		"parsim": "⫳",
		"parsl": "⫽",
		"part": "∂",
		"PartialD": "∂",
		"Pcy": "П",
		"pcy": "п",
		"percnt": "%",
		"period": ".",
		"permil": "‰",
		"perp": "⊥",
		"pertenk": "‱",
		"Pfr": "𝔓",
		"pfr": "𝔭",
		"Phi": "Φ",
		"phi": "φ",
		"phiv": "ϕ",
		"phmmat": "ℳ",
		"phone": "☎",
		"Pi": "Π",
		"pi": "π",
		"pitchfork": "⋔",
		"piv": "ϖ",
		"planck": "ℏ",
		"planckh": "ℎ",
		"plankv": "ℏ",
		"plusacir": "⨣",
		"plusb": "⊞",
		"pluscir": "⨢",
		"plus": "+",
		"plusdo": "∔",
		"plusdu": "⨥",
		"pluse": "⩲",
		"PlusMinus": "±",
		"plusmn": "±",
		"plussim": "⨦",
		"plustwo": "⨧",
		"pm": "±",
		"Poincareplane": "ℌ",
		"pointint": "⨕",
		"popf": "𝕡",
		"Popf": "ℙ",
		"pound": "£",
		"prap": "⪷",
		"Pr": "⪻",
		"pr": "≺",
		"prcue": "≼",
		"precapprox": "⪷",
		"prec": "≺",
		"preccurlyeq": "≼",
		"Precedes": "≺",
		"PrecedesEqual": "⪯",
		"PrecedesSlantEqual": "≼",
		"PrecedesTilde": "≾",
		"preceq": "⪯",
		"precnapprox": "⪹",
		"precneqq": "⪵",
		"precnsim": "⋨",
		"pre": "⪯",
		"prE": "⪳",
		"precsim": "≾",
		"prime": "′",
		"Prime": "″",
		"primes": "ℙ",
		"prnap": "⪹",
		"prnE": "⪵",
		"prnsim": "⋨",
		"prod": "∏",
		"Product": "∏",
		"profalar": "⌮",
		"profline": "⌒",
		"profsurf": "⌓",
		"prop": "∝",
		"Proportional": "∝",
		"Proportion": "∷",
		"propto": "∝",
		"prsim": "≾",
		"prurel": "⊰",
		"Pscr": "𝒫",
		"pscr": "𝓅",
		"Psi": "Ψ",
		"psi": "ψ",
		"puncsp": " ",
		"Qfr": "𝔔",
		"qfr": "𝔮",
		"qint": "⨌",
		"qopf": "𝕢",
		"Qopf": "ℚ",
		"qprime": "⁗",
		"Qscr": "𝒬",
		"qscr": "𝓆",
		"quaternions": "ℍ",
		"quatint": "⨖",
		"quest": "?",
		"questeq": "≟",
		"quot": "\"",
		"QUOT": "\"",
		"rAarr": "⇛",
		"race": "∽̱",
		"Racute": "Ŕ",
		"racute": "ŕ",
		"radic": "√",
		"raemptyv": "⦳",
		"rang": "⟩",
		"Rang": "⟫",
		"rangd": "⦒",
		"range": "⦥",
		"rangle": "⟩",
		"raquo": "»",
		"rarrap": "⥵",
		"rarrb": "⇥",
		"rarrbfs": "⤠",
		"rarrc": "⤳",
		"rarr": "→",
		"Rarr": "↠",
		"rArr": "⇒",
		"rarrfs": "⤞",
		"rarrhk": "↪",
		"rarrlp": "↬",
		"rarrpl": "⥅",
		"rarrsim": "⥴",
		"Rarrtl": "⤖",
		"rarrtl": "↣",
		"rarrw": "↝",
		"ratail": "⤚",
		"rAtail": "⤜",
		"ratio": "∶",
		"rationals": "ℚ",
		"rbarr": "⤍",
		"rBarr": "⤏",
		"RBarr": "⤐",
		"rbbrk": "❳",
		"rbrace": "}",
		"rbrack": "]",
		"rbrke": "⦌",
		"rbrksld": "⦎",
		"rbrkslu": "⦐",
		"Rcaron": "Ř",
		"rcaron": "ř",
		"Rcedil": "Ŗ",
		"rcedil": "ŗ",
		"rceil": "⌉",
		"rcub": "}",
		"Rcy": "Р",
		"rcy": "р",
		"rdca": "⤷",
		"rdldhar": "⥩",
		"rdquo": "”",
		"rdquor": "”",
		"rdsh": "↳",
		"real": "ℜ",
		"realine": "ℛ",
		"realpart": "ℜ",
		"reals": "ℝ",
		"Re": "ℜ",
		"rect": "▭",
		"reg": "®",
		"REG": "®",
		"ReverseElement": "∋",
		"ReverseEquilibrium": "⇋",
		"ReverseUpEquilibrium": "⥯",
		"rfisht": "⥽",
		"rfloor": "⌋",
		"rfr": "𝔯",
		"Rfr": "ℜ",
		"rHar": "⥤",
		"rhard": "⇁",
		"rharu": "⇀",
		"rharul": "⥬",
		"Rho": "Ρ",
		"rho": "ρ",
		"rhov": "ϱ",
		"RightAngleBracket": "⟩",
		"RightArrowBar": "⇥",
		"rightarrow": "→",
		"RightArrow": "→",
		"Rightarrow": "⇒",
		"RightArrowLeftArrow": "⇄",
		"rightarrowtail": "↣",
		"RightCeiling": "⌉",
		"RightDoubleBracket": "⟧",
		"RightDownTeeVector": "⥝",
		"RightDownVectorBar": "⥕",
		"RightDownVector": "⇂",
		"RightFloor": "⌋",
		"rightharpoondown": "⇁",
		"rightharpoonup": "⇀",
		"rightleftarrows": "⇄",
		"rightleftharpoons": "⇌",
		"rightrightarrows": "⇉",
		"rightsquigarrow": "↝",
		"RightTeeArrow": "↦",
		"RightTee": "⊢",
		"RightTeeVector": "⥛",
		"rightthreetimes": "⋌",
		"RightTriangleBar": "⧐",
		"RightTriangle": "⊳",
		"RightTriangleEqual": "⊵",
		"RightUpDownVector": "⥏",
		"RightUpTeeVector": "⥜",
		"RightUpVectorBar": "⥔",
		"RightUpVector": "↾",
		"RightVectorBar": "⥓",
		"RightVector": "⇀",
		"ring": "˚",
		"risingdotseq": "≓",
		"rlarr": "⇄",
		"rlhar": "⇌",
		"rlm": "‏",
		"rmoustache": "⎱",
		"rmoust": "⎱",
		"rnmid": "⫮",
		"roang": "⟭",
		"roarr": "⇾",
		"robrk": "⟧",
		"ropar": "⦆",
		"ropf": "𝕣",
		"Ropf": "ℝ",
		"roplus": "⨮",
		"rotimes": "⨵",
		"RoundImplies": "⥰",
		"rpar": ")",
		"rpargt": "⦔",
		"rppolint": "⨒",
		"rrarr": "⇉",
		"Rrightarrow": "⇛",
		"rsaquo": "›",
		"rscr": "𝓇",
		"Rscr": "ℛ",
		"rsh": "↱",
		"Rsh": "↱",
		"rsqb": "]",
		"rsquo": "’",
		"rsquor": "’",
		"rthree": "⋌",
		"rtimes": "⋊",
		"rtri": "▹",
		"rtrie": "⊵",
		"rtrif": "▸",
		"rtriltri": "⧎",
		"RuleDelayed": "⧴",
		"ruluhar": "⥨",
		"rx": "℞",
		"Sacute": "Ś",
		"sacute": "ś",
		"sbquo": "‚",
		"scap": "⪸",
		"Scaron": "Š",
		"scaron": "š",
		"Sc": "⪼",
		"sc": "≻",
		"sccue": "≽",
		"sce": "⪰",
		"scE": "⪴",
		"Scedil": "Ş",
		"scedil": "ş",
		"Scirc": "Ŝ",
		"scirc": "ŝ",
		"scnap": "⪺",
		"scnE": "⪶",
		"scnsim": "⋩",
		"scpolint": "⨓",
		"scsim": "≿",
		"Scy": "С",
		"scy": "с",
		"sdotb": "⊡",
		"sdot": "⋅",
		"sdote": "⩦",
		"searhk": "⤥",
		"searr": "↘",
		"seArr": "⇘",
		"searrow": "↘",
		"sect": "§",
		"semi": ";",
		"seswar": "⤩",
		"setminus": "∖",
		"setmn": "∖",
		"sext": "✶",
		"Sfr": "𝔖",
		"sfr": "𝔰",
		"sfrown": "⌢",
		"sharp": "♯",
		"SHCHcy": "Щ",
		"shchcy": "щ",
		"SHcy": "Ш",
		"shcy": "ш",
		"ShortDownArrow": "↓",
		"ShortLeftArrow": "←",
		"shortmid": "∣",
		"shortparallel": "∥",
		"ShortRightArrow": "→",
		"ShortUpArrow": "↑",
		"shy": "­",
		"Sigma": "Σ",
		"sigma": "σ",
		"sigmaf": "ς",
		"sigmav": "ς",
		"sim": "∼",
		"simdot": "⩪",
		"sime": "≃",
		"simeq": "≃",
		"simg": "⪞",
		"simgE": "⪠",
		"siml": "⪝",
		"simlE": "⪟",
		"simne": "≆",
		"simplus": "⨤",
		"simrarr": "⥲",
		"slarr": "←",
		"SmallCircle": "∘",
		"smallsetminus": "∖",
		"smashp": "⨳",
		"smeparsl": "⧤",
		"smid": "∣",
		"smile": "⌣",
		"smt": "⪪",
		"smte": "⪬",
		"smtes": "⪬︀",
		"SOFTcy": "Ь",
		"softcy": "ь",
		"solbar": "⌿",
		"solb": "⧄",
		"sol": "/",
		"Sopf": "𝕊",
		"sopf": "𝕤",
		"spades": "♠",
		"spadesuit": "♠",
		"spar": "∥",
		"sqcap": "⊓",
		"sqcaps": "⊓︀",
		"sqcup": "⊔",
		"sqcups": "⊔︀",
		"Sqrt": "√",
		"sqsub": "⊏",
		"sqsube": "⊑",
		"sqsubset": "⊏",
		"sqsubseteq": "⊑",
		"sqsup": "⊐",
		"sqsupe": "⊒",
		"sqsupset": "⊐",
		"sqsupseteq": "⊒",
		"square": "□",
		"Square": "□",
		"SquareIntersection": "⊓",
		"SquareSubset": "⊏",
		"SquareSubsetEqual": "⊑",
		"SquareSuperset": "⊐",
		"SquareSupersetEqual": "⊒",
		"SquareUnion": "⊔",
		"squarf": "▪",
		"squ": "□",
		"squf": "▪",
		"srarr": "→",
		"Sscr": "𝒮",
		"sscr": "𝓈",
		"ssetmn": "∖",
		"ssmile": "⌣",
		"sstarf": "⋆",
		"Star": "⋆",
		"star": "☆",
		"starf": "★",
		"straightepsilon": "ϵ",
		"straightphi": "ϕ",
		"strns": "¯",
		"sub": "⊂",
		"Sub": "⋐",
		"subdot": "⪽",
		"subE": "⫅",
		"sube": "⊆",
		"subedot": "⫃",
		"submult": "⫁",
		"subnE": "⫋",
		"subne": "⊊",
		"subplus": "⪿",
		"subrarr": "⥹",
		"subset": "⊂",
		"Subset": "⋐",
		"subseteq": "⊆",
		"subseteqq": "⫅",
		"SubsetEqual": "⊆",
		"subsetneq": "⊊",
		"subsetneqq": "⫋",
		"subsim": "⫇",
		"subsub": "⫕",
		"subsup": "⫓",
		"succapprox": "⪸",
		"succ": "≻",
		"succcurlyeq": "≽",
		"Succeeds": "≻",
		"SucceedsEqual": "⪰",
		"SucceedsSlantEqual": "≽",
		"SucceedsTilde": "≿",
		"succeq": "⪰",
		"succnapprox": "⪺",
		"succneqq": "⪶",
		"succnsim": "⋩",
		"succsim": "≿",
		"SuchThat": "∋",
		"sum": "∑",
		"Sum": "∑",
		"sung": "♪",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"sup": "⊃",
		"Sup": "⋑",
		"supdot": "⪾",
		"supdsub": "⫘",
		"supE": "⫆",
		"supe": "⊇",
		"supedot": "⫄",
		"Superset": "⊃",
		"SupersetEqual": "⊇",
		"suphsol": "⟉",
		"suphsub": "⫗",
		"suplarr": "⥻",
		"supmult": "⫂",
		"supnE": "⫌",
		"supne": "⊋",
		"supplus": "⫀",
		"supset": "⊃",
		"Supset": "⋑",
		"supseteq": "⊇",
		"supseteqq": "⫆",
		"supsetneq": "⊋",
		"supsetneqq": "⫌",
		"supsim": "⫈",
		"supsub": "⫔",
		"supsup": "⫖",
		"swarhk": "⤦",
		"swarr": "↙",
		"swArr": "⇙",
		"swarrow": "↙",
		"swnwar": "⤪",
		"szlig": "ß",
		"Tab": "\t",
		"target": "⌖",
		"Tau": "Τ",
		"tau": "τ",
		"tbrk": "⎴",
		"Tcaron": "Ť",
		"tcaron": "ť",
		"Tcedil": "Ţ",
		"tcedil": "ţ",
		"Tcy": "Т",
		"tcy": "т",
		"tdot": "⃛",
		"telrec": "⌕",
		"Tfr": "𝔗",
		"tfr": "𝔱",
		"there4": "∴",
		"therefore": "∴",
		"Therefore": "∴",
		"Theta": "Θ",
		"theta": "θ",
		"thetasym": "ϑ",
		"thetav": "ϑ",
		"thickapprox": "≈",
		"thicksim": "∼",
		"ThickSpace": "  ",
		"ThinSpace": " ",
		"thinsp": " ",
		"thkap": "≈",
		"thksim": "∼",
		"THORN": "Þ",
		"thorn": "þ",
		"tilde": "˜",
		"Tilde": "∼",
		"TildeEqual": "≃",
		"TildeFullEqual": "≅",
		"TildeTilde": "≈",
		"timesbar": "⨱",
		"timesb": "⊠",
		"times": "×",
		"timesd": "⨰",
		"tint": "∭",
		"toea": "⤨",
		"topbot": "⌶",
		"topcir": "⫱",
		"top": "⊤",
		"Topf": "𝕋",
		"topf": "𝕥",
		"topfork": "⫚",
		"tosa": "⤩",
		"tprime": "‴",
		"trade": "™",
		"TRADE": "™",
		"triangle": "▵",
		"triangledown": "▿",
		"triangleleft": "◃",
		"trianglelefteq": "⊴",
		"triangleq": "≜",
		"triangleright": "▹",
		"trianglerighteq": "⊵",
		"tridot": "◬",
		"trie": "≜",
		"triminus": "⨺",
		"TripleDot": "⃛",
		"triplus": "⨹",
		"trisb": "⧍",
		"tritime": "⨻",
		"trpezium": "⏢",
		"Tscr": "𝒯",
		"tscr": "𝓉",
		"TScy": "Ц",
		"tscy": "ц",
		"TSHcy": "Ћ",
		"tshcy": "ћ",
		"Tstrok": "Ŧ",
		"tstrok": "ŧ",
		"twixt": "≬",
		"twoheadleftarrow": "↞",
		"twoheadrightarrow": "↠",
		"Uacute": "Ú",
		"uacute": "ú",
		"uarr": "↑",
		"Uarr": "↟",
		"uArr": "⇑",
		"Uarrocir": "⥉",
		"Ubrcy": "Ў",
		"ubrcy": "ў",
		"Ubreve": "Ŭ",
		"ubreve": "ŭ",
		"Ucirc": "Û",
		"ucirc": "û",
		"Ucy": "У",
		"ucy": "у",
		"udarr": "⇅",
		"Udblac": "Ű",
		"udblac": "ű",
		"udhar": "⥮",
		"ufisht": "⥾",
		"Ufr": "𝔘",
		"ufr": "𝔲",
		"Ugrave": "Ù",
		"ugrave": "ù",
		"uHar": "⥣",
		"uharl": "↿",
		"uharr": "↾",
		"uhblk": "▀",
		"ulcorn": "⌜",
		"ulcorner": "⌜",
		"ulcrop": "⌏",
		"ultri": "◸",
		"Umacr": "Ū",
		"umacr": "ū",
		"uml": "¨",
		"UnderBar": "_",
		"UnderBrace": "⏟",
		"UnderBracket": "⎵",
		"UnderParenthesis": "⏝",
		"Union": "⋃",
		"UnionPlus": "⊎",
		"Uogon": "Ų",
		"uogon": "ų",
		"Uopf": "𝕌",
		"uopf": "𝕦",
		"UpArrowBar": "⤒",
		"uparrow": "↑",
		"UpArrow": "↑",
		"Uparrow": "⇑",
		"UpArrowDownArrow": "⇅",
		"updownarrow": "↕",
		"UpDownArrow": "↕",
		"Updownarrow": "⇕",
		"UpEquilibrium": "⥮",
		"upharpoonleft": "↿",
		"upharpoonright": "↾",
		"uplus": "⊎",
		"UpperLeftArrow": "↖",
		"UpperRightArrow": "↗",
		"upsi": "υ",
		"Upsi": "ϒ",
		"upsih": "ϒ",
		"Upsilon": "Υ",
		"upsilon": "υ",
		"UpTeeArrow": "↥",
		"UpTee": "⊥",
		"upuparrows": "⇈",
		"urcorn": "⌝",
		"urcorner": "⌝",
		"urcrop": "⌎",
		"Uring": "Ů",
		"uring": "ů",
		"urtri": "◹",
		"Uscr": "𝒰",
		"uscr": "𝓊",
		"utdot": "⋰",
		"Utilde": "Ũ",
		"utilde": "ũ",
		"utri": "▵",
		"utrif": "▴",
		"uuarr": "⇈",
		"Uuml": "Ü",
		"uuml": "ü",
		"uwangle": "⦧",
		"vangrt": "⦜",
		"varepsilon": "ϵ",
		"varkappa": "ϰ",
		"varnothing": "∅",
		"varphi": "ϕ",
		"varpi": "ϖ",
		"varpropto": "∝",
		"varr": "↕",
		"vArr": "⇕",
		"varrho": "ϱ",
		"varsigma": "ς",
		"varsubsetneq": "⊊︀",
		"varsubsetneqq": "⫋︀",
		"varsupsetneq": "⊋︀",
		"varsupsetneqq": "⫌︀",
		"vartheta": "ϑ",
		"vartriangleleft": "⊲",
		"vartriangleright": "⊳",
		"vBar": "⫨",
		"Vbar": "⫫",
		"vBarv": "⫩",
		"Vcy": "В",
		"vcy": "в",
		"vdash": "⊢",
		"vDash": "⊨",
		"Vdash": "⊩",
		"VDash": "⊫",
		"Vdashl": "⫦",
		"veebar": "⊻",
		"vee": "∨",
		"Vee": "⋁",
		"veeeq": "≚",
		"vellip": "⋮",
		"verbar": "|",
		"Verbar": "‖",
		"vert": "|",
		"Vert": "‖",
		"VerticalBar": "∣",
		"VerticalLine": "|",
		"VerticalSeparator": "❘",
		"VerticalTilde": "≀",
		"VeryThinSpace": " ",
		"Vfr": "𝔙",
		"vfr": "𝔳",
		"vltri": "⊲",
		"vnsub": "⊂⃒",
		"vnsup": "⊃⃒",
		"Vopf": "𝕍",
		"vopf": "𝕧",
		"vprop": "∝",
		"vrtri": "⊳",
		"Vscr": "𝒱",
		"vscr": "𝓋",
		"vsubnE": "⫋︀",
		"vsubne": "⊊︀",
		"vsupnE": "⫌︀",
		"vsupne": "⊋︀",
		"Vvdash": "⊪",
		"vzigzag": "⦚",
		"Wcirc": "Ŵ",
		"wcirc": "ŵ",
		"wedbar": "⩟",
		"wedge": "∧",
		"Wedge": "⋀",
		"wedgeq": "≙",
		"weierp": "℘",
		"Wfr": "𝔚",
		"wfr": "𝔴",
		"Wopf": "𝕎",
		"wopf": "𝕨",
		"wp": "℘",
		"wr": "≀",
		"wreath": "≀",
		"Wscr": "𝒲",
		"wscr": "𝓌",
		"xcap": "⋂",
		"xcirc": "◯",
		"xcup": "⋃",
		"xdtri": "▽",
		"Xfr": "𝔛",
		"xfr": "𝔵",
		"xharr": "⟷",
		"xhArr": "⟺",
		"Xi": "Ξ",
		"xi": "ξ",
		"xlarr": "⟵",
		"xlArr": "⟸",
		"xmap": "⟼",
		"xnis": "⋻",
		"xodot": "⨀",
		"Xopf": "𝕏",
		"xopf": "𝕩",
		"xoplus": "⨁",
		"xotime": "⨂",
		"xrarr": "⟶",
		"xrArr": "⟹",
		"Xscr": "𝒳",
		"xscr": "𝓍",
		"xsqcup": "⨆",
		"xuplus": "⨄",
		"xutri": "△",
		"xvee": "⋁",
		"xwedge": "⋀",
		"Yacute": "Ý",
		"yacute": "ý",
		"YAcy": "Я",
		"yacy": "я",
		"Ycirc": "Ŷ",
		"ycirc": "ŷ",
		"Ycy": "Ы",
		"ycy": "ы",
		"yen": "¥",
		"Yfr": "𝔜",
		"yfr": "𝔶",
		"YIcy": "Ї",
		"yicy": "ї",
		"Yopf": "𝕐",
		"yopf": "𝕪",
		"Yscr": "𝒴",
		"yscr": "𝓎",
		"YUcy": "Ю",
		"yucy": "ю",
		"yuml": "ÿ",
		"Yuml": "Ÿ",
		"Zacute": "Ź",
		"zacute": "ź",
		"Zcaron": "Ž",
		"zcaron": "ž",
		"Zcy": "З",
		"zcy": "з",
		"Zdot": "Ż",
		"zdot": "ż",
		"zeetrf": "ℨ",
		"ZeroWidthSpace": "​",
		"Zeta": "Ζ",
		"zeta": "ζ",
		"zfr": "𝔷",
		"Zfr": "ℨ",
		"ZHcy": "Ж",
		"zhcy": "ж",
		"zigrarr": "⇝",
		"zopf": "𝕫",
		"Zopf": "ℤ",
		"Zscr": "𝒵",
		"zscr": "𝓏",
		"zwj": "‍",
		"zwnj": "‌"
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var entityMap = __webpack_require__(17),
	    legacyMap = __webpack_require__(19),
	    xmlMap    = __webpack_require__(16),
	    decodeCodePoint = __webpack_require__(20);
	
	var decodeXMLStrict  = getStrictDecoder(xmlMap),
	    decodeHTMLStrict = getStrictDecoder(entityMap);
	
	function getStrictDecoder(map){
		var keys = Object.keys(map).join("|"),
		    replace = getReplacer(map);
	
		keys += "|#[xX][\\da-fA-F]+|#\\d+";
	
		var re = new RegExp("&(?:" + keys + ");", "g");
	
		return function(str){
			return String(str).replace(re, replace);
		};
	}
	
	var decodeHTML = (function(){
		var legacy = Object.keys(legacyMap)
			.sort(sorter);
	
		var keys = Object.keys(entityMap)
			.sort(sorter);
	
		for(var i = 0, j = 0; i < keys.length; i++){
			if(legacy[j] === keys[i]){
				keys[i] += ";?";
				j++;
			} else {
				keys[i] += ";";
			}
		}
	
		var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
		    replace = getReplacer(entityMap);
	
		function replacer(str){
			if(str.substr(-1) !== ";") str += ";";
			return replace(str);
		}
	
		//TODO consider creating a merged map
		return function(str){
			return String(str).replace(re, replacer);
		};
	}());
	
	function sorter(a, b){
		return a < b ? 1 : -1;
	}
	
	function getReplacer(map){
		return function replace(str){
			if(str.charAt(1) === "#"){
				if(str.charAt(2) === "X" || str.charAt(2) === "x"){
					return decodeCodePoint(parseInt(str.substr(3), 16));
				}
				return decodeCodePoint(parseInt(str.substr(2), 10));
			}
			return map[str.slice(1, -1)];
		};
	}
	
	module.exports = {
		XML: decodeXMLStrict,
		HTML: decodeHTML,
		HTMLStrict: decodeHTMLStrict
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
		"Aacute": "Á",
		"aacute": "á",
		"Acirc": "Â",
		"acirc": "â",
		"acute": "´",
		"AElig": "Æ",
		"aelig": "æ",
		"Agrave": "À",
		"agrave": "à",
		"amp": "&",
		"AMP": "&",
		"Aring": "Å",
		"aring": "å",
		"Atilde": "Ã",
		"atilde": "ã",
		"Auml": "Ä",
		"auml": "ä",
		"brvbar": "¦",
		"Ccedil": "Ç",
		"ccedil": "ç",
		"cedil": "¸",
		"cent": "¢",
		"copy": "©",
		"COPY": "©",
		"curren": "¤",
		"deg": "°",
		"divide": "÷",
		"Eacute": "É",
		"eacute": "é",
		"Ecirc": "Ê",
		"ecirc": "ê",
		"Egrave": "È",
		"egrave": "è",
		"ETH": "Ð",
		"eth": "ð",
		"Euml": "Ë",
		"euml": "ë",
		"frac12": "½",
		"frac14": "¼",
		"frac34": "¾",
		"gt": ">",
		"GT": ">",
		"Iacute": "Í",
		"iacute": "í",
		"Icirc": "Î",
		"icirc": "î",
		"iexcl": "¡",
		"Igrave": "Ì",
		"igrave": "ì",
		"iquest": "¿",
		"Iuml": "Ï",
		"iuml": "ï",
		"laquo": "«",
		"lt": "<",
		"LT": "<",
		"macr": "¯",
		"micro": "µ",
		"middot": "·",
		"nbsp": " ",
		"not": "¬",
		"Ntilde": "Ñ",
		"ntilde": "ñ",
		"Oacute": "Ó",
		"oacute": "ó",
		"Ocirc": "Ô",
		"ocirc": "ô",
		"Ograve": "Ò",
		"ograve": "ò",
		"ordf": "ª",
		"ordm": "º",
		"Oslash": "Ø",
		"oslash": "ø",
		"Otilde": "Õ",
		"otilde": "õ",
		"Ouml": "Ö",
		"ouml": "ö",
		"para": "¶",
		"plusmn": "±",
		"pound": "£",
		"quot": "\"",
		"QUOT": "\"",
		"raquo": "»",
		"reg": "®",
		"REG": "®",
		"sect": "§",
		"shy": "­",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"szlig": "ß",
		"THORN": "Þ",
		"thorn": "þ",
		"times": "×",
		"Uacute": "Ú",
		"uacute": "ú",
		"Ucirc": "Û",
		"ucirc": "û",
		"Ugrave": "Ù",
		"ugrave": "ù",
		"uml": "¨",
		"Uuml": "Ü",
		"uuml": "ü",
		"Yacute": "Ý",
		"yacute": "ý",
		"yen": "¥",
		"yuml": "ÿ"
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var decodeMap = __webpack_require__(21);
	
	module.exports = decodeCodePoint;
	
	// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
	function decodeCodePoint(codePoint){
	
		if((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF){
			return "\uFFFD";
		}
	
		if(codePoint in decodeMap){
			codePoint = decodeMap[codePoint];
		}
	
		var output = "";
	
		if(codePoint > 0xFFFF){
			codePoint -= 0x10000;
			output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}
	
		output += String.fromCharCode(codePoint);
		return output;
	}


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
		"0": 65533,
		"128": 8364,
		"130": 8218,
		"131": 402,
		"132": 8222,
		"133": 8230,
		"134": 8224,
		"135": 8225,
		"136": 710,
		"137": 8240,
		"138": 352,
		"139": 8249,
		"140": 338,
		"142": 381,
		"145": 8216,
		"146": 8217,
		"147": 8220,
		"148": 8221,
		"149": 8226,
		"150": 8211,
		"151": 8212,
		"152": 732,
		"153": 8482,
		"154": 353,
		"155": 8250,
		"156": 339,
		"158": 382,
		"159": 376
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Node = __webpack_require__(9);
	var common = __webpack_require__(11);
	var normalizeReference = __webpack_require__(24);
	
	var normalizeURI = common.normalizeURI;
	var unescapeString = common.unescapeString;
	var fromCodePoint = __webpack_require__(23);
	var decodeHTML = __webpack_require__(14).decodeHTML;
	__webpack_require__(25); // Polyfill for String.prototype.repeat
	
	// Constants for character codes:
	
	var C_NEWLINE = 10;
	var C_ASTERISK = 42;
	var C_UNDERSCORE = 95;
	var C_BACKTICK = 96;
	var C_OPEN_BRACKET = 91;
	var C_CLOSE_BRACKET = 93;
	var C_LESSTHAN = 60;
	var C_BANG = 33;
	var C_BACKSLASH = 92;
	var C_AMPERSAND = 38;
	var C_OPEN_PAREN = 40;
	var C_CLOSE_PAREN = 41;
	var C_COLON = 58;
	var C_SINGLEQUOTE = 39;
	var C_DOUBLEQUOTE = 34;
	
	// Some regexps used in inline parser:
	
	var ESCAPABLE = common.ESCAPABLE;
	var ESCAPED_CHAR = '\\\\' + ESCAPABLE;
	var REG_CHAR = '[^\\\\()\\x00-\\x20]';
	var IN_PARENS_NOSP = '\\((' + REG_CHAR + '|' + ESCAPED_CHAR + '|\\\\)*\\)';
	
	var ENTITY = common.ENTITY;
	var reHtmlTag = common.reHtmlTag;
	
	var rePunctuation = new RegExp(/^[\u2000-\u206F\u2E00-\u2E7F\\'!"#\$%&\(\)\*\+,\-\.\/:;<=>\?@\[\]\^_`\{\|\}~]/);
	
	var reLinkTitle = new RegExp(
	    '^(?:"(' + ESCAPED_CHAR + '|[^"\\x00])*"' +
	        '|' +
	        '\'(' + ESCAPED_CHAR + '|[^\'\\x00])*\'' +
	        '|' +
	        '\\((' + ESCAPED_CHAR + '|[^)\\x00])*\\))');
	
	var reLinkDestinationBraces = new RegExp(
	    '^(?:[<](?:[^<>\\n\\\\\\x00]' + '|' + ESCAPED_CHAR + '|' + '\\\\)*[>])');
	
	var reLinkDestination = new RegExp(
	    '^(?:' + REG_CHAR + '+|' + ESCAPED_CHAR + '|\\\\|' + IN_PARENS_NOSP + ')*');
	
	var reEscapable = new RegExp('^' + ESCAPABLE);
	
	var reEntityHere = new RegExp('^' + ENTITY, 'i');
	
	var reTicks = /`+/;
	
	var reTicksHere = /^`+/;
	
	var reEllipses = /\.\.\./g;
	
	var reDash = /--+/g;
	
	var reEmailAutolink = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
	
	var reAutolink = /^<(?:coap|doi|javascript|aaa|aaas|about|acap|cap|cid|crid|data|dav|dict|dns|file|ftp|geo|go|gopher|h323|http|https|iax|icap|im|imap|info|ipp|iris|iris.beep|iris.xpc|iris.xpcs|iris.lwz|ldap|mailto|mid|msrp|msrps|mtqp|mupdate|news|nfs|ni|nih|nntp|opaquelocktoken|pop|pres|rtsp|service|session|shttp|sieve|sip|sips|sms|snmp|soap.beep|soap.beeps|tag|tel|telnet|tftp|thismessage|tn3270|tip|tv|urn|vemmi|ws|wss|xcon|xcon-userid|xmlrpc.beep|xmlrpc.beeps|xmpp|z39.50r|z39.50s|adiumxtra|afp|afs|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|chrome|chrome-extension|com-eventbrite-attendee|content|cvs|dlna-playsingle|dlna-playcontainer|dtn|dvb|ed2k|facetime|feed|finger|fish|gg|git|gizmoproject|gtalk|hcp|icon|ipn|irc|irc6|ircs|itms|jar|jms|keyparc|lastfm|ldaps|magnet|maps|market|message|mms|ms-help|msnim|mumble|mvn|notes|oid|palm|paparazzi|platform|proxy|psyc|query|res|resource|rmi|rsync|rtmp|secondlife|sftp|sgn|skype|smb|soldat|spotify|ssh|steam|svn|teamspeak|things|udp|unreal|ut2004|ventrilo|view-source|webcal|wtai|wyciwyg|xfire|xri|ymsgr):[^<>\x00-\x20]*>/i;
	
	var reSpnl = /^ *(?:\n *)?/;
	
	var reWhitespaceChar = /^\s/;
	
	var reWhitespace = /\s+/g;
	
	var reFinalSpace = / *$/;
	
	var reInitialSpace = /^ */;
	
	var reSpaceAtEndOfLine = /^ *(?:\n|$)/;
	
	var reLinkLabel = new RegExp('^\\[(?:[^\\\\\\[\\]]|' + ESCAPED_CHAR +
	  '|\\\\){0,1000}\\]');
	
	// Matches a string of non-special characters.
	var reMain = /^[^\n`\[\]\\!<&*_'"]+/m;
	
	var text = function(s) {
	    var node = new Node('Text');
	    node._literal = s;
	    return node;
	};
	
	// INLINE PARSER
	
	// These are methods of an InlineParser object, defined below.
	// An InlineParser keeps track of a subject (a string to be
	// parsed) and a position in that subject.
	
	// If re matches at current position in the subject, advance
	// position in subject and return the match; otherwise return null.
	var match = function(re) {
	    var m = re.exec(this.subject.slice(this.pos));
	    if (m === null) {
	        return null;
	    } else {
	        this.pos += m.index + m[0].length;
	        return m[0];
	    }
	};
	
	// Returns the code for the character at the current subject position, or -1
	// there are no more characters.
	var peek = function() {
	    if (this.pos < this.subject.length) {
	        return this.subject.charCodeAt(this.pos);
	    } else {
	        return -1;
	    }
	};
	
	// Parse zero or more space characters, including at most one newline
	var spnl = function() {
	    this.match(reSpnl);
	    return true;
	};
	
	// All of the parsers below try to match something at the current position
	// in the subject.  If they succeed in matching anything, they
	// return the inline matched, advancing the subject.
	
	// Attempt to parse backticks, adding either a backtick code span or a
	// literal sequence of backticks.
	var parseBackticks = function(block) {
	    var ticks = this.match(reTicksHere);
	    if (ticks === null) {
	        return false;
	    }
	    var afterOpenTicks = this.pos;
	    var matched;
	    var node;
	    while ((matched = this.match(reTicks)) !== null) {
	        if (matched === ticks) {
	            node = new Node('Code');
	            node._literal = this.subject.slice(afterOpenTicks,
	                                        this.pos - ticks.length)
	                          .trim().replace(reWhitespace, ' ');
	            block.appendChild(node);
	            return true;
	        }
	    }
	    // If we got here, we didn't match a closing backtick sequence.
	    this.pos = afterOpenTicks;
	    block.appendChild(text(ticks));
	    return true;
	};
	
	// Parse a backslash-escaped special character, adding either the escaped
	// character, a hard line break (if the backslash is followed by a newline),
	// or a literal backslash to the block's children.  Assumes current character
	// is a backslash.
	var parseBackslash = function(block) {
	    var subj = this.subject;
	    var node;
	    this.pos += 1;
	    if (this.peek() === C_NEWLINE) {
	        this.pos += 1;
	        node = new Node('Hardbreak');
	        block.appendChild(node);
	    } else if (reEscapable.test(subj.charAt(this.pos))) {
	        block.appendChild(text(subj.charAt(this.pos)));
	        this.pos += 1;
	    } else {
	        block.appendChild(text('\\'));
	    }
	    return true;
	};
	
	// Attempt to parse an autolink (URL or email in pointy brackets).
	var parseAutolink = function(block) {
	    var m;
	    var dest;
	    var node;
	    if ((m = this.match(reEmailAutolink))) {
	        dest = m.slice(1, m.length - 1);
	        node = new Node('Link');
	        node._destination = normalizeURI('mailto:' + dest);
	        node._title = '';
	        node.appendChild(text(dest));
	        block.appendChild(node);
	        return true;
	    } else if ((m = this.match(reAutolink))) {
	        dest = m.slice(1, m.length - 1);
	        node = new Node('Link');
	        node._destination = normalizeURI(dest);
	        node._title = '';
	        node.appendChild(text(dest));
	        block.appendChild(node);
	        return true;
	    } else {
	        return false;
	    }
	};
	
	// Attempt to parse a raw HTML tag.
	var parseHtmlTag = function(block) {
	    var m = this.match(reHtmlTag);
	    if (m === null) {
	        return false;
	    } else {
	        var node = new Node('Html');
	        node._literal = m;
	        block.appendChild(node);
	        return true;
	    }
	};
	
	// Scan a sequence of characters with code cc, and return information about
	// the number of delimiters and whether they are positioned such that
	// they can open and/or close emphasis or strong emphasis.  A utility
	// function for strong/emph parsing.
	var scanDelims = function(cc) {
	    var numdelims = 0;
	    var char_before, char_after, cc_after;
	    var startpos = this.pos;
	    var left_flanking, right_flanking, can_open, can_close;
	    var after_is_whitespace, after_is_punctuation, before_is_whitespace, before_is_punctuation;
	
	    if (cc === C_SINGLEQUOTE || cc === C_DOUBLEQUOTE) {
	        numdelims++;
	        this.pos++;
	    } else {
	        while (this.peek() === cc) {
	            numdelims++;
	            this.pos++;
	        }
	    }
	
	    if (numdelims === 0) {
	        return null;
	    }
	
	    char_before = startpos === 0 ? '\n' : this.subject.charAt(startpos - 1);
	
	    cc_after = this.peek();
	    if (cc_after === -1) {
	        char_after = '\n';
	    } else {
	        char_after = fromCodePoint(cc_after);
	    }
	
	    after_is_whitespace = reWhitespaceChar.test(char_after);
	    after_is_punctuation = rePunctuation.test(char_after);
	    before_is_whitespace = reWhitespaceChar.test(char_before);
	    before_is_punctuation = rePunctuation.test(char_before);
	
	    left_flanking = !after_is_whitespace &&
	            !(after_is_punctuation && !before_is_whitespace && !before_is_punctuation);
	    right_flanking = !before_is_whitespace &&
	            !(before_is_punctuation && !after_is_whitespace && !after_is_punctuation);
	    if (cc === C_UNDERSCORE) {
	        can_open = left_flanking &&
	            (!right_flanking || before_is_punctuation);
	        can_close = right_flanking &&
	            (!left_flanking || after_is_punctuation);
	    } else {
	        can_open = left_flanking;
	        can_close = right_flanking;
	    }
	    this.pos = startpos;
	    return { numdelims: numdelims,
	             can_open: can_open,
	             can_close: can_close };
	};
	
	// Handle a delimiter marker for emphasis or a quote.
	var handleDelim = function(cc, block) {
	    var res = this.scanDelims(cc);
	    if (!res) {
	        return false;
	    }
	    var numdelims = res.numdelims;
	    var startpos = this.pos;
	    var contents;
	
	    this.pos += numdelims;
	    if (cc === C_SINGLEQUOTE) {
	        contents = "\u2019";
	    } else if (cc === C_DOUBLEQUOTE) {
	        contents = "\u201C";
	    } else {
	        contents = this.subject.slice(startpos, this.pos);
	    }
	    var node = text(contents);
	    block.appendChild(node);
	
	    // Add entry to stack for this opener
	    this.delimiters = { cc: cc,
	                        numdelims: numdelims,
	                        node: node,
	                        previous: this.delimiters,
	                        next: null,
	                        can_open: res.can_open,
	                        can_close: res.can_close,
	                        active: true };
	    if (this.delimiters.previous !== null) {
	        this.delimiters.previous.next = this.delimiters;
	    }
	
	    return true;
	
	};
	
	var removeDelimiter = function(delim) {
	    if (delim.previous !== null) {
	        delim.previous.next = delim.next;
	    }
	    if (delim.next === null) {
	        // top of stack
	        this.delimiters = delim.previous;
	    } else {
	        delim.next.previous = delim.previous;
	    }
	};
	
	var removeDelimitersBetween = function(bottom, top) {
	    if (bottom.next !== top) {
	        bottom.next = top;
	        top.previous = bottom;
	    }
	};
	
	var processEmphasis = function(stack_bottom) {
	    var opener, closer, old_closer;
	    var opener_inl, closer_inl;
	    var tempstack;
	    var use_delims;
	    var tmp, next;
	    var opener_found;
	    var openers_bottom = [];
	
	    openers_bottom[C_UNDERSCORE] = stack_bottom;
	    openers_bottom[C_ASTERISK] = stack_bottom;
	    openers_bottom[C_SINGLEQUOTE] = stack_bottom;
	    openers_bottom[C_DOUBLEQUOTE] = stack_bottom;
	
	    // find first closer above stack_bottom:
	    closer = this.delimiters;
	    while (closer !== null && closer.previous !== stack_bottom) {
	        closer = closer.previous;
	    }
	    // move forward, looking for closers, and handling each
	    while (closer !== null) {
	        var closercc = closer.cc;
	        if (!(closer.can_close && (closercc === C_UNDERSCORE ||
	                                   closercc === C_ASTERISK ||
	                                   closercc === C_SINGLEQUOTE ||
	                                   closercc === C_DOUBLEQUOTE))) {
	            closer = closer.next;
	        } else {
	            // found emphasis closer. now look back for first matching opener:
	            opener = closer.previous;
	            opener_found = false;
	            while (opener !== null && opener !== stack_bottom &&
	                   opener !== openers_bottom[closercc]) {
	                if (opener.cc === closer.cc && opener.can_open) {
	                    opener_found = true;
	                    break;
	                }
	                opener = opener.previous;
	            }
	            old_closer = closer;
	
	            if (closercc === C_ASTERISK || closercc === C_UNDERSCORE) {
	                if (!opener_found) {
	                    closer = closer.next;
	                } else {
	                    // calculate actual number of delimiters used from closer
	                    if (closer.numdelims < 3 || opener.numdelims < 3) {
	                        use_delims = closer.numdelims <= opener.numdelims ?
	                            closer.numdelims : opener.numdelims;
	                    } else {
	                        use_delims = closer.numdelims % 2 === 0 ? 2 : 1;
	                    }
	
	                    opener_inl = opener.node;
	                    closer_inl = closer.node;
	
	                    // remove used delimiters from stack elts and inlines
	                    opener.numdelims -= use_delims;
	                    closer.numdelims -= use_delims;
	                    opener_inl._literal =
	                        opener_inl._literal.slice(0,
	                                                  opener_inl._literal.length - use_delims);
	                    closer_inl._literal =
	                        closer_inl._literal.slice(0,
	                                                  closer_inl._literal.length - use_delims);
	
	                    // build contents for new emph element
	                    var emph = new Node(use_delims === 1 ? 'Emph' : 'Strong');
	
	                    tmp = opener_inl._next;
	                    while (tmp && tmp !== closer_inl) {
	                        next = tmp._next;
	                        tmp.unlink();
	                        emph.appendChild(tmp);
	                        tmp = next;
	                    }
	
	                    opener_inl.insertAfter(emph);
	
	                    // remove elts between opener and closer in delimiters stack
	                    removeDelimitersBetween(opener, closer);
	
	                    // if opener has 0 delims, remove it and the inline
	                    if (opener.numdelims === 0) {
	                        opener_inl.unlink();
	                        this.removeDelimiter(opener);
	                    }
	
	                    if (closer.numdelims === 0) {
	                        closer_inl.unlink();
	                        tempstack = closer.next;
	                        this.removeDelimiter(closer);
	                        closer = tempstack;
	                    }
	
	                }
	
	            } else if (closercc === C_SINGLEQUOTE) {
	                closer.node._literal = "\u2019";
	                if (opener_found) {
	                    opener.node._literal = "\u2018";
	                }
	                closer = closer.next;
	
	            } else if (closercc === C_DOUBLEQUOTE) {
	                closer.node._literal = "\u201D";
	                if (opener_found) {
	                    opener.node.literal = "\u201C";
	                }
	                closer = closer.next;
	
	            }
	            if (!opener_found) {
	                // Set lower bound for future searches for openers:
	                openers_bottom[closercc] = old_closer.previous;
	                if (!old_closer.can_open) {
	                    // We can remove a closer that can't be an opener,
	                    // once we've seen there's no matching opener:
	                    this.removeDelimiter(old_closer);
	                }
	            }
	        }
	
	    }
	
	    // remove all delimiters
	    while (this.delimiters !== null && this.delimiters !== stack_bottom) {
	        this.removeDelimiter(this.delimiters);
	    }
	};
	
	// Attempt to parse link title (sans quotes), returning the string
	// or null if no match.
	var parseLinkTitle = function() {
	    var title = this.match(reLinkTitle);
	    if (title === null) {
	        return null;
	    } else {
	        // chop off quotes from title and unescape:
	        return unescapeString(title.substr(1, title.length - 2));
	    }
	};
	
	// Attempt to parse link destination, returning the string or
	// null if no match.
	var parseLinkDestination = function() {
	    var res = this.match(reLinkDestinationBraces);
	    if (res === null) {
	        res = this.match(reLinkDestination);
	        if (res === null) {
	            return null;
	        } else {
	            return normalizeURI(unescapeString(res));
	        }
	    } else {  // chop off surrounding <..>:
	        return normalizeURI(unescapeString(res.substr(1, res.length - 2)));
	    }
	};
	
	// Attempt to parse a link label, returning number of characters parsed.
	var parseLinkLabel = function() {
	    var m = this.match(reLinkLabel);
	    if (m === null || m.length > 1001) {
	        return 0;
	    } else {
	        return m.length;
	    }
	};
	
	// Add open bracket to delimiter stack and add a text node to block's children.
	var parseOpenBracket = function(block) {
	    var startpos = this.pos;
	    this.pos += 1;
	
	    var node = text('[');
	    block.appendChild(node);
	
	    // Add entry to stack for this opener
	    this.delimiters = { cc: C_OPEN_BRACKET,
	                        numdelims: 1,
	                        node: node,
	                        previous: this.delimiters,
	                        next: null,
	                        can_open: true,
	                        can_close: false,
	                        index: startpos,
	                        active: true };
	    if (this.delimiters.previous !== null) {
	        this.delimiters.previous.next = this.delimiters;
	    }
	
	    return true;
	
	};
	
	// IF next character is [, and ! delimiter to delimiter stack and
	// add a text node to block's children.  Otherwise just add a text node.
	var parseBang = function(block) {
	    var startpos = this.pos;
	    this.pos += 1;
	    if (this.peek() === C_OPEN_BRACKET) {
	        this.pos += 1;
	
	        var node = text('![');
	        block.appendChild(node);
	
	        // Add entry to stack for this opener
	        this.delimiters = { cc: C_BANG,
	                            numdelims: 1,
	                            node: node,
	                            previous: this.delimiters,
	                            next: null,
	                            can_open: true,
	                            can_close: false,
	                            index: startpos + 1,
	                            active: true };
	        if (this.delimiters.previous !== null) {
	            this.delimiters.previous.next = this.delimiters;
	        }
	    } else {
	        block.appendChild(text('!'));
	    }
	    return true;
	};
	
	// Try to match close bracket against an opening in the delimiter
	// stack.  Add either a link or image, or a plain [ character,
	// to block's children.  If there is a matching delimiter,
	// remove it from the delimiter stack.
	var parseCloseBracket = function(block) {
	    var startpos;
	    var is_image;
	    var dest;
	    var title;
	    var matched = false;
	    var reflabel;
	    var opener;
	
	    this.pos += 1;
	    startpos = this.pos;
	
	    // look through stack of delimiters for a [ or ![
	    opener = this.delimiters;
	
	    while (opener !== null) {
	        if (opener.cc === C_OPEN_BRACKET || opener.cc === C_BANG) {
	            break;
	        }
	        opener = opener.previous;
	    }
	
	    if (opener === null) {
	        // no matched opener, just return a literal
	        block.appendChild(text(']'));
	        return true;
	    }
	
	    if (!opener.active) {
	        // no matched opener, just return a literal
	        block.appendChild(text(']'));
	        // take opener off emphasis stack
	        this.removeDelimiter(opener);
	        return true;
	    }
	
	    // If we got here, open is a potential opener
	    is_image = opener.cc === C_BANG;
	
	    // Check to see if we have a link/image
	
	    // Inline link?
	    if (this.peek() === C_OPEN_PAREN) {
	        this.pos++;
	        if (this.spnl() &&
	            ((dest = this.parseLinkDestination()) !== null) &&
	            this.spnl() &&
	            // make sure there's a space before the title:
	            (reWhitespaceChar.test(this.subject.charAt(this.pos - 1)) &&
	             (title = this.parseLinkTitle()) || true) &&
	            this.spnl() &&
	            this.peek() === C_CLOSE_PAREN) {
	            this.pos += 1;
	            matched = true;
	        }
	    } else {
	
	        // Next, see if there's a link label
	        var savepos = this.pos;
	        this.spnl();
	        var beforelabel = this.pos;
	        var n = this.parseLinkLabel();
	        if (n === 0 || n === 2) {
	            // empty or missing second label
	            reflabel = this.subject.slice(opener.index, startpos);
	        } else {
	            reflabel = this.subject.slice(beforelabel, beforelabel + n);
	        }
	        if (n === 0) {
	            // If shortcut reference link, rewind before spaces we skipped.
	            this.pos = savepos;
	        }
	
	        // lookup rawlabel in refmap
	        var link = this.refmap[normalizeReference(reflabel)];
	        if (link) {
	            dest = link.destination;
	            title = link.title;
	            matched = true;
	        }
	    }
	
	    if (matched) {
	        var node = new Node(is_image ? 'Image' : 'Link');
	        node._destination = dest;
	        node._title = title || '';
	
	        var tmp, next;
	        tmp = opener.node._next;
	        while (tmp) {
	            next = tmp._next;
	            tmp.unlink();
	            node.appendChild(tmp);
	            tmp = next;
	        }
	        block.appendChild(node);
	        this.processEmphasis(opener.previous);
	
	        opener.node.unlink();
	
	        // processEmphasis will remove this and later delimiters.
	        // Now, for a link, we also deactivate earlier link openers.
	        // (no links in links)
	        if (!is_image) {
	          opener = this.delimiters;
	          while (opener !== null) {
	            if (opener.cc === C_OPEN_BRACKET) {
	                opener.active = false; // deactivate this opener
	            }
	            opener = opener.previous;
	          }
	        }
	
	        return true;
	
	    } else { // no match
	
	        this.removeDelimiter(opener);  // remove this opener from stack
	        this.pos = startpos;
	        block.appendChild(text(']'));
	        return true;
	    }
	
	};
	
	// Attempt to parse an entity.
	var parseEntity = function(block) {
	    var m;
	    if ((m = this.match(reEntityHere))) {
	        block.appendChild(text(decodeHTML(m)));
	        return true;
	    } else {
	        return false;
	    }
	};
	
	// Parse a run of ordinary characters, or a single character with
	// a special meaning in markdown, as a plain string.
	var parseString = function(block) {
	    var m;
	    if ((m = this.match(reMain))) {
	        if (this.options.smart) {
	            block.appendChild(text(
	                m.replace(reEllipses, "\u2026")
	                    .replace(reDash, function(chars) {
	                        var enCount = 0;
	                        var emCount = 0;
	                        if (chars.length % 3 === 0) { // If divisible by 3, use all em dashes
	                            emCount = chars.length / 3;
	                        } else if (chars.length % 2 === 0) { // If divisible by 2, use all en dashes
	                            enCount = chars.length / 2;
	                        } else if (chars.length % 3 === 2) { // If 2 extra dashes, use en dash for last 2; em dashes for rest
	                            enCount = 1;
	                            emCount = (chars.length - 2) / 3;
	                        } else { // Use en dashes for last 4 hyphens; em dashes for rest
	                            enCount = 2;
	                            emCount = (chars.length - 4) / 3;
	                        }
	                        return "\u2014".repeat(emCount) + "\u2013".repeat(enCount);
	                    })));
	        } else {
	            block.appendChild(text(m));
	        }
	        return true;
	    } else {
	        return false;
	    }
	};
	
	// Parse a newline.  If it was preceded by two spaces, return a hard
	// line break; otherwise a soft line break.
	var parseNewline = function(block) {
	    this.pos += 1; // assume we're at a \n
	    // check previous node for trailing spaces
	    var lastc = block._lastChild;
	    if (lastc && lastc.type === 'Text' && lastc._literal[lastc._literal.length - 1] === ' ') {
	        var hardbreak = lastc._literal[lastc._literal.length - 2] === ' ';
	        lastc._literal = lastc._literal.replace(reFinalSpace, '');
	        block.appendChild(new Node(hardbreak ? 'Hardbreak' : 'Softbreak'));
	    } else {
	        block.appendChild(new Node('Softbreak'));
	    }
	    this.match(reInitialSpace); // gobble leading spaces in next line
	    return true;
	};
	
	// Attempt to parse a link reference, modifying refmap.
	var parseReference = function(s, refmap) {
	    this.subject = s;
	    this.pos = 0;
	    var rawlabel;
	    var dest;
	    var title;
	    var matchChars;
	    var startpos = this.pos;
	
	    // label:
	    matchChars = this.parseLinkLabel();
	    if (matchChars === 0) {
	        return 0;
	    } else {
	        rawlabel = this.subject.substr(0, matchChars);
	    }
	
	    // colon:
	    if (this.peek() === C_COLON) {
	        this.pos++;
	    } else {
	        this.pos = startpos;
	        return 0;
	    }
	
	    //  link url
	    this.spnl();
	
	    dest = this.parseLinkDestination();
	    if (dest === null || dest.length === 0) {
	        this.pos = startpos;
	        return 0;
	    }
	
	    var beforetitle = this.pos;
	    this.spnl();
	    title = this.parseLinkTitle();
	    if (title === null) {
	        title = '';
	        // rewind before spaces
	        this.pos = beforetitle;
	    }
	
	    // make sure we're at line end:
	    var atLineEnd = true;
	    if (this.match(reSpaceAtEndOfLine) === null) {
	        if (title === '') {
	            atLineEnd = false;
	        } else {
	            // the potential title we found is not at the line end,
	            // but it could still be a legal link reference if we
	            // discard the title
	            title = '';
	            // rewind before spaces
	            this.pos = beforetitle;
	            // and instead check if the link URL is at the line end
	            atLineEnd = this.match(reSpaceAtEndOfLine) !== null;
	        }
	    }
	
	    if (!atLineEnd) {
	        this.pos = startpos;
	        return 0;
	    }
	
	    var normlabel = normalizeReference(rawlabel);
	    if (normlabel === '') {
	        // label must contain non-whitespace characters
	        this.pos = startpos;
	        return 0;
	    }
	
	    if (!refmap[normlabel]) {
	        refmap[normlabel] = { destination: dest, title: title };
	    }
	    return this.pos - startpos;
	};
	
	// Parse the next inline element in subject, advancing subject position.
	// On success, add the result to block's children and return true.
	// On failure, return false.
	var parseInline = function(block) {
	    var res = false;
	    var c = this.peek();
	    if (c === -1) {
	        return false;
	    }
	    switch(c) {
	    case C_NEWLINE:
	        res = this.parseNewline(block);
	        break;
	    case C_BACKSLASH:
	        res = this.parseBackslash(block);
	        break;
	    case C_BACKTICK:
	        res = this.parseBackticks(block);
	        break;
	    case C_ASTERISK:
	    case C_UNDERSCORE:
	        res = this.handleDelim(c, block);
	        break;
	    case C_SINGLEQUOTE:
	    case C_DOUBLEQUOTE:
	        res = this.options.smart && this.handleDelim(c, block);
	        break;
	    case C_OPEN_BRACKET:
	        res = this.parseOpenBracket(block);
	        break;
	    case C_BANG:
	        res = this.parseBang(block);
	        break;
	    case C_CLOSE_BRACKET:
	        res = this.parseCloseBracket(block);
	        break;
	    case C_LESSTHAN:
	        res = this.parseAutolink(block) || this.parseHtmlTag(block);
	        break;
	    case C_AMPERSAND:
	        res = this.parseEntity(block);
	        break;
	    default:
	        res = this.parseString(block);
	        break;
	    }
	    if (!res) {
	        this.pos += 1;
	        block.appendChild(text(fromCodePoint(c)));
	    }
	
	    return true;
	};
	
	// Parse string content in block into inline children,
	// using refmap to resolve references.
	var parseInlines = function(block) {
	    this.subject = block._string_content.trim();
	    this.pos = 0;
	    this.delimiters = null;
	    while (this.parseInline(block)) {
	    }
	    block._string_content = null; // allow raw string to be garbage collected
	    this.processEmphasis(null);
	};
	
	// The InlineParser object.
	function InlineParser(options){
	    return {
	        subject: '',
	        delimiters: null,  // used by handleDelim method
	        pos: 0,
	        refmap: {},
	        match: match,
	        peek: peek,
	        spnl: spnl,
	        parseBackticks: parseBackticks,
	        parseBackslash: parseBackslash,
	        parseAutolink: parseAutolink,
	        parseHtmlTag: parseHtmlTag,
	        scanDelims: scanDelims,
	        handleDelim: handleDelim,
	        parseLinkTitle: parseLinkTitle,
	        parseLinkDestination: parseLinkDestination,
	        parseLinkLabel: parseLinkLabel,
	        parseOpenBracket: parseOpenBracket,
	        parseCloseBracket: parseCloseBracket,
	        parseBang: parseBang,
	        parseEntity: parseEntity,
	        parseString: parseString,
	        parseNewline: parseNewline,
	        parseReference: parseReference,
	        parseInline: parseInline,
	        processEmphasis: processEmphasis,
	        removeDelimiter: removeDelimiter,
	        options: options || {},
	        parse: parseInlines
	    };
	}
	
	module.exports = InlineParser;


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	// derived from https://github.com/mathiasbynens/String.fromCodePoint
	/*! http://mths.be/fromcodepoint v0.2.1 by @mathias */
	if (String.fromCodePoint) {
	    module.exports = function (_) {
	        try {
	            return String.fromCodePoint(_);
	        } catch (e) {
	            if (e instanceof RangeError) {
	                return String.fromCharCode(0xFFFD);
	            }
	            throw e;
	        }
	    };
	
	} else {
	
	  var stringFromCharCode = String.fromCharCode;
	  var floor = Math.floor;
	  var fromCodePoint = function() {
	      var MAX_SIZE = 0x4000;
	      var codeUnits = [];
	      var highSurrogate;
	      var lowSurrogate;
	      var index = -1;
	      var length = arguments.length;
	      if (!length) {
	          return '';
	      }
	      var result = '';
	      while (++index < length) {
	          var codePoint = Number(arguments[index]);
	          if (
	              !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
	                  codePoint < 0 || // not a valid Unicode code point
	                  codePoint > 0x10FFFF || // not a valid Unicode code point
	                  floor(codePoint) !== codePoint // not an integer
	          ) {
	              return String.fromCharCode(0xFFFD);
	          }
	          if (codePoint <= 0xFFFF) { // BMP code point
	              codeUnits.push(codePoint);
	          } else { // Astral code point; split in surrogate halves
	              // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	              codePoint -= 0x10000;
	              highSurrogate = (codePoint >> 10) + 0xD800;
	              lowSurrogate = (codePoint % 0x400) + 0xDC00;
	              codeUnits.push(highSurrogate, lowSurrogate);
	          }
	          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
	              result += stringFromCharCode.apply(null, codeUnits);
	              codeUnits.length = 0;
	          }
	      }
	      return result;
	  };
	  module.exports = fromCodePoint;
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	/* The bulk of this code derives from https://github.com/dmoscrop/fold-case
	But in addition to case-folding, we also normalize whitespace.
	
	fold-case is Copyright Mathias Bynens <https://mathiasbynens.be/>
	
	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:
	
	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	*/
	
	/*eslint-disable  key-spacing, comma-spacing */
	
	var regex = /[ \t\r\n]+|[A-Z\xB5\xC0-\xD6\xD8-\xDF\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u0149\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u017F\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C5\u01C7\u01C8\u01CA\u01CB\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F0-\u01F2\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0345\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03AB\u03B0\u03C2\u03CF-\u03D1\u03D5\u03D6\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F0\u03F1\u03F4\u03F5\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u0587\u10A0-\u10C5\u10C7\u10CD\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E96-\u1E9B\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F50\u1F52\u1F54\u1F56\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1F80-\u1FAF\u1FB2-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD2\u1FD3\u1FD6-\u1FDB\u1FE2-\u1FE4\u1FE6-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2126\u212A\u212B\u2132\u2160-\u216F\u2183\u24B6-\u24CF\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0\uA7B1\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27]|\uD806[\uDCA0-\uDCBF]/g;
	
	var map = {'A':'a','B':'b','C':'c','D':'d','E':'e','F':'f','G':'g','H':'h','I':'i','J':'j','K':'k','L':'l','M':'m','N':'n','O':'o','P':'p','Q':'q','R':'r','S':'s','T':'t','U':'u','V':'v','W':'w','X':'x','Y':'y','Z':'z','\xB5':'\u03BC','\xC0':'\xE0','\xC1':'\xE1','\xC2':'\xE2','\xC3':'\xE3','\xC4':'\xE4','\xC5':'\xE5','\xC6':'\xE6','\xC7':'\xE7','\xC8':'\xE8','\xC9':'\xE9','\xCA':'\xEA','\xCB':'\xEB','\xCC':'\xEC','\xCD':'\xED','\xCE':'\xEE','\xCF':'\xEF','\xD0':'\xF0','\xD1':'\xF1','\xD2':'\xF2','\xD3':'\xF3','\xD4':'\xF4','\xD5':'\xF5','\xD6':'\xF6','\xD8':'\xF8','\xD9':'\xF9','\xDA':'\xFA','\xDB':'\xFB','\xDC':'\xFC','\xDD':'\xFD','\xDE':'\xFE','\u0100':'\u0101','\u0102':'\u0103','\u0104':'\u0105','\u0106':'\u0107','\u0108':'\u0109','\u010A':'\u010B','\u010C':'\u010D','\u010E':'\u010F','\u0110':'\u0111','\u0112':'\u0113','\u0114':'\u0115','\u0116':'\u0117','\u0118':'\u0119','\u011A':'\u011B','\u011C':'\u011D','\u011E':'\u011F','\u0120':'\u0121','\u0122':'\u0123','\u0124':'\u0125','\u0126':'\u0127','\u0128':'\u0129','\u012A':'\u012B','\u012C':'\u012D','\u012E':'\u012F','\u0132':'\u0133','\u0134':'\u0135','\u0136':'\u0137','\u0139':'\u013A','\u013B':'\u013C','\u013D':'\u013E','\u013F':'\u0140','\u0141':'\u0142','\u0143':'\u0144','\u0145':'\u0146','\u0147':'\u0148','\u014A':'\u014B','\u014C':'\u014D','\u014E':'\u014F','\u0150':'\u0151','\u0152':'\u0153','\u0154':'\u0155','\u0156':'\u0157','\u0158':'\u0159','\u015A':'\u015B','\u015C':'\u015D','\u015E':'\u015F','\u0160':'\u0161','\u0162':'\u0163','\u0164':'\u0165','\u0166':'\u0167','\u0168':'\u0169','\u016A':'\u016B','\u016C':'\u016D','\u016E':'\u016F','\u0170':'\u0171','\u0172':'\u0173','\u0174':'\u0175','\u0176':'\u0177','\u0178':'\xFF','\u0179':'\u017A','\u017B':'\u017C','\u017D':'\u017E','\u017F':'s','\u0181':'\u0253','\u0182':'\u0183','\u0184':'\u0185','\u0186':'\u0254','\u0187':'\u0188','\u0189':'\u0256','\u018A':'\u0257','\u018B':'\u018C','\u018E':'\u01DD','\u018F':'\u0259','\u0190':'\u025B','\u0191':'\u0192','\u0193':'\u0260','\u0194':'\u0263','\u0196':'\u0269','\u0197':'\u0268','\u0198':'\u0199','\u019C':'\u026F','\u019D':'\u0272','\u019F':'\u0275','\u01A0':'\u01A1','\u01A2':'\u01A3','\u01A4':'\u01A5','\u01A6':'\u0280','\u01A7':'\u01A8','\u01A9':'\u0283','\u01AC':'\u01AD','\u01AE':'\u0288','\u01AF':'\u01B0','\u01B1':'\u028A','\u01B2':'\u028B','\u01B3':'\u01B4','\u01B5':'\u01B6','\u01B7':'\u0292','\u01B8':'\u01B9','\u01BC':'\u01BD','\u01C4':'\u01C6','\u01C5':'\u01C6','\u01C7':'\u01C9','\u01C8':'\u01C9','\u01CA':'\u01CC','\u01CB':'\u01CC','\u01CD':'\u01CE','\u01CF':'\u01D0','\u01D1':'\u01D2','\u01D3':'\u01D4','\u01D5':'\u01D6','\u01D7':'\u01D8','\u01D9':'\u01DA','\u01DB':'\u01DC','\u01DE':'\u01DF','\u01E0':'\u01E1','\u01E2':'\u01E3','\u01E4':'\u01E5','\u01E6':'\u01E7','\u01E8':'\u01E9','\u01EA':'\u01EB','\u01EC':'\u01ED','\u01EE':'\u01EF','\u01F1':'\u01F3','\u01F2':'\u01F3','\u01F4':'\u01F5','\u01F6':'\u0195','\u01F7':'\u01BF','\u01F8':'\u01F9','\u01FA':'\u01FB','\u01FC':'\u01FD','\u01FE':'\u01FF','\u0200':'\u0201','\u0202':'\u0203','\u0204':'\u0205','\u0206':'\u0207','\u0208':'\u0209','\u020A':'\u020B','\u020C':'\u020D','\u020E':'\u020F','\u0210':'\u0211','\u0212':'\u0213','\u0214':'\u0215','\u0216':'\u0217','\u0218':'\u0219','\u021A':'\u021B','\u021C':'\u021D','\u021E':'\u021F','\u0220':'\u019E','\u0222':'\u0223','\u0224':'\u0225','\u0226':'\u0227','\u0228':'\u0229','\u022A':'\u022B','\u022C':'\u022D','\u022E':'\u022F','\u0230':'\u0231','\u0232':'\u0233','\u023A':'\u2C65','\u023B':'\u023C','\u023D':'\u019A','\u023E':'\u2C66','\u0241':'\u0242','\u0243':'\u0180','\u0244':'\u0289','\u0245':'\u028C','\u0246':'\u0247','\u0248':'\u0249','\u024A':'\u024B','\u024C':'\u024D','\u024E':'\u024F','\u0345':'\u03B9','\u0370':'\u0371','\u0372':'\u0373','\u0376':'\u0377','\u037F':'\u03F3','\u0386':'\u03AC','\u0388':'\u03AD','\u0389':'\u03AE','\u038A':'\u03AF','\u038C':'\u03CC','\u038E':'\u03CD','\u038F':'\u03CE','\u0391':'\u03B1','\u0392':'\u03B2','\u0393':'\u03B3','\u0394':'\u03B4','\u0395':'\u03B5','\u0396':'\u03B6','\u0397':'\u03B7','\u0398':'\u03B8','\u0399':'\u03B9','\u039A':'\u03BA','\u039B':'\u03BB','\u039C':'\u03BC','\u039D':'\u03BD','\u039E':'\u03BE','\u039F':'\u03BF','\u03A0':'\u03C0','\u03A1':'\u03C1','\u03A3':'\u03C3','\u03A4':'\u03C4','\u03A5':'\u03C5','\u03A6':'\u03C6','\u03A7':'\u03C7','\u03A8':'\u03C8','\u03A9':'\u03C9','\u03AA':'\u03CA','\u03AB':'\u03CB','\u03C2':'\u03C3','\u03CF':'\u03D7','\u03D0':'\u03B2','\u03D1':'\u03B8','\u03D5':'\u03C6','\u03D6':'\u03C0','\u03D8':'\u03D9','\u03DA':'\u03DB','\u03DC':'\u03DD','\u03DE':'\u03DF','\u03E0':'\u03E1','\u03E2':'\u03E3','\u03E4':'\u03E5','\u03E6':'\u03E7','\u03E8':'\u03E9','\u03EA':'\u03EB','\u03EC':'\u03ED','\u03EE':'\u03EF','\u03F0':'\u03BA','\u03F1':'\u03C1','\u03F4':'\u03B8','\u03F5':'\u03B5','\u03F7':'\u03F8','\u03F9':'\u03F2','\u03FA':'\u03FB','\u03FD':'\u037B','\u03FE':'\u037C','\u03FF':'\u037D','\u0400':'\u0450','\u0401':'\u0451','\u0402':'\u0452','\u0403':'\u0453','\u0404':'\u0454','\u0405':'\u0455','\u0406':'\u0456','\u0407':'\u0457','\u0408':'\u0458','\u0409':'\u0459','\u040A':'\u045A','\u040B':'\u045B','\u040C':'\u045C','\u040D':'\u045D','\u040E':'\u045E','\u040F':'\u045F','\u0410':'\u0430','\u0411':'\u0431','\u0412':'\u0432','\u0413':'\u0433','\u0414':'\u0434','\u0415':'\u0435','\u0416':'\u0436','\u0417':'\u0437','\u0418':'\u0438','\u0419':'\u0439','\u041A':'\u043A','\u041B':'\u043B','\u041C':'\u043C','\u041D':'\u043D','\u041E':'\u043E','\u041F':'\u043F','\u0420':'\u0440','\u0421':'\u0441','\u0422':'\u0442','\u0423':'\u0443','\u0424':'\u0444','\u0425':'\u0445','\u0426':'\u0446','\u0427':'\u0447','\u0428':'\u0448','\u0429':'\u0449','\u042A':'\u044A','\u042B':'\u044B','\u042C':'\u044C','\u042D':'\u044D','\u042E':'\u044E','\u042F':'\u044F','\u0460':'\u0461','\u0462':'\u0463','\u0464':'\u0465','\u0466':'\u0467','\u0468':'\u0469','\u046A':'\u046B','\u046C':'\u046D','\u046E':'\u046F','\u0470':'\u0471','\u0472':'\u0473','\u0474':'\u0475','\u0476':'\u0477','\u0478':'\u0479','\u047A':'\u047B','\u047C':'\u047D','\u047E':'\u047F','\u0480':'\u0481','\u048A':'\u048B','\u048C':'\u048D','\u048E':'\u048F','\u0490':'\u0491','\u0492':'\u0493','\u0494':'\u0495','\u0496':'\u0497','\u0498':'\u0499','\u049A':'\u049B','\u049C':'\u049D','\u049E':'\u049F','\u04A0':'\u04A1','\u04A2':'\u04A3','\u04A4':'\u04A5','\u04A6':'\u04A7','\u04A8':'\u04A9','\u04AA':'\u04AB','\u04AC':'\u04AD','\u04AE':'\u04AF','\u04B0':'\u04B1','\u04B2':'\u04B3','\u04B4':'\u04B5','\u04B6':'\u04B7','\u04B8':'\u04B9','\u04BA':'\u04BB','\u04BC':'\u04BD','\u04BE':'\u04BF','\u04C0':'\u04CF','\u04C1':'\u04C2','\u04C3':'\u04C4','\u04C5':'\u04C6','\u04C7':'\u04C8','\u04C9':'\u04CA','\u04CB':'\u04CC','\u04CD':'\u04CE','\u04D0':'\u04D1','\u04D2':'\u04D3','\u04D4':'\u04D5','\u04D6':'\u04D7','\u04D8':'\u04D9','\u04DA':'\u04DB','\u04DC':'\u04DD','\u04DE':'\u04DF','\u04E0':'\u04E1','\u04E2':'\u04E3','\u04E4':'\u04E5','\u04E6':'\u04E7','\u04E8':'\u04E9','\u04EA':'\u04EB','\u04EC':'\u04ED','\u04EE':'\u04EF','\u04F0':'\u04F1','\u04F2':'\u04F3','\u04F4':'\u04F5','\u04F6':'\u04F7','\u04F8':'\u04F9','\u04FA':'\u04FB','\u04FC':'\u04FD','\u04FE':'\u04FF','\u0500':'\u0501','\u0502':'\u0503','\u0504':'\u0505','\u0506':'\u0507','\u0508':'\u0509','\u050A':'\u050B','\u050C':'\u050D','\u050E':'\u050F','\u0510':'\u0511','\u0512':'\u0513','\u0514':'\u0515','\u0516':'\u0517','\u0518':'\u0519','\u051A':'\u051B','\u051C':'\u051D','\u051E':'\u051F','\u0520':'\u0521','\u0522':'\u0523','\u0524':'\u0525','\u0526':'\u0527','\u0528':'\u0529','\u052A':'\u052B','\u052C':'\u052D','\u052E':'\u052F','\u0531':'\u0561','\u0532':'\u0562','\u0533':'\u0563','\u0534':'\u0564','\u0535':'\u0565','\u0536':'\u0566','\u0537':'\u0567','\u0538':'\u0568','\u0539':'\u0569','\u053A':'\u056A','\u053B':'\u056B','\u053C':'\u056C','\u053D':'\u056D','\u053E':'\u056E','\u053F':'\u056F','\u0540':'\u0570','\u0541':'\u0571','\u0542':'\u0572','\u0543':'\u0573','\u0544':'\u0574','\u0545':'\u0575','\u0546':'\u0576','\u0547':'\u0577','\u0548':'\u0578','\u0549':'\u0579','\u054A':'\u057A','\u054B':'\u057B','\u054C':'\u057C','\u054D':'\u057D','\u054E':'\u057E','\u054F':'\u057F','\u0550':'\u0580','\u0551':'\u0581','\u0552':'\u0582','\u0553':'\u0583','\u0554':'\u0584','\u0555':'\u0585','\u0556':'\u0586','\u10A0':'\u2D00','\u10A1':'\u2D01','\u10A2':'\u2D02','\u10A3':'\u2D03','\u10A4':'\u2D04','\u10A5':'\u2D05','\u10A6':'\u2D06','\u10A7':'\u2D07','\u10A8':'\u2D08','\u10A9':'\u2D09','\u10AA':'\u2D0A','\u10AB':'\u2D0B','\u10AC':'\u2D0C','\u10AD':'\u2D0D','\u10AE':'\u2D0E','\u10AF':'\u2D0F','\u10B0':'\u2D10','\u10B1':'\u2D11','\u10B2':'\u2D12','\u10B3':'\u2D13','\u10B4':'\u2D14','\u10B5':'\u2D15','\u10B6':'\u2D16','\u10B7':'\u2D17','\u10B8':'\u2D18','\u10B9':'\u2D19','\u10BA':'\u2D1A','\u10BB':'\u2D1B','\u10BC':'\u2D1C','\u10BD':'\u2D1D','\u10BE':'\u2D1E','\u10BF':'\u2D1F','\u10C0':'\u2D20','\u10C1':'\u2D21','\u10C2':'\u2D22','\u10C3':'\u2D23','\u10C4':'\u2D24','\u10C5':'\u2D25','\u10C7':'\u2D27','\u10CD':'\u2D2D','\u1E00':'\u1E01','\u1E02':'\u1E03','\u1E04':'\u1E05','\u1E06':'\u1E07','\u1E08':'\u1E09','\u1E0A':'\u1E0B','\u1E0C':'\u1E0D','\u1E0E':'\u1E0F','\u1E10':'\u1E11','\u1E12':'\u1E13','\u1E14':'\u1E15','\u1E16':'\u1E17','\u1E18':'\u1E19','\u1E1A':'\u1E1B','\u1E1C':'\u1E1D','\u1E1E':'\u1E1F','\u1E20':'\u1E21','\u1E22':'\u1E23','\u1E24':'\u1E25','\u1E26':'\u1E27','\u1E28':'\u1E29','\u1E2A':'\u1E2B','\u1E2C':'\u1E2D','\u1E2E':'\u1E2F','\u1E30':'\u1E31','\u1E32':'\u1E33','\u1E34':'\u1E35','\u1E36':'\u1E37','\u1E38':'\u1E39','\u1E3A':'\u1E3B','\u1E3C':'\u1E3D','\u1E3E':'\u1E3F','\u1E40':'\u1E41','\u1E42':'\u1E43','\u1E44':'\u1E45','\u1E46':'\u1E47','\u1E48':'\u1E49','\u1E4A':'\u1E4B','\u1E4C':'\u1E4D','\u1E4E':'\u1E4F','\u1E50':'\u1E51','\u1E52':'\u1E53','\u1E54':'\u1E55','\u1E56':'\u1E57','\u1E58':'\u1E59','\u1E5A':'\u1E5B','\u1E5C':'\u1E5D','\u1E5E':'\u1E5F','\u1E60':'\u1E61','\u1E62':'\u1E63','\u1E64':'\u1E65','\u1E66':'\u1E67','\u1E68':'\u1E69','\u1E6A':'\u1E6B','\u1E6C':'\u1E6D','\u1E6E':'\u1E6F','\u1E70':'\u1E71','\u1E72':'\u1E73','\u1E74':'\u1E75','\u1E76':'\u1E77','\u1E78':'\u1E79','\u1E7A':'\u1E7B','\u1E7C':'\u1E7D','\u1E7E':'\u1E7F','\u1E80':'\u1E81','\u1E82':'\u1E83','\u1E84':'\u1E85','\u1E86':'\u1E87','\u1E88':'\u1E89','\u1E8A':'\u1E8B','\u1E8C':'\u1E8D','\u1E8E':'\u1E8F','\u1E90':'\u1E91','\u1E92':'\u1E93','\u1E94':'\u1E95','\u1E9B':'\u1E61','\u1EA0':'\u1EA1','\u1EA2':'\u1EA3','\u1EA4':'\u1EA5','\u1EA6':'\u1EA7','\u1EA8':'\u1EA9','\u1EAA':'\u1EAB','\u1EAC':'\u1EAD','\u1EAE':'\u1EAF','\u1EB0':'\u1EB1','\u1EB2':'\u1EB3','\u1EB4':'\u1EB5','\u1EB6':'\u1EB7','\u1EB8':'\u1EB9','\u1EBA':'\u1EBB','\u1EBC':'\u1EBD','\u1EBE':'\u1EBF','\u1EC0':'\u1EC1','\u1EC2':'\u1EC3','\u1EC4':'\u1EC5','\u1EC6':'\u1EC7','\u1EC8':'\u1EC9','\u1ECA':'\u1ECB','\u1ECC':'\u1ECD','\u1ECE':'\u1ECF','\u1ED0':'\u1ED1','\u1ED2':'\u1ED3','\u1ED4':'\u1ED5','\u1ED6':'\u1ED7','\u1ED8':'\u1ED9','\u1EDA':'\u1EDB','\u1EDC':'\u1EDD','\u1EDE':'\u1EDF','\u1EE0':'\u1EE1','\u1EE2':'\u1EE3','\u1EE4':'\u1EE5','\u1EE6':'\u1EE7','\u1EE8':'\u1EE9','\u1EEA':'\u1EEB','\u1EEC':'\u1EED','\u1EEE':'\u1EEF','\u1EF0':'\u1EF1','\u1EF2':'\u1EF3','\u1EF4':'\u1EF5','\u1EF6':'\u1EF7','\u1EF8':'\u1EF9','\u1EFA':'\u1EFB','\u1EFC':'\u1EFD','\u1EFE':'\u1EFF','\u1F08':'\u1F00','\u1F09':'\u1F01','\u1F0A':'\u1F02','\u1F0B':'\u1F03','\u1F0C':'\u1F04','\u1F0D':'\u1F05','\u1F0E':'\u1F06','\u1F0F':'\u1F07','\u1F18':'\u1F10','\u1F19':'\u1F11','\u1F1A':'\u1F12','\u1F1B':'\u1F13','\u1F1C':'\u1F14','\u1F1D':'\u1F15','\u1F28':'\u1F20','\u1F29':'\u1F21','\u1F2A':'\u1F22','\u1F2B':'\u1F23','\u1F2C':'\u1F24','\u1F2D':'\u1F25','\u1F2E':'\u1F26','\u1F2F':'\u1F27','\u1F38':'\u1F30','\u1F39':'\u1F31','\u1F3A':'\u1F32','\u1F3B':'\u1F33','\u1F3C':'\u1F34','\u1F3D':'\u1F35','\u1F3E':'\u1F36','\u1F3F':'\u1F37','\u1F48':'\u1F40','\u1F49':'\u1F41','\u1F4A':'\u1F42','\u1F4B':'\u1F43','\u1F4C':'\u1F44','\u1F4D':'\u1F45','\u1F59':'\u1F51','\u1F5B':'\u1F53','\u1F5D':'\u1F55','\u1F5F':'\u1F57','\u1F68':'\u1F60','\u1F69':'\u1F61','\u1F6A':'\u1F62','\u1F6B':'\u1F63','\u1F6C':'\u1F64','\u1F6D':'\u1F65','\u1F6E':'\u1F66','\u1F6F':'\u1F67','\u1FB8':'\u1FB0','\u1FB9':'\u1FB1','\u1FBA':'\u1F70','\u1FBB':'\u1F71','\u1FBE':'\u03B9','\u1FC8':'\u1F72','\u1FC9':'\u1F73','\u1FCA':'\u1F74','\u1FCB':'\u1F75','\u1FD8':'\u1FD0','\u1FD9':'\u1FD1','\u1FDA':'\u1F76','\u1FDB':'\u1F77','\u1FE8':'\u1FE0','\u1FE9':'\u1FE1','\u1FEA':'\u1F7A','\u1FEB':'\u1F7B','\u1FEC':'\u1FE5','\u1FF8':'\u1F78','\u1FF9':'\u1F79','\u1FFA':'\u1F7C','\u1FFB':'\u1F7D','\u2126':'\u03C9','\u212A':'k','\u212B':'\xE5','\u2132':'\u214E','\u2160':'\u2170','\u2161':'\u2171','\u2162':'\u2172','\u2163':'\u2173','\u2164':'\u2174','\u2165':'\u2175','\u2166':'\u2176','\u2167':'\u2177','\u2168':'\u2178','\u2169':'\u2179','\u216A':'\u217A','\u216B':'\u217B','\u216C':'\u217C','\u216D':'\u217D','\u216E':'\u217E','\u216F':'\u217F','\u2183':'\u2184','\u24B6':'\u24D0','\u24B7':'\u24D1','\u24B8':'\u24D2','\u24B9':'\u24D3','\u24BA':'\u24D4','\u24BB':'\u24D5','\u24BC':'\u24D6','\u24BD':'\u24D7','\u24BE':'\u24D8','\u24BF':'\u24D9','\u24C0':'\u24DA','\u24C1':'\u24DB','\u24C2':'\u24DC','\u24C3':'\u24DD','\u24C4':'\u24DE','\u24C5':'\u24DF','\u24C6':'\u24E0','\u24C7':'\u24E1','\u24C8':'\u24E2','\u24C9':'\u24E3','\u24CA':'\u24E4','\u24CB':'\u24E5','\u24CC':'\u24E6','\u24CD':'\u24E7','\u24CE':'\u24E8','\u24CF':'\u24E9','\u2C00':'\u2C30','\u2C01':'\u2C31','\u2C02':'\u2C32','\u2C03':'\u2C33','\u2C04':'\u2C34','\u2C05':'\u2C35','\u2C06':'\u2C36','\u2C07':'\u2C37','\u2C08':'\u2C38','\u2C09':'\u2C39','\u2C0A':'\u2C3A','\u2C0B':'\u2C3B','\u2C0C':'\u2C3C','\u2C0D':'\u2C3D','\u2C0E':'\u2C3E','\u2C0F':'\u2C3F','\u2C10':'\u2C40','\u2C11':'\u2C41','\u2C12':'\u2C42','\u2C13':'\u2C43','\u2C14':'\u2C44','\u2C15':'\u2C45','\u2C16':'\u2C46','\u2C17':'\u2C47','\u2C18':'\u2C48','\u2C19':'\u2C49','\u2C1A':'\u2C4A','\u2C1B':'\u2C4B','\u2C1C':'\u2C4C','\u2C1D':'\u2C4D','\u2C1E':'\u2C4E','\u2C1F':'\u2C4F','\u2C20':'\u2C50','\u2C21':'\u2C51','\u2C22':'\u2C52','\u2C23':'\u2C53','\u2C24':'\u2C54','\u2C25':'\u2C55','\u2C26':'\u2C56','\u2C27':'\u2C57','\u2C28':'\u2C58','\u2C29':'\u2C59','\u2C2A':'\u2C5A','\u2C2B':'\u2C5B','\u2C2C':'\u2C5C','\u2C2D':'\u2C5D','\u2C2E':'\u2C5E','\u2C60':'\u2C61','\u2C62':'\u026B','\u2C63':'\u1D7D','\u2C64':'\u027D','\u2C67':'\u2C68','\u2C69':'\u2C6A','\u2C6B':'\u2C6C','\u2C6D':'\u0251','\u2C6E':'\u0271','\u2C6F':'\u0250','\u2C70':'\u0252','\u2C72':'\u2C73','\u2C75':'\u2C76','\u2C7E':'\u023F','\u2C7F':'\u0240','\u2C80':'\u2C81','\u2C82':'\u2C83','\u2C84':'\u2C85','\u2C86':'\u2C87','\u2C88':'\u2C89','\u2C8A':'\u2C8B','\u2C8C':'\u2C8D','\u2C8E':'\u2C8F','\u2C90':'\u2C91','\u2C92':'\u2C93','\u2C94':'\u2C95','\u2C96':'\u2C97','\u2C98':'\u2C99','\u2C9A':'\u2C9B','\u2C9C':'\u2C9D','\u2C9E':'\u2C9F','\u2CA0':'\u2CA1','\u2CA2':'\u2CA3','\u2CA4':'\u2CA5','\u2CA6':'\u2CA7','\u2CA8':'\u2CA9','\u2CAA':'\u2CAB','\u2CAC':'\u2CAD','\u2CAE':'\u2CAF','\u2CB0':'\u2CB1','\u2CB2':'\u2CB3','\u2CB4':'\u2CB5','\u2CB6':'\u2CB7','\u2CB8':'\u2CB9','\u2CBA':'\u2CBB','\u2CBC':'\u2CBD','\u2CBE':'\u2CBF','\u2CC0':'\u2CC1','\u2CC2':'\u2CC3','\u2CC4':'\u2CC5','\u2CC6':'\u2CC7','\u2CC8':'\u2CC9','\u2CCA':'\u2CCB','\u2CCC':'\u2CCD','\u2CCE':'\u2CCF','\u2CD0':'\u2CD1','\u2CD2':'\u2CD3','\u2CD4':'\u2CD5','\u2CD6':'\u2CD7','\u2CD8':'\u2CD9','\u2CDA':'\u2CDB','\u2CDC':'\u2CDD','\u2CDE':'\u2CDF','\u2CE0':'\u2CE1','\u2CE2':'\u2CE3','\u2CEB':'\u2CEC','\u2CED':'\u2CEE','\u2CF2':'\u2CF3','\uA640':'\uA641','\uA642':'\uA643','\uA644':'\uA645','\uA646':'\uA647','\uA648':'\uA649','\uA64A':'\uA64B','\uA64C':'\uA64D','\uA64E':'\uA64F','\uA650':'\uA651','\uA652':'\uA653','\uA654':'\uA655','\uA656':'\uA657','\uA658':'\uA659','\uA65A':'\uA65B','\uA65C':'\uA65D','\uA65E':'\uA65F','\uA660':'\uA661','\uA662':'\uA663','\uA664':'\uA665','\uA666':'\uA667','\uA668':'\uA669','\uA66A':'\uA66B','\uA66C':'\uA66D','\uA680':'\uA681','\uA682':'\uA683','\uA684':'\uA685','\uA686':'\uA687','\uA688':'\uA689','\uA68A':'\uA68B','\uA68C':'\uA68D','\uA68E':'\uA68F','\uA690':'\uA691','\uA692':'\uA693','\uA694':'\uA695','\uA696':'\uA697','\uA698':'\uA699','\uA69A':'\uA69B','\uA722':'\uA723','\uA724':'\uA725','\uA726':'\uA727','\uA728':'\uA729','\uA72A':'\uA72B','\uA72C':'\uA72D','\uA72E':'\uA72F','\uA732':'\uA733','\uA734':'\uA735','\uA736':'\uA737','\uA738':'\uA739','\uA73A':'\uA73B','\uA73C':'\uA73D','\uA73E':'\uA73F','\uA740':'\uA741','\uA742':'\uA743','\uA744':'\uA745','\uA746':'\uA747','\uA748':'\uA749','\uA74A':'\uA74B','\uA74C':'\uA74D','\uA74E':'\uA74F','\uA750':'\uA751','\uA752':'\uA753','\uA754':'\uA755','\uA756':'\uA757','\uA758':'\uA759','\uA75A':'\uA75B','\uA75C':'\uA75D','\uA75E':'\uA75F','\uA760':'\uA761','\uA762':'\uA763','\uA764':'\uA765','\uA766':'\uA767','\uA768':'\uA769','\uA76A':'\uA76B','\uA76C':'\uA76D','\uA76E':'\uA76F','\uA779':'\uA77A','\uA77B':'\uA77C','\uA77D':'\u1D79','\uA77E':'\uA77F','\uA780':'\uA781','\uA782':'\uA783','\uA784':'\uA785','\uA786':'\uA787','\uA78B':'\uA78C','\uA78D':'\u0265','\uA790':'\uA791','\uA792':'\uA793','\uA796':'\uA797','\uA798':'\uA799','\uA79A':'\uA79B','\uA79C':'\uA79D','\uA79E':'\uA79F','\uA7A0':'\uA7A1','\uA7A2':'\uA7A3','\uA7A4':'\uA7A5','\uA7A6':'\uA7A7','\uA7A8':'\uA7A9','\uA7AA':'\u0266','\uA7AB':'\u025C','\uA7AC':'\u0261','\uA7AD':'\u026C','\uA7B0':'\u029E','\uA7B1':'\u0287','\uFF21':'\uFF41','\uFF22':'\uFF42','\uFF23':'\uFF43','\uFF24':'\uFF44','\uFF25':'\uFF45','\uFF26':'\uFF46','\uFF27':'\uFF47','\uFF28':'\uFF48','\uFF29':'\uFF49','\uFF2A':'\uFF4A','\uFF2B':'\uFF4B','\uFF2C':'\uFF4C','\uFF2D':'\uFF4D','\uFF2E':'\uFF4E','\uFF2F':'\uFF4F','\uFF30':'\uFF50','\uFF31':'\uFF51','\uFF32':'\uFF52','\uFF33':'\uFF53','\uFF34':'\uFF54','\uFF35':'\uFF55','\uFF36':'\uFF56','\uFF37':'\uFF57','\uFF38':'\uFF58','\uFF39':'\uFF59','\uFF3A':'\uFF5A','\uD801\uDC00':'\uD801\uDC28','\uD801\uDC01':'\uD801\uDC29','\uD801\uDC02':'\uD801\uDC2A','\uD801\uDC03':'\uD801\uDC2B','\uD801\uDC04':'\uD801\uDC2C','\uD801\uDC05':'\uD801\uDC2D','\uD801\uDC06':'\uD801\uDC2E','\uD801\uDC07':'\uD801\uDC2F','\uD801\uDC08':'\uD801\uDC30','\uD801\uDC09':'\uD801\uDC31','\uD801\uDC0A':'\uD801\uDC32','\uD801\uDC0B':'\uD801\uDC33','\uD801\uDC0C':'\uD801\uDC34','\uD801\uDC0D':'\uD801\uDC35','\uD801\uDC0E':'\uD801\uDC36','\uD801\uDC0F':'\uD801\uDC37','\uD801\uDC10':'\uD801\uDC38','\uD801\uDC11':'\uD801\uDC39','\uD801\uDC12':'\uD801\uDC3A','\uD801\uDC13':'\uD801\uDC3B','\uD801\uDC14':'\uD801\uDC3C','\uD801\uDC15':'\uD801\uDC3D','\uD801\uDC16':'\uD801\uDC3E','\uD801\uDC17':'\uD801\uDC3F','\uD801\uDC18':'\uD801\uDC40','\uD801\uDC19':'\uD801\uDC41','\uD801\uDC1A':'\uD801\uDC42','\uD801\uDC1B':'\uD801\uDC43','\uD801\uDC1C':'\uD801\uDC44','\uD801\uDC1D':'\uD801\uDC45','\uD801\uDC1E':'\uD801\uDC46','\uD801\uDC1F':'\uD801\uDC47','\uD801\uDC20':'\uD801\uDC48','\uD801\uDC21':'\uD801\uDC49','\uD801\uDC22':'\uD801\uDC4A','\uD801\uDC23':'\uD801\uDC4B','\uD801\uDC24':'\uD801\uDC4C','\uD801\uDC25':'\uD801\uDC4D','\uD801\uDC26':'\uD801\uDC4E','\uD801\uDC27':'\uD801\uDC4F','\uD806\uDCA0':'\uD806\uDCC0','\uD806\uDCA1':'\uD806\uDCC1','\uD806\uDCA2':'\uD806\uDCC2','\uD806\uDCA3':'\uD806\uDCC3','\uD806\uDCA4':'\uD806\uDCC4','\uD806\uDCA5':'\uD806\uDCC5','\uD806\uDCA6':'\uD806\uDCC6','\uD806\uDCA7':'\uD806\uDCC7','\uD806\uDCA8':'\uD806\uDCC8','\uD806\uDCA9':'\uD806\uDCC9','\uD806\uDCAA':'\uD806\uDCCA','\uD806\uDCAB':'\uD806\uDCCB','\uD806\uDCAC':'\uD806\uDCCC','\uD806\uDCAD':'\uD806\uDCCD','\uD806\uDCAE':'\uD806\uDCCE','\uD806\uDCAF':'\uD806\uDCCF','\uD806\uDCB0':'\uD806\uDCD0','\uD806\uDCB1':'\uD806\uDCD1','\uD806\uDCB2':'\uD806\uDCD2','\uD806\uDCB3':'\uD806\uDCD3','\uD806\uDCB4':'\uD806\uDCD4','\uD806\uDCB5':'\uD806\uDCD5','\uD806\uDCB6':'\uD806\uDCD6','\uD806\uDCB7':'\uD806\uDCD7','\uD806\uDCB8':'\uD806\uDCD8','\uD806\uDCB9':'\uD806\uDCD9','\uD806\uDCBA':'\uD806\uDCDA','\uD806\uDCBB':'\uD806\uDCDB','\uD806\uDCBC':'\uD806\uDCDC','\uD806\uDCBD':'\uD806\uDCDD','\uD806\uDCBE':'\uD806\uDCDE','\uD806\uDCBF':'\uD806\uDCDF','\xDF':'ss','\u0130':'i\u0307','\u0149':'\u02BCn','\u01F0':'j\u030C','\u0390':'\u03B9\u0308\u0301','\u03B0':'\u03C5\u0308\u0301','\u0587':'\u0565\u0582','\u1E96':'h\u0331','\u1E97':'t\u0308','\u1E98':'w\u030A','\u1E99':'y\u030A','\u1E9A':'a\u02BE','\u1E9E':'ss','\u1F50':'\u03C5\u0313','\u1F52':'\u03C5\u0313\u0300','\u1F54':'\u03C5\u0313\u0301','\u1F56':'\u03C5\u0313\u0342','\u1F80':'\u1F00\u03B9','\u1F81':'\u1F01\u03B9','\u1F82':'\u1F02\u03B9','\u1F83':'\u1F03\u03B9','\u1F84':'\u1F04\u03B9','\u1F85':'\u1F05\u03B9','\u1F86':'\u1F06\u03B9','\u1F87':'\u1F07\u03B9','\u1F88':'\u1F00\u03B9','\u1F89':'\u1F01\u03B9','\u1F8A':'\u1F02\u03B9','\u1F8B':'\u1F03\u03B9','\u1F8C':'\u1F04\u03B9','\u1F8D':'\u1F05\u03B9','\u1F8E':'\u1F06\u03B9','\u1F8F':'\u1F07\u03B9','\u1F90':'\u1F20\u03B9','\u1F91':'\u1F21\u03B9','\u1F92':'\u1F22\u03B9','\u1F93':'\u1F23\u03B9','\u1F94':'\u1F24\u03B9','\u1F95':'\u1F25\u03B9','\u1F96':'\u1F26\u03B9','\u1F97':'\u1F27\u03B9','\u1F98':'\u1F20\u03B9','\u1F99':'\u1F21\u03B9','\u1F9A':'\u1F22\u03B9','\u1F9B':'\u1F23\u03B9','\u1F9C':'\u1F24\u03B9','\u1F9D':'\u1F25\u03B9','\u1F9E':'\u1F26\u03B9','\u1F9F':'\u1F27\u03B9','\u1FA0':'\u1F60\u03B9','\u1FA1':'\u1F61\u03B9','\u1FA2':'\u1F62\u03B9','\u1FA3':'\u1F63\u03B9','\u1FA4':'\u1F64\u03B9','\u1FA5':'\u1F65\u03B9','\u1FA6':'\u1F66\u03B9','\u1FA7':'\u1F67\u03B9','\u1FA8':'\u1F60\u03B9','\u1FA9':'\u1F61\u03B9','\u1FAA':'\u1F62\u03B9','\u1FAB':'\u1F63\u03B9','\u1FAC':'\u1F64\u03B9','\u1FAD':'\u1F65\u03B9','\u1FAE':'\u1F66\u03B9','\u1FAF':'\u1F67\u03B9','\u1FB2':'\u1F70\u03B9','\u1FB3':'\u03B1\u03B9','\u1FB4':'\u03AC\u03B9','\u1FB6':'\u03B1\u0342','\u1FB7':'\u03B1\u0342\u03B9','\u1FBC':'\u03B1\u03B9','\u1FC2':'\u1F74\u03B9','\u1FC3':'\u03B7\u03B9','\u1FC4':'\u03AE\u03B9','\u1FC6':'\u03B7\u0342','\u1FC7':'\u03B7\u0342\u03B9','\u1FCC':'\u03B7\u03B9','\u1FD2':'\u03B9\u0308\u0300','\u1FD3':'\u03B9\u0308\u0301','\u1FD6':'\u03B9\u0342','\u1FD7':'\u03B9\u0308\u0342','\u1FE2':'\u03C5\u0308\u0300','\u1FE3':'\u03C5\u0308\u0301','\u1FE4':'\u03C1\u0313','\u1FE6':'\u03C5\u0342','\u1FE7':'\u03C5\u0308\u0342','\u1FF2':'\u1F7C\u03B9','\u1FF3':'\u03C9\u03B9','\u1FF4':'\u03CE\u03B9','\u1FF6':'\u03C9\u0342','\u1FF7':'\u03C9\u0342\u03B9','\u1FFC':'\u03C9\u03B9','\uFB00':'ff','\uFB01':'fi','\uFB02':'fl','\uFB03':'ffi','\uFB04':'ffl','\uFB05':'st','\uFB06':'st','\uFB13':'\u0574\u0576','\uFB14':'\u0574\u0565','\uFB15':'\u0574\u056B','\uFB16':'\u057E\u0576','\uFB17':'\u0574\u056D'};
	
	// Normalize reference label: collapse internal whitespace
	// to single space, remove leading/trailing whitespace, case fold.
	module.exports = function(string) {
	    return string.slice(1, string.length - 1).trim().replace(regex, function($0) {
	        // Note: there is no need to check `hasOwnProperty($0)` here.
	        // If character not found in lookup table, it must be whitespace.
	        return map[$0] || ' ';
	    });
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	/*! http://mths.be/repeat v0.2.0 by @mathias */
	if (!String.prototype.repeat) {
		(function() {
			'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
			var defineProperty = (function() {
				// IE 8 only supports `Object.defineProperty` on DOM elements
				try {
					var object = {};
					var $defineProperty = Object.defineProperty;
					var result = $defineProperty(object, object, object) && $defineProperty;
				} catch(error) {}
				return result;
			}());
			var repeat = function(count) {
				if (this == null) {
					throw TypeError();
				}
				var string = String(this);
				// `ToInteger`
				var n = count ? Number(count) : 0;
				if (n != n) { // better `isNaN`
					n = 0;
				}
				// Account for out-of-bounds indices
				if (n < 0 || n == Infinity) {
					throw RangeError();
				}
				var result = '';
				while (n) {
					if (n % 2 == 1) {
						result += string;
					}
					if (n > 1) {
						string += string;
					}
					n >>= 1;
				}
				return result;
			};
			if (defineProperty) {
				defineProperty(String.prototype, 'repeat', {
					'value': repeat,
					'configurable': true,
					'writable': true
				});
			} else {
				String.prototype.repeat = repeat;
			}
		}());
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var escapeXml = __webpack_require__(11).escapeXml;
	
	// Helper function to produce an HTML tag.
	var tag = function(name, attrs, selfclosing) {
	    var result = '<' + name;
	    if (attrs && attrs.length > 0) {
	        var i = 0;
	        var attrib;
	        while ((attrib = attrs[i]) !== undefined) {
	            result += ' ' + attrib[0] + '="' + attrib[1] + '"';
	            i++;
	        }
	    }
	    if (selfclosing) {
	        result += ' /';
	    }
	
	    result += '>';
	    return result;
	};
	
	var reHtmlTag = /\<[^>]*\>/;
	var reUnsafeProtocol = /^javascript:|vbscript:|file:|data:/i;
	var reSafeDataProtocol = /^data:image\/(?:png|gif|jpeg|webp)/i;
	
	var potentiallyUnsafe = function(url) {
	    return reUnsafeProtocol.test(url) &&
	        !reSafeDataProtocol.test(url);
	};
	
	var renderNodes = function(block) {
	
	    var attrs;
	    var info_words;
	    var tagname;
	    var walker = block.walker();
	    var event, node, entering;
	    var buffer = "";
	    var lastOut = "\n";
	    var disableTags = 0;
	    var grandparent;
	    var out = function(s) {
	        if (disableTags > 0) {
	            buffer += s.replace(reHtmlTag, '');
	        } else {
	            buffer += s;
	        }
	        lastOut = s;
	    };
	    var esc = this.escape;
	    var cr = function() {
	        if (lastOut !== '\n') {
	            buffer += '\n';
	            lastOut = '\n';
	        }
	    };
	
	    var options = this.options;
	
	    if (options.time) { console.time("rendering"); }
	
	    while ((event = walker.next())) {
	        entering = event.entering;
	        node = event.node;
	
	        attrs = [];
	        if (options.sourcepos) {
	            var pos = node.sourcepos;
	            if (pos) {
	                attrs.push(['data-sourcepos', String(pos[0][0]) + ':' +
	                            String(pos[0][1]) + '-' + String(pos[1][0]) + ':' +
	                            String(pos[1][1])]);
	            }
	        }
	
	        switch (node.type) {
	        case 'Text':
	            out(esc(node.literal, false));
	            break;
	
	        case 'Softbreak':
	            out(this.softbreak);
	            break;
	
	        case 'Hardbreak':
	            out(tag('br', [], true));
	            cr();
	            break;
	
	        case 'Emph':
	            out(tag(entering ? 'em' : '/em'));
	            break;
	
	        case 'Strong':
	            out(tag(entering ? 'strong' : '/strong'));
	            break;
	
	        case 'Html':
	            if (options.safe) {
	                out('<!-- raw HTML omitted -->');
	            } else {
	                out(node.literal);
	            }
	            break;
	
	        case 'Link':
	            if (entering) {
	                if (!(options.safe && potentiallyUnsafe(node.destination))) {
	                    attrs.push(['href', esc(node.destination, true)]);
	                }
	                if (node.title) {
	                    attrs.push(['title', esc(node.title, true)]);
	                }
	                out(tag('a', attrs));
	            } else {
	                out(tag('/a'));
	            }
	            break;
	
	        case 'Image':
	            if (entering) {
	                if (disableTags === 0) {
	                    if (options.safe &&
	                         potentiallyUnsafe(node.destination)) {
	                        out('<img src="" alt="');
	                    } else {
	                        out('<img src="' + esc(node.destination, true) +
	                            '" alt="');
	                    }
	                }
	                disableTags += 1;
	            } else {
	                disableTags -= 1;
	                if (disableTags === 0) {
	                    if (node.title) {
	                        out('" title="' + esc(node.title, true));
	                    }
	                    out('" />');
	                }
	            }
	            break;
	
	        case 'Code':
	            out(tag('code') + esc(node.literal, false) + tag('/code'));
	            break;
	
	        case 'Document':
	            break;
	
	        case 'Paragraph':
	            grandparent = node.parent.parent;
	            if (grandparent !== null &&
	                grandparent.type === 'List') {
	                if (grandparent.listTight) {
	                    break;
	                }
	            }
	            if (entering) {
	                cr();
	                out(tag('p', attrs));
	            } else {
	                out(tag('/p'));
	                cr();
	            }
	            break;
	
	        case 'BlockQuote':
	            if (entering) {
	                cr();
	                out(tag('blockquote', attrs));
	                cr();
	            } else {
	                cr();
	                out(tag('/blockquote'));
	                cr();
	            }
	            break;
	
	        case 'Item':
	            if (entering) {
	                out(tag('li', attrs));
	            } else {
	                out(tag('/li'));
	                cr();
	            }
	            break;
	
	        case 'List':
	            tagname = node.listType === 'Bullet' ? 'ul' : 'ol';
	            if (entering) {
	                var start = node.listStart;
	                if (start !== null && start !== 1) {
	                    attrs.push(['start', start.toString()]);
	                }
	                cr();
	                out(tag(tagname, attrs));
	                cr();
	            } else {
	                cr();
	                out(tag('/' + tagname));
	                cr();
	            }
	            break;
	
	        case 'Header':
	            tagname = 'h' + node.level;
	            if (entering) {
	                cr();
	                out(tag(tagname, attrs));
	            } else {
	                out(tag('/' + tagname));
	                cr();
	            }
	            break;
	
	        case 'CodeBlock':
	            info_words = node.info ? node.info.split(/\s+/) : [];
	            if (info_words.length > 0 && info_words[0].length > 0) {
	                attrs.push(['class', 'language-' + esc(info_words[0], true)]);
	            }
	            cr();
	            out(tag('pre') + tag('code', attrs));
	            out(esc(node.literal, false));
	            out(tag('/code') + tag('/pre'));
	            cr();
	            break;
	
	        case 'HtmlBlock':
	            cr();
	            if (options.safe) {
	                out('<!-- raw HTML omitted -->');
	            } else {
	                out(node.literal);
	            }
	            cr();
	            break;
	
	        case 'HorizontalRule':
	            cr();
	            out(tag('hr', attrs, true));
	            cr();
	            break;
	
	        default:
	            throw "Unknown node type " + node.type;
	        }
	
	    }
	    if (options.time) { console.timeEnd("rendering"); }
	    return buffer;
	};
	
	// The HtmlRenderer object.
	function HtmlRenderer(options){
	    return {
	        // default options:
	        softbreak: '\n', // by default, soft breaks are rendered as newlines in HTML
	        // set to "<br />" to make them hard breaks
	        // set to " " if you want to ignore line wrapping in source
	        escape: escapeXml,
	        options: options || {},
	        render: renderNodes
	    };
	}
	
	module.exports = HtmlRenderer;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var escapeXml = __webpack_require__(11).escapeXml;
	
	// Helper function to produce an XML tag.
	var tag = function(name, attrs, selfclosing) {
	    var result = '<' + name;
	    if (attrs && attrs.length > 0) {
	        var i = 0;
	        var attrib;
	        while ((attrib = attrs[i]) !== undefined) {
	            result += ' ' + attrib[0] + '="' + attrib[1] + '"';
	            i++;
	        }
	    }
	    if (selfclosing) {
	        result += ' /';
	    }
	
	    result += '>';
	    return result;
	};
	
	var reXMLTag = /\<[^>]*\>/;
	
	var toTagName = function(s) {
	    return s.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
	};
	
	var renderNodes = function(block) {
	
	    var attrs;
	    var tagname;
	    var walker = block.walker();
	    var event, node, entering;
	    var buffer = "";
	    var lastOut = "\n";
	    var disableTags = 0;
	    var indentLevel = 0;
	    var indent = '  ';
	    var unescapedContents;
	    var container;
	    var selfClosing;
	    var nodetype;
	
	    var out = function(s) {
	        if (disableTags > 0) {
	            buffer += s.replace(reXMLTag, '');
	        } else {
	            buffer += s;
	        }
	        lastOut = s;
	    };
	    var esc = this.escape;
	    var cr = function() {
	        if (lastOut !== '\n') {
	            buffer += '\n';
	            lastOut = '\n';
	            for (var i = indentLevel; i > 0; i--) {
	                buffer += indent;
	            }
	        }
	    };
	
	    var options = this.options;
	
	    if (options.time) { console.time("rendering"); }
	
	    buffer += '<?xml version="1.0" encoding="UTF-8"?>\n';
	    buffer += '<!DOCTYPE CommonMark SYSTEM "CommonMark.dtd">\n';
	
	    while ((event = walker.next())) {
	        entering = event.entering;
	        node = event.node;
	        nodetype = node.type;
	
	        container = node.isContainer;
	        selfClosing = nodetype === 'HorizontalRule' || nodetype === 'Hardbreak' ||
	            nodetype === 'Softbreak';
	        unescapedContents = nodetype === 'Html' || nodetype === 'HtmlInline';
	        tagname = toTagName(nodetype);
	
	        if (entering) {
	
	            attrs = [];
	
	            switch (nodetype) {
	            case 'List':
	                if (node.listType !== null) {
	                    attrs.push(['type', node.listType.toLowerCase()]);
	                }
	                if (node.listStart !== null) {
	                    attrs.push(['start', String(node.listStart)]);
	                }
	                if (node.listTight !== null) {
	                    attrs.push(['tight', (node.listTight ? 'true' : 'false')]);
	                }
	                var delim = node.listDelimiter;
	                if (delim !== null) {
	                    var delimword = '';
	                    if (delim === '.') {
	                        delimword = 'period';
	                    } else {
	                        delimword = 'paren';
	                    }
	                    attrs.push(['delimiter', delimword]);
	                }
	                break;
	            case 'CodeBlock':
	                if (node.info) {
	                    attrs.push(['info', node.info]);
	                }
	                break;
	            case 'Header':
	                attrs.push(['level', String(node.level)]);
	                break;
	            case 'Link':
	            case 'Image':
	                attrs.push(['destination', node.destination]);
	                attrs.push(['title', node.title]);
	                break;
	            default:
	                break;
	            }
	            if (options.sourcepos) {
	                var pos = node.sourcepos;
	                if (pos) {
	                    attrs.push(['sourcepos', String(pos[0][0]) + ':' +
	                                String(pos[0][1]) + '-' + String(pos[1][0]) + ':' +
	                                String(pos[1][1])]);
	                }
	            }
	
	            cr();
	            out(tag(tagname, attrs, selfClosing));
	            if (container) {
	                indentLevel += 1;
	            } else if (!container && !selfClosing) {
	                var lit = node.literal;
	                if (lit) {
	                    out(unescapedContents ? lit : esc(lit));
	                }
	                out(tag('/' + tagname));
	            }
	        } else {
	            indentLevel -= 1;
	            cr();
	            out(tag('/' + tagname));
	        }
	
	
	    }
	    if (options.time) { console.timeEnd("rendering"); }
	    buffer += '\n';
	    return buffer;
	};
	
	// The XmlRenderer object.
	function XmlRenderer(options){
	    return {
	        // default options:
	        softbreak: '\n', // by default, soft breaks are rendered as newlines in HTML
	        // set to "<br />" to make them hard breaks
	        // set to " " if you want to ignore line wrapping in source
	        escape: escapeXml,
	        options: options || {},
	        render: renderNodes
	    };
	}
	
	module.exports = XmlRenderer;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/23.
	 */
	//渲染Sample
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _commonmark = __webpack_require__(8);
	
	var Commonmark = _interopRequireWildcard(_commonmark);
	
	var rex = {
	    htmlSingleTag: /^<(\w+)\s*(.*)\/?>(?:<\/\1>|)$/,
	    html: /<|&#?\w+;/,
	    htmlProps: /(\w+)=([^>]+)/i
	};
	
	var domIdentity;
	if (typeof document !== "undefined") {
	    domIdentity = document.createElement("div");
	} else {
	    console.error("document undefined!");
	}
	
	var SampleRenderer = (function () {
	    function SampleRenderer(options) {
	        _classCallCheck(this, SampleRenderer);
	
	        var opts = options || {};
	        this.sourcePos = opts.sourcePos;
	        this.softBreak = opts.softBreak || '\n';
	        this.escapeHtml = !!opts.escapeHtml;
	        this.skipHtml = !!opts.skipHtml;
	
	        this.howRenderHtml = {};
	    }
	
	    _createClass(SampleRenderer, [{
	        key: 'renderHtml',
	        value: function renderHtml(tagName, fn) {
	            if (typeof fn !== "function") return;
	            this.howRenderHtml[tagName] = fn;
	        }
	    }, {
	        key: 'render',
	        value: function render(block) {
	            var self = MarkdownNodeElement;
	
	            var walker = block.walker();
	            var sourcePos = this.sourcePos;
	            var escapeHtml = this.escapeHtml;
	            var skipHtml = this.skipHtml;
	            var infoWords;
	            var softBreak = this.softBreak === 'br' ? _react2['default'].createElement('br') : this.softBreak;
	
	            var e, node, entering, leaving, attrs, doc;
	            while (e = walker.next()) {
	                entering = e.entering;
	                leaving = !entering;
	                node = e.node;
	                attrs = {};
	
	                if (!doc) {
	                    doc = node;
	                    node.react = { children: [] };
	                }
	
	                if (sourcePos && node.sourcepos) {
	                    var pos = node.sourcepos;
	                    attrs['data-sourcepos'] = [pos[0][0], ':', pos[0][1], '-', pos[1][0], ':', pos[1][1]].map(String).join('');
	                }
	
	                if (node.type === 'Paragraph' && self.isGrandParentOfList(node)) {
	                    continue;
	                }
	
	                if (leaving) {
	                    if (node.type === 'Image') {
	                        node.react.props.alt = node.react.children[0];
	                        node.react.children = [];
	                    }
	
	                    if (node !== doc) {
	                        self.addChild(node, self.createElement(node.react.tag, node.react.props, node.react.children));
	                    }
	
	                    continue;
	                }
	
	                // Entering a new node
	                switch (node.type) {
	                    case 'Html':
	                    case 'HtmlBlock':
	                        if (escapeHtml) {
	                            self.addChild(node, node.literal);
	                        } else if (!skipHtml) {
	
	                            var htmlprase = rex.htmlSingleTag.exec(node.literal);
	                            if (Array.isArray(htmlprase) && htmlprase[1]) {
	
	                                var htmltag = htmlprase[1];
	                                var htmlele;
	
	                                domIdentity.innerHTML = node.literal;
	                                var htmlattributes = domIdentity.childNodes[0].attributes;
	                                for (var i = 0; i < htmlattributes.length; i++) {
	                                    var a = htmlattributes[i];
	                                    var name = a.name;
	                                    if (name) {
	                                        if (name.toLowerCase() === "classname") {
	                                            name = "className";
	                                        }
	                                        attrs[name] = a.nodeValue.length > 0 ? a.nodeValue : true;
	                                    }
	                                }
	
	                                if (typeof this.howRenderHtml[htmltag] === "function") {
	                                    htmlele = this.howRenderHtml[htmltag](htmltag, attrs);
	                                } else {
	                                    htmlele = self.createElement(htmltag, attrs);
	                                }
	
	                                if (htmlele.__proto__ && htmlele.__proto__._isReactElement) {
	                                    self.addChild(node, htmlele);
	                                } else {
	                                    self.addChild(node, _react2['default'].createElement(
	                                        'p',
	                                        { className: 'text-danger' },
	                                        '...',
	                                        htmlprase[0],
	                                        ' prase fail...'
	                                    ));
	                                }
	                            }
	                        }
	                        break;
	                    case 'Text':
	                        self.addChild(node, node.literal);
	                        break;
	                    case 'Paragraph':
	                        self.tag(node, 'p', attrs);
	                        break;
	                    case 'Header':
	                        self.tag(node, 'h' + node.level, attrs);
	                        break;
	                    case 'Softbreak':
	                        self.addChild(node, softBreak);
	                        break;
	                    case 'Strong':
	                        self.tag(node, 'strong', attrs);
	                        break;
	                    case 'Link':
	                        attrs.href = node.destination;
	                        if (node.title) {
	                            attrs.title = node.title;
	                        }
	                        self.tag(node, 'a', attrs);
	                        break;
	                    case 'Image':
	                        attrs.src = node.destination;
	                        if (node.title) {
	                            attrs.title = node.title;
	                        }
	                        self.tag(node, 'img', attrs);
	                        break;
	                    case 'Emph':
	                        self.tag(node, 'em', attrs);
	                        break;
	                    case 'Code':
	                        self.addChild(node, self.createElement('code', attrs, [node.literal]));
	                        break;
	                    case 'CodeBlock':
	                        infoWords = node.info ? node.info.split(/ +/) : [];
	                        if (infoWords.length > 0 && infoWords[0].length > 0) {
	                            attrs.className = 'language-' + infoWords[0];
	                        }
	
	                        var code = self.createElement('code', attrs, [node.literal]);
	                        self.addChild(node, self.createElement('pre', {}, [code]));
	                        break;
	                    case 'BlockQuote':
	                        self.tag(node, 'blockquote', attrs);
	                        break;
	                    case 'List':
	                        var start = node.listStart;
	                        if (start !== null && start !== 1) {
	                            attrs.start = start.toString();
	                        }
	                        self.tag(node, node.listType === 'Bullet' ? 'ul' : 'ol', attrs);
	                        break;
	                    case 'Item':
	                        self.tag(node, 'li', attrs);
	                        break;
	                    case 'HorizontalRule':
	                        self.addChild(node, self.createElement('hr', attrs));
	                        break;
	                    case 'Document':
	                        break;
	                    default:
	                        throw new Error('Unknown node type "' + node.type + '"');
	                }
	            }
	
	            return doc.react.children;
	        }
	    }]);
	
	    return SampleRenderer;
	})();
	
	var MarkdownNodeElement = (function () {
	    function MarkdownNodeElement() {
	        _classCallCheck(this, MarkdownNodeElement);
	    }
	
	    _createClass(MarkdownNodeElement, null, [{
	        key: 'tag',
	        value: function tag(node, name, attrs, children) {
	            node.react = {
	                tag: name,
	                props: attrs,
	                children: children || []
	            };
	        }
	    }, {
	        key: 'isGrandParentOfList',
	        value: function isGrandParentOfList(node) {
	            if (!node || !node.parent) {
	                return false;
	            }
	            var grandparent = node.parent.parent;
	            return grandparent && grandparent.type === 'List' && grandparent.listTight;
	        }
	    }, {
	        key: 'addChild',
	        value: function addChild(node, child) {
	            var parent = node;
	            do {
	                parent = parent.parent;
	            } while (!parent.react);
	
	            parent.react.children.push(child);
	        }
	
	        /**
	         *
	         * @param tagName
	         * @param props
	         * @param children
	         * @returns {DOMElement<Array<any>|any[]>|ClassicElement<Array<any>|any[]>|ReactElement<Array<any>|any[]>}
	         */
	    }, {
	        key: 'createElement',
	        value: function createElement(tagName, props, children) {
	            var args = [tagName, props].concat(children);
	            var child = _react2['default'].createElement.apply(_react2['default'], args);
	            return child;
	        }
	    }]);
	
	    return MarkdownNodeElement;
	})();
	
	exports['default'] = SampleRenderer;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/10.
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _alsc = __webpack_require__(30);
	
	var _superagent = __webpack_require__(33);
	
	var agent = _interopRequireWildcard(_superagent);
	
	var _async = __webpack_require__(36);
	
	var async = _interopRequireWildcard(_async);
	
	var _utilsUtilsJs = __webpack_require__(39);
	
	var _viewContentSampleFieldJs = __webpack_require__(40);
	
	var _viewContentSampleFieldJs2 = _interopRequireDefault(_viewContentSampleFieldJs);
	
	var SampleManager = (function (_EventDispatcher) {
	    _inherits(SampleManager, _EventDispatcher);
	
	    _createClass(SampleManager, [{
	        key: "CONFIG_LOADED",
	
	        /**@return {string}*/
	        get: function get() {
	            return "CONFIG_LOADED";
	        }
	    }, {
	        key: "TOGGLE_TO_SAMPLE",
	
	        /**@return {string}*/
	        get: function get() {
	            return "TOGGLE_TO_SAMPLE";
	        }
	    }], [{
	        key: "instance",
	        get: function get() {
	            if (!(SampleManager._instance instanceof SampleManager)) {
	                SampleManager._instance = new SampleManager();
	            }
	            return SampleManager._instance;
	        }
	    }]);
	
	    function SampleManager() {
	        var _this = this;
	
	        _classCallCheck(this, SampleManager);
	
	        _get(Object.getPrototypeOf(SampleManager.prototype), "constructor", this).call(this);
	        this.samplesData = {};
	        this.samplesDict = {}; //例子代码文件
	        this.currExample = null;
	        agent.get("dist/post_data.json").then(function (res) {
	            _this.samplesData = JSON.parse(res.text);
	
	            _this.samplesDict["HEAD"] = _this.samplesData.posts[0];
	            _this.samplesIdDict = {};
	            var id = 1;
	            _this.samplesData.posts.forEach(function (post) {
	                post.id = id;
	                id++;
	                _this.samplesDict[post.title + post.date] = post;
	                _this.samplesIdDict[post.id] = post;
	            });
	
	            _this.finsishLoadConfig();
	        });
	
	        //this.addListener(this.READY_SAMPLE,this.readySample.bind(this))
	    }
	
	    _createClass(SampleManager, [{
	        key: "finsishLoadConfig",
	        value: function finsishLoadConfig() {
	            this.emit(this.CONFIG_LOADED);
	            this.toggleToSample("HEAD");
	        }
	    }, {
	        key: "toggleToSample",
	        value: function toggleToSample(id) {
	            var _this2 = this;
	
	            if (this.currExample) {
	                this.currExample.destruct();
	            }
	
	            var sample = this.samplesDict[id];
	            if (sample) {
	                if (!sample["marddown"] && !sample["script"]) {
	                    async.series([function (next) {
	                        agent.get(_utilsUtilsJs.url.join("dist/post", sample.path, "/Entry.js")).end(function (err, res) {
	                            next(err, res.text);
	                        });
	                    }, function (next) {
	                        agent.get(_utilsUtilsJs.url.join("src-post/", sample.path, "Note.md")).end(function (err, res) {
	                            next(err, res.text);
	                        });
	                    }], function (err, results) {
	                        var res_script = results[0];
	                        var res_markdown = results[1];
	
	                        eval.apply(_this2, ["var script =" + res_script]);
	                        if (typeof script !== "undefined" && script.prototype && script.prototype instanceof _viewContentSampleFieldJs2["default"]) {
	                            sample["script"] = script;
	                        } else {
	                            console.warn("load sample script error", sample.path);
	                        }
	
	                        sample["markdown"] = res_markdown;
	
	                        _this2.emit(_this2.TOGGLE_TO_SAMPLE, { sample: sample });
	                    });
	                } else {
	                    this.emit(this.TOGGLE_TO_SAMPLE, { sample: sample });
	                }
	            }
	        }
	    }, {
	        key: "readySample",
	        value: function readySample(id, data) {
	            var sample = this.samplesIdDict[id];
	            if (sample) {
	                if (!sample.runingScript) {
	                    sample.runingScript = new sample.script(_utilsUtilsJs.url.join("src-post/", sample.path), _utilsUtilsJs.url.join("dist/post", sample.path));
	                }
	                sample.runingScript.launch(data.canvas);
	                this.currExample = sample.runingScript;
	            }
	        }
	    }]);
	
	    return SampleManager;
	})(_alsc.EventDispatcher);
	
	exports["default"] = SampleManager.instance;
	module.exports = exports["default"];

	/**@return {string}*/
	//get READY_SAMPLE(){return "READY_SAMPLE";};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/4.
	 */
	
	exports.EventDispatcher = __webpack_require__(31);
	//exports.Ajax  = require("./dist/ajax/AjaxProxy.js")

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/4.
	 */
	"use strict";
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _utilsJs = __webpack_require__(32);
	
	//var eventsMap = typeof Symbol==="function"?Symbol():"__eventsMap__";
	
	var utils = _interopRequireWildcard(_utilsJs);
	
	var eventsMap = "__eventsMap__";
	
	var EventDispatcher = (function () {
	    function EventDispatcher() {
	        _classCallCheck(this, EventDispatcher);
	
	        this[eventsMap] = {};
	    }
	
	    /**
	     * 派发一个事件
	     * @param event
	     * @param args
	     */
	
	    _createClass(EventDispatcher, [{
	        key: "emit",
	        value: function emit(event) {
	            var eventmap = this[eventsMap][event];
	            if (Array.isArray(eventmap)) {
	                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                    args[_key - 1] = arguments[_key];
	                }
	
	                utils.notifyArray(eventmap, args);
	            }
	        }
	
	        /**
	         * 返回所有回调方法
	         * @param event
	         * @returns {*}
	         */
	    }, {
	        key: "listeners",
	        value: function listeners(event) {
	            var result = this[eventsMap][event];
	            if (!result) {
	                result = [];
	                this[eventsMap][event] = result;
	            }
	            return result.map(function (bin) {
	                return bin.callback;
	            });
	        }
	    }, {
	        key: "hasListeners",
	        value: function hasListeners(event) {
	            if (!this[eventsMap][event]) {
	                return false;
	            }
	            return this[eventsMap][event].length > 0;
	        }
	
	        /**
	         * 添加一只侦听器
	         * @param event
	         * @param callback
	         * @param thisObject
	         * @param priority
	         */
	    }, {
	        key: "addListener",
	        value: function addListener(event, callback, thisObject, priority) {
	            utils.registNotify(this[eventsMap], event, callback, thisObject, null, priority);
	        }
	
	        /**
	         * 移除一只侦听器
	         * @param event
	         * @param callback
	         * @param thisObject
	         */
	    }, {
	        key: "removeListener",
	        value: function removeListener(event, callback, thisObject) {
	            utils.unregistNotify(this[eventsMap], event, callback, thisObject);
	        }
	
	        /**
	         * 移除所有侦听器
	         * @param event
	         */
	    }, {
	        key: "removeAllListener",
	        value: function removeAllListener(event) {
	            this[eventsMap][event] = [];
	        }
	
	        /**
	         * 当,简易触发器
	         * @param event
	         * @param callback
	         */
	    }, {
	        key: "on",
	        value: function on(event, callback) {
	            utils.registNotify(this[eventsMap], event, callback);
	        }
	
	        /**
	         * 当,唯一触发器
	         * @param event
	         * @param callback
	         */
	    }, {
	        key: "once",
	        value: function once(event, callback) {
	            utils.registNotify(this[eventsMap], event, callback, null, null, null, true);
	        }
	    }]);
	
	    return EventDispatcher;
	})();
	
	exports["default"] = EventDispatcher;
	module.exports = exports["default"];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9FdmVudERpc3BhdGNoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozt1QkFDVSxZQUFZOzs7O0lBQXZCLEtBQUs7O0FBR2pCLElBQUksU0FBUyxHQUFHLGVBQWUsQ0FBQzs7SUFDMUIsZUFBZTtBQUNOLGFBRFQsZUFBZSxHQUNIOzhCQURaLGVBQWU7O0FBRWIsWUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUN4Qjs7Ozs7Ozs7aUJBSEMsZUFBZTs7ZUFVYixjQUFDLEtBQUssRUFBVztBQUNqQixnQkFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLGdCQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7a0RBRmxCLElBQUk7QUFBSix3QkFBSTs7O0FBR1gscUJBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ3BDO1NBQ0o7Ozs7Ozs7OztlQU9RLG1CQUFDLEtBQUssRUFBRTtBQUNiLGdCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsZ0JBQUcsQ0FBQyxNQUFNLEVBQUM7QUFDUCxzQkFBTSxHQUFHLEVBQUUsQ0FBQztBQUNaLG9CQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ25DO0FBQ0QsbUJBQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFTLEdBQUcsRUFBQztBQUMzQix1QkFBTyxHQUFHLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLENBQUMsQ0FBQztTQUNOOzs7ZUFFVyxzQkFBQyxLQUFLLEVBQUM7QUFDZixnQkFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQztBQUFDLHVCQUFPLEtBQUssQ0FBQzthQUFDO0FBQzFDLG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1NBQzFDOzs7Ozs7Ozs7OztlQVNVLHFCQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtBQUMvQyxpQkFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3BGOzs7Ozs7Ozs7O2VBUWEsd0JBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDeEMsaUJBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDdEU7Ozs7Ozs7O2VBTWdCLDJCQUFDLEtBQUssRUFBRTtBQUNyQixnQkFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMvQjs7Ozs7Ozs7O2VBT0MsWUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ2hCLGlCQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDeEQ7Ozs7Ozs7OztlQU9HLGNBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUNsQixpQkFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRjs7O1dBbkZDLGVBQWU7OztxQkFzRk4sZUFBZSIsImZpbGUiOiJldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzQuXHJcbiAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4vdXRpbHMuanNcIjtcclxuXHJcbi8vdmFyIGV2ZW50c01hcCA9IHR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCI/U3ltYm9sKCk6XCJfX2V2ZW50c01hcF9fXCI7XHJcbnZhciBldmVudHNNYXAgPSBcIl9fZXZlbnRzTWFwX19cIjtcclxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXNbZXZlbnRzTWFwXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rS+5Y+R5LiA5Liq5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKi9cclxuICAgIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgICAgICB2YXIgZXZlbnRtYXAgPSB0aGlzW2V2ZW50c01hcF1bZXZlbnRdO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50bWFwKSkge1xyXG4gICAgICAgICAgICB1dGlscy5ub3RpZnlBcnJheShldmVudG1hcCwgYXJncylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57miYDmnInlm57osIPmlrnms5VcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIGxpc3RlbmVycyhldmVudCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzW2V2ZW50c01hcF1bZXZlbnRdO1xyXG4gICAgICAgIGlmKCFyZXN1bHQpe1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgdGhpc1tldmVudHNNYXBdW2V2ZW50XSA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5tYXAoZnVuY3Rpb24oYmluKXtcclxuICAgICAgICAgICAgcmV0dXJuIGJpbi5jYWxsYmFjaztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNMaXN0ZW5lcnMoZXZlbnQpe1xyXG4gICAgICAgIGlmKCF0aGlzW2V2ZW50c01hcF1bZXZlbnRdKXtyZXR1cm4gZmFsc2U7fVxyXG4gICAgICAgIHJldHVybiB0aGlzW2V2ZW50c01hcF1bZXZlbnRdLmxlbmd0aD4wO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5Y+q5L6m5ZCs5ZmoXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHRoaXNPYmplY3RcclxuICAgICAqIEBwYXJhbSBwcmlvcml0eVxyXG4gICAgICovXHJcbiAgICBhZGRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgdXRpbHMucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBudWxsLCBwcmlvcml0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTkuIDlj6rkvqblkKzlmahcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gdGhpc09iamVjdFxyXG4gICAgICovXHJcbiAgICByZW1vdmVMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QpIHtcclxuICAgICAgICB1dGlscy51bnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTmiYDmnInkvqblkKzlmahcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICByZW1vdmVBbGxMaXN0ZW5lcihldmVudCkge1xyXG4gICAgICAgIHRoaXNbZXZlbnRzTWFwXVtldmVudF0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9kyznroDmmJPop6blj5HlmahcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHV0aWxzLnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZMs5ZSv5LiA6Kem5Y+R5ZmoXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBvbmNlKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHV0aWxzLnJlZ2lzdE5vdGlmeSh0aGlzW2V2ZW50c01hcF0sIGV2ZW50LCBjYWxsYmFjaywgbnVsbCwgbnVsbCwgbnVsbCwgdHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGlzcGF0Y2hlcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Created by tommyZZM on 2015/8/19.
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.registNotify = registNotify;
	exports.unregistNotify = unregistNotify;
	exports.notify = notify;
	exports.notifyArray = notifyArray;
	
	function registNotify(notifymap, name, callback, thisObject, param, priority, once) {
	    //,reserve?:any
	    if (!notifymap[name]) notifymap[name] = [];
	    var arr = notifymap[name];
	
	    var length = arr.length;
	    var insertIndex = -1;
	    var bin;
	
	    if (priority === undefined) priority = 0;
	    for (var i = 0; i < length; i++) {
	        bin = arr[i];
	        if (bin && bin.callback === callback && bin.thisObject === thisObject) {
	            return false; //防止重复插入
	        }
	        if (bin && insertIndex == -1 && bin.priority < priority) {
	            insertIndex = i;
	        }
	    }
	
	    bin = { callback: callback, thisObject: thisObject, param: param ? param : [], priority: priority, once: once };
	    if (insertIndex != -1) {
	        arr.splice(insertIndex, 0, bin);
	    } else {
	        arr.push(bin);
	    }
	    notifymap[name] = arr;
	}
	
	function unregistNotify(notifymap, name, callback, thisObject) {
	    if (!notifymap[name]) return;
	    var arr = notifymap[name];
	    if (arr) {
	        notifymap[name] = arr.filter(function (bin) {
	            return !(bin.callback === callback && bin.thisObject === thisObject);
	        });
	    }
	}
	
	function notify(notifymap, name, param) {
	    var arr = notifymap[name];
	    if (arr) {
	        notifyArray(arr, param);
	        return true;
	    } else {
	        return false;
	    }
	}
	
	function notifyArray(arr, param) {
	    for (var i in arr) {
	        if (typeof +i === "number" && !isNaN(+i)) {
	            var bin = arr[i];
	            if (bin && bin.callback) {
	                if (!param) param = [];
	                if (bin.param) param = bin.param.concat(param);
	                bin.callback.apply(bin.thisObject, param);
	                if (bin.once) {
	                    arr.splice(i, 1);
	                }
	            }
	        }
	    }
	}
	//# sourceMappingURL=data:application/json;base64,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QUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7QUFDcEMsZ0JBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixnQkFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRTtBQUNyQixvQkFBSSxDQUFDLEtBQUssRUFBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLG9CQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlDLG1CQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFDLG9CQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDVCx1QkFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3BCO2FBQ0o7U0FDSjtLQUNKO0NBQ0oiLCJmaWxlIjoiZXZlbnRzL3V0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzE5LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3ROb3RpZnkobm90aWZ5bWFwLCBuYW1lLCBjYWxsYmFjaywgdGhpc09iamVjdCwgcGFyYW0sIHByaW9yaXR5LG9uY2UpIHsvLyxyZXNlcnZlPzphbnlcclxuICAgIGlmICghbm90aWZ5bWFwW25hbWVdKW5vdGlmeW1hcFtuYW1lXSA9IFtdO1xyXG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcclxuXHJcbiAgICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuICAgIHZhciBpbnNlcnRJbmRleCA9IC0xO1xyXG4gICAgdmFyIGJpbjtcclxuXHJcbiAgICBpZiAocHJpb3JpdHkgPT09IHVuZGVmaW5lZClwcmlvcml0eSA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYmluID0gYXJyW2ldO1xyXG4gICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBiaW4udGhpc09iamVjdCA9PT0gdGhpc09iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7Ly/pmLLmraLph43lpI3mj5LlhaVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJpbiAmJiBpbnNlcnRJbmRleCA9PSAtMSAmJiBiaW4ucHJpb3JpdHkgPCBwcmlvcml0eSkge1xyXG4gICAgICAgICAgICBpbnNlcnRJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJpbiA9IHtjYWxsYmFjazogY2FsbGJhY2ssIHRoaXNPYmplY3Q6IHRoaXNPYmplY3QsIHBhcmFtOiBwYXJhbSA/IHBhcmFtIDogW10sIHByaW9yaXR5OiBwcmlvcml0eSAsb25jZTpvbmNlfTtcclxuICAgIGlmIChpbnNlcnRJbmRleCAhPSAtMSkge1xyXG4gICAgICAgIGFyci5zcGxpY2UoaW5zZXJ0SW5kZXgsIDAsIGJpbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhcnIucHVzaChiaW4pO1xyXG4gICAgfVxyXG4gICAgbm90aWZ5bWFwW25hbWVdID0gYXJyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3ROb3RpZnkobm90aWZ5bWFwLCBuYW1lLCBjYWxsYmFjaywgdGhpc09iamVjdCkge1xyXG4gICAgaWYgKCFub3RpZnltYXBbbmFtZV0pcmV0dXJuO1xyXG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcclxuICAgIGlmIChhcnIpIHtcclxuICAgICAgICBub3RpZnltYXBbbmFtZV0gPSBhcnIuZmlsdGVyKGZ1bmN0aW9uKGJpbil7XHJcbiAgICAgICAgICAgIHJldHVybiAhKGJpbi5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgYmluLnRoaXNPYmplY3QgPT09IHRoaXNPYmplY3QpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnkobm90aWZ5bWFwLCBuYW1lLCBwYXJhbSkge1xyXG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcclxuICAgIGlmIChhcnIpIHtcclxuICAgICAgICBub3RpZnlBcnJheShhcnIsIHBhcmFtKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5QXJyYXkoYXJyLCBwYXJhbSkge1xyXG4gICAgZm9yICh2YXIgaSBpbiBhcnIpIHtcclxuICAgICAgICBpZih0eXBlb2YgK2kgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKCtpKSl7XHJcbiAgICAgICAgICAgIHZhciBiaW4gPSBhcnJbaV07XHJcbiAgICAgICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtKXBhcmFtID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAoYmluLnBhcmFtKXBhcmFtID0gYmluLnBhcmFtLmNvbmNhdChwYXJhbSk7XHJcbiAgICAgICAgICAgICAgICBiaW4uY2FsbGJhY2suYXBwbHkoYmluLnRoaXNPYmplY3QsIHBhcmFtKTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW4ub25jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(34);
	var reduce = __webpack_require__(35);
	
	/**
	 * Root reference for iframes.
	 */
	
	var root = 'undefined' == typeof window
	  ? (this || self)
	  : window;
	
	/**
	 * Noop.
	 */
	
	function noop(){};
	
	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isHost(obj) {
	  var str = {}.toString.call(obj);
	
	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}
	
	/**
	 * Determine XHR.
	 */
	
	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	};
	
	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */
	
	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };
	
	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject(obj) {
	  return obj === Object(obj);
	}
	
	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */
	
	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pairs.push(encodeURIComponent(key)
	        + '=' + encodeURIComponent(obj[key]));
	    }
	  }
	  return pairs.join('&');
	}
	
	/**
	 * Expose serialization method.
	 */
	
	 request.serializeObject = serialize;
	
	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */
	
	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;
	
	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }
	
	  return obj;
	}
	
	/**
	 * Expose parser.
	 */
	
	request.parseString = parseString;
	
	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */
	
	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};
	
	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */
	
	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };
	
	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */
	
	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};
	
	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;
	
	  lines.pop(); // trailing CRLF
	
	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }
	
	  return fields;
	}
	
	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */
	
	function type(str){
	  return str.split(/ *; */).shift();
	};
	
	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();
	
	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};
	
	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */
	
	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}
	
	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};
	
	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */
	
	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);
	
	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};
	
	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */
	
	Response.prototype.parseBody = function(str){
	  var parse = request.parse[this.type];
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};
	
	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */
	
	Response.prototype.setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }
	
	  var type = status / 100 | 0;
	
	  // status / class
	  this.status = status;
	  this.statusType = type;
	
	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;
	
	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};
	
	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */
	
	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;
	
	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;
	
	  return err;
	};
	
	/**
	 * Expose `Response`.
	 */
	
	request.Response = Response;
	
	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */
	
	function Request(method, url) {
	  var self = this;
	  Emitter.call(this);
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {};
	  this._header = {};
	  this.on('end', function(){
	    var err = null;
	    var res = null;
	
	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      return self.callback(err);
	    }
	
	    self.emit('response', res);
	
	    if (err) {
	      return self.callback(err, res);
	    }
	
	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }
	
	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;
	
	    self.callback(new_err, res);
	  });
	}
	
	/**
	 * Mixin `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Allow for extension
	 */
	
	Request.prototype.use = function(fn) {
	  fn(this);
	  return this;
	}
	
	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.timeout = function(ms){
	  this._timeout = ms;
	  return this;
	};
	
	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.clearTimeout = function(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};
	
	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	
	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};
	
	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};
	
	/**
	 * Remove header `field`.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};
	
	/**
	 * Get case-insensitive header `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 */
	
	Request.prototype.getHeader = function(field){
	  return this._header[field.toLowerCase()];
	};
	
	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.auth = function(user, pass){
	  var str = btoa(user + ':' + pass);
	  this.set('Authorization', 'Basic ' + str);
	  return this;
	};
	
	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/
	
	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};
	
	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.field = function(name, val){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(name, val);
	  return this;
	};
	
	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.attach = function(field, file, filename){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(field, file, filename);
	  return this;
	};
	
	/**
	 * Send `data`, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // querystring
	 *       request.get('/search')
	 *         .end(callback)
	 *
	 *       // multiple data "writes"
	 *       request.get('/search')
	 *         .send({ search: 'query' })
	 *         .send({ range: '1..5' })
	 *         .send({ order: 'desc' })
	 *         .end(callback)
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"})
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this.getHeader('Content-Type');
	
	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this.getHeader('Content-Type');
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }
	
	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};
	
	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */
	
	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};
	
	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */
	
	Request.prototype.crossDomainError = function(){
	  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
	  err.crossDomain = true;
	  this.callback(err);
	};
	
	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */
	
	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};
	
	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */
	
	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};
	
	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;
	
	  // store callback
	  this._callback = fn || noop;
	
	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;
	
	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }
	
	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };
	
	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }
	
	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }
	
	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }
	
	  // initiate request
	  xhr.open(this.method, this.url, true);
	
	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;
	
	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this.getHeader('Content-Type');
	    var serialize = request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (serialize) data = serialize(data);
	  }
	
	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }
	
	  // send stuff
	  this.emit('request', this);
	  xhr.send(data);
	  return this;
	};
	
	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */
	
	Request.prototype.then = function (fulfill, reject) {
	  return this.end(function(err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	}
	
	/**
	 * Expose `Request`.
	 */
	
	request.Request = Request;
	
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */
	
	function request(method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new Request('GET', method).end(url);
	  }
	
	  // url first
	  if (1 == arguments.length) {
	    return new Request('GET', method);
	  }
	
	  return new Request(method, url);
	}
	
	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.del = function(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * Expose `request`.
	 */
	
	module.exports = request;


/***/ },
/* 34 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};
	
	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */
	
	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];
	
	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, setImmediate, process) {/*!
	 * async
	 * https://github.com/caolan/async
	 *
	 * Copyright 2010-2014 Caolan McMahon
	 * Released under the MIT license
	 */
	(function () {
	
	    var async = {};
	    function noop() {}
	    function identity(v) {
	        return v;
	    }
	    function toBool(v) {
	        return !!v;
	    }
	    function notId(v) {
	        return !v;
	    }
	
	    // global on the server, window in the browser
	    var previous_async;
	
	    // Establish the root object, `window` (`self`) in the browser, `global`
	    // on the server, or `this` in some virtual machines. We use `self`
	    // instead of `window` for `WebWorker` support.
	    var root = typeof self === 'object' && self.self === self && self ||
	            typeof global === 'object' && global.global === global && global ||
	            this;
	
	    if (root != null) {
	        previous_async = root.async;
	    }
	
	    async.noConflict = function () {
	        root.async = previous_async;
	        return async;
	    };
	
	    function only_once(fn) {
	        return function() {
	            if (fn === null) throw new Error("Callback was already called.");
	            fn.apply(this, arguments);
	            fn = null;
	        };
	    }
	
	    function _once(fn) {
	        return function() {
	            if (fn === null) return;
	            fn.apply(this, arguments);
	            fn = null;
	        };
	    }
	
	    //// cross-browser compatiblity functions ////
	
	    var _toString = Object.prototype.toString;
	
	    var _isArray = Array.isArray || function (obj) {
	        return _toString.call(obj) === '[object Array]';
	    };
	
	    // Ported from underscore.js isObject
	    var _isObject = function(obj) {
	        var type = typeof obj;
	        return type === 'function' || type === 'object' && !!obj;
	    };
	
	    function _isArrayLike(arr) {
	        return _isArray(arr) || (
	            // has a positive integer length property
	            typeof arr.length === "number" &&
	            arr.length >= 0 &&
	            arr.length % 1 === 0
	        );
	    }
	
	    function _each(coll, iterator) {
	        return _isArrayLike(coll) ?
	            _arrayEach(coll, iterator) :
	            _forEachOf(coll, iterator);
	    }
	
	    function _arrayEach(arr, iterator) {
	        var index = -1,
	            length = arr.length;
	
	        while (++index < length) {
	            iterator(arr[index], index, arr);
	        }
	    }
	
	    function _map(arr, iterator) {
	        var index = -1,
	            length = arr.length,
	            result = Array(length);
	
	        while (++index < length) {
	            result[index] = iterator(arr[index], index, arr);
	        }
	        return result;
	    }
	
	    function _range(count) {
	        return _map(Array(count), function (v, i) { return i; });
	    }
	
	    function _reduce(arr, iterator, memo) {
	        _arrayEach(arr, function (x, i, a) {
	            memo = iterator(memo, x, i, a);
	        });
	        return memo;
	    }
	
	    function _forEachOf(object, iterator) {
	        _arrayEach(_keys(object), function (key) {
	            iterator(object[key], key);
	        });
	    }
	
	    function _indexOf(arr, item) {
	        for (var i = 0; i < arr.length; i++) {
	            if (arr[i] === item) return i;
	        }
	        return -1;
	    }
	
	    var _keys = Object.keys || function (obj) {
	        var keys = [];
	        for (var k in obj) {
	            if (obj.hasOwnProperty(k)) {
	                keys.push(k);
	            }
	        }
	        return keys;
	    };
	
	    function _keyIterator(coll) {
	        var i = -1;
	        var len;
	        var keys;
	        if (_isArrayLike(coll)) {
	            len = coll.length;
	            return function next() {
	                i++;
	                return i < len ? i : null;
	            };
	        } else {
	            keys = _keys(coll);
	            len = keys.length;
	            return function next() {
	                i++;
	                return i < len ? keys[i] : null;
	            };
	        }
	    }
	
	    // Similar to ES6's rest param (http://ariya.ofilabs.com/2013/03/es6-and-rest-parameter.html)
	    // This accumulates the arguments passed into an array, after a given index.
	    // From underscore.js (https://github.com/jashkenas/underscore/pull/2140).
	    function _restParam(func, startIndex) {
	        startIndex = startIndex == null ? func.length - 1 : +startIndex;
	        return function() {
	            var length = Math.max(arguments.length - startIndex, 0);
	            var rest = Array(length);
	            for (var index = 0; index < length; index++) {
	                rest[index] = arguments[index + startIndex];
	            }
	            switch (startIndex) {
	                case 0: return func.call(this, rest);
	                case 1: return func.call(this, arguments[0], rest);
	            }
	            // Currently unused but handle cases outside of the switch statement:
	            // var args = Array(startIndex + 1);
	            // for (index = 0; index < startIndex; index++) {
	            //     args[index] = arguments[index];
	            // }
	            // args[startIndex] = rest;
	            // return func.apply(this, args);
	        };
	    }
	
	    function _withoutIndex(iterator) {
	        return function (value, index, callback) {
	            return iterator(value, callback);
	        };
	    }
	
	    //// exported async module functions ////
	
	    //// nextTick implementation with browser-compatible fallback ////
	
	    // capture the global reference to guard against fakeTimer mocks
	    var _setImmediate = typeof setImmediate === 'function' && setImmediate;
	
	    var _delay = _setImmediate ? function(fn) {
	        // not a direct alias for IE10 compatibility
	        _setImmediate(fn);
	    } : function(fn) {
	        setTimeout(fn, 0);
	    };
	
	    if (typeof process === 'object' && typeof process.nextTick === 'function') {
	        async.nextTick = process.nextTick;
	    } else {
	        async.nextTick = _delay;
	    }
	    async.setImmediate = _setImmediate ? _delay : async.nextTick;
	
	
	    async.forEach =
	    async.each = function (arr, iterator, callback) {
	        return async.eachOf(arr, _withoutIndex(iterator), callback);
	    };
	
	    async.forEachSeries =
	    async.eachSeries = function (arr, iterator, callback) {
	        return async.eachOfSeries(arr, _withoutIndex(iterator), callback);
	    };
	
	
	    async.forEachLimit =
	    async.eachLimit = function (arr, limit, iterator, callback) {
	        return _eachOfLimit(limit)(arr, _withoutIndex(iterator), callback);
	    };
	
	    async.forEachOf =
	    async.eachOf = function (object, iterator, callback) {
	        callback = _once(callback || noop);
	        object = object || [];
	        var size = _isArrayLike(object) ? object.length : _keys(object).length;
	        var completed = 0;
	        if (!size) {
	            return callback(null);
	        }
	        _each(object, function (value, key) {
	            iterator(object[key], key, only_once(done));
	        });
	        function done(err) {
	            if (err) {
	                callback(err);
	            }
	            else {
	                completed += 1;
	                if (completed >= size) {
	                    callback(null);
	                }
	            }
	        }
	    };
	
	    async.forEachOfSeries =
	    async.eachOfSeries = function (obj, iterator, callback) {
	        callback = _once(callback || noop);
	        obj = obj || [];
	        var nextKey = _keyIterator(obj);
	        var key = nextKey();
	        function iterate() {
	            var sync = true;
	            if (key === null) {
	                return callback(null);
	            }
	            iterator(obj[key], key, only_once(function (err) {
	                if (err) {
	                    callback(err);
	                }
	                else {
	                    key = nextKey();
	                    if (key === null) {
	                        return callback(null);
	                    } else {
	                        if (sync) {
	                            async.nextTick(iterate);
	                        } else {
	                            iterate();
	                        }
	                    }
	                }
	            }));
	            sync = false;
	        }
	        iterate();
	    };
	
	
	
	    async.forEachOfLimit =
	    async.eachOfLimit = function (obj, limit, iterator, callback) {
	        _eachOfLimit(limit)(obj, iterator, callback);
	    };
	
	    function _eachOfLimit(limit) {
	
	        return function (obj, iterator, callback) {
	            callback = _once(callback || noop);
	            obj = obj || [];
	            var nextKey = _keyIterator(obj);
	            if (limit <= 0) {
	                return callback(null);
	            }
	            var done = false;
	            var running = 0;
	            var errored = false;
	
	            (function replenish () {
	                if (done && running <= 0) {
	                    return callback(null);
	                }
	
	                while (running < limit && !errored) {
	                    var key = nextKey();
	                    if (key === null) {
	                        done = true;
	                        if (running <= 0) {
	                            callback(null);
	                        }
	                        return;
	                    }
	                    running += 1;
	                    iterator(obj[key], key, only_once(function (err) {
	                        running -= 1;
	                        if (err) {
	                            callback(err);
	                            errored = true;
	                        }
	                        else {
	                            replenish();
	                        }
	                    }));
	                }
	            })();
	        };
	    }
	
	
	    function doParallel(fn) {
	        return function (obj, iterator, callback) {
	            return fn(async.eachOf, obj, iterator, callback);
	        };
	    }
	    function doParallelLimit(fn) {
	        return function (obj, limit, iterator, callback) {
	            return fn(_eachOfLimit(limit), obj, iterator, callback);
	        };
	    }
	    function doSeries(fn) {
	        return function (obj, iterator, callback) {
	            return fn(async.eachOfSeries, obj, iterator, callback);
	        };
	    }
	
	    function _asyncMap(eachfn, arr, iterator, callback) {
	        callback = _once(callback || noop);
	        var results = [];
	        eachfn(arr, function (value, index, callback) {
	            iterator(value, function (err, v) {
	                results[index] = v;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err, results);
	        });
	    }
	
	    async.map = doParallel(_asyncMap);
	    async.mapSeries = doSeries(_asyncMap);
	    async.mapLimit = doParallelLimit(_asyncMap);
	
	    // reduce only has a series version, as doing reduce in parallel won't
	    // work in many situations.
	    async.inject =
	    async.foldl =
	    async.reduce = function (arr, memo, iterator, callback) {
	        async.eachOfSeries(arr, function (x, i, callback) {
	            iterator(memo, x, function (err, v) {
	                memo = v;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err || null, memo);
	        });
	    };
	
	    async.foldr =
	    async.reduceRight = function (arr, memo, iterator, callback) {
	        var reversed = _map(arr, identity).reverse();
	        async.reduce(reversed, memo, iterator, callback);
	    };
	
	    function _filter(eachfn, arr, iterator, callback) {
	        var results = [];
	        eachfn(arr, function (x, index, callback) {
	            iterator(x, function (v) {
	                if (v) {
	                    results.push({index: index, value: x});
	                }
	                callback();
	            });
	        }, function () {
	            callback(_map(results.sort(function (a, b) {
	                return a.index - b.index;
	            }), function (x) {
	                return x.value;
	            }));
	        });
	    }
	
	    async.select =
	    async.filter = doParallel(_filter);
	
	    async.selectLimit =
	    async.filterLimit = doParallelLimit(_filter);
	
	    async.selectSeries =
	    async.filterSeries = doSeries(_filter);
	
	    function _reject(eachfn, arr, iterator, callback) {
	        _filter(eachfn, arr, function(value, cb) {
	            iterator(value, function(v) {
	                cb(!v);
	            });
	        }, callback);
	    }
	    async.reject = doParallel(_reject);
	    async.rejectLimit = doParallelLimit(_reject);
	    async.rejectSeries = doSeries(_reject);
	
	    function _createTester(eachfn, check, getResult) {
	        return function(arr, limit, iterator, cb) {
	            function done() {
	                if (cb) cb(getResult(false, void 0));
	            }
	            function iteratee(x, _, callback) {
	                if (!cb) return callback();
	                iterator(x, function (v) {
	                    if (cb && check(v)) {
	                        cb(getResult(true, x));
	                        cb = iterator = false;
	                    }
	                    callback();
	                });
	            }
	            if (arguments.length > 3) {
	                eachfn(arr, limit, iteratee, done);
	            } else {
	                cb = iterator;
	                iterator = limit;
	                eachfn(arr, iteratee, done);
	            }
	        };
	    }
	
	    async.any =
	    async.some = _createTester(async.eachOf, toBool, identity);
	
	    async.someLimit = _createTester(async.eachOfLimit, toBool, identity);
	
	    async.all =
	    async.every = _createTester(async.eachOf, notId, notId);
	
	    async.everyLimit = _createTester(async.eachOfLimit, notId, notId);
	
	    function _findGetResult(v, x) {
	        return x;
	    }
	    async.detect = _createTester(async.eachOf, identity, _findGetResult);
	    async.detectSeries = _createTester(async.eachOfSeries, identity, _findGetResult);
	    async.detectLimit = _createTester(async.eachOfLimit, identity, _findGetResult);
	
	    async.sortBy = function (arr, iterator, callback) {
	        async.map(arr, function (x, callback) {
	            iterator(x, function (err, criteria) {
	                if (err) {
	                    callback(err);
	                }
	                else {
	                    callback(null, {value: x, criteria: criteria});
	                }
	            });
	        }, function (err, results) {
	            if (err) {
	                return callback(err);
	            }
	            else {
	                callback(null, _map(results.sort(comparator), function (x) {
	                    return x.value;
	                }));
	            }
	
	        });
	
	        function comparator(left, right) {
	            var a = left.criteria, b = right.criteria;
	            return a < b ? -1 : a > b ? 1 : 0;
	        }
	    };
	
	    async.auto = function (tasks, callback) {
	        callback = _once(callback || noop);
	        var keys = _keys(tasks);
	        var remainingTasks = keys.length;
	        if (!remainingTasks) {
	            return callback(null);
	        }
	
	        var results = {};
	
	        var listeners = [];
	        function addListener(fn) {
	            listeners.unshift(fn);
	        }
	        function removeListener(fn) {
	            var idx = _indexOf(listeners, fn);
	            if (idx >= 0) listeners.splice(idx, 1);
	        }
	        function taskComplete() {
	            remainingTasks--;
	            _arrayEach(listeners.slice(0), function (fn) {
	                fn();
	            });
	        }
	
	        addListener(function () {
	            if (!remainingTasks) {
	                callback(null, results);
	            }
	        });
	
	        _arrayEach(keys, function (k) {
	            var task = _isArray(tasks[k]) ? tasks[k]: [tasks[k]];
	            var taskCallback = _restParam(function(err, args) {
	                if (args.length <= 1) {
	                    args = args[0];
	                }
	                if (err) {
	                    var safeResults = {};
	                    _forEachOf(results, function(val, rkey) {
	                        safeResults[rkey] = val;
	                    });
	                    safeResults[k] = args;
	                    callback(err, safeResults);
	                }
	                else {
	                    results[k] = args;
	                    async.setImmediate(taskComplete);
	                }
	            });
	            var requires = task.slice(0, task.length - 1);
	            // prevent dead-locks
	            var len = requires.length;
	            var dep;
	            while (len--) {
	                if (!(dep = tasks[requires[len]])) {
	                    throw new Error('Has inexistant dependency');
	                }
	                if (_isArray(dep) && _indexOf(dep, k) >= 0) {
	                    throw new Error('Has cyclic dependencies');
	                }
	            }
	            function ready() {
	                return _reduce(requires, function (a, x) {
	                    return (a && results.hasOwnProperty(x));
	                }, true) && !results.hasOwnProperty(k);
	            }
	            if (ready()) {
	                task[task.length - 1](taskCallback, results);
	            }
	            else {
	                addListener(listener);
	            }
	            function listener() {
	                if (ready()) {
	                    removeListener(listener);
	                    task[task.length - 1](taskCallback, results);
	                }
	            }
	        });
	    };
	
	
	
	    async.retry = function(times, task, callback) {
	        var DEFAULT_TIMES = 5;
	        var DEFAULT_INTERVAL = 0;
	
	        var attempts = [];
	
	        var opts = {
	            times: DEFAULT_TIMES,
	            interval: DEFAULT_INTERVAL
	        };
	
	        function parseTimes(acc, t){
	            if(typeof t === 'number'){
	                acc.times = parseInt(t, 10) || DEFAULT_TIMES;
	            } else if(typeof t === 'object'){
	                acc.times = parseInt(t.times, 10) || DEFAULT_TIMES;
	                acc.interval = parseInt(t.interval, 10) || DEFAULT_INTERVAL;
	            } else {
	                throw new Error('Unsupported argument type for \'times\': ' + typeof t);
	            }
	        }
	
	        var length = arguments.length;
	        if (length < 1 || length > 3) {
	            throw new Error('Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)');
	        } else if (length <= 2 && typeof times === 'function') {
	            callback = task;
	            task = times;
	        }
	        if (typeof times !== 'function') {
	            parseTimes(opts, times);
	        }
	        opts.callback = callback;
	        opts.task = task;
	
	        function wrappedTask(wrappedCallback, wrappedResults) {
	            function retryAttempt(task, finalAttempt) {
	                return function(seriesCallback) {
	                    task(function(err, result){
	                        seriesCallback(!err || finalAttempt, {err: err, result: result});
	                    }, wrappedResults);
	                };
	            }
	
	            function retryInterval(interval){
	                return function(seriesCallback){
	                    setTimeout(function(){
	                        seriesCallback(null);
	                    }, interval);
	                };
	            }
	
	            while (opts.times) {
	
	                var finalAttempt = !(opts.times-=1);
	                attempts.push(retryAttempt(opts.task, finalAttempt));
	                if(!finalAttempt && opts.interval > 0){
	                    attempts.push(retryInterval(opts.interval));
	                }
	            }
	
	            async.series(attempts, function(done, data){
	                data = data[data.length - 1];
	                (wrappedCallback || opts.callback)(data.err, data.result);
	            });
	        }
	
	        // If a callback is passed, run this as a controll flow
	        return opts.callback ? wrappedTask() : wrappedTask;
	    };
	
	    async.waterfall = function (tasks, callback) {
	        callback = _once(callback || noop);
	        if (!_isArray(tasks)) {
	            var err = new Error('First argument to waterfall must be an array of functions');
	            return callback(err);
	        }
	        if (!tasks.length) {
	            return callback();
	        }
	        function wrapIterator(iterator) {
	            return _restParam(function (err, args) {
	                if (err) {
	                    callback.apply(null, [err].concat(args));
	                }
	                else {
	                    var next = iterator.next();
	                    if (next) {
	                        args.push(wrapIterator(next));
	                    }
	                    else {
	                        args.push(callback);
	                    }
	                    ensureAsync(iterator).apply(null, args);
	                }
	            });
	        }
	        wrapIterator(async.iterator(tasks))();
	    };
	
	    function _parallel(eachfn, tasks, callback) {
	        callback = callback || noop;
	        var results = _isArrayLike(tasks) ? [] : {};
	
	        eachfn(tasks, function (task, key, callback) {
	            task(_restParam(function (err, args) {
	                if (args.length <= 1) {
	                    args = args[0];
	                }
	                results[key] = args;
	                callback(err);
	            }));
	        }, function (err) {
	            callback(err, results);
	        });
	    }
	
	    async.parallel = function (tasks, callback) {
	        _parallel(async.eachOf, tasks, callback);
	    };
	
	    async.parallelLimit = function(tasks, limit, callback) {
	        _parallel(_eachOfLimit(limit), tasks, callback);
	    };
	
	    async.series = function(tasks, callback) {
	        _parallel(async.eachOfSeries, tasks, callback);
	    };
	
	    async.iterator = function (tasks) {
	        function makeCallback(index) {
	            function fn() {
	                if (tasks.length) {
	                    tasks[index].apply(null, arguments);
	                }
	                return fn.next();
	            }
	            fn.next = function () {
	                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
	            };
	            return fn;
	        }
	        return makeCallback(0);
	    };
	
	    async.apply = _restParam(function (fn, args) {
	        return _restParam(function (callArgs) {
	            return fn.apply(
	                null, args.concat(callArgs)
	            );
	        });
	    });
	
	    function _concat(eachfn, arr, fn, callback) {
	        var result = [];
	        eachfn(arr, function (x, index, cb) {
	            fn(x, function (err, y) {
	                result = result.concat(y || []);
	                cb(err);
	            });
	        }, function (err) {
	            callback(err, result);
	        });
	    }
	    async.concat = doParallel(_concat);
	    async.concatSeries = doSeries(_concat);
	
	    async.whilst = function (test, iterator, callback) {
	        callback = callback || noop;
	        if (test()) {
	            var next = _restParam(function(err, args) {
	                if (err) {
	                    callback(err);
	                } else if (test.apply(this, args)) {
	                    iterator(next);
	                } else {
	                    callback(null);
	                }
	            });
	            iterator(next);
	        } else {
	            callback(null);
	        }
	    };
	
	    async.doWhilst = function (iterator, test, callback) {
	        var calls = 0;
	        return async.whilst(function() {
	            return ++calls <= 1 || test.apply(this, arguments);
	        }, iterator, callback);
	    };
	
	    async.until = function (test, iterator, callback) {
	        return async.whilst(function() {
	            return !test.apply(this, arguments);
	        }, iterator, callback);
	    };
	
	    async.doUntil = function (iterator, test, callback) {
	        return async.doWhilst(iterator, function() {
	            return !test.apply(this, arguments);
	        }, callback);
	    };
	
	    async.during = function (test, iterator, callback) {
	        callback = callback || noop;
	
	        var next = _restParam(function(err, args) {
	            if (err) {
	                callback(err);
	            } else {
	                args.push(check);
	                test.apply(this, args);
	            }
	        });
	
	        var check = function(err, truth) {
	            if (err) {
	                callback(err);
	            } else if (truth) {
	                iterator(next);
	            } else {
	                callback(null);
	            }
	        };
	
	        test(check);
	    };
	
	    async.doDuring = function (iterator, test, callback) {
	        var calls = 0;
	        async.during(function(next) {
	            if (calls++ < 1) {
	                next(null, true);
	            } else {
	                test.apply(this, arguments);
	            }
	        }, iterator, callback);
	    };
	
	    function _queue(worker, concurrency, payload) {
	        if (concurrency == null) {
	            concurrency = 1;
	        }
	        else if(concurrency === 0) {
	            throw new Error('Concurrency must not be zero');
	        }
	        function _insert(q, data, pos, callback) {
	            if (callback != null && typeof callback !== "function") {
	                throw new Error("task callback must be a function");
	            }
	            q.started = true;
	            if (!_isArray(data)) {
	                data = [data];
	            }
	            if(data.length === 0 && q.idle()) {
	                // call drain immediately if there are no tasks
	                return async.setImmediate(function() {
	                    q.drain();
	                });
	            }
	            _arrayEach(data, function(task) {
	                var item = {
	                    data: task,
	                    callback: callback || noop
	                };
	
	                if (pos) {
	                    q.tasks.unshift(item);
	                } else {
	                    q.tasks.push(item);
	                }
	
	                if (q.tasks.length === q.concurrency) {
	                    q.saturated();
	                }
	            });
	            async.setImmediate(q.process);
	        }
	        function _next(q, tasks) {
	            return function(){
	                workers -= 1;
	                var args = arguments;
	                _arrayEach(tasks, function (task) {
	                    task.callback.apply(task, args);
	                });
	                if (q.tasks.length + workers === 0) {
	                    q.drain();
	                }
	                q.process();
	            };
	        }
	
	        var workers = 0;
	        var q = {
	            tasks: [],
	            concurrency: concurrency,
	            payload: payload,
	            saturated: noop,
	            empty: noop,
	            drain: noop,
	            started: false,
	            paused: false,
	            push: function (data, callback) {
	                _insert(q, data, false, callback);
	            },
	            kill: function () {
	                q.drain = noop;
	                q.tasks = [];
	            },
	            unshift: function (data, callback) {
	                _insert(q, data, true, callback);
	            },
	            process: function () {
	                if (!q.paused && workers < q.concurrency && q.tasks.length) {
	                    while(workers < q.concurrency && q.tasks.length){
	                        var tasks = q.payload ?
	                            q.tasks.splice(0, q.payload) :
	                            q.tasks.splice(0, q.tasks.length);
	
	                        var data = _map(tasks, function (task) {
	                            return task.data;
	                        });
	
	                        if (q.tasks.length === 0) {
	                            q.empty();
	                        }
	                        workers += 1;
	                        var cb = only_once(_next(q, tasks));
	                        worker(data, cb);
	                    }
	                }
	            },
	            length: function () {
	                return q.tasks.length;
	            },
	            running: function () {
	                return workers;
	            },
	            idle: function() {
	                return q.tasks.length + workers === 0;
	            },
	            pause: function () {
	                q.paused = true;
	            },
	            resume: function () {
	                if (q.paused === false) { return; }
	                q.paused = false;
	                var resumeCount = Math.min(q.concurrency, q.tasks.length);
	                // Need to call q.process once per concurrent
	                // worker to preserve full concurrency after pause
	                for (var w = 1; w <= resumeCount; w++) {
	                    async.setImmediate(q.process);
	                }
	            }
	        };
	        return q;
	    }
	
	    async.queue = function (worker, concurrency) {
	        var q = _queue(function (items, cb) {
	            worker(items[0], cb);
	        }, concurrency, 1);
	
	        return q;
	    };
	
	    async.priorityQueue = function (worker, concurrency) {
	
	        function _compareTasks(a, b){
	            return a.priority - b.priority;
	        }
	
	        function _binarySearch(sequence, item, compare) {
	            var beg = -1,
	                end = sequence.length - 1;
	            while (beg < end) {
	                var mid = beg + ((end - beg + 1) >>> 1);
	                if (compare(item, sequence[mid]) >= 0) {
	                    beg = mid;
	                } else {
	                    end = mid - 1;
	                }
	            }
	            return beg;
	        }
	
	        function _insert(q, data, priority, callback) {
	            if (callback != null && typeof callback !== "function") {
	                throw new Error("task callback must be a function");
	            }
	            q.started = true;
	            if (!_isArray(data)) {
	                data = [data];
	            }
	            if(data.length === 0) {
	                // call drain immediately if there are no tasks
	                return async.setImmediate(function() {
	                    q.drain();
	                });
	            }
	            _arrayEach(data, function(task) {
	                var item = {
	                    data: task,
	                    priority: priority,
	                    callback: typeof callback === 'function' ? callback : noop
	                };
	
	                q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);
	
	                if (q.tasks.length === q.concurrency) {
	                    q.saturated();
	                }
	                async.setImmediate(q.process);
	            });
	        }
	
	        // Start with a normal queue
	        var q = async.queue(worker, concurrency);
	
	        // Override push to accept second parameter representing priority
	        q.push = function (data, priority, callback) {
	            _insert(q, data, priority, callback);
	        };
	
	        // Remove unshift function
	        delete q.unshift;
	
	        return q;
	    };
	
	    async.cargo = function (worker, payload) {
	        return _queue(worker, 1, payload);
	    };
	
	    function _console_fn(name) {
	        return _restParam(function (fn, args) {
	            fn.apply(null, args.concat([_restParam(function (err, args) {
	                if (typeof console === 'object') {
	                    if (err) {
	                        if (console.error) {
	                            console.error(err);
	                        }
	                    }
	                    else if (console[name]) {
	                        _arrayEach(args, function (x) {
	                            console[name](x);
	                        });
	                    }
	                }
	            })]));
	        });
	    }
	    async.log = _console_fn('log');
	    async.dir = _console_fn('dir');
	    /*async.info = _console_fn('info');
	    async.warn = _console_fn('warn');
	    async.error = _console_fn('error');*/
	
	    async.memoize = function (fn, hasher) {
	        var memo = {};
	        var queues = {};
	        hasher = hasher || identity;
	        var memoized = _restParam(function memoized(args) {
	            var callback = args.pop();
	            var key = hasher.apply(null, args);
	            if (key in memo) {
	                async.nextTick(function () {
	                    callback.apply(null, memo[key]);
	                });
	            }
	            else if (key in queues) {
	                queues[key].push(callback);
	            }
	            else {
	                queues[key] = [callback];
	                fn.apply(null, args.concat([_restParam(function (args) {
	                    memo[key] = args;
	                    var q = queues[key];
	                    delete queues[key];
	                    for (var i = 0, l = q.length; i < l; i++) {
	                        q[i].apply(null, args);
	                    }
	                })]));
	            }
	        });
	        memoized.memo = memo;
	        memoized.unmemoized = fn;
	        return memoized;
	    };
	
	    async.unmemoize = function (fn) {
	        return function () {
	            return (fn.unmemoized || fn).apply(null, arguments);
	        };
	    };
	
	    function _times(mapper) {
	        return function (count, iterator, callback) {
	            mapper(_range(count), iterator, callback);
	        };
	    }
	
	    async.times = _times(async.map);
	    async.timesSeries = _times(async.mapSeries);
	    async.timesLimit = function (count, limit, iterator, callback) {
	        return async.mapLimit(_range(count), limit, iterator, callback);
	    };
	
	    async.seq = function (/* functions... */) {
	        var fns = arguments;
	        return _restParam(function (args) {
	            var that = this;
	
	            var callback = args[args.length - 1];
	            if (typeof callback == 'function') {
	                args.pop();
	            } else {
	                callback = noop;
	            }
	
	            async.reduce(fns, args, function (newargs, fn, cb) {
	                fn.apply(that, newargs.concat([_restParam(function (err, nextargs) {
	                    cb(err, nextargs);
	                })]));
	            },
	            function (err, results) {
	                callback.apply(that, [err].concat(results));
	            });
	        });
	    };
	
	    async.compose = function (/* functions... */) {
	        return async.seq.apply(null, Array.prototype.reverse.call(arguments));
	    };
	
	
	    function _applyEach(eachfn) {
	        return _restParam(function(fns, args) {
	            var go = _restParam(function(args) {
	                var that = this;
	                var callback = args.pop();
	                return eachfn(fns, function (fn, _, cb) {
	                    fn.apply(that, args.concat([cb]));
	                },
	                callback);
	            });
	            if (args.length) {
	                return go.apply(this, args);
	            }
	            else {
	                return go;
	            }
	        });
	    }
	
	    async.applyEach = _applyEach(async.eachOf);
	    async.applyEachSeries = _applyEach(async.eachOfSeries);
	
	
	    async.forever = function (fn, callback) {
	        var done = only_once(callback || noop);
	        var task = ensureAsync(fn);
	        function next(err) {
	            if (err) {
	                return done(err);
	            }
	            task(next);
	        }
	        next();
	    };
	
	    function ensureAsync(fn) {
	        return _restParam(function (args) {
	            var callback = args.pop();
	            args.push(function () {
	                var innerArgs = arguments;
	                if (sync) {
	                    async.setImmediate(function () {
	                        callback.apply(null, innerArgs);
	                    });
	                } else {
	                    callback.apply(null, innerArgs);
	                }
	            });
	            var sync = true;
	            fn.apply(this, args);
	            sync = false;
	        });
	    }
	
	    async.ensureAsync = ensureAsync;
	
	    async.constant = _restParam(function(values) {
	        var args = [null].concat(values);
	        return function (callback) {
	            return callback.apply(this, args);
	        };
	    });
	
	    async.wrapSync =
	    async.asyncify = function asyncify(func) {
	        return _restParam(function (args) {
	            var callback = args.pop();
	            var result;
	            try {
	                result = func.apply(this, args);
	            } catch (e) {
	                return callback(e);
	            }
	            // if result is Promise object
	            if (_isObject(result) && typeof result.then === "function") {
	                result.then(function(value) {
	                    callback(null, value);
	                })["catch"](function(err) {
	                    callback(err.message ? err : new Error(err));
	                });
	            } else {
	                callback(null, result);
	            }
	        });
	    };
	
	    // Node.js
	    if (typeof module === 'object' && module.exports) {
	        module.exports = async;
	    }
	    // AMD / RequireJS
	    else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return async;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    // included directly via <script> tag
	    else {
	        root.async = async;
	    }
	
	}());
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(37).setImmediate, __webpack_require__(38)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(38).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37).setImmediate, __webpack_require__(37).clearImmediate))

/***/ },
/* 38 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Created by tommyZZM on 2015/8/20.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var url = {
	    join: function join() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var joined = [].slice.call(arguments, 0).join('/');
	        return (function normalize(str) {
	            return str.replace(/[\/]+/g, '/').replace(/\/\?/g, '?').replace(/\/\#/g, '#').replace(/\:\//g, '://').replace(/\/\.\//g, '\/');
	        })(joined);
	    }
	};
	
	exports.url = url;
	var rex = {
	    htmlSingleTag: /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    html: /<|&#?\w+;/
	};
	
	exports.rex = rex;
	var constants = {
	    PI: Math.PI,
	    PI_2: Math.PI * 2,
	    RAD_TO_DEG: 180 / Math.PI,
	    DEG_TO_RAD: Math.PI / 180
	};
	exports.constants = constants;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/21.
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _alsc = __webpack_require__(30);
	
	var _superagent = __webpack_require__(33);
	
	var agent = _interopRequireWildcard(_superagent);
	
	var _async = __webpack_require__(36);
	
	var async = _interopRequireWildcard(_async);
	
	var _utilsUtilsJs = __webpack_require__(39);
	
	var utils = _interopRequireWildcard(_utilsUtilsJs);
	
	var SHADER_TYPE = {};
	SHADER_TYPE["vertex"] = WebGLRenderingContext.VERTEX_SHADER;
	SHADER_TYPE["fragment"] = WebGLRenderingContext.FRAGMENT_SHADER;
	
	var SampleField = (function (_EventDispatcher) {
	    _inherits(SampleField, _EventDispatcher);
	
	    function SampleField(src, dist) {
	        _classCallCheck(this, SampleField);
	
	        _get(Object.getPrototypeOf(SampleField.prototype), "constructor", this).call(this);
	        this["_srcPath"] = src;
	        this["_distPath"] = dist;
	        this.shadersDict = {};
	        this.CONSTANTS = Object.assign({}, utils.constants);
	        this.CONSTANTS.V = this.CONSTANTS.VERTEX_SHADER = "vertex";
	        this.CONSTANTS.F = this.CONSTANTS.FRAGMENT_SHADER = "fragment";
	    }
	
	    _createClass(SampleField, [{
	        key: "srcPath",
	        value: function srcPath(url) {
	            return utils.url.join(this._srcPath, url);
	        }
	    }, {
	        key: "distPath",
	        value: function distPath(url) {
	            return utils.url.join(this._distPath, url);
	        }
	    }, {
	        key: "loadOneShader",
	        value: function loadOneShader(gl, url, type, name, cb) {
	            var _this = this;
	
	            return agent.get(url).end(function (err, res) {
	                if (!err) {
	                    if (!(type in SHADER_TYPE)) {
	                        return;
	                    }
	
	                    var shader = gl.createShader(SHADER_TYPE[type]);
	                    gl.shaderSource(shader, res.text);
	                    gl.compileShader(shader);
	
	                    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	                        error(gl.getShaderInfoLog(shader));
	                        return null;
	                    }
	
	                    _this.shadersDict[name] = shader;
	                }
	                if (typeof cb === "function") {
	                    cb(err, res.text || "");
	                }
	            });
	        }
	    }, {
	        key: "loadShaders",
	        value: function loadShaders(gl, cb, loadobj) {
	            var _this2 = this;
	
	            if (typeof cb !== "function" || !Array.isArray(loadobj) || loadobj.length <= 0) return;
	
	            var tasks = loadobj.map(function (load) {
	                if (load.url && load.type && load.name) {
	                    return function (next) {
	                        _this2.loadOneShader(gl, load.url, load.type, load.name, next);
	                    };
	                }
	                return function (next) {
	                    next(null, "");
	                };
	            });
	
	            async.series(tasks, function () {
	                cb();
	            });
	        }
	    }, {
	        key: "launch",
	        value: function launch(canvas) {
	            //TODO:需要传入canvas
	        }
	    }, {
	        key: "onDestruct",
	        value: function onDestruct() {
	            console.error("onDestruct not implement yet!", this._srcPath, this._distPath);
	        }
	    }, {
	        key: "destruct",
	        get: function get() {
	            var _this3 = this;
	
	            return function () {
	                _this3.onDestruct();
	                _this3.emit("destruct");
	            };
	        }
	    }]);
	
	    return SampleField;
	})(_alsc.EventDispatcher);
	
	exports["default"] = SampleField;
	module.exports = exports["default"];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/8.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(6);
	
	var SideBar = (function (_React$Component) {
	    _inherits(SideBar, _React$Component);
	
	    function SideBar() {
	        _classCallCheck(this, SideBar);
	
	        _get(Object.getPrototypeOf(SideBar.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(SideBar, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                _reactBootstrap.Col,
	                { className: "sidebar", md: 4 },
	                _react2["default"].createElement(_reactBootstrap.Input, {
	                    type: "text",
	                    placeholder: "Enter key words...",
	                    label: "Search",
	                    hasFeedback: true
	                }),
	                _react2["default"].createElement(
	                    "div",
	                    null,
	                    _react2["default"].createElement(
	                        "ul",
	                        null,
	                        this.renderSampleItem()
	                    )
	                )
	            );
	        }
	    }, {
	        key: "renderSampleItem",
	        value: function renderSampleItem() {
	            return this.props.samplesList.map(function (sample) {
	                return _react2["default"].createElement(
	                    "li",
	                    { key: sample.id },
	                    sample.title
	                );
	            });
	        }
	    }]);
	
	    return SideBar;
	})(_react2["default"].Component);
	
	exports["default"] = SideBar;
	module.exports = exports["default"];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/7.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Footer = (function (_React$Component) {
	    _inherits(Footer, _React$Component);
	
	    function Footer() {
	        _classCallCheck(this, Footer);
	
	        _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Footer, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('footer', null);
	        }
	    }]);
	
	    return Footer;
	})(_react2['default'].Component);
	
	exports['default'] = Footer;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/8/23.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _alsc = __webpack_require__(30);
	
	var loop = "loop";
	
	var AnimationManager = (function (_EventDispatcher) {
	    _inherits(AnimationManager, _EventDispatcher);
	
	    _createClass(AnimationManager, null, [{
	        key: "instance",
	        get: function get() {
	            if (!(AnimationManager._instance instanceof AnimationManager)) {
	                AnimationManager._instance = new AnimationManager();
	            }
	            return AnimationManager._instance;
	        }
	    }]);
	
	    function AnimationManager() {
	        _classCallCheck(this, AnimationManager);
	
	        _get(Object.getPrototypeOf(AnimationManager.prototype), "constructor", this).call(this);
	        this._stopState = true;
	        this.run();
	    }
	
	    _createClass(AnimationManager, [{
	        key: "run",
	        value: function run() {
	            this._stopState = false;
	            this._loop();
	        }
	    }, {
	        key: "stop",
	        value: function stop() {
	            var force = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	            this._stopState = true;
	            if (force) {
	                this.removeAllListener(loop);
	            }
	        }
	    }, {
	        key: "onLoop",
	        value: function onLoop(fn) {
	            this.addListener(loop, fn);
	        }
	    }, {
	        key: "_loop",
	        value: function _loop() {
	            if (this._stopState) return;
	            requestAnimationFrame(this._loop.bind(this));
	            this.emit(loop);
	        }
	    }]);
	
	    return AnimationManager;
	})(_alsc.EventDispatcher);
	
	exports["default"] = AnimationManager.instance;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2VkZjk3N2JlNmQ0YzQ1NjFiYzAiLCJ3ZWJwYWNrOi8vL0U6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy9hcHAuZXM2fiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvQXBwLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvSGVhZGVyLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9sYXlvdXQvQm9keS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuUmVhY3RCb290c3RyYXBcIiIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvaW5jL0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvbGliL25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL2xpYi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vbWR1cmwvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L21kdXJsL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMveG1sLmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy9lbnRpdGllcy5qc29uIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9+L2VudGl0aWVzL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbWFwcy9sZWdhY3kuanNvbiIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9saWIvZGVjb2RlX2NvZGVwb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvfi9lbnRpdGllcy9tYXBzL2RlY29kZS5qc29uIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvaW5saW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvbGliL2Zyb20tY29kZS1wb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvbGliL25vcm1hbGl6ZS1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21tb25tYXJrL34vc3RyaW5nLnByb3RvdHlwZS5yZXBlYXQvcmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vY29tbW9ubWFyay9saWIvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbW1vbm1hcmsvbGliL3htbC5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvY29udGVudC9TYW1wbGVSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL2NvcmUvU2FtcGxlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Fsc2MvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHNjL2Rpc3QvZXZlbnRzL0V2ZW50RGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Fsc2MvZGlzdC9ldmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdXBlcmFnZW50L2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdXBlcmFnZW50L34vY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdXBlcmFnZW50L34vcmVkdWNlLWNvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FzeW5jL2xpYi9hc3luYy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9jb250ZW50L1NhbXBsZUZpZWxkLmpzIiwid2VicGFjazovLy9FOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9pbmMvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL2NvcmUvQW5pbWF0aW9uTWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBLGFBQVksQ0FBQzs7Ozs7Ozs7O2tDQUtLLENBQU87Ozs7c0NBQ1QsQ0FBZTs7OztnREFFTCxFQUF5Qjs7OzttREFDdEIsRUFBNEI7Ozs7cURBQ2pDLEVBQStCOzs7O0tBRWpELElBQUksR0FDSyxTQURULElBQUksR0FDTzsyQkFEWCxJQUFJOztBQUVGLHdCQUFNLE1BQU0sQ0FBQyw4REFBTSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUN4RDs7QUFHTCxLQUFJLEdBQUcsQ0FBQztBQUNSLE9BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixXQUFNLEVBQUMsa0JBQVU7QUFDYixhQUFJLEdBQUcsWUFBWSxJQUFJLEVBQUUsT0FBTztBQUNoQyxZQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztNQUNwQjtBQUNELGdCQUFXLHVDQUFZO0FBQ3ZCLHFCQUFnQixxQ0FBaUI7RUFDcEMsQzs7Ozs7O0FDMUJELCtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0drQixDQUFPOzs7OzJDQUVOLENBQW9COzs7O3lDQUN0QixDQUFrQjs7OzsyQ0FDaEIsRUFBb0I7Ozs7Z0RBRWIsRUFBMEI7Ozs7S0FFOUMsR0FBRztlQUFILEdBQUc7O0FBQ00sY0FEVCxHQUFHLEdBQ1E7OzsrQkFEWCxHQUFHOztBQUVELG9DQUZGLEdBQUcsNkNBRU87O0FBRVIsYUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0FBQ2xDLDBDQUFjLFdBQVcsQ0FBQyxpQ0FBYyxhQUFhLEVBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzNGLDBDQUFjLFdBQVcsQ0FBQyxpQ0FBYyxnQkFBZ0IsRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUV6RixlQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07QUFDcEMsaUJBQUcsTUFBSyxPQUFPLEVBQUM7QUFDWix1QkFBSyxRQUFRLEVBQUUsQ0FBQztjQUNuQjtVQUNKLENBQUMsQ0FBQztNQUNOOztrQkFiQyxHQUFHOzs7Z0JBeUJHLG9CQUFFO0FBQ04saUJBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUMsRUFBRSxFQUFDO0FBQ2xELHFCQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1YsMEJBQUssRUFBQztBQUNGLGtDQUFTLEVBQUMsTUFBTSxDQUFDLFdBQVcsR0FBQyxFQUFFO3NCQUNsQztrQkFDSixDQUFDLENBQUM7Y0FDTjtVQUNKOzs7Z0JBRWtCLCtCQUFFO0FBQ2pCLGlCQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1YsNEJBQVcsRUFBQyxpQ0FBYyxXQUFXO2NBQ3hDLENBQUMsQ0FBQztVQUNOOzs7Z0JBRWEsd0JBQUMsQ0FBQyxFQUFDO0FBQ2IsaUJBQUksQ0FBQyxRQUFRLENBQUM7QUFDViwyQkFBVSxFQUFDLENBQUMsQ0FBQyxNQUFNO2NBQ3RCLENBQUMsQ0FBQztVQUNOOzs7Z0JBRWdCLDZCQUFHO0FBQUMsaUJBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1VBQUM7OztnQkFDdEIsZ0NBQUc7QUFBQyxpQkFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLO1VBQUM7OztnQkFDdkMsa0JBQUU7O0FBRUosaUJBQUksR0FBRyxHQUNIOzttQkFBSyxTQUFTLEVBQUMsS0FBSztpQkFDaEI7O3VCQUFLLFNBQVMsRUFBQyw2QkFBNkIsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFNO3FCQUNqRSxtRUFBVTtxQkFDViw4REFBTSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFXLEVBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBWSxHQUFFO3FCQUMvRSxtRUFBVTtrQkFDUjtjQUNKLENBQUM7QUFDWCxvQkFBTyxHQUFHLENBQUM7VUFDZDs7O2NBN0NrQixlQUFFO0FBQ2pCLG9CQUFPO0FBQ0gsc0JBQUssRUFBQztBQUNGLDhCQUFTLEVBQUMsTUFBTSxDQUFDLFdBQVcsR0FBQyxFQUFFO2tCQUNsQztBQUNELDRCQUFXLEVBQUMsSUFBSTtBQUNoQiwyQkFBVSxFQUFDLElBQUksRUFDbEI7VUFDSjs7O1lBdkJDLEdBQUc7SUFBUyxtQkFBTSxTQUFTOztzQkErRGxCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ3ZFQSxDQUFPOzs7O0tBRW5CLE1BQU07ZUFBTixNQUFNOztjQUFOLE1BQU07K0JBQU4sTUFBTTs7b0NBQU4sTUFBTTs7O2tCQUFOLE1BQU07O2dCQUNGLGtCQUFFO0FBQ0osb0JBQU87OztpQkFDSzs7OztrQkFBYztjQUNWO1VBQ25COzs7WUFMQyxNQUFNO0lBQVMsbUJBQU0sU0FBUzs7c0JBUXJCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ1ZILENBQU87Ozs7MkNBQ0osQ0FBaUI7O3lDQUVsQixDQUFtQjs7Ozt5Q0FDbkIsRUFBbUI7Ozs7S0FFakMsSUFBSTtlQUFKLElBQUk7O2NBQUosSUFBSTsrQkFBSixJQUFJOztvQ0FBSixJQUFJOzs7a0JBQUosSUFBSTs7Z0JBQ0Esa0JBQUU7OztBQUNKLG9CQUFROzttQkFBSyxTQUFTLEVBQUMsTUFBTTtpQkFDakIsOERBQVMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVyxHQUFFO2lCQUNoRCw4REFBUyxXQUFXLEVBQUUsQ0FBQyxZQUFJO0FBQ3ZCLDZCQUFHLE1BQUssS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQUssS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQztBQUNyRSxvQ0FBTyxNQUFLLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDOzBCQUN2QyxNQUFJO0FBQ0Qsb0NBQU8sRUFBRSxDQUFDOzBCQUNiO3NCQUNKLEdBQUksR0FBRTtjQUNMO1VBQ2pCOzs7WUFaQyxJQUFJO0lBQVMsbUJBQU0sU0FBUzs7c0JBZW5CLElBQUk7Ozs7Ozs7QUN4Qm5CLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDR2tCLENBQU87Ozs7MkNBQ1AsQ0FBaUI7O3VDQUVQLENBQVk7O0tBQTVCLFVBQVU7O29EQUNLLEVBQThCOzs7O2dEQUMvQixFQUE2Qjs7OztLQUVqRCxPQUFPO2VBQVAsT0FBTzs7QUFFRSxjQUZULE9BQU8sR0FFSTsrQkFGWCxPQUFPOztBQUdMLG9DQUhGLE9BQU8sNkNBR0c7TUFDWDs7a0JBSkMsT0FBTzs7Z0JBTVEsNkJBQUcsRUFFbkI7OztnQkFFSyxrQkFBRTs7O0FBQ0osb0JBQ0k7aUNBbEJKLEdBQUc7bUJBa0JNLFNBQVMsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFFLENBQUU7aUJBQzNCLENBQUMsWUFBSTtBQUNGLHlCQUFHLE1BQUssS0FBSyxDQUFDLGFBQWEsSUFBRSxNQUFLLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFDO0FBQ3JELGdDQUFPLGlDQUFDLFFBQVEsSUFBQyxFQUFFLEVBQUUsTUFBSyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUcsRUFBQyxNQUFNLEVBQUUsTUFBSyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVMsR0FBRTtzQkFDakc7a0JBQ0osR0FBRztjQUNGLENBQ1Q7VUFDSjs7O1lBcEJDLE9BQU87SUFBUyxtQkFBTSxTQUFTOztLQXVCL0IsUUFBUTtlQUFSLFFBQVE7O0FBQ0MsY0FEVCxRQUFRLEdBQ0k7OzsrQkFEWixRQUFROztBQUVOLG9DQUZGLFFBQVEsNkNBRUU7QUFDUixhQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzFDLGFBQUksQ0FBQyxZQUFZLEdBQUcseUNBQW1CLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7O0FBRTFELGFBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLGFBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVyQixhQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUMsVUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFHO0FBQy9DLG9CQUFPLGlDQUFDLE1BQU0sSUFBQyxNQUFNLFFBQU8sRUFBQyxLQUFLLEVBQUUsS0FBTSxHQUFFLENBQUM7VUFDaEQsQ0FBQztNQUNMOztrQkFaQyxRQUFROztnQkFjTyw2QkFBRztBQUNoQixpQkFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2Qsa0JBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBQztBQUN6QixxQkFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQ2xEOztBQUVELGlCQUFJLElBQUksR0FBRztBQUNQLHVCQUFNLEVBQUM7QUFDSCwwQkFBSyxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTSxFQUFHO0FBQUMsZ0NBQU8sbUJBQU0sV0FBVyxDQUFDLE1BQU0sQ0FBQztzQkFBQyxDQUFDO0FBQ3hFLDBCQUFLLEVBQUMsSUFBSTtrQkFDYjtjQUNKLENBQUM7QUFDRiw4Q0FBYyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLENBQUM7VUFDakQ7OztnQkFFSyxrQkFBRTtBQUNKLGlCQUFHLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFDO0FBQ3JDLHFCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN6RCxxQkFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRTdDLHdCQUFPLG1CQUFNLGFBQWEsQ0FBQyxLQUFLLHFCQUFPLENBQUMsS0FBSyxFQUFDLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Y0FDM0YsTUFBSTtBQUNELHdCQUFPLDBDQUFLLFNBQVMsRUFBQyxNQUFNLEdBQU87Y0FDdEM7VUFDSjs7O1lBdENDLFFBQVE7SUFBUyxtQkFBTSxTQUFTOztLQXlDaEMsTUFBTTtlQUFOLE1BQU07O2NBQU4sTUFBTTsrQkFBTixNQUFNOztvQ0FBTixNQUFNOzs7a0JBQU4sTUFBTTs7Z0JBQ1MsNkJBQUc7QUFDaEIsaUJBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQy9CLGlCQUFJLE1BQU0sR0FBRyxtQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsbUJBQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLGlCQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFDLE1BQU0sQ0FBQztVQUM1RTs7O2dCQUVLLGtCQUFFO0FBQ0osb0JBQU8sbUJBQU0sYUFBYSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztVQUN4RDs7O1lBVkMsTUFBTTtJQUFTLG1CQUFNLFNBQVM7O3NCQWFyQixPQUFPOzs7Ozs7O0FDdkZ0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsTUFBSztBQUNMOztBQUVBLE1BQUs7QUFDTDtBQUNBOztBQUVBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsYUFBWTtBQUNaOztBQUVBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFBc0IsMEJBQTBCO0FBQ2hELEVBQUM7O0FBRUQ7QUFDQSxzQkFBcUIsbUJBQW1CO0FBQ3hDLEVBQUM7O0FBRUQ7QUFDQSxzQkFBcUIseUJBQXlCO0FBQzlDLEVBQUM7O0FBRUQ7QUFDQSxzQkFBcUIsd0JBQXdCO0FBQzdDLEVBQUM7O0FBRUQ7QUFDQSxzQkFBcUIsbUJBQW1CO0FBQ3hDLEVBQUM7O0FBRUQ7QUFDQSxzQkFBcUIsbUJBQW1CO0FBQ3hDLEVBQUM7O0FBRUQ7QUFDQSxzQkFBcUIscUJBQXFCO0FBQzFDLEVBQUM7O0FBRUQ7QUFDQSxzQkFBcUIsd0JBQXdCO0FBQzdDLEVBQUM7O0FBRUQ7QUFDQSxzQkFBcUIsc0JBQXNCLEVBQUU7QUFDN0MsdUJBQXNCLG1CQUFtQjtBQUN6QyxFQUFDOztBQUVEO0FBQ0Esc0JBQXFCLDBCQUEwQixFQUFFO0FBQ2pELHVCQUFzQix1QkFBdUI7QUFDN0MsRUFBQzs7QUFFRDtBQUNBLHNCQUFxQixvQkFBb0IsRUFBRTtBQUMzQyx1QkFBc0IsaUJBQWlCO0FBQ3ZDLEVBQUM7O0FBRUQ7QUFDQSxzQkFBcUIsbUJBQW1CLEVBQUU7QUFDMUMsdUJBQXNCLGdCQUFnQjtBQUN0QyxFQUFDOztBQUVEO0FBQ0Esc0JBQXFCLG9CQUFvQixFQUFFO0FBQzNDLHVCQUFzQixpQkFBaUI7QUFDdkMsRUFBQzs7QUFFRDtBQUNBLHNCQUFxQiw0QkFBNEIsRUFBRTtBQUNuRCx1QkFBc0IseUJBQXlCO0FBQy9DLEVBQUM7O0FBRUQ7QUFDQSxzQkFBcUIsNkJBQTZCLEVBQUU7QUFDcEQsdUJBQXNCLDBCQUEwQjtBQUNoRCxFQUFDOztBQUVEO0FBQ0Esc0JBQXFCLDZCQUE2QixFQUFFO0FBQ3BELHVCQUFzQiwwQkFBMEI7QUFDaEQsRUFBQzs7QUFFRDtBQUNBLHNCQUFxQixpQ0FBaUMsRUFBRTtBQUN4RCwyQkFBMEIsa0NBQWtDO0FBQzVELEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoUUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE0QixHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUc7O0FBRXZEOztBQUVBOztBQUVBOztBQUVBLGlDQUFnQyxJQUFJOztBQUVwQyw2QkFBNEIsSUFBSTs7QUFFaEMsdUJBQXNCLEdBQUcsV0FBVyxHQUFHOztBQUV2QyxpQ0FBZ0MsR0FBRyxHQUFHLEdBQUc7O0FBRXpDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QixVQUFVLEVBQUU7QUFDMUMsK0JBQThCLFFBQVEsRUFBRTtBQUN4QyxrQ0FBaUMsdUJBQXVCLEVBQUU7QUFDMUQ7QUFDQSxNQUFLO0FBQ0w7QUFDQSwrQkFBOEIsVUFBVSxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxrQ0FBaUMsdUJBQXVCLEVBQUU7QUFDMUQ7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULCtCQUE4QixRQUFRLEVBQUU7QUFDeEMsa0NBQWlDLHVCQUF1QixFQUFFO0FBQzFEO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCwrQkFBOEIsUUFBUSxFQUFFO0FBQ3hDLGtDQUFpQyx1QkFBdUIsRUFBRTtBQUMxRDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCwrQkFBOEIsUUFBUSxFQUFFO0FBQ3hDLGlDQUFnQyxjQUFjLEVBQUU7QUFDaEQ7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsK0JBQThCLFFBQVEsRUFBRTtBQUN4QyxpQ0FBZ0MsY0FBYyxFQUFFO0FBQ2hEO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLDBDQUF5QztBQUN6QyxVQUFTO0FBQ1QsaUNBQWdDLGNBQWMsRUFBRTtBQUNoRDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSwwQ0FBeUM7QUFDekMsVUFBUztBQUNULGlDQUFnQyxjQUFjLEVBQUU7QUFDaEQ7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULGlDQUFnQyxjQUFjLEVBQUU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUErQixnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQSxHQUFFLElBQUk7QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQStEO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDOWtFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUFzQixpQkFBaUI7QUFDdkM7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQSxJQUFHO0FBQ0gsaUJBQWdCO0FBQ2hCO0FBQ0E7O0FBRUEsb0VBQW1FLFFBQVE7QUFDM0U7O0FBRUE7QUFDQSwyQkFBMEIsWUFBWTtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDM0dBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDN0JBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFtQzs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0ZBQXVGLGdCQUFnQixJQUFJOztBQUUzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNEQUFxRCxFQUFFLGdDQUFnQyxLQUFLLDZDQUE2QyxLQUFLOztBQUU5STs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVUsT0FBTzs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUssT0FBTztBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE1BQUssT0FBTzs7QUFFWixzQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXFEO0FBQ3JEO0FBQ0EsMEJBQXlCLG1DQUFtQztBQUM1RDtBQUNBLDBCQUF5QixtQ0FBbUMsOENBQThDO0FBQzFHO0FBQ0E7QUFDQSwwQkFBeUIsT0FBTyxxQ0FBcUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckIsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFjO0FBQ2Q7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoNkJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0EsWUFBVyxPQUFPLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxREE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWUFBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLElBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRTtBQUNGOzs7Ozs7O0FDakRBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBdUIsMkJBQTJCOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCLDhCQUE4QjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM1FBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXVCLDJCQUEyQjs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7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QUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQztBQUMzQztBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFB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Q3JCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxjQUFhO0FBQ2I7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bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgN2VkZjk3N2JlNmQ0YzQ1NjFiYzBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzcvMTYuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnLi92aWV3L0FwcC5qcyc7XG5cbmltcG9ydCBTYW1wbGVNYW5hZ2VyIGZyb20gJy4vY29yZS9TYW1wbGVNYW5hZ2VyLmpzJztcbmltcG9ydCBBbmltYXRpb25NYW5hZ2VyIGZyb20gJy4vY29yZS9BbmltYXRpb25NYW5hZ2VyLmpzJztcbmltcG9ydCBTYW1wbGVGaWVsZCBmcm9tICcuL3ZpZXcvY29udGVudC9TYW1wbGVGaWVsZC5qcyc7XG5cbmNsYXNzIE1haW57XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgUmVhY3QucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOy8vXG4gICAgfVxufVxuXG52YXIgYXBwO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbGF1bmNoOmZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKChhcHAgaW5zdGFuY2VvZiBNYWluKSlyZXR1cm47XG4gICAgICAgIGFwcCA9IG5ldyBNYWluKCk7XG4gICAgfSxcbiAgICBTYW1wbGVGaWVsZDpTYW1wbGVGaWVsZCxcbiAgICBBbmltYXRpb25NYW5hZ2VyOkFuaW1hdGlvbk1hbmFnZXJcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvYXBwLmVzNn5cbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwid2luZG93LlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNC5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vbGF5b3V0L0hlYWRlci5qcyc7XHJcbmltcG9ydCBCb2R5IGZyb20gJy4vbGF5b3V0L0JvZHkuanMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vbGF5b3V0L0Zvb3Rlci5qcyc7XHJcblxyXG5pbXBvcnQgU2FtcGxlTWFuYWdlciBmcm9tICcuLi9jb3JlL1NhbXBsZU1hbmFnZXIuanMnO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdGlhbGl6ZVN0YXRlO1xyXG4gICAgICAgIFNhbXBsZU1hbmFnZXIuYWRkTGlzdGVuZXIoU2FtcGxlTWFuYWdlci5DT05GSUdfTE9BREVELHRoaXMub25TYW1wbGVDb25maWdSZWFkeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBTYW1wbGVNYW5hZ2VyLmFkZExpc3RlbmVyKFNhbXBsZU1hbmFnZXIuVE9HR0xFX1RPX1NBTVBMRSx0aGlzLm9uU2FtcGxlVG9nZ2xlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzTW91bnQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGluaXRpYWxpemVTdGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDp3aW5kb3cuaW5uZXJIZWlnaHQtMTYgLy9kb2N1bWVudCBtYXJnaW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2FtcGxlc0RhdGE6bnVsbCxcclxuICAgICAgICAgICAgc2FtcGxlQ3VycjpudWxsIC8v5b2T5YmN5L6L5a2QXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzaXplKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zdHlsZS5taW5IZWlnaHQhPT13aW5kb3cuaW5uZXJIZWlnaHQtMTYpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOntcclxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6d2luZG93LmlubmVySGVpZ2h0LTE2IC8vZG9jdW1lbnQgbWFyZ2luXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNhbXBsZUNvbmZpZ1JlYWR5KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNhbXBsZXNEYXRhOlNhbXBsZU1hbmFnZXIuc2FtcGxlc0RhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNhbXBsZVRvZ2dsZShlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2FtcGxlQ3VycjplLnNhbXBsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge3RoaXMuaXNNb3VudCA9IHRydWU7fVxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7dGhpcy5pc01vdW50ID0gZmFsc2V9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICAvL3RoaXMuc3RhdGUud2luZG93UmVzaXplZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGFwcCA9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBwdWxsLWNlbnRlciBwYXBlclwiIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJvZHkgc2FtcGxlQ3Vycj17dGhpcy5zdGF0ZS5zYW1wbGVDdXJyfSBzYW1wbGVzRGF0YT17dGhpcy5zdGF0ZS5zYW1wbGVzRGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgcmV0dXJuIGFwcDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L0FwcC5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC83LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+dGl0bGU8L2gxPlxyXG4gICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2xheW91dC9IZWFkZXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi4vaW5jL0NvbnRlbnQuanNcIjtcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4uL2luYy9TaWRlQmFyLmpzXCI7XHJcblxyXG5jbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnQgc2FtcGxlQ29udGVudD17dGhpcy5wcm9wcy5zYW1wbGVDdXJyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGVCYXIgc2FtcGxlc0xpc3Q9eygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnNhbXBsZXNEYXRhICYmIEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5zYW1wbGVzRGF0YS5wb3N0cykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2FtcGxlc0RhdGEucG9zdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkoKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvbGF5b3V0L0JvZHkuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SZWFjdEJvb3RzdHJhcDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwid2luZG93LlJlYWN0Qm9vdHN0cmFwXCJcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvOC5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29sfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcclxuXHJcbmltcG9ydCAqIGFzIENvbW1vbm1hcmsgZnJvbSAnY29tbW9ubWFyayc7XHJcbmltcG9ydCBTYW1wbGVSZW5kZXJlciBmcm9tICcuLi9jb250ZW50L1NhbXBsZVJlbmRlcmVyLmpzJ1xyXG5pbXBvcnQgU2FtcGxlTWFuYWdlciBmcm9tICcuLi8uLi9jb3JlL1NhbXBsZU1hbmFnZXIuanMnO1xyXG5cclxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbnRlbnQgXCIgbWQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgeygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc2FtcGxlQ29udGVudCYmdGhpcy5wcm9wcy5zYW1wbGVDb250ZW50LmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNYXJrZG93biBpZD17dGhpcy5wcm9wcy5zYW1wbGVDb250ZW50LmlkfSBzb3VyY2U9e3RoaXMucHJvcHMuc2FtcGxlQ29udGVudC5tYXJrZG93bn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKCl9XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTWFya2Rvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubWFya1ByYXNlciA9IG5ldyBDb21tb25tYXJrLlBhcnNlcigpO1xyXG4gICAgICAgIHRoaXMubWFya1JlbmRlcmVyID0gbmV3IFNhbXBsZVJlbmRlcmVyKHtzb3VyY2Vwb3M6IHRydWV9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXNRdWVyeSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FudmFzRGljdCA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtSZW5kZXJlci5yZW5kZXJIdG1sKFwiY2FudmFzXCIsKHRhZyxhdHRycyk9PntcclxuICAgICAgICAgICAgcmV0dXJuIDxDYW52YXMgcGFyZW50PXt0aGlzfSBhdHRycz17YXR0cnN9Lz47XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB2YXIgZGljdCA9IHt9O1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLmNhbnZhc0RpY3Qpe1xyXG4gICAgICAgICAgICBkaWN0W2ldID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5jYW52YXNEaWN0W2ldKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGNhbnZhczp7XHJcbiAgICAgICAgICAgICAgICBxdWVyeTp0aGlzLmNhbnZhc1F1ZXJ5Lm1hcCgoY2FudmFzKT0+e3JldHVybiBSZWFjdC5maW5kRE9NTm9kZShjYW52YXMpfSksXHJcbiAgICAgICAgICAgICAgICBkaXJjdDpkaWN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFNhbXBsZU1hbmFnZXIucmVhZHlTYW1wbGUodGhpcy5wcm9wcy5pZCxkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZih0eXBlb2YgdGhpcy5wcm9wcy5zb3VyY2UgPT09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICB2YXIgYXN0ID0gdGhpcy5tYXJrUHJhc2VyLnBhcnNlKHRoaXMucHJvcHMuc291cmNlIHx8ICcnKTtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcy5tYXJrUmVuZGVyZXIucmVuZGVyKGFzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShSZWFjdCxbXCJkaXZcIix7Y2xhc3NOYW1lOlwibWFya2Rvd25cIn1dLmNvbmNhdChlbGVtZW50cykpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJub29wXCI+PC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDYW52YXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wcm9wcy5wYXJlbnQ7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHBhcmVudC5jYW52YXNRdWVyeS5wdXNoKGNhbnZhcyk7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5hdHRycy5uYW1lKXBhcmVudC5jYW52YXNEaWN0W3RoaXMucHJvcHMuYXR0cnMubmFtZV09Y2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsdGhpcy5wcm9wcy5hdHRycylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9pbmMvQ29udGVudC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBjb21tb25tYXJrLmpzIC0gQ29tbW9tTWFyayBpbiBKYXZhU2NyaXB0XG4vLyBDb3B5cmlnaHQgKEMpIDIwMTQgSm9obiBNYWNGYXJsYW5lXG4vLyBMaWNlbnNlOiBCU0QzLlxuXG4vLyBCYXNpYyB1c2FnZTpcbi8vXG4vLyB2YXIgY29tbW9ubWFyayA9IHJlcXVpcmUoJ2NvbW1vbm1hcmsnKTtcbi8vIHZhciBwYXJzZXIgPSBuZXcgY29tbW9ubWFyay5QYXJzZXIoKTtcbi8vIHZhciByZW5kZXJlciA9IG5ldyBjb21tb25tYXJrLkh0bWxSZW5kZXJlcigpO1xuLy8gY29uc29sZS5sb2cocmVuZGVyZXIucmVuZGVyKHBhcnNlci5wYXJzZSgnSGVsbG8gKndvcmxkKicpKSk7XG5cbm1vZHVsZS5leHBvcnRzLk5vZGUgPSByZXF1aXJlKCcuL25vZGUnKTtcbm1vZHVsZS5leHBvcnRzLlBhcnNlciA9IHJlcXVpcmUoJy4vYmxvY2tzJyk7XG5tb2R1bGUuZXhwb3J0cy5IdG1sUmVuZGVyZXIgPSByZXF1aXJlKCcuL2h0bWwnKTtcbm1vZHVsZS5leHBvcnRzLlhtbFJlbmRlcmVyID0gcmVxdWlyZSgnLi94bWwnKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGlzQ29udGFpbmVyKG5vZGUpIHtcbiAgICBzd2l0Y2ggKG5vZGUuX3R5cGUpIHtcbiAgICBjYXNlICdEb2N1bWVudCc6XG4gICAgY2FzZSAnQmxvY2tRdW90ZSc6XG4gICAgY2FzZSAnTGlzdCc6XG4gICAgY2FzZSAnSXRlbSc6XG4gICAgY2FzZSAnUGFyYWdyYXBoJzpcbiAgICBjYXNlICdIZWFkZXInOlxuICAgIGNhc2UgJ0VtcGgnOlxuICAgIGNhc2UgJ1N0cm9uZyc6XG4gICAgY2FzZSAnTGluayc6XG4gICAgY2FzZSAnSW1hZ2UnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG52YXIgcmVzdW1lQXQgPSBmdW5jdGlvbihub2RlLCBlbnRlcmluZykge1xuICAgIHRoaXMuY3VycmVudCA9IG5vZGU7XG4gICAgdGhpcy5lbnRlcmluZyA9IChlbnRlcmluZyA9PT0gdHJ1ZSk7XG59O1xuXG52YXIgbmV4dCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGN1ciA9IHRoaXMuY3VycmVudDtcbiAgICB2YXIgZW50ZXJpbmcgPSB0aGlzLmVudGVyaW5nO1xuXG4gICAgaWYgKGN1ciA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbmVyID0gaXNDb250YWluZXIoY3VyKTtcblxuICAgIGlmIChlbnRlcmluZyAmJiBjb250YWluZXIpIHtcbiAgICAgICAgaWYgKGN1ci5fZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VyLl9maXJzdENoaWxkO1xuICAgICAgICAgICAgdGhpcy5lbnRlcmluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzdGF5IG9uIG5vZGUgYnV0IGV4aXRcbiAgICAgICAgICAgIHRoaXMuZW50ZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChjdXIgPT09IHRoaXMucm9vdCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuXG4gICAgfSBlbHNlIGlmIChjdXIuX25leHQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VyLl9wYXJlbnQ7XG4gICAgICAgIHRoaXMuZW50ZXJpbmcgPSBmYWxzZTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1ci5fbmV4dDtcbiAgICAgICAgdGhpcy5lbnRlcmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtlbnRlcmluZzogZW50ZXJpbmcsIG5vZGU6IGN1cn07XG59O1xuXG52YXIgTm9kZVdhbGtlciA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgICByZXR1cm4geyBjdXJyZW50OiByb290LFxuICAgICAgICAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICAgICAgICAgZW50ZXJpbmc6IHRydWUsXG4gICAgICAgICAgICAgbmV4dDogbmV4dCxcbiAgICAgICAgICAgICByZXN1bWVBdDogcmVzdW1lQXQgfTtcbn07XG5cbnZhciBOb2RlID0gZnVuY3Rpb24obm9kZVR5cGUsIHNvdXJjZXBvcykge1xuICAgIHRoaXMuX3R5cGUgPSBub2RlVHlwZTtcbiAgICB0aGlzLl9wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX2ZpcnN0Q2hpbGQgPSBudWxsO1xuICAgIHRoaXMuX2xhc3RDaGlsZCA9IG51bGw7XG4gICAgdGhpcy5fcHJldiA9IG51bGw7XG4gICAgdGhpcy5fbmV4dCA9IG51bGw7XG4gICAgdGhpcy5fc291cmNlcG9zID0gc291cmNlcG9zO1xuICAgIHRoaXMuX2xhc3RMaW5lQmxhbmsgPSBmYWxzZTtcbiAgICB0aGlzLl9vcGVuID0gdHJ1ZTtcbiAgICB0aGlzLl9zdHJpbmdfY29udGVudCA9IG51bGw7XG4gICAgdGhpcy5fbGl0ZXJhbCA9IG51bGw7XG4gICAgdGhpcy5fbGlzdERhdGEgPSBudWxsO1xuICAgIHRoaXMuX2luZm8gPSBudWxsO1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uID0gbnVsbDtcbiAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgdGhpcy5faXNGZW5jZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9mZW5jZUNoYXIgPSBudWxsO1xuICAgIHRoaXMuX2ZlbmNlTGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mZW5jZU9mZnNldCA9IG51bGw7XG4gICAgdGhpcy5fbGV2ZWwgPSBudWxsO1xufTtcblxudmFyIHByb3RvID0gTm9kZS5wcm90b3R5cGU7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2lzQ29udGFpbmVyJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNDb250YWluZXIodGhpcyk7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICd0eXBlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl90eXBlOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnZmlyc3RDaGlsZCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fZmlyc3RDaGlsZDsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xhc3RDaGlsZCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGFzdENoaWxkOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbmV4dCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbmV4dDsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3ByZXYnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3ByZXY7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdwYXJlbnQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3BhcmVudDsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3NvdXJjZXBvcycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fc291cmNlcG9zOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnbGl0ZXJhbCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGl0ZXJhbDsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHMpIHsgdGhpcy5fbGl0ZXJhbCA9IHM7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdkZXN0aW5hdGlvbicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fZGVzdGluYXRpb247IH0sXG4gICAgc2V0OiBmdW5jdGlvbihzKSB7IHRoaXMuX2Rlc3RpbmF0aW9uID0gczsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3RpdGxlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl90aXRsZTsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHMpIHsgdGhpcy5fdGl0bGUgPSBzOyB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnaW5mbycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5faW5mbzsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHMpIHsgdGhpcy5faW5mbyA9IHM7IH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsZXZlbCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGV2ZWw7IH0sXG4gICAgc2V0OiBmdW5jdGlvbihzKSB7IHRoaXMuX2xldmVsID0gczsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xpc3RUeXBlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9saXN0RGF0YS50eXBlOyB9LFxuICAgIHNldDogZnVuY3Rpb24odCkgeyB0aGlzLl9saXN0RGF0YS50eXBlID0gdDsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xpc3RUaWdodCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGlzdERhdGEudGlnaHQ7IH0sXG4gICAgc2V0OiBmdW5jdGlvbih0KSB7IHRoaXMuX2xpc3REYXRhLnRpZ2h0ID0gdDsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xpc3RTdGFydCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fbGlzdERhdGEuc3RhcnQ7IH0sXG4gICAgc2V0OiBmdW5jdGlvbihuKSB7IHRoaXMuX2xpc3REYXRhLnN0YXJ0ID0gbjsgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xpc3REZWxpbWl0ZXInLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xpc3REYXRhLmRlbGltaXRlcjsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKGRlbGltKSB7IHRoaXMuX2xpc3REYXRhLmRlbGltaXRlciA9IGRlbGltOyB9XG59KTtcblxuTm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbihjaGlsZCkge1xuICAgIGNoaWxkLnVubGluaygpO1xuICAgIGNoaWxkLl9wYXJlbnQgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9sYXN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5fbGFzdENoaWxkLl9uZXh0ID0gY2hpbGQ7XG4gICAgICAgIGNoaWxkLl9wcmV2ID0gdGhpcy5fbGFzdENoaWxkO1xuICAgICAgICB0aGlzLl9sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIHRoaXMuX2xhc3RDaGlsZCA9IGNoaWxkO1xuICAgIH1cbn07XG5cbk5vZGUucHJvdG90eXBlLnByZXBlbmRDaGlsZCA9IGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgY2hpbGQudW5saW5rKCk7XG4gICAgY2hpbGQuX3BhcmVudCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX2ZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5fZmlyc3RDaGlsZC5fcHJldiA9IGNoaWxkO1xuICAgICAgICBjaGlsZC5fbmV4dCA9IHRoaXMuX2ZpcnN0Q2hpbGQ7XG4gICAgICAgIHRoaXMuX2ZpcnN0Q2hpbGQgPSBjaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIHRoaXMuX2xhc3RDaGlsZCA9IGNoaWxkO1xuICAgIH1cbn07XG5cbk5vZGUucHJvdG90eXBlLnVubGluayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9wcmV2KSB7XG4gICAgICAgIHRoaXMuX3ByZXYuX25leHQgPSB0aGlzLl9uZXh0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5fZmlyc3RDaGlsZCA9IHRoaXMuX25leHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uZXh0KSB7XG4gICAgICAgIHRoaXMuX25leHQuX3ByZXYgPSB0aGlzLl9wcmV2O1xuICAgIH0gZWxzZSBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5fbGFzdENoaWxkID0gdGhpcy5fcHJldjtcbiAgICB9XG4gICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9uZXh0ID0gbnVsbDtcbiAgICB0aGlzLl9wcmV2ID0gbnVsbDtcbn07XG5cbk5vZGUucHJvdG90eXBlLmluc2VydEFmdGVyID0gZnVuY3Rpb24oc2libGluZykge1xuICAgIHNpYmxpbmcudW5saW5rKCk7XG4gICAgc2libGluZy5fbmV4dCA9IHRoaXMuX25leHQ7XG4gICAgaWYgKHNpYmxpbmcuX25leHQpIHtcbiAgICAgICAgc2libGluZy5fbmV4dC5fcHJldiA9IHNpYmxpbmc7XG4gICAgfVxuICAgIHNpYmxpbmcuX3ByZXYgPSB0aGlzO1xuICAgIHRoaXMuX25leHQgPSBzaWJsaW5nO1xuICAgIHNpYmxpbmcuX3BhcmVudCA9IHRoaXMuX3BhcmVudDtcbiAgICBpZiAoIXNpYmxpbmcuX25leHQpIHtcbiAgICAgICAgc2libGluZy5fcGFyZW50Ll9sYXN0Q2hpbGQgPSBzaWJsaW5nO1xuICAgIH1cbn07XG5cbk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSA9IGZ1bmN0aW9uKHNpYmxpbmcpIHtcbiAgICBzaWJsaW5nLnVubGluaygpO1xuICAgIHNpYmxpbmcuX3ByZXYgPSB0aGlzLl9wcmV2O1xuICAgIGlmIChzaWJsaW5nLl9wcmV2KSB7XG4gICAgICAgIHNpYmxpbmcuX3ByZXYuX25leHQgPSBzaWJsaW5nO1xuICAgIH1cbiAgICBzaWJsaW5nLl9uZXh0ID0gdGhpcztcbiAgICB0aGlzLl9wcmV2ID0gc2libGluZztcbiAgICBzaWJsaW5nLl9wYXJlbnQgPSB0aGlzLl9wYXJlbnQ7XG4gICAgaWYgKCFzaWJsaW5nLl9wcmV2KSB7XG4gICAgICAgIHNpYmxpbmcuX3BhcmVudC5fZmlyc3RDaGlsZCA9IHNpYmxpbmc7XG4gICAgfVxufTtcblxuTm9kZS5wcm90b3R5cGUud2Fsa2VyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHdhbGtlciA9IG5ldyBOb2RlV2Fsa2VyKHRoaXMpO1xuICAgIHJldHVybiB3YWxrZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vZGU7XG5cblxuLyogRXhhbXBsZSBvZiB1c2Ugb2Ygd2Fsa2VyOlxuXG4gdmFyIHdhbGtlciA9IHcud2Fsa2VyKCk7XG4gdmFyIGV2ZW50O1xuXG4gd2hpbGUgKGV2ZW50ID0gd2Fsa2VyLm5leHQoKSkge1xuIGNvbnNvbGUubG9nKGV2ZW50LmVudGVyaW5nLCBldmVudC5ub2RlLnR5cGUpO1xuIH1cblxuICovXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9ub2RlLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBOb2RlID0gcmVxdWlyZSgnLi9ub2RlJyk7XG52YXIgdW5lc2NhcGVTdHJpbmcgPSByZXF1aXJlKCcuL2NvbW1vbicpLnVuZXNjYXBlU3RyaW5nO1xudmFyIE9QRU5UQUcgPSByZXF1aXJlKCcuL2NvbW1vbicpLk9QRU5UQUc7XG52YXIgQ0xPU0VUQUcgPSByZXF1aXJlKCcuL2NvbW1vbicpLkNMT1NFVEFHO1xuXG52YXIgQ09ERV9JTkRFTlQgPSA0O1xuXG52YXIgQ19ORVdMSU5FID0gMTA7XG52YXIgQ19HUkVBVEVSVEhBTiA9IDYyO1xudmFyIENfTEVTU1RIQU4gPSA2MDtcbnZhciBDX1NQQUNFID0gMzI7XG52YXIgQ19PUEVOX0JSQUNLRVQgPSA5MTtcblxudmFyIElubGluZVBhcnNlciA9IHJlcXVpcmUoJy4vaW5saW5lcycpO1xuXG52YXIgcmVIdG1sQmxvY2tPcGVuID0gW1xuICAgLy4vLCAvLyBkdW1teSBmb3IgMFxuICAgL148KD86c2NyaXB0fHByZXxzdHlsZSkoPzpcXHN8PnwkKS9pLFxuICAgL148IS0tLyxcbiAgIC9ePFs/XS8sXG4gICAvXjwhW0EtWl0vLFxuICAgL148IVxcW0NEQVRBXFxbLyxcbiAgIC9ePFsvXT8oPzphZGRyZXNzfGFydGljbGV8YXNpZGV8YmFzZXxiYXNlZm9udHxibG9ja3F1b3RlfGJvZHl8Y2FwdGlvbnxjZW50ZXJ8Y29sfGNvbGdyb3VwfGRkfGRldGFpbHN8ZGlhbG9nfGRpcnxkaXZ8ZGx8ZHR8ZmllbGRzZXR8ZmlnY2FwdGlvbnxmaWd1cmV8Zm9vdGVyfGZvcm18ZnJhbWV8ZnJhbWVzZXR8aDF8aGVhZHxoZWFkZXJ8aHJ8aHRtbHxsZWdlbmR8bGl8bGlua3xtYWlufG1lbnV8bWVudWl0ZW18bWV0YXxuYXZ8bm9mcmFtZXN8b2x8b3B0Z3JvdXB8b3B0aW9ufHB8cGFyYW18cHJlfHNlY3Rpb258c291cmNlfHRpdGxlfHN1bW1hcnl8dGFibGV8dGJvZHl8dGR8dGZvb3R8dGh8dGhlYWR8dGl0bGV8dHJ8dHJhY2t8dWwpKD86XFxzfFsvXT9bPl18JCkvaSxcbiAgICBuZXcgUmVnRXhwKCdeKD86JyArIE9QRU5UQUcgKyAnfCcgKyBDTE9TRVRBRyArICcpXFxzKiQnLCAnaScpXG5dO1xuXG52YXIgcmVIdG1sQmxvY2tDbG9zZSA9IFtcbiAgIC8uLywgLy8gZHVtbXkgZm9yIDBcbiAgIC88XFwvKD86c2NyaXB0fHByZXxzdHlsZSk+L2ksXG4gICAvLS0+LyxcbiAgIC9cXD8+LyxcbiAgIC8+LyxcbiAgIC9cXF1cXF0+L1xuXTtcblxudmFyIHJlSHJ1bGUgPSAvXig/Oig/OlxcKiAqKXszLH18KD86XyAqKXszLH18KD86LSAqKXszLH0pICokLztcblxudmFyIHJlTWF5YmVTcGVjaWFsID0gL15bI2B+KitfPTw+MC05LV0vO1xuXG52YXIgcmVOb25TcGFjZSA9IC9bXiBcXHRcXGZcXHZcXHJcXG5dLztcblxudmFyIHJlQnVsbGV0TGlzdE1hcmtlciA9IC9eWyorLV0oICt8JCkvO1xuXG52YXIgcmVPcmRlcmVkTGlzdE1hcmtlciA9IC9eKFxcZHsxLDl9KShbLildKSggK3wkKS87XG5cbnZhciByZUFUWEhlYWRlck1hcmtlciA9IC9eI3sxLDZ9KD86ICt8JCkvO1xuXG52YXIgcmVDb2RlRmVuY2UgPSAvXmB7Myx9KD8hLipgKXxefnszLH0oPyEuKn4pLztcblxudmFyIHJlQ2xvc2luZ0NvZGVGZW5jZSA9IC9eKD86YHszLH18fnszLH0pKD89ICokKS87XG5cbnZhciByZVNldGV4dEhlYWRlckxpbmUgPSAvXig/Oj0rfC0rKSAqJC87XG5cbnZhciByZUxpbmVFbmRpbmcgPSAvXFxyXFxufFxcbnxcXHIvO1xuXG4vLyBSZXR1cm5zIHRydWUgaWYgc3RyaW5nIGNvbnRhaW5zIG9ubHkgc3BhY2UgY2hhcmFjdGVycy5cbnZhciBpc0JsYW5rID0gZnVuY3Rpb24ocykge1xuICAgIHJldHVybiAhKHJlTm9uU3BhY2UudGVzdChzKSk7XG59O1xuXG52YXIgcGVlayA9IGZ1bmN0aW9uKGxuLCBwb3MpIHtcbiAgICBpZiAocG9zIDwgbG4ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBsbi5jaGFyQ29kZUF0KHBvcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn07XG5cbi8vIERPQyBQQVJTRVJcblxuLy8gVGhlc2UgYXJlIG1ldGhvZHMgb2YgYSBQYXJzZXIgb2JqZWN0LCBkZWZpbmVkIGJlbG93LlxuXG4vLyBSZXR1cm5zIHRydWUgaWYgYmxvY2sgZW5kcyB3aXRoIGEgYmxhbmsgbGluZSwgZGVzY2VuZGluZyBpZiBuZWVkZWRcbi8vIGludG8gbGlzdHMgYW5kIHN1Ymxpc3RzLlxudmFyIGVuZHNXaXRoQmxhbmtMaW5lID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB3aGlsZSAoYmxvY2spIHtcbiAgICAgICAgaWYgKGJsb2NrLl9sYXN0TGluZUJsYW5rKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdCA9IGJsb2NrLnR5cGU7XG4gICAgICAgIGlmICh0ID09PSAnTGlzdCcgfHwgdCA9PT0gJ0l0ZW0nKSB7XG4gICAgICAgICAgICBibG9jayA9IGJsb2NrLl9sYXN0Q2hpbGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBCcmVhayBvdXQgb2YgYWxsIGNvbnRhaW5pbmcgbGlzdHMsIHJlc2V0dGluZyB0aGUgdGlwIG9mIHRoZVxuLy8gZG9jdW1lbnQgdG8gdGhlIHBhcmVudCBvZiB0aGUgaGlnaGVzdCBsaXN0LCBhbmQgZmluYWxpemluZ1xuLy8gYWxsIHRoZSBsaXN0cy4gIChUaGlzIGlzIHVzZWQgdG8gaW1wbGVtZW50IHRoZSBcInR3byBibGFuayBsaW5lc1xuLy8gYnJlYWsgb2Ygb2YgYWxsIGxpc3RzXCIgZmVhdHVyZS4pXG52YXIgYnJlYWtPdXRPZkxpc3RzID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgYiA9IGJsb2NrO1xuICAgIHZhciBsYXN0X2xpc3QgPSBudWxsO1xuICAgIGRvIHtcbiAgICAgICAgaWYgKGIudHlwZSA9PT0gJ0xpc3QnKSB7XG4gICAgICAgICAgICBsYXN0X2xpc3QgPSBiO1xuICAgICAgICB9XG4gICAgICAgIGIgPSBiLl9wYXJlbnQ7XG4gICAgfSB3aGlsZSAoYik7XG5cbiAgICBpZiAobGFzdF9saXN0KSB7XG4gICAgICAgIHdoaWxlIChibG9jayAhPT0gbGFzdF9saXN0KSB7XG4gICAgICAgICAgICB0aGlzLmZpbmFsaXplKGJsb2NrLCB0aGlzLmxpbmVOdW1iZXIpO1xuICAgICAgICAgICAgYmxvY2sgPSBibG9jay5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmluYWxpemUobGFzdF9saXN0LCB0aGlzLmxpbmVOdW1iZXIpO1xuICAgICAgICB0aGlzLnRpcCA9IGxhc3RfbGlzdC5fcGFyZW50O1xuICAgIH1cbn07XG5cbi8vIEFkZCBhIGxpbmUgdG8gdGhlIGJsb2NrIGF0IHRoZSB0aXAuICBXZSBhc3N1bWUgdGhlIHRpcFxuLy8gY2FuIGFjY2VwdCBsaW5lcyAtLSB0aGF0IGNoZWNrIHNob3VsZCBiZSBkb25lIGJlZm9yZSBjYWxsaW5nIHRoaXMuXG52YXIgYWRkTGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudGlwLl9zdHJpbmdfY29udGVudCArPSB0aGlzLmN1cnJlbnRMaW5lLnNsaWNlKHRoaXMub2Zmc2V0KSArICdcXG4nO1xufTtcblxuLy8gQWRkIGJsb2NrIG9mIHR5cGUgdGFnIGFzIGEgY2hpbGQgb2YgdGhlIHRpcC4gIElmIHRoZSB0aXAgY2FuJ3Rcbi8vIGFjY2VwdCBjaGlsZHJlbiwgY2xvc2UgYW5kIGZpbmFsaXplIGl0IGFuZCB0cnkgaXRzIHBhcmVudCxcbi8vIGFuZCBzbyBvbiB0aWwgd2UgZmluZCBhIGJsb2NrIHRoYXQgY2FuIGFjY2VwdCBjaGlsZHJlbi5cbnZhciBhZGRDaGlsZCA9IGZ1bmN0aW9uKHRhZywgb2Zmc2V0KSB7XG4gICAgd2hpbGUgKCF0aGlzLmJsb2Nrc1t0aGlzLnRpcC50eXBlXS5jYW5Db250YWluKHRhZykpIHtcbiAgICAgICAgdGhpcy5maW5hbGl6ZSh0aGlzLnRpcCwgdGhpcy5saW5lTnVtYmVyIC0gMSk7XG4gICAgfVxuXG4gICAgdmFyIGNvbHVtbl9udW1iZXIgPSBvZmZzZXQgKyAxOyAvLyBvZmZzZXQgMCA9IGNvbHVtbiAxXG4gICAgdmFyIG5ld0Jsb2NrID0gbmV3IE5vZGUodGFnLCBbW3RoaXMubGluZU51bWJlciwgY29sdW1uX251bWJlcl0sIFswLCAwXV0pO1xuICAgIG5ld0Jsb2NrLl9zdHJpbmdfY29udGVudCA9ICcnO1xuICAgIHRoaXMudGlwLmFwcGVuZENoaWxkKG5ld0Jsb2NrKTtcbiAgICB0aGlzLnRpcCA9IG5ld0Jsb2NrO1xuICAgIHJldHVybiBuZXdCbG9jaztcbn07XG5cbi8vIFBhcnNlIGEgbGlzdCBtYXJrZXIgYW5kIHJldHVybiBkYXRhIG9uIHRoZSBtYXJrZXIgKHR5cGUsXG4vLyBzdGFydCwgZGVsaW1pdGVyLCBidWxsZXQgY2hhcmFjdGVyLCBwYWRkaW5nKSBvciBudWxsLlxudmFyIHBhcnNlTGlzdE1hcmtlciA9IGZ1bmN0aW9uKGxuLCBvZmZzZXQsIGluZGVudCkge1xuICAgIHZhciByZXN0ID0gbG4uc2xpY2Uob2Zmc2V0KTtcbiAgICB2YXIgbWF0Y2g7XG4gICAgdmFyIHNwYWNlc19hZnRlcl9tYXJrZXI7XG4gICAgdmFyIGRhdGEgPSB7IHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgIHRpZ2h0OiB0cnVlLCAgLy8gbGlzdHMgYXJlIHRpZ2h0IGJ5IGRlZmF1bHRcbiAgICAgICAgICAgICAgICAgYnVsbGV0Q2hhcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgc3RhcnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgcGFkZGluZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgbWFya2VyT2Zmc2V0OiBpbmRlbnQgfTtcbiAgICBpZiAoKG1hdGNoID0gcmVzdC5tYXRjaChyZUJ1bGxldExpc3RNYXJrZXIpKSkge1xuICAgICAgICBzcGFjZXNfYWZ0ZXJfbWFya2VyID0gbWF0Y2hbMV0ubGVuZ3RoO1xuICAgICAgICBkYXRhLnR5cGUgPSAnQnVsbGV0JztcbiAgICAgICAgZGF0YS5idWxsZXRDaGFyID0gbWF0Y2hbMF1bMF07XG5cbiAgICB9IGVsc2UgaWYgKChtYXRjaCA9IHJlc3QubWF0Y2gocmVPcmRlcmVkTGlzdE1hcmtlcikpKSB7XG4gICAgICAgIHNwYWNlc19hZnRlcl9tYXJrZXIgPSBtYXRjaFszXS5sZW5ndGg7XG4gICAgICAgIGRhdGEudHlwZSA9ICdPcmRlcmVkJztcbiAgICAgICAgZGF0YS5zdGFydCA9IHBhcnNlSW50KG1hdGNoWzFdKTtcbiAgICAgICAgZGF0YS5kZWxpbWl0ZXIgPSBtYXRjaFsyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGJsYW5rX2l0ZW0gPSBtYXRjaFswXS5sZW5ndGggPT09IHJlc3QubGVuZ3RoO1xuICAgIGlmIChzcGFjZXNfYWZ0ZXJfbWFya2VyID49IDUgfHxcbiAgICAgICAgc3BhY2VzX2FmdGVyX21hcmtlciA8IDEgfHxcbiAgICAgICAgYmxhbmtfaXRlbSkge1xuICAgICAgICBkYXRhLnBhZGRpbmcgPSBtYXRjaFswXS5sZW5ndGggLSBzcGFjZXNfYWZ0ZXJfbWFya2VyICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLnBhZGRpbmcgPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufTtcblxuLy8gUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gbGlzdCBpdGVtcyBhcmUgb2YgdGhlIHNhbWUgdHlwZSxcbi8vIHdpdGggdGhlIHNhbWUgZGVsaW1pdGVyIGFuZCBidWxsZXQgY2hhcmFjdGVyLiAgVGhpcyBpcyB1c2VkXG4vLyBpbiBhZ2dsb21lcmF0aW5nIGxpc3QgaXRlbXMgaW50byBsaXN0cy5cbnZhciBsaXN0c01hdGNoID0gZnVuY3Rpb24obGlzdF9kYXRhLCBpdGVtX2RhdGEpIHtcbiAgICByZXR1cm4gKGxpc3RfZGF0YS50eXBlID09PSBpdGVtX2RhdGEudHlwZSAmJlxuICAgICAgICAgICAgbGlzdF9kYXRhLmRlbGltaXRlciA9PT0gaXRlbV9kYXRhLmRlbGltaXRlciAmJlxuICAgICAgICAgICAgbGlzdF9kYXRhLmJ1bGxldENoYXIgPT09IGl0ZW1fZGF0YS5idWxsZXRDaGFyKTtcbn07XG5cbi8vIEZpbmFsaXplIGFuZCBjbG9zZSBhbnkgdW5tYXRjaGVkIGJsb2Nrcy4gUmV0dXJucyB0cnVlLlxudmFyIGNsb3NlVW5tYXRjaGVkQmxvY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmFsbENsb3NlZCkge1xuICAgICAgICAvLyBmaW5hbGl6ZSBhbnkgYmxvY2tzIG5vdCBtYXRjaGVkXG4gICAgICAgIHdoaWxlICh0aGlzLm9sZHRpcCAhPT0gdGhpcy5sYXN0TWF0Y2hlZENvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMub2xkdGlwLl9wYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLmZpbmFsaXplKHRoaXMub2xkdGlwLCB0aGlzLmxpbmVOdW1iZXIgLSAxKTtcbiAgICAgICAgICAgIHRoaXMub2xkdGlwID0gcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxsQ2xvc2VkID0gdHJ1ZTtcbiAgICB9XG59O1xuXG4vLyAnZmluYWxpemUnIGlzIHJ1biB3aGVuIHRoZSBibG9jayBpcyBjbG9zZWQuXG4vLyAnY29udGludWUnIGlzIHJ1biB0byBjaGVjayB3aGV0aGVyIHRoZSBibG9jayBpcyBjb250aW51aW5nXG4vLyBhdCBhIGNlcnRhaW4gbGluZSBhbmQgb2Zmc2V0IChlLmcuIHdoZXRoZXIgYSBibG9jayBxdW90ZVxuLy8gY29udGFpbnMgYSBgPmAuICBJdCByZXR1cm5zIDAgZm9yIG1hdGNoZWQsIDEgZm9yIG5vdCBtYXRjaGVkLFxuLy8gYW5kIDIgZm9yIFwid2UndmUgZGVhbHQgd2l0aCB0aGlzIGxpbmUgY29tcGxldGVseSwgZ28gdG8gbmV4dC5cIlxudmFyIGJsb2NrcyA9IHtcbiAgICBEb2N1bWVudDoge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24oKSB7IHJldHVybjsgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24odCkgeyByZXR1cm4gKHQgIT09ICdJdGVtJyk7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogZmFsc2VcbiAgICB9LFxuICAgIExpc3Q6IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKHBhcnNlciwgYmxvY2spIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYmxvY2suX2ZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB3aGlsZSAoaXRlbSkge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBub24tZmluYWwgbGlzdCBpdGVtIGVuZGluZyB3aXRoIGJsYW5rIGxpbmU6XG4gICAgICAgICAgICAgICAgaWYgKGVuZHNXaXRoQmxhbmtMaW5lKGl0ZW0pICYmIGl0ZW0uX25leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suX2xpc3REYXRhLnRpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyByZWN1cnNlIGludG8gY2hpbGRyZW4gb2YgbGlzdCBpdGVtLCB0byBzZWUgaWYgdGhlcmUgYXJlXG4gICAgICAgICAgICAgICAgLy8gc3BhY2VzIGJldHdlZW4gYW55IG9mIHRoZW06XG4gICAgICAgICAgICAgICAgdmFyIHN1Yml0ZW0gPSBpdGVtLl9maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIHdoaWxlIChzdWJpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmRzV2l0aEJsYW5rTGluZShzdWJpdGVtKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0uX25leHQgfHwgc3ViaXRlbS5fbmV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLl9saXN0RGF0YS50aWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3ViaXRlbSA9IHN1Yml0ZW0uX25leHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtLl9uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbih0KSB7IHJldHVybiAodCA9PT0gJ0l0ZW0nKTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiBmYWxzZVxuICAgIH0sXG4gICAgQmxvY2tRdW90ZToge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24ocGFyc2VyKSB7XG4gICAgICAgICAgICB2YXIgbG4gPSBwYXJzZXIuY3VycmVudExpbmU7XG4gICAgICAgICAgICBpZiAoIXBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgICAgIHBlZWsobG4sIHBhcnNlci5uZXh0Tm9uc3BhY2UpID09PSBDX0dSRUFURVJUSEFOKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldCgxLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHBlZWsobG4sIHBhcnNlci5vZmZzZXQpID09PSBDX1NQQUNFKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlci5vZmZzZXQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbih0KSB7IHJldHVybiAodCAhPT0gJ0l0ZW0nKTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiBmYWxzZVxuICAgIH0sXG4gICAgSXRlbToge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24ocGFyc2VyLCBjb250YWluZXIpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZXIuYmxhbmspIHtcbiAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZXIuaW5kZW50ID49XG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5fbGlzdERhdGEubWFya2VyT2Zmc2V0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLl9saXN0RGF0YS5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoY29udGFpbmVyLl9saXN0RGF0YS5tYXJrZXJPZmZzZXQgK1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuX2xpc3REYXRhLnBhZGRpbmcsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24oKSB7IHJldHVybjsgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24odCkgeyByZXR1cm4gKHQgIT09ICdJdGVtJyk7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogZmFsc2VcbiAgICB9LFxuICAgIEhlYWRlcjoge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBhIGhlYWRlciBjYW4gbmV2ZXIgY29udGFpbmVyID4gMSBsaW5lLCBzbyBmYWlsIHRvIG1hdGNoOlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IGZhbHNlXG4gICAgfSxcbiAgICBIb3Jpem9udGFsUnVsZToge1xuICAgICAgICBjb250aW51ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBhbiBocnVsZSBjYW4gbmV2ZXIgY29udGFpbmVyID4gMSBsaW5lLCBzbyBmYWlsIHRvIG1hdGNoOlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IGZhbHNlXG4gICAgfSxcbiAgICBDb2RlQmxvY2s6IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKHBhcnNlciwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgbG4gPSBwYXJzZXIuY3VycmVudExpbmU7XG4gICAgICAgICAgICB2YXIgaW5kZW50ID0gcGFyc2VyLmluZGVudDtcbiAgICAgICAgICAgIGlmIChjb250YWluZXIuX2lzRmVuY2VkKSB7IC8vIGZlbmNlZFxuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IChpbmRlbnQgPD0gMyAmJlxuICAgICAgICAgICAgICAgICAgICBsbi5jaGFyQXQocGFyc2VyLm5leHROb25zcGFjZSkgPT09IGNvbnRhaW5lci5fZmVuY2VDaGFyICYmXG4gICAgICAgICAgICAgICAgICAgIGxuLnNsaWNlKHBhcnNlci5uZXh0Tm9uc3BhY2UpLm1hdGNoKHJlQ2xvc2luZ0NvZGVGZW5jZSkpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFswXS5sZW5ndGggPj0gY29udGFpbmVyLl9mZW5jZUxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbG9zaW5nIGZlbmNlIC0gd2UncmUgYXQgZW5kIG9mIGxpbmUsIHNvIHdlIGNhbiByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VyLmZpbmFsaXplKGNvbnRhaW5lciwgcGFyc2VyLmxpbmVOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBza2lwIG9wdGlvbmFsIHNwYWNlcyBvZiBmZW5jZSBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBjb250YWluZXIuX2ZlbmNlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaSA+IDAgJiYgcGVlayhsbiwgcGFyc2VyLm9mZnNldCkgPT09IENfU1BBQ0UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGluZGVudGVkXG4gICAgICAgICAgICAgICAgaWYgKGluZGVudCA+PSBDT0RFX0lOREVOVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChDT0RFX0lOREVOVCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZXIuYmxhbmspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKHBhcnNlciwgYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChibG9jay5faXNGZW5jZWQpIHsgLy8gZmVuY2VkXG4gICAgICAgICAgICAgICAgLy8gZmlyc3QgbGluZSBiZWNvbWVzIGluZm8gc3RyaW5nXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBibG9jay5fc3RyaW5nX2NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIG5ld2xpbmVQb3MgPSBjb250ZW50LmluZGV4T2YoJ1xcbicpO1xuICAgICAgICAgICAgICAgIHZhciBmaXJzdExpbmUgPSBjb250ZW50LnNsaWNlKDAsIG5ld2xpbmVQb3MpO1xuICAgICAgICAgICAgICAgIHZhciByZXN0ID0gY29udGVudC5zbGljZShuZXdsaW5lUG9zICsgMSk7XG4gICAgICAgICAgICAgICAgYmxvY2suaW5mbyA9IHVuZXNjYXBlU3RyaW5nKGZpcnN0TGluZS50cmltKCkpO1xuICAgICAgICAgICAgICAgIGJsb2NrLl9saXRlcmFsID0gcmVzdDtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGluZGVudGVkXG4gICAgICAgICAgICAgICAgYmxvY2suX2xpdGVyYWwgPSBibG9jay5fc3RyaW5nX2NvbnRlbnQucmVwbGFjZSgvKFxcbiAqKSskLywgJ1xcbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2suX3N0cmluZ19jb250ZW50ID0gbnVsbDsgLy8gYWxsb3cgR0NcbiAgICAgICAgfSxcbiAgICAgICAgY2FuQ29udGFpbjogZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgYWNjZXB0c0xpbmVzOiB0cnVlXG4gICAgfSxcbiAgICBIdG1sQmxvY2s6IHtcbiAgICAgICAgY29udGludWU6IGZ1bmN0aW9uKHBhcnNlciwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKChwYXJzZXIuYmxhbmsgJiZcbiAgICAgICAgICAgICAgICAgICAgIChjb250YWluZXIuX2h0bWxCbG9ja1R5cGUgPT09IDYgfHxcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuX2h0bWxCbG9ja1R5cGUgPT09IDcpKSA/IDEgOiAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uKHBhcnNlciwgYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrLl9saXRlcmFsID0gYmxvY2suX3N0cmluZ19jb250ZW50LnJlcGxhY2UoLyhcXG4gKikrJC8sICcnKTtcbiAgICAgICAgICAgIGJsb2NrLl9zdHJpbmdfY29udGVudCA9IG51bGw7IC8vIGFsbG93IEdDXG4gICAgICAgIH0sXG4gICAgICAgIGNhbkNvbnRhaW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgIGFjY2VwdHNMaW5lczogdHJ1ZVxuICAgIH0sXG4gICAgUGFyYWdyYXBoOiB7XG4gICAgICAgIGNvbnRpbnVlOiBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAocGFyc2VyLmJsYW5rID8gMSA6IDApO1xuICAgICAgICB9LFxuICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24ocGFyc2VyLCBibG9jaykge1xuICAgICAgICAgICAgdmFyIHBvcztcbiAgICAgICAgICAgIHZhciBoYXNSZWZlcmVuY2VEZWZzID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIHRyeSBwYXJzaW5nIHRoZSBiZWdpbm5pbmcgYXMgbGluayByZWZlcmVuY2UgZGVmaW5pdGlvbnM6XG4gICAgICAgICAgICB3aGlsZSAocGVlayhibG9jay5fc3RyaW5nX2NvbnRlbnQsIDApID09PSBDX09QRU5fQlJBQ0tFVCAmJlxuICAgICAgICAgICAgICAgICAgIChwb3MgPVxuICAgICAgICAgICAgICAgICAgICBwYXJzZXIuaW5saW5lUGFyc2VyLnBhcnNlUmVmZXJlbmNlKGJsb2NrLl9zdHJpbmdfY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZXIucmVmbWFwKSkpIHtcbiAgICAgICAgICAgICAgICBibG9jay5fc3RyaW5nX2NvbnRlbnQgPSBibG9jay5fc3RyaW5nX2NvbnRlbnQuc2xpY2UocG9zKTtcbiAgICAgICAgICAgICAgICBoYXNSZWZlcmVuY2VEZWZzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYXNSZWZlcmVuY2VEZWZzICYmIGlzQmxhbmsoYmxvY2suX3N0cmluZ19jb250ZW50KSkge1xuICAgICAgICAgICAgICAgIGJsb2NrLnVubGluaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYW5Db250YWluOiBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBhY2NlcHRzTGluZXM6IHRydWVcbiAgICB9XG59O1xuXG4vLyBibG9jayBzdGFydCBmdW5jdGlvbnMuICBSZXR1cm4gdmFsdWVzOlxuLy8gMCA9IG5vIG1hdGNoXG4vLyAxID0gbWF0Y2hlZCBjb250YWluZXIsIGtlZXAgZ29pbmdcbi8vIDIgPSBtYXRjaGVkIGxlYWYsIG5vIG1vcmUgYmxvY2sgc3RhcnRzXG52YXIgYmxvY2tTdGFydHMgPSBbXG4gICAgLy8gYmxvY2sgcXVvdGVcbiAgICBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgaWYgKCFwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgIHBlZWsocGFyc2VyLmN1cnJlbnRMaW5lLCBwYXJzZXIubmV4dE5vbnNwYWNlKSA9PT0gQ19HUkVBVEVSVEhBTikge1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KDEsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIGZvbGxvd2luZyBzcGFjZVxuICAgICAgICAgICAgaWYgKHBlZWsocGFyc2VyLmN1cnJlbnRMaW5lLCBwYXJzZXIub2Zmc2V0KSA9PT0gQ19TUEFDRSkge1xuICAgICAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KDEsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgcGFyc2VyLmFkZENoaWxkKCdCbG9ja1F1b3RlJywgcGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEFUWCBoZWFkZXJcbiAgICBmdW5jdGlvbihwYXJzZXIpIHtcbiAgICAgICAgdmFyIG1hdGNoO1xuICAgICAgICBpZiAoIXBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgKG1hdGNoID0gcGFyc2VyLmN1cnJlbnRMaW5lLnNsaWNlKHBhcnNlci5uZXh0Tm9uc3BhY2UpLm1hdGNoKHJlQVRYSGVhZGVyTWFya2VyKSkpIHtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChtYXRjaFswXS5sZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHBhcnNlci5hZGRDaGlsZCgnSGVhZGVyJywgcGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICBjb250YWluZXIubGV2ZWwgPSBtYXRjaFswXS50cmltKCkubGVuZ3RoOyAvLyBudW1iZXIgb2YgI3NcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0cmFpbGluZyAjIyNzOlxuICAgICAgICAgICAgY29udGFpbmVyLl9zdHJpbmdfY29udGVudCA9XG4gICAgICAgICAgICAgICAgcGFyc2VyLmN1cnJlbnRMaW5lLnNsaWNlKHBhcnNlci5vZmZzZXQpLnJlcGxhY2UoL14gKiMrICokLywgJycpLnJlcGxhY2UoLyArIysgKiQvLCAnJyk7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChwYXJzZXIuY3VycmVudExpbmUubGVuZ3RoIC0gcGFyc2VyLm9mZnNldCk7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEZlbmNlZCBjb2RlIGJsb2NrXG4gICAgZnVuY3Rpb24ocGFyc2VyKSB7XG4gICAgICAgIHZhciBtYXRjaDtcbiAgICAgICAgaWYgKCFwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgIChtYXRjaCA9IHBhcnNlci5jdXJyZW50TGluZS5zbGljZShwYXJzZXIubmV4dE5vbnNwYWNlKS5tYXRjaChyZUNvZGVGZW5jZSkpKSB7XG4gICAgICAgICAgICB2YXIgZmVuY2VMZW5ndGggPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgICAgICBwYXJzZXIuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBwYXJzZXIuYWRkQ2hpbGQoJ0NvZGVCbG9jaycsIHBhcnNlci5uZXh0Tm9uc3BhY2UpO1xuICAgICAgICAgICAgY29udGFpbmVyLl9pc0ZlbmNlZCA9IHRydWU7XG4gICAgICAgICAgICBjb250YWluZXIuX2ZlbmNlTGVuZ3RoID0gZmVuY2VMZW5ndGg7XG4gICAgICAgICAgICBjb250YWluZXIuX2ZlbmNlQ2hhciA9IG1hdGNoWzBdWzBdO1xuICAgICAgICAgICAgY29udGFpbmVyLl9mZW5jZU9mZnNldCA9IHBhcnNlci5pbmRlbnQ7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU5leHROb25zcGFjZSgpO1xuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VPZmZzZXQoZmVuY2VMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gSFRNTCBibG9ja1xuICAgIGZ1bmN0aW9uKHBhcnNlciwgY29udGFpbmVyKSB7XG4gICAgICAgIGlmICghcGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICBwZWVrKHBhcnNlci5jdXJyZW50TGluZSwgcGFyc2VyLm5leHROb25zcGFjZSkgPT09IENfTEVTU1RIQU4pIHtcbiAgICAgICAgICAgIHZhciBzID0gcGFyc2VyLmN1cnJlbnRMaW5lLnNsaWNlKHBhcnNlci5uZXh0Tm9uc3BhY2UpO1xuICAgICAgICAgICAgdmFyIGJsb2NrVHlwZTtcblxuICAgICAgICAgICAgZm9yIChibG9ja1R5cGUgPSAxOyBibG9ja1R5cGUgPD0gNzsgYmxvY2tUeXBlKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocmVIdG1sQmxvY2tPcGVuW2Jsb2NrVHlwZV0udGVzdChzKSAmJlxuICAgICAgICAgICAgICAgICAgICAoYmxvY2tUeXBlIDwgNyB8fFxuICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnR5cGUgIT09ICdQYXJhZ3JhcGgnKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZXIuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgYWRqdXN0IHBhcnNlci5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNwYWNlcyBhcmUgcGFydCBvZiB0aGUgSFRNTCBibG9jazpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBwYXJzZXIuYWRkQ2hpbGQoJ0h0bWxCbG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlci5vZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICBiLl9odG1sQmxvY2tUeXBlID0gYmxvY2tUeXBlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcblxuICAgIH0sXG5cbiAgICAvLyBTZXRleHQgaGVhZGVyXG4gICAgZnVuY3Rpb24ocGFyc2VyLCBjb250YWluZXIpIHtcbiAgICAgICAgdmFyIG1hdGNoO1xuICAgICAgICBpZiAoIXBhcnNlci5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgY29udGFpbmVyLnR5cGUgPT09ICdQYXJhZ3JhcGgnICYmXG4gICAgICAgICAgICAgICAgICAgKGNvbnRhaW5lci5fc3RyaW5nX2NvbnRlbnQuaW5kZXhPZignXFxuJykgPT09XG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLl9zdHJpbmdfY29udGVudC5sZW5ndGggLSAxKSAmJlxuICAgICAgICAgICAgICAgICAgICgobWF0Y2ggPSBwYXJzZXIuY3VycmVudExpbmUuc2xpY2UocGFyc2VyLm5leHROb25zcGFjZSkubWF0Y2gocmVTZXRleHRIZWFkZXJMaW5lKSkpKSB7XG4gICAgICAgICAgICBwYXJzZXIuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSBuZXcgTm9kZSgnSGVhZGVyJywgY29udGFpbmVyLnNvdXJjZXBvcyk7XG4gICAgICAgICAgICBoZWFkZXIubGV2ZWwgPSBtYXRjaFswXVswXSA9PT0gJz0nID8gMSA6IDI7XG4gICAgICAgICAgICBoZWFkZXIuX3N0cmluZ19jb250ZW50ID0gY29udGFpbmVyLl9zdHJpbmdfY29udGVudDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRBZnRlcihoZWFkZXIpO1xuICAgICAgICAgICAgY29udGFpbmVyLnVubGluaygpO1xuICAgICAgICAgICAgcGFyc2VyLnRpcCA9IGhlYWRlcjtcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KHBhcnNlci5jdXJyZW50TGluZS5sZW5ndGggLSBwYXJzZXIub2Zmc2V0LCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGhydWxlXG4gICAgZnVuY3Rpb24ocGFyc2VyKSB7XG4gICAgICAgIGlmICghcGFyc2VyLmluZGVudGVkICYmXG4gICAgICAgICAgICByZUhydWxlLnRlc3QocGFyc2VyLmN1cnJlbnRMaW5lLnNsaWNlKHBhcnNlci5uZXh0Tm9uc3BhY2UpKSkge1xuICAgICAgICAgICAgcGFyc2VyLmNsb3NlVW5tYXRjaGVkQmxvY2tzKCk7XG4gICAgICAgICAgICBwYXJzZXIuYWRkQ2hpbGQoJ0hvcml6b250YWxSdWxlJywgcGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChwYXJzZXIuY3VycmVudExpbmUubGVuZ3RoIC0gcGFyc2VyLm9mZnNldCwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBsaXN0IGl0ZW1cbiAgICBmdW5jdGlvbihwYXJzZXIsIGNvbnRhaW5lcikge1xuICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGlmICgoZGF0YSA9IHBhcnNlTGlzdE1hcmtlcihwYXJzZXIuY3VycmVudExpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZXIubmV4dE5vbnNwYWNlLCBwYXJzZXIuaW5kZW50KSkpIHtcbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgaWYgKHBhcnNlci5pbmRlbnRlZCAmJiBwYXJzZXIudGlwLnR5cGUgIT09ICdMaXN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VyLmFkdmFuY2VOZXh0Tm9uc3BhY2UoKTtcbiAgICAgICAgICAgIC8vIHJlY2FsY3VsYXRlIGRhdGEucGFkZGluZywgdGFraW5nIGludG8gYWNjb3VudCB0YWJzOlxuICAgICAgICAgICAgaSA9IHBhcnNlci5jb2x1bW47XG4gICAgICAgICAgICBwYXJzZXIuYWR2YW5jZU9mZnNldChkYXRhLnBhZGRpbmcsIGZhbHNlKTtcbiAgICAgICAgICAgIGRhdGEucGFkZGluZyA9IHBhcnNlci5jb2x1bW4gLSBpO1xuXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGxpc3QgaWYgbmVlZGVkXG4gICAgICAgICAgICBpZiAocGFyc2VyLnRpcC50eXBlICE9PSAnTGlzdCcgfHxcbiAgICAgICAgICAgICAgICAhKGxpc3RzTWF0Y2goY29udGFpbmVyLl9saXN0RGF0YSwgZGF0YSkpKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gcGFyc2VyLmFkZENoaWxkKCdMaXN0JywgcGFyc2VyLm5leHROb25zcGFjZSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLl9saXN0RGF0YSA9IGRhdGE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgbGlzdCBpdGVtXG4gICAgICAgICAgICBjb250YWluZXIgPSBwYXJzZXIuYWRkQ2hpbGQoJ0l0ZW0nLCBwYXJzZXIubmV4dE5vbnNwYWNlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5fbGlzdERhdGEgPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBpbmRlbnRlZCBjb2RlIGJsb2NrXG4gICAgZnVuY3Rpb24ocGFyc2VyKSB7XG4gICAgICAgIGlmIChwYXJzZXIuaW5kZW50ZWQgJiZcbiAgICAgICAgICAgIHBhcnNlci50aXAudHlwZSAhPT0gJ1BhcmFncmFwaCcgJiZcbiAgICAgICAgICAgICFwYXJzZXIuYmxhbmspIHtcbiAgICAgICAgICAgIC8vIGluZGVudGVkIGNvZGVcbiAgICAgICAgICAgIHBhcnNlci5hZHZhbmNlT2Zmc2V0KENPREVfSU5ERU5ULCB0cnVlKTtcbiAgICAgICAgICAgIHBhcnNlci5jbG9zZVVubWF0Y2hlZEJsb2NrcygpO1xuICAgICAgICAgICAgcGFyc2VyLmFkZENoaWxkKCdDb2RlQmxvY2snLCBwYXJzZXIub2Zmc2V0KTtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgfVxuXG5dO1xuXG52YXIgYWR2YW5jZU9mZnNldCA9IGZ1bmN0aW9uKGNvdW50LCBjb2x1bW5zKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBjb2xzID0gMDtcbiAgICB2YXIgY3VycmVudExpbmUgPSB0aGlzLmN1cnJlbnRMaW5lO1xuICAgIHdoaWxlIChjb2x1bW5zID8gKGNvbHMgPCBjb3VudCkgOiAoaSA8IGNvdW50KSkge1xuICAgICAgICBpZiAoY3VycmVudExpbmVbdGhpcy5vZmZzZXQgKyBpXSA9PT0gJ1xcdCcpIHtcbiAgICAgICAgICAgIGNvbHMgKz0gKDQgLSAodGhpcy5jb2x1bW4gJSA0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2xzICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICB0aGlzLm9mZnNldCArPSBpO1xuICAgIHRoaXMuY29sdW1uICs9IGNvbHM7XG59O1xuXG52YXIgYWR2YW5jZU5leHROb25zcGFjZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5uZXh0Tm9uc3BhY2U7XG4gICAgdGhpcy5jb2x1bW4gPSB0aGlzLm5leHROb25zcGFjZUNvbHVtbjtcbn07XG5cbnZhciBmaW5kTmV4dE5vbnNwYWNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnRMaW5lID0gdGhpcy5jdXJyZW50TGluZTtcbiAgICB2YXIgaSA9IHRoaXMub2Zmc2V0O1xuICAgIHZhciBjb2xzID0gdGhpcy5jb2x1bW47XG4gICAgdmFyIGM7XG5cbiAgICB3aGlsZSAoKGMgPSBjdXJyZW50TGluZS5jaGFyQXQoaSkpICE9PSAnJykge1xuICAgICAgICBpZiAoYyA9PT0gJyAnKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBjb2xzKys7XG4gICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJ1xcdCcpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGNvbHMgKz0gKDQgLSAoY29scyAlIDQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuYmxhbmsgPSAoYyA9PT0gJ1xcbicgfHwgYyA9PT0gJ1xccicgfHwgYyA9PT0gJycpO1xuICAgIHRoaXMubmV4dE5vbnNwYWNlID0gaTtcbiAgICB0aGlzLm5leHROb25zcGFjZUNvbHVtbiA9IGNvbHM7XG4gICAgdGhpcy5pbmRlbnQgPSB0aGlzLm5leHROb25zcGFjZUNvbHVtbiAtIHRoaXMuY29sdW1uO1xuICAgIHRoaXMuaW5kZW50ZWQgPSB0aGlzLmluZGVudCA+PSBDT0RFX0lOREVOVDtcbn07XG5cbi8vIEFuYWx5emUgYSBsaW5lIG9mIHRleHQgYW5kIHVwZGF0ZSB0aGUgZG9jdW1lbnQgYXBwcm9wcmlhdGVseS5cbi8vIFdlIHBhcnNlIG1hcmtkb3duIHRleHQgYnkgY2FsbGluZyB0aGlzIG9uIGVhY2ggbGluZSBvZiBpbnB1dCxcbi8vIHRoZW4gZmluYWxpemluZyB0aGUgZG9jdW1lbnQuXG52YXIgaW5jb3Jwb3JhdGVMaW5lID0gZnVuY3Rpb24obG4pIHtcbiAgICB2YXIgYWxsX21hdGNoZWQgPSB0cnVlO1xuICAgIHZhciB0O1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZG9jO1xuICAgIHRoaXMub2xkdGlwID0gdGhpcy50aXA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgIHRoaXMubGluZU51bWJlciArPSAxO1xuXG4gICAgLy8gcmVwbGFjZSBOVUwgY2hhcmFjdGVycyBmb3Igc2VjdXJpdHlcbiAgICBpZiAobG4uaW5kZXhPZignXFx1MDAwMCcpICE9PSAtMSkge1xuICAgICAgICBsbiA9IGxuLnJlcGxhY2UoL1xcMC9nLCAnXFx1RkZGRCcpO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudExpbmUgPSBsbjtcblxuICAgIC8vIEZvciBlYWNoIGNvbnRhaW5pbmcgYmxvY2ssIHRyeSB0byBwYXJzZSB0aGUgYXNzb2NpYXRlZCBsaW5lIHN0YXJ0LlxuICAgIC8vIEJhaWwgb3V0IG9uIGZhaWx1cmU6IGNvbnRhaW5lciB3aWxsIHBvaW50IHRvIHRoZSBsYXN0IG1hdGNoaW5nIGJsb2NrLlxuICAgIC8vIFNldCBhbGxfbWF0Y2hlZCB0byBmYWxzZSBpZiBub3QgYWxsIGNvbnRhaW5lcnMgbWF0Y2guXG4gICAgdmFyIGxhc3RDaGlsZDtcbiAgICB3aGlsZSAoKGxhc3RDaGlsZCA9IGNvbnRhaW5lci5fbGFzdENoaWxkKSAmJiBsYXN0Q2hpbGQuX29wZW4pIHtcbiAgICAgICAgY29udGFpbmVyID0gbGFzdENoaWxkO1xuXG4gICAgICAgIHRoaXMuZmluZE5leHROb25zcGFjZSgpO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5ibG9ja3NbY29udGFpbmVyLnR5cGVdLmNvbnRpbnVlKHRoaXMsIGNvbnRhaW5lcikpIHtcbiAgICAgICAgY2FzZSAwOiAvLyB3ZSd2ZSBtYXRjaGVkLCBrZWVwIGdvaW5nXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOiAvLyB3ZSd2ZSBmYWlsZWQgdG8gbWF0Y2ggYSBibG9ja1xuICAgICAgICAgICAgYWxsX21hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6IC8vIHdlJ3ZlIGhpdCBlbmQgb2YgbGluZSBmb3IgZmVuY2VkIGNvZGUgY2xvc2UgYW5kIGNhbiByZXR1cm5cbiAgICAgICAgICAgIHRoaXMubGFzdExpbmVMZW5ndGggPSBsbi5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyAnY29udGludWUgcmV0dXJuZWQgaWxsZWdhbCB2YWx1ZSwgbXVzdCBiZSAwLCAxLCBvciAyJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFsbF9tYXRjaGVkKSB7XG4gICAgICAgICAgICBjb250YWluZXIgPSBjb250YWluZXIuX3BhcmVudDsgLy8gYmFjayB1cCB0byBsYXN0IG1hdGNoaW5nIGJsb2NrXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWxsQ2xvc2VkID0gKGNvbnRhaW5lciA9PT0gdGhpcy5vbGR0aXApO1xuICAgIHRoaXMubGFzdE1hdGNoZWRDb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAvLyBDaGVjayB0byBzZWUgaWYgd2UndmUgaGl0IDJuZCBibGFuayBsaW5lOyBpZiBzbyBicmVhayBvdXQgb2YgbGlzdDpcbiAgICBpZiAodGhpcy5ibGFuayAmJiBjb250YWluZXIuX2xhc3RMaW5lQmxhbmspIHtcbiAgICAgICAgdGhpcy5icmVha091dE9mTGlzdHMoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZExlYWYgPSBjb250YWluZXIudHlwZSAhPT0gJ1BhcmFncmFwaCcgJiZcbiAgICAgICAgICAgIGJsb2Nrc1tjb250YWluZXIudHlwZV0uYWNjZXB0c0xpbmVzO1xuICAgIHZhciBzdGFydHMgPSB0aGlzLmJsb2NrU3RhcnRzO1xuICAgIHZhciBzdGFydHNMZW4gPSBzdGFydHMubGVuZ3RoO1xuICAgIC8vIFVubGVzcyBsYXN0IG1hdGNoZWQgY29udGFpbmVyIGlzIGEgY29kZSBibG9jaywgdHJ5IG5ldyBjb250YWluZXIgc3RhcnRzLFxuICAgIC8vIGFkZGluZyBjaGlsZHJlbiB0byB0aGUgbGFzdCBtYXRjaGVkIGNvbnRhaW5lcjpcbiAgICB3aGlsZSAoIW1hdGNoZWRMZWFmKSB7XG5cbiAgICAgICAgdGhpcy5maW5kTmV4dE5vbnNwYWNlKCk7XG5cbiAgICAgICAgLy8gdGhpcyBpcyBhIGxpdHRsZSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb246XG4gICAgICAgIGlmICghdGhpcy5pbmRlbnRlZCAmJlxuICAgICAgICAgICAgIXJlTWF5YmVTcGVjaWFsLnRlc3QobG4uc2xpY2UodGhpcy5uZXh0Tm9uc3BhY2UpKSkge1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBzdGFydHNMZW4pIHtcbiAgICAgICAgICAgIHZhciByZXMgPSBzdGFydHNbaV0odGhpcywgY29udGFpbmVyKTtcbiAgICAgICAgICAgIGlmIChyZXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLnRpcDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzID09PSAyKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy50aXA7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZExlYWYgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gc3RhcnRzTGVuKSB7IC8vIG5vdGhpbmcgbWF0Y2hlZFxuICAgICAgICAgICAgdGhpcy5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdoYXQgcmVtYWlucyBhdCB0aGUgb2Zmc2V0IGlzIGEgdGV4dCBsaW5lLiAgQWRkIHRoZSB0ZXh0IHRvIHRoZVxuICAgIC8vIGFwcHJvcHJpYXRlIGNvbnRhaW5lci5cblxuICAgLy8gRmlyc3QgY2hlY2sgZm9yIGEgbGF6eSBwYXJhZ3JhcGggY29udGludWF0aW9uOlxuICAgIGlmICghdGhpcy5hbGxDbG9zZWQgJiYgIXRoaXMuYmxhbmsgJiZcbiAgICAgICAgdGhpcy50aXAudHlwZSA9PT0gJ1BhcmFncmFwaCcpIHtcbiAgICAgICAgLy8gbGF6eSBwYXJhZ3JhcGggY29udGludWF0aW9uXG4gICAgICAgIHRoaXMuYWRkTGluZSgpO1xuXG4gICAgfSBlbHNlIHsgLy8gbm90IGEgbGF6eSBjb250aW51YXRpb25cblxuICAgICAgICAvLyBmaW5hbGl6ZSBhbnkgYmxvY2tzIG5vdCBtYXRjaGVkXG4gICAgICAgIHRoaXMuY2xvc2VVbm1hdGNoZWRCbG9ja3MoKTtcbiAgICAgICAgaWYgKHRoaXMuYmxhbmsgJiYgY29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmxhc3RDaGlsZC5fbGFzdExpbmVCbGFuayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0ID0gY29udGFpbmVyLnR5cGU7XG5cbiAgICAgICAgLy8gQmxvY2sgcXVvdGUgbGluZXMgYXJlIG5ldmVyIGJsYW5rIGFzIHRoZXkgc3RhcnQgd2l0aCA+XG4gICAgICAgIC8vIGFuZCB3ZSBkb24ndCBjb3VudCBibGFua3MgaW4gZmVuY2VkIGNvZGUgZm9yIHB1cnBvc2VzIG9mIHRpZ2h0L2xvb3NlXG4gICAgICAgIC8vIGxpc3RzIG9yIGJyZWFraW5nIG91dCBvZiBsaXN0cy4gIFdlIGFsc28gZG9uJ3Qgc2V0IF9sYXN0TGluZUJsYW5rXG4gICAgICAgIC8vIG9uIGFuIGVtcHR5IGxpc3QgaXRlbSwgb3IgaWYgd2UganVzdCBjbG9zZWQgYSBmZW5jZWQgYmxvY2suXG4gICAgICAgIHZhciBsYXN0TGluZUJsYW5rID0gdGhpcy5ibGFuayAmJlxuICAgICAgICAgICAgISh0ID09PSAnQmxvY2tRdW90ZScgfHxcbiAgICAgICAgICAgICAgKHQgPT09ICdDb2RlQmxvY2snICYmIGNvbnRhaW5lci5faXNGZW5jZWQpIHx8XG4gICAgICAgICAgICAgICh0ID09PSAnSXRlbScgJiZcbiAgICAgICAgICAgICAgICFjb250YWluZXIuX2ZpcnN0Q2hpbGQgJiZcbiAgICAgICAgICAgICAgIGNvbnRhaW5lci5zb3VyY2Vwb3NbMF1bMF0gPT09IHRoaXMubGluZU51bWJlcikpO1xuXG4gICAgICAgIC8vIHByb3BhZ2F0ZSBsYXN0TGluZUJsYW5rIHVwIHRocm91Z2ggcGFyZW50czpcbiAgICAgICAgdmFyIGNvbnQgPSBjb250YWluZXI7XG4gICAgICAgIHdoaWxlIChjb250KSB7XG4gICAgICAgICAgICBjb250Ll9sYXN0TGluZUJsYW5rID0gbGFzdExpbmVCbGFuaztcbiAgICAgICAgICAgIGNvbnQgPSBjb250Ll9wYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ibG9ja3NbdF0uYWNjZXB0c0xpbmVzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZExpbmUoKTtcbiAgICAgICAgICAgIC8vIGlmIEh0bWxCbG9jaywgY2hlY2sgZm9yIGVuZCBjb25kaXRpb25cbiAgICAgICAgICAgIGlmICh0ID09PSAnSHRtbEJsb2NrJyAmJlxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5faHRtbEJsb2NrVHlwZSA+PSAxICYmXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLl9odG1sQmxvY2tUeXBlIDw9IDUgJiZcbiAgICAgICAgICAgICAgICByZUh0bWxCbG9ja0Nsb3NlW2NvbnRhaW5lci5faHRtbEJsb2NrVHlwZV0udGVzdCh0aGlzLmN1cnJlbnRMaW5lLnNsaWNlKHRoaXMub2Zmc2V0KSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmFsaXplKGNvbnRhaW5lciwgdGhpcy5saW5lTnVtYmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub2Zmc2V0IDwgbG4ubGVuZ3RoICYmICF0aGlzLmJsYW5rKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgcGFyYWdyYXBoIGNvbnRhaW5lciBmb3IgbGluZVxuICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy5hZGRDaGlsZCgnUGFyYWdyYXBoJywgdGhpcy5vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlTmV4dE5vbnNwYWNlKCk7XG4gICAgICAgICAgICB0aGlzLmFkZExpbmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxhc3RMaW5lTGVuZ3RoID0gbG4ubGVuZ3RoO1xufTtcblxuLy8gRmluYWxpemUgYSBibG9jay4gIENsb3NlIGl0IGFuZCBkbyBhbnkgbmVjZXNzYXJ5IHBvc3Rwcm9jZXNzaW5nLFxuLy8gZS5nLiBjcmVhdGluZyBzdHJpbmdfY29udGVudCBmcm9tIHN0cmluZ3MsIHNldHRpbmcgdGhlICd0aWdodCdcbi8vIG9yICdsb29zZScgc3RhdHVzIG9mIGEgbGlzdCwgYW5kIHBhcnNpbmcgdGhlIGJlZ2lubmluZ3Ncbi8vIG9mIHBhcmFncmFwaHMgZm9yIHJlZmVyZW5jZSBkZWZpbml0aW9ucy4gIFJlc2V0IHRoZSB0aXAgdG8gdGhlXG4vLyBwYXJlbnQgb2YgdGhlIGNsb3NlZCBibG9jay5cbnZhciBmaW5hbGl6ZSA9IGZ1bmN0aW9uKGJsb2NrLCBsaW5lTnVtYmVyKSB7XG4gICAgdmFyIGFib3ZlID0gYmxvY2suX3BhcmVudDtcbiAgICBibG9jay5fb3BlbiA9IGZhbHNlO1xuICAgIGJsb2NrLnNvdXJjZXBvc1sxXSA9IFtsaW5lTnVtYmVyLCB0aGlzLmxhc3RMaW5lTGVuZ3RoXTtcblxuICAgIHRoaXMuYmxvY2tzW2Jsb2NrLnR5cGVdLmZpbmFsaXplKHRoaXMsIGJsb2NrKTtcblxuICAgIHRoaXMudGlwID0gYWJvdmU7XG59O1xuXG4vLyBXYWxrIHRocm91Z2ggYSBibG9jayAmIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LCBwYXJzaW5nIHN0cmluZyBjb250ZW50XG4vLyBpbnRvIGlubGluZSBjb250ZW50IHdoZXJlIGFwcHJvcHJpYXRlLlxudmFyIHByb2Nlc3NJbmxpbmVzID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgbm9kZSwgZXZlbnQsIHQ7XG4gICAgdmFyIHdhbGtlciA9IGJsb2NrLndhbGtlcigpO1xuICAgIHRoaXMuaW5saW5lUGFyc2VyLnJlZm1hcCA9IHRoaXMucmVmbWFwO1xuICAgIHRoaXMuaW5saW5lUGFyc2VyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgd2hpbGUgKChldmVudCA9IHdhbGtlci5uZXh0KCkpKSB7XG4gICAgICAgIG5vZGUgPSBldmVudC5ub2RlO1xuICAgICAgICB0ID0gbm9kZS50eXBlO1xuICAgICAgICBpZiAoIWV2ZW50LmVudGVyaW5nICYmICh0ID09PSAnUGFyYWdyYXBoJyB8fCB0ID09PSAnSGVhZGVyJykpIHtcbiAgICAgICAgICAgIHRoaXMuaW5saW5lUGFyc2VyLnBhcnNlKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIERvY3VtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRvYyA9IG5ldyBOb2RlKCdEb2N1bWVudCcsIFtbMSwgMV0sIFswLCAwXV0pO1xuICAgIHJldHVybiBkb2M7XG59O1xuXG4vLyBUaGUgbWFpbiBwYXJzaW5nIGZ1bmN0aW9uLiAgUmV0dXJucyBhIHBhcnNlZCBkb2N1bWVudCBBU1QuXG52YXIgcGFyc2UgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHRoaXMuZG9jID0gbmV3IERvY3VtZW50KCk7XG4gICAgdGhpcy50aXAgPSB0aGlzLmRvYztcbiAgICB0aGlzLnJlZm1hcCA9IHt9O1xuICAgIHRoaXMubGluZU51bWJlciA9IDA7XG4gICAgdGhpcy5sYXN0TGluZUxlbmd0aCA9IDA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgIHRoaXMuY29sdW1uID0gMDtcbiAgICB0aGlzLmxhc3RNYXRjaGVkQ29udGFpbmVyID0gdGhpcy5kb2M7XG4gICAgdGhpcy5jdXJyZW50TGluZSA9IFwiXCI7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZShcInByZXBhcmluZyBpbnB1dFwiKTsgfVxuICAgIHZhciBsaW5lcyA9IGlucHV0LnNwbGl0KHJlTGluZUVuZGluZyk7XG4gICAgdmFyIGxlbiA9IGxpbmVzLmxlbmd0aDtcbiAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChpbnB1dC5sZW5ndGggLSAxKSA9PT0gQ19ORVdMSU5FKSB7XG4gICAgICAgIC8vIGlnbm9yZSBsYXN0IGJsYW5rIGxpbmUgY3JlYXRlZCBieSBmaW5hbCBuZXdsaW5lXG4gICAgICAgIGxlbiAtPSAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lRW5kKFwicHJlcGFyaW5nIGlucHV0XCIpOyB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZShcImJsb2NrIHBhcnNpbmdcIik7IH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMuaW5jb3Jwb3JhdGVMaW5lKGxpbmVzW2ldKTtcbiAgICB9XG4gICAgd2hpbGUgKHRoaXMudGlwKSB7XG4gICAgICAgIHRoaXMuZmluYWxpemUodGhpcy50aXAsIGxlbik7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWVFbmQoXCJibG9jayBwYXJzaW5nXCIpOyB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZShcImlubGluZSBwYXJzaW5nXCIpOyB9XG4gICAgdGhpcy5wcm9jZXNzSW5saW5lcyh0aGlzLmRvYyk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZUVuZChcImlubGluZSBwYXJzaW5nXCIpOyB9XG4gICAgcmV0dXJuIHRoaXMuZG9jO1xufTtcblxuXG4vLyBUaGUgUGFyc2VyIG9iamVjdC5cbmZ1bmN0aW9uIFBhcnNlcihvcHRpb25zKXtcbiAgICByZXR1cm4ge1xuICAgICAgICBkb2M6IG5ldyBEb2N1bWVudCgpLFxuICAgICAgICBibG9ja3M6IGJsb2NrcyxcbiAgICAgICAgYmxvY2tTdGFydHM6IGJsb2NrU3RhcnRzLFxuICAgICAgICB0aXA6IHRoaXMuZG9jLFxuICAgICAgICBvbGR0aXA6IHRoaXMuZG9jLFxuICAgICAgICBjdXJyZW50TGluZTogXCJcIixcbiAgICAgICAgbGluZU51bWJlcjogMCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBjb2x1bW46IDAsXG4gICAgICAgIG5leHROb25zcGFjZTogMCxcbiAgICAgICAgbmV4dE5vbnNwYWNlQ29sdW1uOiAwLFxuICAgICAgICBpbmRlbnQ6IDAsXG4gICAgICAgIGluZGVudGVkOiBmYWxzZSxcbiAgICAgICAgYmxhbms6IGZhbHNlLFxuICAgICAgICBhbGxDbG9zZWQ6IHRydWUsXG4gICAgICAgIGxhc3RNYXRjaGVkQ29udGFpbmVyOiB0aGlzLmRvYyxcbiAgICAgICAgcmVmbWFwOiB7fSxcbiAgICAgICAgbGFzdExpbmVMZW5ndGg6IDAsXG4gICAgICAgIGlubGluZVBhcnNlcjogbmV3IElubGluZVBhcnNlcihvcHRpb25zKSxcbiAgICAgICAgZmluZE5leHROb25zcGFjZTogZmluZE5leHROb25zcGFjZSxcbiAgICAgICAgYWR2YW5jZU9mZnNldDogYWR2YW5jZU9mZnNldCxcbiAgICAgICAgYWR2YW5jZU5leHROb25zcGFjZTogYWR2YW5jZU5leHROb25zcGFjZSxcbiAgICAgICAgYnJlYWtPdXRPZkxpc3RzOiBicmVha091dE9mTGlzdHMsXG4gICAgICAgIGFkZExpbmU6IGFkZExpbmUsXG4gICAgICAgIGFkZENoaWxkOiBhZGRDaGlsZCxcbiAgICAgICAgaW5jb3Jwb3JhdGVMaW5lOiBpbmNvcnBvcmF0ZUxpbmUsXG4gICAgICAgIGZpbmFsaXplOiBmaW5hbGl6ZSxcbiAgICAgICAgcHJvY2Vzc0lubGluZXM6IHByb2Nlc3NJbmxpbmVzLFxuICAgICAgICBjbG9zZVVubWF0Y2hlZEJsb2NrczogY2xvc2VVbm1hdGNoZWRCbG9ja3MsXG4gICAgICAgIHBhcnNlOiBwYXJzZSxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fVxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvYmxvY2tzLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZW5jb2RlID0gcmVxdWlyZSgnbWR1cmwvZW5jb2RlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnbWR1cmwvZGVjb2RlJyk7XG5cbnZhciBDX0JBQ0tTTEFTSCA9IDkyO1xuXG52YXIgZGVjb2RlSFRNTCA9IHJlcXVpcmUoJ2VudGl0aWVzJykuZGVjb2RlSFRNTDtcblxudmFyIEVOVElUWSA9IFwiJig/OiN4W2EtZjAtOV17MSw4fXwjWzAtOV17MSw4fXxbYS16XVthLXowLTldezEsMzF9KTtcIjtcblxudmFyIFRBR05BTUUgPSAnW0EtWmEtel1bQS1aYS16MC05LV0qJztcbnZhciBBVFRSSUJVVEVOQU1FID0gJ1thLXpBLVpfOl1bYS16QS1aMC05Oi5fLV0qJztcbnZhciBVTlFVT1RFRFZBTFVFID0gXCJbXlxcXCInPTw+YFxcXFx4MDAtXFxcXHgyMF0rXCI7XG52YXIgU0lOR0xFUVVPVEVEVkFMVUUgPSBcIidbXiddKidcIjtcbnZhciBET1VCTEVRVU9URURWQUxVRSA9ICdcIlteXCJdKlwiJztcbnZhciBBVFRSSUJVVEVWQUxVRSA9IFwiKD86XCIgKyBVTlFVT1RFRFZBTFVFICsgXCJ8XCIgKyBTSU5HTEVRVU9URURWQUxVRSArIFwifFwiICsgRE9VQkxFUVVPVEVEVkFMVUUgKyBcIilcIjtcbnZhciBBVFRSSUJVVEVWQUxVRVNQRUMgPSBcIig/OlwiICsgXCJcXFxccyo9XCIgKyBcIlxcXFxzKlwiICsgQVRUUklCVVRFVkFMVUUgKyBcIilcIjtcbnZhciBBVFRSSUJVVEUgPSBcIig/OlwiICsgXCJcXFxccytcIiArIEFUVFJJQlVURU5BTUUgKyBBVFRSSUJVVEVWQUxVRVNQRUMgKyBcIj8pXCI7XG52YXIgT1BFTlRBRyA9IFwiPFwiICsgVEFHTkFNRSArIEFUVFJJQlVURSArIFwiKlwiICsgXCJcXFxccyovPz5cIjtcbnZhciBDTE9TRVRBRyA9IFwiPC9cIiArIFRBR05BTUUgKyBcIlxcXFxzKls+XVwiO1xudmFyIEhUTUxDT01NRU5UID0gXCI8IS0tLS0+fDwhLS0oPzotP1tePi1dKSg/Oi0/W14tXSkqLS0+XCI7XG52YXIgUFJPQ0VTU0lOR0lOU1RSVUNUSU9OID0gXCJbPF1bP10uKj9bP11bPl1cIjtcbnZhciBERUNMQVJBVElPTiA9IFwiPCFbQS1aXStcIiArIFwiXFxcXHMrW14+XSo+XCI7XG52YXIgQ0RBVEEgPSBcIjwhXFxcXFtDREFUQVxcXFxbW1xcXFxzXFxcXFNdKj9cXFxcXVxcXFxdPlwiO1xudmFyIEhUTUxUQUcgPSBcIig/OlwiICsgT1BFTlRBRyArIFwifFwiICsgQ0xPU0VUQUcgKyBcInxcIiArIEhUTUxDT01NRU5UICsgXCJ8XCIgK1xuICAgICAgICBQUk9DRVNTSU5HSU5TVFJVQ1RJT04gKyBcInxcIiArIERFQ0xBUkFUSU9OICsgXCJ8XCIgKyBDREFUQSArIFwiKVwiO1xudmFyIHJlSHRtbFRhZyA9IG5ldyBSZWdFeHAoJ14nICsgSFRNTFRBRywgJ2knKTtcblxudmFyIHJlQmFja3NsYXNoT3JBbXAgPSAvW1xcXFwmXS87XG5cbnZhciBFU0NBUEFCTEUgPSAnWyFcIiMkJSZcXCcoKSorLC4vOjs8PT4/QFtcXFxcXFxcXFxcXFxdXl9ge3x9fi1dJztcblxudmFyIHJlRW50aXR5T3JFc2NhcGVkQ2hhciA9IG5ldyBSZWdFeHAoJ1xcXFxcXFxcJyArIEVTQ0FQQUJMRSArICd8JyArIEVOVElUWSwgJ2dpJyk7XG5cbnZhciBYTUxTUEVDSUFMID0gJ1smPD5cIl0nO1xuXG52YXIgcmVYbWxTcGVjaWFsID0gbmV3IFJlZ0V4cChYTUxTUEVDSUFMLCAnZycpO1xuXG52YXIgcmVYbWxTcGVjaWFsT3JFbnRpdHkgPSBuZXcgUmVnRXhwKEVOVElUWSArICd8JyArIFhNTFNQRUNJQUwsICdnaScpO1xuXG52YXIgdW5lc2NhcGVDaGFyID0gZnVuY3Rpb24ocykge1xuICAgIGlmIChzLmNoYXJDb2RlQXQoMCkgPT09IENfQkFDS1NMQVNIKSB7XG4gICAgICAgIHJldHVybiBzLmNoYXJBdCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVjb2RlSFRNTChzKTtcbiAgICB9XG59O1xuXG4vLyBSZXBsYWNlIGVudGl0aWVzIGFuZCBiYWNrc2xhc2ggZXNjYXBlcyB3aXRoIGxpdGVyYWwgY2hhcmFjdGVycy5cbnZhciB1bmVzY2FwZVN0cmluZyA9IGZ1bmN0aW9uKHMpIHtcbiAgICBpZiAocmVCYWNrc2xhc2hPckFtcC50ZXN0KHMpKSB7XG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UocmVFbnRpdHlPckVzY2FwZWRDaGFyLCB1bmVzY2FwZUNoYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbn07XG5cbnZhciBub3JtYWxpemVVUkkgPSBmdW5jdGlvbih1cmkpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZW5jb2RlKGRlY29kZSh1cmkpKTtcbiAgICB9XG4gICAgY2F0Y2goZXJyKSB7XG4gICAgICAgIHJldHVybiB1cmk7XG4gICAgfVxufTtcblxudmFyIHJlcGxhY2VVbnNhZmVDaGFyID0gZnVuY3Rpb24ocykge1xuICAgIHN3aXRjaCAocykge1xuICAgIGNhc2UgJyYnOlxuICAgICAgICByZXR1cm4gJyZhbXA7JztcbiAgICBjYXNlICc8JzpcbiAgICAgICAgcmV0dXJuICcmbHQ7JztcbiAgICBjYXNlICc+JzpcbiAgICAgICAgcmV0dXJuICcmZ3Q7JztcbiAgICBjYXNlICdcIic6XG4gICAgICAgIHJldHVybiAnJnF1b3Q7JztcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG59O1xuXG52YXIgZXNjYXBlWG1sID0gZnVuY3Rpb24ocywgcHJlc2VydmVfZW50aXRpZXMpIHtcbiAgICBpZiAocmVYbWxTcGVjaWFsLnRlc3QocykpIHtcbiAgICAgICAgaWYgKHByZXNlcnZlX2VudGl0aWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKHJlWG1sU3BlY2lhbE9yRW50aXR5LCByZXBsYWNlVW5zYWZlQ2hhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKHJlWG1sU3BlY2lhbCwgcmVwbGFjZVVuc2FmZUNoYXIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IHVuZXNjYXBlU3RyaW5nOiB1bmVzY2FwZVN0cmluZyxcbiAgICAgICAgICAgICAgICAgICBub3JtYWxpemVVUkk6IG5vcm1hbGl6ZVVSSSxcbiAgICAgICAgICAgICAgICAgICBlc2NhcGVYbWw6IGVzY2FwZVhtbCxcbiAgICAgICAgICAgICAgICAgICByZUh0bWxUYWc6IHJlSHRtbFRhZyxcbiAgICAgICAgICAgICAgICAgICBPUEVOVEFHOiBPUEVOVEFHLFxuICAgICAgICAgICAgICAgICAgIENMT1NFVEFHOiBDTE9TRVRBRyxcbiAgICAgICAgICAgICAgICAgICBFTlRJVFk6IEVOVElUWSxcbiAgICAgICAgICAgICAgICAgICBFU0NBUEFCTEU6IEVTQ0FQQUJMRVxuICAgICAgICAgICAgICAgICB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIvY29tbW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBlbmNvZGVDYWNoZSA9IHt9O1xuXG5cbi8vIENyZWF0ZSBhIGxvb2t1cCBhcnJheSB3aGVyZSBhbnl0aGluZyBidXQgY2hhcmFjdGVycyBpbiBgY2hhcnNgIHN0cmluZ1xuLy8gYW5kIGFscGhhbnVtZXJpYyBjaGFycyBpcyBwZXJjZW50LWVuY29kZWQuXG4vL1xuZnVuY3Rpb24gZ2V0RW5jb2RlQ2FjaGUoZXhjbHVkZSkge1xuICB2YXIgaSwgY2gsIGNhY2hlID0gZW5jb2RlQ2FjaGVbZXhjbHVkZV07XG4gIGlmIChjYWNoZSkgeyByZXR1cm4gY2FjaGU7IH1cblxuICBjYWNoZSA9IGVuY29kZUNhY2hlW2V4Y2x1ZGVdID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IDEyODsgaSsrKSB7XG4gICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuXG4gICAgaWYgKC9eWzAtOWEtel0kL2kudGVzdChjaCkpIHtcbiAgICAgIC8vIGFsd2F5cyBhbGxvdyB1bmVuY29kZWQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnNcbiAgICAgIGNhY2hlLnB1c2goY2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZS5wdXNoKCclJyArICgnMCcgKyBpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKS5zbGljZSgtMikpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleGNsdWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FjaGVbZXhjbHVkZS5jaGFyQ29kZUF0KGkpXSA9IGV4Y2x1ZGVbaV07XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cblxuLy8gRW5jb2RlIHVuc2FmZSBjaGFyYWN0ZXJzIHdpdGggcGVyY2VudC1lbmNvZGluZywgc2tpcHBpbmcgYWxyZWFkeVxuLy8gZW5jb2RlZCBzZXF1ZW5jZXMuXG4vL1xuLy8gIC0gc3RyaW5nICAgICAgIC0gc3RyaW5nIHRvIGVuY29kZVxuLy8gIC0gZXhjbHVkZSAgICAgIC0gbGlzdCBvZiBjaGFyYWN0ZXJzIHRvIGlnbm9yZSAoaW4gYWRkaXRpb24gdG8gYS16QS1aMC05KVxuLy8gIC0ga2VlcEVzY2FwZWQgIC0gZG9uJ3QgZW5jb2RlICclJyBpbiBhIGNvcnJlY3QgZXNjYXBlIHNlcXVlbmNlIChkZWZhdWx0OiB0cnVlKVxuLy9cbmZ1bmN0aW9uIGVuY29kZShzdHJpbmcsIGV4Y2x1ZGUsIGtlZXBFc2NhcGVkKSB7XG4gIHZhciBpLCBsLCBjb2RlLCBuZXh0Q29kZSwgY2FjaGUsXG4gICAgICByZXN1bHQgPSAnJztcblxuICBpZiAodHlwZW9mIGV4Y2x1ZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZW5jb2RlKHN0cmluZywga2VlcEVzY2FwZWQpXG4gICAga2VlcEVzY2FwZWQgID0gZXhjbHVkZTtcbiAgICBleGNsdWRlID0gZW5jb2RlLmRlZmF1bHRDaGFycztcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2VlcEVzY2FwZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAga2VlcEVzY2FwZWQgPSB0cnVlO1xuICB9XG5cbiAgY2FjaGUgPSBnZXRFbmNvZGVDYWNoZShleGNsdWRlKTtcblxuICBmb3IgKGkgPSAwLCBsID0gc3RyaW5nLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgIGlmIChrZWVwRXNjYXBlZCAmJiBjb2RlID09PSAweDI1IC8qICUgKi8gJiYgaSArIDIgPCBsKSB7XG4gICAgICBpZiAoL15bMC05YS1mXXsyfSQvaS50ZXN0KHN0cmluZy5zbGljZShpICsgMSwgaSArIDMpKSkge1xuICAgICAgICByZXN1bHQgKz0gc3RyaW5nLnNsaWNlKGksIGkgKyAzKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZSA8IDEyOCkge1xuICAgICAgcmVzdWx0ICs9IGNhY2hlW2NvZGVdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPj0gMHhEODAwICYmIGNvZGUgPD0gMHhERkZGKSB7XG4gICAgICBpZiAoY29kZSA+PSAweEQ4MDAgJiYgY29kZSA8PSAweERCRkYgJiYgaSArIDEgPCBsKSB7XG4gICAgICAgIG5leHRDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICBpZiAobmV4dENvZGUgPj0gMHhEQzAwICYmIG5leHRDb2RlIDw9IDB4REZGRikge1xuICAgICAgICAgIHJlc3VsdCArPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nW2ldICsgc3RyaW5nW2kgKyAxXSk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQgKz0gJyVFRiVCRiVCRCc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ1tpXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5lbmNvZGUuZGVmYXVsdENoYXJzICAgPSBcIjsvPzpAJj0rJCwtXy4hfionKCkjXCI7XG5lbmNvZGUuY29tcG9uZW50Q2hhcnMgPSBcIi1fLiF+KicoKVwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L21kdXJsL2VuY29kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbid1c2Ugc3RyaWN0JztcblxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG5cbnZhciBkZWNvZGVDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBnZXREZWNvZGVDYWNoZShleGNsdWRlKSB7XG4gIHZhciBpLCBjaCwgY2FjaGUgPSBkZWNvZGVDYWNoZVtleGNsdWRlXTtcbiAgaWYgKGNhY2hlKSB7IHJldHVybiBjYWNoZTsgfVxuXG4gIGNhY2hlID0gZGVjb2RlQ2FjaGVbZXhjbHVkZV0gPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgMTI4OyBpKyspIHtcbiAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG4gICAgY2FjaGUucHVzaChjaCk7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhjbHVkZS5sZW5ndGg7IGkrKykge1xuICAgIGNoID0gZXhjbHVkZS5jaGFyQ29kZUF0KGkpO1xuICAgIGNhY2hlW2NoXSA9ICclJyArICgnMCcgKyBjaC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTIpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5cbi8vIERlY29kZSBwZXJjZW50LWVuY29kZWQgc3RyaW5nLlxuLy9cbmZ1bmN0aW9uIGRlY29kZShzdHJpbmcsIGV4Y2x1ZGUpIHtcbiAgdmFyIGNhY2hlO1xuXG4gIGlmICh0eXBlb2YgZXhjbHVkZSAhPT0gJ3N0cmluZycpIHtcbiAgICBleGNsdWRlID0gZGVjb2RlLmRlZmF1bHRDaGFycztcbiAgfVxuXG4gIGNhY2hlID0gZ2V0RGVjb2RlQ2FjaGUoZXhjbHVkZSk7XG5cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oJVthLWYwLTldezJ9KSsvZ2ksIGZ1bmN0aW9uKHNlcSkge1xuICAgIHZhciBpLCBsLCBiMSwgYjIsIGIzLCBiNCwgY2hhcixcbiAgICAgICAgcmVzdWx0ID0gJyc7XG5cbiAgICBmb3IgKGkgPSAwLCBsID0gc2VxLmxlbmd0aDsgaSA8IGw7IGkgKz0gMykge1xuICAgICAgYjEgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDEsIGkgKyAzKSwgMTYpO1xuXG4gICAgICBpZiAoYjEgPCAweDgwKSB7XG4gICAgICAgIHJlc3VsdCArPSBjYWNoZVtiMV07XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGIxICYgMHhFMCkgPT09IDB4QzAgJiYgKGkgKyAzIDwgbCkpIHtcbiAgICAgICAgLy8gMTEweHh4eHggMTB4eHh4eHhcbiAgICAgICAgYjIgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDQsIGkgKyA2KSwgMTYpO1xuXG4gICAgICAgIGlmICgoYjIgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgIGNoYXIgPSAoKGIxIDw8IDYpICYgMHg3QzApIHwgKGIyICYgMHgzRik7XG5cbiAgICAgICAgICBpZiAoY2hhciA8IDB4ODApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZFxcdWZmZmQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpICs9IDM7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKChiMSAmIDB4RjApID09PSAweEUwICYmIChpICsgNiA8IGwpKSB7XG4gICAgICAgIC8vIDExMTB4eHh4IDEweHh4eHh4IDEweHh4eHh4XG4gICAgICAgIGIyID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA0LCBpICsgNiksIDE2KTtcbiAgICAgICAgYjMgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDcsIGkgKyA5KSwgMTYpO1xuXG4gICAgICAgIGlmICgoYjIgJiAweEMwKSA9PT0gMHg4MCAmJiAoYjMgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgIGNoYXIgPSAoKGIxIDw8IDEyKSAmIDB4RjAwMCkgfCAoKGIyIDw8IDYpICYgMHhGQzApIHwgKGIzICYgMHgzRik7XG5cbiAgICAgICAgICBpZiAoY2hhciA8IDB4ODAwIHx8IChjaGFyID49IDB4RDgwMCAmJiBjaGFyIDw9IDB4REZGRikpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZFxcdWZmZmRcXHVmZmZkJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaSArPSA2O1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgoYjEgJiAweEY4KSA9PT0gMHhGMCAmJiAoaSArIDkgPCBsKSkge1xuICAgICAgICAvLyAxMTExMTB4eCAxMHh4eHh4eCAxMHh4eHh4eCAxMHh4eHh4eFxuICAgICAgICBiMiA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNCwgaSArIDYpLCAxNik7XG4gICAgICAgIGIzID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA3LCBpICsgOSksIDE2KTtcbiAgICAgICAgYjQgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDEwLCBpICsgMTIpLCAxNik7XG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwICYmIChiMyAmIDB4QzApID09PSAweDgwICYmIChiNCAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY2hhciA9ICgoYjEgPDwgMTgpICYgMHgxQzAwMDApIHwgKChiMiA8PCAxMikgJiAweDNGMDAwKSB8ICgoYjMgPDwgNikgJiAweEZDMCkgfCAoYjQgJiAweDNGKTtcblxuICAgICAgICAgIGlmIChjaGFyIDwgMHgxMDAwMCB8fCBjaGFyID4gMHgxMEZGRkYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZFxcdWZmZmRcXHVmZmZkXFx1ZmZmZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYXIgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RDgwMCArIChjaGFyID4+IDEwKSwgMHhEQzAwICsgKGNoYXIgJiAweDNGRikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkgKz0gOTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXN1bHQgKz0gJ1xcdWZmZmQnO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xufVxuXG5cbmRlY29kZS5kZWZhdWx0Q2hhcnMgICA9ICc7Lz86QCY9KyQsIyc7XG5kZWNvZGUuY29tcG9uZW50Q2hhcnMgPSAnJztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvfi9tZHVybC9kZWNvZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGVuY29kZSA9IHJlcXVpcmUoXCIuL2xpYi9lbmNvZGUuanNcIiksXG4gICAgZGVjb2RlID0gcmVxdWlyZShcIi4vbGliL2RlY29kZS5qc1wiKTtcblxuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbihkYXRhLCBsZXZlbCl7XG5cdHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBkZWNvZGUuWE1MIDogZGVjb2RlLkhUTUwpKGRhdGEpO1xufTtcblxuZXhwb3J0cy5kZWNvZGVTdHJpY3QgPSBmdW5jdGlvbihkYXRhLCBsZXZlbCl7XG5cdHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBkZWNvZGUuWE1MIDogZGVjb2RlLkhUTUxTdHJpY3QpKGRhdGEpO1xufTtcblxuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbihkYXRhLCBsZXZlbCl7XG5cdHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBlbmNvZGUuWE1MIDogZW5jb2RlLkhUTUwpKGRhdGEpO1xufTtcblxuZXhwb3J0cy5lbmNvZGVYTUwgPSBlbmNvZGUuWE1MO1xuXG5leHBvcnRzLmVuY29kZUhUTUw0ID1cbmV4cG9ydHMuZW5jb2RlSFRNTDUgPVxuZXhwb3J0cy5lbmNvZGVIVE1MICA9IGVuY29kZS5IVE1MO1xuXG5leHBvcnRzLmRlY29kZVhNTCA9XG5leHBvcnRzLmRlY29kZVhNTFN0cmljdCA9IGRlY29kZS5YTUw7XG5cbmV4cG9ydHMuZGVjb2RlSFRNTDQgPVxuZXhwb3J0cy5kZWNvZGVIVE1MNSA9XG5leHBvcnRzLmRlY29kZUhUTUwgPSBkZWNvZGUuSFRNTDtcblxuZXhwb3J0cy5kZWNvZGVIVE1MNFN0cmljdCA9XG5leHBvcnRzLmRlY29kZUhUTUw1U3RyaWN0ID1cbmV4cG9ydHMuZGVjb2RlSFRNTFN0cmljdCA9IGRlY29kZS5IVE1MU3RyaWN0O1xuXG5leHBvcnRzLmVzY2FwZSA9IGVuY29kZS5lc2NhcGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGludmVyc2VYTUwgPSBnZXRJbnZlcnNlT2JqKHJlcXVpcmUoXCIuLi9tYXBzL3htbC5qc29uXCIpKSxcbiAgICB4bWxSZXBsYWNlciA9IGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlWE1MKTtcblxuZXhwb3J0cy5YTUwgPSBnZXRJbnZlcnNlKGludmVyc2VYTUwsIHhtbFJlcGxhY2VyKTtcblxudmFyIGludmVyc2VIVE1MID0gZ2V0SW52ZXJzZU9iaihyZXF1aXJlKFwiLi4vbWFwcy9lbnRpdGllcy5qc29uXCIpKSxcbiAgICBodG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZUhUTUwpO1xuXG5leHBvcnRzLkhUTUwgPSBnZXRJbnZlcnNlKGludmVyc2VIVE1MLCBodG1sUmVwbGFjZXIpO1xuXG5mdW5jdGlvbiBnZXRJbnZlcnNlT2JqKG9iail7XG5cdHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24oaW52ZXJzZSwgbmFtZSl7XG5cdFx0aW52ZXJzZVtvYmpbbmFtZV1dID0gXCImXCIgKyBuYW1lICsgXCI7XCI7XG5cdFx0cmV0dXJuIGludmVyc2U7XG5cdH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2Upe1xuXHR2YXIgc2luZ2xlID0gW10sXG5cdCAgICBtdWx0aXBsZSA9IFtdO1xuXG5cdE9iamVjdC5rZXlzKGludmVyc2UpLmZvckVhY2goZnVuY3Rpb24oayl7XG5cdFx0aWYoay5sZW5ndGggPT09IDEpe1xuXHRcdFx0c2luZ2xlLnB1c2goXCJcXFxcXCIgKyBrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bXVsdGlwbGUucHVzaChrKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vVE9ETyBhZGQgcmFuZ2VzXG5cdG11bHRpcGxlLnVuc2hpZnQoXCJbXCIgKyBzaW5nbGUuam9pbihcIlwiKSArIFwiXVwiKTtcblxuXHRyZXR1cm4gbmV3IFJlZ0V4cChtdWx0aXBsZS5qb2luKFwifFwiKSwgXCJnXCIpO1xufVxuXG52YXIgcmVfbm9uQVNDSUkgPSAvW15cXDAtXFx4N0ZdL2csXG4gICAgcmVfYXN0cmFsU3ltYm9scyA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2c7XG5cbmZ1bmN0aW9uIHNpbmdsZUNoYXJSZXBsYWNlcihjKXtcblx0cmV0dXJuIFwiJiN4XCIgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkgKyBcIjtcIjtcbn1cblxuZnVuY3Rpb24gYXN0cmFsUmVwbGFjZXIoYyl7XG5cdC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG5cdHZhciBoaWdoID0gYy5jaGFyQ29kZUF0KDApO1xuXHR2YXIgbG93ICA9IGMuY2hhckNvZGVBdCgxKTtcblx0dmFyIGNvZGVQb2ludCA9IChoaWdoIC0gMHhEODAwKSAqIDB4NDAwICsgbG93IC0gMHhEQzAwICsgMHgxMDAwMDtcblx0cmV0dXJuIFwiJiN4XCIgKyBjb2RlUG9pbnQudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkgKyBcIjtcIjtcbn1cblxuZnVuY3Rpb24gZ2V0SW52ZXJzZShpbnZlcnNlLCByZSl7XG5cdGZ1bmN0aW9uIGZ1bmMobmFtZSl7XG5cdFx0cmV0dXJuIGludmVyc2VbbmFtZV07XG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24oZGF0YSl7XG5cdFx0cmV0dXJuIGRhdGFcblx0XHRcdFx0LnJlcGxhY2UocmUsIGZ1bmMpXG5cdFx0XHRcdC5yZXBsYWNlKHJlX2FzdHJhbFN5bWJvbHMsIGFzdHJhbFJlcGxhY2VyKVxuXHRcdFx0XHQucmVwbGFjZShyZV9ub25BU0NJSSwgc2luZ2xlQ2hhclJlcGxhY2VyKTtcblx0fTtcbn1cblxudmFyIHJlX3htbENoYXJzID0gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2VYTUwpO1xuXG5mdW5jdGlvbiBlc2NhcGVYTUwoZGF0YSl7XG5cdHJldHVybiBkYXRhXG5cdFx0XHQucmVwbGFjZShyZV94bWxDaGFycywgc2luZ2xlQ2hhclJlcGxhY2VyKVxuXHRcdFx0LnJlcGxhY2UocmVfYXN0cmFsU3ltYm9scywgYXN0cmFsUmVwbGFjZXIpXG5cdFx0XHQucmVwbGFjZShyZV9ub25BU0NJSSwgc2luZ2xlQ2hhclJlcGxhY2VyKTtcbn1cblxuZXhwb3J0cy5lc2NhcGUgPSBlc2NhcGVYTUw7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2VuY29kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhbXBcIjogXCImXCIsXG5cdFwiYXBvc1wiOiBcIidcIixcblx0XCJndFwiOiBcIj5cIixcblx0XCJsdFwiOiBcIjxcIixcblx0XCJxdW90XCI6IFwiXFxcIlwiXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMveG1sLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQWFjdXRlXCI6IFwiw4FcIixcblx0XCJhYWN1dGVcIjogXCLDoVwiLFxuXHRcIkFicmV2ZVwiOiBcIsSCXCIsXG5cdFwiYWJyZXZlXCI6IFwixINcIixcblx0XCJhY1wiOiBcIuKIvlwiLFxuXHRcImFjZFwiOiBcIuKIv1wiLFxuXHRcImFjRVwiOiBcIuKIvsyzXCIsXG5cdFwiQWNpcmNcIjogXCLDglwiLFxuXHRcImFjaXJjXCI6IFwiw6JcIixcblx0XCJhY3V0ZVwiOiBcIsK0XCIsXG5cdFwiQWN5XCI6IFwi0JBcIixcblx0XCJhY3lcIjogXCLQsFwiLFxuXHRcIkFFbGlnXCI6IFwiw4ZcIixcblx0XCJhZWxpZ1wiOiBcIsOmXCIsXG5cdFwiYWZcIjogXCLigaFcIixcblx0XCJBZnJcIjogXCLwnZSEXCIsXG5cdFwiYWZyXCI6IFwi8J2UnlwiLFxuXHRcIkFncmF2ZVwiOiBcIsOAXCIsXG5cdFwiYWdyYXZlXCI6IFwiw6BcIixcblx0XCJhbGVmc3ltXCI6IFwi4oS1XCIsXG5cdFwiYWxlcGhcIjogXCLihLVcIixcblx0XCJBbHBoYVwiOiBcIs6RXCIsXG5cdFwiYWxwaGFcIjogXCLOsVwiLFxuXHRcIkFtYWNyXCI6IFwixIBcIixcblx0XCJhbWFjclwiOiBcIsSBXCIsXG5cdFwiYW1hbGdcIjogXCLiqL9cIixcblx0XCJhbXBcIjogXCImXCIsXG5cdFwiQU1QXCI6IFwiJlwiLFxuXHRcImFuZGFuZFwiOiBcIuKplVwiLFxuXHRcIkFuZFwiOiBcIuKpk1wiLFxuXHRcImFuZFwiOiBcIuKIp1wiLFxuXHRcImFuZGRcIjogXCLiqZxcIixcblx0XCJhbmRzbG9wZVwiOiBcIuKpmFwiLFxuXHRcImFuZHZcIjogXCLiqZpcIixcblx0XCJhbmdcIjogXCLiiKBcIixcblx0XCJhbmdlXCI6IFwi4qakXCIsXG5cdFwiYW5nbGVcIjogXCLiiKBcIixcblx0XCJhbmdtc2RhYVwiOiBcIuKmqFwiLFxuXHRcImFuZ21zZGFiXCI6IFwi4qapXCIsXG5cdFwiYW5nbXNkYWNcIjogXCLipqpcIixcblx0XCJhbmdtc2RhZFwiOiBcIuKmq1wiLFxuXHRcImFuZ21zZGFlXCI6IFwi4qasXCIsXG5cdFwiYW5nbXNkYWZcIjogXCLipq1cIixcblx0XCJhbmdtc2RhZ1wiOiBcIuKmrlwiLFxuXHRcImFuZ21zZGFoXCI6IFwi4qavXCIsXG5cdFwiYW5nbXNkXCI6IFwi4oihXCIsXG5cdFwiYW5ncnRcIjogXCLiiJ9cIixcblx0XCJhbmdydHZiXCI6IFwi4oq+XCIsXG5cdFwiYW5ncnR2YmRcIjogXCLipp1cIixcblx0XCJhbmdzcGhcIjogXCLiiKJcIixcblx0XCJhbmdzdFwiOiBcIsOFXCIsXG5cdFwiYW5nemFyclwiOiBcIuKNvFwiLFxuXHRcIkFvZ29uXCI6IFwixIRcIixcblx0XCJhb2dvblwiOiBcIsSFXCIsXG5cdFwiQW9wZlwiOiBcIvCdlLhcIixcblx0XCJhb3BmXCI6IFwi8J2VklwiLFxuXHRcImFwYWNpclwiOiBcIuKpr1wiLFxuXHRcImFwXCI6IFwi4omIXCIsXG5cdFwiYXBFXCI6IFwi4qmwXCIsXG5cdFwiYXBlXCI6IFwi4omKXCIsXG5cdFwiYXBpZFwiOiBcIuKJi1wiLFxuXHRcImFwb3NcIjogXCInXCIsXG5cdFwiQXBwbHlGdW5jdGlvblwiOiBcIuKBoVwiLFxuXHRcImFwcHJveFwiOiBcIuKJiFwiLFxuXHRcImFwcHJveGVxXCI6IFwi4omKXCIsXG5cdFwiQXJpbmdcIjogXCLDhVwiLFxuXHRcImFyaW5nXCI6IFwiw6VcIixcblx0XCJBc2NyXCI6IFwi8J2SnFwiLFxuXHRcImFzY3JcIjogXCLwnZK2XCIsXG5cdFwiQXNzaWduXCI6IFwi4omUXCIsXG5cdFwiYXN0XCI6IFwiKlwiLFxuXHRcImFzeW1wXCI6IFwi4omIXCIsXG5cdFwiYXN5bXBlcVwiOiBcIuKJjVwiLFxuXHRcIkF0aWxkZVwiOiBcIsODXCIsXG5cdFwiYXRpbGRlXCI6IFwiw6NcIixcblx0XCJBdW1sXCI6IFwiw4RcIixcblx0XCJhdW1sXCI6IFwiw6RcIixcblx0XCJhd2NvbmludFwiOiBcIuKIs1wiLFxuXHRcImF3aW50XCI6IFwi4qiRXCIsXG5cdFwiYmFja2NvbmdcIjogXCLiiYxcIixcblx0XCJiYWNrZXBzaWxvblwiOiBcIs+2XCIsXG5cdFwiYmFja3ByaW1lXCI6IFwi4oC1XCIsXG5cdFwiYmFja3NpbVwiOiBcIuKIvVwiLFxuXHRcImJhY2tzaW1lcVwiOiBcIuKLjVwiLFxuXHRcIkJhY2tzbGFzaFwiOiBcIuKIllwiLFxuXHRcIkJhcnZcIjogXCLiq6dcIixcblx0XCJiYXJ2ZWVcIjogXCLiir1cIixcblx0XCJiYXJ3ZWRcIjogXCLijIVcIixcblx0XCJCYXJ3ZWRcIjogXCLijIZcIixcblx0XCJiYXJ3ZWRnZVwiOiBcIuKMhVwiLFxuXHRcImJicmtcIjogXCLijrVcIixcblx0XCJiYnJrdGJya1wiOiBcIuKOtlwiLFxuXHRcImJjb25nXCI6IFwi4omMXCIsXG5cdFwiQmN5XCI6IFwi0JFcIixcblx0XCJiY3lcIjogXCLQsVwiLFxuXHRcImJkcXVvXCI6IFwi4oCeXCIsXG5cdFwiYmVjYXVzXCI6IFwi4oi1XCIsXG5cdFwiYmVjYXVzZVwiOiBcIuKItVwiLFxuXHRcIkJlY2F1c2VcIjogXCLiiLVcIixcblx0XCJiZW1wdHl2XCI6IFwi4qawXCIsXG5cdFwiYmVwc2lcIjogXCLPtlwiLFxuXHRcImJlcm5vdVwiOiBcIuKErFwiLFxuXHRcIkJlcm5vdWxsaXNcIjogXCLihKxcIixcblx0XCJCZXRhXCI6IFwizpJcIixcblx0XCJiZXRhXCI6IFwizrJcIixcblx0XCJiZXRoXCI6IFwi4oS2XCIsXG5cdFwiYmV0d2VlblwiOiBcIuKJrFwiLFxuXHRcIkJmclwiOiBcIvCdlIVcIixcblx0XCJiZnJcIjogXCLwnZSfXCIsXG5cdFwiYmlnY2FwXCI6IFwi4ouCXCIsXG5cdFwiYmlnY2lyY1wiOiBcIuKXr1wiLFxuXHRcImJpZ2N1cFwiOiBcIuKLg1wiLFxuXHRcImJpZ29kb3RcIjogXCLiqIBcIixcblx0XCJiaWdvcGx1c1wiOiBcIuKogVwiLFxuXHRcImJpZ290aW1lc1wiOiBcIuKoglwiLFxuXHRcImJpZ3NxY3VwXCI6IFwi4qiGXCIsXG5cdFwiYmlnc3RhclwiOiBcIuKYhVwiLFxuXHRcImJpZ3RyaWFuZ2xlZG93blwiOiBcIuKWvVwiLFxuXHRcImJpZ3RyaWFuZ2xldXBcIjogXCLilrNcIixcblx0XCJiaWd1cGx1c1wiOiBcIuKohFwiLFxuXHRcImJpZ3ZlZVwiOiBcIuKLgVwiLFxuXHRcImJpZ3dlZGdlXCI6IFwi4ouAXCIsXG5cdFwiYmthcm93XCI6IFwi4qSNXCIsXG5cdFwiYmxhY2tsb3plbmdlXCI6IFwi4qerXCIsXG5cdFwiYmxhY2tzcXVhcmVcIjogXCLilqpcIixcblx0XCJibGFja3RyaWFuZ2xlXCI6IFwi4pa0XCIsXG5cdFwiYmxhY2t0cmlhbmdsZWRvd25cIjogXCLilr5cIixcblx0XCJibGFja3RyaWFuZ2xlbGVmdFwiOiBcIuKXglwiLFxuXHRcImJsYWNrdHJpYW5nbGVyaWdodFwiOiBcIuKWuFwiLFxuXHRcImJsYW5rXCI6IFwi4pCjXCIsXG5cdFwiYmxrMTJcIjogXCLilpJcIixcblx0XCJibGsxNFwiOiBcIuKWkVwiLFxuXHRcImJsazM0XCI6IFwi4paTXCIsXG5cdFwiYmxvY2tcIjogXCLilohcIixcblx0XCJibmVcIjogXCI94oOlXCIsXG5cdFwiYm5lcXVpdlwiOiBcIuKJoeKDpVwiLFxuXHRcImJOb3RcIjogXCLiq61cIixcblx0XCJibm90XCI6IFwi4oyQXCIsXG5cdFwiQm9wZlwiOiBcIvCdlLlcIixcblx0XCJib3BmXCI6IFwi8J2Vk1wiLFxuXHRcImJvdFwiOiBcIuKKpVwiLFxuXHRcImJvdHRvbVwiOiBcIuKKpVwiLFxuXHRcImJvd3RpZVwiOiBcIuKLiFwiLFxuXHRcImJveGJveFwiOiBcIuKniVwiLFxuXHRcImJveGRsXCI6IFwi4pSQXCIsXG5cdFwiYm94ZExcIjogXCLilZVcIixcblx0XCJib3hEbFwiOiBcIuKVllwiLFxuXHRcImJveERMXCI6IFwi4pWXXCIsXG5cdFwiYm94ZHJcIjogXCLilIxcIixcblx0XCJib3hkUlwiOiBcIuKVklwiLFxuXHRcImJveERyXCI6IFwi4pWTXCIsXG5cdFwiYm94RFJcIjogXCLilZRcIixcblx0XCJib3hoXCI6IFwi4pSAXCIsXG5cdFwiYm94SFwiOiBcIuKVkFwiLFxuXHRcImJveGhkXCI6IFwi4pSsXCIsXG5cdFwiYm94SGRcIjogXCLilaRcIixcblx0XCJib3hoRFwiOiBcIuKVpVwiLFxuXHRcImJveEhEXCI6IFwi4pWmXCIsXG5cdFwiYm94aHVcIjogXCLilLRcIixcblx0XCJib3hIdVwiOiBcIuKVp1wiLFxuXHRcImJveGhVXCI6IFwi4pWoXCIsXG5cdFwiYm94SFVcIjogXCLilalcIixcblx0XCJib3htaW51c1wiOiBcIuKKn1wiLFxuXHRcImJveHBsdXNcIjogXCLiip5cIixcblx0XCJib3h0aW1lc1wiOiBcIuKKoFwiLFxuXHRcImJveHVsXCI6IFwi4pSYXCIsXG5cdFwiYm94dUxcIjogXCLilZtcIixcblx0XCJib3hVbFwiOiBcIuKVnFwiLFxuXHRcImJveFVMXCI6IFwi4pWdXCIsXG5cdFwiYm94dXJcIjogXCLilJRcIixcblx0XCJib3h1UlwiOiBcIuKVmFwiLFxuXHRcImJveFVyXCI6IFwi4pWZXCIsXG5cdFwiYm94VVJcIjogXCLilZpcIixcblx0XCJib3h2XCI6IFwi4pSCXCIsXG5cdFwiYm94VlwiOiBcIuKVkVwiLFxuXHRcImJveHZoXCI6IFwi4pS8XCIsXG5cdFwiYm94dkhcIjogXCLilapcIixcblx0XCJib3hWaFwiOiBcIuKVq1wiLFxuXHRcImJveFZIXCI6IFwi4pWsXCIsXG5cdFwiYm94dmxcIjogXCLilKRcIixcblx0XCJib3h2TFwiOiBcIuKVoVwiLFxuXHRcImJveFZsXCI6IFwi4pWiXCIsXG5cdFwiYm94VkxcIjogXCLilaNcIixcblx0XCJib3h2clwiOiBcIuKUnFwiLFxuXHRcImJveHZSXCI6IFwi4pWeXCIsXG5cdFwiYm94VnJcIjogXCLilZ9cIixcblx0XCJib3hWUlwiOiBcIuKVoFwiLFxuXHRcImJwcmltZVwiOiBcIuKAtVwiLFxuXHRcImJyZXZlXCI6IFwiy5hcIixcblx0XCJCcmV2ZVwiOiBcIsuYXCIsXG5cdFwiYnJ2YmFyXCI6IFwiwqZcIixcblx0XCJic2NyXCI6IFwi8J2St1wiLFxuXHRcIkJzY3JcIjogXCLihKxcIixcblx0XCJic2VtaVwiOiBcIuKBj1wiLFxuXHRcImJzaW1cIjogXCLiiL1cIixcblx0XCJic2ltZVwiOiBcIuKLjVwiLFxuXHRcImJzb2xiXCI6IFwi4qeFXCIsXG5cdFwiYnNvbFwiOiBcIlxcXFxcIixcblx0XCJic29saHN1YlwiOiBcIuKfiFwiLFxuXHRcImJ1bGxcIjogXCLigKJcIixcblx0XCJidWxsZXRcIjogXCLigKJcIixcblx0XCJidW1wXCI6IFwi4omOXCIsXG5cdFwiYnVtcEVcIjogXCLiqq5cIixcblx0XCJidW1wZVwiOiBcIuKJj1wiLFxuXHRcIkJ1bXBlcVwiOiBcIuKJjlwiLFxuXHRcImJ1bXBlcVwiOiBcIuKJj1wiLFxuXHRcIkNhY3V0ZVwiOiBcIsSGXCIsXG5cdFwiY2FjdXRlXCI6IFwixIdcIixcblx0XCJjYXBhbmRcIjogXCLiqYRcIixcblx0XCJjYXBicmN1cFwiOiBcIuKpiVwiLFxuXHRcImNhcGNhcFwiOiBcIuKpi1wiLFxuXHRcImNhcFwiOiBcIuKIqVwiLFxuXHRcIkNhcFwiOiBcIuKLklwiLFxuXHRcImNhcGN1cFwiOiBcIuKph1wiLFxuXHRcImNhcGRvdFwiOiBcIuKpgFwiLFxuXHRcIkNhcGl0YWxEaWZmZXJlbnRpYWxEXCI6IFwi4oWFXCIsXG5cdFwiY2Fwc1wiOiBcIuKIqe+4gFwiLFxuXHRcImNhcmV0XCI6IFwi4oGBXCIsXG5cdFwiY2Fyb25cIjogXCLLh1wiLFxuXHRcIkNheWxleXNcIjogXCLihK1cIixcblx0XCJjY2Fwc1wiOiBcIuKpjVwiLFxuXHRcIkNjYXJvblwiOiBcIsSMXCIsXG5cdFwiY2Nhcm9uXCI6IFwixI1cIixcblx0XCJDY2VkaWxcIjogXCLDh1wiLFxuXHRcImNjZWRpbFwiOiBcIsOnXCIsXG5cdFwiQ2NpcmNcIjogXCLEiFwiLFxuXHRcImNjaXJjXCI6IFwixIlcIixcblx0XCJDY29uaW50XCI6IFwi4oiwXCIsXG5cdFwiY2N1cHNcIjogXCLiqYxcIixcblx0XCJjY3Vwc3NtXCI6IFwi4qmQXCIsXG5cdFwiQ2RvdFwiOiBcIsSKXCIsXG5cdFwiY2RvdFwiOiBcIsSLXCIsXG5cdFwiY2VkaWxcIjogXCLCuFwiLFxuXHRcIkNlZGlsbGFcIjogXCLCuFwiLFxuXHRcImNlbXB0eXZcIjogXCLiprJcIixcblx0XCJjZW50XCI6IFwiwqJcIixcblx0XCJjZW50ZXJkb3RcIjogXCLCt1wiLFxuXHRcIkNlbnRlckRvdFwiOiBcIsK3XCIsXG5cdFwiY2ZyXCI6IFwi8J2UoFwiLFxuXHRcIkNmclwiOiBcIuKErVwiLFxuXHRcIkNIY3lcIjogXCLQp1wiLFxuXHRcImNoY3lcIjogXCLRh1wiLFxuXHRcImNoZWNrXCI6IFwi4pyTXCIsXG5cdFwiY2hlY2ttYXJrXCI6IFwi4pyTXCIsXG5cdFwiQ2hpXCI6IFwizqdcIixcblx0XCJjaGlcIjogXCLPh1wiLFxuXHRcImNpcmNcIjogXCLLhlwiLFxuXHRcImNpcmNlcVwiOiBcIuKJl1wiLFxuXHRcImNpcmNsZWFycm93bGVmdFwiOiBcIuKGulwiLFxuXHRcImNpcmNsZWFycm93cmlnaHRcIjogXCLihrtcIixcblx0XCJjaXJjbGVkYXN0XCI6IFwi4oqbXCIsXG5cdFwiY2lyY2xlZGNpcmNcIjogXCLiippcIixcblx0XCJjaXJjbGVkZGFzaFwiOiBcIuKKnVwiLFxuXHRcIkNpcmNsZURvdFwiOiBcIuKKmVwiLFxuXHRcImNpcmNsZWRSXCI6IFwiwq5cIixcblx0XCJjaXJjbGVkU1wiOiBcIuKTiFwiLFxuXHRcIkNpcmNsZU1pbnVzXCI6IFwi4oqWXCIsXG5cdFwiQ2lyY2xlUGx1c1wiOiBcIuKKlVwiLFxuXHRcIkNpcmNsZVRpbWVzXCI6IFwi4oqXXCIsXG5cdFwiY2lyXCI6IFwi4peLXCIsXG5cdFwiY2lyRVwiOiBcIuKng1wiLFxuXHRcImNpcmVcIjogXCLiiZdcIixcblx0XCJjaXJmbmludFwiOiBcIuKokFwiLFxuXHRcImNpcm1pZFwiOiBcIuKrr1wiLFxuXHRcImNpcnNjaXJcIjogXCLip4JcIixcblx0XCJDbG9ja3dpc2VDb250b3VySW50ZWdyYWxcIjogXCLiiLJcIixcblx0XCJDbG9zZUN1cmx5RG91YmxlUXVvdGVcIjogXCLigJ1cIixcblx0XCJDbG9zZUN1cmx5UXVvdGVcIjogXCLigJlcIixcblx0XCJjbHVic1wiOiBcIuKZo1wiLFxuXHRcImNsdWJzdWl0XCI6IFwi4pmjXCIsXG5cdFwiY29sb25cIjogXCI6XCIsXG5cdFwiQ29sb25cIjogXCLiiLdcIixcblx0XCJDb2xvbmVcIjogXCLiqbRcIixcblx0XCJjb2xvbmVcIjogXCLiiZRcIixcblx0XCJjb2xvbmVxXCI6IFwi4omUXCIsXG5cdFwiY29tbWFcIjogXCIsXCIsXG5cdFwiY29tbWF0XCI6IFwiQFwiLFxuXHRcImNvbXBcIjogXCLiiIFcIixcblx0XCJjb21wZm5cIjogXCLiiJhcIixcblx0XCJjb21wbGVtZW50XCI6IFwi4oiBXCIsXG5cdFwiY29tcGxleGVzXCI6IFwi4oSCXCIsXG5cdFwiY29uZ1wiOiBcIuKJhVwiLFxuXHRcImNvbmdkb3RcIjogXCLiqa1cIixcblx0XCJDb25ncnVlbnRcIjogXCLiiaFcIixcblx0XCJjb25pbnRcIjogXCLiiK5cIixcblx0XCJDb25pbnRcIjogXCLiiK9cIixcblx0XCJDb250b3VySW50ZWdyYWxcIjogXCLiiK5cIixcblx0XCJjb3BmXCI6IFwi8J2VlFwiLFxuXHRcIkNvcGZcIjogXCLihIJcIixcblx0XCJjb3Byb2RcIjogXCLiiJBcIixcblx0XCJDb3Byb2R1Y3RcIjogXCLiiJBcIixcblx0XCJjb3B5XCI6IFwiwqlcIixcblx0XCJDT1BZXCI6IFwiwqlcIixcblx0XCJjb3B5c3JcIjogXCLihJdcIixcblx0XCJDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsXCI6IFwi4oizXCIsXG5cdFwiY3JhcnJcIjogXCLihrVcIixcblx0XCJjcm9zc1wiOiBcIuKcl1wiLFxuXHRcIkNyb3NzXCI6IFwi4qivXCIsXG5cdFwiQ3NjclwiOiBcIvCdkp5cIixcblx0XCJjc2NyXCI6IFwi8J2SuFwiLFxuXHRcImNzdWJcIjogXCLiq49cIixcblx0XCJjc3ViZVwiOiBcIuKrkVwiLFxuXHRcImNzdXBcIjogXCLiq5BcIixcblx0XCJjc3VwZVwiOiBcIuKrklwiLFxuXHRcImN0ZG90XCI6IFwi4ouvXCIsXG5cdFwiY3VkYXJybFwiOiBcIuKkuFwiLFxuXHRcImN1ZGFycnJcIjogXCLipLVcIixcblx0XCJjdWVwclwiOiBcIuKLnlwiLFxuXHRcImN1ZXNjXCI6IFwi4oufXCIsXG5cdFwiY3VsYXJyXCI6IFwi4oa2XCIsXG5cdFwiY3VsYXJycFwiOiBcIuKkvVwiLFxuXHRcImN1cGJyY2FwXCI6IFwi4qmIXCIsXG5cdFwiY3VwY2FwXCI6IFwi4qmGXCIsXG5cdFwiQ3VwQ2FwXCI6IFwi4omNXCIsXG5cdFwiY3VwXCI6IFwi4oiqXCIsXG5cdFwiQ3VwXCI6IFwi4ouTXCIsXG5cdFwiY3VwY3VwXCI6IFwi4qmKXCIsXG5cdFwiY3VwZG90XCI6IFwi4oqNXCIsXG5cdFwiY3Vwb3JcIjogXCLiqYVcIixcblx0XCJjdXBzXCI6IFwi4oiq77iAXCIsXG5cdFwiY3VyYXJyXCI6IFwi4oa3XCIsXG5cdFwiY3VyYXJybVwiOiBcIuKkvFwiLFxuXHRcImN1cmx5ZXFwcmVjXCI6IFwi4oueXCIsXG5cdFwiY3VybHllcXN1Y2NcIjogXCLii59cIixcblx0XCJjdXJseXZlZVwiOiBcIuKLjlwiLFxuXHRcImN1cmx5d2VkZ2VcIjogXCLii49cIixcblx0XCJjdXJyZW5cIjogXCLCpFwiLFxuXHRcImN1cnZlYXJyb3dsZWZ0XCI6IFwi4oa2XCIsXG5cdFwiY3VydmVhcnJvd3JpZ2h0XCI6IFwi4oa3XCIsXG5cdFwiY3V2ZWVcIjogXCLii45cIixcblx0XCJjdXdlZFwiOiBcIuKLj1wiLFxuXHRcImN3Y29uaW50XCI6IFwi4oiyXCIsXG5cdFwiY3dpbnRcIjogXCLiiLFcIixcblx0XCJjeWxjdHlcIjogXCLijK1cIixcblx0XCJkYWdnZXJcIjogXCLigKBcIixcblx0XCJEYWdnZXJcIjogXCLigKFcIixcblx0XCJkYWxldGhcIjogXCLihLhcIixcblx0XCJkYXJyXCI6IFwi4oaTXCIsXG5cdFwiRGFyclwiOiBcIuKGoVwiLFxuXHRcImRBcnJcIjogXCLih5NcIixcblx0XCJkYXNoXCI6IFwi4oCQXCIsXG5cdFwiRGFzaHZcIjogXCLiq6RcIixcblx0XCJkYXNodlwiOiBcIuKKo1wiLFxuXHRcImRia2Fyb3dcIjogXCLipI9cIixcblx0XCJkYmxhY1wiOiBcIsudXCIsXG5cdFwiRGNhcm9uXCI6IFwixI5cIixcblx0XCJkY2Fyb25cIjogXCLEj1wiLFxuXHRcIkRjeVwiOiBcItCUXCIsXG5cdFwiZGN5XCI6IFwi0LRcIixcblx0XCJkZGFnZ2VyXCI6IFwi4oChXCIsXG5cdFwiZGRhcnJcIjogXCLih4pcIixcblx0XCJERFwiOiBcIuKFhVwiLFxuXHRcImRkXCI6IFwi4oWGXCIsXG5cdFwiRERvdHJhaGRcIjogXCLipJFcIixcblx0XCJkZG90c2VxXCI6IFwi4qm3XCIsXG5cdFwiZGVnXCI6IFwiwrBcIixcblx0XCJEZWxcIjogXCLiiIdcIixcblx0XCJEZWx0YVwiOiBcIs6UXCIsXG5cdFwiZGVsdGFcIjogXCLOtFwiLFxuXHRcImRlbXB0eXZcIjogXCLiprFcIixcblx0XCJkZmlzaHRcIjogXCLipb9cIixcblx0XCJEZnJcIjogXCLwnZSHXCIsXG5cdFwiZGZyXCI6IFwi8J2UoVwiLFxuXHRcImRIYXJcIjogXCLipaVcIixcblx0XCJkaGFybFwiOiBcIuKHg1wiLFxuXHRcImRoYXJyXCI6IFwi4oeCXCIsXG5cdFwiRGlhY3JpdGljYWxBY3V0ZVwiOiBcIsK0XCIsXG5cdFwiRGlhY3JpdGljYWxEb3RcIjogXCLLmVwiLFxuXHRcIkRpYWNyaXRpY2FsRG91YmxlQWN1dGVcIjogXCLLnVwiLFxuXHRcIkRpYWNyaXRpY2FsR3JhdmVcIjogXCJgXCIsXG5cdFwiRGlhY3JpdGljYWxUaWxkZVwiOiBcIsucXCIsXG5cdFwiZGlhbVwiOiBcIuKLhFwiLFxuXHRcImRpYW1vbmRcIjogXCLii4RcIixcblx0XCJEaWFtb25kXCI6IFwi4ouEXCIsXG5cdFwiZGlhbW9uZHN1aXRcIjogXCLimaZcIixcblx0XCJkaWFtc1wiOiBcIuKZplwiLFxuXHRcImRpZVwiOiBcIsKoXCIsXG5cdFwiRGlmZmVyZW50aWFsRFwiOiBcIuKFhlwiLFxuXHRcImRpZ2FtbWFcIjogXCLPnVwiLFxuXHRcImRpc2luXCI6IFwi4ouyXCIsXG5cdFwiZGl2XCI6IFwiw7dcIixcblx0XCJkaXZpZGVcIjogXCLDt1wiLFxuXHRcImRpdmlkZW9udGltZXNcIjogXCLii4dcIixcblx0XCJkaXZvbnhcIjogXCLii4dcIixcblx0XCJESmN5XCI6IFwi0IJcIixcblx0XCJkamN5XCI6IFwi0ZJcIixcblx0XCJkbGNvcm5cIjogXCLijJ5cIixcblx0XCJkbGNyb3BcIjogXCLijI1cIixcblx0XCJkb2xsYXJcIjogXCIkXCIsXG5cdFwiRG9wZlwiOiBcIvCdlLtcIixcblx0XCJkb3BmXCI6IFwi8J2VlVwiLFxuXHRcIkRvdFwiOiBcIsKoXCIsXG5cdFwiZG90XCI6IFwiy5lcIixcblx0XCJEb3REb3RcIjogXCLig5xcIixcblx0XCJkb3RlcVwiOiBcIuKJkFwiLFxuXHRcImRvdGVxZG90XCI6IFwi4omRXCIsXG5cdFwiRG90RXF1YWxcIjogXCLiiZBcIixcblx0XCJkb3RtaW51c1wiOiBcIuKIuFwiLFxuXHRcImRvdHBsdXNcIjogXCLiiJRcIixcblx0XCJkb3RzcXVhcmVcIjogXCLiiqFcIixcblx0XCJkb3VibGViYXJ3ZWRnZVwiOiBcIuKMhlwiLFxuXHRcIkRvdWJsZUNvbnRvdXJJbnRlZ3JhbFwiOiBcIuKIr1wiLFxuXHRcIkRvdWJsZURvdFwiOiBcIsKoXCIsXG5cdFwiRG91YmxlRG93bkFycm93XCI6IFwi4oeTXCIsXG5cdFwiRG91YmxlTGVmdEFycm93XCI6IFwi4oeQXCIsXG5cdFwiRG91YmxlTGVmdFJpZ2h0QXJyb3dcIjogXCLih5RcIixcblx0XCJEb3VibGVMZWZ0VGVlXCI6IFwi4qukXCIsXG5cdFwiRG91YmxlTG9uZ0xlZnRBcnJvd1wiOiBcIuKfuFwiLFxuXHRcIkRvdWJsZUxvbmdMZWZ0UmlnaHRBcnJvd1wiOiBcIuKfulwiLFxuXHRcIkRvdWJsZUxvbmdSaWdodEFycm93XCI6IFwi4p+5XCIsXG5cdFwiRG91YmxlUmlnaHRBcnJvd1wiOiBcIuKHklwiLFxuXHRcIkRvdWJsZVJpZ2h0VGVlXCI6IFwi4oqoXCIsXG5cdFwiRG91YmxlVXBBcnJvd1wiOiBcIuKHkVwiLFxuXHRcIkRvdWJsZVVwRG93bkFycm93XCI6IFwi4oeVXCIsXG5cdFwiRG91YmxlVmVydGljYWxCYXJcIjogXCLiiKVcIixcblx0XCJEb3duQXJyb3dCYXJcIjogXCLipJNcIixcblx0XCJkb3duYXJyb3dcIjogXCLihpNcIixcblx0XCJEb3duQXJyb3dcIjogXCLihpNcIixcblx0XCJEb3duYXJyb3dcIjogXCLih5NcIixcblx0XCJEb3duQXJyb3dVcEFycm93XCI6IFwi4oe1XCIsXG5cdFwiRG93bkJyZXZlXCI6IFwizJFcIixcblx0XCJkb3duZG93bmFycm93c1wiOiBcIuKHilwiLFxuXHRcImRvd25oYXJwb29ubGVmdFwiOiBcIuKHg1wiLFxuXHRcImRvd25oYXJwb29ucmlnaHRcIjogXCLih4JcIixcblx0XCJEb3duTGVmdFJpZ2h0VmVjdG9yXCI6IFwi4qWQXCIsXG5cdFwiRG93bkxlZnRUZWVWZWN0b3JcIjogXCLipZ5cIixcblx0XCJEb3duTGVmdFZlY3RvckJhclwiOiBcIuKlllwiLFxuXHRcIkRvd25MZWZ0VmVjdG9yXCI6IFwi4oa9XCIsXG5cdFwiRG93blJpZ2h0VGVlVmVjdG9yXCI6IFwi4qWfXCIsXG5cdFwiRG93blJpZ2h0VmVjdG9yQmFyXCI6IFwi4qWXXCIsXG5cdFwiRG93blJpZ2h0VmVjdG9yXCI6IFwi4oeBXCIsXG5cdFwiRG93blRlZUFycm93XCI6IFwi4oanXCIsXG5cdFwiRG93blRlZVwiOiBcIuKKpFwiLFxuXHRcImRyYmthcm93XCI6IFwi4qSQXCIsXG5cdFwiZHJjb3JuXCI6IFwi4oyfXCIsXG5cdFwiZHJjcm9wXCI6IFwi4oyMXCIsXG5cdFwiRHNjclwiOiBcIvCdkp9cIixcblx0XCJkc2NyXCI6IFwi8J2SuVwiLFxuXHRcIkRTY3lcIjogXCLQhVwiLFxuXHRcImRzY3lcIjogXCLRlVwiLFxuXHRcImRzb2xcIjogXCLip7ZcIixcblx0XCJEc3Ryb2tcIjogXCLEkFwiLFxuXHRcImRzdHJva1wiOiBcIsSRXCIsXG5cdFwiZHRkb3RcIjogXCLii7FcIixcblx0XCJkdHJpXCI6IFwi4pa/XCIsXG5cdFwiZHRyaWZcIjogXCLilr5cIixcblx0XCJkdWFyclwiOiBcIuKHtVwiLFxuXHRcImR1aGFyXCI6IFwi4qWvXCIsXG5cdFwiZHdhbmdsZVwiOiBcIuKmplwiLFxuXHRcIkRaY3lcIjogXCLQj1wiLFxuXHRcImR6Y3lcIjogXCLRn1wiLFxuXHRcImR6aWdyYXJyXCI6IFwi4p+/XCIsXG5cdFwiRWFjdXRlXCI6IFwiw4lcIixcblx0XCJlYWN1dGVcIjogXCLDqVwiLFxuXHRcImVhc3RlclwiOiBcIuKprlwiLFxuXHRcIkVjYXJvblwiOiBcIsSaXCIsXG5cdFwiZWNhcm9uXCI6IFwixJtcIixcblx0XCJFY2lyY1wiOiBcIsOKXCIsXG5cdFwiZWNpcmNcIjogXCLDqlwiLFxuXHRcImVjaXJcIjogXCLiiZZcIixcblx0XCJlY29sb25cIjogXCLiiZVcIixcblx0XCJFY3lcIjogXCLQrVwiLFxuXHRcImVjeVwiOiBcItGNXCIsXG5cdFwiZUREb3RcIjogXCLiqbdcIixcblx0XCJFZG90XCI6IFwixJZcIixcblx0XCJlZG90XCI6IFwixJdcIixcblx0XCJlRG90XCI6IFwi4omRXCIsXG5cdFwiZWVcIjogXCLihYdcIixcblx0XCJlZkRvdFwiOiBcIuKJklwiLFxuXHRcIkVmclwiOiBcIvCdlIhcIixcblx0XCJlZnJcIjogXCLwnZSiXCIsXG5cdFwiZWdcIjogXCLiqppcIixcblx0XCJFZ3JhdmVcIjogXCLDiFwiLFxuXHRcImVncmF2ZVwiOiBcIsOoXCIsXG5cdFwiZWdzXCI6IFwi4qqWXCIsXG5cdFwiZWdzZG90XCI6IFwi4qqYXCIsXG5cdFwiZWxcIjogXCLiqplcIixcblx0XCJFbGVtZW50XCI6IFwi4oiIXCIsXG5cdFwiZWxpbnRlcnNcIjogXCLij6dcIixcblx0XCJlbGxcIjogXCLihJNcIixcblx0XCJlbHNcIjogXCLiqpVcIixcblx0XCJlbHNkb3RcIjogXCLiqpdcIixcblx0XCJFbWFjclwiOiBcIsSSXCIsXG5cdFwiZW1hY3JcIjogXCLEk1wiLFxuXHRcImVtcHR5XCI6IFwi4oiFXCIsXG5cdFwiZW1wdHlzZXRcIjogXCLiiIVcIixcblx0XCJFbXB0eVNtYWxsU3F1YXJlXCI6IFwi4pe7XCIsXG5cdFwiZW1wdHl2XCI6IFwi4oiFXCIsXG5cdFwiRW1wdHlWZXJ5U21hbGxTcXVhcmVcIjogXCLilqtcIixcblx0XCJlbXNwMTNcIjogXCLigIRcIixcblx0XCJlbXNwMTRcIjogXCLigIVcIixcblx0XCJlbXNwXCI6IFwi4oCDXCIsXG5cdFwiRU5HXCI6IFwixYpcIixcblx0XCJlbmdcIjogXCLFi1wiLFxuXHRcImVuc3BcIjogXCLigIJcIixcblx0XCJFb2dvblwiOiBcIsSYXCIsXG5cdFwiZW9nb25cIjogXCLEmVwiLFxuXHRcIkVvcGZcIjogXCLwnZS8XCIsXG5cdFwiZW9wZlwiOiBcIvCdlZZcIixcblx0XCJlcGFyXCI6IFwi4ouVXCIsXG5cdFwiZXBhcnNsXCI6IFwi4qejXCIsXG5cdFwiZXBsdXNcIjogXCLiqbFcIixcblx0XCJlcHNpXCI6IFwizrVcIixcblx0XCJFcHNpbG9uXCI6IFwizpVcIixcblx0XCJlcHNpbG9uXCI6IFwizrVcIixcblx0XCJlcHNpdlwiOiBcIs+1XCIsXG5cdFwiZXFjaXJjXCI6IFwi4omWXCIsXG5cdFwiZXFjb2xvblwiOiBcIuKJlVwiLFxuXHRcImVxc2ltXCI6IFwi4omCXCIsXG5cdFwiZXFzbGFudGd0clwiOiBcIuKqllwiLFxuXHRcImVxc2xhbnRsZXNzXCI6IFwi4qqVXCIsXG5cdFwiRXF1YWxcIjogXCLiqbVcIixcblx0XCJlcXVhbHNcIjogXCI9XCIsXG5cdFwiRXF1YWxUaWxkZVwiOiBcIuKJglwiLFxuXHRcImVxdWVzdFwiOiBcIuKJn1wiLFxuXHRcIkVxdWlsaWJyaXVtXCI6IFwi4oeMXCIsXG5cdFwiZXF1aXZcIjogXCLiiaFcIixcblx0XCJlcXVpdkREXCI6IFwi4qm4XCIsXG5cdFwiZXF2cGFyc2xcIjogXCLip6VcIixcblx0XCJlcmFyclwiOiBcIuKlsVwiLFxuXHRcImVyRG90XCI6IFwi4omTXCIsXG5cdFwiZXNjclwiOiBcIuKEr1wiLFxuXHRcIkVzY3JcIjogXCLihLBcIixcblx0XCJlc2RvdFwiOiBcIuKJkFwiLFxuXHRcIkVzaW1cIjogXCLiqbNcIixcblx0XCJlc2ltXCI6IFwi4omCXCIsXG5cdFwiRXRhXCI6IFwizpdcIixcblx0XCJldGFcIjogXCLOt1wiLFxuXHRcIkVUSFwiOiBcIsOQXCIsXG5cdFwiZXRoXCI6IFwiw7BcIixcblx0XCJFdW1sXCI6IFwiw4tcIixcblx0XCJldW1sXCI6IFwiw6tcIixcblx0XCJldXJvXCI6IFwi4oKsXCIsXG5cdFwiZXhjbFwiOiBcIiFcIixcblx0XCJleGlzdFwiOiBcIuKIg1wiLFxuXHRcIkV4aXN0c1wiOiBcIuKIg1wiLFxuXHRcImV4cGVjdGF0aW9uXCI6IFwi4oSwXCIsXG5cdFwiZXhwb25lbnRpYWxlXCI6IFwi4oWHXCIsXG5cdFwiRXhwb25lbnRpYWxFXCI6IFwi4oWHXCIsXG5cdFwiZmFsbGluZ2RvdHNlcVwiOiBcIuKJklwiLFxuXHRcIkZjeVwiOiBcItCkXCIsXG5cdFwiZmN5XCI6IFwi0YRcIixcblx0XCJmZW1hbGVcIjogXCLimYBcIixcblx0XCJmZmlsaWdcIjogXCLvrINcIixcblx0XCJmZmxpZ1wiOiBcIu+sgFwiLFxuXHRcImZmbGxpZ1wiOiBcIu+shFwiLFxuXHRcIkZmclwiOiBcIvCdlIlcIixcblx0XCJmZnJcIjogXCLwnZSjXCIsXG5cdFwiZmlsaWdcIjogXCLvrIFcIixcblx0XCJGaWxsZWRTbWFsbFNxdWFyZVwiOiBcIuKXvFwiLFxuXHRcIkZpbGxlZFZlcnlTbWFsbFNxdWFyZVwiOiBcIuKWqlwiLFxuXHRcImZqbGlnXCI6IFwiZmpcIixcblx0XCJmbGF0XCI6IFwi4pmtXCIsXG5cdFwiZmxsaWdcIjogXCLvrIJcIixcblx0XCJmbHRuc1wiOiBcIuKWsVwiLFxuXHRcImZub2ZcIjogXCLGklwiLFxuXHRcIkZvcGZcIjogXCLwnZS9XCIsXG5cdFwiZm9wZlwiOiBcIvCdlZdcIixcblx0XCJmb3JhbGxcIjogXCLiiIBcIixcblx0XCJGb3JBbGxcIjogXCLiiIBcIixcblx0XCJmb3JrXCI6IFwi4ouUXCIsXG5cdFwiZm9ya3ZcIjogXCLiq5lcIixcblx0XCJGb3VyaWVydHJmXCI6IFwi4oSxXCIsXG5cdFwiZnBhcnRpbnRcIjogXCLiqI1cIixcblx0XCJmcmFjMTJcIjogXCLCvVwiLFxuXHRcImZyYWMxM1wiOiBcIuKFk1wiLFxuXHRcImZyYWMxNFwiOiBcIsK8XCIsXG5cdFwiZnJhYzE1XCI6IFwi4oWVXCIsXG5cdFwiZnJhYzE2XCI6IFwi4oWZXCIsXG5cdFwiZnJhYzE4XCI6IFwi4oWbXCIsXG5cdFwiZnJhYzIzXCI6IFwi4oWUXCIsXG5cdFwiZnJhYzI1XCI6IFwi4oWWXCIsXG5cdFwiZnJhYzM0XCI6IFwiwr5cIixcblx0XCJmcmFjMzVcIjogXCLihZdcIixcblx0XCJmcmFjMzhcIjogXCLihZxcIixcblx0XCJmcmFjNDVcIjogXCLihZhcIixcblx0XCJmcmFjNTZcIjogXCLihZpcIixcblx0XCJmcmFjNThcIjogXCLihZ1cIixcblx0XCJmcmFjNzhcIjogXCLihZ5cIixcblx0XCJmcmFzbFwiOiBcIuKBhFwiLFxuXHRcImZyb3duXCI6IFwi4oyiXCIsXG5cdFwiZnNjclwiOiBcIvCdkrtcIixcblx0XCJGc2NyXCI6IFwi4oSxXCIsXG5cdFwiZ2FjdXRlXCI6IFwix7VcIixcblx0XCJHYW1tYVwiOiBcIs6TXCIsXG5cdFwiZ2FtbWFcIjogXCLOs1wiLFxuXHRcIkdhbW1hZFwiOiBcIs+cXCIsXG5cdFwiZ2FtbWFkXCI6IFwiz51cIixcblx0XCJnYXBcIjogXCLiqoZcIixcblx0XCJHYnJldmVcIjogXCLEnlwiLFxuXHRcImdicmV2ZVwiOiBcIsSfXCIsXG5cdFwiR2NlZGlsXCI6IFwixKJcIixcblx0XCJHY2lyY1wiOiBcIsScXCIsXG5cdFwiZ2NpcmNcIjogXCLEnVwiLFxuXHRcIkdjeVwiOiBcItCTXCIsXG5cdFwiZ2N5XCI6IFwi0LNcIixcblx0XCJHZG90XCI6IFwixKBcIixcblx0XCJnZG90XCI6IFwixKFcIixcblx0XCJnZVwiOiBcIuKJpVwiLFxuXHRcImdFXCI6IFwi4omnXCIsXG5cdFwiZ0VsXCI6IFwi4qqMXCIsXG5cdFwiZ2VsXCI6IFwi4oubXCIsXG5cdFwiZ2VxXCI6IFwi4omlXCIsXG5cdFwiZ2VxcVwiOiBcIuKJp1wiLFxuXHRcImdlcXNsYW50XCI6IFwi4qm+XCIsXG5cdFwiZ2VzY2NcIjogXCLiqqlcIixcblx0XCJnZXNcIjogXCLiqb5cIixcblx0XCJnZXNkb3RcIjogXCLiqoBcIixcblx0XCJnZXNkb3RvXCI6IFwi4qqCXCIsXG5cdFwiZ2VzZG90b2xcIjogXCLiqoRcIixcblx0XCJnZXNsXCI6IFwi4oub77iAXCIsXG5cdFwiZ2VzbGVzXCI6IFwi4qqUXCIsXG5cdFwiR2ZyXCI6IFwi8J2UilwiLFxuXHRcImdmclwiOiBcIvCdlKRcIixcblx0XCJnZ1wiOiBcIuKJq1wiLFxuXHRcIkdnXCI6IFwi4ouZXCIsXG5cdFwiZ2dnXCI6IFwi4ouZXCIsXG5cdFwiZ2ltZWxcIjogXCLihLdcIixcblx0XCJHSmN5XCI6IFwi0INcIixcblx0XCJnamN5XCI6IFwi0ZNcIixcblx0XCJnbGFcIjogXCLiqqVcIixcblx0XCJnbFwiOiBcIuKJt1wiLFxuXHRcImdsRVwiOiBcIuKqklwiLFxuXHRcImdsalwiOiBcIuKqpFwiLFxuXHRcImduYXBcIjogXCLiqopcIixcblx0XCJnbmFwcHJveFwiOiBcIuKqilwiLFxuXHRcImduZVwiOiBcIuKqiFwiLFxuXHRcImduRVwiOiBcIuKJqVwiLFxuXHRcImduZXFcIjogXCLiqohcIixcblx0XCJnbmVxcVwiOiBcIuKJqVwiLFxuXHRcImduc2ltXCI6IFwi4ounXCIsXG5cdFwiR29wZlwiOiBcIvCdlL5cIixcblx0XCJnb3BmXCI6IFwi8J2VmFwiLFxuXHRcImdyYXZlXCI6IFwiYFwiLFxuXHRcIkdyZWF0ZXJFcXVhbFwiOiBcIuKJpVwiLFxuXHRcIkdyZWF0ZXJFcXVhbExlc3NcIjogXCLii5tcIixcblx0XCJHcmVhdGVyRnVsbEVxdWFsXCI6IFwi4omnXCIsXG5cdFwiR3JlYXRlckdyZWF0ZXJcIjogXCLiqqJcIixcblx0XCJHcmVhdGVyTGVzc1wiOiBcIuKJt1wiLFxuXHRcIkdyZWF0ZXJTbGFudEVxdWFsXCI6IFwi4qm+XCIsXG5cdFwiR3JlYXRlclRpbGRlXCI6IFwi4omzXCIsXG5cdFwiR3NjclwiOiBcIvCdkqJcIixcblx0XCJnc2NyXCI6IFwi4oSKXCIsXG5cdFwiZ3NpbVwiOiBcIuKJs1wiLFxuXHRcImdzaW1lXCI6IFwi4qqOXCIsXG5cdFwiZ3NpbWxcIjogXCLiqpBcIixcblx0XCJndGNjXCI6IFwi4qqnXCIsXG5cdFwiZ3RjaXJcIjogXCLiqbpcIixcblx0XCJndFwiOiBcIj5cIixcblx0XCJHVFwiOiBcIj5cIixcblx0XCJHdFwiOiBcIuKJq1wiLFxuXHRcImd0ZG90XCI6IFwi4ouXXCIsXG5cdFwiZ3RsUGFyXCI6IFwi4qaVXCIsXG5cdFwiZ3RxdWVzdFwiOiBcIuKpvFwiLFxuXHRcImd0cmFwcHJveFwiOiBcIuKqhlwiLFxuXHRcImd0cmFyclwiOiBcIuKluFwiLFxuXHRcImd0cmRvdFwiOiBcIuKLl1wiLFxuXHRcImd0cmVxbGVzc1wiOiBcIuKLm1wiLFxuXHRcImd0cmVxcWxlc3NcIjogXCLiqoxcIixcblx0XCJndHJsZXNzXCI6IFwi4om3XCIsXG5cdFwiZ3Ryc2ltXCI6IFwi4omzXCIsXG5cdFwiZ3ZlcnRuZXFxXCI6IFwi4omp77iAXCIsXG5cdFwiZ3ZuRVwiOiBcIuKJqe+4gFwiLFxuXHRcIkhhY2VrXCI6IFwiy4dcIixcblx0XCJoYWlyc3BcIjogXCLigIpcIixcblx0XCJoYWxmXCI6IFwiwr1cIixcblx0XCJoYW1pbHRcIjogXCLihItcIixcblx0XCJIQVJEY3lcIjogXCLQqlwiLFxuXHRcImhhcmRjeVwiOiBcItGKXCIsXG5cdFwiaGFycmNpclwiOiBcIuKliFwiLFxuXHRcImhhcnJcIjogXCLihpRcIixcblx0XCJoQXJyXCI6IFwi4oeUXCIsXG5cdFwiaGFycndcIjogXCLihq1cIixcblx0XCJIYXRcIjogXCJeXCIsXG5cdFwiaGJhclwiOiBcIuKEj1wiLFxuXHRcIkhjaXJjXCI6IFwixKRcIixcblx0XCJoY2lyY1wiOiBcIsSlXCIsXG5cdFwiaGVhcnRzXCI6IFwi4pmlXCIsXG5cdFwiaGVhcnRzdWl0XCI6IFwi4pmlXCIsXG5cdFwiaGVsbGlwXCI6IFwi4oCmXCIsXG5cdFwiaGVyY29uXCI6IFwi4oq5XCIsXG5cdFwiaGZyXCI6IFwi8J2UpVwiLFxuXHRcIkhmclwiOiBcIuKEjFwiLFxuXHRcIkhpbGJlcnRTcGFjZVwiOiBcIuKEi1wiLFxuXHRcImhrc2Vhcm93XCI6IFwi4qSlXCIsXG5cdFwiaGtzd2Fyb3dcIjogXCLipKZcIixcblx0XCJob2FyclwiOiBcIuKHv1wiLFxuXHRcImhvbXRodFwiOiBcIuKIu1wiLFxuXHRcImhvb2tsZWZ0YXJyb3dcIjogXCLihqlcIixcblx0XCJob29rcmlnaHRhcnJvd1wiOiBcIuKGqlwiLFxuXHRcImhvcGZcIjogXCLwnZWZXCIsXG5cdFwiSG9wZlwiOiBcIuKEjVwiLFxuXHRcImhvcmJhclwiOiBcIuKAlVwiLFxuXHRcIkhvcml6b250YWxMaW5lXCI6IFwi4pSAXCIsXG5cdFwiaHNjclwiOiBcIvCdkr1cIixcblx0XCJIc2NyXCI6IFwi4oSLXCIsXG5cdFwiaHNsYXNoXCI6IFwi4oSPXCIsXG5cdFwiSHN0cm9rXCI6IFwixKZcIixcblx0XCJoc3Ryb2tcIjogXCLEp1wiLFxuXHRcIkh1bXBEb3duSHVtcFwiOiBcIuKJjlwiLFxuXHRcIkh1bXBFcXVhbFwiOiBcIuKJj1wiLFxuXHRcImh5YnVsbFwiOiBcIuKBg1wiLFxuXHRcImh5cGhlblwiOiBcIuKAkFwiLFxuXHRcIklhY3V0ZVwiOiBcIsONXCIsXG5cdFwiaWFjdXRlXCI6IFwiw61cIixcblx0XCJpY1wiOiBcIuKBo1wiLFxuXHRcIkljaXJjXCI6IFwiw45cIixcblx0XCJpY2lyY1wiOiBcIsOuXCIsXG5cdFwiSWN5XCI6IFwi0JhcIixcblx0XCJpY3lcIjogXCLQuFwiLFxuXHRcIklkb3RcIjogXCLEsFwiLFxuXHRcIklFY3lcIjogXCLQlVwiLFxuXHRcImllY3lcIjogXCLQtVwiLFxuXHRcImlleGNsXCI6IFwiwqFcIixcblx0XCJpZmZcIjogXCLih5RcIixcblx0XCJpZnJcIjogXCLwnZSmXCIsXG5cdFwiSWZyXCI6IFwi4oSRXCIsXG5cdFwiSWdyYXZlXCI6IFwiw4xcIixcblx0XCJpZ3JhdmVcIjogXCLDrFwiLFxuXHRcImlpXCI6IFwi4oWIXCIsXG5cdFwiaWlpaW50XCI6IFwi4qiMXCIsXG5cdFwiaWlpbnRcIjogXCLiiK1cIixcblx0XCJpaW5maW5cIjogXCLip5xcIixcblx0XCJpaW90YVwiOiBcIuKEqVwiLFxuXHRcIklKbGlnXCI6IFwixLJcIixcblx0XCJpamxpZ1wiOiBcIsSzXCIsXG5cdFwiSW1hY3JcIjogXCLEqlwiLFxuXHRcImltYWNyXCI6IFwixKtcIixcblx0XCJpbWFnZVwiOiBcIuKEkVwiLFxuXHRcIkltYWdpbmFyeUlcIjogXCLihYhcIixcblx0XCJpbWFnbGluZVwiOiBcIuKEkFwiLFxuXHRcImltYWdwYXJ0XCI6IFwi4oSRXCIsXG5cdFwiaW1hdGhcIjogXCLEsVwiLFxuXHRcIkltXCI6IFwi4oSRXCIsXG5cdFwiaW1vZlwiOiBcIuKKt1wiLFxuXHRcImltcGVkXCI6IFwixrVcIixcblx0XCJJbXBsaWVzXCI6IFwi4oeSXCIsXG5cdFwiaW5jYXJlXCI6IFwi4oSFXCIsXG5cdFwiaW5cIjogXCLiiIhcIixcblx0XCJpbmZpblwiOiBcIuKInlwiLFxuXHRcImluZmludGllXCI6IFwi4qedXCIsXG5cdFwiaW5vZG90XCI6IFwixLFcIixcblx0XCJpbnRjYWxcIjogXCLiirpcIixcblx0XCJpbnRcIjogXCLiiKtcIixcblx0XCJJbnRcIjogXCLiiKxcIixcblx0XCJpbnRlZ2Vyc1wiOiBcIuKEpFwiLFxuXHRcIkludGVncmFsXCI6IFwi4oirXCIsXG5cdFwiaW50ZXJjYWxcIjogXCLiirpcIixcblx0XCJJbnRlcnNlY3Rpb25cIjogXCLii4JcIixcblx0XCJpbnRsYXJoa1wiOiBcIuKol1wiLFxuXHRcImludHByb2RcIjogXCLiqLxcIixcblx0XCJJbnZpc2libGVDb21tYVwiOiBcIuKBo1wiLFxuXHRcIkludmlzaWJsZVRpbWVzXCI6IFwi4oGiXCIsXG5cdFwiSU9jeVwiOiBcItCBXCIsXG5cdFwiaW9jeVwiOiBcItGRXCIsXG5cdFwiSW9nb25cIjogXCLErlwiLFxuXHRcImlvZ29uXCI6IFwixK9cIixcblx0XCJJb3BmXCI6IFwi8J2VgFwiLFxuXHRcImlvcGZcIjogXCLwnZWaXCIsXG5cdFwiSW90YVwiOiBcIs6ZXCIsXG5cdFwiaW90YVwiOiBcIs65XCIsXG5cdFwiaXByb2RcIjogXCLiqLxcIixcblx0XCJpcXVlc3RcIjogXCLCv1wiLFxuXHRcImlzY3JcIjogXCLwnZK+XCIsXG5cdFwiSXNjclwiOiBcIuKEkFwiLFxuXHRcImlzaW5cIjogXCLiiIhcIixcblx0XCJpc2luZG90XCI6IFwi4ou1XCIsXG5cdFwiaXNpbkVcIjogXCLii7lcIixcblx0XCJpc2luc1wiOiBcIuKLtFwiLFxuXHRcImlzaW5zdlwiOiBcIuKLs1wiLFxuXHRcImlzaW52XCI6IFwi4oiIXCIsXG5cdFwiaXRcIjogXCLigaJcIixcblx0XCJJdGlsZGVcIjogXCLEqFwiLFxuXHRcIml0aWxkZVwiOiBcIsSpXCIsXG5cdFwiSXVrY3lcIjogXCLQhlwiLFxuXHRcIml1a2N5XCI6IFwi0ZZcIixcblx0XCJJdW1sXCI6IFwiw49cIixcblx0XCJpdW1sXCI6IFwiw69cIixcblx0XCJKY2lyY1wiOiBcIsS0XCIsXG5cdFwiamNpcmNcIjogXCLEtVwiLFxuXHRcIkpjeVwiOiBcItCZXCIsXG5cdFwiamN5XCI6IFwi0LlcIixcblx0XCJKZnJcIjogXCLwnZSNXCIsXG5cdFwiamZyXCI6IFwi8J2Up1wiLFxuXHRcImptYXRoXCI6IFwiyLdcIixcblx0XCJKb3BmXCI6IFwi8J2VgVwiLFxuXHRcImpvcGZcIjogXCLwnZWbXCIsXG5cdFwiSnNjclwiOiBcIvCdkqVcIixcblx0XCJqc2NyXCI6IFwi8J2Sv1wiLFxuXHRcIkpzZXJjeVwiOiBcItCIXCIsXG5cdFwianNlcmN5XCI6IFwi0ZhcIixcblx0XCJKdWtjeVwiOiBcItCEXCIsXG5cdFwianVrY3lcIjogXCLRlFwiLFxuXHRcIkthcHBhXCI6IFwizppcIixcblx0XCJrYXBwYVwiOiBcIs66XCIsXG5cdFwia2FwcGF2XCI6IFwiz7BcIixcblx0XCJLY2VkaWxcIjogXCLEtlwiLFxuXHRcImtjZWRpbFwiOiBcIsS3XCIsXG5cdFwiS2N5XCI6IFwi0JpcIixcblx0XCJrY3lcIjogXCLQulwiLFxuXHRcIktmclwiOiBcIvCdlI5cIixcblx0XCJrZnJcIjogXCLwnZSoXCIsXG5cdFwia2dyZWVuXCI6IFwixLhcIixcblx0XCJLSGN5XCI6IFwi0KVcIixcblx0XCJraGN5XCI6IFwi0YVcIixcblx0XCJLSmN5XCI6IFwi0IxcIixcblx0XCJramN5XCI6IFwi0ZxcIixcblx0XCJLb3BmXCI6IFwi8J2VglwiLFxuXHRcImtvcGZcIjogXCLwnZWcXCIsXG5cdFwiS3NjclwiOiBcIvCdkqZcIixcblx0XCJrc2NyXCI6IFwi8J2TgFwiLFxuXHRcImxBYXJyXCI6IFwi4oeaXCIsXG5cdFwiTGFjdXRlXCI6IFwixLlcIixcblx0XCJsYWN1dGVcIjogXCLEulwiLFxuXHRcImxhZW1wdHl2XCI6IFwi4qa0XCIsXG5cdFwibGFncmFuXCI6IFwi4oSSXCIsXG5cdFwiTGFtYmRhXCI6IFwizptcIixcblx0XCJsYW1iZGFcIjogXCLOu1wiLFxuXHRcImxhbmdcIjogXCLin6hcIixcblx0XCJMYW5nXCI6IFwi4p+qXCIsXG5cdFwibGFuZ2RcIjogXCLippFcIixcblx0XCJsYW5nbGVcIjogXCLin6hcIixcblx0XCJsYXBcIjogXCLiqoVcIixcblx0XCJMYXBsYWNldHJmXCI6IFwi4oSSXCIsXG5cdFwibGFxdW9cIjogXCLCq1wiLFxuXHRcImxhcnJiXCI6IFwi4oekXCIsXG5cdFwibGFycmJmc1wiOiBcIuKkn1wiLFxuXHRcImxhcnJcIjogXCLihpBcIixcblx0XCJMYXJyXCI6IFwi4oaeXCIsXG5cdFwibEFyclwiOiBcIuKHkFwiLFxuXHRcImxhcnJmc1wiOiBcIuKknVwiLFxuXHRcImxhcnJoa1wiOiBcIuKGqVwiLFxuXHRcImxhcnJscFwiOiBcIuKGq1wiLFxuXHRcImxhcnJwbFwiOiBcIuKkuVwiLFxuXHRcImxhcnJzaW1cIjogXCLipbNcIixcblx0XCJsYXJydGxcIjogXCLihqJcIixcblx0XCJsYXRhaWxcIjogXCLipJlcIixcblx0XCJsQXRhaWxcIjogXCLipJtcIixcblx0XCJsYXRcIjogXCLiqqtcIixcblx0XCJsYXRlXCI6IFwi4qqtXCIsXG5cdFwibGF0ZXNcIjogXCLiqq3vuIBcIixcblx0XCJsYmFyclwiOiBcIuKkjFwiLFxuXHRcImxCYXJyXCI6IFwi4qSOXCIsXG5cdFwibGJicmtcIjogXCLinbJcIixcblx0XCJsYnJhY2VcIjogXCJ7XCIsXG5cdFwibGJyYWNrXCI6IFwiW1wiLFxuXHRcImxicmtlXCI6IFwi4qaLXCIsXG5cdFwibGJya3NsZFwiOiBcIuKmj1wiLFxuXHRcImxicmtzbHVcIjogXCLipo1cIixcblx0XCJMY2Fyb25cIjogXCLEvVwiLFxuXHRcImxjYXJvblwiOiBcIsS+XCIsXG5cdFwiTGNlZGlsXCI6IFwixLtcIixcblx0XCJsY2VkaWxcIjogXCLEvFwiLFxuXHRcImxjZWlsXCI6IFwi4oyIXCIsXG5cdFwibGN1YlwiOiBcIntcIixcblx0XCJMY3lcIjogXCLQm1wiLFxuXHRcImxjeVwiOiBcItC7XCIsXG5cdFwibGRjYVwiOiBcIuKktlwiLFxuXHRcImxkcXVvXCI6IFwi4oCcXCIsXG5cdFwibGRxdW9yXCI6IFwi4oCeXCIsXG5cdFwibGRyZGhhclwiOiBcIuKlp1wiLFxuXHRcImxkcnVzaGFyXCI6IFwi4qWLXCIsXG5cdFwibGRzaFwiOiBcIuKGslwiLFxuXHRcImxlXCI6IFwi4omkXCIsXG5cdFwibEVcIjogXCLiiaZcIixcblx0XCJMZWZ0QW5nbGVCcmFja2V0XCI6IFwi4p+oXCIsXG5cdFwiTGVmdEFycm93QmFyXCI6IFwi4oekXCIsXG5cdFwibGVmdGFycm93XCI6IFwi4oaQXCIsXG5cdFwiTGVmdEFycm93XCI6IFwi4oaQXCIsXG5cdFwiTGVmdGFycm93XCI6IFwi4oeQXCIsXG5cdFwiTGVmdEFycm93UmlnaHRBcnJvd1wiOiBcIuKHhlwiLFxuXHRcImxlZnRhcnJvd3RhaWxcIjogXCLihqJcIixcblx0XCJMZWZ0Q2VpbGluZ1wiOiBcIuKMiFwiLFxuXHRcIkxlZnREb3VibGVCcmFja2V0XCI6IFwi4p+mXCIsXG5cdFwiTGVmdERvd25UZWVWZWN0b3JcIjogXCLipaFcIixcblx0XCJMZWZ0RG93blZlY3RvckJhclwiOiBcIuKlmVwiLFxuXHRcIkxlZnREb3duVmVjdG9yXCI6IFwi4oeDXCIsXG5cdFwiTGVmdEZsb29yXCI6IFwi4oyKXCIsXG5cdFwibGVmdGhhcnBvb25kb3duXCI6IFwi4oa9XCIsXG5cdFwibGVmdGhhcnBvb251cFwiOiBcIuKGvFwiLFxuXHRcImxlZnRsZWZ0YXJyb3dzXCI6IFwi4oeHXCIsXG5cdFwibGVmdHJpZ2h0YXJyb3dcIjogXCLihpRcIixcblx0XCJMZWZ0UmlnaHRBcnJvd1wiOiBcIuKGlFwiLFxuXHRcIkxlZnRyaWdodGFycm93XCI6IFwi4oeUXCIsXG5cdFwibGVmdHJpZ2h0YXJyb3dzXCI6IFwi4oeGXCIsXG5cdFwibGVmdHJpZ2h0aGFycG9vbnNcIjogXCLih4tcIixcblx0XCJsZWZ0cmlnaHRzcXVpZ2Fycm93XCI6IFwi4oatXCIsXG5cdFwiTGVmdFJpZ2h0VmVjdG9yXCI6IFwi4qWOXCIsXG5cdFwiTGVmdFRlZUFycm93XCI6IFwi4oakXCIsXG5cdFwiTGVmdFRlZVwiOiBcIuKKo1wiLFxuXHRcIkxlZnRUZWVWZWN0b3JcIjogXCLipZpcIixcblx0XCJsZWZ0dGhyZWV0aW1lc1wiOiBcIuKLi1wiLFxuXHRcIkxlZnRUcmlhbmdsZUJhclwiOiBcIuKnj1wiLFxuXHRcIkxlZnRUcmlhbmdsZVwiOiBcIuKKslwiLFxuXHRcIkxlZnRUcmlhbmdsZUVxdWFsXCI6IFwi4oq0XCIsXG5cdFwiTGVmdFVwRG93blZlY3RvclwiOiBcIuKlkVwiLFxuXHRcIkxlZnRVcFRlZVZlY3RvclwiOiBcIuKloFwiLFxuXHRcIkxlZnRVcFZlY3RvckJhclwiOiBcIuKlmFwiLFxuXHRcIkxlZnRVcFZlY3RvclwiOiBcIuKGv1wiLFxuXHRcIkxlZnRWZWN0b3JCYXJcIjogXCLipZJcIixcblx0XCJMZWZ0VmVjdG9yXCI6IFwi4oa8XCIsXG5cdFwibEVnXCI6IFwi4qqLXCIsXG5cdFwibGVnXCI6IFwi4ouaXCIsXG5cdFwibGVxXCI6IFwi4omkXCIsXG5cdFwibGVxcVwiOiBcIuKJplwiLFxuXHRcImxlcXNsYW50XCI6IFwi4qm9XCIsXG5cdFwibGVzY2NcIjogXCLiqqhcIixcblx0XCJsZXNcIjogXCLiqb1cIixcblx0XCJsZXNkb3RcIjogXCLiqb9cIixcblx0XCJsZXNkb3RvXCI6IFwi4qqBXCIsXG5cdFwibGVzZG90b3JcIjogXCLiqoNcIixcblx0XCJsZXNnXCI6IFwi4oua77iAXCIsXG5cdFwibGVzZ2VzXCI6IFwi4qqTXCIsXG5cdFwibGVzc2FwcHJveFwiOiBcIuKqhVwiLFxuXHRcImxlc3Nkb3RcIjogXCLii5ZcIixcblx0XCJsZXNzZXFndHJcIjogXCLii5pcIixcblx0XCJsZXNzZXFxZ3RyXCI6IFwi4qqLXCIsXG5cdFwiTGVzc0VxdWFsR3JlYXRlclwiOiBcIuKLmlwiLFxuXHRcIkxlc3NGdWxsRXF1YWxcIjogXCLiiaZcIixcblx0XCJMZXNzR3JlYXRlclwiOiBcIuKJtlwiLFxuXHRcImxlc3NndHJcIjogXCLiibZcIixcblx0XCJMZXNzTGVzc1wiOiBcIuKqoVwiLFxuXHRcImxlc3NzaW1cIjogXCLiibJcIixcblx0XCJMZXNzU2xhbnRFcXVhbFwiOiBcIuKpvVwiLFxuXHRcIkxlc3NUaWxkZVwiOiBcIuKJslwiLFxuXHRcImxmaXNodFwiOiBcIuKlvFwiLFxuXHRcImxmbG9vclwiOiBcIuKMilwiLFxuXHRcIkxmclwiOiBcIvCdlI9cIixcblx0XCJsZnJcIjogXCLwnZSpXCIsXG5cdFwibGdcIjogXCLiibZcIixcblx0XCJsZ0VcIjogXCLiqpFcIixcblx0XCJsSGFyXCI6IFwi4qWiXCIsXG5cdFwibGhhcmRcIjogXCLihr1cIixcblx0XCJsaGFydVwiOiBcIuKGvFwiLFxuXHRcImxoYXJ1bFwiOiBcIuKlqlwiLFxuXHRcImxoYmxrXCI6IFwi4paEXCIsXG5cdFwiTEpjeVwiOiBcItCJXCIsXG5cdFwibGpjeVwiOiBcItGZXCIsXG5cdFwibGxhcnJcIjogXCLih4dcIixcblx0XCJsbFwiOiBcIuKJqlwiLFxuXHRcIkxsXCI6IFwi4ouYXCIsXG5cdFwibGxjb3JuZXJcIjogXCLijJ5cIixcblx0XCJMbGVmdGFycm93XCI6IFwi4oeaXCIsXG5cdFwibGxoYXJkXCI6IFwi4qWrXCIsXG5cdFwibGx0cmlcIjogXCLil7pcIixcblx0XCJMbWlkb3RcIjogXCLEv1wiLFxuXHRcImxtaWRvdFwiOiBcIsWAXCIsXG5cdFwibG1vdXN0YWNoZVwiOiBcIuKOsFwiLFxuXHRcImxtb3VzdFwiOiBcIuKOsFwiLFxuXHRcImxuYXBcIjogXCLiqolcIixcblx0XCJsbmFwcHJveFwiOiBcIuKqiVwiLFxuXHRcImxuZVwiOiBcIuKqh1wiLFxuXHRcImxuRVwiOiBcIuKJqFwiLFxuXHRcImxuZXFcIjogXCLiqodcIixcblx0XCJsbmVxcVwiOiBcIuKJqFwiLFxuXHRcImxuc2ltXCI6IFwi4oumXCIsXG5cdFwibG9hbmdcIjogXCLin6xcIixcblx0XCJsb2FyclwiOiBcIuKHvVwiLFxuXHRcImxvYnJrXCI6IFwi4p+mXCIsXG5cdFwibG9uZ2xlZnRhcnJvd1wiOiBcIuKftVwiLFxuXHRcIkxvbmdMZWZ0QXJyb3dcIjogXCLin7VcIixcblx0XCJMb25nbGVmdGFycm93XCI6IFwi4p+4XCIsXG5cdFwibG9uZ2xlZnRyaWdodGFycm93XCI6IFwi4p+3XCIsXG5cdFwiTG9uZ0xlZnRSaWdodEFycm93XCI6IFwi4p+3XCIsXG5cdFwiTG9uZ2xlZnRyaWdodGFycm93XCI6IFwi4p+6XCIsXG5cdFwibG9uZ21hcHN0b1wiOiBcIuKfvFwiLFxuXHRcImxvbmdyaWdodGFycm93XCI6IFwi4p+2XCIsXG5cdFwiTG9uZ1JpZ2h0QXJyb3dcIjogXCLin7ZcIixcblx0XCJMb25ncmlnaHRhcnJvd1wiOiBcIuKfuVwiLFxuXHRcImxvb3BhcnJvd2xlZnRcIjogXCLihqtcIixcblx0XCJsb29wYXJyb3dyaWdodFwiOiBcIuKGrFwiLFxuXHRcImxvcGFyXCI6IFwi4qaFXCIsXG5cdFwiTG9wZlwiOiBcIvCdlYNcIixcblx0XCJsb3BmXCI6IFwi8J2VnVwiLFxuXHRcImxvcGx1c1wiOiBcIuKorVwiLFxuXHRcImxvdGltZXNcIjogXCLiqLRcIixcblx0XCJsb3dhc3RcIjogXCLiiJdcIixcblx0XCJsb3diYXJcIjogXCJfXCIsXG5cdFwiTG93ZXJMZWZ0QXJyb3dcIjogXCLihplcIixcblx0XCJMb3dlclJpZ2h0QXJyb3dcIjogXCLihphcIixcblx0XCJsb3pcIjogXCLil4pcIixcblx0XCJsb3plbmdlXCI6IFwi4peKXCIsXG5cdFwibG96ZlwiOiBcIuKnq1wiLFxuXHRcImxwYXJcIjogXCIoXCIsXG5cdFwibHBhcmx0XCI6IFwi4qaTXCIsXG5cdFwibHJhcnJcIjogXCLih4ZcIixcblx0XCJscmNvcm5lclwiOiBcIuKMn1wiLFxuXHRcImxyaGFyXCI6IFwi4oeLXCIsXG5cdFwibHJoYXJkXCI6IFwi4qWtXCIsXG5cdFwibHJtXCI6IFwi4oCOXCIsXG5cdFwibHJ0cmlcIjogXCLiir9cIixcblx0XCJsc2FxdW9cIjogXCLigLlcIixcblx0XCJsc2NyXCI6IFwi8J2TgVwiLFxuXHRcIkxzY3JcIjogXCLihJJcIixcblx0XCJsc2hcIjogXCLihrBcIixcblx0XCJMc2hcIjogXCLihrBcIixcblx0XCJsc2ltXCI6IFwi4omyXCIsXG5cdFwibHNpbWVcIjogXCLiqo1cIixcblx0XCJsc2ltZ1wiOiBcIuKqj1wiLFxuXHRcImxzcWJcIjogXCJbXCIsXG5cdFwibHNxdW9cIjogXCLigJhcIixcblx0XCJsc3F1b3JcIjogXCLigJpcIixcblx0XCJMc3Ryb2tcIjogXCLFgVwiLFxuXHRcImxzdHJva1wiOiBcIsWCXCIsXG5cdFwibHRjY1wiOiBcIuKqplwiLFxuXHRcImx0Y2lyXCI6IFwi4qm5XCIsXG5cdFwibHRcIjogXCI8XCIsXG5cdFwiTFRcIjogXCI8XCIsXG5cdFwiTHRcIjogXCLiiapcIixcblx0XCJsdGRvdFwiOiBcIuKLllwiLFxuXHRcImx0aHJlZVwiOiBcIuKLi1wiLFxuXHRcImx0aW1lc1wiOiBcIuKLiVwiLFxuXHRcImx0bGFyclwiOiBcIuKltlwiLFxuXHRcImx0cXVlc3RcIjogXCLiqbtcIixcblx0XCJsdHJpXCI6IFwi4peDXCIsXG5cdFwibHRyaWVcIjogXCLiirRcIixcblx0XCJsdHJpZlwiOiBcIuKXglwiLFxuXHRcImx0clBhclwiOiBcIuKmllwiLFxuXHRcImx1cmRzaGFyXCI6IFwi4qWKXCIsXG5cdFwibHVydWhhclwiOiBcIuKlplwiLFxuXHRcImx2ZXJ0bmVxcVwiOiBcIuKJqO+4gFwiLFxuXHRcImx2bkVcIjogXCLiiajvuIBcIixcblx0XCJtYWNyXCI6IFwiwq9cIixcblx0XCJtYWxlXCI6IFwi4pmCXCIsXG5cdFwibWFsdFwiOiBcIuKcoFwiLFxuXHRcIm1hbHRlc2VcIjogXCLinKBcIixcblx0XCJNYXBcIjogXCLipIVcIixcblx0XCJtYXBcIjogXCLihqZcIixcblx0XCJtYXBzdG9cIjogXCLihqZcIixcblx0XCJtYXBzdG9kb3duXCI6IFwi4oanXCIsXG5cdFwibWFwc3RvbGVmdFwiOiBcIuKGpFwiLFxuXHRcIm1hcHN0b3VwXCI6IFwi4oalXCIsXG5cdFwibWFya2VyXCI6IFwi4pauXCIsXG5cdFwibWNvbW1hXCI6IFwi4qipXCIsXG5cdFwiTWN5XCI6IFwi0JxcIixcblx0XCJtY3lcIjogXCLQvFwiLFxuXHRcIm1kYXNoXCI6IFwi4oCUXCIsXG5cdFwibUREb3RcIjogXCLiiLpcIixcblx0XCJtZWFzdXJlZGFuZ2xlXCI6IFwi4oihXCIsXG5cdFwiTWVkaXVtU3BhY2VcIjogXCLigZ9cIixcblx0XCJNZWxsaW50cmZcIjogXCLihLNcIixcblx0XCJNZnJcIjogXCLwnZSQXCIsXG5cdFwibWZyXCI6IFwi8J2UqlwiLFxuXHRcIm1ob1wiOiBcIuKEp1wiLFxuXHRcIm1pY3JvXCI6IFwiwrVcIixcblx0XCJtaWRhc3RcIjogXCIqXCIsXG5cdFwibWlkY2lyXCI6IFwi4quwXCIsXG5cdFwibWlkXCI6IFwi4oijXCIsXG5cdFwibWlkZG90XCI6IFwiwrdcIixcblx0XCJtaW51c2JcIjogXCLiip9cIixcblx0XCJtaW51c1wiOiBcIuKIklwiLFxuXHRcIm1pbnVzZFwiOiBcIuKIuFwiLFxuXHRcIm1pbnVzZHVcIjogXCLiqKpcIixcblx0XCJNaW51c1BsdXNcIjogXCLiiJNcIixcblx0XCJtbGNwXCI6IFwi4qubXCIsXG5cdFwibWxkclwiOiBcIuKAplwiLFxuXHRcIm1ucGx1c1wiOiBcIuKIk1wiLFxuXHRcIm1vZGVsc1wiOiBcIuKKp1wiLFxuXHRcIk1vcGZcIjogXCLwnZWEXCIsXG5cdFwibW9wZlwiOiBcIvCdlZ5cIixcblx0XCJtcFwiOiBcIuKIk1wiLFxuXHRcIm1zY3JcIjogXCLwnZOCXCIsXG5cdFwiTXNjclwiOiBcIuKEs1wiLFxuXHRcIm1zdHBvc1wiOiBcIuKIvlwiLFxuXHRcIk11XCI6IFwizpxcIixcblx0XCJtdVwiOiBcIs68XCIsXG5cdFwibXVsdGltYXBcIjogXCLiirhcIixcblx0XCJtdW1hcFwiOiBcIuKKuFwiLFxuXHRcIm5hYmxhXCI6IFwi4oiHXCIsXG5cdFwiTmFjdXRlXCI6IFwixYNcIixcblx0XCJuYWN1dGVcIjogXCLFhFwiLFxuXHRcIm5hbmdcIjogXCLiiKDig5JcIixcblx0XCJuYXBcIjogXCLiiYlcIixcblx0XCJuYXBFXCI6IFwi4qmwzLhcIixcblx0XCJuYXBpZFwiOiBcIuKJi8y4XCIsXG5cdFwibmFwb3NcIjogXCLFiVwiLFxuXHRcIm5hcHByb3hcIjogXCLiiYlcIixcblx0XCJuYXR1cmFsXCI6IFwi4pmuXCIsXG5cdFwibmF0dXJhbHNcIjogXCLihJVcIixcblx0XCJuYXR1clwiOiBcIuKZrlwiLFxuXHRcIm5ic3BcIjogXCLCoFwiLFxuXHRcIm5idW1wXCI6IFwi4omOzLhcIixcblx0XCJuYnVtcGVcIjogXCLiiY/MuFwiLFxuXHRcIm5jYXBcIjogXCLiqYNcIixcblx0XCJOY2Fyb25cIjogXCLFh1wiLFxuXHRcIm5jYXJvblwiOiBcIsWIXCIsXG5cdFwiTmNlZGlsXCI6IFwixYVcIixcblx0XCJuY2VkaWxcIjogXCLFhlwiLFxuXHRcIm5jb25nXCI6IFwi4omHXCIsXG5cdFwibmNvbmdkb3RcIjogXCLiqa3MuFwiLFxuXHRcIm5jdXBcIjogXCLiqYJcIixcblx0XCJOY3lcIjogXCLQnVwiLFxuXHRcIm5jeVwiOiBcItC9XCIsXG5cdFwibmRhc2hcIjogXCLigJNcIixcblx0XCJuZWFyaGtcIjogXCLipKRcIixcblx0XCJuZWFyclwiOiBcIuKGl1wiLFxuXHRcIm5lQXJyXCI6IFwi4oeXXCIsXG5cdFwibmVhcnJvd1wiOiBcIuKGl1wiLFxuXHRcIm5lXCI6IFwi4omgXCIsXG5cdFwibmVkb3RcIjogXCLiiZDMuFwiLFxuXHRcIk5lZ2F0aXZlTWVkaXVtU3BhY2VcIjogXCLigItcIixcblx0XCJOZWdhdGl2ZVRoaWNrU3BhY2VcIjogXCLigItcIixcblx0XCJOZWdhdGl2ZVRoaW5TcGFjZVwiOiBcIuKAi1wiLFxuXHRcIk5lZ2F0aXZlVmVyeVRoaW5TcGFjZVwiOiBcIuKAi1wiLFxuXHRcIm5lcXVpdlwiOiBcIuKJolwiLFxuXHRcIm5lc2VhclwiOiBcIuKkqFwiLFxuXHRcIm5lc2ltXCI6IFwi4omCzLhcIixcblx0XCJOZXN0ZWRHcmVhdGVyR3JlYXRlclwiOiBcIuKJq1wiLFxuXHRcIk5lc3RlZExlc3NMZXNzXCI6IFwi4omqXCIsXG5cdFwiTmV3TGluZVwiOiBcIlxcblwiLFxuXHRcIm5leGlzdFwiOiBcIuKIhFwiLFxuXHRcIm5leGlzdHNcIjogXCLiiIRcIixcblx0XCJOZnJcIjogXCLwnZSRXCIsXG5cdFwibmZyXCI6IFwi8J2Uq1wiLFxuXHRcIm5nRVwiOiBcIuKJp8y4XCIsXG5cdFwibmdlXCI6IFwi4omxXCIsXG5cdFwibmdlcVwiOiBcIuKJsVwiLFxuXHRcIm5nZXFxXCI6IFwi4omnzLhcIixcblx0XCJuZ2Vxc2xhbnRcIjogXCLiqb7MuFwiLFxuXHRcIm5nZXNcIjogXCLiqb7MuFwiLFxuXHRcIm5HZ1wiOiBcIuKLmcy4XCIsXG5cdFwibmdzaW1cIjogXCLiibVcIixcblx0XCJuR3RcIjogXCLiiavig5JcIixcblx0XCJuZ3RcIjogXCLiia9cIixcblx0XCJuZ3RyXCI6IFwi4omvXCIsXG5cdFwibkd0dlwiOiBcIuKJq8y4XCIsXG5cdFwibmhhcnJcIjogXCLihq5cIixcblx0XCJuaEFyclwiOiBcIuKHjlwiLFxuXHRcIm5ocGFyXCI6IFwi4quyXCIsXG5cdFwibmlcIjogXCLiiItcIixcblx0XCJuaXNcIjogXCLii7xcIixcblx0XCJuaXNkXCI6IFwi4ou6XCIsXG5cdFwibml2XCI6IFwi4oiLXCIsXG5cdFwiTkpjeVwiOiBcItCKXCIsXG5cdFwibmpjeVwiOiBcItGaXCIsXG5cdFwibmxhcnJcIjogXCLihppcIixcblx0XCJubEFyclwiOiBcIuKHjVwiLFxuXHRcIm5sZHJcIjogXCLigKVcIixcblx0XCJubEVcIjogXCLiiabMuFwiLFxuXHRcIm5sZVwiOiBcIuKJsFwiLFxuXHRcIm5sZWZ0YXJyb3dcIjogXCLihppcIixcblx0XCJuTGVmdGFycm93XCI6IFwi4oeNXCIsXG5cdFwibmxlZnRyaWdodGFycm93XCI6IFwi4oauXCIsXG5cdFwibkxlZnRyaWdodGFycm93XCI6IFwi4oeOXCIsXG5cdFwibmxlcVwiOiBcIuKJsFwiLFxuXHRcIm5sZXFxXCI6IFwi4ommzLhcIixcblx0XCJubGVxc2xhbnRcIjogXCLiqb3MuFwiLFxuXHRcIm5sZXNcIjogXCLiqb3MuFwiLFxuXHRcIm5sZXNzXCI6IFwi4omuXCIsXG5cdFwibkxsXCI6IFwi4ouYzLhcIixcblx0XCJubHNpbVwiOiBcIuKJtFwiLFxuXHRcIm5MdFwiOiBcIuKJquKDklwiLFxuXHRcIm5sdFwiOiBcIuKJrlwiLFxuXHRcIm5sdHJpXCI6IFwi4ouqXCIsXG5cdFwibmx0cmllXCI6IFwi4ousXCIsXG5cdFwibkx0dlwiOiBcIuKJqsy4XCIsXG5cdFwibm1pZFwiOiBcIuKIpFwiLFxuXHRcIk5vQnJlYWtcIjogXCLigaBcIixcblx0XCJOb25CcmVha2luZ1NwYWNlXCI6IFwiwqBcIixcblx0XCJub3BmXCI6IFwi8J2Vn1wiLFxuXHRcIk5vcGZcIjogXCLihJVcIixcblx0XCJOb3RcIjogXCLiq6xcIixcblx0XCJub3RcIjogXCLCrFwiLFxuXHRcIk5vdENvbmdydWVudFwiOiBcIuKJolwiLFxuXHRcIk5vdEN1cENhcFwiOiBcIuKJrVwiLFxuXHRcIk5vdERvdWJsZVZlcnRpY2FsQmFyXCI6IFwi4oimXCIsXG5cdFwiTm90RWxlbWVudFwiOiBcIuKIiVwiLFxuXHRcIk5vdEVxdWFsXCI6IFwi4omgXCIsXG5cdFwiTm90RXF1YWxUaWxkZVwiOiBcIuKJgsy4XCIsXG5cdFwiTm90RXhpc3RzXCI6IFwi4oiEXCIsXG5cdFwiTm90R3JlYXRlclwiOiBcIuKJr1wiLFxuXHRcIk5vdEdyZWF0ZXJFcXVhbFwiOiBcIuKJsVwiLFxuXHRcIk5vdEdyZWF0ZXJGdWxsRXF1YWxcIjogXCLiiafMuFwiLFxuXHRcIk5vdEdyZWF0ZXJHcmVhdGVyXCI6IFwi4omrzLhcIixcblx0XCJOb3RHcmVhdGVyTGVzc1wiOiBcIuKJuVwiLFxuXHRcIk5vdEdyZWF0ZXJTbGFudEVxdWFsXCI6IFwi4qm+zLhcIixcblx0XCJOb3RHcmVhdGVyVGlsZGVcIjogXCLiibVcIixcblx0XCJOb3RIdW1wRG93bkh1bXBcIjogXCLiiY7MuFwiLFxuXHRcIk5vdEh1bXBFcXVhbFwiOiBcIuKJj8y4XCIsXG5cdFwibm90aW5cIjogXCLiiIlcIixcblx0XCJub3RpbmRvdFwiOiBcIuKLtcy4XCIsXG5cdFwibm90aW5FXCI6IFwi4ou5zLhcIixcblx0XCJub3RpbnZhXCI6IFwi4oiJXCIsXG5cdFwibm90aW52YlwiOiBcIuKLt1wiLFxuXHRcIm5vdGludmNcIjogXCLii7ZcIixcblx0XCJOb3RMZWZ0VHJpYW5nbGVCYXJcIjogXCLip4/MuFwiLFxuXHRcIk5vdExlZnRUcmlhbmdsZVwiOiBcIuKLqlwiLFxuXHRcIk5vdExlZnRUcmlhbmdsZUVxdWFsXCI6IFwi4ousXCIsXG5cdFwiTm90TGVzc1wiOiBcIuKJrlwiLFxuXHRcIk5vdExlc3NFcXVhbFwiOiBcIuKJsFwiLFxuXHRcIk5vdExlc3NHcmVhdGVyXCI6IFwi4om4XCIsXG5cdFwiTm90TGVzc0xlc3NcIjogXCLiiarMuFwiLFxuXHRcIk5vdExlc3NTbGFudEVxdWFsXCI6IFwi4qm9zLhcIixcblx0XCJOb3RMZXNzVGlsZGVcIjogXCLiibRcIixcblx0XCJOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlclwiOiBcIuKqosy4XCIsXG5cdFwiTm90TmVzdGVkTGVzc0xlc3NcIjogXCLiqqHMuFwiLFxuXHRcIm5vdG5pXCI6IFwi4oiMXCIsXG5cdFwibm90bml2YVwiOiBcIuKIjFwiLFxuXHRcIm5vdG5pdmJcIjogXCLii75cIixcblx0XCJub3RuaXZjXCI6IFwi4ou9XCIsXG5cdFwiTm90UHJlY2VkZXNcIjogXCLiioBcIixcblx0XCJOb3RQcmVjZWRlc0VxdWFsXCI6IFwi4qqvzLhcIixcblx0XCJOb3RQcmVjZWRlc1NsYW50RXF1YWxcIjogXCLii6BcIixcblx0XCJOb3RSZXZlcnNlRWxlbWVudFwiOiBcIuKIjFwiLFxuXHRcIk5vdFJpZ2h0VHJpYW5nbGVCYXJcIjogXCLip5DMuFwiLFxuXHRcIk5vdFJpZ2h0VHJpYW5nbGVcIjogXCLii6tcIixcblx0XCJOb3RSaWdodFRyaWFuZ2xlRXF1YWxcIjogXCLii61cIixcblx0XCJOb3RTcXVhcmVTdWJzZXRcIjogXCLiio/MuFwiLFxuXHRcIk5vdFNxdWFyZVN1YnNldEVxdWFsXCI6IFwi4ouiXCIsXG5cdFwiTm90U3F1YXJlU3VwZXJzZXRcIjogXCLiipDMuFwiLFxuXHRcIk5vdFNxdWFyZVN1cGVyc2V0RXF1YWxcIjogXCLii6NcIixcblx0XCJOb3RTdWJzZXRcIjogXCLiioLig5JcIixcblx0XCJOb3RTdWJzZXRFcXVhbFwiOiBcIuKKiFwiLFxuXHRcIk5vdFN1Y2NlZWRzXCI6IFwi4oqBXCIsXG5cdFwiTm90U3VjY2VlZHNFcXVhbFwiOiBcIuKqsMy4XCIsXG5cdFwiTm90U3VjY2VlZHNTbGFudEVxdWFsXCI6IFwi4ouhXCIsXG5cdFwiTm90U3VjY2VlZHNUaWxkZVwiOiBcIuKJv8y4XCIsXG5cdFwiTm90U3VwZXJzZXRcIjogXCLiioPig5JcIixcblx0XCJOb3RTdXBlcnNldEVxdWFsXCI6IFwi4oqJXCIsXG5cdFwiTm90VGlsZGVcIjogXCLiiYFcIixcblx0XCJOb3RUaWxkZUVxdWFsXCI6IFwi4omEXCIsXG5cdFwiTm90VGlsZGVGdWxsRXF1YWxcIjogXCLiiYdcIixcblx0XCJOb3RUaWxkZVRpbGRlXCI6IFwi4omJXCIsXG5cdFwiTm90VmVydGljYWxCYXJcIjogXCLiiKRcIixcblx0XCJucGFyYWxsZWxcIjogXCLiiKZcIixcblx0XCJucGFyXCI6IFwi4oimXCIsXG5cdFwibnBhcnNsXCI6IFwi4qu94oOlXCIsXG5cdFwibnBhcnRcIjogXCLiiILMuFwiLFxuXHRcIm5wb2xpbnRcIjogXCLiqJRcIixcblx0XCJucHJcIjogXCLiioBcIixcblx0XCJucHJjdWVcIjogXCLii6BcIixcblx0XCJucHJlY1wiOiBcIuKKgFwiLFxuXHRcIm5wcmVjZXFcIjogXCLiqq/MuFwiLFxuXHRcIm5wcmVcIjogXCLiqq/MuFwiLFxuXHRcIm5yYXJyY1wiOiBcIuKks8y4XCIsXG5cdFwibnJhcnJcIjogXCLihptcIixcblx0XCJuckFyclwiOiBcIuKHj1wiLFxuXHRcIm5yYXJyd1wiOiBcIuKGncy4XCIsXG5cdFwibnJpZ2h0YXJyb3dcIjogXCLihptcIixcblx0XCJuUmlnaHRhcnJvd1wiOiBcIuKHj1wiLFxuXHRcIm5ydHJpXCI6IFwi4ourXCIsXG5cdFwibnJ0cmllXCI6IFwi4outXCIsXG5cdFwibnNjXCI6IFwi4oqBXCIsXG5cdFwibnNjY3VlXCI6IFwi4ouhXCIsXG5cdFwibnNjZVwiOiBcIuKqsMy4XCIsXG5cdFwiTnNjclwiOiBcIvCdkqlcIixcblx0XCJuc2NyXCI6IFwi8J2Tg1wiLFxuXHRcIm5zaG9ydG1pZFwiOiBcIuKIpFwiLFxuXHRcIm5zaG9ydHBhcmFsbGVsXCI6IFwi4oimXCIsXG5cdFwibnNpbVwiOiBcIuKJgVwiLFxuXHRcIm5zaW1lXCI6IFwi4omEXCIsXG5cdFwibnNpbWVxXCI6IFwi4omEXCIsXG5cdFwibnNtaWRcIjogXCLiiKRcIixcblx0XCJuc3BhclwiOiBcIuKIplwiLFxuXHRcIm5zcXN1YmVcIjogXCLii6JcIixcblx0XCJuc3FzdXBlXCI6IFwi4oujXCIsXG5cdFwibnN1YlwiOiBcIuKKhFwiLFxuXHRcIm5zdWJFXCI6IFwi4quFzLhcIixcblx0XCJuc3ViZVwiOiBcIuKKiFwiLFxuXHRcIm5zdWJzZXRcIjogXCLiioLig5JcIixcblx0XCJuc3Vic2V0ZXFcIjogXCLiiohcIixcblx0XCJuc3Vic2V0ZXFxXCI6IFwi4quFzLhcIixcblx0XCJuc3VjY1wiOiBcIuKKgVwiLFxuXHRcIm5zdWNjZXFcIjogXCLiqrDMuFwiLFxuXHRcIm5zdXBcIjogXCLiioVcIixcblx0XCJuc3VwRVwiOiBcIuKrhsy4XCIsXG5cdFwibnN1cGVcIjogXCLiiolcIixcblx0XCJuc3Vwc2V0XCI6IFwi4oqD4oOSXCIsXG5cdFwibnN1cHNldGVxXCI6IFwi4oqJXCIsXG5cdFwibnN1cHNldGVxcVwiOiBcIuKrhsy4XCIsXG5cdFwibnRnbFwiOiBcIuKJuVwiLFxuXHRcIk50aWxkZVwiOiBcIsORXCIsXG5cdFwibnRpbGRlXCI6IFwiw7FcIixcblx0XCJudGxnXCI6IFwi4om4XCIsXG5cdFwibnRyaWFuZ2xlbGVmdFwiOiBcIuKLqlwiLFxuXHRcIm50cmlhbmdsZWxlZnRlcVwiOiBcIuKLrFwiLFxuXHRcIm50cmlhbmdsZXJpZ2h0XCI6IFwi4ourXCIsXG5cdFwibnRyaWFuZ2xlcmlnaHRlcVwiOiBcIuKLrVwiLFxuXHRcIk51XCI6IFwizp1cIixcblx0XCJudVwiOiBcIs69XCIsXG5cdFwibnVtXCI6IFwiI1wiLFxuXHRcIm51bWVyb1wiOiBcIuKEllwiLFxuXHRcIm51bXNwXCI6IFwi4oCHXCIsXG5cdFwibnZhcFwiOiBcIuKJjeKDklwiLFxuXHRcIm52ZGFzaFwiOiBcIuKKrFwiLFxuXHRcIm52RGFzaFwiOiBcIuKKrVwiLFxuXHRcIm5WZGFzaFwiOiBcIuKKrlwiLFxuXHRcIm5WRGFzaFwiOiBcIuKKr1wiLFxuXHRcIm52Z2VcIjogXCLiiaXig5JcIixcblx0XCJudmd0XCI6IFwiPuKDklwiLFxuXHRcIm52SGFyclwiOiBcIuKkhFwiLFxuXHRcIm52aW5maW5cIjogXCLip55cIixcblx0XCJudmxBcnJcIjogXCLipIJcIixcblx0XCJudmxlXCI6IFwi4omk4oOSXCIsXG5cdFwibnZsdFwiOiBcIjzig5JcIixcblx0XCJudmx0cmllXCI6IFwi4oq04oOSXCIsXG5cdFwibnZyQXJyXCI6IFwi4qSDXCIsXG5cdFwibnZydHJpZVwiOiBcIuKKteKDklwiLFxuXHRcIm52c2ltXCI6IFwi4oi84oOSXCIsXG5cdFwibndhcmhrXCI6IFwi4qSjXCIsXG5cdFwibndhcnJcIjogXCLihpZcIixcblx0XCJud0FyclwiOiBcIuKHllwiLFxuXHRcIm53YXJyb3dcIjogXCLihpZcIixcblx0XCJud25lYXJcIjogXCLipKdcIixcblx0XCJPYWN1dGVcIjogXCLDk1wiLFxuXHRcIm9hY3V0ZVwiOiBcIsOzXCIsXG5cdFwib2FzdFwiOiBcIuKKm1wiLFxuXHRcIk9jaXJjXCI6IFwiw5RcIixcblx0XCJvY2lyY1wiOiBcIsO0XCIsXG5cdFwib2NpclwiOiBcIuKKmlwiLFxuXHRcIk9jeVwiOiBcItCeXCIsXG5cdFwib2N5XCI6IFwi0L5cIixcblx0XCJvZGFzaFwiOiBcIuKKnVwiLFxuXHRcIk9kYmxhY1wiOiBcIsWQXCIsXG5cdFwib2RibGFjXCI6IFwixZFcIixcblx0XCJvZGl2XCI6IFwi4qi4XCIsXG5cdFwib2RvdFwiOiBcIuKKmVwiLFxuXHRcIm9kc29sZFwiOiBcIuKmvFwiLFxuXHRcIk9FbGlnXCI6IFwixZJcIixcblx0XCJvZWxpZ1wiOiBcIsWTXCIsXG5cdFwib2ZjaXJcIjogXCLipr9cIixcblx0XCJPZnJcIjogXCLwnZSSXCIsXG5cdFwib2ZyXCI6IFwi8J2UrFwiLFxuXHRcIm9nb25cIjogXCLLm1wiLFxuXHRcIk9ncmF2ZVwiOiBcIsOSXCIsXG5cdFwib2dyYXZlXCI6IFwiw7JcIixcblx0XCJvZ3RcIjogXCLip4FcIixcblx0XCJvaGJhclwiOiBcIuKmtVwiLFxuXHRcIm9obVwiOiBcIs6pXCIsXG5cdFwib2ludFwiOiBcIuKIrlwiLFxuXHRcIm9sYXJyXCI6IFwi4oa6XCIsXG5cdFwib2xjaXJcIjogXCLipr5cIixcblx0XCJvbGNyb3NzXCI6IFwi4qa7XCIsXG5cdFwib2xpbmVcIjogXCLigL5cIixcblx0XCJvbHRcIjogXCLip4BcIixcblx0XCJPbWFjclwiOiBcIsWMXCIsXG5cdFwib21hY3JcIjogXCLFjVwiLFxuXHRcIk9tZWdhXCI6IFwizqlcIixcblx0XCJvbWVnYVwiOiBcIs+JXCIsXG5cdFwiT21pY3JvblwiOiBcIs6fXCIsXG5cdFwib21pY3JvblwiOiBcIs6/XCIsXG5cdFwib21pZFwiOiBcIuKmtlwiLFxuXHRcIm9taW51c1wiOiBcIuKKllwiLFxuXHRcIk9vcGZcIjogXCLwnZWGXCIsXG5cdFwib29wZlwiOiBcIvCdlaBcIixcblx0XCJvcGFyXCI6IFwi4qa3XCIsXG5cdFwiT3BlbkN1cmx5RG91YmxlUXVvdGVcIjogXCLigJxcIixcblx0XCJPcGVuQ3VybHlRdW90ZVwiOiBcIuKAmFwiLFxuXHRcIm9wZXJwXCI6IFwi4qa5XCIsXG5cdFwib3BsdXNcIjogXCLiipVcIixcblx0XCJvcmFyclwiOiBcIuKGu1wiLFxuXHRcIk9yXCI6IFwi4qmUXCIsXG5cdFwib3JcIjogXCLiiKhcIixcblx0XCJvcmRcIjogXCLiqZ1cIixcblx0XCJvcmRlclwiOiBcIuKEtFwiLFxuXHRcIm9yZGVyb2ZcIjogXCLihLRcIixcblx0XCJvcmRmXCI6IFwiwqpcIixcblx0XCJvcmRtXCI6IFwiwrpcIixcblx0XCJvcmlnb2ZcIjogXCLiirZcIixcblx0XCJvcm9yXCI6IFwi4qmWXCIsXG5cdFwib3JzbG9wZVwiOiBcIuKpl1wiLFxuXHRcIm9ydlwiOiBcIuKpm1wiLFxuXHRcIm9TXCI6IFwi4pOIXCIsXG5cdFwiT3NjclwiOiBcIvCdkqpcIixcblx0XCJvc2NyXCI6IFwi4oS0XCIsXG5cdFwiT3NsYXNoXCI6IFwiw5hcIixcblx0XCJvc2xhc2hcIjogXCLDuFwiLFxuXHRcIm9zb2xcIjogXCLiiphcIixcblx0XCJPdGlsZGVcIjogXCLDlVwiLFxuXHRcIm90aWxkZVwiOiBcIsO1XCIsXG5cdFwib3RpbWVzYXNcIjogXCLiqLZcIixcblx0XCJPdGltZXNcIjogXCLiqLdcIixcblx0XCJvdGltZXNcIjogXCLiipdcIixcblx0XCJPdW1sXCI6IFwiw5ZcIixcblx0XCJvdW1sXCI6IFwiw7ZcIixcblx0XCJvdmJhclwiOiBcIuKMvVwiLFxuXHRcIk92ZXJCYXJcIjogXCLigL5cIixcblx0XCJPdmVyQnJhY2VcIjogXCLij55cIixcblx0XCJPdmVyQnJhY2tldFwiOiBcIuKOtFwiLFxuXHRcIk92ZXJQYXJlbnRoZXNpc1wiOiBcIuKPnFwiLFxuXHRcInBhcmFcIjogXCLCtlwiLFxuXHRcInBhcmFsbGVsXCI6IFwi4oilXCIsXG5cdFwicGFyXCI6IFwi4oilXCIsXG5cdFwicGFyc2ltXCI6IFwi4quzXCIsXG5cdFwicGFyc2xcIjogXCLiq71cIixcblx0XCJwYXJ0XCI6IFwi4oiCXCIsXG5cdFwiUGFydGlhbERcIjogXCLiiIJcIixcblx0XCJQY3lcIjogXCLQn1wiLFxuXHRcInBjeVwiOiBcItC/XCIsXG5cdFwicGVyY250XCI6IFwiJVwiLFxuXHRcInBlcmlvZFwiOiBcIi5cIixcblx0XCJwZXJtaWxcIjogXCLigLBcIixcblx0XCJwZXJwXCI6IFwi4oqlXCIsXG5cdFwicGVydGVua1wiOiBcIuKAsVwiLFxuXHRcIlBmclwiOiBcIvCdlJNcIixcblx0XCJwZnJcIjogXCLwnZStXCIsXG5cdFwiUGhpXCI6IFwizqZcIixcblx0XCJwaGlcIjogXCLPhlwiLFxuXHRcInBoaXZcIjogXCLPlVwiLFxuXHRcInBobW1hdFwiOiBcIuKEs1wiLFxuXHRcInBob25lXCI6IFwi4piOXCIsXG5cdFwiUGlcIjogXCLOoFwiLFxuXHRcInBpXCI6IFwiz4BcIixcblx0XCJwaXRjaGZvcmtcIjogXCLii5RcIixcblx0XCJwaXZcIjogXCLPllwiLFxuXHRcInBsYW5ja1wiOiBcIuKEj1wiLFxuXHRcInBsYW5ja2hcIjogXCLihI5cIixcblx0XCJwbGFua3ZcIjogXCLihI9cIixcblx0XCJwbHVzYWNpclwiOiBcIuKoo1wiLFxuXHRcInBsdXNiXCI6IFwi4oqeXCIsXG5cdFwicGx1c2NpclwiOiBcIuKoolwiLFxuXHRcInBsdXNcIjogXCIrXCIsXG5cdFwicGx1c2RvXCI6IFwi4oiUXCIsXG5cdFwicGx1c2R1XCI6IFwi4qilXCIsXG5cdFwicGx1c2VcIjogXCLiqbJcIixcblx0XCJQbHVzTWludXNcIjogXCLCsVwiLFxuXHRcInBsdXNtblwiOiBcIsKxXCIsXG5cdFwicGx1c3NpbVwiOiBcIuKoplwiLFxuXHRcInBsdXN0d29cIjogXCLiqKdcIixcblx0XCJwbVwiOiBcIsKxXCIsXG5cdFwiUG9pbmNhcmVwbGFuZVwiOiBcIuKEjFwiLFxuXHRcInBvaW50aW50XCI6IFwi4qiVXCIsXG5cdFwicG9wZlwiOiBcIvCdlaFcIixcblx0XCJQb3BmXCI6IFwi4oSZXCIsXG5cdFwicG91bmRcIjogXCLCo1wiLFxuXHRcInByYXBcIjogXCLiqrdcIixcblx0XCJQclwiOiBcIuKqu1wiLFxuXHRcInByXCI6IFwi4om6XCIsXG5cdFwicHJjdWVcIjogXCLiibxcIixcblx0XCJwcmVjYXBwcm94XCI6IFwi4qq3XCIsXG5cdFwicHJlY1wiOiBcIuKJulwiLFxuXHRcInByZWNjdXJseWVxXCI6IFwi4om8XCIsXG5cdFwiUHJlY2VkZXNcIjogXCLiibpcIixcblx0XCJQcmVjZWRlc0VxdWFsXCI6IFwi4qqvXCIsXG5cdFwiUHJlY2VkZXNTbGFudEVxdWFsXCI6IFwi4om8XCIsXG5cdFwiUHJlY2VkZXNUaWxkZVwiOiBcIuKJvlwiLFxuXHRcInByZWNlcVwiOiBcIuKqr1wiLFxuXHRcInByZWNuYXBwcm94XCI6IFwi4qq5XCIsXG5cdFwicHJlY25lcXFcIjogXCLiqrVcIixcblx0XCJwcmVjbnNpbVwiOiBcIuKLqFwiLFxuXHRcInByZVwiOiBcIuKqr1wiLFxuXHRcInByRVwiOiBcIuKqs1wiLFxuXHRcInByZWNzaW1cIjogXCLiib5cIixcblx0XCJwcmltZVwiOiBcIuKAslwiLFxuXHRcIlByaW1lXCI6IFwi4oCzXCIsXG5cdFwicHJpbWVzXCI6IFwi4oSZXCIsXG5cdFwicHJuYXBcIjogXCLiqrlcIixcblx0XCJwcm5FXCI6IFwi4qq1XCIsXG5cdFwicHJuc2ltXCI6IFwi4ouoXCIsXG5cdFwicHJvZFwiOiBcIuKIj1wiLFxuXHRcIlByb2R1Y3RcIjogXCLiiI9cIixcblx0XCJwcm9mYWxhclwiOiBcIuKMrlwiLFxuXHRcInByb2ZsaW5lXCI6IFwi4oySXCIsXG5cdFwicHJvZnN1cmZcIjogXCLijJNcIixcblx0XCJwcm9wXCI6IFwi4oidXCIsXG5cdFwiUHJvcG9ydGlvbmFsXCI6IFwi4oidXCIsXG5cdFwiUHJvcG9ydGlvblwiOiBcIuKIt1wiLFxuXHRcInByb3B0b1wiOiBcIuKInVwiLFxuXHRcInByc2ltXCI6IFwi4om+XCIsXG5cdFwicHJ1cmVsXCI6IFwi4oqwXCIsXG5cdFwiUHNjclwiOiBcIvCdkqtcIixcblx0XCJwc2NyXCI6IFwi8J2ThVwiLFxuXHRcIlBzaVwiOiBcIs6oXCIsXG5cdFwicHNpXCI6IFwiz4hcIixcblx0XCJwdW5jc3BcIjogXCLigIhcIixcblx0XCJRZnJcIjogXCLwnZSUXCIsXG5cdFwicWZyXCI6IFwi8J2UrlwiLFxuXHRcInFpbnRcIjogXCLiqIxcIixcblx0XCJxb3BmXCI6IFwi8J2VolwiLFxuXHRcIlFvcGZcIjogXCLihJpcIixcblx0XCJxcHJpbWVcIjogXCLigZdcIixcblx0XCJRc2NyXCI6IFwi8J2SrFwiLFxuXHRcInFzY3JcIjogXCLwnZOGXCIsXG5cdFwicXVhdGVybmlvbnNcIjogXCLihI1cIixcblx0XCJxdWF0aW50XCI6IFwi4qiWXCIsXG5cdFwicXVlc3RcIjogXCI/XCIsXG5cdFwicXVlc3RlcVwiOiBcIuKJn1wiLFxuXHRcInF1b3RcIjogXCJcXFwiXCIsXG5cdFwiUVVPVFwiOiBcIlxcXCJcIixcblx0XCJyQWFyclwiOiBcIuKHm1wiLFxuXHRcInJhY2VcIjogXCLiiL3MsVwiLFxuXHRcIlJhY3V0ZVwiOiBcIsWUXCIsXG5cdFwicmFjdXRlXCI6IFwixZVcIixcblx0XCJyYWRpY1wiOiBcIuKImlwiLFxuXHRcInJhZW1wdHl2XCI6IFwi4qazXCIsXG5cdFwicmFuZ1wiOiBcIuKfqVwiLFxuXHRcIlJhbmdcIjogXCLin6tcIixcblx0XCJyYW5nZFwiOiBcIuKmklwiLFxuXHRcInJhbmdlXCI6IFwi4qalXCIsXG5cdFwicmFuZ2xlXCI6IFwi4p+pXCIsXG5cdFwicmFxdW9cIjogXCLCu1wiLFxuXHRcInJhcnJhcFwiOiBcIuKltVwiLFxuXHRcInJhcnJiXCI6IFwi4oelXCIsXG5cdFwicmFycmJmc1wiOiBcIuKkoFwiLFxuXHRcInJhcnJjXCI6IFwi4qSzXCIsXG5cdFwicmFyclwiOiBcIuKGklwiLFxuXHRcIlJhcnJcIjogXCLihqBcIixcblx0XCJyQXJyXCI6IFwi4oeSXCIsXG5cdFwicmFycmZzXCI6IFwi4qSeXCIsXG5cdFwicmFycmhrXCI6IFwi4oaqXCIsXG5cdFwicmFycmxwXCI6IFwi4oasXCIsXG5cdFwicmFycnBsXCI6IFwi4qWFXCIsXG5cdFwicmFycnNpbVwiOiBcIuKltFwiLFxuXHRcIlJhcnJ0bFwiOiBcIuKkllwiLFxuXHRcInJhcnJ0bFwiOiBcIuKGo1wiLFxuXHRcInJhcnJ3XCI6IFwi4oadXCIsXG5cdFwicmF0YWlsXCI6IFwi4qSaXCIsXG5cdFwickF0YWlsXCI6IFwi4qScXCIsXG5cdFwicmF0aW9cIjogXCLiiLZcIixcblx0XCJyYXRpb25hbHNcIjogXCLihJpcIixcblx0XCJyYmFyclwiOiBcIuKkjVwiLFxuXHRcInJCYXJyXCI6IFwi4qSPXCIsXG5cdFwiUkJhcnJcIjogXCLipJBcIixcblx0XCJyYmJya1wiOiBcIuKds1wiLFxuXHRcInJicmFjZVwiOiBcIn1cIixcblx0XCJyYnJhY2tcIjogXCJdXCIsXG5cdFwicmJya2VcIjogXCLipoxcIixcblx0XCJyYnJrc2xkXCI6IFwi4qaOXCIsXG5cdFwicmJya3NsdVwiOiBcIuKmkFwiLFxuXHRcIlJjYXJvblwiOiBcIsWYXCIsXG5cdFwicmNhcm9uXCI6IFwixZlcIixcblx0XCJSY2VkaWxcIjogXCLFllwiLFxuXHRcInJjZWRpbFwiOiBcIsWXXCIsXG5cdFwicmNlaWxcIjogXCLijIlcIixcblx0XCJyY3ViXCI6IFwifVwiLFxuXHRcIlJjeVwiOiBcItCgXCIsXG5cdFwicmN5XCI6IFwi0YBcIixcblx0XCJyZGNhXCI6IFwi4qS3XCIsXG5cdFwicmRsZGhhclwiOiBcIuKlqVwiLFxuXHRcInJkcXVvXCI6IFwi4oCdXCIsXG5cdFwicmRxdW9yXCI6IFwi4oCdXCIsXG5cdFwicmRzaFwiOiBcIuKGs1wiLFxuXHRcInJlYWxcIjogXCLihJxcIixcblx0XCJyZWFsaW5lXCI6IFwi4oSbXCIsXG5cdFwicmVhbHBhcnRcIjogXCLihJxcIixcblx0XCJyZWFsc1wiOiBcIuKEnVwiLFxuXHRcIlJlXCI6IFwi4oScXCIsXG5cdFwicmVjdFwiOiBcIuKWrVwiLFxuXHRcInJlZ1wiOiBcIsKuXCIsXG5cdFwiUkVHXCI6IFwiwq5cIixcblx0XCJSZXZlcnNlRWxlbWVudFwiOiBcIuKIi1wiLFxuXHRcIlJldmVyc2VFcXVpbGlicml1bVwiOiBcIuKHi1wiLFxuXHRcIlJldmVyc2VVcEVxdWlsaWJyaXVtXCI6IFwi4qWvXCIsXG5cdFwicmZpc2h0XCI6IFwi4qW9XCIsXG5cdFwicmZsb29yXCI6IFwi4oyLXCIsXG5cdFwicmZyXCI6IFwi8J2Ur1wiLFxuXHRcIlJmclwiOiBcIuKEnFwiLFxuXHRcInJIYXJcIjogXCLipaRcIixcblx0XCJyaGFyZFwiOiBcIuKHgVwiLFxuXHRcInJoYXJ1XCI6IFwi4oeAXCIsXG5cdFwicmhhcnVsXCI6IFwi4qWsXCIsXG5cdFwiUmhvXCI6IFwizqFcIixcblx0XCJyaG9cIjogXCLPgVwiLFxuXHRcInJob3ZcIjogXCLPsVwiLFxuXHRcIlJpZ2h0QW5nbGVCcmFja2V0XCI6IFwi4p+pXCIsXG5cdFwiUmlnaHRBcnJvd0JhclwiOiBcIuKHpVwiLFxuXHRcInJpZ2h0YXJyb3dcIjogXCLihpJcIixcblx0XCJSaWdodEFycm93XCI6IFwi4oaSXCIsXG5cdFwiUmlnaHRhcnJvd1wiOiBcIuKHklwiLFxuXHRcIlJpZ2h0QXJyb3dMZWZ0QXJyb3dcIjogXCLih4RcIixcblx0XCJyaWdodGFycm93dGFpbFwiOiBcIuKGo1wiLFxuXHRcIlJpZ2h0Q2VpbGluZ1wiOiBcIuKMiVwiLFxuXHRcIlJpZ2h0RG91YmxlQnJhY2tldFwiOiBcIuKfp1wiLFxuXHRcIlJpZ2h0RG93blRlZVZlY3RvclwiOiBcIuKlnVwiLFxuXHRcIlJpZ2h0RG93blZlY3RvckJhclwiOiBcIuKllVwiLFxuXHRcIlJpZ2h0RG93blZlY3RvclwiOiBcIuKHglwiLFxuXHRcIlJpZ2h0Rmxvb3JcIjogXCLijItcIixcblx0XCJyaWdodGhhcnBvb25kb3duXCI6IFwi4oeBXCIsXG5cdFwicmlnaHRoYXJwb29udXBcIjogXCLih4BcIixcblx0XCJyaWdodGxlZnRhcnJvd3NcIjogXCLih4RcIixcblx0XCJyaWdodGxlZnRoYXJwb29uc1wiOiBcIuKHjFwiLFxuXHRcInJpZ2h0cmlnaHRhcnJvd3NcIjogXCLih4lcIixcblx0XCJyaWdodHNxdWlnYXJyb3dcIjogXCLihp1cIixcblx0XCJSaWdodFRlZUFycm93XCI6IFwi4oamXCIsXG5cdFwiUmlnaHRUZWVcIjogXCLiiqJcIixcblx0XCJSaWdodFRlZVZlY3RvclwiOiBcIuKlm1wiLFxuXHRcInJpZ2h0dGhyZWV0aW1lc1wiOiBcIuKLjFwiLFxuXHRcIlJpZ2h0VHJpYW5nbGVCYXJcIjogXCLip5BcIixcblx0XCJSaWdodFRyaWFuZ2xlXCI6IFwi4oqzXCIsXG5cdFwiUmlnaHRUcmlhbmdsZUVxdWFsXCI6IFwi4oq1XCIsXG5cdFwiUmlnaHRVcERvd25WZWN0b3JcIjogXCLipY9cIixcblx0XCJSaWdodFVwVGVlVmVjdG9yXCI6IFwi4qWcXCIsXG5cdFwiUmlnaHRVcFZlY3RvckJhclwiOiBcIuKllFwiLFxuXHRcIlJpZ2h0VXBWZWN0b3JcIjogXCLihr5cIixcblx0XCJSaWdodFZlY3RvckJhclwiOiBcIuKlk1wiLFxuXHRcIlJpZ2h0VmVjdG9yXCI6IFwi4oeAXCIsXG5cdFwicmluZ1wiOiBcIsuaXCIsXG5cdFwicmlzaW5nZG90c2VxXCI6IFwi4omTXCIsXG5cdFwicmxhcnJcIjogXCLih4RcIixcblx0XCJybGhhclwiOiBcIuKHjFwiLFxuXHRcInJsbVwiOiBcIuKAj1wiLFxuXHRcInJtb3VzdGFjaGVcIjogXCLijrFcIixcblx0XCJybW91c3RcIjogXCLijrFcIixcblx0XCJybm1pZFwiOiBcIuKrrlwiLFxuXHRcInJvYW5nXCI6IFwi4p+tXCIsXG5cdFwicm9hcnJcIjogXCLih75cIixcblx0XCJyb2Jya1wiOiBcIuKfp1wiLFxuXHRcInJvcGFyXCI6IFwi4qaGXCIsXG5cdFwicm9wZlwiOiBcIvCdlaNcIixcblx0XCJSb3BmXCI6IFwi4oSdXCIsXG5cdFwicm9wbHVzXCI6IFwi4qiuXCIsXG5cdFwicm90aW1lc1wiOiBcIuKotVwiLFxuXHRcIlJvdW5kSW1wbGllc1wiOiBcIuKlsFwiLFxuXHRcInJwYXJcIjogXCIpXCIsXG5cdFwicnBhcmd0XCI6IFwi4qaUXCIsXG5cdFwicnBwb2xpbnRcIjogXCLiqJJcIixcblx0XCJycmFyclwiOiBcIuKHiVwiLFxuXHRcIlJyaWdodGFycm93XCI6IFwi4oebXCIsXG5cdFwicnNhcXVvXCI6IFwi4oC6XCIsXG5cdFwicnNjclwiOiBcIvCdk4dcIixcblx0XCJSc2NyXCI6IFwi4oSbXCIsXG5cdFwicnNoXCI6IFwi4oaxXCIsXG5cdFwiUnNoXCI6IFwi4oaxXCIsXG5cdFwicnNxYlwiOiBcIl1cIixcblx0XCJyc3F1b1wiOiBcIuKAmVwiLFxuXHRcInJzcXVvclwiOiBcIuKAmVwiLFxuXHRcInJ0aHJlZVwiOiBcIuKLjFwiLFxuXHRcInJ0aW1lc1wiOiBcIuKLilwiLFxuXHRcInJ0cmlcIjogXCLilrlcIixcblx0XCJydHJpZVwiOiBcIuKKtVwiLFxuXHRcInJ0cmlmXCI6IFwi4pa4XCIsXG5cdFwicnRyaWx0cmlcIjogXCLip45cIixcblx0XCJSdWxlRGVsYXllZFwiOiBcIuKntFwiLFxuXHRcInJ1bHVoYXJcIjogXCLipahcIixcblx0XCJyeFwiOiBcIuKEnlwiLFxuXHRcIlNhY3V0ZVwiOiBcIsWaXCIsXG5cdFwic2FjdXRlXCI6IFwixZtcIixcblx0XCJzYnF1b1wiOiBcIuKAmlwiLFxuXHRcInNjYXBcIjogXCLiqrhcIixcblx0XCJTY2Fyb25cIjogXCLFoFwiLFxuXHRcInNjYXJvblwiOiBcIsWhXCIsXG5cdFwiU2NcIjogXCLiqrxcIixcblx0XCJzY1wiOiBcIuKJu1wiLFxuXHRcInNjY3VlXCI6IFwi4om9XCIsXG5cdFwic2NlXCI6IFwi4qqwXCIsXG5cdFwic2NFXCI6IFwi4qq0XCIsXG5cdFwiU2NlZGlsXCI6IFwixZ5cIixcblx0XCJzY2VkaWxcIjogXCLFn1wiLFxuXHRcIlNjaXJjXCI6IFwixZxcIixcblx0XCJzY2lyY1wiOiBcIsWdXCIsXG5cdFwic2NuYXBcIjogXCLiqrpcIixcblx0XCJzY25FXCI6IFwi4qq2XCIsXG5cdFwic2Nuc2ltXCI6IFwi4oupXCIsXG5cdFwic2Nwb2xpbnRcIjogXCLiqJNcIixcblx0XCJzY3NpbVwiOiBcIuKJv1wiLFxuXHRcIlNjeVwiOiBcItChXCIsXG5cdFwic2N5XCI6IFwi0YFcIixcblx0XCJzZG90YlwiOiBcIuKKoVwiLFxuXHRcInNkb3RcIjogXCLii4VcIixcblx0XCJzZG90ZVwiOiBcIuKpplwiLFxuXHRcInNlYXJoa1wiOiBcIuKkpVwiLFxuXHRcInNlYXJyXCI6IFwi4oaYXCIsXG5cdFwic2VBcnJcIjogXCLih5hcIixcblx0XCJzZWFycm93XCI6IFwi4oaYXCIsXG5cdFwic2VjdFwiOiBcIsKnXCIsXG5cdFwic2VtaVwiOiBcIjtcIixcblx0XCJzZXN3YXJcIjogXCLipKlcIixcblx0XCJzZXRtaW51c1wiOiBcIuKIllwiLFxuXHRcInNldG1uXCI6IFwi4oiWXCIsXG5cdFwic2V4dFwiOiBcIuKctlwiLFxuXHRcIlNmclwiOiBcIvCdlJZcIixcblx0XCJzZnJcIjogXCLwnZSwXCIsXG5cdFwic2Zyb3duXCI6IFwi4oyiXCIsXG5cdFwic2hhcnBcIjogXCLima9cIixcblx0XCJTSENIY3lcIjogXCLQqVwiLFxuXHRcInNoY2hjeVwiOiBcItGJXCIsXG5cdFwiU0hjeVwiOiBcItCoXCIsXG5cdFwic2hjeVwiOiBcItGIXCIsXG5cdFwiU2hvcnREb3duQXJyb3dcIjogXCLihpNcIixcblx0XCJTaG9ydExlZnRBcnJvd1wiOiBcIuKGkFwiLFxuXHRcInNob3J0bWlkXCI6IFwi4oijXCIsXG5cdFwic2hvcnRwYXJhbGxlbFwiOiBcIuKIpVwiLFxuXHRcIlNob3J0UmlnaHRBcnJvd1wiOiBcIuKGklwiLFxuXHRcIlNob3J0VXBBcnJvd1wiOiBcIuKGkVwiLFxuXHRcInNoeVwiOiBcIsKtXCIsXG5cdFwiU2lnbWFcIjogXCLOo1wiLFxuXHRcInNpZ21hXCI6IFwiz4NcIixcblx0XCJzaWdtYWZcIjogXCLPglwiLFxuXHRcInNpZ21hdlwiOiBcIs+CXCIsXG5cdFwic2ltXCI6IFwi4oi8XCIsXG5cdFwic2ltZG90XCI6IFwi4qmqXCIsXG5cdFwic2ltZVwiOiBcIuKJg1wiLFxuXHRcInNpbWVxXCI6IFwi4omDXCIsXG5cdFwic2ltZ1wiOiBcIuKqnlwiLFxuXHRcInNpbWdFXCI6IFwi4qqgXCIsXG5cdFwic2ltbFwiOiBcIuKqnVwiLFxuXHRcInNpbWxFXCI6IFwi4qqfXCIsXG5cdFwic2ltbmVcIjogXCLiiYZcIixcblx0XCJzaW1wbHVzXCI6IFwi4qikXCIsXG5cdFwic2ltcmFyclwiOiBcIuKlslwiLFxuXHRcInNsYXJyXCI6IFwi4oaQXCIsXG5cdFwiU21hbGxDaXJjbGVcIjogXCLiiJhcIixcblx0XCJzbWFsbHNldG1pbnVzXCI6IFwi4oiWXCIsXG5cdFwic21hc2hwXCI6IFwi4qizXCIsXG5cdFwic21lcGFyc2xcIjogXCLip6RcIixcblx0XCJzbWlkXCI6IFwi4oijXCIsXG5cdFwic21pbGVcIjogXCLijKNcIixcblx0XCJzbXRcIjogXCLiqqpcIixcblx0XCJzbXRlXCI6IFwi4qqsXCIsXG5cdFwic210ZXNcIjogXCLiqqzvuIBcIixcblx0XCJTT0ZUY3lcIjogXCLQrFwiLFxuXHRcInNvZnRjeVwiOiBcItGMXCIsXG5cdFwic29sYmFyXCI6IFwi4oy/XCIsXG5cdFwic29sYlwiOiBcIuKnhFwiLFxuXHRcInNvbFwiOiBcIi9cIixcblx0XCJTb3BmXCI6IFwi8J2VilwiLFxuXHRcInNvcGZcIjogXCLwnZWkXCIsXG5cdFwic3BhZGVzXCI6IFwi4pmgXCIsXG5cdFwic3BhZGVzdWl0XCI6IFwi4pmgXCIsXG5cdFwic3BhclwiOiBcIuKIpVwiLFxuXHRcInNxY2FwXCI6IFwi4oqTXCIsXG5cdFwic3FjYXBzXCI6IFwi4oqT77iAXCIsXG5cdFwic3FjdXBcIjogXCLiipRcIixcblx0XCJzcWN1cHNcIjogXCLiipTvuIBcIixcblx0XCJTcXJ0XCI6IFwi4oiaXCIsXG5cdFwic3FzdWJcIjogXCLiio9cIixcblx0XCJzcXN1YmVcIjogXCLiipFcIixcblx0XCJzcXN1YnNldFwiOiBcIuKKj1wiLFxuXHRcInNxc3Vic2V0ZXFcIjogXCLiipFcIixcblx0XCJzcXN1cFwiOiBcIuKKkFwiLFxuXHRcInNxc3VwZVwiOiBcIuKKklwiLFxuXHRcInNxc3Vwc2V0XCI6IFwi4oqQXCIsXG5cdFwic3FzdXBzZXRlcVwiOiBcIuKKklwiLFxuXHRcInNxdWFyZVwiOiBcIuKWoVwiLFxuXHRcIlNxdWFyZVwiOiBcIuKWoVwiLFxuXHRcIlNxdWFyZUludGVyc2VjdGlvblwiOiBcIuKKk1wiLFxuXHRcIlNxdWFyZVN1YnNldFwiOiBcIuKKj1wiLFxuXHRcIlNxdWFyZVN1YnNldEVxdWFsXCI6IFwi4oqRXCIsXG5cdFwiU3F1YXJlU3VwZXJzZXRcIjogXCLiipBcIixcblx0XCJTcXVhcmVTdXBlcnNldEVxdWFsXCI6IFwi4oqSXCIsXG5cdFwiU3F1YXJlVW5pb25cIjogXCLiipRcIixcblx0XCJzcXVhcmZcIjogXCLilqpcIixcblx0XCJzcXVcIjogXCLilqFcIixcblx0XCJzcXVmXCI6IFwi4paqXCIsXG5cdFwic3JhcnJcIjogXCLihpJcIixcblx0XCJTc2NyXCI6IFwi8J2SrlwiLFxuXHRcInNzY3JcIjogXCLwnZOIXCIsXG5cdFwic3NldG1uXCI6IFwi4oiWXCIsXG5cdFwic3NtaWxlXCI6IFwi4oyjXCIsXG5cdFwic3N0YXJmXCI6IFwi4ouGXCIsXG5cdFwiU3RhclwiOiBcIuKLhlwiLFxuXHRcInN0YXJcIjogXCLimIZcIixcblx0XCJzdGFyZlwiOiBcIuKYhVwiLFxuXHRcInN0cmFpZ2h0ZXBzaWxvblwiOiBcIs+1XCIsXG5cdFwic3RyYWlnaHRwaGlcIjogXCLPlVwiLFxuXHRcInN0cm5zXCI6IFwiwq9cIixcblx0XCJzdWJcIjogXCLiioJcIixcblx0XCJTdWJcIjogXCLii5BcIixcblx0XCJzdWJkb3RcIjogXCLiqr1cIixcblx0XCJzdWJFXCI6IFwi4quFXCIsXG5cdFwic3ViZVwiOiBcIuKKhlwiLFxuXHRcInN1YmVkb3RcIjogXCLiq4NcIixcblx0XCJzdWJtdWx0XCI6IFwi4quBXCIsXG5cdFwic3VibkVcIjogXCLiq4tcIixcblx0XCJzdWJuZVwiOiBcIuKKilwiLFxuXHRcInN1YnBsdXNcIjogXCLiqr9cIixcblx0XCJzdWJyYXJyXCI6IFwi4qW5XCIsXG5cdFwic3Vic2V0XCI6IFwi4oqCXCIsXG5cdFwiU3Vic2V0XCI6IFwi4ouQXCIsXG5cdFwic3Vic2V0ZXFcIjogXCLiioZcIixcblx0XCJzdWJzZXRlcXFcIjogXCLiq4VcIixcblx0XCJTdWJzZXRFcXVhbFwiOiBcIuKKhlwiLFxuXHRcInN1YnNldG5lcVwiOiBcIuKKilwiLFxuXHRcInN1YnNldG5lcXFcIjogXCLiq4tcIixcblx0XCJzdWJzaW1cIjogXCLiq4dcIixcblx0XCJzdWJzdWJcIjogXCLiq5VcIixcblx0XCJzdWJzdXBcIjogXCLiq5NcIixcblx0XCJzdWNjYXBwcm94XCI6IFwi4qq4XCIsXG5cdFwic3VjY1wiOiBcIuKJu1wiLFxuXHRcInN1Y2NjdXJseWVxXCI6IFwi4om9XCIsXG5cdFwiU3VjY2VlZHNcIjogXCLiibtcIixcblx0XCJTdWNjZWVkc0VxdWFsXCI6IFwi4qqwXCIsXG5cdFwiU3VjY2VlZHNTbGFudEVxdWFsXCI6IFwi4om9XCIsXG5cdFwiU3VjY2VlZHNUaWxkZVwiOiBcIuKJv1wiLFxuXHRcInN1Y2NlcVwiOiBcIuKqsFwiLFxuXHRcInN1Y2NuYXBwcm94XCI6IFwi4qq6XCIsXG5cdFwic3VjY25lcXFcIjogXCLiqrZcIixcblx0XCJzdWNjbnNpbVwiOiBcIuKLqVwiLFxuXHRcInN1Y2NzaW1cIjogXCLiib9cIixcblx0XCJTdWNoVGhhdFwiOiBcIuKIi1wiLFxuXHRcInN1bVwiOiBcIuKIkVwiLFxuXHRcIlN1bVwiOiBcIuKIkVwiLFxuXHRcInN1bmdcIjogXCLimapcIixcblx0XCJzdXAxXCI6IFwiwrlcIixcblx0XCJzdXAyXCI6IFwiwrJcIixcblx0XCJzdXAzXCI6IFwiwrNcIixcblx0XCJzdXBcIjogXCLiioNcIixcblx0XCJTdXBcIjogXCLii5FcIixcblx0XCJzdXBkb3RcIjogXCLiqr5cIixcblx0XCJzdXBkc3ViXCI6IFwi4quYXCIsXG5cdFwic3VwRVwiOiBcIuKrhlwiLFxuXHRcInN1cGVcIjogXCLiiodcIixcblx0XCJzdXBlZG90XCI6IFwi4quEXCIsXG5cdFwiU3VwZXJzZXRcIjogXCLiioNcIixcblx0XCJTdXBlcnNldEVxdWFsXCI6IFwi4oqHXCIsXG5cdFwic3VwaHNvbFwiOiBcIuKfiVwiLFxuXHRcInN1cGhzdWJcIjogXCLiq5dcIixcblx0XCJzdXBsYXJyXCI6IFwi4qW7XCIsXG5cdFwic3VwbXVsdFwiOiBcIuKrglwiLFxuXHRcInN1cG5FXCI6IFwi4quMXCIsXG5cdFwic3VwbmVcIjogXCLiiotcIixcblx0XCJzdXBwbHVzXCI6IFwi4quAXCIsXG5cdFwic3Vwc2V0XCI6IFwi4oqDXCIsXG5cdFwiU3Vwc2V0XCI6IFwi4ouRXCIsXG5cdFwic3Vwc2V0ZXFcIjogXCLiiodcIixcblx0XCJzdXBzZXRlcXFcIjogXCLiq4ZcIixcblx0XCJzdXBzZXRuZXFcIjogXCLiiotcIixcblx0XCJzdXBzZXRuZXFxXCI6IFwi4quMXCIsXG5cdFwic3Vwc2ltXCI6IFwi4quIXCIsXG5cdFwic3Vwc3ViXCI6IFwi4quUXCIsXG5cdFwic3Vwc3VwXCI6IFwi4quWXCIsXG5cdFwic3dhcmhrXCI6IFwi4qSmXCIsXG5cdFwic3dhcnJcIjogXCLihplcIixcblx0XCJzd0FyclwiOiBcIuKHmVwiLFxuXHRcInN3YXJyb3dcIjogXCLihplcIixcblx0XCJzd253YXJcIjogXCLipKpcIixcblx0XCJzemxpZ1wiOiBcIsOfXCIsXG5cdFwiVGFiXCI6IFwiXFx0XCIsXG5cdFwidGFyZ2V0XCI6IFwi4oyWXCIsXG5cdFwiVGF1XCI6IFwizqRcIixcblx0XCJ0YXVcIjogXCLPhFwiLFxuXHRcInRicmtcIjogXCLijrRcIixcblx0XCJUY2Fyb25cIjogXCLFpFwiLFxuXHRcInRjYXJvblwiOiBcIsWlXCIsXG5cdFwiVGNlZGlsXCI6IFwixaJcIixcblx0XCJ0Y2VkaWxcIjogXCLFo1wiLFxuXHRcIlRjeVwiOiBcItCiXCIsXG5cdFwidGN5XCI6IFwi0YJcIixcblx0XCJ0ZG90XCI6IFwi4oObXCIsXG5cdFwidGVscmVjXCI6IFwi4oyVXCIsXG5cdFwiVGZyXCI6IFwi8J2Ul1wiLFxuXHRcInRmclwiOiBcIvCdlLFcIixcblx0XCJ0aGVyZTRcIjogXCLiiLRcIixcblx0XCJ0aGVyZWZvcmVcIjogXCLiiLRcIixcblx0XCJUaGVyZWZvcmVcIjogXCLiiLRcIixcblx0XCJUaGV0YVwiOiBcIs6YXCIsXG5cdFwidGhldGFcIjogXCLOuFwiLFxuXHRcInRoZXRhc3ltXCI6IFwiz5FcIixcblx0XCJ0aGV0YXZcIjogXCLPkVwiLFxuXHRcInRoaWNrYXBwcm94XCI6IFwi4omIXCIsXG5cdFwidGhpY2tzaW1cIjogXCLiiLxcIixcblx0XCJUaGlja1NwYWNlXCI6IFwi4oGf4oCKXCIsXG5cdFwiVGhpblNwYWNlXCI6IFwi4oCJXCIsXG5cdFwidGhpbnNwXCI6IFwi4oCJXCIsXG5cdFwidGhrYXBcIjogXCLiiYhcIixcblx0XCJ0aGtzaW1cIjogXCLiiLxcIixcblx0XCJUSE9STlwiOiBcIsOeXCIsXG5cdFwidGhvcm5cIjogXCLDvlwiLFxuXHRcInRpbGRlXCI6IFwiy5xcIixcblx0XCJUaWxkZVwiOiBcIuKIvFwiLFxuXHRcIlRpbGRlRXF1YWxcIjogXCLiiYNcIixcblx0XCJUaWxkZUZ1bGxFcXVhbFwiOiBcIuKJhVwiLFxuXHRcIlRpbGRlVGlsZGVcIjogXCLiiYhcIixcblx0XCJ0aW1lc2JhclwiOiBcIuKosVwiLFxuXHRcInRpbWVzYlwiOiBcIuKKoFwiLFxuXHRcInRpbWVzXCI6IFwiw5dcIixcblx0XCJ0aW1lc2RcIjogXCLiqLBcIixcblx0XCJ0aW50XCI6IFwi4oitXCIsXG5cdFwidG9lYVwiOiBcIuKkqFwiLFxuXHRcInRvcGJvdFwiOiBcIuKMtlwiLFxuXHRcInRvcGNpclwiOiBcIuKrsVwiLFxuXHRcInRvcFwiOiBcIuKKpFwiLFxuXHRcIlRvcGZcIjogXCLwnZWLXCIsXG5cdFwidG9wZlwiOiBcIvCdlaVcIixcblx0XCJ0b3Bmb3JrXCI6IFwi4quaXCIsXG5cdFwidG9zYVwiOiBcIuKkqVwiLFxuXHRcInRwcmltZVwiOiBcIuKAtFwiLFxuXHRcInRyYWRlXCI6IFwi4oSiXCIsXG5cdFwiVFJBREVcIjogXCLihKJcIixcblx0XCJ0cmlhbmdsZVwiOiBcIuKWtVwiLFxuXHRcInRyaWFuZ2xlZG93blwiOiBcIuKWv1wiLFxuXHRcInRyaWFuZ2xlbGVmdFwiOiBcIuKXg1wiLFxuXHRcInRyaWFuZ2xlbGVmdGVxXCI6IFwi4oq0XCIsXG5cdFwidHJpYW5nbGVxXCI6IFwi4omcXCIsXG5cdFwidHJpYW5nbGVyaWdodFwiOiBcIuKWuVwiLFxuXHRcInRyaWFuZ2xlcmlnaHRlcVwiOiBcIuKKtVwiLFxuXHRcInRyaWRvdFwiOiBcIuKXrFwiLFxuXHRcInRyaWVcIjogXCLiiZxcIixcblx0XCJ0cmltaW51c1wiOiBcIuKoulwiLFxuXHRcIlRyaXBsZURvdFwiOiBcIuKDm1wiLFxuXHRcInRyaXBsdXNcIjogXCLiqLlcIixcblx0XCJ0cmlzYlwiOiBcIuKnjVwiLFxuXHRcInRyaXRpbWVcIjogXCLiqLtcIixcblx0XCJ0cnBleml1bVwiOiBcIuKPolwiLFxuXHRcIlRzY3JcIjogXCLwnZKvXCIsXG5cdFwidHNjclwiOiBcIvCdk4lcIixcblx0XCJUU2N5XCI6IFwi0KZcIixcblx0XCJ0c2N5XCI6IFwi0YZcIixcblx0XCJUU0hjeVwiOiBcItCLXCIsXG5cdFwidHNoY3lcIjogXCLRm1wiLFxuXHRcIlRzdHJva1wiOiBcIsWmXCIsXG5cdFwidHN0cm9rXCI6IFwixadcIixcblx0XCJ0d2l4dFwiOiBcIuKJrFwiLFxuXHRcInR3b2hlYWRsZWZ0YXJyb3dcIjogXCLihp5cIixcblx0XCJ0d29oZWFkcmlnaHRhcnJvd1wiOiBcIuKGoFwiLFxuXHRcIlVhY3V0ZVwiOiBcIsOaXCIsXG5cdFwidWFjdXRlXCI6IFwiw7pcIixcblx0XCJ1YXJyXCI6IFwi4oaRXCIsXG5cdFwiVWFyclwiOiBcIuKGn1wiLFxuXHRcInVBcnJcIjogXCLih5FcIixcblx0XCJVYXJyb2NpclwiOiBcIuKliVwiLFxuXHRcIlVicmN5XCI6IFwi0I5cIixcblx0XCJ1YnJjeVwiOiBcItGeXCIsXG5cdFwiVWJyZXZlXCI6IFwixaxcIixcblx0XCJ1YnJldmVcIjogXCLFrVwiLFxuXHRcIlVjaXJjXCI6IFwiw5tcIixcblx0XCJ1Y2lyY1wiOiBcIsO7XCIsXG5cdFwiVWN5XCI6IFwi0KNcIixcblx0XCJ1Y3lcIjogXCLRg1wiLFxuXHRcInVkYXJyXCI6IFwi4oeFXCIsXG5cdFwiVWRibGFjXCI6IFwixbBcIixcblx0XCJ1ZGJsYWNcIjogXCLFsVwiLFxuXHRcInVkaGFyXCI6IFwi4qWuXCIsXG5cdFwidWZpc2h0XCI6IFwi4qW+XCIsXG5cdFwiVWZyXCI6IFwi8J2UmFwiLFxuXHRcInVmclwiOiBcIvCdlLJcIixcblx0XCJVZ3JhdmVcIjogXCLDmVwiLFxuXHRcInVncmF2ZVwiOiBcIsO5XCIsXG5cdFwidUhhclwiOiBcIuKlo1wiLFxuXHRcInVoYXJsXCI6IFwi4oa/XCIsXG5cdFwidWhhcnJcIjogXCLihr5cIixcblx0XCJ1aGJsa1wiOiBcIuKWgFwiLFxuXHRcInVsY29yblwiOiBcIuKMnFwiLFxuXHRcInVsY29ybmVyXCI6IFwi4oycXCIsXG5cdFwidWxjcm9wXCI6IFwi4oyPXCIsXG5cdFwidWx0cmlcIjogXCLil7hcIixcblx0XCJVbWFjclwiOiBcIsWqXCIsXG5cdFwidW1hY3JcIjogXCLFq1wiLFxuXHRcInVtbFwiOiBcIsKoXCIsXG5cdFwiVW5kZXJCYXJcIjogXCJfXCIsXG5cdFwiVW5kZXJCcmFjZVwiOiBcIuKPn1wiLFxuXHRcIlVuZGVyQnJhY2tldFwiOiBcIuKOtVwiLFxuXHRcIlVuZGVyUGFyZW50aGVzaXNcIjogXCLij51cIixcblx0XCJVbmlvblwiOiBcIuKLg1wiLFxuXHRcIlVuaW9uUGx1c1wiOiBcIuKKjlwiLFxuXHRcIlVvZ29uXCI6IFwixbJcIixcblx0XCJ1b2dvblwiOiBcIsWzXCIsXG5cdFwiVW9wZlwiOiBcIvCdlYxcIixcblx0XCJ1b3BmXCI6IFwi8J2VplwiLFxuXHRcIlVwQXJyb3dCYXJcIjogXCLipJJcIixcblx0XCJ1cGFycm93XCI6IFwi4oaRXCIsXG5cdFwiVXBBcnJvd1wiOiBcIuKGkVwiLFxuXHRcIlVwYXJyb3dcIjogXCLih5FcIixcblx0XCJVcEFycm93RG93bkFycm93XCI6IFwi4oeFXCIsXG5cdFwidXBkb3duYXJyb3dcIjogXCLihpVcIixcblx0XCJVcERvd25BcnJvd1wiOiBcIuKGlVwiLFxuXHRcIlVwZG93bmFycm93XCI6IFwi4oeVXCIsXG5cdFwiVXBFcXVpbGlicml1bVwiOiBcIuKlrlwiLFxuXHRcInVwaGFycG9vbmxlZnRcIjogXCLihr9cIixcblx0XCJ1cGhhcnBvb25yaWdodFwiOiBcIuKGvlwiLFxuXHRcInVwbHVzXCI6IFwi4oqOXCIsXG5cdFwiVXBwZXJMZWZ0QXJyb3dcIjogXCLihpZcIixcblx0XCJVcHBlclJpZ2h0QXJyb3dcIjogXCLihpdcIixcblx0XCJ1cHNpXCI6IFwiz4VcIixcblx0XCJVcHNpXCI6IFwiz5JcIixcblx0XCJ1cHNpaFwiOiBcIs+SXCIsXG5cdFwiVXBzaWxvblwiOiBcIs6lXCIsXG5cdFwidXBzaWxvblwiOiBcIs+FXCIsXG5cdFwiVXBUZWVBcnJvd1wiOiBcIuKGpVwiLFxuXHRcIlVwVGVlXCI6IFwi4oqlXCIsXG5cdFwidXB1cGFycm93c1wiOiBcIuKHiFwiLFxuXHRcInVyY29yblwiOiBcIuKMnVwiLFxuXHRcInVyY29ybmVyXCI6IFwi4oydXCIsXG5cdFwidXJjcm9wXCI6IFwi4oyOXCIsXG5cdFwiVXJpbmdcIjogXCLFrlwiLFxuXHRcInVyaW5nXCI6IFwixa9cIixcblx0XCJ1cnRyaVwiOiBcIuKXuVwiLFxuXHRcIlVzY3JcIjogXCLwnZKwXCIsXG5cdFwidXNjclwiOiBcIvCdk4pcIixcblx0XCJ1dGRvdFwiOiBcIuKLsFwiLFxuXHRcIlV0aWxkZVwiOiBcIsWoXCIsXG5cdFwidXRpbGRlXCI6IFwixalcIixcblx0XCJ1dHJpXCI6IFwi4pa1XCIsXG5cdFwidXRyaWZcIjogXCLilrRcIixcblx0XCJ1dWFyclwiOiBcIuKHiFwiLFxuXHRcIlV1bWxcIjogXCLDnFwiLFxuXHRcInV1bWxcIjogXCLDvFwiLFxuXHRcInV3YW5nbGVcIjogXCLipqdcIixcblx0XCJ2YW5ncnRcIjogXCLippxcIixcblx0XCJ2YXJlcHNpbG9uXCI6IFwiz7VcIixcblx0XCJ2YXJrYXBwYVwiOiBcIs+wXCIsXG5cdFwidmFybm90aGluZ1wiOiBcIuKIhVwiLFxuXHRcInZhcnBoaVwiOiBcIs+VXCIsXG5cdFwidmFycGlcIjogXCLPllwiLFxuXHRcInZhcnByb3B0b1wiOiBcIuKInVwiLFxuXHRcInZhcnJcIjogXCLihpVcIixcblx0XCJ2QXJyXCI6IFwi4oeVXCIsXG5cdFwidmFycmhvXCI6IFwiz7FcIixcblx0XCJ2YXJzaWdtYVwiOiBcIs+CXCIsXG5cdFwidmFyc3Vic2V0bmVxXCI6IFwi4oqK77iAXCIsXG5cdFwidmFyc3Vic2V0bmVxcVwiOiBcIuKri++4gFwiLFxuXHRcInZhcnN1cHNldG5lcVwiOiBcIuKKi++4gFwiLFxuXHRcInZhcnN1cHNldG5lcXFcIjogXCLiq4zvuIBcIixcblx0XCJ2YXJ0aGV0YVwiOiBcIs+RXCIsXG5cdFwidmFydHJpYW5nbGVsZWZ0XCI6IFwi4oqyXCIsXG5cdFwidmFydHJpYW5nbGVyaWdodFwiOiBcIuKKs1wiLFxuXHRcInZCYXJcIjogXCLiq6hcIixcblx0XCJWYmFyXCI6IFwi4qurXCIsXG5cdFwidkJhcnZcIjogXCLiq6lcIixcblx0XCJWY3lcIjogXCLQklwiLFxuXHRcInZjeVwiOiBcItCyXCIsXG5cdFwidmRhc2hcIjogXCLiiqJcIixcblx0XCJ2RGFzaFwiOiBcIuKKqFwiLFxuXHRcIlZkYXNoXCI6IFwi4oqpXCIsXG5cdFwiVkRhc2hcIjogXCLiiqtcIixcblx0XCJWZGFzaGxcIjogXCLiq6ZcIixcblx0XCJ2ZWViYXJcIjogXCLiirtcIixcblx0XCJ2ZWVcIjogXCLiiKhcIixcblx0XCJWZWVcIjogXCLii4FcIixcblx0XCJ2ZWVlcVwiOiBcIuKJmlwiLFxuXHRcInZlbGxpcFwiOiBcIuKLrlwiLFxuXHRcInZlcmJhclwiOiBcInxcIixcblx0XCJWZXJiYXJcIjogXCLigJZcIixcblx0XCJ2ZXJ0XCI6IFwifFwiLFxuXHRcIlZlcnRcIjogXCLigJZcIixcblx0XCJWZXJ0aWNhbEJhclwiOiBcIuKIo1wiLFxuXHRcIlZlcnRpY2FsTGluZVwiOiBcInxcIixcblx0XCJWZXJ0aWNhbFNlcGFyYXRvclwiOiBcIuKdmFwiLFxuXHRcIlZlcnRpY2FsVGlsZGVcIjogXCLiiYBcIixcblx0XCJWZXJ5VGhpblNwYWNlXCI6IFwi4oCKXCIsXG5cdFwiVmZyXCI6IFwi8J2UmVwiLFxuXHRcInZmclwiOiBcIvCdlLNcIixcblx0XCJ2bHRyaVwiOiBcIuKKslwiLFxuXHRcInZuc3ViXCI6IFwi4oqC4oOSXCIsXG5cdFwidm5zdXBcIjogXCLiioPig5JcIixcblx0XCJWb3BmXCI6IFwi8J2VjVwiLFxuXHRcInZvcGZcIjogXCLwnZWnXCIsXG5cdFwidnByb3BcIjogXCLiiJ1cIixcblx0XCJ2cnRyaVwiOiBcIuKKs1wiLFxuXHRcIlZzY3JcIjogXCLwnZKxXCIsXG5cdFwidnNjclwiOiBcIvCdk4tcIixcblx0XCJ2c3VibkVcIjogXCLiq4vvuIBcIixcblx0XCJ2c3VibmVcIjogXCLiiorvuIBcIixcblx0XCJ2c3VwbkVcIjogXCLiq4zvuIBcIixcblx0XCJ2c3VwbmVcIjogXCLiiovvuIBcIixcblx0XCJWdmRhc2hcIjogXCLiiqpcIixcblx0XCJ2emlnemFnXCI6IFwi4qaaXCIsXG5cdFwiV2NpcmNcIjogXCLFtFwiLFxuXHRcIndjaXJjXCI6IFwixbVcIixcblx0XCJ3ZWRiYXJcIjogXCLiqZ9cIixcblx0XCJ3ZWRnZVwiOiBcIuKIp1wiLFxuXHRcIldlZGdlXCI6IFwi4ouAXCIsXG5cdFwid2VkZ2VxXCI6IFwi4omZXCIsXG5cdFwid2VpZXJwXCI6IFwi4oSYXCIsXG5cdFwiV2ZyXCI6IFwi8J2UmlwiLFxuXHRcIndmclwiOiBcIvCdlLRcIixcblx0XCJXb3BmXCI6IFwi8J2VjlwiLFxuXHRcIndvcGZcIjogXCLwnZWoXCIsXG5cdFwid3BcIjogXCLihJhcIixcblx0XCJ3clwiOiBcIuKJgFwiLFxuXHRcIndyZWF0aFwiOiBcIuKJgFwiLFxuXHRcIldzY3JcIjogXCLwnZKyXCIsXG5cdFwid3NjclwiOiBcIvCdk4xcIixcblx0XCJ4Y2FwXCI6IFwi4ouCXCIsXG5cdFwieGNpcmNcIjogXCLil69cIixcblx0XCJ4Y3VwXCI6IFwi4ouDXCIsXG5cdFwieGR0cmlcIjogXCLilr1cIixcblx0XCJYZnJcIjogXCLwnZSbXCIsXG5cdFwieGZyXCI6IFwi8J2UtVwiLFxuXHRcInhoYXJyXCI6IFwi4p+3XCIsXG5cdFwieGhBcnJcIjogXCLin7pcIixcblx0XCJYaVwiOiBcIs6eXCIsXG5cdFwieGlcIjogXCLOvlwiLFxuXHRcInhsYXJyXCI6IFwi4p+1XCIsXG5cdFwieGxBcnJcIjogXCLin7hcIixcblx0XCJ4bWFwXCI6IFwi4p+8XCIsXG5cdFwieG5pc1wiOiBcIuKLu1wiLFxuXHRcInhvZG90XCI6IFwi4qiAXCIsXG5cdFwiWG9wZlwiOiBcIvCdlY9cIixcblx0XCJ4b3BmXCI6IFwi8J2VqVwiLFxuXHRcInhvcGx1c1wiOiBcIuKogVwiLFxuXHRcInhvdGltZVwiOiBcIuKoglwiLFxuXHRcInhyYXJyXCI6IFwi4p+2XCIsXG5cdFwieHJBcnJcIjogXCLin7lcIixcblx0XCJYc2NyXCI6IFwi8J2Ss1wiLFxuXHRcInhzY3JcIjogXCLwnZONXCIsXG5cdFwieHNxY3VwXCI6IFwi4qiGXCIsXG5cdFwieHVwbHVzXCI6IFwi4qiEXCIsXG5cdFwieHV0cmlcIjogXCLilrNcIixcblx0XCJ4dmVlXCI6IFwi4ouBXCIsXG5cdFwieHdlZGdlXCI6IFwi4ouAXCIsXG5cdFwiWWFjdXRlXCI6IFwiw51cIixcblx0XCJ5YWN1dGVcIjogXCLDvVwiLFxuXHRcIllBY3lcIjogXCLQr1wiLFxuXHRcInlhY3lcIjogXCLRj1wiLFxuXHRcIlljaXJjXCI6IFwixbZcIixcblx0XCJ5Y2lyY1wiOiBcIsW3XCIsXG5cdFwiWWN5XCI6IFwi0KtcIixcblx0XCJ5Y3lcIjogXCLRi1wiLFxuXHRcInllblwiOiBcIsKlXCIsXG5cdFwiWWZyXCI6IFwi8J2UnFwiLFxuXHRcInlmclwiOiBcIvCdlLZcIixcblx0XCJZSWN5XCI6IFwi0IdcIixcblx0XCJ5aWN5XCI6IFwi0ZdcIixcblx0XCJZb3BmXCI6IFwi8J2VkFwiLFxuXHRcInlvcGZcIjogXCLwnZWqXCIsXG5cdFwiWXNjclwiOiBcIvCdkrRcIixcblx0XCJ5c2NyXCI6IFwi8J2TjlwiLFxuXHRcIllVY3lcIjogXCLQrlwiLFxuXHRcInl1Y3lcIjogXCLRjlwiLFxuXHRcInl1bWxcIjogXCLDv1wiLFxuXHRcIll1bWxcIjogXCLFuFwiLFxuXHRcIlphY3V0ZVwiOiBcIsW5XCIsXG5cdFwiemFjdXRlXCI6IFwixbpcIixcblx0XCJaY2Fyb25cIjogXCLFvVwiLFxuXHRcInpjYXJvblwiOiBcIsW+XCIsXG5cdFwiWmN5XCI6IFwi0JdcIixcblx0XCJ6Y3lcIjogXCLQt1wiLFxuXHRcIlpkb3RcIjogXCLFu1wiLFxuXHRcInpkb3RcIjogXCLFvFwiLFxuXHRcInplZXRyZlwiOiBcIuKEqFwiLFxuXHRcIlplcm9XaWR0aFNwYWNlXCI6IFwi4oCLXCIsXG5cdFwiWmV0YVwiOiBcIs6WXCIsXG5cdFwiemV0YVwiOiBcIs62XCIsXG5cdFwiemZyXCI6IFwi8J2Ut1wiLFxuXHRcIlpmclwiOiBcIuKEqFwiLFxuXHRcIlpIY3lcIjogXCLQllwiLFxuXHRcInpoY3lcIjogXCLQtlwiLFxuXHRcInppZ3JhcnJcIjogXCLih51cIixcblx0XCJ6b3BmXCI6IFwi8J2Vq1wiLFxuXHRcIlpvcGZcIjogXCLihKRcIixcblx0XCJac2NyXCI6IFwi8J2StVwiLFxuXHRcInpzY3JcIjogXCLwnZOPXCIsXG5cdFwiendqXCI6IFwi4oCNXCIsXG5cdFwiendualwiOiBcIuKAjFwiXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvZW50aXRpZXMuanNvblxuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZW50aXR5TWFwID0gcmVxdWlyZShcIi4uL21hcHMvZW50aXRpZXMuanNvblwiKSxcbiAgICBsZWdhY3lNYXAgPSByZXF1aXJlKFwiLi4vbWFwcy9sZWdhY3kuanNvblwiKSxcbiAgICB4bWxNYXAgICAgPSByZXF1aXJlKFwiLi4vbWFwcy94bWwuanNvblwiKSxcbiAgICBkZWNvZGVDb2RlUG9pbnQgPSByZXF1aXJlKFwiLi9kZWNvZGVfY29kZXBvaW50LmpzXCIpO1xuXG52YXIgZGVjb2RlWE1MU3RyaWN0ICA9IGdldFN0cmljdERlY29kZXIoeG1sTWFwKSxcbiAgICBkZWNvZGVIVE1MU3RyaWN0ID0gZ2V0U3RyaWN0RGVjb2RlcihlbnRpdHlNYXApO1xuXG5mdW5jdGlvbiBnZXRTdHJpY3REZWNvZGVyKG1hcCl7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMobWFwKS5qb2luKFwifFwiKSxcblx0ICAgIHJlcGxhY2UgPSBnZXRSZXBsYWNlcihtYXApO1xuXG5cdGtleXMgKz0gXCJ8I1t4WF1bXFxcXGRhLWZBLUZdK3wjXFxcXGQrXCI7XG5cblx0dmFyIHJlID0gbmV3IFJlZ0V4cChcIiYoPzpcIiArIGtleXMgKyBcIik7XCIsIFwiZ1wiKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc3RyKXtcblx0XHRyZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZShyZSwgcmVwbGFjZSk7XG5cdH07XG59XG5cbnZhciBkZWNvZGVIVE1MID0gKGZ1bmN0aW9uKCl7XG5cdHZhciBsZWdhY3kgPSBPYmplY3Qua2V5cyhsZWdhY3lNYXApXG5cdFx0LnNvcnQoc29ydGVyKTtcblxuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudGl0eU1hcClcblx0XHQuc29ydChzb3J0ZXIpO1xuXG5cdGZvcih2YXIgaSA9IDAsIGogPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKyl7XG5cdFx0aWYobGVnYWN5W2pdID09PSBrZXlzW2ldKXtcblx0XHRcdGtleXNbaV0gKz0gXCI7P1wiO1xuXHRcdFx0aisrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRrZXlzW2ldICs9IFwiO1wiO1xuXHRcdH1cblx0fVxuXG5cdHZhciByZSA9IG5ldyBSZWdFeHAoXCImKD86XCIgKyBrZXlzLmpvaW4oXCJ8XCIpICsgXCJ8I1t4WF1bXFxcXGRhLWZBLUZdKzs/fCNcXFxcZCs7PylcIiwgXCJnXCIpLFxuXHQgICAgcmVwbGFjZSA9IGdldFJlcGxhY2VyKGVudGl0eU1hcCk7XG5cblx0ZnVuY3Rpb24gcmVwbGFjZXIoc3RyKXtcblx0XHRpZihzdHIuc3Vic3RyKC0xKSAhPT0gXCI7XCIpIHN0ciArPSBcIjtcIjtcblx0XHRyZXR1cm4gcmVwbGFjZShzdHIpO1xuXHR9XG5cblx0Ly9UT0RPIGNvbnNpZGVyIGNyZWF0aW5nIGEgbWVyZ2VkIG1hcFxuXHRyZXR1cm4gZnVuY3Rpb24oc3RyKXtcblx0XHRyZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZShyZSwgcmVwbGFjZXIpO1xuXHR9O1xufSgpKTtcblxuZnVuY3Rpb24gc29ydGVyKGEsIGIpe1xuXHRyZXR1cm4gYSA8IGIgPyAxIDogLTE7XG59XG5cbmZ1bmN0aW9uIGdldFJlcGxhY2VyKG1hcCl7XG5cdHJldHVybiBmdW5jdGlvbiByZXBsYWNlKHN0cil7XG5cdFx0aWYoc3RyLmNoYXJBdCgxKSA9PT0gXCIjXCIpe1xuXHRcdFx0aWYoc3RyLmNoYXJBdCgyKSA9PT0gXCJYXCIgfHwgc3RyLmNoYXJBdCgyKSA9PT0gXCJ4XCIpe1xuXHRcdFx0XHRyZXR1cm4gZGVjb2RlQ29kZVBvaW50KHBhcnNlSW50KHN0ci5zdWJzdHIoMyksIDE2KSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZGVjb2RlQ29kZVBvaW50KHBhcnNlSW50KHN0ci5zdWJzdHIoMiksIDEwKSk7XG5cdFx0fVxuXHRcdHJldHVybiBtYXBbc3RyLnNsaWNlKDEsIC0xKV07XG5cdH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRYTUw6IGRlY29kZVhNTFN0cmljdCxcblx0SFRNTDogZGVjb2RlSFRNTCxcblx0SFRNTFN0cmljdDogZGVjb2RlSFRNTFN0cmljdFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2RlY29kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJBYWN1dGVcIjogXCLDgVwiLFxuXHRcImFhY3V0ZVwiOiBcIsOhXCIsXG5cdFwiQWNpcmNcIjogXCLDglwiLFxuXHRcImFjaXJjXCI6IFwiw6JcIixcblx0XCJhY3V0ZVwiOiBcIsK0XCIsXG5cdFwiQUVsaWdcIjogXCLDhlwiLFxuXHRcImFlbGlnXCI6IFwiw6ZcIixcblx0XCJBZ3JhdmVcIjogXCLDgFwiLFxuXHRcImFncmF2ZVwiOiBcIsOgXCIsXG5cdFwiYW1wXCI6IFwiJlwiLFxuXHRcIkFNUFwiOiBcIiZcIixcblx0XCJBcmluZ1wiOiBcIsOFXCIsXG5cdFwiYXJpbmdcIjogXCLDpVwiLFxuXHRcIkF0aWxkZVwiOiBcIsODXCIsXG5cdFwiYXRpbGRlXCI6IFwiw6NcIixcblx0XCJBdW1sXCI6IFwiw4RcIixcblx0XCJhdW1sXCI6IFwiw6RcIixcblx0XCJicnZiYXJcIjogXCLCplwiLFxuXHRcIkNjZWRpbFwiOiBcIsOHXCIsXG5cdFwiY2NlZGlsXCI6IFwiw6dcIixcblx0XCJjZWRpbFwiOiBcIsK4XCIsXG5cdFwiY2VudFwiOiBcIsKiXCIsXG5cdFwiY29weVwiOiBcIsKpXCIsXG5cdFwiQ09QWVwiOiBcIsKpXCIsXG5cdFwiY3VycmVuXCI6IFwiwqRcIixcblx0XCJkZWdcIjogXCLCsFwiLFxuXHRcImRpdmlkZVwiOiBcIsO3XCIsXG5cdFwiRWFjdXRlXCI6IFwiw4lcIixcblx0XCJlYWN1dGVcIjogXCLDqVwiLFxuXHRcIkVjaXJjXCI6IFwiw4pcIixcblx0XCJlY2lyY1wiOiBcIsOqXCIsXG5cdFwiRWdyYXZlXCI6IFwiw4hcIixcblx0XCJlZ3JhdmVcIjogXCLDqFwiLFxuXHRcIkVUSFwiOiBcIsOQXCIsXG5cdFwiZXRoXCI6IFwiw7BcIixcblx0XCJFdW1sXCI6IFwiw4tcIixcblx0XCJldW1sXCI6IFwiw6tcIixcblx0XCJmcmFjMTJcIjogXCLCvVwiLFxuXHRcImZyYWMxNFwiOiBcIsK8XCIsXG5cdFwiZnJhYzM0XCI6IFwiwr5cIixcblx0XCJndFwiOiBcIj5cIixcblx0XCJHVFwiOiBcIj5cIixcblx0XCJJYWN1dGVcIjogXCLDjVwiLFxuXHRcImlhY3V0ZVwiOiBcIsOtXCIsXG5cdFwiSWNpcmNcIjogXCLDjlwiLFxuXHRcImljaXJjXCI6IFwiw65cIixcblx0XCJpZXhjbFwiOiBcIsKhXCIsXG5cdFwiSWdyYXZlXCI6IFwiw4xcIixcblx0XCJpZ3JhdmVcIjogXCLDrFwiLFxuXHRcImlxdWVzdFwiOiBcIsK/XCIsXG5cdFwiSXVtbFwiOiBcIsOPXCIsXG5cdFwiaXVtbFwiOiBcIsOvXCIsXG5cdFwibGFxdW9cIjogXCLCq1wiLFxuXHRcImx0XCI6IFwiPFwiLFxuXHRcIkxUXCI6IFwiPFwiLFxuXHRcIm1hY3JcIjogXCLCr1wiLFxuXHRcIm1pY3JvXCI6IFwiwrVcIixcblx0XCJtaWRkb3RcIjogXCLCt1wiLFxuXHRcIm5ic3BcIjogXCLCoFwiLFxuXHRcIm5vdFwiOiBcIsKsXCIsXG5cdFwiTnRpbGRlXCI6IFwiw5FcIixcblx0XCJudGlsZGVcIjogXCLDsVwiLFxuXHRcIk9hY3V0ZVwiOiBcIsOTXCIsXG5cdFwib2FjdXRlXCI6IFwiw7NcIixcblx0XCJPY2lyY1wiOiBcIsOUXCIsXG5cdFwib2NpcmNcIjogXCLDtFwiLFxuXHRcIk9ncmF2ZVwiOiBcIsOSXCIsXG5cdFwib2dyYXZlXCI6IFwiw7JcIixcblx0XCJvcmRmXCI6IFwiwqpcIixcblx0XCJvcmRtXCI6IFwiwrpcIixcblx0XCJPc2xhc2hcIjogXCLDmFwiLFxuXHRcIm9zbGFzaFwiOiBcIsO4XCIsXG5cdFwiT3RpbGRlXCI6IFwiw5VcIixcblx0XCJvdGlsZGVcIjogXCLDtVwiLFxuXHRcIk91bWxcIjogXCLDllwiLFxuXHRcIm91bWxcIjogXCLDtlwiLFxuXHRcInBhcmFcIjogXCLCtlwiLFxuXHRcInBsdXNtblwiOiBcIsKxXCIsXG5cdFwicG91bmRcIjogXCLCo1wiLFxuXHRcInF1b3RcIjogXCJcXFwiXCIsXG5cdFwiUVVPVFwiOiBcIlxcXCJcIixcblx0XCJyYXF1b1wiOiBcIsK7XCIsXG5cdFwicmVnXCI6IFwiwq5cIixcblx0XCJSRUdcIjogXCLCrlwiLFxuXHRcInNlY3RcIjogXCLCp1wiLFxuXHRcInNoeVwiOiBcIsKtXCIsXG5cdFwic3VwMVwiOiBcIsK5XCIsXG5cdFwic3VwMlwiOiBcIsKyXCIsXG5cdFwic3VwM1wiOiBcIsKzXCIsXG5cdFwic3psaWdcIjogXCLDn1wiLFxuXHRcIlRIT1JOXCI6IFwiw55cIixcblx0XCJ0aG9yblwiOiBcIsO+XCIsXG5cdFwidGltZXNcIjogXCLDl1wiLFxuXHRcIlVhY3V0ZVwiOiBcIsOaXCIsXG5cdFwidWFjdXRlXCI6IFwiw7pcIixcblx0XCJVY2lyY1wiOiBcIsObXCIsXG5cdFwidWNpcmNcIjogXCLDu1wiLFxuXHRcIlVncmF2ZVwiOiBcIsOZXCIsXG5cdFwidWdyYXZlXCI6IFwiw7lcIixcblx0XCJ1bWxcIjogXCLCqFwiLFxuXHRcIlV1bWxcIjogXCLDnFwiLFxuXHRcInV1bWxcIjogXCLDvFwiLFxuXHRcIllhY3V0ZVwiOiBcIsOdXCIsXG5cdFwieWFjdXRlXCI6IFwiw71cIixcblx0XCJ5ZW5cIjogXCLCpVwiLFxuXHRcInl1bWxcIjogXCLDv1wiXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvbGVnYWN5Lmpzb25cbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRlY29kZU1hcCA9IHJlcXVpcmUoXCIuLi9tYXBzL2RlY29kZS5qc29uXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZUNvZGVQb2ludDtcblxuLy8gbW9kaWZpZWQgdmVyc2lvbiBvZiBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9oZS9ibG9iL21hc3Rlci9zcmMvaGUuanMjTDk0LUwxMTlcbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludChjb2RlUG9pbnQpe1xuXG5cdGlmKChjb2RlUG9pbnQgPj0gMHhEODAwICYmIGNvZGVQb2ludCA8PSAweERGRkYpIHx8IGNvZGVQb2ludCA+IDB4MTBGRkZGKXtcblx0XHRyZXR1cm4gXCJcXHVGRkZEXCI7XG5cdH1cblxuXHRpZihjb2RlUG9pbnQgaW4gZGVjb2RlTWFwKXtcblx0XHRjb2RlUG9pbnQgPSBkZWNvZGVNYXBbY29kZVBvaW50XTtcblx0fVxuXG5cdHZhciBvdXRwdXQgPSBcIlwiO1xuXG5cdGlmKGNvZGVQb2ludCA+IDB4RkZGRil7XG5cdFx0Y29kZVBvaW50IC09IDB4MTAwMDA7XG5cdFx0b3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRjtcblx0fVxuXG5cdG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG5cdHJldHVybiBvdXRwdXQ7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL34vZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiMFwiOiA2NTUzMyxcblx0XCIxMjhcIjogODM2NCxcblx0XCIxMzBcIjogODIxOCxcblx0XCIxMzFcIjogNDAyLFxuXHRcIjEzMlwiOiA4MjIyLFxuXHRcIjEzM1wiOiA4MjMwLFxuXHRcIjEzNFwiOiA4MjI0LFxuXHRcIjEzNVwiOiA4MjI1LFxuXHRcIjEzNlwiOiA3MTAsXG5cdFwiMTM3XCI6IDgyNDAsXG5cdFwiMTM4XCI6IDM1Mixcblx0XCIxMzlcIjogODI0OSxcblx0XCIxNDBcIjogMzM4LFxuXHRcIjE0MlwiOiAzODEsXG5cdFwiMTQ1XCI6IDgyMTYsXG5cdFwiMTQ2XCI6IDgyMTcsXG5cdFwiMTQ3XCI6IDgyMjAsXG5cdFwiMTQ4XCI6IDgyMjEsXG5cdFwiMTQ5XCI6IDgyMjYsXG5cdFwiMTUwXCI6IDgyMTEsXG5cdFwiMTUxXCI6IDgyMTIsXG5cdFwiMTUyXCI6IDczMixcblx0XCIxNTNcIjogODQ4Mixcblx0XCIxNTRcIjogMzUzLFxuXHRcIjE1NVwiOiA4MjUwLFxuXHRcIjE1NlwiOiAzMzksXG5cdFwiMTU4XCI6IDM4Mixcblx0XCIxNTlcIjogMzc2XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L2VudGl0aWVzL21hcHMvZGVjb2RlLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBOb2RlID0gcmVxdWlyZSgnLi9ub2RlJyk7XG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi9jb21tb24nKTtcbnZhciBub3JtYWxpemVSZWZlcmVuY2UgPSByZXF1aXJlKCcuL25vcm1hbGl6ZS1yZWZlcmVuY2UnKTtcblxudmFyIG5vcm1hbGl6ZVVSSSA9IGNvbW1vbi5ub3JtYWxpemVVUkk7XG52YXIgdW5lc2NhcGVTdHJpbmcgPSBjb21tb24udW5lc2NhcGVTdHJpbmc7XG52YXIgZnJvbUNvZGVQb2ludCA9IHJlcXVpcmUoJy4vZnJvbS1jb2RlLXBvaW50LmpzJyk7XG52YXIgZGVjb2RlSFRNTCA9IHJlcXVpcmUoJ2VudGl0aWVzJykuZGVjb2RlSFRNTDtcbnJlcXVpcmUoJ3N0cmluZy5wcm90b3R5cGUucmVwZWF0Jyk7IC8vIFBvbHlmaWxsIGZvciBTdHJpbmcucHJvdG90eXBlLnJlcGVhdFxuXG4vLyBDb25zdGFudHMgZm9yIGNoYXJhY3RlciBjb2RlczpcblxudmFyIENfTkVXTElORSA9IDEwO1xudmFyIENfQVNURVJJU0sgPSA0MjtcbnZhciBDX1VOREVSU0NPUkUgPSA5NTtcbnZhciBDX0JBQ0tUSUNLID0gOTY7XG52YXIgQ19PUEVOX0JSQUNLRVQgPSA5MTtcbnZhciBDX0NMT1NFX0JSQUNLRVQgPSA5MztcbnZhciBDX0xFU1NUSEFOID0gNjA7XG52YXIgQ19CQU5HID0gMzM7XG52YXIgQ19CQUNLU0xBU0ggPSA5MjtcbnZhciBDX0FNUEVSU0FORCA9IDM4O1xudmFyIENfT1BFTl9QQVJFTiA9IDQwO1xudmFyIENfQ0xPU0VfUEFSRU4gPSA0MTtcbnZhciBDX0NPTE9OID0gNTg7XG52YXIgQ19TSU5HTEVRVU9URSA9IDM5O1xudmFyIENfRE9VQkxFUVVPVEUgPSAzNDtcblxuLy8gU29tZSByZWdleHBzIHVzZWQgaW4gaW5saW5lIHBhcnNlcjpcblxudmFyIEVTQ0FQQUJMRSA9IGNvbW1vbi5FU0NBUEFCTEU7XG52YXIgRVNDQVBFRF9DSEFSID0gJ1xcXFxcXFxcJyArIEVTQ0FQQUJMRTtcbnZhciBSRUdfQ0hBUiA9ICdbXlxcXFxcXFxcKClcXFxceDAwLVxcXFx4MjBdJztcbnZhciBJTl9QQVJFTlNfTk9TUCA9ICdcXFxcKCgnICsgUkVHX0NIQVIgKyAnfCcgKyBFU0NBUEVEX0NIQVIgKyAnfFxcXFxcXFxcKSpcXFxcKSc7XG5cbnZhciBFTlRJVFkgPSBjb21tb24uRU5USVRZO1xudmFyIHJlSHRtbFRhZyA9IGNvbW1vbi5yZUh0bWxUYWc7XG5cbnZhciByZVB1bmN0dWF0aW9uID0gbmV3IFJlZ0V4cCgvXltcXHUyMDAwLVxcdTIwNkZcXHUyRTAwLVxcdTJFN0ZcXFxcJyFcIiNcXCQlJlxcKFxcKVxcKlxcKyxcXC1cXC5cXC86Ozw9PlxcP0BcXFtcXF1cXF5fYFxce1xcfFxcfX5dLyk7XG5cbnZhciByZUxpbmtUaXRsZSA9IG5ldyBSZWdFeHAoXG4gICAgJ14oPzpcIignICsgRVNDQVBFRF9DSEFSICsgJ3xbXlwiXFxcXHgwMF0pKlwiJyArXG4gICAgICAgICd8JyArXG4gICAgICAgICdcXCcoJyArIEVTQ0FQRURfQ0hBUiArICd8W15cXCdcXFxceDAwXSkqXFwnJyArXG4gICAgICAgICd8JyArXG4gICAgICAgICdcXFxcKCgnICsgRVNDQVBFRF9DSEFSICsgJ3xbXilcXFxceDAwXSkqXFxcXCkpJyk7XG5cbnZhciByZUxpbmtEZXN0aW5hdGlvbkJyYWNlcyA9IG5ldyBSZWdFeHAoXG4gICAgJ14oPzpbPF0oPzpbXjw+XFxcXG5cXFxcXFxcXFxcXFx4MDBdJyArICd8JyArIEVTQ0FQRURfQ0hBUiArICd8JyArICdcXFxcXFxcXCkqWz5dKScpO1xuXG52YXIgcmVMaW5rRGVzdGluYXRpb24gPSBuZXcgUmVnRXhwKFxuICAgICdeKD86JyArIFJFR19DSEFSICsgJyt8JyArIEVTQ0FQRURfQ0hBUiArICd8XFxcXFxcXFx8JyArIElOX1BBUkVOU19OT1NQICsgJykqJyk7XG5cbnZhciByZUVzY2FwYWJsZSA9IG5ldyBSZWdFeHAoJ14nICsgRVNDQVBBQkxFKTtcblxudmFyIHJlRW50aXR5SGVyZSA9IG5ldyBSZWdFeHAoJ14nICsgRU5USVRZLCAnaScpO1xuXG52YXIgcmVUaWNrcyA9IC9gKy87XG5cbnZhciByZVRpY2tzSGVyZSA9IC9eYCsvO1xuXG52YXIgcmVFbGxpcHNlcyA9IC9cXC5cXC5cXC4vZztcblxudmFyIHJlRGFzaCA9IC8tLSsvZztcblxudmFyIHJlRW1haWxBdXRvbGluayA9IC9ePChbYS16QS1aMC05LiEjJCUmJyorXFwvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqKT4vO1xuXG52YXIgcmVBdXRvbGluayA9IC9ePCg/OmNvYXB8ZG9pfGphdmFzY3JpcHR8YWFhfGFhYXN8YWJvdXR8YWNhcHxjYXB8Y2lkfGNyaWR8ZGF0YXxkYXZ8ZGljdHxkbnN8ZmlsZXxmdHB8Z2VvfGdvfGdvcGhlcnxoMzIzfGh0dHB8aHR0cHN8aWF4fGljYXB8aW18aW1hcHxpbmZvfGlwcHxpcmlzfGlyaXMuYmVlcHxpcmlzLnhwY3xpcmlzLnhwY3N8aXJpcy5sd3p8bGRhcHxtYWlsdG98bWlkfG1zcnB8bXNycHN8bXRxcHxtdXBkYXRlfG5ld3N8bmZzfG5pfG5paHxubnRwfG9wYXF1ZWxvY2t0b2tlbnxwb3B8cHJlc3xydHNwfHNlcnZpY2V8c2Vzc2lvbnxzaHR0cHxzaWV2ZXxzaXB8c2lwc3xzbXN8c25tcHxzb2FwLmJlZXB8c29hcC5iZWVwc3x0YWd8dGVsfHRlbG5ldHx0ZnRwfHRoaXNtZXNzYWdlfHRuMzI3MHx0aXB8dHZ8dXJufHZlbW1pfHdzfHdzc3x4Y29ufHhjb24tdXNlcmlkfHhtbHJwYy5iZWVwfHhtbHJwYy5iZWVwc3x4bXBwfHozOS41MHJ8ejM5LjUwc3xhZGl1bXh0cmF8YWZwfGFmc3xhaW18YXB0fGF0dGFjaG1lbnR8YXd8YmVzaGFyZXxiaXRjb2lufGJvbG98Y2FsbHRvfGNocm9tZXxjaHJvbWUtZXh0ZW5zaW9ufGNvbS1ldmVudGJyaXRlLWF0dGVuZGVlfGNvbnRlbnR8Y3ZzfGRsbmEtcGxheXNpbmdsZXxkbG5hLXBsYXljb250YWluZXJ8ZHRufGR2YnxlZDJrfGZhY2V0aW1lfGZlZWR8ZmluZ2VyfGZpc2h8Z2d8Z2l0fGdpem1vcHJvamVjdHxndGFsa3xoY3B8aWNvbnxpcG58aXJjfGlyYzZ8aXJjc3xpdG1zfGphcnxqbXN8a2V5cGFyY3xsYXN0Zm18bGRhcHN8bWFnbmV0fG1hcHN8bWFya2V0fG1lc3NhZ2V8bW1zfG1zLWhlbHB8bXNuaW18bXVtYmxlfG12bnxub3Rlc3xvaWR8cGFsbXxwYXBhcmF6eml8cGxhdGZvcm18cHJveHl8cHN5Y3xxdWVyeXxyZXN8cmVzb3VyY2V8cm1pfHJzeW5jfHJ0bXB8c2Vjb25kbGlmZXxzZnRwfHNnbnxza3lwZXxzbWJ8c29sZGF0fHNwb3RpZnl8c3NofHN0ZWFtfHN2bnx0ZWFtc3BlYWt8dGhpbmdzfHVkcHx1bnJlYWx8dXQyMDA0fHZlbnRyaWxvfHZpZXctc291cmNlfHdlYmNhbHx3dGFpfHd5Y2l3eWd8eGZpcmV8eHJpfHltc2dyKTpbXjw+XFx4MDAtXFx4MjBdKj4vaTtcblxudmFyIHJlU3BubCA9IC9eICooPzpcXG4gKik/LztcblxudmFyIHJlV2hpdGVzcGFjZUNoYXIgPSAvXlxccy87XG5cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzKy9nO1xuXG52YXIgcmVGaW5hbFNwYWNlID0gLyAqJC87XG5cbnZhciByZUluaXRpYWxTcGFjZSA9IC9eICovO1xuXG52YXIgcmVTcGFjZUF0RW5kT2ZMaW5lID0gL14gKig/OlxcbnwkKS87XG5cbnZhciByZUxpbmtMYWJlbCA9IG5ldyBSZWdFeHAoJ15cXFxcWyg/OlteXFxcXFxcXFxcXFxcW1xcXFxdXXwnICsgRVNDQVBFRF9DSEFSICtcbiAgJ3xcXFxcXFxcXCl7MCwxMDAwfVxcXFxdJyk7XG5cbi8vIE1hdGNoZXMgYSBzdHJpbmcgb2Ygbm9uLXNwZWNpYWwgY2hhcmFjdGVycy5cbnZhciByZU1haW4gPSAvXlteXFxuYFxcW1xcXVxcXFwhPCYqXydcIl0rL207XG5cbnZhciB0ZXh0ID0gZnVuY3Rpb24ocykge1xuICAgIHZhciBub2RlID0gbmV3IE5vZGUoJ1RleHQnKTtcbiAgICBub2RlLl9saXRlcmFsID0gcztcbiAgICByZXR1cm4gbm9kZTtcbn07XG5cbi8vIElOTElORSBQQVJTRVJcblxuLy8gVGhlc2UgYXJlIG1ldGhvZHMgb2YgYW4gSW5saW5lUGFyc2VyIG9iamVjdCwgZGVmaW5lZCBiZWxvdy5cbi8vIEFuIElubGluZVBhcnNlciBrZWVwcyB0cmFjayBvZiBhIHN1YmplY3QgKGEgc3RyaW5nIHRvIGJlXG4vLyBwYXJzZWQpIGFuZCBhIHBvc2l0aW9uIGluIHRoYXQgc3ViamVjdC5cblxuLy8gSWYgcmUgbWF0Y2hlcyBhdCBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBzdWJqZWN0LCBhZHZhbmNlXG4vLyBwb3NpdGlvbiBpbiBzdWJqZWN0IGFuZCByZXR1cm4gdGhlIG1hdGNoOyBvdGhlcndpc2UgcmV0dXJuIG51bGwuXG52YXIgbWF0Y2ggPSBmdW5jdGlvbihyZSkge1xuICAgIHZhciBtID0gcmUuZXhlYyh0aGlzLnN1YmplY3Quc2xpY2UodGhpcy5wb3MpKTtcbiAgICBpZiAobSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcyArPSBtLmluZGV4ICsgbVswXS5sZW5ndGg7XG4gICAgICAgIHJldHVybiBtWzBdO1xuICAgIH1cbn07XG5cbi8vIFJldHVybnMgdGhlIGNvZGUgZm9yIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGN1cnJlbnQgc3ViamVjdCBwb3NpdGlvbiwgb3IgLTFcbi8vIHRoZXJlIGFyZSBubyBtb3JlIGNoYXJhY3RlcnMuXG52YXIgcGVlayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnBvcyA8IHRoaXMuc3ViamVjdC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxufTtcblxuLy8gUGFyc2UgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnMsIGluY2x1ZGluZyBhdCBtb3N0IG9uZSBuZXdsaW5lXG52YXIgc3BubCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubWF0Y2gocmVTcG5sKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIEFsbCBvZiB0aGUgcGFyc2VycyBiZWxvdyB0cnkgdG8gbWF0Y2ggc29tZXRoaW5nIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uXG4vLyBpbiB0aGUgc3ViamVjdC4gIElmIHRoZXkgc3VjY2VlZCBpbiBtYXRjaGluZyBhbnl0aGluZywgdGhleVxuLy8gcmV0dXJuIHRoZSBpbmxpbmUgbWF0Y2hlZCwgYWR2YW5jaW5nIHRoZSBzdWJqZWN0LlxuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGJhY2t0aWNrcywgYWRkaW5nIGVpdGhlciBhIGJhY2t0aWNrIGNvZGUgc3BhbiBvciBhXG4vLyBsaXRlcmFsIHNlcXVlbmNlIG9mIGJhY2t0aWNrcy5cbnZhciBwYXJzZUJhY2t0aWNrcyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIHRpY2tzID0gdGhpcy5tYXRjaChyZVRpY2tzSGVyZSk7XG4gICAgaWYgKHRpY2tzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGFmdGVyT3BlblRpY2tzID0gdGhpcy5wb3M7XG4gICAgdmFyIG1hdGNoZWQ7XG4gICAgdmFyIG5vZGU7XG4gICAgd2hpbGUgKChtYXRjaGVkID0gdGhpcy5tYXRjaChyZVRpY2tzKSkgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKG1hdGNoZWQgPT09IHRpY2tzKSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IE5vZGUoJ0NvZGUnKTtcbiAgICAgICAgICAgIG5vZGUuX2xpdGVyYWwgPSB0aGlzLnN1YmplY3Quc2xpY2UoYWZ0ZXJPcGVuVGlja3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3MgLSB0aWNrcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKCkucmVwbGFjZShyZVdoaXRlc3BhY2UsICcgJyk7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElmIHdlIGdvdCBoZXJlLCB3ZSBkaWRuJ3QgbWF0Y2ggYSBjbG9zaW5nIGJhY2t0aWNrIHNlcXVlbmNlLlxuICAgIHRoaXMucG9zID0gYWZ0ZXJPcGVuVGlja3M7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dCh0aWNrcykpO1xuICAgIHJldHVybiB0cnVlO1xufTtcblxuLy8gUGFyc2UgYSBiYWNrc2xhc2gtZXNjYXBlZCBzcGVjaWFsIGNoYXJhY3RlciwgYWRkaW5nIGVpdGhlciB0aGUgZXNjYXBlZFxuLy8gY2hhcmFjdGVyLCBhIGhhcmQgbGluZSBicmVhayAoaWYgdGhlIGJhY2tzbGFzaCBpcyBmb2xsb3dlZCBieSBhIG5ld2xpbmUpLFxuLy8gb3IgYSBsaXRlcmFsIGJhY2tzbGFzaCB0byB0aGUgYmxvY2sncyBjaGlsZHJlbi4gIEFzc3VtZXMgY3VycmVudCBjaGFyYWN0ZXJcbi8vIGlzIGEgYmFja3NsYXNoLlxudmFyIHBhcnNlQmFja3NsYXNoID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgc3ViaiA9IHRoaXMuc3ViamVjdDtcbiAgICB2YXIgbm9kZTtcbiAgICB0aGlzLnBvcyArPSAxO1xuICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gQ19ORVdMSU5FKSB7XG4gICAgICAgIHRoaXMucG9zICs9IDE7XG4gICAgICAgIG5vZGUgPSBuZXcgTm9kZSgnSGFyZGJyZWFrJyk7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAocmVFc2NhcGFibGUudGVzdChzdWJqLmNoYXJBdCh0aGlzLnBvcykpKSB7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRleHQoc3Viai5jaGFyQXQodGhpcy5wb3MpKSk7XG4gICAgICAgIHRoaXMucG9zICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dCgnXFxcXCcpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGFuIGF1dG9saW5rIChVUkwgb3IgZW1haWwgaW4gcG9pbnR5IGJyYWNrZXRzKS5cbnZhciBwYXJzZUF1dG9saW5rID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgbTtcbiAgICB2YXIgZGVzdDtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAoKG0gPSB0aGlzLm1hdGNoKHJlRW1haWxBdXRvbGluaykpKSB7XG4gICAgICAgIGRlc3QgPSBtLnNsaWNlKDEsIG0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIG5vZGUgPSBuZXcgTm9kZSgnTGluaycpO1xuICAgICAgICBub2RlLl9kZXN0aW5hdGlvbiA9IG5vcm1hbGl6ZVVSSSgnbWFpbHRvOicgKyBkZXN0KTtcbiAgICAgICAgbm9kZS5fdGl0bGUgPSAnJztcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0ZXh0KGRlc3QpKTtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKG0gPSB0aGlzLm1hdGNoKHJlQXV0b2xpbmspKSkge1xuICAgICAgICBkZXN0ID0gbS5zbGljZSgxLCBtLmxlbmd0aCAtIDEpO1xuICAgICAgICBub2RlID0gbmV3IE5vZGUoJ0xpbmsnKTtcbiAgICAgICAgbm9kZS5fZGVzdGluYXRpb24gPSBub3JtYWxpemVVUkkoZGVzdCk7XG4gICAgICAgIG5vZGUuX3RpdGxlID0gJyc7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGV4dChkZXN0KSk7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBhIHJhdyBIVE1MIHRhZy5cbnZhciBwYXJzZUh0bWxUYWcgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBtID0gdGhpcy5tYXRjaChyZUh0bWxUYWcpO1xuICAgIGlmIChtID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKCdIdG1sJyk7XG4gICAgICAgIG5vZGUuX2xpdGVyYWwgPSBtO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcblxuLy8gU2NhbiBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgd2l0aCBjb2RlIGNjLCBhbmQgcmV0dXJuIGluZm9ybWF0aW9uIGFib3V0XG4vLyB0aGUgbnVtYmVyIG9mIGRlbGltaXRlcnMgYW5kIHdoZXRoZXIgdGhleSBhcmUgcG9zaXRpb25lZCBzdWNoIHRoYXRcbi8vIHRoZXkgY2FuIG9wZW4gYW5kL29yIGNsb3NlIGVtcGhhc2lzIG9yIHN0cm9uZyBlbXBoYXNpcy4gIEEgdXRpbGl0eVxuLy8gZnVuY3Rpb24gZm9yIHN0cm9uZy9lbXBoIHBhcnNpbmcuXG52YXIgc2NhbkRlbGltcyA9IGZ1bmN0aW9uKGNjKSB7XG4gICAgdmFyIG51bWRlbGltcyA9IDA7XG4gICAgdmFyIGNoYXJfYmVmb3JlLCBjaGFyX2FmdGVyLCBjY19hZnRlcjtcbiAgICB2YXIgc3RhcnRwb3MgPSB0aGlzLnBvcztcbiAgICB2YXIgbGVmdF9mbGFua2luZywgcmlnaHRfZmxhbmtpbmcsIGNhbl9vcGVuLCBjYW5fY2xvc2U7XG4gICAgdmFyIGFmdGVyX2lzX3doaXRlc3BhY2UsIGFmdGVyX2lzX3B1bmN0dWF0aW9uLCBiZWZvcmVfaXNfd2hpdGVzcGFjZSwgYmVmb3JlX2lzX3B1bmN0dWF0aW9uO1xuXG4gICAgaWYgKGNjID09PSBDX1NJTkdMRVFVT1RFIHx8IGNjID09PSBDX0RPVUJMRVFVT1RFKSB7XG4gICAgICAgIG51bWRlbGltcysrO1xuICAgICAgICB0aGlzLnBvcysrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoKSA9PT0gY2MpIHtcbiAgICAgICAgICAgIG51bWRlbGltcysrO1xuICAgICAgICAgICAgdGhpcy5wb3MrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChudW1kZWxpbXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2hhcl9iZWZvcmUgPSBzdGFydHBvcyA9PT0gMCA/ICdcXG4nIDogdGhpcy5zdWJqZWN0LmNoYXJBdChzdGFydHBvcyAtIDEpO1xuXG4gICAgY2NfYWZ0ZXIgPSB0aGlzLnBlZWsoKTtcbiAgICBpZiAoY2NfYWZ0ZXIgPT09IC0xKSB7XG4gICAgICAgIGNoYXJfYWZ0ZXIgPSAnXFxuJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGFyX2FmdGVyID0gZnJvbUNvZGVQb2ludChjY19hZnRlcik7XG4gICAgfVxuXG4gICAgYWZ0ZXJfaXNfd2hpdGVzcGFjZSA9IHJlV2hpdGVzcGFjZUNoYXIudGVzdChjaGFyX2FmdGVyKTtcbiAgICBhZnRlcl9pc19wdW5jdHVhdGlvbiA9IHJlUHVuY3R1YXRpb24udGVzdChjaGFyX2FmdGVyKTtcbiAgICBiZWZvcmVfaXNfd2hpdGVzcGFjZSA9IHJlV2hpdGVzcGFjZUNoYXIudGVzdChjaGFyX2JlZm9yZSk7XG4gICAgYmVmb3JlX2lzX3B1bmN0dWF0aW9uID0gcmVQdW5jdHVhdGlvbi50ZXN0KGNoYXJfYmVmb3JlKTtcblxuICAgIGxlZnRfZmxhbmtpbmcgPSAhYWZ0ZXJfaXNfd2hpdGVzcGFjZSAmJlxuICAgICAgICAgICAgIShhZnRlcl9pc19wdW5jdHVhdGlvbiAmJiAhYmVmb3JlX2lzX3doaXRlc3BhY2UgJiYgIWJlZm9yZV9pc19wdW5jdHVhdGlvbik7XG4gICAgcmlnaHRfZmxhbmtpbmcgPSAhYmVmb3JlX2lzX3doaXRlc3BhY2UgJiZcbiAgICAgICAgICAgICEoYmVmb3JlX2lzX3B1bmN0dWF0aW9uICYmICFhZnRlcl9pc193aGl0ZXNwYWNlICYmICFhZnRlcl9pc19wdW5jdHVhdGlvbik7XG4gICAgaWYgKGNjID09PSBDX1VOREVSU0NPUkUpIHtcbiAgICAgICAgY2FuX29wZW4gPSBsZWZ0X2ZsYW5raW5nICYmXG4gICAgICAgICAgICAoIXJpZ2h0X2ZsYW5raW5nIHx8IGJlZm9yZV9pc19wdW5jdHVhdGlvbik7XG4gICAgICAgIGNhbl9jbG9zZSA9IHJpZ2h0X2ZsYW5raW5nICYmXG4gICAgICAgICAgICAoIWxlZnRfZmxhbmtpbmcgfHwgYWZ0ZXJfaXNfcHVuY3R1YXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbl9vcGVuID0gbGVmdF9mbGFua2luZztcbiAgICAgICAgY2FuX2Nsb3NlID0gcmlnaHRfZmxhbmtpbmc7XG4gICAgfVxuICAgIHRoaXMucG9zID0gc3RhcnRwb3M7XG4gICAgcmV0dXJuIHsgbnVtZGVsaW1zOiBudW1kZWxpbXMsXG4gICAgICAgICAgICAgY2FuX29wZW46IGNhbl9vcGVuLFxuICAgICAgICAgICAgIGNhbl9jbG9zZTogY2FuX2Nsb3NlIH07XG59O1xuXG4vLyBIYW5kbGUgYSBkZWxpbWl0ZXIgbWFya2VyIGZvciBlbXBoYXNpcyBvciBhIHF1b3RlLlxudmFyIGhhbmRsZURlbGltID0gZnVuY3Rpb24oY2MsIGJsb2NrKSB7XG4gICAgdmFyIHJlcyA9IHRoaXMuc2NhbkRlbGltcyhjYyk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgbnVtZGVsaW1zID0gcmVzLm51bWRlbGltcztcbiAgICB2YXIgc3RhcnRwb3MgPSB0aGlzLnBvcztcbiAgICB2YXIgY29udGVudHM7XG5cbiAgICB0aGlzLnBvcyArPSBudW1kZWxpbXM7XG4gICAgaWYgKGNjID09PSBDX1NJTkdMRVFVT1RFKSB7XG4gICAgICAgIGNvbnRlbnRzID0gXCJcXHUyMDE5XCI7XG4gICAgfSBlbHNlIGlmIChjYyA9PT0gQ19ET1VCTEVRVU9URSkge1xuICAgICAgICBjb250ZW50cyA9IFwiXFx1MjAxQ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnRzID0gdGhpcy5zdWJqZWN0LnNsaWNlKHN0YXJ0cG9zLCB0aGlzLnBvcyk7XG4gICAgfVxuICAgIHZhciBub2RlID0gdGV4dChjb250ZW50cyk7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICAvLyBBZGQgZW50cnkgdG8gc3RhY2sgZm9yIHRoaXMgb3BlbmVyXG4gICAgdGhpcy5kZWxpbWl0ZXJzID0geyBjYzogY2MsXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1kZWxpbXM6IG51bWRlbGltcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogdGhpcy5kZWxpbWl0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbl9vcGVuOiByZXMuY2FuX29wZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5fY2xvc2U6IHJlcy5jYW5fY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUgfTtcbiAgICBpZiAodGhpcy5kZWxpbWl0ZXJzLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGVsaW1pdGVycy5wcmV2aW91cy5uZXh0ID0gdGhpcy5kZWxpbWl0ZXJzO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuXG59O1xuXG52YXIgcmVtb3ZlRGVsaW1pdGVyID0gZnVuY3Rpb24oZGVsaW0pIHtcbiAgICBpZiAoZGVsaW0ucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgICAgZGVsaW0ucHJldmlvdXMubmV4dCA9IGRlbGltLm5leHQ7XG4gICAgfVxuICAgIGlmIChkZWxpbS5uZXh0ID09PSBudWxsKSB7XG4gICAgICAgIC8vIHRvcCBvZiBzdGFja1xuICAgICAgICB0aGlzLmRlbGltaXRlcnMgPSBkZWxpbS5wcmV2aW91cztcbiAgICB9IGVsc2Uge1xuICAgICAgICBkZWxpbS5uZXh0LnByZXZpb3VzID0gZGVsaW0ucHJldmlvdXM7XG4gICAgfVxufTtcblxudmFyIHJlbW92ZURlbGltaXRlcnNCZXR3ZWVuID0gZnVuY3Rpb24oYm90dG9tLCB0b3ApIHtcbiAgICBpZiAoYm90dG9tLm5leHQgIT09IHRvcCkge1xuICAgICAgICBib3R0b20ubmV4dCA9IHRvcDtcbiAgICAgICAgdG9wLnByZXZpb3VzID0gYm90dG9tO1xuICAgIH1cbn07XG5cbnZhciBwcm9jZXNzRW1waGFzaXMgPSBmdW5jdGlvbihzdGFja19ib3R0b20pIHtcbiAgICB2YXIgb3BlbmVyLCBjbG9zZXIsIG9sZF9jbG9zZXI7XG4gICAgdmFyIG9wZW5lcl9pbmwsIGNsb3Nlcl9pbmw7XG4gICAgdmFyIHRlbXBzdGFjaztcbiAgICB2YXIgdXNlX2RlbGltcztcbiAgICB2YXIgdG1wLCBuZXh0O1xuICAgIHZhciBvcGVuZXJfZm91bmQ7XG4gICAgdmFyIG9wZW5lcnNfYm90dG9tID0gW107XG5cbiAgICBvcGVuZXJzX2JvdHRvbVtDX1VOREVSU0NPUkVdID0gc3RhY2tfYm90dG9tO1xuICAgIG9wZW5lcnNfYm90dG9tW0NfQVNURVJJU0tdID0gc3RhY2tfYm90dG9tO1xuICAgIG9wZW5lcnNfYm90dG9tW0NfU0lOR0xFUVVPVEVdID0gc3RhY2tfYm90dG9tO1xuICAgIG9wZW5lcnNfYm90dG9tW0NfRE9VQkxFUVVPVEVdID0gc3RhY2tfYm90dG9tO1xuXG4gICAgLy8gZmluZCBmaXJzdCBjbG9zZXIgYWJvdmUgc3RhY2tfYm90dG9tOlxuICAgIGNsb3NlciA9IHRoaXMuZGVsaW1pdGVycztcbiAgICB3aGlsZSAoY2xvc2VyICE9PSBudWxsICYmIGNsb3Nlci5wcmV2aW91cyAhPT0gc3RhY2tfYm90dG9tKSB7XG4gICAgICAgIGNsb3NlciA9IGNsb3Nlci5wcmV2aW91cztcbiAgICB9XG4gICAgLy8gbW92ZSBmb3J3YXJkLCBsb29raW5nIGZvciBjbG9zZXJzLCBhbmQgaGFuZGxpbmcgZWFjaFxuICAgIHdoaWxlIChjbG9zZXIgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIGNsb3NlcmNjID0gY2xvc2VyLmNjO1xuICAgICAgICBpZiAoIShjbG9zZXIuY2FuX2Nsb3NlICYmIChjbG9zZXJjYyA9PT0gQ19VTkRFUlNDT1JFIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlcmNjID09PSBDX0FTVEVSSVNLIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlcmNjID09PSBDX1NJTkdMRVFVT1RFIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlcmNjID09PSBDX0RPVUJMRVFVT1RFKSkpIHtcbiAgICAgICAgICAgIGNsb3NlciA9IGNsb3Nlci5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZm91bmQgZW1waGFzaXMgY2xvc2VyLiBub3cgbG9vayBiYWNrIGZvciBmaXJzdCBtYXRjaGluZyBvcGVuZXI6XG4gICAgICAgICAgICBvcGVuZXIgPSBjbG9zZXIucHJldmlvdXM7XG4gICAgICAgICAgICBvcGVuZXJfZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlIChvcGVuZXIgIT09IG51bGwgJiYgb3BlbmVyICE9PSBzdGFja19ib3R0b20gJiZcbiAgICAgICAgICAgICAgICAgICBvcGVuZXIgIT09IG9wZW5lcnNfYm90dG9tW2Nsb3NlcmNjXSkge1xuICAgICAgICAgICAgICAgIGlmIChvcGVuZXIuY2MgPT09IGNsb3Nlci5jYyAmJiBvcGVuZXIuY2FuX29wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wZW5lciA9IG9wZW5lci5wcmV2aW91cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9sZF9jbG9zZXIgPSBjbG9zZXI7XG5cbiAgICAgICAgICAgIGlmIChjbG9zZXJjYyA9PT0gQ19BU1RFUklTSyB8fCBjbG9zZXJjYyA9PT0gQ19VTkRFUlNDT1JFKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcGVuZXJfZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VyID0gY2xvc2VyLm5leHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGFjdHVhbCBudW1iZXIgb2YgZGVsaW1pdGVycyB1c2VkIGZyb20gY2xvc2VyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZXIubnVtZGVsaW1zIDwgMyB8fCBvcGVuZXIubnVtZGVsaW1zIDwgMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX2RlbGltcyA9IGNsb3Nlci5udW1kZWxpbXMgPD0gb3BlbmVyLm51bWRlbGltcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VyLm51bWRlbGltcyA6IG9wZW5lci5udW1kZWxpbXM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VfZGVsaW1zID0gY2xvc2VyLm51bWRlbGltcyAlIDIgPT09IDAgPyAyIDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG9wZW5lcl9pbmwgPSBvcGVuZXIubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VyX2lubCA9IGNsb3Nlci5ub2RlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB1c2VkIGRlbGltaXRlcnMgZnJvbSBzdGFjayBlbHRzIGFuZCBpbmxpbmVzXG4gICAgICAgICAgICAgICAgICAgIG9wZW5lci5udW1kZWxpbXMgLT0gdXNlX2RlbGltcztcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VyLm51bWRlbGltcyAtPSB1c2VfZGVsaW1zO1xuICAgICAgICAgICAgICAgICAgICBvcGVuZXJfaW5sLl9saXRlcmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lcl9pbmwuX2xpdGVyYWwuc2xpY2UoMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVyX2lubC5fbGl0ZXJhbC5sZW5ndGggLSB1c2VfZGVsaW1zKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VyX2lubC5fbGl0ZXJhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXJfaW5sLl9saXRlcmFsLnNsaWNlKDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlcl9pbmwuX2xpdGVyYWwubGVuZ3RoIC0gdXNlX2RlbGltcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYnVpbGQgY29udGVudHMgZm9yIG5ldyBlbXBoIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVtcGggPSBuZXcgTm9kZSh1c2VfZGVsaW1zID09PSAxID8gJ0VtcGgnIDogJ1N0cm9uZycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRtcCA9IG9wZW5lcl9pbmwuX25leHQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0bXAgJiYgdG1wICE9PSBjbG9zZXJfaW5sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gdG1wLl9uZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wLnVubGluaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1waC5hcHBlbmRDaGlsZCh0bXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gbmV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG9wZW5lcl9pbmwuaW5zZXJ0QWZ0ZXIoZW1waCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGVsdHMgYmV0d2VlbiBvcGVuZXIgYW5kIGNsb3NlciBpbiBkZWxpbWl0ZXJzIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZURlbGltaXRlcnNCZXR3ZWVuKG9wZW5lciwgY2xvc2VyKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBvcGVuZXIgaGFzIDAgZGVsaW1zLCByZW1vdmUgaXQgYW5kIHRoZSBpbmxpbmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5lci5udW1kZWxpbXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lcl9pbmwudW5saW5rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURlbGltaXRlcihvcGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlci5udW1kZWxpbXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlcl9pbmwudW5saW5rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wc3RhY2sgPSBjbG9zZXIubmV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRGVsaW1pdGVyKGNsb3Nlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXIgPSB0ZW1wc3RhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjbG9zZXJjYyA9PT0gQ19TSU5HTEVRVU9URSkge1xuICAgICAgICAgICAgICAgIGNsb3Nlci5ub2RlLl9saXRlcmFsID0gXCJcXHUyMDE5XCI7XG4gICAgICAgICAgICAgICAgaWYgKG9wZW5lcl9mb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuZXIubm9kZS5fbGl0ZXJhbCA9IFwiXFx1MjAxOFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbG9zZXIgPSBjbG9zZXIubmV4dDtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjbG9zZXJjYyA9PT0gQ19ET1VCTEVRVU9URSkge1xuICAgICAgICAgICAgICAgIGNsb3Nlci5ub2RlLl9saXRlcmFsID0gXCJcXHUyMDFEXCI7XG4gICAgICAgICAgICAgICAgaWYgKG9wZW5lcl9mb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuZXIubm9kZS5saXRlcmFsID0gXCJcXHUyMDFDXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsb3NlciA9IGNsb3Nlci5uZXh0O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW9wZW5lcl9mb3VuZCkge1xuICAgICAgICAgICAgICAgIC8vIFNldCBsb3dlciBib3VuZCBmb3IgZnV0dXJlIHNlYXJjaGVzIGZvciBvcGVuZXJzOlxuICAgICAgICAgICAgICAgIG9wZW5lcnNfYm90dG9tW2Nsb3NlcmNjXSA9IG9sZF9jbG9zZXIucHJldmlvdXM7XG4gICAgICAgICAgICAgICAgaWYgKCFvbGRfY2xvc2VyLmNhbl9vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbiByZW1vdmUgYSBjbG9zZXIgdGhhdCBjYW4ndCBiZSBhbiBvcGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uY2Ugd2UndmUgc2VlbiB0aGVyZSdzIG5vIG1hdGNoaW5nIG9wZW5lcjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEZWxpbWl0ZXIob2xkX2Nsb3Nlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYWxsIGRlbGltaXRlcnNcbiAgICB3aGlsZSAodGhpcy5kZWxpbWl0ZXJzICE9PSBudWxsICYmIHRoaXMuZGVsaW1pdGVycyAhPT0gc3RhY2tfYm90dG9tKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRGVsaW1pdGVyKHRoaXMuZGVsaW1pdGVycyk7XG4gICAgfVxufTtcblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBsaW5rIHRpdGxlIChzYW5zIHF1b3RlcyksIHJldHVybmluZyB0aGUgc3RyaW5nXG4vLyBvciBudWxsIGlmIG5vIG1hdGNoLlxudmFyIHBhcnNlTGlua1RpdGxlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpdGxlID0gdGhpcy5tYXRjaChyZUxpbmtUaXRsZSk7XG4gICAgaWYgKHRpdGxlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNob3Agb2ZmIHF1b3RlcyBmcm9tIHRpdGxlIGFuZCB1bmVzY2FwZTpcbiAgICAgICAgcmV0dXJuIHVuZXNjYXBlU3RyaW5nKHRpdGxlLnN1YnN0cigxLCB0aXRsZS5sZW5ndGggLSAyKSk7XG4gICAgfVxufTtcblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBsaW5rIGRlc3RpbmF0aW9uLCByZXR1cm5pbmcgdGhlIHN0cmluZyBvclxuLy8gbnVsbCBpZiBubyBtYXRjaC5cbnZhciBwYXJzZUxpbmtEZXN0aW5hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXMgPSB0aGlzLm1hdGNoKHJlTGlua0Rlc3RpbmF0aW9uQnJhY2VzKTtcbiAgICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgICAgIHJlcyA9IHRoaXMubWF0Y2gocmVMaW5rRGVzdGluYXRpb24pO1xuICAgICAgICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVVUkkodW5lc2NhcGVTdHJpbmcocmVzKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgeyAgLy8gY2hvcCBvZmYgc3Vycm91bmRpbmcgPC4uPjpcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVSSSh1bmVzY2FwZVN0cmluZyhyZXMuc3Vic3RyKDEsIHJlcy5sZW5ndGggLSAyKSkpO1xuICAgIH1cbn07XG5cbi8vIEF0dGVtcHQgdG8gcGFyc2UgYSBsaW5rIGxhYmVsLCByZXR1cm5pbmcgbnVtYmVyIG9mIGNoYXJhY3RlcnMgcGFyc2VkLlxudmFyIHBhcnNlTGlua0xhYmVsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG0gPSB0aGlzLm1hdGNoKHJlTGlua0xhYmVsKTtcbiAgICBpZiAobSA9PT0gbnVsbCB8fCBtLmxlbmd0aCA+IDEwMDEpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG0ubGVuZ3RoO1xuICAgIH1cbn07XG5cbi8vIEFkZCBvcGVuIGJyYWNrZXQgdG8gZGVsaW1pdGVyIHN0YWNrIGFuZCBhZGQgYSB0ZXh0IG5vZGUgdG8gYmxvY2sncyBjaGlsZHJlbi5cbnZhciBwYXJzZU9wZW5CcmFja2V0ID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgc3RhcnRwb3MgPSB0aGlzLnBvcztcbiAgICB0aGlzLnBvcyArPSAxO1xuXG4gICAgdmFyIG5vZGUgPSB0ZXh0KCdbJyk7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICAvLyBBZGQgZW50cnkgdG8gc3RhY2sgZm9yIHRoaXMgb3BlbmVyXG4gICAgdGhpcy5kZWxpbWl0ZXJzID0geyBjYzogQ19PUEVOX0JSQUNLRVQsXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1kZWxpbXM6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IHRoaXMuZGVsaW1pdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5fb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbl9jbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnRwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUgfTtcbiAgICBpZiAodGhpcy5kZWxpbWl0ZXJzLnByZXZpb3VzICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGVsaW1pdGVycy5wcmV2aW91cy5uZXh0ID0gdGhpcy5kZWxpbWl0ZXJzO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuXG59O1xuXG4vLyBJRiBuZXh0IGNoYXJhY3RlciBpcyBbLCBhbmQgISBkZWxpbWl0ZXIgdG8gZGVsaW1pdGVyIHN0YWNrIGFuZFxuLy8gYWRkIGEgdGV4dCBub2RlIHRvIGJsb2NrJ3MgY2hpbGRyZW4uICBPdGhlcndpc2UganVzdCBhZGQgYSB0ZXh0IG5vZGUuXG52YXIgcGFyc2VCYW5nID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgICB2YXIgc3RhcnRwb3MgPSB0aGlzLnBvcztcbiAgICB0aGlzLnBvcyArPSAxO1xuICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gQ19PUEVOX0JSQUNLRVQpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gMTtcblxuICAgICAgICB2YXIgbm9kZSA9IHRleHQoJyFbJyk7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgICAgIC8vIEFkZCBlbnRyeSB0byBzdGFjayBmb3IgdGhpcyBvcGVuZXJcbiAgICAgICAgdGhpcy5kZWxpbWl0ZXJzID0geyBjYzogQ19CQU5HLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWRlbGltczogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiB0aGlzLmRlbGltaXRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5fb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5fY2xvc2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydHBvcyArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlIH07XG4gICAgICAgIGlmICh0aGlzLmRlbGltaXRlcnMucHJldmlvdXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsaW1pdGVycy5wcmV2aW91cy5uZXh0ID0gdGhpcy5kZWxpbWl0ZXJzO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dCgnIScpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBUcnkgdG8gbWF0Y2ggY2xvc2UgYnJhY2tldCBhZ2FpbnN0IGFuIG9wZW5pbmcgaW4gdGhlIGRlbGltaXRlclxuLy8gc3RhY2suICBBZGQgZWl0aGVyIGEgbGluayBvciBpbWFnZSwgb3IgYSBwbGFpbiBbIGNoYXJhY3Rlcixcbi8vIHRvIGJsb2NrJ3MgY2hpbGRyZW4uICBJZiB0aGVyZSBpcyBhIG1hdGNoaW5nIGRlbGltaXRlcixcbi8vIHJlbW92ZSBpdCBmcm9tIHRoZSBkZWxpbWl0ZXIgc3RhY2suXG52YXIgcGFyc2VDbG9zZUJyYWNrZXQgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBzdGFydHBvcztcbiAgICB2YXIgaXNfaW1hZ2U7XG4gICAgdmFyIGRlc3Q7XG4gICAgdmFyIHRpdGxlO1xuICAgIHZhciBtYXRjaGVkID0gZmFsc2U7XG4gICAgdmFyIHJlZmxhYmVsO1xuICAgIHZhciBvcGVuZXI7XG5cbiAgICB0aGlzLnBvcyArPSAxO1xuICAgIHN0YXJ0cG9zID0gdGhpcy5wb3M7XG5cbiAgICAvLyBsb29rIHRocm91Z2ggc3RhY2sgb2YgZGVsaW1pdGVycyBmb3IgYSBbIG9yICFbXG4gICAgb3BlbmVyID0gdGhpcy5kZWxpbWl0ZXJzO1xuXG4gICAgd2hpbGUgKG9wZW5lciAhPT0gbnVsbCkge1xuICAgICAgICBpZiAob3BlbmVyLmNjID09PSBDX09QRU5fQlJBQ0tFVCB8fCBvcGVuZXIuY2MgPT09IENfQkFORykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbmVyID0gb3BlbmVyLnByZXZpb3VzO1xuICAgIH1cblxuICAgIGlmIChvcGVuZXIgPT09IG51bGwpIHtcbiAgICAgICAgLy8gbm8gbWF0Y2hlZCBvcGVuZXIsIGp1c3QgcmV0dXJuIGEgbGl0ZXJhbFxuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KCddJykpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIW9wZW5lci5hY3RpdmUpIHtcbiAgICAgICAgLy8gbm8gbWF0Y2hlZCBvcGVuZXIsIGp1c3QgcmV0dXJuIGEgbGl0ZXJhbFxuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KCddJykpO1xuICAgICAgICAvLyB0YWtlIG9wZW5lciBvZmYgZW1waGFzaXMgc3RhY2tcbiAgICAgICAgdGhpcy5yZW1vdmVEZWxpbWl0ZXIob3BlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgZ290IGhlcmUsIG9wZW4gaXMgYSBwb3RlbnRpYWwgb3BlbmVyXG4gICAgaXNfaW1hZ2UgPSBvcGVuZXIuY2MgPT09IENfQkFORztcblxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGEgbGluay9pbWFnZVxuXG4gICAgLy8gSW5saW5lIGxpbms/XG4gICAgaWYgKHRoaXMucGVlaygpID09PSBDX09QRU5fUEFSRU4pIHtcbiAgICAgICAgdGhpcy5wb3MrKztcbiAgICAgICAgaWYgKHRoaXMuc3BubCgpICYmXG4gICAgICAgICAgICAoKGRlc3QgPSB0aGlzLnBhcnNlTGlua0Rlc3RpbmF0aW9uKCkpICE9PSBudWxsKSAmJlxuICAgICAgICAgICAgdGhpcy5zcG5sKCkgJiZcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGVyZSdzIGEgc3BhY2UgYmVmb3JlIHRoZSB0aXRsZTpcbiAgICAgICAgICAgIChyZVdoaXRlc3BhY2VDaGFyLnRlc3QodGhpcy5zdWJqZWN0LmNoYXJBdCh0aGlzLnBvcyAtIDEpKSAmJlxuICAgICAgICAgICAgICh0aXRsZSA9IHRoaXMucGFyc2VMaW5rVGl0bGUoKSkgfHwgdHJ1ZSkgJiZcbiAgICAgICAgICAgIHRoaXMuc3BubCgpICYmXG4gICAgICAgICAgICB0aGlzLnBlZWsoKSA9PT0gQ19DTE9TRV9QQVJFTikge1xuICAgICAgICAgICAgdGhpcy5wb3MgKz0gMTtcbiAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvLyBOZXh0LCBzZWUgaWYgdGhlcmUncyBhIGxpbmsgbGFiZWxcbiAgICAgICAgdmFyIHNhdmVwb3MgPSB0aGlzLnBvcztcbiAgICAgICAgdGhpcy5zcG5sKCk7XG4gICAgICAgIHZhciBiZWZvcmVsYWJlbCA9IHRoaXMucG9zO1xuICAgICAgICB2YXIgbiA9IHRoaXMucGFyc2VMaW5rTGFiZWwoKTtcbiAgICAgICAgaWYgKG4gPT09IDAgfHwgbiA9PT0gMikge1xuICAgICAgICAgICAgLy8gZW1wdHkgb3IgbWlzc2luZyBzZWNvbmQgbGFiZWxcbiAgICAgICAgICAgIHJlZmxhYmVsID0gdGhpcy5zdWJqZWN0LnNsaWNlKG9wZW5lci5pbmRleCwgc3RhcnRwb3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVmbGFiZWwgPSB0aGlzLnN1YmplY3Quc2xpY2UoYmVmb3JlbGFiZWwsIGJlZm9yZWxhYmVsICsgbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4gPT09IDApIHtcbiAgICAgICAgICAgIC8vIElmIHNob3J0Y3V0IHJlZmVyZW5jZSBsaW5rLCByZXdpbmQgYmVmb3JlIHNwYWNlcyB3ZSBza2lwcGVkLlxuICAgICAgICAgICAgdGhpcy5wb3MgPSBzYXZlcG9zO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9va3VwIHJhd2xhYmVsIGluIHJlZm1hcFxuICAgICAgICB2YXIgbGluayA9IHRoaXMucmVmbWFwW25vcm1hbGl6ZVJlZmVyZW5jZShyZWZsYWJlbCldO1xuICAgICAgICBpZiAobGluaykge1xuICAgICAgICAgICAgZGVzdCA9IGxpbmsuZGVzdGluYXRpb247XG4gICAgICAgICAgICB0aXRsZSA9IGxpbmsudGl0bGU7XG4gICAgICAgICAgICBtYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IE5vZGUoaXNfaW1hZ2UgPyAnSW1hZ2UnIDogJ0xpbmsnKTtcbiAgICAgICAgbm9kZS5fZGVzdGluYXRpb24gPSBkZXN0O1xuICAgICAgICBub2RlLl90aXRsZSA9IHRpdGxlIHx8ICcnO1xuXG4gICAgICAgIHZhciB0bXAsIG5leHQ7XG4gICAgICAgIHRtcCA9IG9wZW5lci5ub2RlLl9uZXh0O1xuICAgICAgICB3aGlsZSAodG1wKSB7XG4gICAgICAgICAgICBuZXh0ID0gdG1wLl9uZXh0O1xuICAgICAgICAgICAgdG1wLnVubGluaygpO1xuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0bXApO1xuICAgICAgICAgICAgdG1wID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzRW1waGFzaXMob3BlbmVyLnByZXZpb3VzKTtcblxuICAgICAgICBvcGVuZXIubm9kZS51bmxpbmsoKTtcblxuICAgICAgICAvLyBwcm9jZXNzRW1waGFzaXMgd2lsbCByZW1vdmUgdGhpcyBhbmQgbGF0ZXIgZGVsaW1pdGVycy5cbiAgICAgICAgLy8gTm93LCBmb3IgYSBsaW5rLCB3ZSBhbHNvIGRlYWN0aXZhdGUgZWFybGllciBsaW5rIG9wZW5lcnMuXG4gICAgICAgIC8vIChubyBsaW5rcyBpbiBsaW5rcylcbiAgICAgICAgaWYgKCFpc19pbWFnZSkge1xuICAgICAgICAgIG9wZW5lciA9IHRoaXMuZGVsaW1pdGVycztcbiAgICAgICAgICB3aGlsZSAob3BlbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAob3BlbmVyLmNjID09PSBDX09QRU5fQlJBQ0tFVCkge1xuICAgICAgICAgICAgICAgIG9wZW5lci5hY3RpdmUgPSBmYWxzZTsgLy8gZGVhY3RpdmF0ZSB0aGlzIG9wZW5lclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3BlbmVyID0gb3BlbmVyLnByZXZpb3VzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfSBlbHNlIHsgLy8gbm8gbWF0Y2hcblxuICAgICAgICB0aGlzLnJlbW92ZURlbGltaXRlcihvcGVuZXIpOyAgLy8gcmVtb3ZlIHRoaXMgb3BlbmVyIGZyb20gc3RhY2tcbiAgICAgICAgdGhpcy5wb3MgPSBzdGFydHBvcztcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dCgnXScpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG59O1xuXG4vLyBBdHRlbXB0IHRvIHBhcnNlIGFuIGVudGl0eS5cbnZhciBwYXJzZUVudGl0eSA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gICAgdmFyIG07XG4gICAgaWYgKChtID0gdGhpcy5tYXRjaChyZUVudGl0eUhlcmUpKSkge1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KGRlY29kZUhUTUwobSkpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5cbi8vIFBhcnNlIGEgcnVuIG9mIG9yZGluYXJ5IGNoYXJhY3RlcnMsIG9yIGEgc2luZ2xlIGNoYXJhY3RlciB3aXRoXG4vLyBhIHNwZWNpYWwgbWVhbmluZyBpbiBtYXJrZG93biwgYXMgYSBwbGFpbiBzdHJpbmcuXG52YXIgcGFyc2VTdHJpbmcgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBtO1xuICAgIGlmICgobSA9IHRoaXMubWF0Y2gocmVNYWluKSkpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zbWFydCkge1xuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQodGV4dChcbiAgICAgICAgICAgICAgICBtLnJlcGxhY2UocmVFbGxpcHNlcywgXCJcXHUyMDI2XCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJlRGFzaCwgZnVuY3Rpb24oY2hhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbkNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFycy5sZW5ndGggJSAzID09PSAwKSB7IC8vIElmIGRpdmlzaWJsZSBieSAzLCB1c2UgYWxsIGVtIGRhc2hlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtQ291bnQgPSBjaGFycy5sZW5ndGggLyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFycy5sZW5ndGggJSAyID09PSAwKSB7IC8vIElmIGRpdmlzaWJsZSBieSAyLCB1c2UgYWxsIGVuIGRhc2hlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuQ291bnQgPSBjaGFycy5sZW5ndGggLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFycy5sZW5ndGggJSAzID09PSAyKSB7IC8vIElmIDIgZXh0cmEgZGFzaGVzLCB1c2UgZW4gZGFzaCBmb3IgbGFzdCAyOyBlbSBkYXNoZXMgZm9yIHJlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbkNvdW50ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbUNvdW50ID0gKGNoYXJzLmxlbmd0aCAtIDIpIC8gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIFVzZSBlbiBkYXNoZXMgZm9yIGxhc3QgNCBoeXBoZW5zOyBlbSBkYXNoZXMgZm9yIHJlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbkNvdW50ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbUNvdW50ID0gKGNoYXJzLmxlbmd0aCAtIDQpIC8gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlxcdTIwMTRcIi5yZXBlYXQoZW1Db3VudCkgKyBcIlxcdTIwMTNcIi5yZXBlYXQoZW5Db3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KG0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcblxuLy8gUGFyc2UgYSBuZXdsaW5lLiAgSWYgaXQgd2FzIHByZWNlZGVkIGJ5IHR3byBzcGFjZXMsIHJldHVybiBhIGhhcmRcbi8vIGxpbmUgYnJlYWs7IG90aGVyd2lzZSBhIHNvZnQgbGluZSBicmVhay5cbnZhciBwYXJzZU5ld2xpbmUgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHRoaXMucG9zICs9IDE7IC8vIGFzc3VtZSB3ZSdyZSBhdCBhIFxcblxuICAgIC8vIGNoZWNrIHByZXZpb3VzIG5vZGUgZm9yIHRyYWlsaW5nIHNwYWNlc1xuICAgIHZhciBsYXN0YyA9IGJsb2NrLl9sYXN0Q2hpbGQ7XG4gICAgaWYgKGxhc3RjICYmIGxhc3RjLnR5cGUgPT09ICdUZXh0JyAmJiBsYXN0Yy5fbGl0ZXJhbFtsYXN0Yy5fbGl0ZXJhbC5sZW5ndGggLSAxXSA9PT0gJyAnKSB7XG4gICAgICAgIHZhciBoYXJkYnJlYWsgPSBsYXN0Yy5fbGl0ZXJhbFtsYXN0Yy5fbGl0ZXJhbC5sZW5ndGggLSAyXSA9PT0gJyAnO1xuICAgICAgICBsYXN0Yy5fbGl0ZXJhbCA9IGxhc3RjLl9saXRlcmFsLnJlcGxhY2UocmVGaW5hbFNwYWNlLCAnJyk7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG5ldyBOb2RlKGhhcmRicmVhayA/ICdIYXJkYnJlYWsnIDogJ1NvZnRicmVhaycpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChuZXcgTm9kZSgnU29mdGJyZWFrJykpO1xuICAgIH1cbiAgICB0aGlzLm1hdGNoKHJlSW5pdGlhbFNwYWNlKTsgLy8gZ29iYmxlIGxlYWRpbmcgc3BhY2VzIGluIG5leHQgbGluZVxuICAgIHJldHVybiB0cnVlO1xufTtcblxuLy8gQXR0ZW1wdCB0byBwYXJzZSBhIGxpbmsgcmVmZXJlbmNlLCBtb2RpZnlpbmcgcmVmbWFwLlxudmFyIHBhcnNlUmVmZXJlbmNlID0gZnVuY3Rpb24ocywgcmVmbWFwKSB7XG4gICAgdGhpcy5zdWJqZWN0ID0gcztcbiAgICB0aGlzLnBvcyA9IDA7XG4gICAgdmFyIHJhd2xhYmVsO1xuICAgIHZhciBkZXN0O1xuICAgIHZhciB0aXRsZTtcbiAgICB2YXIgbWF0Y2hDaGFycztcbiAgICB2YXIgc3RhcnRwb3MgPSB0aGlzLnBvcztcblxuICAgIC8vIGxhYmVsOlxuICAgIG1hdGNoQ2hhcnMgPSB0aGlzLnBhcnNlTGlua0xhYmVsKCk7XG4gICAgaWYgKG1hdGNoQ2hhcnMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmF3bGFiZWwgPSB0aGlzLnN1YmplY3Quc3Vic3RyKDAsIG1hdGNoQ2hhcnMpO1xuICAgIH1cblxuICAgIC8vIGNvbG9uOlxuICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gQ19DT0xPTikge1xuICAgICAgICB0aGlzLnBvcysrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zID0gc3RhcnRwb3M7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vICBsaW5rIHVybFxuICAgIHRoaXMuc3BubCgpO1xuXG4gICAgZGVzdCA9IHRoaXMucGFyc2VMaW5rRGVzdGluYXRpb24oKTtcbiAgICBpZiAoZGVzdCA9PT0gbnVsbCB8fCBkZXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnBvcyA9IHN0YXJ0cG9zO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgYmVmb3JldGl0bGUgPSB0aGlzLnBvcztcbiAgICB0aGlzLnNwbmwoKTtcbiAgICB0aXRsZSA9IHRoaXMucGFyc2VMaW5rVGl0bGUoKTtcbiAgICBpZiAodGl0bGUgPT09IG51bGwpIHtcbiAgICAgICAgdGl0bGUgPSAnJztcbiAgICAgICAgLy8gcmV3aW5kIGJlZm9yZSBzcGFjZXNcbiAgICAgICAgdGhpcy5wb3MgPSBiZWZvcmV0aXRsZTtcbiAgICB9XG5cbiAgICAvLyBtYWtlIHN1cmUgd2UncmUgYXQgbGluZSBlbmQ6XG4gICAgdmFyIGF0TGluZUVuZCA9IHRydWU7XG4gICAgaWYgKHRoaXMubWF0Y2gocmVTcGFjZUF0RW5kT2ZMaW5lKSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAodGl0bGUgPT09ICcnKSB7XG4gICAgICAgICAgICBhdExpbmVFbmQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoZSBwb3RlbnRpYWwgdGl0bGUgd2UgZm91bmQgaXMgbm90IGF0IHRoZSBsaW5lIGVuZCxcbiAgICAgICAgICAgIC8vIGJ1dCBpdCBjb3VsZCBzdGlsbCBiZSBhIGxlZ2FsIGxpbmsgcmVmZXJlbmNlIGlmIHdlXG4gICAgICAgICAgICAvLyBkaXNjYXJkIHRoZSB0aXRsZVxuICAgICAgICAgICAgdGl0bGUgPSAnJztcbiAgICAgICAgICAgIC8vIHJld2luZCBiZWZvcmUgc3BhY2VzXG4gICAgICAgICAgICB0aGlzLnBvcyA9IGJlZm9yZXRpdGxlO1xuICAgICAgICAgICAgLy8gYW5kIGluc3RlYWQgY2hlY2sgaWYgdGhlIGxpbmsgVVJMIGlzIGF0IHRoZSBsaW5lIGVuZFxuICAgICAgICAgICAgYXRMaW5lRW5kID0gdGhpcy5tYXRjaChyZVNwYWNlQXRFbmRPZkxpbmUpICE9PSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhdExpbmVFbmQpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBzdGFydHBvcztcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIG5vcm1sYWJlbCA9IG5vcm1hbGl6ZVJlZmVyZW5jZShyYXdsYWJlbCk7XG4gICAgaWYgKG5vcm1sYWJlbCA9PT0gJycpIHtcbiAgICAgICAgLy8gbGFiZWwgbXVzdCBjb250YWluIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnNcbiAgICAgICAgdGhpcy5wb3MgPSBzdGFydHBvcztcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgaWYgKCFyZWZtYXBbbm9ybWxhYmVsXSkge1xuICAgICAgICByZWZtYXBbbm9ybWxhYmVsXSA9IHsgZGVzdGluYXRpb246IGRlc3QsIHRpdGxlOiB0aXRsZSB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb3MgLSBzdGFydHBvcztcbn07XG5cbi8vIFBhcnNlIHRoZSBuZXh0IGlubGluZSBlbGVtZW50IGluIHN1YmplY3QsIGFkdmFuY2luZyBzdWJqZWN0IHBvc2l0aW9uLlxuLy8gT24gc3VjY2VzcywgYWRkIHRoZSByZXN1bHQgdG8gYmxvY2sncyBjaGlsZHJlbiBhbmQgcmV0dXJuIHRydWUuXG4vLyBPbiBmYWlsdXJlLCByZXR1cm4gZmFsc2UuXG52YXIgcGFyc2VJbmxpbmUgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciByZXMgPSBmYWxzZTtcbiAgICB2YXIgYyA9IHRoaXMucGVlaygpO1xuICAgIGlmIChjID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN3aXRjaChjKSB7XG4gICAgY2FzZSBDX05FV0xJTkU6XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VOZXdsaW5lKGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX0JBQ0tTTEFTSDpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZUJhY2tzbGFzaChibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19CQUNLVElDSzpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZUJhY2t0aWNrcyhibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19BU1RFUklTSzpcbiAgICBjYXNlIENfVU5ERVJTQ09SRTpcbiAgICAgICAgcmVzID0gdGhpcy5oYW5kbGVEZWxpbShjLCBibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ19TSU5HTEVRVU9URTpcbiAgICBjYXNlIENfRE9VQkxFUVVPVEU6XG4gICAgICAgIHJlcyA9IHRoaXMub3B0aW9ucy5zbWFydCAmJiB0aGlzLmhhbmRsZURlbGltKGMsIGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX09QRU5fQlJBQ0tFVDpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZU9wZW5CcmFja2V0KGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX0JBTkc6XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VCYW5nKGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBDX0NMT1NFX0JSQUNLRVQ6XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VDbG9zZUJyYWNrZXQoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfTEVTU1RIQU46XG4gICAgICAgIHJlcyA9IHRoaXMucGFyc2VBdXRvbGluayhibG9jaykgfHwgdGhpcy5wYXJzZUh0bWxUYWcoYmxvY2spO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIENfQU1QRVJTQU5EOlxuICAgICAgICByZXMgPSB0aGlzLnBhcnNlRW50aXR5KGJsb2NrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmVzID0gdGhpcy5wYXJzZVN0cmluZyhibG9jayk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoIXJlcykge1xuICAgICAgICB0aGlzLnBvcyArPSAxO1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZCh0ZXh0KGZyb21Db2RlUG9pbnQoYykpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIFBhcnNlIHN0cmluZyBjb250ZW50IGluIGJsb2NrIGludG8gaW5saW5lIGNoaWxkcmVuLFxuLy8gdXNpbmcgcmVmbWFwIHRvIHJlc29sdmUgcmVmZXJlbmNlcy5cbnZhciBwYXJzZUlubGluZXMgPSBmdW5jdGlvbihibG9jaykge1xuICAgIHRoaXMuc3ViamVjdCA9IGJsb2NrLl9zdHJpbmdfY29udGVudC50cmltKCk7XG4gICAgdGhpcy5wb3MgPSAwO1xuICAgIHRoaXMuZGVsaW1pdGVycyA9IG51bGw7XG4gICAgd2hpbGUgKHRoaXMucGFyc2VJbmxpbmUoYmxvY2spKSB7XG4gICAgfVxuICAgIGJsb2NrLl9zdHJpbmdfY29udGVudCA9IG51bGw7IC8vIGFsbG93IHJhdyBzdHJpbmcgdG8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWRcbiAgICB0aGlzLnByb2Nlc3NFbXBoYXNpcyhudWxsKTtcbn07XG5cbi8vIFRoZSBJbmxpbmVQYXJzZXIgb2JqZWN0LlxuZnVuY3Rpb24gSW5saW5lUGFyc2VyKG9wdGlvbnMpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1YmplY3Q6ICcnLFxuICAgICAgICBkZWxpbWl0ZXJzOiBudWxsLCAgLy8gdXNlZCBieSBoYW5kbGVEZWxpbSBtZXRob2RcbiAgICAgICAgcG9zOiAwLFxuICAgICAgICByZWZtYXA6IHt9LFxuICAgICAgICBtYXRjaDogbWF0Y2gsXG4gICAgICAgIHBlZWs6IHBlZWssXG4gICAgICAgIHNwbmw6IHNwbmwsXG4gICAgICAgIHBhcnNlQmFja3RpY2tzOiBwYXJzZUJhY2t0aWNrcyxcbiAgICAgICAgcGFyc2VCYWNrc2xhc2g6IHBhcnNlQmFja3NsYXNoLFxuICAgICAgICBwYXJzZUF1dG9saW5rOiBwYXJzZUF1dG9saW5rLFxuICAgICAgICBwYXJzZUh0bWxUYWc6IHBhcnNlSHRtbFRhZyxcbiAgICAgICAgc2NhbkRlbGltczogc2NhbkRlbGltcyxcbiAgICAgICAgaGFuZGxlRGVsaW06IGhhbmRsZURlbGltLFxuICAgICAgICBwYXJzZUxpbmtUaXRsZTogcGFyc2VMaW5rVGl0bGUsXG4gICAgICAgIHBhcnNlTGlua0Rlc3RpbmF0aW9uOiBwYXJzZUxpbmtEZXN0aW5hdGlvbixcbiAgICAgICAgcGFyc2VMaW5rTGFiZWw6IHBhcnNlTGlua0xhYmVsLFxuICAgICAgICBwYXJzZU9wZW5CcmFja2V0OiBwYXJzZU9wZW5CcmFja2V0LFxuICAgICAgICBwYXJzZUNsb3NlQnJhY2tldDogcGFyc2VDbG9zZUJyYWNrZXQsXG4gICAgICAgIHBhcnNlQmFuZzogcGFyc2VCYW5nLFxuICAgICAgICBwYXJzZUVudGl0eTogcGFyc2VFbnRpdHksXG4gICAgICAgIHBhcnNlU3RyaW5nOiBwYXJzZVN0cmluZyxcbiAgICAgICAgcGFyc2VOZXdsaW5lOiBwYXJzZU5ld2xpbmUsXG4gICAgICAgIHBhcnNlUmVmZXJlbmNlOiBwYXJzZVJlZmVyZW5jZSxcbiAgICAgICAgcGFyc2VJbmxpbmU6IHBhcnNlSW5saW5lLFxuICAgICAgICBwcm9jZXNzRW1waGFzaXM6IHByb2Nlc3NFbXBoYXNpcyxcbiAgICAgICAgcmVtb3ZlRGVsaW1pdGVyOiByZW1vdmVEZWxpbWl0ZXIsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwge30sXG4gICAgICAgIHBhcnNlOiBwYXJzZUlubGluZXNcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElubGluZVBhcnNlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL2lubGluZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGRlcml2ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcuZnJvbUNvZGVQb2ludFxuLyohIGh0dHA6Ly9tdGhzLmJlL2Zyb21jb2RlcG9pbnQgdjAuMi4xIGJ5IEBtYXRoaWFzICovXG5pZiAoU3RyaW5nLmZyb21Db2RlUG9pbnQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQoXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgUmFuZ2VFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfTtcblxufSBlbHNlIHtcblxuICB2YXIgc3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbiAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgdmFyIGZyb21Db2RlUG9pbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBNQVhfU0laRSA9IDB4NDAwMDtcbiAgICAgIHZhciBjb2RlVW5pdHMgPSBbXTtcbiAgICAgIHZhciBoaWdoU3Vycm9nYXRlO1xuICAgICAgdmFyIGxvd1N1cnJvZ2F0ZTtcbiAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGNvZGVQb2ludCA9IE51bWJlcihhcmd1bWVudHNbaW5kZXhdKTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICFpc0Zpbml0ZShjb2RlUG9pbnQpIHx8IC8vIGBOYU5gLCBgK0luZmluaXR5YCwgb3IgYC1JbmZpbml0eWBcbiAgICAgICAgICAgICAgICAgIGNvZGVQb2ludCA8IDAgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPiAweDEwRkZGRiB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgICAgICAgICAgIGZsb29yKGNvZGVQb2ludCkgIT09IGNvZGVQb2ludCAvLyBub3QgYW4gaW50ZWdlclxuICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29kZVBvaW50IDw9IDB4RkZGRikgeyAvLyBCTVAgY29kZSBwb2ludFxuICAgICAgICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpO1xuICAgICAgICAgIH0gZWxzZSB7IC8vIEFzdHJhbCBjb2RlIHBvaW50OyBzcGxpdCBpbiBzdXJyb2dhdGUgaGFsdmVzXG4gICAgICAgICAgICAgIC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICAgICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwO1xuICAgICAgICAgICAgICBoaWdoU3Vycm9nYXRlID0gKGNvZGVQb2ludCA+PiAxMCkgKyAweEQ4MDA7XG4gICAgICAgICAgICAgIGxvd1N1cnJvZ2F0ZSA9IChjb2RlUG9pbnQgJSAweDQwMCkgKyAweERDMDA7XG4gICAgICAgICAgICAgIGNvZGVVbml0cy5wdXNoKGhpZ2hTdXJyb2dhdGUsIGxvd1N1cnJvZ2F0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCB8fCBjb2RlVW5pdHMubGVuZ3RoID4gTUFYX1NJWkUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZS5hcHBseShudWxsLCBjb2RlVW5pdHMpO1xuICAgICAgICAgICAgICBjb2RlVW5pdHMubGVuZ3RoID0gMDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtb2R1bGUuZXhwb3J0cyA9IGZyb21Db2RlUG9pbnQ7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9mcm9tLWNvZGUtcG9pbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIFRoZSBidWxrIG9mIHRoaXMgY29kZSBkZXJpdmVzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Rtb3Njcm9wL2ZvbGQtY2FzZVxuQnV0IGluIGFkZGl0aW9uIHRvIGNhc2UtZm9sZGluZywgd2UgYWxzbyBub3JtYWxpemUgd2hpdGVzcGFjZS5cblxuZm9sZC1jYXNlIGlzIENvcHlyaWdodCBNYXRoaWFzIEJ5bmVucyA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlLz5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbmluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxuTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG5XSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8qZXNsaW50LWRpc2FibGUgIGtleS1zcGFjaW5nLCBjb21tYS1zcGFjaW5nICovXG5cbnZhciByZWdleCA9IC9bIFxcdFxcclxcbl0rfFtBLVpcXHhCNVxceEMwLVxceEQ2XFx4RDgtXFx4REZcXHUwMTAwXFx1MDEwMlxcdTAxMDRcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx1MDEwRVxcdTAxMTBcXHUwMTEyXFx1MDExNFxcdTAxMTZcXHUwMTE4XFx1MDExQVxcdTAxMUNcXHUwMTFFXFx1MDEyMFxcdTAxMjJcXHUwMTI0XFx1MDEyNlxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMkVcXHUwMTMwXFx1MDEzMlxcdTAxMzRcXHUwMTM2XFx1MDEzOVxcdTAxM0JcXHUwMTNEXFx1MDEzRlxcdTAxNDFcXHUwMTQzXFx1MDE0NVxcdTAxNDdcXHUwMTQ5XFx1MDE0QVxcdTAxNENcXHUwMTRFXFx1MDE1MFxcdTAxNTJcXHUwMTU0XFx1MDE1NlxcdTAxNThcXHUwMTVBXFx1MDE1Q1xcdTAxNUVcXHUwMTYwXFx1MDE2MlxcdTAxNjRcXHUwMTY2XFx1MDE2OFxcdTAxNkFcXHUwMTZDXFx1MDE2RVxcdTAxNzBcXHUwMTcyXFx1MDE3NFxcdTAxNzZcXHUwMTc4XFx1MDE3OVxcdTAxN0JcXHUwMTdEXFx1MDE3RlxcdTAxODFcXHUwMTgyXFx1MDE4NFxcdTAxODZcXHUwMTg3XFx1MDE4OS1cXHUwMThCXFx1MDE4RS1cXHUwMTkxXFx1MDE5M1xcdTAxOTRcXHUwMTk2LVxcdTAxOThcXHUwMTlDXFx1MDE5RFxcdTAxOUZcXHUwMUEwXFx1MDFBMlxcdTAxQTRcXHUwMUE2XFx1MDFBN1xcdTAxQTlcXHUwMUFDXFx1MDFBRVxcdTAxQUZcXHUwMUIxLVxcdTAxQjNcXHUwMUI1XFx1MDFCN1xcdTAxQjhcXHUwMUJDXFx1MDFDNFxcdTAxQzVcXHUwMUM3XFx1MDFDOFxcdTAxQ0FcXHUwMUNCXFx1MDFDRFxcdTAxQ0ZcXHUwMUQxXFx1MDFEM1xcdTAxRDVcXHUwMUQ3XFx1MDFEOVxcdTAxREJcXHUwMURFXFx1MDFFMFxcdTAxRTJcXHUwMUU0XFx1MDFFNlxcdTAxRThcXHUwMUVBXFx1MDFFQ1xcdTAxRUVcXHUwMUYwLVxcdTAxRjJcXHUwMUY0XFx1MDFGNi1cXHUwMUY4XFx1MDFGQVxcdTAxRkNcXHUwMUZFXFx1MDIwMFxcdTAyMDJcXHUwMjA0XFx1MDIwNlxcdTAyMDhcXHUwMjBBXFx1MDIwQ1xcdTAyMEVcXHUwMjEwXFx1MDIxMlxcdTAyMTRcXHUwMjE2XFx1MDIxOFxcdTAyMUFcXHUwMjFDXFx1MDIxRVxcdTAyMjBcXHUwMjIyXFx1MDIyNFxcdTAyMjZcXHUwMjI4XFx1MDIyQVxcdTAyMkNcXHUwMjJFXFx1MDIzMFxcdTAyMzJcXHUwMjNBXFx1MDIzQlxcdTAyM0RcXHUwMjNFXFx1MDI0MVxcdTAyNDMtXFx1MDI0NlxcdTAyNDhcXHUwMjRBXFx1MDI0Q1xcdTAyNEVcXHUwMzQ1XFx1MDM3MFxcdTAzNzJcXHUwMzc2XFx1MDM3RlxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0FCXFx1MDNCMFxcdTAzQzJcXHUwM0NGLVxcdTAzRDFcXHUwM0Q1XFx1MDNENlxcdTAzRDhcXHUwM0RBXFx1MDNEQ1xcdTAzREVcXHUwM0UwXFx1MDNFMlxcdTAzRTRcXHUwM0U2XFx1MDNFOFxcdTAzRUFcXHUwM0VDXFx1MDNFRVxcdTAzRjBcXHUwM0YxXFx1MDNGNFxcdTAzRjVcXHUwM0Y3XFx1MDNGOVxcdTAzRkFcXHUwM0ZELVxcdTA0MkZcXHUwNDYwXFx1MDQ2MlxcdTA0NjRcXHUwNDY2XFx1MDQ2OFxcdTA0NkFcXHUwNDZDXFx1MDQ2RVxcdTA0NzBcXHUwNDcyXFx1MDQ3NFxcdTA0NzZcXHUwNDc4XFx1MDQ3QVxcdTA0N0NcXHUwNDdFXFx1MDQ4MFxcdTA0OEFcXHUwNDhDXFx1MDQ4RVxcdTA0OTBcXHUwNDkyXFx1MDQ5NFxcdTA0OTZcXHUwNDk4XFx1MDQ5QVxcdTA0OUNcXHUwNDlFXFx1MDRBMFxcdTA0QTJcXHUwNEE0XFx1MDRBNlxcdTA0QThcXHUwNEFBXFx1MDRBQ1xcdTA0QUVcXHUwNEIwXFx1MDRCMlxcdTA0QjRcXHUwNEI2XFx1MDRCOFxcdTA0QkFcXHUwNEJDXFx1MDRCRVxcdTA0QzBcXHUwNEMxXFx1MDRDM1xcdTA0QzVcXHUwNEM3XFx1MDRDOVxcdTA0Q0JcXHUwNENEXFx1MDREMFxcdTA0RDJcXHUwNEQ0XFx1MDRENlxcdTA0RDhcXHUwNERBXFx1MDREQ1xcdTA0REVcXHUwNEUwXFx1MDRFMlxcdTA0RTRcXHUwNEU2XFx1MDRFOFxcdTA0RUFcXHUwNEVDXFx1MDRFRVxcdTA0RjBcXHUwNEYyXFx1MDRGNFxcdTA0RjZcXHUwNEY4XFx1MDRGQVxcdTA0RkNcXHUwNEZFXFx1MDUwMFxcdTA1MDJcXHUwNTA0XFx1MDUwNlxcdTA1MDhcXHUwNTBBXFx1MDUwQ1xcdTA1MEVcXHUwNTEwXFx1MDUxMlxcdTA1MTRcXHUwNTE2XFx1MDUxOFxcdTA1MUFcXHUwNTFDXFx1MDUxRVxcdTA1MjBcXHUwNTIyXFx1MDUyNFxcdTA1MjZcXHUwNTI4XFx1MDUyQVxcdTA1MkNcXHUwNTJFXFx1MDUzMS1cXHUwNTU2XFx1MDU4N1xcdTEwQTAtXFx1MTBDNVxcdTEwQzdcXHUxMENEXFx1MUUwMFxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTFFMDhcXHUxRTBBXFx1MUUwQ1xcdTFFMEVcXHUxRTEwXFx1MUUxMlxcdTFFMTRcXHUxRTE2XFx1MUUxOFxcdTFFMUFcXHUxRTFDXFx1MUUxRVxcdTFFMjBcXHUxRTIyXFx1MUUyNFxcdTFFMjZcXHUxRTI4XFx1MUUyQVxcdTFFMkNcXHUxRTJFXFx1MUUzMFxcdTFFMzJcXHUxRTM0XFx1MUUzNlxcdTFFMzhcXHUxRTNBXFx1MUUzQ1xcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTFFNDRcXHUxRTQ2XFx1MUU0OFxcdTFFNEFcXHUxRTRDXFx1MUU0RVxcdTFFNTBcXHUxRTUyXFx1MUU1NFxcdTFFNTZcXHUxRTU4XFx1MUU1QVxcdTFFNUNcXHUxRTVFXFx1MUU2MFxcdTFFNjJcXHUxRTY0XFx1MUU2NlxcdTFFNjhcXHUxRTZBXFx1MUU2Q1xcdTFFNkVcXHUxRTcwXFx1MUU3MlxcdTFFNzRcXHUxRTc2XFx1MUU3OFxcdTFFN0FcXHUxRTdDXFx1MUU3RVxcdTFFODBcXHUxRTgyXFx1MUU4NFxcdTFFODZcXHUxRTg4XFx1MUU4QVxcdTFFOENcXHUxRThFXFx1MUU5MFxcdTFFOTJcXHUxRTk0XFx1MUU5Ni1cXHUxRTlCXFx1MUU5RVxcdTFFQTBcXHUxRUEyXFx1MUVBNFxcdTFFQTZcXHUxRUE4XFx1MUVBQVxcdTFFQUNcXHUxRUFFXFx1MUVCMFxcdTFFQjJcXHUxRUI0XFx1MUVCNlxcdTFFQjhcXHUxRUJBXFx1MUVCQ1xcdTFFQkVcXHUxRUMwXFx1MUVDMlxcdTFFQzRcXHUxRUM2XFx1MUVDOFxcdTFFQ0FcXHUxRUNDXFx1MUVDRVxcdTFFRDBcXHUxRUQyXFx1MUVENFxcdTFFRDZcXHUxRUQ4XFx1MUVEQVxcdTFFRENcXHUxRURFXFx1MUVFMFxcdTFFRTJcXHUxRUU0XFx1MUVFNlxcdTFFRThcXHUxRUVBXFx1MUVFQ1xcdTFFRUVcXHUxRUYwXFx1MUVGMlxcdTFFRjRcXHUxRUY2XFx1MUVGOFxcdTFFRkFcXHUxRUZDXFx1MUVGRVxcdTFGMDgtXFx1MUYwRlxcdTFGMTgtXFx1MUYxRFxcdTFGMjgtXFx1MUYyRlxcdTFGMzgtXFx1MUYzRlxcdTFGNDgtXFx1MUY0RFxcdTFGNTBcXHUxRjUyXFx1MUY1NFxcdTFGNTZcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGXFx1MUY2OC1cXHUxRjZGXFx1MUY4MC1cXHUxRkFGXFx1MUZCMi1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDJcXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZFMi1cXHUxRkU0XFx1MUZFNi1cXHUxRkVDXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZDXFx1MjEyNlxcdTIxMkFcXHUyMTJCXFx1MjEzMlxcdTIxNjAtXFx1MjE2RlxcdTIxODNcXHUyNEI2LVxcdTI0Q0ZcXHUyQzAwLVxcdTJDMkVcXHUyQzYwXFx1MkM2Mi1cXHUyQzY0XFx1MkM2N1xcdTJDNjlcXHUyQzZCXFx1MkM2RC1cXHUyQzcwXFx1MkM3MlxcdTJDNzVcXHUyQzdFLVxcdTJDODBcXHUyQzgyXFx1MkM4NFxcdTJDODZcXHUyQzg4XFx1MkM4QVxcdTJDOENcXHUyQzhFXFx1MkM5MFxcdTJDOTJcXHUyQzk0XFx1MkM5NlxcdTJDOThcXHUyQzlBXFx1MkM5Q1xcdTJDOUVcXHUyQ0EwXFx1MkNBMlxcdTJDQTRcXHUyQ0E2XFx1MkNBOFxcdTJDQUFcXHUyQ0FDXFx1MkNBRVxcdTJDQjBcXHUyQ0IyXFx1MkNCNFxcdTJDQjZcXHUyQ0I4XFx1MkNCQVxcdTJDQkNcXHUyQ0JFXFx1MkNDMFxcdTJDQzJcXHUyQ0M0XFx1MkNDNlxcdTJDQzhcXHUyQ0NBXFx1MkNDQ1xcdTJDQ0VcXHUyQ0QwXFx1MkNEMlxcdTJDRDRcXHUyQ0Q2XFx1MkNEOFxcdTJDREFcXHUyQ0RDXFx1MkNERVxcdTJDRTBcXHUyQ0UyXFx1MkNFQlxcdTJDRURcXHUyQ0YyXFx1QTY0MFxcdUE2NDJcXHVBNjQ0XFx1QTY0NlxcdUE2NDhcXHVBNjRBXFx1QTY0Q1xcdUE2NEVcXHVBNjUwXFx1QTY1MlxcdUE2NTRcXHVBNjU2XFx1QTY1OFxcdUE2NUFcXHVBNjVDXFx1QTY1RVxcdUE2NjBcXHVBNjYyXFx1QTY2NFxcdUE2NjZcXHVBNjY4XFx1QTY2QVxcdUE2NkNcXHVBNjgwXFx1QTY4MlxcdUE2ODRcXHVBNjg2XFx1QTY4OFxcdUE2OEFcXHVBNjhDXFx1QTY4RVxcdUE2OTBcXHVBNjkyXFx1QTY5NFxcdUE2OTZcXHVBNjk4XFx1QTY5QVxcdUE3MjJcXHVBNzI0XFx1QTcyNlxcdUE3MjhcXHVBNzJBXFx1QTcyQ1xcdUE3MkVcXHVBNzMyXFx1QTczNFxcdUE3MzZcXHVBNzM4XFx1QTczQVxcdUE3M0NcXHVBNzNFXFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTc0NlxcdUE3NDhcXHVBNzRBXFx1QTc0Q1xcdUE3NEVcXHVBNzUwXFx1QTc1MlxcdUE3NTRcXHVBNzU2XFx1QTc1OFxcdUE3NUFcXHVBNzVDXFx1QTc1RVxcdUE3NjBcXHVBNzYyXFx1QTc2NFxcdUE3NjZcXHVBNzY4XFx1QTc2QVxcdUE3NkNcXHVBNzZFXFx1QTc3OVxcdUE3N0JcXHVBNzdEXFx1QTc3RVxcdUE3ODBcXHVBNzgyXFx1QTc4NFxcdUE3ODZcXHVBNzhCXFx1QTc4RFxcdUE3OTBcXHVBNzkyXFx1QTc5NlxcdUE3OThcXHVBNzlBXFx1QTc5Q1xcdUE3OUVcXHVBN0EwXFx1QTdBMlxcdUE3QTRcXHVBN0E2XFx1QTdBOFxcdUE3QUEtXFx1QTdBRFxcdUE3QjBcXHVBN0IxXFx1RkIwMC1cXHVGQjA2XFx1RkIxMy1cXHVGQjE3XFx1RkYyMS1cXHVGRjNBXXxcXHVEODAxW1xcdURDMDAtXFx1REMyN118XFx1RDgwNltcXHVEQ0EwLVxcdURDQkZdL2c7XG5cbnZhciBtYXAgPSB7J0EnOidhJywnQic6J2InLCdDJzonYycsJ0QnOidkJywnRSc6J2UnLCdGJzonZicsJ0cnOidnJywnSCc6J2gnLCdJJzonaScsJ0onOidqJywnSyc6J2snLCdMJzonbCcsJ00nOidtJywnTic6J24nLCdPJzonbycsJ1AnOidwJywnUSc6J3EnLCdSJzoncicsJ1MnOidzJywnVCc6J3QnLCdVJzondScsJ1YnOid2JywnVyc6J3cnLCdYJzoneCcsJ1knOid5JywnWic6J3onLCdcXHhCNSc6J1xcdTAzQkMnLCdcXHhDMCc6J1xceEUwJywnXFx4QzEnOidcXHhFMScsJ1xceEMyJzonXFx4RTInLCdcXHhDMyc6J1xceEUzJywnXFx4QzQnOidcXHhFNCcsJ1xceEM1JzonXFx4RTUnLCdcXHhDNic6J1xceEU2JywnXFx4QzcnOidcXHhFNycsJ1xceEM4JzonXFx4RTgnLCdcXHhDOSc6J1xceEU5JywnXFx4Q0EnOidcXHhFQScsJ1xceENCJzonXFx4RUInLCdcXHhDQyc6J1xceEVDJywnXFx4Q0QnOidcXHhFRCcsJ1xceENFJzonXFx4RUUnLCdcXHhDRic6J1xceEVGJywnXFx4RDAnOidcXHhGMCcsJ1xceEQxJzonXFx4RjEnLCdcXHhEMic6J1xceEYyJywnXFx4RDMnOidcXHhGMycsJ1xceEQ0JzonXFx4RjQnLCdcXHhENSc6J1xceEY1JywnXFx4RDYnOidcXHhGNicsJ1xceEQ4JzonXFx4RjgnLCdcXHhEOSc6J1xceEY5JywnXFx4REEnOidcXHhGQScsJ1xceERCJzonXFx4RkInLCdcXHhEQyc6J1xceEZDJywnXFx4REQnOidcXHhGRCcsJ1xceERFJzonXFx4RkUnLCdcXHUwMTAwJzonXFx1MDEwMScsJ1xcdTAxMDInOidcXHUwMTAzJywnXFx1MDEwNCc6J1xcdTAxMDUnLCdcXHUwMTA2JzonXFx1MDEwNycsJ1xcdTAxMDgnOidcXHUwMTA5JywnXFx1MDEwQSc6J1xcdTAxMEInLCdcXHUwMTBDJzonXFx1MDEwRCcsJ1xcdTAxMEUnOidcXHUwMTBGJywnXFx1MDExMCc6J1xcdTAxMTEnLCdcXHUwMTEyJzonXFx1MDExMycsJ1xcdTAxMTQnOidcXHUwMTE1JywnXFx1MDExNic6J1xcdTAxMTcnLCdcXHUwMTE4JzonXFx1MDExOScsJ1xcdTAxMUEnOidcXHUwMTFCJywnXFx1MDExQyc6J1xcdTAxMUQnLCdcXHUwMTFFJzonXFx1MDExRicsJ1xcdTAxMjAnOidcXHUwMTIxJywnXFx1MDEyMic6J1xcdTAxMjMnLCdcXHUwMTI0JzonXFx1MDEyNScsJ1xcdTAxMjYnOidcXHUwMTI3JywnXFx1MDEyOCc6J1xcdTAxMjknLCdcXHUwMTJBJzonXFx1MDEyQicsJ1xcdTAxMkMnOidcXHUwMTJEJywnXFx1MDEyRSc6J1xcdTAxMkYnLCdcXHUwMTMyJzonXFx1MDEzMycsJ1xcdTAxMzQnOidcXHUwMTM1JywnXFx1MDEzNic6J1xcdTAxMzcnLCdcXHUwMTM5JzonXFx1MDEzQScsJ1xcdTAxM0InOidcXHUwMTNDJywnXFx1MDEzRCc6J1xcdTAxM0UnLCdcXHUwMTNGJzonXFx1MDE0MCcsJ1xcdTAxNDEnOidcXHUwMTQyJywnXFx1MDE0Myc6J1xcdTAxNDQnLCdcXHUwMTQ1JzonXFx1MDE0NicsJ1xcdTAxNDcnOidcXHUwMTQ4JywnXFx1MDE0QSc6J1xcdTAxNEInLCdcXHUwMTRDJzonXFx1MDE0RCcsJ1xcdTAxNEUnOidcXHUwMTRGJywnXFx1MDE1MCc6J1xcdTAxNTEnLCdcXHUwMTUyJzonXFx1MDE1MycsJ1xcdTAxNTQnOidcXHUwMTU1JywnXFx1MDE1Nic6J1xcdTAxNTcnLCdcXHUwMTU4JzonXFx1MDE1OScsJ1xcdTAxNUEnOidcXHUwMTVCJywnXFx1MDE1Qyc6J1xcdTAxNUQnLCdcXHUwMTVFJzonXFx1MDE1RicsJ1xcdTAxNjAnOidcXHUwMTYxJywnXFx1MDE2Mic6J1xcdTAxNjMnLCdcXHUwMTY0JzonXFx1MDE2NScsJ1xcdTAxNjYnOidcXHUwMTY3JywnXFx1MDE2OCc6J1xcdTAxNjknLCdcXHUwMTZBJzonXFx1MDE2QicsJ1xcdTAxNkMnOidcXHUwMTZEJywnXFx1MDE2RSc6J1xcdTAxNkYnLCdcXHUwMTcwJzonXFx1MDE3MScsJ1xcdTAxNzInOidcXHUwMTczJywnXFx1MDE3NCc6J1xcdTAxNzUnLCdcXHUwMTc2JzonXFx1MDE3NycsJ1xcdTAxNzgnOidcXHhGRicsJ1xcdTAxNzknOidcXHUwMTdBJywnXFx1MDE3Qic6J1xcdTAxN0MnLCdcXHUwMTdEJzonXFx1MDE3RScsJ1xcdTAxN0YnOidzJywnXFx1MDE4MSc6J1xcdTAyNTMnLCdcXHUwMTgyJzonXFx1MDE4MycsJ1xcdTAxODQnOidcXHUwMTg1JywnXFx1MDE4Nic6J1xcdTAyNTQnLCdcXHUwMTg3JzonXFx1MDE4OCcsJ1xcdTAxODknOidcXHUwMjU2JywnXFx1MDE4QSc6J1xcdTAyNTcnLCdcXHUwMThCJzonXFx1MDE4QycsJ1xcdTAxOEUnOidcXHUwMUREJywnXFx1MDE4Ric6J1xcdTAyNTknLCdcXHUwMTkwJzonXFx1MDI1QicsJ1xcdTAxOTEnOidcXHUwMTkyJywnXFx1MDE5Myc6J1xcdTAyNjAnLCdcXHUwMTk0JzonXFx1MDI2MycsJ1xcdTAxOTYnOidcXHUwMjY5JywnXFx1MDE5Nyc6J1xcdTAyNjgnLCdcXHUwMTk4JzonXFx1MDE5OScsJ1xcdTAxOUMnOidcXHUwMjZGJywnXFx1MDE5RCc6J1xcdTAyNzInLCdcXHUwMTlGJzonXFx1MDI3NScsJ1xcdTAxQTAnOidcXHUwMUExJywnXFx1MDFBMic6J1xcdTAxQTMnLCdcXHUwMUE0JzonXFx1MDFBNScsJ1xcdTAxQTYnOidcXHUwMjgwJywnXFx1MDFBNyc6J1xcdTAxQTgnLCdcXHUwMUE5JzonXFx1MDI4MycsJ1xcdTAxQUMnOidcXHUwMUFEJywnXFx1MDFBRSc6J1xcdTAyODgnLCdcXHUwMUFGJzonXFx1MDFCMCcsJ1xcdTAxQjEnOidcXHUwMjhBJywnXFx1MDFCMic6J1xcdTAyOEInLCdcXHUwMUIzJzonXFx1MDFCNCcsJ1xcdTAxQjUnOidcXHUwMUI2JywnXFx1MDFCNyc6J1xcdTAyOTInLCdcXHUwMUI4JzonXFx1MDFCOScsJ1xcdTAxQkMnOidcXHUwMUJEJywnXFx1MDFDNCc6J1xcdTAxQzYnLCdcXHUwMUM1JzonXFx1MDFDNicsJ1xcdTAxQzcnOidcXHUwMUM5JywnXFx1MDFDOCc6J1xcdTAxQzknLCdcXHUwMUNBJzonXFx1MDFDQycsJ1xcdTAxQ0InOidcXHUwMUNDJywnXFx1MDFDRCc6J1xcdTAxQ0UnLCdcXHUwMUNGJzonXFx1MDFEMCcsJ1xcdTAxRDEnOidcXHUwMUQyJywnXFx1MDFEMyc6J1xcdTAxRDQnLCdcXHUwMUQ1JzonXFx1MDFENicsJ1xcdTAxRDcnOidcXHUwMUQ4JywnXFx1MDFEOSc6J1xcdTAxREEnLCdcXHUwMURCJzonXFx1MDFEQycsJ1xcdTAxREUnOidcXHUwMURGJywnXFx1MDFFMCc6J1xcdTAxRTEnLCdcXHUwMUUyJzonXFx1MDFFMycsJ1xcdTAxRTQnOidcXHUwMUU1JywnXFx1MDFFNic6J1xcdTAxRTcnLCdcXHUwMUU4JzonXFx1MDFFOScsJ1xcdTAxRUEnOidcXHUwMUVCJywnXFx1MDFFQyc6J1xcdTAxRUQnLCdcXHUwMUVFJzonXFx1MDFFRicsJ1xcdTAxRjEnOidcXHUwMUYzJywnXFx1MDFGMic6J1xcdTAxRjMnLCdcXHUwMUY0JzonXFx1MDFGNScsJ1xcdTAxRjYnOidcXHUwMTk1JywnXFx1MDFGNyc6J1xcdTAxQkYnLCdcXHUwMUY4JzonXFx1MDFGOScsJ1xcdTAxRkEnOidcXHUwMUZCJywnXFx1MDFGQyc6J1xcdTAxRkQnLCdcXHUwMUZFJzonXFx1MDFGRicsJ1xcdTAyMDAnOidcXHUwMjAxJywnXFx1MDIwMic6J1xcdTAyMDMnLCdcXHUwMjA0JzonXFx1MDIwNScsJ1xcdTAyMDYnOidcXHUwMjA3JywnXFx1MDIwOCc6J1xcdTAyMDknLCdcXHUwMjBBJzonXFx1MDIwQicsJ1xcdTAyMEMnOidcXHUwMjBEJywnXFx1MDIwRSc6J1xcdTAyMEYnLCdcXHUwMjEwJzonXFx1MDIxMScsJ1xcdTAyMTInOidcXHUwMjEzJywnXFx1MDIxNCc6J1xcdTAyMTUnLCdcXHUwMjE2JzonXFx1MDIxNycsJ1xcdTAyMTgnOidcXHUwMjE5JywnXFx1MDIxQSc6J1xcdTAyMUInLCdcXHUwMjFDJzonXFx1MDIxRCcsJ1xcdTAyMUUnOidcXHUwMjFGJywnXFx1MDIyMCc6J1xcdTAxOUUnLCdcXHUwMjIyJzonXFx1MDIyMycsJ1xcdTAyMjQnOidcXHUwMjI1JywnXFx1MDIyNic6J1xcdTAyMjcnLCdcXHUwMjI4JzonXFx1MDIyOScsJ1xcdTAyMkEnOidcXHUwMjJCJywnXFx1MDIyQyc6J1xcdTAyMkQnLCdcXHUwMjJFJzonXFx1MDIyRicsJ1xcdTAyMzAnOidcXHUwMjMxJywnXFx1MDIzMic6J1xcdTAyMzMnLCdcXHUwMjNBJzonXFx1MkM2NScsJ1xcdTAyM0InOidcXHUwMjNDJywnXFx1MDIzRCc6J1xcdTAxOUEnLCdcXHUwMjNFJzonXFx1MkM2NicsJ1xcdTAyNDEnOidcXHUwMjQyJywnXFx1MDI0Myc6J1xcdTAxODAnLCdcXHUwMjQ0JzonXFx1MDI4OScsJ1xcdTAyNDUnOidcXHUwMjhDJywnXFx1MDI0Nic6J1xcdTAyNDcnLCdcXHUwMjQ4JzonXFx1MDI0OScsJ1xcdTAyNEEnOidcXHUwMjRCJywnXFx1MDI0Qyc6J1xcdTAyNEQnLCdcXHUwMjRFJzonXFx1MDI0RicsJ1xcdTAzNDUnOidcXHUwM0I5JywnXFx1MDM3MCc6J1xcdTAzNzEnLCdcXHUwMzcyJzonXFx1MDM3MycsJ1xcdTAzNzYnOidcXHUwMzc3JywnXFx1MDM3Ric6J1xcdTAzRjMnLCdcXHUwMzg2JzonXFx1MDNBQycsJ1xcdTAzODgnOidcXHUwM0FEJywnXFx1MDM4OSc6J1xcdTAzQUUnLCdcXHUwMzhBJzonXFx1MDNBRicsJ1xcdTAzOEMnOidcXHUwM0NDJywnXFx1MDM4RSc6J1xcdTAzQ0QnLCdcXHUwMzhGJzonXFx1MDNDRScsJ1xcdTAzOTEnOidcXHUwM0IxJywnXFx1MDM5Mic6J1xcdTAzQjInLCdcXHUwMzkzJzonXFx1MDNCMycsJ1xcdTAzOTQnOidcXHUwM0I0JywnXFx1MDM5NSc6J1xcdTAzQjUnLCdcXHUwMzk2JzonXFx1MDNCNicsJ1xcdTAzOTcnOidcXHUwM0I3JywnXFx1MDM5OCc6J1xcdTAzQjgnLCdcXHUwMzk5JzonXFx1MDNCOScsJ1xcdTAzOUEnOidcXHUwM0JBJywnXFx1MDM5Qic6J1xcdTAzQkInLCdcXHUwMzlDJzonXFx1MDNCQycsJ1xcdTAzOUQnOidcXHUwM0JEJywnXFx1MDM5RSc6J1xcdTAzQkUnLCdcXHUwMzlGJzonXFx1MDNCRicsJ1xcdTAzQTAnOidcXHUwM0MwJywnXFx1MDNBMSc6J1xcdTAzQzEnLCdcXHUwM0EzJzonXFx1MDNDMycsJ1xcdTAzQTQnOidcXHUwM0M0JywnXFx1MDNBNSc6J1xcdTAzQzUnLCdcXHUwM0E2JzonXFx1MDNDNicsJ1xcdTAzQTcnOidcXHUwM0M3JywnXFx1MDNBOCc6J1xcdTAzQzgnLCdcXHUwM0E5JzonXFx1MDNDOScsJ1xcdTAzQUEnOidcXHUwM0NBJywnXFx1MDNBQic6J1xcdTAzQ0InLCdcXHUwM0MyJzonXFx1MDNDMycsJ1xcdTAzQ0YnOidcXHUwM0Q3JywnXFx1MDNEMCc6J1xcdTAzQjInLCdcXHUwM0QxJzonXFx1MDNCOCcsJ1xcdTAzRDUnOidcXHUwM0M2JywnXFx1MDNENic6J1xcdTAzQzAnLCdcXHUwM0Q4JzonXFx1MDNEOScsJ1xcdTAzREEnOidcXHUwM0RCJywnXFx1MDNEQyc6J1xcdTAzREQnLCdcXHUwM0RFJzonXFx1MDNERicsJ1xcdTAzRTAnOidcXHUwM0UxJywnXFx1MDNFMic6J1xcdTAzRTMnLCdcXHUwM0U0JzonXFx1MDNFNScsJ1xcdTAzRTYnOidcXHUwM0U3JywnXFx1MDNFOCc6J1xcdTAzRTknLCdcXHUwM0VBJzonXFx1MDNFQicsJ1xcdTAzRUMnOidcXHUwM0VEJywnXFx1MDNFRSc6J1xcdTAzRUYnLCdcXHUwM0YwJzonXFx1MDNCQScsJ1xcdTAzRjEnOidcXHUwM0MxJywnXFx1MDNGNCc6J1xcdTAzQjgnLCdcXHUwM0Y1JzonXFx1MDNCNScsJ1xcdTAzRjcnOidcXHUwM0Y4JywnXFx1MDNGOSc6J1xcdTAzRjInLCdcXHUwM0ZBJzonXFx1MDNGQicsJ1xcdTAzRkQnOidcXHUwMzdCJywnXFx1MDNGRSc6J1xcdTAzN0MnLCdcXHUwM0ZGJzonXFx1MDM3RCcsJ1xcdTA0MDAnOidcXHUwNDUwJywnXFx1MDQwMSc6J1xcdTA0NTEnLCdcXHUwNDAyJzonXFx1MDQ1MicsJ1xcdTA0MDMnOidcXHUwNDUzJywnXFx1MDQwNCc6J1xcdTA0NTQnLCdcXHUwNDA1JzonXFx1MDQ1NScsJ1xcdTA0MDYnOidcXHUwNDU2JywnXFx1MDQwNyc6J1xcdTA0NTcnLCdcXHUwNDA4JzonXFx1MDQ1OCcsJ1xcdTA0MDknOidcXHUwNDU5JywnXFx1MDQwQSc6J1xcdTA0NUEnLCdcXHUwNDBCJzonXFx1MDQ1QicsJ1xcdTA0MEMnOidcXHUwNDVDJywnXFx1MDQwRCc6J1xcdTA0NUQnLCdcXHUwNDBFJzonXFx1MDQ1RScsJ1xcdTA0MEYnOidcXHUwNDVGJywnXFx1MDQxMCc6J1xcdTA0MzAnLCdcXHUwNDExJzonXFx1MDQzMScsJ1xcdTA0MTInOidcXHUwNDMyJywnXFx1MDQxMyc6J1xcdTA0MzMnLCdcXHUwNDE0JzonXFx1MDQzNCcsJ1xcdTA0MTUnOidcXHUwNDM1JywnXFx1MDQxNic6J1xcdTA0MzYnLCdcXHUwNDE3JzonXFx1MDQzNycsJ1xcdTA0MTgnOidcXHUwNDM4JywnXFx1MDQxOSc6J1xcdTA0MzknLCdcXHUwNDFBJzonXFx1MDQzQScsJ1xcdTA0MUInOidcXHUwNDNCJywnXFx1MDQxQyc6J1xcdTA0M0MnLCdcXHUwNDFEJzonXFx1MDQzRCcsJ1xcdTA0MUUnOidcXHUwNDNFJywnXFx1MDQxRic6J1xcdTA0M0YnLCdcXHUwNDIwJzonXFx1MDQ0MCcsJ1xcdTA0MjEnOidcXHUwNDQxJywnXFx1MDQyMic6J1xcdTA0NDInLCdcXHUwNDIzJzonXFx1MDQ0MycsJ1xcdTA0MjQnOidcXHUwNDQ0JywnXFx1MDQyNSc6J1xcdTA0NDUnLCdcXHUwNDI2JzonXFx1MDQ0NicsJ1xcdTA0MjcnOidcXHUwNDQ3JywnXFx1MDQyOCc6J1xcdTA0NDgnLCdcXHUwNDI5JzonXFx1MDQ0OScsJ1xcdTA0MkEnOidcXHUwNDRBJywnXFx1MDQyQic6J1xcdTA0NEInLCdcXHUwNDJDJzonXFx1MDQ0QycsJ1xcdTA0MkQnOidcXHUwNDREJywnXFx1MDQyRSc6J1xcdTA0NEUnLCdcXHUwNDJGJzonXFx1MDQ0RicsJ1xcdTA0NjAnOidcXHUwNDYxJywnXFx1MDQ2Mic6J1xcdTA0NjMnLCdcXHUwNDY0JzonXFx1MDQ2NScsJ1xcdTA0NjYnOidcXHUwNDY3JywnXFx1MDQ2OCc6J1xcdTA0NjknLCdcXHUwNDZBJzonXFx1MDQ2QicsJ1xcdTA0NkMnOidcXHUwNDZEJywnXFx1MDQ2RSc6J1xcdTA0NkYnLCdcXHUwNDcwJzonXFx1MDQ3MScsJ1xcdTA0NzInOidcXHUwNDczJywnXFx1MDQ3NCc6J1xcdTA0NzUnLCdcXHUwNDc2JzonXFx1MDQ3NycsJ1xcdTA0NzgnOidcXHUwNDc5JywnXFx1MDQ3QSc6J1xcdTA0N0InLCdcXHUwNDdDJzonXFx1MDQ3RCcsJ1xcdTA0N0UnOidcXHUwNDdGJywnXFx1MDQ4MCc6J1xcdTA0ODEnLCdcXHUwNDhBJzonXFx1MDQ4QicsJ1xcdTA0OEMnOidcXHUwNDhEJywnXFx1MDQ4RSc6J1xcdTA0OEYnLCdcXHUwNDkwJzonXFx1MDQ5MScsJ1xcdTA0OTInOidcXHUwNDkzJywnXFx1MDQ5NCc6J1xcdTA0OTUnLCdcXHUwNDk2JzonXFx1MDQ5NycsJ1xcdTA0OTgnOidcXHUwNDk5JywnXFx1MDQ5QSc6J1xcdTA0OUInLCdcXHUwNDlDJzonXFx1MDQ5RCcsJ1xcdTA0OUUnOidcXHUwNDlGJywnXFx1MDRBMCc6J1xcdTA0QTEnLCdcXHUwNEEyJzonXFx1MDRBMycsJ1xcdTA0QTQnOidcXHUwNEE1JywnXFx1MDRBNic6J1xcdTA0QTcnLCdcXHUwNEE4JzonXFx1MDRBOScsJ1xcdTA0QUEnOidcXHUwNEFCJywnXFx1MDRBQyc6J1xcdTA0QUQnLCdcXHUwNEFFJzonXFx1MDRBRicsJ1xcdTA0QjAnOidcXHUwNEIxJywnXFx1MDRCMic6J1xcdTA0QjMnLCdcXHUwNEI0JzonXFx1MDRCNScsJ1xcdTA0QjYnOidcXHUwNEI3JywnXFx1MDRCOCc6J1xcdTA0QjknLCdcXHUwNEJBJzonXFx1MDRCQicsJ1xcdTA0QkMnOidcXHUwNEJEJywnXFx1MDRCRSc6J1xcdTA0QkYnLCdcXHUwNEMwJzonXFx1MDRDRicsJ1xcdTA0QzEnOidcXHUwNEMyJywnXFx1MDRDMyc6J1xcdTA0QzQnLCdcXHUwNEM1JzonXFx1MDRDNicsJ1xcdTA0QzcnOidcXHUwNEM4JywnXFx1MDRDOSc6J1xcdTA0Q0EnLCdcXHUwNENCJzonXFx1MDRDQycsJ1xcdTA0Q0QnOidcXHUwNENFJywnXFx1MDREMCc6J1xcdTA0RDEnLCdcXHUwNEQyJzonXFx1MDREMycsJ1xcdTA0RDQnOidcXHUwNEQ1JywnXFx1MDRENic6J1xcdTA0RDcnLCdcXHUwNEQ4JzonXFx1MDREOScsJ1xcdTA0REEnOidcXHUwNERCJywnXFx1MDREQyc6J1xcdTA0REQnLCdcXHUwNERFJzonXFx1MDRERicsJ1xcdTA0RTAnOidcXHUwNEUxJywnXFx1MDRFMic6J1xcdTA0RTMnLCdcXHUwNEU0JzonXFx1MDRFNScsJ1xcdTA0RTYnOidcXHUwNEU3JywnXFx1MDRFOCc6J1xcdTA0RTknLCdcXHUwNEVBJzonXFx1MDRFQicsJ1xcdTA0RUMnOidcXHUwNEVEJywnXFx1MDRFRSc6J1xcdTA0RUYnLCdcXHUwNEYwJzonXFx1MDRGMScsJ1xcdTA0RjInOidcXHUwNEYzJywnXFx1MDRGNCc6J1xcdTA0RjUnLCdcXHUwNEY2JzonXFx1MDRGNycsJ1xcdTA0RjgnOidcXHUwNEY5JywnXFx1MDRGQSc6J1xcdTA0RkInLCdcXHUwNEZDJzonXFx1MDRGRCcsJ1xcdTA0RkUnOidcXHUwNEZGJywnXFx1MDUwMCc6J1xcdTA1MDEnLCdcXHUwNTAyJzonXFx1MDUwMycsJ1xcdTA1MDQnOidcXHUwNTA1JywnXFx1MDUwNic6J1xcdTA1MDcnLCdcXHUwNTA4JzonXFx1MDUwOScsJ1xcdTA1MEEnOidcXHUwNTBCJywnXFx1MDUwQyc6J1xcdTA1MEQnLCdcXHUwNTBFJzonXFx1MDUwRicsJ1xcdTA1MTAnOidcXHUwNTExJywnXFx1MDUxMic6J1xcdTA1MTMnLCdcXHUwNTE0JzonXFx1MDUxNScsJ1xcdTA1MTYnOidcXHUwNTE3JywnXFx1MDUxOCc6J1xcdTA1MTknLCdcXHUwNTFBJzonXFx1MDUxQicsJ1xcdTA1MUMnOidcXHUwNTFEJywnXFx1MDUxRSc6J1xcdTA1MUYnLCdcXHUwNTIwJzonXFx1MDUyMScsJ1xcdTA1MjInOidcXHUwNTIzJywnXFx1MDUyNCc6J1xcdTA1MjUnLCdcXHUwNTI2JzonXFx1MDUyNycsJ1xcdTA1MjgnOidcXHUwNTI5JywnXFx1MDUyQSc6J1xcdTA1MkInLCdcXHUwNTJDJzonXFx1MDUyRCcsJ1xcdTA1MkUnOidcXHUwNTJGJywnXFx1MDUzMSc6J1xcdTA1NjEnLCdcXHUwNTMyJzonXFx1MDU2MicsJ1xcdTA1MzMnOidcXHUwNTYzJywnXFx1MDUzNCc6J1xcdTA1NjQnLCdcXHUwNTM1JzonXFx1MDU2NScsJ1xcdTA1MzYnOidcXHUwNTY2JywnXFx1MDUzNyc6J1xcdTA1NjcnLCdcXHUwNTM4JzonXFx1MDU2OCcsJ1xcdTA1MzknOidcXHUwNTY5JywnXFx1MDUzQSc6J1xcdTA1NkEnLCdcXHUwNTNCJzonXFx1MDU2QicsJ1xcdTA1M0MnOidcXHUwNTZDJywnXFx1MDUzRCc6J1xcdTA1NkQnLCdcXHUwNTNFJzonXFx1MDU2RScsJ1xcdTA1M0YnOidcXHUwNTZGJywnXFx1MDU0MCc6J1xcdTA1NzAnLCdcXHUwNTQxJzonXFx1MDU3MScsJ1xcdTA1NDInOidcXHUwNTcyJywnXFx1MDU0Myc6J1xcdTA1NzMnLCdcXHUwNTQ0JzonXFx1MDU3NCcsJ1xcdTA1NDUnOidcXHUwNTc1JywnXFx1MDU0Nic6J1xcdTA1NzYnLCdcXHUwNTQ3JzonXFx1MDU3NycsJ1xcdTA1NDgnOidcXHUwNTc4JywnXFx1MDU0OSc6J1xcdTA1NzknLCdcXHUwNTRBJzonXFx1MDU3QScsJ1xcdTA1NEInOidcXHUwNTdCJywnXFx1MDU0Qyc6J1xcdTA1N0MnLCdcXHUwNTREJzonXFx1MDU3RCcsJ1xcdTA1NEUnOidcXHUwNTdFJywnXFx1MDU0Ric6J1xcdTA1N0YnLCdcXHUwNTUwJzonXFx1MDU4MCcsJ1xcdTA1NTEnOidcXHUwNTgxJywnXFx1MDU1Mic6J1xcdTA1ODInLCdcXHUwNTUzJzonXFx1MDU4MycsJ1xcdTA1NTQnOidcXHUwNTg0JywnXFx1MDU1NSc6J1xcdTA1ODUnLCdcXHUwNTU2JzonXFx1MDU4NicsJ1xcdTEwQTAnOidcXHUyRDAwJywnXFx1MTBBMSc6J1xcdTJEMDEnLCdcXHUxMEEyJzonXFx1MkQwMicsJ1xcdTEwQTMnOidcXHUyRDAzJywnXFx1MTBBNCc6J1xcdTJEMDQnLCdcXHUxMEE1JzonXFx1MkQwNScsJ1xcdTEwQTYnOidcXHUyRDA2JywnXFx1MTBBNyc6J1xcdTJEMDcnLCdcXHUxMEE4JzonXFx1MkQwOCcsJ1xcdTEwQTknOidcXHUyRDA5JywnXFx1MTBBQSc6J1xcdTJEMEEnLCdcXHUxMEFCJzonXFx1MkQwQicsJ1xcdTEwQUMnOidcXHUyRDBDJywnXFx1MTBBRCc6J1xcdTJEMEQnLCdcXHUxMEFFJzonXFx1MkQwRScsJ1xcdTEwQUYnOidcXHUyRDBGJywnXFx1MTBCMCc6J1xcdTJEMTAnLCdcXHUxMEIxJzonXFx1MkQxMScsJ1xcdTEwQjInOidcXHUyRDEyJywnXFx1MTBCMyc6J1xcdTJEMTMnLCdcXHUxMEI0JzonXFx1MkQxNCcsJ1xcdTEwQjUnOidcXHUyRDE1JywnXFx1MTBCNic6J1xcdTJEMTYnLCdcXHUxMEI3JzonXFx1MkQxNycsJ1xcdTEwQjgnOidcXHUyRDE4JywnXFx1MTBCOSc6J1xcdTJEMTknLCdcXHUxMEJBJzonXFx1MkQxQScsJ1xcdTEwQkInOidcXHUyRDFCJywnXFx1MTBCQyc6J1xcdTJEMUMnLCdcXHUxMEJEJzonXFx1MkQxRCcsJ1xcdTEwQkUnOidcXHUyRDFFJywnXFx1MTBCRic6J1xcdTJEMUYnLCdcXHUxMEMwJzonXFx1MkQyMCcsJ1xcdTEwQzEnOidcXHUyRDIxJywnXFx1MTBDMic6J1xcdTJEMjInLCdcXHUxMEMzJzonXFx1MkQyMycsJ1xcdTEwQzQnOidcXHUyRDI0JywnXFx1MTBDNSc6J1xcdTJEMjUnLCdcXHUxMEM3JzonXFx1MkQyNycsJ1xcdTEwQ0QnOidcXHUyRDJEJywnXFx1MUUwMCc6J1xcdTFFMDEnLCdcXHUxRTAyJzonXFx1MUUwMycsJ1xcdTFFMDQnOidcXHUxRTA1JywnXFx1MUUwNic6J1xcdTFFMDcnLCdcXHUxRTA4JzonXFx1MUUwOScsJ1xcdTFFMEEnOidcXHUxRTBCJywnXFx1MUUwQyc6J1xcdTFFMEQnLCdcXHUxRTBFJzonXFx1MUUwRicsJ1xcdTFFMTAnOidcXHUxRTExJywnXFx1MUUxMic6J1xcdTFFMTMnLCdcXHUxRTE0JzonXFx1MUUxNScsJ1xcdTFFMTYnOidcXHUxRTE3JywnXFx1MUUxOCc6J1xcdTFFMTknLCdcXHUxRTFBJzonXFx1MUUxQicsJ1xcdTFFMUMnOidcXHUxRTFEJywnXFx1MUUxRSc6J1xcdTFFMUYnLCdcXHUxRTIwJzonXFx1MUUyMScsJ1xcdTFFMjInOidcXHUxRTIzJywnXFx1MUUyNCc6J1xcdTFFMjUnLCdcXHUxRTI2JzonXFx1MUUyNycsJ1xcdTFFMjgnOidcXHUxRTI5JywnXFx1MUUyQSc6J1xcdTFFMkInLCdcXHUxRTJDJzonXFx1MUUyRCcsJ1xcdTFFMkUnOidcXHUxRTJGJywnXFx1MUUzMCc6J1xcdTFFMzEnLCdcXHUxRTMyJzonXFx1MUUzMycsJ1xcdTFFMzQnOidcXHUxRTM1JywnXFx1MUUzNic6J1xcdTFFMzcnLCdcXHUxRTM4JzonXFx1MUUzOScsJ1xcdTFFM0EnOidcXHUxRTNCJywnXFx1MUUzQyc6J1xcdTFFM0QnLCdcXHUxRTNFJzonXFx1MUUzRicsJ1xcdTFFNDAnOidcXHUxRTQxJywnXFx1MUU0Mic6J1xcdTFFNDMnLCdcXHUxRTQ0JzonXFx1MUU0NScsJ1xcdTFFNDYnOidcXHUxRTQ3JywnXFx1MUU0OCc6J1xcdTFFNDknLCdcXHUxRTRBJzonXFx1MUU0QicsJ1xcdTFFNEMnOidcXHUxRTREJywnXFx1MUU0RSc6J1xcdTFFNEYnLCdcXHUxRTUwJzonXFx1MUU1MScsJ1xcdTFFNTInOidcXHUxRTUzJywnXFx1MUU1NCc6J1xcdTFFNTUnLCdcXHUxRTU2JzonXFx1MUU1NycsJ1xcdTFFNTgnOidcXHUxRTU5JywnXFx1MUU1QSc6J1xcdTFFNUInLCdcXHUxRTVDJzonXFx1MUU1RCcsJ1xcdTFFNUUnOidcXHUxRTVGJywnXFx1MUU2MCc6J1xcdTFFNjEnLCdcXHUxRTYyJzonXFx1MUU2MycsJ1xcdTFFNjQnOidcXHUxRTY1JywnXFx1MUU2Nic6J1xcdTFFNjcnLCdcXHUxRTY4JzonXFx1MUU2OScsJ1xcdTFFNkEnOidcXHUxRTZCJywnXFx1MUU2Qyc6J1xcdTFFNkQnLCdcXHUxRTZFJzonXFx1MUU2RicsJ1xcdTFFNzAnOidcXHUxRTcxJywnXFx1MUU3Mic6J1xcdTFFNzMnLCdcXHUxRTc0JzonXFx1MUU3NScsJ1xcdTFFNzYnOidcXHUxRTc3JywnXFx1MUU3OCc6J1xcdTFFNzknLCdcXHUxRTdBJzonXFx1MUU3QicsJ1xcdTFFN0MnOidcXHUxRTdEJywnXFx1MUU3RSc6J1xcdTFFN0YnLCdcXHUxRTgwJzonXFx1MUU4MScsJ1xcdTFFODInOidcXHUxRTgzJywnXFx1MUU4NCc6J1xcdTFFODUnLCdcXHUxRTg2JzonXFx1MUU4NycsJ1xcdTFFODgnOidcXHUxRTg5JywnXFx1MUU4QSc6J1xcdTFFOEInLCdcXHUxRThDJzonXFx1MUU4RCcsJ1xcdTFFOEUnOidcXHUxRThGJywnXFx1MUU5MCc6J1xcdTFFOTEnLCdcXHUxRTkyJzonXFx1MUU5MycsJ1xcdTFFOTQnOidcXHUxRTk1JywnXFx1MUU5Qic6J1xcdTFFNjEnLCdcXHUxRUEwJzonXFx1MUVBMScsJ1xcdTFFQTInOidcXHUxRUEzJywnXFx1MUVBNCc6J1xcdTFFQTUnLCdcXHUxRUE2JzonXFx1MUVBNycsJ1xcdTFFQTgnOidcXHUxRUE5JywnXFx1MUVBQSc6J1xcdTFFQUInLCdcXHUxRUFDJzonXFx1MUVBRCcsJ1xcdTFFQUUnOidcXHUxRUFGJywnXFx1MUVCMCc6J1xcdTFFQjEnLCdcXHUxRUIyJzonXFx1MUVCMycsJ1xcdTFFQjQnOidcXHUxRUI1JywnXFx1MUVCNic6J1xcdTFFQjcnLCdcXHUxRUI4JzonXFx1MUVCOScsJ1xcdTFFQkEnOidcXHUxRUJCJywnXFx1MUVCQyc6J1xcdTFFQkQnLCdcXHUxRUJFJzonXFx1MUVCRicsJ1xcdTFFQzAnOidcXHUxRUMxJywnXFx1MUVDMic6J1xcdTFFQzMnLCdcXHUxRUM0JzonXFx1MUVDNScsJ1xcdTFFQzYnOidcXHUxRUM3JywnXFx1MUVDOCc6J1xcdTFFQzknLCdcXHUxRUNBJzonXFx1MUVDQicsJ1xcdTFFQ0MnOidcXHUxRUNEJywnXFx1MUVDRSc6J1xcdTFFQ0YnLCdcXHUxRUQwJzonXFx1MUVEMScsJ1xcdTFFRDInOidcXHUxRUQzJywnXFx1MUVENCc6J1xcdTFFRDUnLCdcXHUxRUQ2JzonXFx1MUVENycsJ1xcdTFFRDgnOidcXHUxRUQ5JywnXFx1MUVEQSc6J1xcdTFFREInLCdcXHUxRURDJzonXFx1MUVERCcsJ1xcdTFFREUnOidcXHUxRURGJywnXFx1MUVFMCc6J1xcdTFFRTEnLCdcXHUxRUUyJzonXFx1MUVFMycsJ1xcdTFFRTQnOidcXHUxRUU1JywnXFx1MUVFNic6J1xcdTFFRTcnLCdcXHUxRUU4JzonXFx1MUVFOScsJ1xcdTFFRUEnOidcXHUxRUVCJywnXFx1MUVFQyc6J1xcdTFFRUQnLCdcXHUxRUVFJzonXFx1MUVFRicsJ1xcdTFFRjAnOidcXHUxRUYxJywnXFx1MUVGMic6J1xcdTFFRjMnLCdcXHUxRUY0JzonXFx1MUVGNScsJ1xcdTFFRjYnOidcXHUxRUY3JywnXFx1MUVGOCc6J1xcdTFFRjknLCdcXHUxRUZBJzonXFx1MUVGQicsJ1xcdTFFRkMnOidcXHUxRUZEJywnXFx1MUVGRSc6J1xcdTFFRkYnLCdcXHUxRjA4JzonXFx1MUYwMCcsJ1xcdTFGMDknOidcXHUxRjAxJywnXFx1MUYwQSc6J1xcdTFGMDInLCdcXHUxRjBCJzonXFx1MUYwMycsJ1xcdTFGMEMnOidcXHUxRjA0JywnXFx1MUYwRCc6J1xcdTFGMDUnLCdcXHUxRjBFJzonXFx1MUYwNicsJ1xcdTFGMEYnOidcXHUxRjA3JywnXFx1MUYxOCc6J1xcdTFGMTAnLCdcXHUxRjE5JzonXFx1MUYxMScsJ1xcdTFGMUEnOidcXHUxRjEyJywnXFx1MUYxQic6J1xcdTFGMTMnLCdcXHUxRjFDJzonXFx1MUYxNCcsJ1xcdTFGMUQnOidcXHUxRjE1JywnXFx1MUYyOCc6J1xcdTFGMjAnLCdcXHUxRjI5JzonXFx1MUYyMScsJ1xcdTFGMkEnOidcXHUxRjIyJywnXFx1MUYyQic6J1xcdTFGMjMnLCdcXHUxRjJDJzonXFx1MUYyNCcsJ1xcdTFGMkQnOidcXHUxRjI1JywnXFx1MUYyRSc6J1xcdTFGMjYnLCdcXHUxRjJGJzonXFx1MUYyNycsJ1xcdTFGMzgnOidcXHUxRjMwJywnXFx1MUYzOSc6J1xcdTFGMzEnLCdcXHUxRjNBJzonXFx1MUYzMicsJ1xcdTFGM0InOidcXHUxRjMzJywnXFx1MUYzQyc6J1xcdTFGMzQnLCdcXHUxRjNEJzonXFx1MUYzNScsJ1xcdTFGM0UnOidcXHUxRjM2JywnXFx1MUYzRic6J1xcdTFGMzcnLCdcXHUxRjQ4JzonXFx1MUY0MCcsJ1xcdTFGNDknOidcXHUxRjQxJywnXFx1MUY0QSc6J1xcdTFGNDInLCdcXHUxRjRCJzonXFx1MUY0MycsJ1xcdTFGNEMnOidcXHUxRjQ0JywnXFx1MUY0RCc6J1xcdTFGNDUnLCdcXHUxRjU5JzonXFx1MUY1MScsJ1xcdTFGNUInOidcXHUxRjUzJywnXFx1MUY1RCc6J1xcdTFGNTUnLCdcXHUxRjVGJzonXFx1MUY1NycsJ1xcdTFGNjgnOidcXHUxRjYwJywnXFx1MUY2OSc6J1xcdTFGNjEnLCdcXHUxRjZBJzonXFx1MUY2MicsJ1xcdTFGNkInOidcXHUxRjYzJywnXFx1MUY2Qyc6J1xcdTFGNjQnLCdcXHUxRjZEJzonXFx1MUY2NScsJ1xcdTFGNkUnOidcXHUxRjY2JywnXFx1MUY2Ric6J1xcdTFGNjcnLCdcXHUxRkI4JzonXFx1MUZCMCcsJ1xcdTFGQjknOidcXHUxRkIxJywnXFx1MUZCQSc6J1xcdTFGNzAnLCdcXHUxRkJCJzonXFx1MUY3MScsJ1xcdTFGQkUnOidcXHUwM0I5JywnXFx1MUZDOCc6J1xcdTFGNzInLCdcXHUxRkM5JzonXFx1MUY3MycsJ1xcdTFGQ0EnOidcXHUxRjc0JywnXFx1MUZDQic6J1xcdTFGNzUnLCdcXHUxRkQ4JzonXFx1MUZEMCcsJ1xcdTFGRDknOidcXHUxRkQxJywnXFx1MUZEQSc6J1xcdTFGNzYnLCdcXHUxRkRCJzonXFx1MUY3NycsJ1xcdTFGRTgnOidcXHUxRkUwJywnXFx1MUZFOSc6J1xcdTFGRTEnLCdcXHUxRkVBJzonXFx1MUY3QScsJ1xcdTFGRUInOidcXHUxRjdCJywnXFx1MUZFQyc6J1xcdTFGRTUnLCdcXHUxRkY4JzonXFx1MUY3OCcsJ1xcdTFGRjknOidcXHUxRjc5JywnXFx1MUZGQSc6J1xcdTFGN0MnLCdcXHUxRkZCJzonXFx1MUY3RCcsJ1xcdTIxMjYnOidcXHUwM0M5JywnXFx1MjEyQSc6J2snLCdcXHUyMTJCJzonXFx4RTUnLCdcXHUyMTMyJzonXFx1MjE0RScsJ1xcdTIxNjAnOidcXHUyMTcwJywnXFx1MjE2MSc6J1xcdTIxNzEnLCdcXHUyMTYyJzonXFx1MjE3MicsJ1xcdTIxNjMnOidcXHUyMTczJywnXFx1MjE2NCc6J1xcdTIxNzQnLCdcXHUyMTY1JzonXFx1MjE3NScsJ1xcdTIxNjYnOidcXHUyMTc2JywnXFx1MjE2Nyc6J1xcdTIxNzcnLCdcXHUyMTY4JzonXFx1MjE3OCcsJ1xcdTIxNjknOidcXHUyMTc5JywnXFx1MjE2QSc6J1xcdTIxN0EnLCdcXHUyMTZCJzonXFx1MjE3QicsJ1xcdTIxNkMnOidcXHUyMTdDJywnXFx1MjE2RCc6J1xcdTIxN0QnLCdcXHUyMTZFJzonXFx1MjE3RScsJ1xcdTIxNkYnOidcXHUyMTdGJywnXFx1MjE4Myc6J1xcdTIxODQnLCdcXHUyNEI2JzonXFx1MjREMCcsJ1xcdTI0QjcnOidcXHUyNEQxJywnXFx1MjRCOCc6J1xcdTI0RDInLCdcXHUyNEI5JzonXFx1MjREMycsJ1xcdTI0QkEnOidcXHUyNEQ0JywnXFx1MjRCQic6J1xcdTI0RDUnLCdcXHUyNEJDJzonXFx1MjRENicsJ1xcdTI0QkQnOidcXHUyNEQ3JywnXFx1MjRCRSc6J1xcdTI0RDgnLCdcXHUyNEJGJzonXFx1MjREOScsJ1xcdTI0QzAnOidcXHUyNERBJywnXFx1MjRDMSc6J1xcdTI0REInLCdcXHUyNEMyJzonXFx1MjREQycsJ1xcdTI0QzMnOidcXHUyNEREJywnXFx1MjRDNCc6J1xcdTI0REUnLCdcXHUyNEM1JzonXFx1MjRERicsJ1xcdTI0QzYnOidcXHUyNEUwJywnXFx1MjRDNyc6J1xcdTI0RTEnLCdcXHUyNEM4JzonXFx1MjRFMicsJ1xcdTI0QzknOidcXHUyNEUzJywnXFx1MjRDQSc6J1xcdTI0RTQnLCdcXHUyNENCJzonXFx1MjRFNScsJ1xcdTI0Q0MnOidcXHUyNEU2JywnXFx1MjRDRCc6J1xcdTI0RTcnLCdcXHUyNENFJzonXFx1MjRFOCcsJ1xcdTI0Q0YnOidcXHUyNEU5JywnXFx1MkMwMCc6J1xcdTJDMzAnLCdcXHUyQzAxJzonXFx1MkMzMScsJ1xcdTJDMDInOidcXHUyQzMyJywnXFx1MkMwMyc6J1xcdTJDMzMnLCdcXHUyQzA0JzonXFx1MkMzNCcsJ1xcdTJDMDUnOidcXHUyQzM1JywnXFx1MkMwNic6J1xcdTJDMzYnLCdcXHUyQzA3JzonXFx1MkMzNycsJ1xcdTJDMDgnOidcXHUyQzM4JywnXFx1MkMwOSc6J1xcdTJDMzknLCdcXHUyQzBBJzonXFx1MkMzQScsJ1xcdTJDMEInOidcXHUyQzNCJywnXFx1MkMwQyc6J1xcdTJDM0MnLCdcXHUyQzBEJzonXFx1MkMzRCcsJ1xcdTJDMEUnOidcXHUyQzNFJywnXFx1MkMwRic6J1xcdTJDM0YnLCdcXHUyQzEwJzonXFx1MkM0MCcsJ1xcdTJDMTEnOidcXHUyQzQxJywnXFx1MkMxMic6J1xcdTJDNDInLCdcXHUyQzEzJzonXFx1MkM0MycsJ1xcdTJDMTQnOidcXHUyQzQ0JywnXFx1MkMxNSc6J1xcdTJDNDUnLCdcXHUyQzE2JzonXFx1MkM0NicsJ1xcdTJDMTcnOidcXHUyQzQ3JywnXFx1MkMxOCc6J1xcdTJDNDgnLCdcXHUyQzE5JzonXFx1MkM0OScsJ1xcdTJDMUEnOidcXHUyQzRBJywnXFx1MkMxQic6J1xcdTJDNEInLCdcXHUyQzFDJzonXFx1MkM0QycsJ1xcdTJDMUQnOidcXHUyQzREJywnXFx1MkMxRSc6J1xcdTJDNEUnLCdcXHUyQzFGJzonXFx1MkM0RicsJ1xcdTJDMjAnOidcXHUyQzUwJywnXFx1MkMyMSc6J1xcdTJDNTEnLCdcXHUyQzIyJzonXFx1MkM1MicsJ1xcdTJDMjMnOidcXHUyQzUzJywnXFx1MkMyNCc6J1xcdTJDNTQnLCdcXHUyQzI1JzonXFx1MkM1NScsJ1xcdTJDMjYnOidcXHUyQzU2JywnXFx1MkMyNyc6J1xcdTJDNTcnLCdcXHUyQzI4JzonXFx1MkM1OCcsJ1xcdTJDMjknOidcXHUyQzU5JywnXFx1MkMyQSc6J1xcdTJDNUEnLCdcXHUyQzJCJzonXFx1MkM1QicsJ1xcdTJDMkMnOidcXHUyQzVDJywnXFx1MkMyRCc6J1xcdTJDNUQnLCdcXHUyQzJFJzonXFx1MkM1RScsJ1xcdTJDNjAnOidcXHUyQzYxJywnXFx1MkM2Mic6J1xcdTAyNkInLCdcXHUyQzYzJzonXFx1MUQ3RCcsJ1xcdTJDNjQnOidcXHUwMjdEJywnXFx1MkM2Nyc6J1xcdTJDNjgnLCdcXHUyQzY5JzonXFx1MkM2QScsJ1xcdTJDNkInOidcXHUyQzZDJywnXFx1MkM2RCc6J1xcdTAyNTEnLCdcXHUyQzZFJzonXFx1MDI3MScsJ1xcdTJDNkYnOidcXHUwMjUwJywnXFx1MkM3MCc6J1xcdTAyNTInLCdcXHUyQzcyJzonXFx1MkM3MycsJ1xcdTJDNzUnOidcXHUyQzc2JywnXFx1MkM3RSc6J1xcdTAyM0YnLCdcXHUyQzdGJzonXFx1MDI0MCcsJ1xcdTJDODAnOidcXHUyQzgxJywnXFx1MkM4Mic6J1xcdTJDODMnLCdcXHUyQzg0JzonXFx1MkM4NScsJ1xcdTJDODYnOidcXHUyQzg3JywnXFx1MkM4OCc6J1xcdTJDODknLCdcXHUyQzhBJzonXFx1MkM4QicsJ1xcdTJDOEMnOidcXHUyQzhEJywnXFx1MkM4RSc6J1xcdTJDOEYnLCdcXHUyQzkwJzonXFx1MkM5MScsJ1xcdTJDOTInOidcXHUyQzkzJywnXFx1MkM5NCc6J1xcdTJDOTUnLCdcXHUyQzk2JzonXFx1MkM5NycsJ1xcdTJDOTgnOidcXHUyQzk5JywnXFx1MkM5QSc6J1xcdTJDOUInLCdcXHUyQzlDJzonXFx1MkM5RCcsJ1xcdTJDOUUnOidcXHUyQzlGJywnXFx1MkNBMCc6J1xcdTJDQTEnLCdcXHUyQ0EyJzonXFx1MkNBMycsJ1xcdTJDQTQnOidcXHUyQ0E1JywnXFx1MkNBNic6J1xcdTJDQTcnLCdcXHUyQ0E4JzonXFx1MkNBOScsJ1xcdTJDQUEnOidcXHUyQ0FCJywnXFx1MkNBQyc6J1xcdTJDQUQnLCdcXHUyQ0FFJzonXFx1MkNBRicsJ1xcdTJDQjAnOidcXHUyQ0IxJywnXFx1MkNCMic6J1xcdTJDQjMnLCdcXHUyQ0I0JzonXFx1MkNCNScsJ1xcdTJDQjYnOidcXHUyQ0I3JywnXFx1MkNCOCc6J1xcdTJDQjknLCdcXHUyQ0JBJzonXFx1MkNCQicsJ1xcdTJDQkMnOidcXHUyQ0JEJywnXFx1MkNCRSc6J1xcdTJDQkYnLCdcXHUyQ0MwJzonXFx1MkNDMScsJ1xcdTJDQzInOidcXHUyQ0MzJywnXFx1MkNDNCc6J1xcdTJDQzUnLCdcXHUyQ0M2JzonXFx1MkNDNycsJ1xcdTJDQzgnOidcXHUyQ0M5JywnXFx1MkNDQSc6J1xcdTJDQ0InLCdcXHUyQ0NDJzonXFx1MkNDRCcsJ1xcdTJDQ0UnOidcXHUyQ0NGJywnXFx1MkNEMCc6J1xcdTJDRDEnLCdcXHUyQ0QyJzonXFx1MkNEMycsJ1xcdTJDRDQnOidcXHUyQ0Q1JywnXFx1MkNENic6J1xcdTJDRDcnLCdcXHUyQ0Q4JzonXFx1MkNEOScsJ1xcdTJDREEnOidcXHUyQ0RCJywnXFx1MkNEQyc6J1xcdTJDREQnLCdcXHUyQ0RFJzonXFx1MkNERicsJ1xcdTJDRTAnOidcXHUyQ0UxJywnXFx1MkNFMic6J1xcdTJDRTMnLCdcXHUyQ0VCJzonXFx1MkNFQycsJ1xcdTJDRUQnOidcXHUyQ0VFJywnXFx1MkNGMic6J1xcdTJDRjMnLCdcXHVBNjQwJzonXFx1QTY0MScsJ1xcdUE2NDInOidcXHVBNjQzJywnXFx1QTY0NCc6J1xcdUE2NDUnLCdcXHVBNjQ2JzonXFx1QTY0NycsJ1xcdUE2NDgnOidcXHVBNjQ5JywnXFx1QTY0QSc6J1xcdUE2NEInLCdcXHVBNjRDJzonXFx1QTY0RCcsJ1xcdUE2NEUnOidcXHVBNjRGJywnXFx1QTY1MCc6J1xcdUE2NTEnLCdcXHVBNjUyJzonXFx1QTY1MycsJ1xcdUE2NTQnOidcXHVBNjU1JywnXFx1QTY1Nic6J1xcdUE2NTcnLCdcXHVBNjU4JzonXFx1QTY1OScsJ1xcdUE2NUEnOidcXHVBNjVCJywnXFx1QTY1Qyc6J1xcdUE2NUQnLCdcXHVBNjVFJzonXFx1QTY1RicsJ1xcdUE2NjAnOidcXHVBNjYxJywnXFx1QTY2Mic6J1xcdUE2NjMnLCdcXHVBNjY0JzonXFx1QTY2NScsJ1xcdUE2NjYnOidcXHVBNjY3JywnXFx1QTY2OCc6J1xcdUE2NjknLCdcXHVBNjZBJzonXFx1QTY2QicsJ1xcdUE2NkMnOidcXHVBNjZEJywnXFx1QTY4MCc6J1xcdUE2ODEnLCdcXHVBNjgyJzonXFx1QTY4MycsJ1xcdUE2ODQnOidcXHVBNjg1JywnXFx1QTY4Nic6J1xcdUE2ODcnLCdcXHVBNjg4JzonXFx1QTY4OScsJ1xcdUE2OEEnOidcXHVBNjhCJywnXFx1QTY4Qyc6J1xcdUE2OEQnLCdcXHVBNjhFJzonXFx1QTY4RicsJ1xcdUE2OTAnOidcXHVBNjkxJywnXFx1QTY5Mic6J1xcdUE2OTMnLCdcXHVBNjk0JzonXFx1QTY5NScsJ1xcdUE2OTYnOidcXHVBNjk3JywnXFx1QTY5OCc6J1xcdUE2OTknLCdcXHVBNjlBJzonXFx1QTY5QicsJ1xcdUE3MjInOidcXHVBNzIzJywnXFx1QTcyNCc6J1xcdUE3MjUnLCdcXHVBNzI2JzonXFx1QTcyNycsJ1xcdUE3MjgnOidcXHVBNzI5JywnXFx1QTcyQSc6J1xcdUE3MkInLCdcXHVBNzJDJzonXFx1QTcyRCcsJ1xcdUE3MkUnOidcXHVBNzJGJywnXFx1QTczMic6J1xcdUE3MzMnLCdcXHVBNzM0JzonXFx1QTczNScsJ1xcdUE3MzYnOidcXHVBNzM3JywnXFx1QTczOCc6J1xcdUE3MzknLCdcXHVBNzNBJzonXFx1QTczQicsJ1xcdUE3M0MnOidcXHVBNzNEJywnXFx1QTczRSc6J1xcdUE3M0YnLCdcXHVBNzQwJzonXFx1QTc0MScsJ1xcdUE3NDInOidcXHVBNzQzJywnXFx1QTc0NCc6J1xcdUE3NDUnLCdcXHVBNzQ2JzonXFx1QTc0NycsJ1xcdUE3NDgnOidcXHVBNzQ5JywnXFx1QTc0QSc6J1xcdUE3NEInLCdcXHVBNzRDJzonXFx1QTc0RCcsJ1xcdUE3NEUnOidcXHVBNzRGJywnXFx1QTc1MCc6J1xcdUE3NTEnLCdcXHVBNzUyJzonXFx1QTc1MycsJ1xcdUE3NTQnOidcXHVBNzU1JywnXFx1QTc1Nic6J1xcdUE3NTcnLCdcXHVBNzU4JzonXFx1QTc1OScsJ1xcdUE3NUEnOidcXHVBNzVCJywnXFx1QTc1Qyc6J1xcdUE3NUQnLCdcXHVBNzVFJzonXFx1QTc1RicsJ1xcdUE3NjAnOidcXHVBNzYxJywnXFx1QTc2Mic6J1xcdUE3NjMnLCdcXHVBNzY0JzonXFx1QTc2NScsJ1xcdUE3NjYnOidcXHVBNzY3JywnXFx1QTc2OCc6J1xcdUE3NjknLCdcXHVBNzZBJzonXFx1QTc2QicsJ1xcdUE3NkMnOidcXHVBNzZEJywnXFx1QTc2RSc6J1xcdUE3NkYnLCdcXHVBNzc5JzonXFx1QTc3QScsJ1xcdUE3N0InOidcXHVBNzdDJywnXFx1QTc3RCc6J1xcdTFENzknLCdcXHVBNzdFJzonXFx1QTc3RicsJ1xcdUE3ODAnOidcXHVBNzgxJywnXFx1QTc4Mic6J1xcdUE3ODMnLCdcXHVBNzg0JzonXFx1QTc4NScsJ1xcdUE3ODYnOidcXHVBNzg3JywnXFx1QTc4Qic6J1xcdUE3OEMnLCdcXHVBNzhEJzonXFx1MDI2NScsJ1xcdUE3OTAnOidcXHVBNzkxJywnXFx1QTc5Mic6J1xcdUE3OTMnLCdcXHVBNzk2JzonXFx1QTc5NycsJ1xcdUE3OTgnOidcXHVBNzk5JywnXFx1QTc5QSc6J1xcdUE3OUInLCdcXHVBNzlDJzonXFx1QTc5RCcsJ1xcdUE3OUUnOidcXHVBNzlGJywnXFx1QTdBMCc6J1xcdUE3QTEnLCdcXHVBN0EyJzonXFx1QTdBMycsJ1xcdUE3QTQnOidcXHVBN0E1JywnXFx1QTdBNic6J1xcdUE3QTcnLCdcXHVBN0E4JzonXFx1QTdBOScsJ1xcdUE3QUEnOidcXHUwMjY2JywnXFx1QTdBQic6J1xcdTAyNUMnLCdcXHVBN0FDJzonXFx1MDI2MScsJ1xcdUE3QUQnOidcXHUwMjZDJywnXFx1QTdCMCc6J1xcdTAyOUUnLCdcXHVBN0IxJzonXFx1MDI4NycsJ1xcdUZGMjEnOidcXHVGRjQxJywnXFx1RkYyMic6J1xcdUZGNDInLCdcXHVGRjIzJzonXFx1RkY0MycsJ1xcdUZGMjQnOidcXHVGRjQ0JywnXFx1RkYyNSc6J1xcdUZGNDUnLCdcXHVGRjI2JzonXFx1RkY0NicsJ1xcdUZGMjcnOidcXHVGRjQ3JywnXFx1RkYyOCc6J1xcdUZGNDgnLCdcXHVGRjI5JzonXFx1RkY0OScsJ1xcdUZGMkEnOidcXHVGRjRBJywnXFx1RkYyQic6J1xcdUZGNEInLCdcXHVGRjJDJzonXFx1RkY0QycsJ1xcdUZGMkQnOidcXHVGRjREJywnXFx1RkYyRSc6J1xcdUZGNEUnLCdcXHVGRjJGJzonXFx1RkY0RicsJ1xcdUZGMzAnOidcXHVGRjUwJywnXFx1RkYzMSc6J1xcdUZGNTEnLCdcXHVGRjMyJzonXFx1RkY1MicsJ1xcdUZGMzMnOidcXHVGRjUzJywnXFx1RkYzNCc6J1xcdUZGNTQnLCdcXHVGRjM1JzonXFx1RkY1NScsJ1xcdUZGMzYnOidcXHVGRjU2JywnXFx1RkYzNyc6J1xcdUZGNTcnLCdcXHVGRjM4JzonXFx1RkY1OCcsJ1xcdUZGMzknOidcXHVGRjU5JywnXFx1RkYzQSc6J1xcdUZGNUEnLCdcXHVEODAxXFx1REMwMCc6J1xcdUQ4MDFcXHVEQzI4JywnXFx1RDgwMVxcdURDMDEnOidcXHVEODAxXFx1REMyOScsJ1xcdUQ4MDFcXHVEQzAyJzonXFx1RDgwMVxcdURDMkEnLCdcXHVEODAxXFx1REMwMyc6J1xcdUQ4MDFcXHVEQzJCJywnXFx1RDgwMVxcdURDMDQnOidcXHVEODAxXFx1REMyQycsJ1xcdUQ4MDFcXHVEQzA1JzonXFx1RDgwMVxcdURDMkQnLCdcXHVEODAxXFx1REMwNic6J1xcdUQ4MDFcXHVEQzJFJywnXFx1RDgwMVxcdURDMDcnOidcXHVEODAxXFx1REMyRicsJ1xcdUQ4MDFcXHVEQzA4JzonXFx1RDgwMVxcdURDMzAnLCdcXHVEODAxXFx1REMwOSc6J1xcdUQ4MDFcXHVEQzMxJywnXFx1RDgwMVxcdURDMEEnOidcXHVEODAxXFx1REMzMicsJ1xcdUQ4MDFcXHVEQzBCJzonXFx1RDgwMVxcdURDMzMnLCdcXHVEODAxXFx1REMwQyc6J1xcdUQ4MDFcXHVEQzM0JywnXFx1RDgwMVxcdURDMEQnOidcXHVEODAxXFx1REMzNScsJ1xcdUQ4MDFcXHVEQzBFJzonXFx1RDgwMVxcdURDMzYnLCdcXHVEODAxXFx1REMwRic6J1xcdUQ4MDFcXHVEQzM3JywnXFx1RDgwMVxcdURDMTAnOidcXHVEODAxXFx1REMzOCcsJ1xcdUQ4MDFcXHVEQzExJzonXFx1RDgwMVxcdURDMzknLCdcXHVEODAxXFx1REMxMic6J1xcdUQ4MDFcXHVEQzNBJywnXFx1RDgwMVxcdURDMTMnOidcXHVEODAxXFx1REMzQicsJ1xcdUQ4MDFcXHVEQzE0JzonXFx1RDgwMVxcdURDM0MnLCdcXHVEODAxXFx1REMxNSc6J1xcdUQ4MDFcXHVEQzNEJywnXFx1RDgwMVxcdURDMTYnOidcXHVEODAxXFx1REMzRScsJ1xcdUQ4MDFcXHVEQzE3JzonXFx1RDgwMVxcdURDM0YnLCdcXHVEODAxXFx1REMxOCc6J1xcdUQ4MDFcXHVEQzQwJywnXFx1RDgwMVxcdURDMTknOidcXHVEODAxXFx1REM0MScsJ1xcdUQ4MDFcXHVEQzFBJzonXFx1RDgwMVxcdURDNDInLCdcXHVEODAxXFx1REMxQic6J1xcdUQ4MDFcXHVEQzQzJywnXFx1RDgwMVxcdURDMUMnOidcXHVEODAxXFx1REM0NCcsJ1xcdUQ4MDFcXHVEQzFEJzonXFx1RDgwMVxcdURDNDUnLCdcXHVEODAxXFx1REMxRSc6J1xcdUQ4MDFcXHVEQzQ2JywnXFx1RDgwMVxcdURDMUYnOidcXHVEODAxXFx1REM0NycsJ1xcdUQ4MDFcXHVEQzIwJzonXFx1RDgwMVxcdURDNDgnLCdcXHVEODAxXFx1REMyMSc6J1xcdUQ4MDFcXHVEQzQ5JywnXFx1RDgwMVxcdURDMjInOidcXHVEODAxXFx1REM0QScsJ1xcdUQ4MDFcXHVEQzIzJzonXFx1RDgwMVxcdURDNEInLCdcXHVEODAxXFx1REMyNCc6J1xcdUQ4MDFcXHVEQzRDJywnXFx1RDgwMVxcdURDMjUnOidcXHVEODAxXFx1REM0RCcsJ1xcdUQ4MDFcXHVEQzI2JzonXFx1RDgwMVxcdURDNEUnLCdcXHVEODAxXFx1REMyNyc6J1xcdUQ4MDFcXHVEQzRGJywnXFx1RDgwNlxcdURDQTAnOidcXHVEODA2XFx1RENDMCcsJ1xcdUQ4MDZcXHVEQ0ExJzonXFx1RDgwNlxcdURDQzEnLCdcXHVEODA2XFx1RENBMic6J1xcdUQ4MDZcXHVEQ0MyJywnXFx1RDgwNlxcdURDQTMnOidcXHVEODA2XFx1RENDMycsJ1xcdUQ4MDZcXHVEQ0E0JzonXFx1RDgwNlxcdURDQzQnLCdcXHVEODA2XFx1RENBNSc6J1xcdUQ4MDZcXHVEQ0M1JywnXFx1RDgwNlxcdURDQTYnOidcXHVEODA2XFx1RENDNicsJ1xcdUQ4MDZcXHVEQ0E3JzonXFx1RDgwNlxcdURDQzcnLCdcXHVEODA2XFx1RENBOCc6J1xcdUQ4MDZcXHVEQ0M4JywnXFx1RDgwNlxcdURDQTknOidcXHVEODA2XFx1RENDOScsJ1xcdUQ4MDZcXHVEQ0FBJzonXFx1RDgwNlxcdURDQ0EnLCdcXHVEODA2XFx1RENBQic6J1xcdUQ4MDZcXHVEQ0NCJywnXFx1RDgwNlxcdURDQUMnOidcXHVEODA2XFx1RENDQycsJ1xcdUQ4MDZcXHVEQ0FEJzonXFx1RDgwNlxcdURDQ0QnLCdcXHVEODA2XFx1RENBRSc6J1xcdUQ4MDZcXHVEQ0NFJywnXFx1RDgwNlxcdURDQUYnOidcXHVEODA2XFx1RENDRicsJ1xcdUQ4MDZcXHVEQ0IwJzonXFx1RDgwNlxcdURDRDAnLCdcXHVEODA2XFx1RENCMSc6J1xcdUQ4MDZcXHVEQ0QxJywnXFx1RDgwNlxcdURDQjInOidcXHVEODA2XFx1RENEMicsJ1xcdUQ4MDZcXHVEQ0IzJzonXFx1RDgwNlxcdURDRDMnLCdcXHVEODA2XFx1RENCNCc6J1xcdUQ4MDZcXHVEQ0Q0JywnXFx1RDgwNlxcdURDQjUnOidcXHVEODA2XFx1RENENScsJ1xcdUQ4MDZcXHVEQ0I2JzonXFx1RDgwNlxcdURDRDYnLCdcXHVEODA2XFx1RENCNyc6J1xcdUQ4MDZcXHVEQ0Q3JywnXFx1RDgwNlxcdURDQjgnOidcXHVEODA2XFx1RENEOCcsJ1xcdUQ4MDZcXHVEQ0I5JzonXFx1RDgwNlxcdURDRDknLCdcXHVEODA2XFx1RENCQSc6J1xcdUQ4MDZcXHVEQ0RBJywnXFx1RDgwNlxcdURDQkInOidcXHVEODA2XFx1RENEQicsJ1xcdUQ4MDZcXHVEQ0JDJzonXFx1RDgwNlxcdURDREMnLCdcXHVEODA2XFx1RENCRCc6J1xcdUQ4MDZcXHVEQ0REJywnXFx1RDgwNlxcdURDQkUnOidcXHVEODA2XFx1RENERScsJ1xcdUQ4MDZcXHVEQ0JGJzonXFx1RDgwNlxcdURDREYnLCdcXHhERic6J3NzJywnXFx1MDEzMCc6J2lcXHUwMzA3JywnXFx1MDE0OSc6J1xcdTAyQkNuJywnXFx1MDFGMCc6J2pcXHUwMzBDJywnXFx1MDM5MCc6J1xcdTAzQjlcXHUwMzA4XFx1MDMwMScsJ1xcdTAzQjAnOidcXHUwM0M1XFx1MDMwOFxcdTAzMDEnLCdcXHUwNTg3JzonXFx1MDU2NVxcdTA1ODInLCdcXHUxRTk2JzonaFxcdTAzMzEnLCdcXHUxRTk3JzondFxcdTAzMDgnLCdcXHUxRTk4Jzond1xcdTAzMEEnLCdcXHUxRTk5JzoneVxcdTAzMEEnLCdcXHUxRTlBJzonYVxcdTAyQkUnLCdcXHUxRTlFJzonc3MnLCdcXHUxRjUwJzonXFx1MDNDNVxcdTAzMTMnLCdcXHUxRjUyJzonXFx1MDNDNVxcdTAzMTNcXHUwMzAwJywnXFx1MUY1NCc6J1xcdTAzQzVcXHUwMzEzXFx1MDMwMScsJ1xcdTFGNTYnOidcXHUwM0M1XFx1MDMxM1xcdTAzNDInLCdcXHUxRjgwJzonXFx1MUYwMFxcdTAzQjknLCdcXHUxRjgxJzonXFx1MUYwMVxcdTAzQjknLCdcXHUxRjgyJzonXFx1MUYwMlxcdTAzQjknLCdcXHUxRjgzJzonXFx1MUYwM1xcdTAzQjknLCdcXHUxRjg0JzonXFx1MUYwNFxcdTAzQjknLCdcXHUxRjg1JzonXFx1MUYwNVxcdTAzQjknLCdcXHUxRjg2JzonXFx1MUYwNlxcdTAzQjknLCdcXHUxRjg3JzonXFx1MUYwN1xcdTAzQjknLCdcXHUxRjg4JzonXFx1MUYwMFxcdTAzQjknLCdcXHUxRjg5JzonXFx1MUYwMVxcdTAzQjknLCdcXHUxRjhBJzonXFx1MUYwMlxcdTAzQjknLCdcXHUxRjhCJzonXFx1MUYwM1xcdTAzQjknLCdcXHUxRjhDJzonXFx1MUYwNFxcdTAzQjknLCdcXHUxRjhEJzonXFx1MUYwNVxcdTAzQjknLCdcXHUxRjhFJzonXFx1MUYwNlxcdTAzQjknLCdcXHUxRjhGJzonXFx1MUYwN1xcdTAzQjknLCdcXHUxRjkwJzonXFx1MUYyMFxcdTAzQjknLCdcXHUxRjkxJzonXFx1MUYyMVxcdTAzQjknLCdcXHUxRjkyJzonXFx1MUYyMlxcdTAzQjknLCdcXHUxRjkzJzonXFx1MUYyM1xcdTAzQjknLCdcXHUxRjk0JzonXFx1MUYyNFxcdTAzQjknLCdcXHUxRjk1JzonXFx1MUYyNVxcdTAzQjknLCdcXHUxRjk2JzonXFx1MUYyNlxcdTAzQjknLCdcXHUxRjk3JzonXFx1MUYyN1xcdTAzQjknLCdcXHUxRjk4JzonXFx1MUYyMFxcdTAzQjknLCdcXHUxRjk5JzonXFx1MUYyMVxcdTAzQjknLCdcXHUxRjlBJzonXFx1MUYyMlxcdTAzQjknLCdcXHUxRjlCJzonXFx1MUYyM1xcdTAzQjknLCdcXHUxRjlDJzonXFx1MUYyNFxcdTAzQjknLCdcXHUxRjlEJzonXFx1MUYyNVxcdTAzQjknLCdcXHUxRjlFJzonXFx1MUYyNlxcdTAzQjknLCdcXHUxRjlGJzonXFx1MUYyN1xcdTAzQjknLCdcXHUxRkEwJzonXFx1MUY2MFxcdTAzQjknLCdcXHUxRkExJzonXFx1MUY2MVxcdTAzQjknLCdcXHUxRkEyJzonXFx1MUY2MlxcdTAzQjknLCdcXHUxRkEzJzonXFx1MUY2M1xcdTAzQjknLCdcXHUxRkE0JzonXFx1MUY2NFxcdTAzQjknLCdcXHUxRkE1JzonXFx1MUY2NVxcdTAzQjknLCdcXHUxRkE2JzonXFx1MUY2NlxcdTAzQjknLCdcXHUxRkE3JzonXFx1MUY2N1xcdTAzQjknLCdcXHUxRkE4JzonXFx1MUY2MFxcdTAzQjknLCdcXHUxRkE5JzonXFx1MUY2MVxcdTAzQjknLCdcXHUxRkFBJzonXFx1MUY2MlxcdTAzQjknLCdcXHUxRkFCJzonXFx1MUY2M1xcdTAzQjknLCdcXHUxRkFDJzonXFx1MUY2NFxcdTAzQjknLCdcXHUxRkFEJzonXFx1MUY2NVxcdTAzQjknLCdcXHUxRkFFJzonXFx1MUY2NlxcdTAzQjknLCdcXHUxRkFGJzonXFx1MUY2N1xcdTAzQjknLCdcXHUxRkIyJzonXFx1MUY3MFxcdTAzQjknLCdcXHUxRkIzJzonXFx1MDNCMVxcdTAzQjknLCdcXHUxRkI0JzonXFx1MDNBQ1xcdTAzQjknLCdcXHUxRkI2JzonXFx1MDNCMVxcdTAzNDInLCdcXHUxRkI3JzonXFx1MDNCMVxcdTAzNDJcXHUwM0I5JywnXFx1MUZCQyc6J1xcdTAzQjFcXHUwM0I5JywnXFx1MUZDMic6J1xcdTFGNzRcXHUwM0I5JywnXFx1MUZDMyc6J1xcdTAzQjdcXHUwM0I5JywnXFx1MUZDNCc6J1xcdTAzQUVcXHUwM0I5JywnXFx1MUZDNic6J1xcdTAzQjdcXHUwMzQyJywnXFx1MUZDNyc6J1xcdTAzQjdcXHUwMzQyXFx1MDNCOScsJ1xcdTFGQ0MnOidcXHUwM0I3XFx1MDNCOScsJ1xcdTFGRDInOidcXHUwM0I5XFx1MDMwOFxcdTAzMDAnLCdcXHUxRkQzJzonXFx1MDNCOVxcdTAzMDhcXHUwMzAxJywnXFx1MUZENic6J1xcdTAzQjlcXHUwMzQyJywnXFx1MUZENyc6J1xcdTAzQjlcXHUwMzA4XFx1MDM0MicsJ1xcdTFGRTInOidcXHUwM0M1XFx1MDMwOFxcdTAzMDAnLCdcXHUxRkUzJzonXFx1MDNDNVxcdTAzMDhcXHUwMzAxJywnXFx1MUZFNCc6J1xcdTAzQzFcXHUwMzEzJywnXFx1MUZFNic6J1xcdTAzQzVcXHUwMzQyJywnXFx1MUZFNyc6J1xcdTAzQzVcXHUwMzA4XFx1MDM0MicsJ1xcdTFGRjInOidcXHUxRjdDXFx1MDNCOScsJ1xcdTFGRjMnOidcXHUwM0M5XFx1MDNCOScsJ1xcdTFGRjQnOidcXHUwM0NFXFx1MDNCOScsJ1xcdTFGRjYnOidcXHUwM0M5XFx1MDM0MicsJ1xcdTFGRjcnOidcXHUwM0M5XFx1MDM0MlxcdTAzQjknLCdcXHUxRkZDJzonXFx1MDNDOVxcdTAzQjknLCdcXHVGQjAwJzonZmYnLCdcXHVGQjAxJzonZmknLCdcXHVGQjAyJzonZmwnLCdcXHVGQjAzJzonZmZpJywnXFx1RkIwNCc6J2ZmbCcsJ1xcdUZCMDUnOidzdCcsJ1xcdUZCMDYnOidzdCcsJ1xcdUZCMTMnOidcXHUwNTc0XFx1MDU3NicsJ1xcdUZCMTQnOidcXHUwNTc0XFx1MDU2NScsJ1xcdUZCMTUnOidcXHUwNTc0XFx1MDU2QicsJ1xcdUZCMTYnOidcXHUwNTdFXFx1MDU3NicsJ1xcdUZCMTcnOidcXHUwNTc0XFx1MDU2RCd9O1xuXG4vLyBOb3JtYWxpemUgcmVmZXJlbmNlIGxhYmVsOiBjb2xsYXBzZSBpbnRlcm5hbCB3aGl0ZXNwYWNlXG4vLyB0byBzaW5nbGUgc3BhY2UsIHJlbW92ZSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2UsIGNhc2UgZm9sZC5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5zbGljZSgxLCBzdHJpbmcubGVuZ3RoIC0gMSkudHJpbSgpLnJlcGxhY2UocmVnZXgsIGZ1bmN0aW9uKCQwKSB7XG4gICAgICAgIC8vIE5vdGU6IHRoZXJlIGlzIG5vIG5lZWQgdG8gY2hlY2sgYGhhc093blByb3BlcnR5KCQwKWAgaGVyZS5cbiAgICAgICAgLy8gSWYgY2hhcmFjdGVyIG5vdCBmb3VuZCBpbiBsb29rdXAgdGFibGUsIGl0IG11c3QgYmUgd2hpdGVzcGFjZS5cbiAgICAgICAgcmV0dXJuIG1hcFskMF0gfHwgJyAnO1xuICAgIH0pO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvbW1vbm1hcmsvbGliL25vcm1hbGl6ZS1yZWZlcmVuY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohIGh0dHA6Ly9tdGhzLmJlL3JlcGVhdCB2MC4yLjAgYnkgQG1hdGhpYXMgKi9cbmlmICghU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQpIHtcblx0KGZ1bmN0aW9uKCkge1xuXHRcdCd1c2Ugc3RyaWN0JzsgLy8gbmVlZGVkIHRvIHN1cHBvcnQgYGFwcGx5YC9gY2FsbGAgd2l0aCBgdW5kZWZpbmVkYC9gbnVsbGBcblx0XHR2YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBJRSA4IG9ubHkgc3VwcG9ydHMgYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgb24gRE9NIGVsZW1lbnRzXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgb2JqZWN0ID0ge307XG5cdFx0XHRcdHZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cdFx0XHRcdHZhciByZXN1bHQgPSAkZGVmaW5lUHJvcGVydHkob2JqZWN0LCBvYmplY3QsIG9iamVjdCkgJiYgJGRlZmluZVByb3BlcnR5O1xuXHRcdFx0fSBjYXRjaChlcnJvcikge31cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSgpKTtcblx0XHR2YXIgcmVwZWF0ID0gZnVuY3Rpb24oY291bnQpIHtcblx0XHRcdGlmICh0aGlzID09IG51bGwpIHtcblx0XHRcdFx0dGhyb3cgVHlwZUVycm9yKCk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuXHRcdFx0Ly8gYFRvSW50ZWdlcmBcblx0XHRcdHZhciBuID0gY291bnQgPyBOdW1iZXIoY291bnQpIDogMDtcblx0XHRcdGlmIChuICE9IG4pIHsgLy8gYmV0dGVyIGBpc05hTmBcblx0XHRcdFx0biA9IDA7XG5cdFx0XHR9XG5cdFx0XHQvLyBBY2NvdW50IGZvciBvdXQtb2YtYm91bmRzIGluZGljZXNcblx0XHRcdGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB7XG5cdFx0XHRcdHRocm93IFJhbmdlRXJyb3IoKTtcblx0XHRcdH1cblx0XHRcdHZhciByZXN1bHQgPSAnJztcblx0XHRcdHdoaWxlIChuKSB7XG5cdFx0XHRcdGlmIChuICUgMiA9PSAxKSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IHN0cmluZztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobiA+IDEpIHtcblx0XHRcdFx0XHRzdHJpbmcgKz0gc3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG4gPj49IDE7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdFx0aWYgKGRlZmluZVByb3BlcnR5KSB7XG5cdFx0XHRkZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCAncmVwZWF0Jywge1xuXHRcdFx0XHQndmFsdWUnOiByZXBlYXQsXG5cdFx0XHRcdCdjb25maWd1cmFibGUnOiB0cnVlLFxuXHRcdFx0XHQnd3JpdGFibGUnOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0U3RyaW5nLnByb3RvdHlwZS5yZXBlYXQgPSByZXBlYXQ7XG5cdFx0fVxuXHR9KCkpO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9+L3N0cmluZy5wcm90b3R5cGUucmVwZWF0L3JlcGVhdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGVzY2FwZVhtbCA9IHJlcXVpcmUoJy4vY29tbW9uJykuZXNjYXBlWG1sO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvZHVjZSBhbiBIVE1MIHRhZy5cbnZhciB0YWcgPSBmdW5jdGlvbihuYW1lLCBhdHRycywgc2VsZmNsb3NpbmcpIHtcbiAgICB2YXIgcmVzdWx0ID0gJzwnICsgbmFtZTtcbiAgICBpZiAoYXR0cnMgJiYgYXR0cnMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBhdHRyaWI7XG4gICAgICAgIHdoaWxlICgoYXR0cmliID0gYXR0cnNbaV0pICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnICcgKyBhdHRyaWJbMF0gKyAnPVwiJyArIGF0dHJpYlsxXSArICdcIic7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNlbGZjbG9zaW5nKSB7XG4gICAgICAgIHJlc3VsdCArPSAnIC8nO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSAnPic7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciByZUh0bWxUYWcgPSAvXFw8W14+XSpcXD4vO1xudmFyIHJlVW5zYWZlUHJvdG9jb2wgPSAvXmphdmFzY3JpcHQ6fHZic2NyaXB0OnxmaWxlOnxkYXRhOi9pO1xudmFyIHJlU2FmZURhdGFQcm90b2NvbCA9IC9eZGF0YTppbWFnZVxcLyg/OnBuZ3xnaWZ8anBlZ3x3ZWJwKS9pO1xuXG52YXIgcG90ZW50aWFsbHlVbnNhZmUgPSBmdW5jdGlvbih1cmwpIHtcbiAgICByZXR1cm4gcmVVbnNhZmVQcm90b2NvbC50ZXN0KHVybCkgJiZcbiAgICAgICAgIXJlU2FmZURhdGFQcm90b2NvbC50ZXN0KHVybCk7XG59O1xuXG52YXIgcmVuZGVyTm9kZXMgPSBmdW5jdGlvbihibG9jaykge1xuXG4gICAgdmFyIGF0dHJzO1xuICAgIHZhciBpbmZvX3dvcmRzO1xuICAgIHZhciB0YWduYW1lO1xuICAgIHZhciB3YWxrZXIgPSBibG9jay53YWxrZXIoKTtcbiAgICB2YXIgZXZlbnQsIG5vZGUsIGVudGVyaW5nO1xuICAgIHZhciBidWZmZXIgPSBcIlwiO1xuICAgIHZhciBsYXN0T3V0ID0gXCJcXG5cIjtcbiAgICB2YXIgZGlzYWJsZVRhZ3MgPSAwO1xuICAgIHZhciBncmFuZHBhcmVudDtcbiAgICB2YXIgb3V0ID0gZnVuY3Rpb24ocykge1xuICAgICAgICBpZiAoZGlzYWJsZVRhZ3MgPiAwKSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gcy5yZXBsYWNlKHJlSHRtbFRhZywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyICs9IHM7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdE91dCA9IHM7XG4gICAgfTtcbiAgICB2YXIgZXNjID0gdGhpcy5lc2NhcGU7XG4gICAgdmFyIGNyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChsYXN0T3V0ICE9PSAnXFxuJykge1xuICAgICAgICAgICAgYnVmZmVyICs9ICdcXG4nO1xuICAgICAgICAgICAgbGFzdE91dCA9ICdcXG4nO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKG9wdGlvbnMudGltZSkgeyBjb25zb2xlLnRpbWUoXCJyZW5kZXJpbmdcIik7IH1cblxuICAgIHdoaWxlICgoZXZlbnQgPSB3YWxrZXIubmV4dCgpKSkge1xuICAgICAgICBlbnRlcmluZyA9IGV2ZW50LmVudGVyaW5nO1xuICAgICAgICBub2RlID0gZXZlbnQubm9kZTtcblxuICAgICAgICBhdHRycyA9IFtdO1xuICAgICAgICBpZiAob3B0aW9ucy5zb3VyY2Vwb3MpIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBub2RlLnNvdXJjZXBvcztcbiAgICAgICAgICAgIGlmIChwb3MpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnZGF0YS1zb3VyY2Vwb3MnLCBTdHJpbmcocG9zWzBdWzBdKSArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHBvc1swXVsxXSkgKyAnLScgKyBTdHJpbmcocG9zWzFdWzBdKSArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHBvc1sxXVsxXSldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ1RleHQnOlxuICAgICAgICAgICAgb3V0KGVzYyhub2RlLmxpdGVyYWwsIGZhbHNlKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdTb2Z0YnJlYWsnOlxuICAgICAgICAgICAgb3V0KHRoaXMuc29mdGJyZWFrKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0hhcmRicmVhayc6XG4gICAgICAgICAgICBvdXQodGFnKCdicicsIFtdLCB0cnVlKSk7XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRW1waCc6XG4gICAgICAgICAgICBvdXQodGFnKGVudGVyaW5nID8gJ2VtJyA6ICcvZW0nKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdTdHJvbmcnOlxuICAgICAgICAgICAgb3V0KHRhZyhlbnRlcmluZyA/ICdzdHJvbmcnIDogJy9zdHJvbmcnKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdIdG1sJzpcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNhZmUpIHtcbiAgICAgICAgICAgICAgICBvdXQoJzwhLS0gcmF3IEhUTUwgb21pdHRlZCAtLT4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0KG5vZGUubGl0ZXJhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdMaW5rJzpcbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIGlmICghKG9wdGlvbnMuc2FmZSAmJiBwb3RlbnRpYWxseVVuc2FmZShub2RlLmRlc3RpbmF0aW9uKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2hyZWYnLCBlc2Mobm9kZS5kZXN0aW5hdGlvbiwgdHJ1ZSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUudGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3RpdGxlJywgZXNjKG5vZGUudGl0bGUsIHRydWUpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dCh0YWcoJ2EnLCBhdHRycykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvYScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0ltYWdlJzpcbiAgICAgICAgICAgIGlmIChlbnRlcmluZykge1xuICAgICAgICAgICAgICAgIGlmIChkaXNhYmxlVGFncyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zYWZlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgcG90ZW50aWFsbHlVbnNhZmUobm9kZS5kZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCgnPGltZyBzcmM9XCJcIiBhbHQ9XCInKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCgnPGltZyBzcmM9XCInICsgZXNjKG5vZGUuZGVzdGluYXRpb24sIHRydWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCIgYWx0PVwiJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzYWJsZVRhZ3MgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZVRhZ3MgLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZVRhZ3MgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCgnXCIgdGl0bGU9XCInICsgZXNjKG5vZGUudGl0bGUsIHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvdXQoJ1wiIC8+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQ29kZSc6XG4gICAgICAgICAgICBvdXQodGFnKCdjb2RlJykgKyBlc2Mobm9kZS5saXRlcmFsLCBmYWxzZSkgKyB0YWcoJy9jb2RlJykpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRG9jdW1lbnQnOlxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUGFyYWdyYXBoJzpcbiAgICAgICAgICAgIGdyYW5kcGFyZW50ID0gbm9kZS5wYXJlbnQucGFyZW50O1xuICAgICAgICAgICAgaWYgKGdyYW5kcGFyZW50ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgZ3JhbmRwYXJlbnQudHlwZSA9PT0gJ0xpc3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdyYW5kcGFyZW50Lmxpc3RUaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJ3AnLCBhdHRycykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvcCcpKTtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQmxvY2tRdW90ZSc6XG4gICAgICAgICAgICBpZiAoZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJ2Jsb2NrcXVvdGUnLCBhdHRycykpO1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnL2Jsb2NrcXVvdGUnKSk7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0l0ZW0nOlxuICAgICAgICAgICAgaWYgKGVudGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnbGknLCBhdHRycykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQodGFnKCcvbGknKSk7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0xpc3QnOlxuICAgICAgICAgICAgdGFnbmFtZSA9IG5vZGUubGlzdFR5cGUgPT09ICdCdWxsZXQnID8gJ3VsJyA6ICdvbCc7XG4gICAgICAgICAgICBpZiAoZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBub2RlLmxpc3RTdGFydDtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgIT09IG51bGwgJiYgc3RhcnQgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3N0YXJ0Jywgc3RhcnQudG9TdHJpbmcoKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgICAgIG91dCh0YWcodGFnbmFtZSwgYXR0cnMpKTtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgICAgIG91dCh0YWcoJy8nICsgdGFnbmFtZSkpO1xuICAgICAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdIZWFkZXInOlxuICAgICAgICAgICAgdGFnbmFtZSA9ICdoJyArIG5vZGUubGV2ZWw7XG4gICAgICAgICAgICBpZiAoZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgICAgIG91dCh0YWcodGFnbmFtZSwgYXR0cnMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnLycgKyB0YWduYW1lKSk7XG4gICAgICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0NvZGVCbG9jayc6XG4gICAgICAgICAgICBpbmZvX3dvcmRzID0gbm9kZS5pbmZvID8gbm9kZS5pbmZvLnNwbGl0KC9cXHMrLykgOiBbXTtcbiAgICAgICAgICAgIGlmIChpbmZvX3dvcmRzLmxlbmd0aCA+IDAgJiYgaW5mb193b3Jkc1swXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2NsYXNzJywgJ2xhbmd1YWdlLScgKyBlc2MoaW5mb193b3Jkc1swXSwgdHJ1ZSldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBvdXQodGFnKCdwcmUnKSArIHRhZygnY29kZScsIGF0dHJzKSk7XG4gICAgICAgICAgICBvdXQoZXNjKG5vZGUubGl0ZXJhbCwgZmFsc2UpKTtcbiAgICAgICAgICAgIG91dCh0YWcoJy9jb2RlJykgKyB0YWcoJy9wcmUnKSk7XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSHRtbEJsb2NrJzpcbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zYWZlKSB7XG4gICAgICAgICAgICAgICAgb3V0KCc8IS0tIHJhdyBIVE1MIG9taXR0ZWQgLS0+Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dChub2RlLmxpdGVyYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0hvcml6b250YWxSdWxlJzpcbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBvdXQodGFnKCdocicsIGF0dHJzLCB0cnVlKSk7XG4gICAgICAgICAgICBjcigpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IFwiVW5rbm93biBub2RlIHR5cGUgXCIgKyBub2RlLnR5cGU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBpZiAob3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZUVuZChcInJlbmRlcmluZ1wiKTsgfVxuICAgIHJldHVybiBidWZmZXI7XG59O1xuXG4vLyBUaGUgSHRtbFJlbmRlcmVyIG9iamVjdC5cbmZ1bmN0aW9uIEh0bWxSZW5kZXJlcihvcHRpb25zKXtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBkZWZhdWx0IG9wdGlvbnM6XG4gICAgICAgIHNvZnRicmVhazogJ1xcbicsIC8vIGJ5IGRlZmF1bHQsIHNvZnQgYnJlYWtzIGFyZSByZW5kZXJlZCBhcyBuZXdsaW5lcyBpbiBIVE1MXG4gICAgICAgIC8vIHNldCB0byBcIjxiciAvPlwiIHRvIG1ha2UgdGhlbSBoYXJkIGJyZWFrc1xuICAgICAgICAvLyBzZXQgdG8gXCIgXCIgaWYgeW91IHdhbnQgdG8gaWdub3JlIGxpbmUgd3JhcHBpbmcgaW4gc291cmNlXG4gICAgICAgIGVzY2FwZTogZXNjYXBlWG1sLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9LFxuICAgICAgICByZW5kZXI6IHJlbmRlck5vZGVzXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIdG1sUmVuZGVyZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21tb25tYXJrL2xpYi9odG1sLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZXNjYXBlWG1sID0gcmVxdWlyZSgnLi9jb21tb24nKS5lc2NhcGVYbWw7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBwcm9kdWNlIGFuIFhNTCB0YWcuXG52YXIgdGFnID0gZnVuY3Rpb24obmFtZSwgYXR0cnMsIHNlbGZjbG9zaW5nKSB7XG4gICAgdmFyIHJlc3VsdCA9ICc8JyArIG5hbWU7XG4gICAgaWYgKGF0dHJzICYmIGF0dHJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgYXR0cmliO1xuICAgICAgICB3aGlsZSAoKGF0dHJpYiA9IGF0dHJzW2ldKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyAnICsgYXR0cmliWzBdICsgJz1cIicgKyBhdHRyaWJbMV0gKyAnXCInO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzZWxmY2xvc2luZykge1xuICAgICAgICByZXN1bHQgKz0gJyAvJztcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gJz4nO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgcmVYTUxUYWcgPSAvXFw8W14+XSpcXD4vO1xuXG52YXIgdG9UYWdOYW1lID0gZnVuY3Rpb24ocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDFfJDJcIikudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciByZW5kZXJOb2RlcyA9IGZ1bmN0aW9uKGJsb2NrKSB7XG5cbiAgICB2YXIgYXR0cnM7XG4gICAgdmFyIHRhZ25hbWU7XG4gICAgdmFyIHdhbGtlciA9IGJsb2NrLndhbGtlcigpO1xuICAgIHZhciBldmVudCwgbm9kZSwgZW50ZXJpbmc7XG4gICAgdmFyIGJ1ZmZlciA9IFwiXCI7XG4gICAgdmFyIGxhc3RPdXQgPSBcIlxcblwiO1xuICAgIHZhciBkaXNhYmxlVGFncyA9IDA7XG4gICAgdmFyIGluZGVudExldmVsID0gMDtcbiAgICB2YXIgaW5kZW50ID0gJyAgJztcbiAgICB2YXIgdW5lc2NhcGVkQ29udGVudHM7XG4gICAgdmFyIGNvbnRhaW5lcjtcbiAgICB2YXIgc2VsZkNsb3Npbmc7XG4gICAgdmFyIG5vZGV0eXBlO1xuXG4gICAgdmFyIG91dCA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgaWYgKGRpc2FibGVUYWdzID4gMCkge1xuICAgICAgICAgICAgYnVmZmVyICs9IHMucmVwbGFjZShyZVhNTFRhZywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyICs9IHM7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdE91dCA9IHM7XG4gICAgfTtcbiAgICB2YXIgZXNjID0gdGhpcy5lc2NhcGU7XG4gICAgdmFyIGNyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChsYXN0T3V0ICE9PSAnXFxuJykge1xuICAgICAgICAgICAgYnVmZmVyICs9ICdcXG4nO1xuICAgICAgICAgICAgbGFzdE91dCA9ICdcXG4nO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGluZGVudExldmVsOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyICs9IGluZGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmIChvcHRpb25zLnRpbWUpIHsgY29uc29sZS50aW1lKFwicmVuZGVyaW5nXCIpOyB9XG5cbiAgICBidWZmZXIgKz0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Plxcbic7XG4gICAgYnVmZmVyICs9ICc8IURPQ1RZUEUgQ29tbW9uTWFyayBTWVNURU0gXCJDb21tb25NYXJrLmR0ZFwiPlxcbic7XG5cbiAgICB3aGlsZSAoKGV2ZW50ID0gd2Fsa2VyLm5leHQoKSkpIHtcbiAgICAgICAgZW50ZXJpbmcgPSBldmVudC5lbnRlcmluZztcbiAgICAgICAgbm9kZSA9IGV2ZW50Lm5vZGU7XG4gICAgICAgIG5vZGV0eXBlID0gbm9kZS50eXBlO1xuXG4gICAgICAgIGNvbnRhaW5lciA9IG5vZGUuaXNDb250YWluZXI7XG4gICAgICAgIHNlbGZDbG9zaW5nID0gbm9kZXR5cGUgPT09ICdIb3Jpem9udGFsUnVsZScgfHwgbm9kZXR5cGUgPT09ICdIYXJkYnJlYWsnIHx8XG4gICAgICAgICAgICBub2RldHlwZSA9PT0gJ1NvZnRicmVhayc7XG4gICAgICAgIHVuZXNjYXBlZENvbnRlbnRzID0gbm9kZXR5cGUgPT09ICdIdG1sJyB8fCBub2RldHlwZSA9PT0gJ0h0bWxJbmxpbmUnO1xuICAgICAgICB0YWduYW1lID0gdG9UYWdOYW1lKG5vZGV0eXBlKTtcblxuICAgICAgICBpZiAoZW50ZXJpbmcpIHtcblxuICAgICAgICAgICAgYXR0cnMgPSBbXTtcblxuICAgICAgICAgICAgc3dpdGNoIChub2RldHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnTGlzdCc6XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGlzdFR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ3R5cGUnLCBub2RlLmxpc3RUeXBlLnRvTG93ZXJDYXNlKCldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGlzdFN0YXJ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydzdGFydCcsIFN0cmluZyhub2RlLmxpc3RTdGFydCldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGlzdFRpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWyd0aWdodCcsIChub2RlLmxpc3RUaWdodCA/ICd0cnVlJyA6ICdmYWxzZScpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkZWxpbSA9IG5vZGUubGlzdERlbGltaXRlcjtcbiAgICAgICAgICAgICAgICBpZiAoZGVsaW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGltd29yZCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsaW0gPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW13b3JkID0gJ3BlcmlvZCc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpbXdvcmQgPSAncGFyZW4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydkZWxpbWl0ZXInLCBkZWxpbXdvcmRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDb2RlQmxvY2snOlxuICAgICAgICAgICAgICAgIGlmIChub2RlLmluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2luZm8nLCBub2RlLmluZm9dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIZWFkZXInOlxuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWydsZXZlbCcsIFN0cmluZyhub2RlLmxldmVsKV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTGluayc6XG4gICAgICAgICAgICBjYXNlICdJbWFnZSc6XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaChbJ2Rlc3RpbmF0aW9uJywgbm9kZS5kZXN0aW5hdGlvbl0pO1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goWyd0aXRsZScsIG5vZGUudGl0bGVdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zb3VyY2Vwb3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gbm9kZS5zb3VyY2Vwb3M7XG4gICAgICAgICAgICAgICAgaWYgKHBvcykge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKFsnc291cmNlcG9zJywgU3RyaW5nKHBvc1swXVswXSkgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcocG9zWzBdWzFdKSArICctJyArIFN0cmluZyhwb3NbMV1bMF0pICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHBvc1sxXVsxXSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNyKCk7XG4gICAgICAgICAgICBvdXQodGFnKHRhZ25hbWUsIGF0dHJzLCBzZWxmQ2xvc2luZykpO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGluZGVudExldmVsICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFjb250YWluZXIgJiYgIXNlbGZDbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpdCA9IG5vZGUubGl0ZXJhbDtcbiAgICAgICAgICAgICAgICBpZiAobGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCh1bmVzY2FwZWRDb250ZW50cyA/IGxpdCA6IGVzYyhsaXQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0KHRhZygnLycgKyB0YWduYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRlbnRMZXZlbCAtPSAxO1xuICAgICAgICAgICAgY3IoKTtcbiAgICAgICAgICAgIG91dCh0YWcoJy8nICsgdGFnbmFtZSkpO1xuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBpZiAob3B0aW9ucy50aW1lKSB7IGNvbnNvbGUudGltZUVuZChcInJlbmRlcmluZ1wiKTsgfVxuICAgIGJ1ZmZlciArPSAnXFxuJztcbiAgICByZXR1cm4gYnVmZmVyO1xufTtcblxuLy8gVGhlIFhtbFJlbmRlcmVyIG9iamVjdC5cbmZ1bmN0aW9uIFhtbFJlbmRlcmVyKG9wdGlvbnMpe1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIGRlZmF1bHQgb3B0aW9uczpcbiAgICAgICAgc29mdGJyZWFrOiAnXFxuJywgLy8gYnkgZGVmYXVsdCwgc29mdCBicmVha3MgYXJlIHJlbmRlcmVkIGFzIG5ld2xpbmVzIGluIEhUTUxcbiAgICAgICAgLy8gc2V0IHRvIFwiPGJyIC8+XCIgdG8gbWFrZSB0aGVtIGhhcmQgYnJlYWtzXG4gICAgICAgIC8vIHNldCB0byBcIiBcIiBpZiB5b3Ugd2FudCB0byBpZ25vcmUgbGluZSB3cmFwcGluZyBpbiBzb3VyY2VcbiAgICAgICAgZXNjYXBlOiBlc2NhcGVYbWwsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwge30sXG4gICAgICAgIHJlbmRlcjogcmVuZGVyTm9kZXNcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFhtbFJlbmRlcmVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tbW9ubWFyay9saWIveG1sLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC8yMy5cclxuICovXHJcbi8v5riy5p+TU2FtcGxlXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBDb21tb25tYXJrIGZyb20gJ2NvbW1vbm1hcmsnO1xyXG5cclxudmFyIHJleCA9IHtcclxuICAgIGh0bWxTaW5nbGVUYWc6KC9ePChcXHcrKVxccyooLiopXFwvPz4oPzo8XFwvXFwxPnwpJC8pLFxyXG4gICAgaHRtbDovPHwmIz9cXHcrOy8sXHJcbiAgICBodG1sUHJvcHM6LyhcXHcrKT0oW14+XSspL2lcclxufTtcclxuXHJcbnZhciBkb21JZGVudGl0eTtcclxuaWYodHlwZW9mIGRvY3VtZW50IT09XCJ1bmRlZmluZWRcIil7XHJcbiAgICBkb21JZGVudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbn1lbHNle1xyXG4gICAgY29uc29sZS5lcnJvcihcImRvY3VtZW50IHVuZGVmaW5lZCFcIik7XHJcbn1cclxuXHJcbmNsYXNzIFNhbXBsZVJlbmRlcmVyIGltcGxlbWVudHMgSUNvbW1vbm1hcmtSZW5kZXJlcntcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG4gICAgICAgIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLnNvdXJjZVBvcz1vcHRzLnNvdXJjZVBvcztcclxuICAgICAgICB0aGlzLnNvZnRCcmVhayA9IG9wdHMuc29mdEJyZWFrIHx8ICdcXG4nO1xyXG4gICAgICAgIHRoaXMuZXNjYXBlSHRtbCA9ICEhb3B0cy5lc2NhcGVIdG1sO1xyXG4gICAgICAgIHRoaXMuc2tpcEh0bWwgPSAhIW9wdHMuc2tpcEh0bWw7XHJcblxyXG4gICAgICAgIHRoaXMuaG93UmVuZGVySHRtbCA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckh0bWwodGFnTmFtZSxmbil7XHJcbiAgICAgICAgaWYodHlwZW9mIGZuIT09XCJmdW5jdGlvblwiKXJldHVybjtcclxuICAgICAgICB0aGlzLmhvd1JlbmRlckh0bWxbdGFnTmFtZV09Zm5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoYmxvY2spe1xyXG4gICAgICAgIHZhciBzZWxmID0gTWFya2Rvd25Ob2RlRWxlbWVudDtcclxuXHJcbiAgICAgICAgdmFyIHdhbGtlciA9IGJsb2NrLndhbGtlcigpO1xyXG4gICAgICAgIHZhciBzb3VyY2VQb3MgPSB0aGlzLnNvdXJjZVBvcztcclxuICAgICAgICB2YXIgZXNjYXBlSHRtbCA9IHRoaXMuZXNjYXBlSHRtbDtcclxuICAgICAgICB2YXIgc2tpcEh0bWwgPSB0aGlzLnNraXBIdG1sO1xyXG4gICAgICAgIHZhciBpbmZvV29yZHM7XHJcbiAgICAgICAgdmFyIHNvZnRCcmVhayA9IChcclxuICAgICAgICAgICAgdGhpcy5zb2Z0QnJlYWsgPT09ICdicicgP1xyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnInKSA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvZnRCcmVha1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciBlLCBub2RlLCBlbnRlcmluZywgbGVhdmluZywgYXR0cnMsIGRvYztcclxuICAgICAgICB3aGlsZSAoKGUgPSB3YWxrZXIubmV4dCgpKSkge1xyXG4gICAgICAgICAgICBlbnRlcmluZyA9IGUuZW50ZXJpbmc7XHJcbiAgICAgICAgICAgIGxlYXZpbmcgPSAhZW50ZXJpbmc7XHJcbiAgICAgICAgICAgIG5vZGUgPSBlLm5vZGU7XHJcbiAgICAgICAgICAgIGF0dHJzID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRvYykge1xyXG4gICAgICAgICAgICAgICAgZG9jID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIG5vZGUucmVhY3QgPSB7IGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc291cmNlUG9zICYmIG5vZGUuc291cmNlcG9zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gbm9kZS5zb3VyY2Vwb3M7XHJcbiAgICAgICAgICAgICAgICBhdHRyc1snZGF0YS1zb3VyY2Vwb3MnXSA9IFtcclxuICAgICAgICAgICAgICAgICAgICBwb3NbMF1bMF0sICc6JywgcG9zWzBdWzFdLCAnLScsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zWzFdWzBdLCAnOicsIHBvc1sxXVsxXVxyXG4gICAgICAgICAgICAgICAgXS5tYXAoU3RyaW5nKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ1BhcmFncmFwaCcgJiYgc2VsZi5pc0dyYW5kUGFyZW50T2ZMaXN0KG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGxlYXZpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdJbWFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnJlYWN0LnByb3BzLmFsdCA9IG5vZGUucmVhY3QuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZWFjdC5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChub2RlICE9PSBkb2MpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIHNlbGYuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZWFjdC50YWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVhY3QucHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVhY3QuY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRW50ZXJpbmcgYSBuZXcgbm9kZVxyXG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnSHRtbCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdIdG1sQmxvY2snOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlc2NhcGVIdG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQ2hpbGQobm9kZSwgbm9kZS5saXRlcmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFza2lwSHRtbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWxwcmFzZSA9IHJleC5odG1sU2luZ2xlVGFnLmV4ZWMobm9kZS5saXRlcmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShodG1scHJhc2UpJiZodG1scHJhc2VbMV0pe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sdGFnID0gaHRtbHByYXNlWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWxlbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tSWRlbnRpdHkuaW5uZXJIVE1MID0gbm9kZS5saXRlcmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWxhdHRyaWJ1dGVzID0gZG9tSWRlbnRpdHkuY2hpbGROb2Rlc1swXS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxodG1sYXR0cmlidXRlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGh0bWxhdHRyaWJ1dGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gYS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihuYW1lLnRvTG93ZXJDYXNlKCk9PT1cImNsYXNzbmFtZVwiKXtuYW1lPVwiY2xhc3NOYW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzW25hbWVdID0gYS5ub2RlVmFsdWUubGVuZ3RoPjA/YS5ub2RlVmFsdWU6dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuaG93UmVuZGVySHRtbFtodG1sdGFnXT09PVwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbGVsZSA9IHRoaXMuaG93UmVuZGVySHRtbFtodG1sdGFnXShodG1sdGFnLGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxlbGUgPSBzZWxmLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWx0YWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihodG1sZWxlLl9fcHJvdG9fXyAmJiBodG1sZWxlLl9fcHJvdG9fXy5faXNSZWFjdEVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQ2hpbGQobm9kZSwgaHRtbGVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+Li4ue2h0bWxwcmFzZVswXX0gcHJhc2UgZmFpbC4uLjwvcD4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnVGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBub2RlLmxpdGVyYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnUGFyYWdyYXBoJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAncCcsIGF0dHJzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0hlYWRlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ2gnICsgbm9kZS5sZXZlbCwgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnU29mdGJyZWFrJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIHNvZnRCcmVhayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdTdHJvbmcnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdzdHJvbmcnLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdMaW5rJzpcclxuICAgICAgICAgICAgICAgICAgICBhdHRycy5ocmVmID0gbm9kZS5kZXN0aW5hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy50aXRsZSA9IG5vZGUudGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFnKG5vZGUsICdhJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnSW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnNyYyA9IG5vZGUuZGVzdGluYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMudGl0bGUgPSBub2RlLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAnaW1nJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnRW1waCc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ2VtJywgYXR0cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQ29kZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBzZWxmLmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtub2RlLmxpdGVyYWxdXHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdDb2RlQmxvY2snOlxyXG4gICAgICAgICAgICAgICAgICAgIGluZm9Xb3JkcyA9IG5vZGUuaW5mbyA/IG5vZGUuaW5mby5zcGxpdCgvICsvKSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvV29yZHMubGVuZ3RoID4gMCAmJiBpbmZvV29yZHNbMF0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5jbGFzc05hbWUgPSAnbGFuZ3VhZ2UtJyArIGluZm9Xb3Jkc1swXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc2VsZi5jcmVhdGVFbGVtZW50KCdjb2RlJywgYXR0cnMsIFtub2RlLmxpdGVyYWxdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENoaWxkKG5vZGUsIHNlbGYuY3JlYXRlRWxlbWVudCgncHJlJywge30sIFtjb2RlXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQmxvY2tRdW90ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWcobm9kZSwgJ2Jsb2NrcXVvdGUnLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdMaXN0JzpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBub2RlLmxpc3RTdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgIT09IG51bGwgJiYgc3RhcnQgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMuc3RhcnQgPSBzdGFydC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCBub2RlLmxpc3RUeXBlID09PSAnQnVsbGV0JyA/ICd1bCcgOiAnb2wnLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdJdGVtJzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZyhub2RlLCAnbGknLCBhdHRycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdIb3Jpem9udGFsUnVsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDaGlsZChub2RlLCBzZWxmLmNyZWF0ZUVsZW1lbnQoJ2hyJywgYXR0cnMpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0RvY3VtZW50JzpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG5vZGUgdHlwZSBcIicgKyBub2RlLnR5cGUgKyAnXCInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRvYy5yZWFjdC5jaGlsZHJlbjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTWFya2Rvd25Ob2RlRWxlbWVudHtcclxuICAgIHN0YXRpYyB0YWcobm9kZSwgbmFtZSwgYXR0cnMsIGNoaWxkcmVuKXtcclxuICAgICAgICBub2RlLnJlYWN0ID0ge1xyXG4gICAgICAgICAgICB0YWc6IG5hbWUsXHJcbiAgICAgICAgICAgIHByb3BzOiBhdHRycyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuIHx8IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNHcmFuZFBhcmVudE9mTGlzdChub2RlKXtcclxuICAgICAgICBpZighbm9kZXx8IW5vZGUucGFyZW50KXtyZXR1cm4gZmFsc2V9XHJcbiAgICAgICAgdmFyIGdyYW5kcGFyZW50ID0gbm9kZS5wYXJlbnQucGFyZW50O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGdyYW5kcGFyZW50ICYmXHJcbiAgICAgICAgICAgIGdyYW5kcGFyZW50LnR5cGUgPT09ICdMaXN0JyAmJlxyXG4gICAgICAgICAgICBncmFuZHBhcmVudC5saXN0VGlnaHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRDaGlsZChub2RlLCBjaGlsZCl7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xyXG4gICAgICAgIH0gd2hpbGUgKCFwYXJlbnQucmVhY3QpO1xyXG5cclxuICAgICAgICBwYXJlbnQucmVhY3QuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRhZ05hbWVcclxuICAgICAqIEBwYXJhbSBwcm9wc1xyXG4gICAgICogQHBhcmFtIGNoaWxkcmVuXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NRWxlbWVudDxBcnJheTxhbnk+fGFueVtdPnxDbGFzc2ljRWxlbWVudDxBcnJheTxhbnk+fGFueVtdPnxSZWFjdEVsZW1lbnQ8QXJyYXk8YW55PnxhbnlbXT59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BzLCBjaGlsZHJlbil7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbdGFnTmFtZSwgcHJvcHNdLmNvbmNhdChjaGlsZHJlbik7XHJcbiAgICAgICAgdmFyIGNoaWxkID0gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShSZWFjdCwgYXJncyk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYW1wbGVSZW5kZXJlclxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2NvbnRlbnQvU2FtcGxlUmVuZGVyZXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMTAuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJ2Fsc2MnO1xyXG5pbXBvcnQgKiBhcyBhZ2VudCBmcm9tIFwic3VwZXJhZ2VudFwiO1xyXG5pbXBvcnQgKiBhcyBhc3luYyBmcm9tIFwiYXN5bmNcIjtcclxuXHJcbmltcG9ydCB7dXJsLGZufSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuaW1wb3J0IFNhbXBsZUZpZWxkIGZyb20gXCIuLy4uL3ZpZXcvY29udGVudC9TYW1wbGVGaWVsZC5qc1wiO1xyXG5cclxuY2xhc3MgU2FtcGxlTWFuYWdlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlcntcclxuICAgIC8qKkByZXR1cm4ge3N0cmluZ30qL1xyXG4gICAgZ2V0IENPTkZJR19MT0FERUQoKXtyZXR1cm4gXCJDT05GSUdfTE9BREVEXCI7fTtcclxuICAgIC8qKkByZXR1cm4ge3N0cmluZ30qL1xyXG4gICAgZ2V0IFRPR0dMRV9UT19TQU1QTEUoKXtyZXR1cm4gXCJUT0dHTEVfVE9fU0FNUExFXCI7fTtcclxuICAgIC8qKkByZXR1cm4ge3N0cmluZ30qL1xyXG4gICAgLy9nZXQgUkVBRFlfU0FNUExFKCl7cmV0dXJuIFwiUkVBRFlfU0FNUExFXCI7fTtcclxuXHJcbiAgICBzdGF0aWMgX2luc3RhbmNlO1xyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpe1xyXG4gICAgICAgIGlmKCEoU2FtcGxlTWFuYWdlci5faW5zdGFuY2UgaW5zdGFuY2VvZiBTYW1wbGVNYW5hZ2VyKSl7XHJcbiAgICAgICAgICAgIFNhbXBsZU1hbmFnZXIuX2luc3RhbmNlID0gbmV3IFNhbXBsZU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNhbXBsZU1hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNhbXBsZXNEYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5zYW1wbGVzRGljdCA9IHt9Oy8v5L6L5a2Q5Luj56CB5paH5Lu2XHJcbiAgICAgICAgdGhpcy5jdXJyRXhhbXBsZSA9IG51bGw7XHJcbiAgICAgICAgYWdlbnQuZ2V0KFwiZGlzdC9wb3N0X2RhdGEuanNvblwiKS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlc0RhdGEgPSBKU09OLnBhcnNlKHJlcy50ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlc0RpY3RbXCJIRUFEXCJdID0gdGhpcy5zYW1wbGVzRGF0YS5wb3N0c1swXTtcclxuICAgICAgICAgICAgdGhpcy5zYW1wbGVzSWREaWN0ID0ge307XHJcbiAgICAgICAgICAgIHZhciBpZCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlc0RhdGEucG9zdHMuZm9yRWFjaCgocG9zdCk9PntcclxuICAgICAgICAgICAgICAgIHBvc3QuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIGlkKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZXNEaWN0W3Bvc3QudGl0bGUrcG9zdC5kYXRlXSA9IHBvc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZXNJZERpY3RbcG9zdC5pZF0gPSBwb3N0O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmluc2lzaExvYWRDb25maWcoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy90aGlzLmFkZExpc3RlbmVyKHRoaXMuUkVBRFlfU0FNUExFLHRoaXMucmVhZHlTYW1wbGUuYmluZCh0aGlzKSlcclxuICAgIH1cclxuXHJcbiAgICBmaW5zaXNoTG9hZENvbmZpZygpe1xyXG4gICAgICAgIHRoaXMuZW1pdCh0aGlzLkNPTkZJR19MT0FERUQpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlVG9TYW1wbGUoXCJIRUFEXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRvU2FtcGxlKGlkKXtcclxuICAgICAgICBpZih0aGlzLmN1cnJFeGFtcGxlKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyRXhhbXBsZS5kZXN0cnVjdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNhbXBsZSA9IHRoaXMuc2FtcGxlc0RpY3RbaWRdO1xyXG4gICAgICAgIGlmKHNhbXBsZSl7XHJcbiAgICAgICAgICAgIGlmKCFzYW1wbGVbXCJtYXJkZG93blwiXSAmJiAhc2FtcGxlW1wic2NyaXB0XCJdKXtcclxuICAgICAgICAgICAgICAgIGFzeW5jLnNlcmllcyhbXHJcbiAgICAgICAgICAgICAgICAgICAgKG5leHQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZW50LmdldCh1cmwuam9pbihcImRpc3QvcG9zdFwiLHNhbXBsZS5wYXRoLFwiL0VudHJ5LmpzXCIpKS5lbmQoKGVycixyZXMpPT57bmV4dChlcnIscmVzLnRleHQpO30pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKG5leHQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZW50LmdldCh1cmwuam9pbihcInNyYy1wb3N0L1wiLHNhbXBsZS5wYXRoLFwiTm90ZS5tZFwiKSkuZW5kKChlcnIscmVzKT0+e25leHQoZXJyLHJlcy50ZXh0KTt9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLChlcnIsIHJlc3VsdHMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc19zY3JpcHQgPSByZXN1bHRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNfbWFya2Rvd24gPSByZXN1bHRzWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBldmFsLmFwcGx5KHRoaXMsIFtcInZhciBzY3JpcHQgPVwiICsgcmVzX3NjcmlwdF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2NyaXB0ICE9PSBcInVuZGVmaW5lZFwiICYmIHNjcmlwdC5wcm90b3R5cGUgJiYgc2NyaXB0LnByb3RvdHlwZSBpbnN0YW5jZW9mIFNhbXBsZUZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZVtcInNjcmlwdFwiXSA9IHNjcmlwdDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsb2FkIHNhbXBsZSBzY3JpcHQgZXJyb3JcIiwgc2FtcGxlLnBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzYW1wbGVbXCJtYXJrZG93blwiXT1yZXNfbWFya2Rvd247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCh0aGlzLlRPR0dMRV9UT19TQU1QTEUse3NhbXBsZTpzYW1wbGV9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCh0aGlzLlRPR0dMRV9UT19TQU1QTEUse3NhbXBsZTpzYW1wbGV9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWFkeVNhbXBsZShpZCxkYXRhKXtcclxuICAgICAgICB2YXIgc2FtcGxlID0gdGhpcy5zYW1wbGVzSWREaWN0W2lkXTtcclxuICAgICAgICBpZihzYW1wbGUpe1xyXG4gICAgICAgICAgICBpZighc2FtcGxlLnJ1bmluZ1NjcmlwdCl7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGUucnVuaW5nU2NyaXB0ID0gbmV3IHNhbXBsZS5zY3JpcHQodXJsLmpvaW4oXCJzcmMtcG9zdC9cIixzYW1wbGUucGF0aCksdXJsLmpvaW4oXCJkaXN0L3Bvc3RcIixzYW1wbGUucGF0aCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNhbXBsZS5ydW5pbmdTY3JpcHQubGF1bmNoKGRhdGEuY2FudmFzKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyRXhhbXBsZSA9IHNhbXBsZS5ydW5pbmdTY3JpcHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYW1wbGVNYW5hZ2VyLmluc3RhbmNlXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL2NvcmUvU2FtcGxlTWFuYWdlci5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC80LlxyXG4gKi9cclxuXHJcbmV4cG9ydHMuRXZlbnREaXNwYXRjaGVyID0gcmVxdWlyZShcIi4vZGlzdC9ldmVudHMvRXZlbnREaXNwYXRjaGVyLmpzXCIpO1xyXG4vL2V4cG9ydHMuQWpheCAgPSByZXF1aXJlKFwiLi9kaXN0L2FqYXgvQWpheFByb3h5LmpzXCIpXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9lbnRyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvNC5cclxuICovXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfdXRpbHNKcyA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xuXG4vL3ZhciBldmVudHNNYXAgPSB0eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiP1N5bWJvbCgpOlwiX19ldmVudHNNYXBfX1wiO1xuXG52YXIgdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHNKcyk7XG5cbnZhciBldmVudHNNYXAgPSBcIl9fZXZlbnRzTWFwX19cIjtcblxudmFyIEV2ZW50RGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnREaXNwYXRjaGVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnREaXNwYXRjaGVyKTtcblxuICAgICAgICB0aGlzW2V2ZW50c01hcF0gPSB7fTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIOa0vuWPkeS4gOS4quS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXG5cbiAgICBfY3JlYXRlQ2xhc3MoRXZlbnREaXNwYXRjaGVyLCBbe1xuICAgICAgICBrZXk6IFwiZW1pdFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50bWFwID0gdGhpc1tldmVudHNNYXBdW2V2ZW50XTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50bWFwKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1dGlscy5ub3RpZnlBcnJheShldmVudG1hcCwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDov5Tlm57miYDmnInlm57osIPmlrnms5VcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJsaXN0ZW5lcnNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXNbZXZlbnRzTWFwXVtldmVudF07XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXNbZXZlbnRzTWFwXVtldmVudF0gPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0Lm1hcChmdW5jdGlvbiAoYmluKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbi5jYWxsYmFjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiaGFzTGlzdGVuZXJzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpc1tldmVudHNNYXBdW2V2ZW50XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzW2V2ZW50c01hcF1bZXZlbnRdLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vliqDkuIDlj6rkvqblkKzlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0gdGhpc09iamVjdFxyXG4gICAgICAgICAqIEBwYXJhbSBwcmlvcml0eVxyXG4gICAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImFkZExpc3RlbmVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICB1dGlscy5yZWdpc3ROb3RpZnkodGhpc1tldmVudHNNYXBdLCBldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QsIG51bGwsIHByaW9yaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOenu+mZpOS4gOWPquS+puWQrOWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICAgICAqIEBwYXJhbSB0aGlzT2JqZWN0XHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicmVtb3ZlTGlzdGVuZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgdGhpc09iamVjdCkge1xuICAgICAgICAgICAgdXRpbHMudW5yZWdpc3ROb3RpZnkodGhpc1tldmVudHNNYXBdLCBldmVudCwgY2FsbGJhY2ssIHRoaXNPYmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog56e76Zmk5omA5pyJ5L6m5ZCs5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicmVtb3ZlQWxsTGlzdGVuZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzW2V2ZW50c01hcF1bZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvZMs566A5piT6Kem5Y+R5ZmoXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgICAgICovXG4gICAgfSwge1xuICAgICAgICBrZXk6IFwib25cIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdXRpbHMucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW9kyzllK/kuIDop6blj5HlmahcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAgICAgKi9cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJvbmNlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNlKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdXRpbHMucmVnaXN0Tm90aWZ5KHRoaXNbZXZlbnRzTWFwXSwgZXZlbnQsIGNhbGxiYWNrLCBudWxsLCBudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBFdmVudERpc3BhdGNoZXI7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV2ZW50RGlzcGF0Y2hlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1WMlpXNTBjeTlGZG1WdWRFUnBjM0JoZEdOb1pYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlIwRXNXVUZCV1N4RFFVRkRPenM3T3pzN096czdPenQxUWtGRFZTeFpRVUZaT3pzN08wbEJRWFpDTEV0QlFVczdPMEZCUjJwQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEdWQlFXVXNRMEZCUXpzN1NVRkRNVUlzWlVGQlpUdEJRVU5PTEdGQlJGUXNaVUZCWlN4SFFVTklPemhDUVVSYUxHVkJRV1U3TzBGQlJXSXNXVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU40UWpzN096czdPenM3YVVKQlNFTXNaVUZCWlRzN1pVRlZZaXhqUVVGRExFdEJRVXNzUlVGQlZ6dEJRVU5xUWl4blFrRkJTU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRM1JETEdkQ1FVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdhMFJCUm14Q0xFbEJRVWs3UVVGQlNpeDNRa0ZCU1RzN08wRkJSMWdzY1VKQlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZCTzJGQlEzQkRPMU5CUTBvN096czdPenM3T3p0bFFVOVJMRzFDUVVGRExFdEJRVXNzUlVGQlJUdEJRVU5pTEdkQ1FVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1FVRkRjRU1zWjBKQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVNN1FVRkRVQ3h6UWtGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTmFMRzlDUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRE8yRkJRMjVETzBGQlEwUXNiVUpCUVU4c1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZUTEVkQlFVY3NSVUZCUXp0QlFVTXpRaXgxUWtGQlR5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRPMkZCUTNaQ0xFTkJRVU1zUTBGQlF6dFRRVU5PT3pzN1pVRkZWeXh6UWtGQlF5eExRVUZMTEVWQlFVTTdRVUZEWml4blFrRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJRenRCUVVGRExIVkNRVUZQTEV0QlFVc3NRMEZCUXp0aFFVRkRPMEZCUXpGRExHMUNRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpGRE96czdPenM3T3pzN096dGxRVk5WTEhGQ1FVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZGQlFWRXNSVUZCUlR0QlFVTXZReXhwUWtGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4VlFVRlZMRVZCUVVVc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFOQlEzQkdPenM3T3pzN096czdPMlZCVVdFc2QwSkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4VlFVRlZMRVZCUVVVN1FVRkRlRU1zYVVKQlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VTBGRGRFVTdPenM3T3pzN08yVkJUV2RDTERKQ1FVRkRMRXRCUVVzc1JVRkJSVHRCUVVOeVFpeG5Ra0ZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0VFFVTXZRanM3T3pzN096czdPMlZCVDBNc1dVRkJReXhMUVVGTExFVkJRVVVzVVVGQlVTeEZRVUZGTzBGQlEyaENMR2xDUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVMEZEZUVRN096czdPenM3T3p0bFFVOUhMR05CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJUdEJRVU5zUWl4cFFrRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU5vUmpzN08xZEJia1pETEdWQlFXVTdPenR4UWtGelJrNHNaVUZCWlNJc0ltWnBiR1VpT2lKbGRtVnVkSE12UlhabGJuUkVhWE53WVhSamFHVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FYSEpjYmlBcUlFTnlaV0YwWldRZ1lua2dkRzl0YlhsYVdrMGdiMjRnTWpBeE5TODRMelF1WEhKY2JpQXFMMXh5WEc1Y0luVnpaU0J6ZEhKcFkzUmNJanRjY2x4dWFXMXdiM0owSUNvZ1lYTWdkWFJwYkhNZ1puSnZiU0JjSWk0dmRYUnBiSE11YW5OY0lqdGNjbHh1WEhKY2JpOHZkbUZ5SUdWMlpXNTBjMDFoY0NBOUlIUjVjR1Z2WmlCVGVXMWliMnc5UFQxY0ltWjFibU4wYVc5dVhDSS9VM2x0WW05c0tDazZYQ0pmWDJWMlpXNTBjMDFoY0Y5ZlhDSTdYSEpjYm5aaGNpQmxkbVZ1ZEhOTllYQWdQU0JjSWw5ZlpYWmxiblJ6VFdGd1gxOWNJanRjY2x4dVkyeGhjM01nUlhabGJuUkVhWE53WVhSamFHVnlJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhOYlpYWmxiblJ6VFdGd1hTQTlJSHQ5TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nNXJTKzVZK1I1TGlBNUxpcTVMcUw1THUyWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWlhabGJuUmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmhjbWR6WEhKY2JpQWdJQ0FnS2k5Y2NseHVJQ0FnSUdWdGFYUW9aWFpsYm5Rc0lDNHVMbUZ5WjNNcElIdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ1pYWmxiblJ0WVhBZ1BTQjBhR2x6VzJWMlpXNTBjMDFoY0YxYlpYWmxiblJkTzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hCY25KaGVTNXBjMEZ5Y21GNUtHVjJaVzUwYldGd0tTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFkR2xzY3k1dWIzUnBabmxCY25KaGVTaGxkbVZ1ZEcxaGNDd2dZWEpuY3lsY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpRG92NVRsbTU3bWlZRG1uSW5sbTU3b3NJUG1scm5tczVWY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCbGRtVnVkRnh5WEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZXlwOVhISmNiaUFnSUNBZ0tpOWNjbHh1SUNBZ0lHeHBjM1JsYm1WeWN5aGxkbVZ1ZENrZ2UxeHlYRzRnSUNBZ0lDQWdJSFpoY2lCeVpYTjFiSFFnUFNCMGFHbHpXMlYyWlc1MGMwMWhjRjFiWlhabGJuUmRPMXh5WEc0Z0lDQWdJQ0FnSUdsbUtDRnlaWE4xYkhRcGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFFnUFNCYlhUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXRsZG1WdWRITk5ZWEJkVzJWMlpXNTBYU0E5SUhKbGMzVnNkRHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZEM1dFlYQW9ablZ1WTNScGIyNG9ZbWx1S1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR0pwYmk1allXeHNZbUZqYXp0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCb1lYTk1hWE4wWlc1bGNuTW9aWFpsYm5RcGUxeHlYRzRnSUNBZ0lDQWdJR2xtS0NGMGFHbHpXMlYyWlc1MGMwMWhjRjFiWlhabGJuUmRLWHR5WlhSMWNtNGdabUZzYzJVN2ZWeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6VzJWMlpXNTBjMDFoY0YxYlpYWmxiblJkTG14bGJtZDBhRDR3TzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nNXJlNzVZcWc1TGlBNVkrcTVMNm01WkNzNVptb1hISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ1pYWmxiblJjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JqWVd4c1ltRmphMXh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSFJvYVhOUFltcGxZM1JjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0J3Y21sdmNtbDBlVnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0JoWkdSTWFYTjBaVzVsY2lobGRtVnVkQ3dnWTJGc2JHSmhZMnNzSUhSb2FYTlBZbXBsWTNRc0lIQnlhVzl5YVhSNUtTQjdYSEpjYmlBZ0lDQWdJQ0FnZFhScGJITXVjbVZuYVhOMFRtOTBhV1o1S0hSb2FYTmJaWFpsYm5SelRXRndYU3dnWlhabGJuUXNJR05oYkd4aVlXTnJMQ0IwYUdselQySnFaV04wTENCdWRXeHNMQ0J3Y21sdmNtbDBlU2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaURucDd2cG1hVGt1SURsajZya3ZxYmxrS3psbWFoY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCbGRtVnVkRnh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJR05oYkd4aVlXTnJYSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdkR2hwYzA5aWFtVmpkRnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J5WlcxdmRtVk1hWE4wWlc1bGNpaGxkbVZ1ZEN3Z1kyRnNiR0poWTJzc0lIUm9hWE5QWW1wbFkzUXBJSHRjY2x4dUlDQWdJQ0FnSUNCMWRHbHNjeTUxYm5KbFoybHpkRTV2ZEdsbWVTaDBhR2x6VzJWMlpXNTBjMDFoY0Ywc0lHVjJaVzUwTENCallXeHNZbUZqYXl3Z2RHaHBjMDlpYW1WamRDazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpRG5wN3ZwbWFUbWlZRG1uSW5rdnFibGtLemxtYWhjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQnlaVzF2ZG1WQmJHeE1hWE4wWlc1bGNpaGxkbVZ1ZENrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhOYlpYWmxiblJ6VFdGd1hWdGxkbVZ1ZEYwZ1BTQmJYVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdktpcGNjbHh1SUNBZ0lDQXFJT1c5a3l6bnJvRG1tSlBvcDZibGo1SGxtYWhjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb2dRSEJoY21GdElHTmhiR3hpWVdOclhISmNiaUFnSUNBZ0tpOWNjbHh1SUNBZ0lHOXVLR1YyWlc1MExDQmpZV3hzWW1GamF5a2dlMXh5WEc0Z0lDQWdJQ0FnSUhWMGFXeHpMbkpsWjJsemRFNXZkR2xtZVNoMGFHbHpXMlYyWlc1MGMwMWhjRjBzSUdWMlpXNTBMQ0JqWVd4c1ltRmpheWs3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaURsdlpNczVaU3Y1TGlBNktlbTVZK1I1Wm1vWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWlhabGJuUmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmpZV3hzWW1GamExeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQnZibU5sS0dWMlpXNTBMQ0JqWVd4c1ltRmpheWtnZTF4eVhHNGdJQ0FnSUNBZ0lIVjBhV3h6TG5KbFoybHpkRTV2ZEdsbWVTaDBhR2x6VzJWMlpXNTBjMDFoY0Ywc0lHVjJaVzUwTENCallXeHNZbUZqYXl3Z2JuVnNiQ3dnYm5Wc2JDd2diblZzYkN3Z2RISjFaU2s3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVWMlpXNTBSR2x6Y0dGMFkyaGxjanNpWFN3aWMyOTFjbU5sVW05dmRDSTZJaTl6YjNWeVkyVXZJbjA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9kaXN0L2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9tbXlaWk0gb24gMjAxNS84LzE5LlxyXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVnaXN0Tm90aWZ5ID0gcmVnaXN0Tm90aWZ5O1xuZXhwb3J0cy51bnJlZ2lzdE5vdGlmeSA9IHVucmVnaXN0Tm90aWZ5O1xuZXhwb3J0cy5ub3RpZnkgPSBub3RpZnk7XG5leHBvcnRzLm5vdGlmeUFycmF5ID0gbm90aWZ5QXJyYXk7XG5cbmZ1bmN0aW9uIHJlZ2lzdE5vdGlmeShub3RpZnltYXAsIG5hbWUsIGNhbGxiYWNrLCB0aGlzT2JqZWN0LCBwYXJhbSwgcHJpb3JpdHksIG9uY2UpIHtcbiAgICAvLyxyZXNlcnZlPzphbnlcbiAgICBpZiAoIW5vdGlmeW1hcFtuYW1lXSkgbm90aWZ5bWFwW25hbWVdID0gW107XG4gICAgdmFyIGFyciA9IG5vdGlmeW1hcFtuYW1lXTtcblxuICAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgIHZhciBpbnNlcnRJbmRleCA9IC0xO1xuICAgIHZhciBiaW47XG5cbiAgICBpZiAocHJpb3JpdHkgPT09IHVuZGVmaW5lZCkgcHJpb3JpdHkgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmluID0gYXJyW2ldO1xuICAgICAgICBpZiAoYmluICYmIGJpbi5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgYmluLnRoaXNPYmplY3QgPT09IHRoaXNPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy/pmLLmraLph43lpI3mj5LlhaVcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmluICYmIGluc2VydEluZGV4ID09IC0xICYmIGJpbi5wcmlvcml0eSA8IHByaW9yaXR5KSB7XG4gICAgICAgICAgICBpbnNlcnRJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW4gPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgdGhpc09iamVjdDogdGhpc09iamVjdCwgcGFyYW06IHBhcmFtID8gcGFyYW0gOiBbXSwgcHJpb3JpdHk6IHByaW9yaXR5LCBvbmNlOiBvbmNlIH07XG4gICAgaWYgKGluc2VydEluZGV4ICE9IC0xKSB7XG4gICAgICAgIGFyci5zcGxpY2UoaW5zZXJ0SW5kZXgsIDAsIGJpbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJyLnB1c2goYmluKTtcbiAgICB9XG4gICAgbm90aWZ5bWFwW25hbWVdID0gYXJyO1xufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdE5vdGlmeShub3RpZnltYXAsIG5hbWUsIGNhbGxiYWNrLCB0aGlzT2JqZWN0KSB7XG4gICAgaWYgKCFub3RpZnltYXBbbmFtZV0pIHJldHVybjtcbiAgICB2YXIgYXJyID0gbm90aWZ5bWFwW25hbWVdO1xuICAgIGlmIChhcnIpIHtcbiAgICAgICAgbm90aWZ5bWFwW25hbWVdID0gYXJyLmZpbHRlcihmdW5jdGlvbiAoYmluKSB7XG4gICAgICAgICAgICByZXR1cm4gIShiaW4uY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmIGJpbi50aGlzT2JqZWN0ID09PSB0aGlzT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3RpZnkobm90aWZ5bWFwLCBuYW1lLCBwYXJhbSkge1xuICAgIHZhciBhcnIgPSBub3RpZnltYXBbbmFtZV07XG4gICAgaWYgKGFycikge1xuICAgICAgICBub3RpZnlBcnJheShhcnIsIHBhcmFtKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90aWZ5QXJyYXkoYXJyLCBwYXJhbSkge1xuICAgIGZvciAodmFyIGkgaW4gYXJyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgK2kgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKCtpKSkge1xuICAgICAgICAgICAgdmFyIGJpbiA9IGFycltpXTtcbiAgICAgICAgICAgIGlmIChiaW4gJiYgYmluLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbSkgcGFyYW0gPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoYmluLnBhcmFtKSBwYXJhbSA9IGJpbi5wYXJhbS5jb25jYXQocGFyYW0pO1xuICAgICAgICAgICAgICAgIGJpbi5jYWxsYmFjay5hcHBseShiaW4udGhpc09iamVjdCwgcGFyYW0pO1xuICAgICAgICAgICAgICAgIGlmIChiaW4ub25jZSkge1xuICAgICAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVYyWlc1MGN5OTFkR2xzY3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenRCUVVsUExGTkJRVk1zV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRkxGVkJRVlVzUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RlFVRkRMRWxCUVVrc1JVRkJSVHM3UVVGRGRFWXNVVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRekZETEZGQlFVa3NSMEZCUnl4SFFVRkhMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6czdRVUZGTVVJc1VVRkJTU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTjRRaXhSUVVGSkxGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnlRaXhSUVVGSkxFZEJRVWNzUTBGQlF6czdRVUZGVWl4UlFVRkpMRkZCUVZFc1MwRkJTeXhUUVVGVExFVkJRVU1zVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjRReXhUUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlF6ZENMRmRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEWWl4WlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVTeExRVUZMTEZGQlFWRXNTVUZCU1N4SFFVRkhMRU5CUVVNc1ZVRkJWU3hMUVVGTExGVkJRVlVzUlVGQlJUdEJRVU51UlN4dFFrRkJUeXhMUVVGTExFTkJRVU03VTBGRGFFSTdRVUZEUkN4WlFVRkpMRWRCUVVjc1NVRkJTU3hYUVVGWExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFVkJRVVU3UVVGRGNrUXNkVUpCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGJrSTdTMEZEU2pzN1FVRkZSQ3hQUVVGSExFZEJRVWNzUlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NSMEZCUnl4TFFVRkxMRWRCUVVjc1JVRkJSU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkRMRWxCUVVrc1JVRkJReXhEUVVGRE8wRkJRemRITEZGQlFVa3NWMEZCVnl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRk8wRkJRMjVDTEZkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0TFFVTnVReXhOUVVOSk8wRkJRMFFzVjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVOcVFqdEJRVU5FTEdGQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03UTBGRGVrSTdPMEZCUlUwc1UwRkJVeXhqUVVGakxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hGUVVGRk8wRkJRMnhGTEZGQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVU1zVDBGQlR6dEJRVU0xUWl4UlFVRkpMRWRCUVVjc1IwRkJSeXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETVVJc1VVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFRDeHBRa0ZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVXl4SFFVRkhMRVZCUVVNN1FVRkRkRU1zYlVKQlFVOHNSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hMUVVGTExGRkJRVkVzU1VGQlNTeEhRVUZITEVOQlFVTXNWVUZCVlN4TFFVRkxMRlZCUVZVc1EwRkJRU3hCUVVGRExFTkJRVUU3VTBGRGRrVXNRMEZCUXl4RFFVRkRPMHRCUTA0N1EwRkRTanM3UVVGRlRTeFRRVUZUTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJUdEJRVU16UXl4UlFVRkpMRWRCUVVjc1IwRkJSeXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETVVJc1VVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFRDeHRRa0ZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU40UWl4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObUxFMUJRVTA3UVVGRFNDeGxRVUZQTEV0QlFVc3NRMEZCUXp0TFFVTm9RanREUVVOS096dEJRVVZOTEZOQlFWTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFVkJRVVU3UVVGRGNFTXNVMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFppeFpRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1VVRkJVU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVNN1FVRkRjRU1zWjBKQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4blFrRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlR0QlFVTnlRaXh2UWtGQlNTeERRVUZETEV0QlFVc3NSVUZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM1JDTEc5Q1FVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlF6bERMRzFDUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBGQlF6RkRMRzlDUVVGSkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVTTdRVUZEVkN4MVFrRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRM0JDTzJGQlEwbzdVMEZEU2p0TFFVTktPME5CUTBvaUxDSm1hV3hsSWpvaVpYWmxiblJ6TDNWMGFXeHpMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FYSEpjYmlBcUlFTnlaV0YwWldRZ1lua2dkRzl0YlhsYVdrMGdiMjRnTWpBeE5TODRMekU1TGx4eVhHNGdLaTljY2x4dVhISmNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnlaV2RwYzNST2IzUnBabmtvYm05MGFXWjViV0Z3TENCdVlXMWxMQ0JqWVd4c1ltRmpheXdnZEdocGMwOWlhbVZqZEN3Z2NHRnlZVzBzSUhCeWFXOXlhWFI1TEc5dVkyVXBJSHN2THl4eVpYTmxjblpsUHpwaGJubGNjbHh1SUNBZ0lHbG1JQ2doYm05MGFXWjViV0Z3VzI1aGJXVmRLVzV2ZEdsbWVXMWhjRnR1WVcxbFhTQTlJRnRkTzF4eVhHNGdJQ0FnZG1GeUlHRnljaUE5SUc1dmRHbG1lVzFoY0Z0dVlXMWxYVHRjY2x4dVhISmNiaUFnSUNCMllYSWdiR1Z1WjNSb0lEMGdZWEp5TG14bGJtZDBhRHRjY2x4dUlDQWdJSFpoY2lCcGJuTmxjblJKYm1SbGVDQTlJQzB4TzF4eVhHNGdJQ0FnZG1GeUlHSnBianRjY2x4dVhISmNiaUFnSUNCcFppQW9jSEpwYjNKcGRIa2dQVDA5SUhWdVpHVm1hVzVsWkNsd2NtbHZjbWwwZVNBOUlEQTdYSEpjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hsYm1kMGFEc2dhU3NyS1NCN1hISmNiaUFnSUNBZ0lDQWdZbWx1SUQwZ1lYSnlXMmxkTzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2hpYVc0Z0ppWWdZbWx1TG1OaGJHeGlZV05ySUQwOVBTQmpZV3hzWW1GamF5QW1KaUJpYVc0dWRHaHBjMDlpYW1WamRDQTlQVDBnZEdocGMwOWlhbVZqZENrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdMeS9wbUxMbXJhTHBoNDNscEkzbWo1TGxoYVZjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdhV1lnS0dKcGJpQW1KaUJwYm5ObGNuUkpibVJsZUNBOVBTQXRNU0FtSmlCaWFXNHVjSEpwYjNKcGRIa2dQQ0J3Y21sdmNtbDBlU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm5ObGNuUkpibVJsZUNBOUlHazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHSnBiaUE5SUh0allXeHNZbUZqYXpvZ1kyRnNiR0poWTJzc0lIUm9hWE5QWW1wbFkzUTZJSFJvYVhOUFltcGxZM1FzSUhCaGNtRnRPaUJ3WVhKaGJTQS9JSEJoY21GdElEb2dXMTBzSUhCeWFXOXlhWFI1T2lCd2NtbHZjbWwwZVNBc2IyNWpaVHB2Ym1ObGZUdGNjbHh1SUNBZ0lHbG1JQ2hwYm5ObGNuUkpibVJsZUNBaFBTQXRNU2tnZTF4eVhHNGdJQ0FnSUNBZ0lHRnljaTV6Y0d4cFkyVW9hVzV6WlhKMFNXNWtaWGdzSURBc0lHSnBiaWs3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0JoY25JdWNIVnphQ2hpYVc0cE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2JtOTBhV1o1YldGd1cyNWhiV1ZkSUQwZ1lYSnlPMXh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZFc1eVpXZHBjM1JPYjNScFpua29ibTkwYVdaNWJXRndMQ0J1WVcxbExDQmpZV3hzWW1GamF5d2dkR2hwYzA5aWFtVmpkQ2tnZTF4eVhHNGdJQ0FnYVdZZ0tDRnViM1JwWm5sdFlYQmJibUZ0WlYwcGNtVjBkWEp1TzF4eVhHNGdJQ0FnZG1GeUlHRnljaUE5SUc1dmRHbG1lVzFoY0Z0dVlXMWxYVHRjY2x4dUlDQWdJR2xtSUNoaGNuSXBJSHRjY2x4dUlDQWdJQ0FnSUNCdWIzUnBabmx0WVhCYmJtRnRaVjBnUFNCaGNuSXVabWxzZEdWeUtHWjFibU4wYVc5dUtHSnBiaWw3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQWhLR0pwYmk1allXeHNZbUZqYXlBOVBUMGdZMkZzYkdKaFkyc2dKaVlnWW1sdUxuUm9hWE5QWW1wbFkzUWdQVDA5SUhSb2FYTlBZbXBsWTNRcFhISmNiaUFnSUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCdWIzUnBabmtvYm05MGFXWjViV0Z3TENCdVlXMWxMQ0J3WVhKaGJTa2dlMXh5WEc0Z0lDQWdkbUZ5SUdGeWNpQTlJRzV2ZEdsbWVXMWhjRnR1WVcxbFhUdGNjbHh1SUNBZ0lHbG1JQ2hoY25JcElIdGNjbHh1SUNBZ0lDQWdJQ0J1YjNScFpubEJjbkpoZVNoaGNuSXNJSEJoY21GdEtUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYm05MGFXWjVRWEp5WVhrb1lYSnlMQ0J3WVhKaGJTa2dlMXh5WEc0Z0lDQWdabTl5SUNoMllYSWdhU0JwYmlCaGNuSXBJSHRjY2x4dUlDQWdJQ0FnSUNCcFppaDBlWEJsYjJZZ0sya2dQVDA5SUZ3aWJuVnRZbVZ5WENJZ0ppWWdJV2x6VG1GT0tDdHBLU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCaWFXNGdQU0JoY25KYmFWMDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hpYVc0Z0ppWWdZbWx1TG1OaGJHeGlZV05yS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhCaGNtRnRLWEJoY21GdElEMGdXMTA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZbWx1TG5CaGNtRnRLWEJoY21GdElEMGdZbWx1TG5CaGNtRnRMbU52Ym1OaGRDaHdZWEpoYlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmlhVzR1WTJGc2JHSmhZMnN1WVhCd2JIa29ZbWx1TG5Sb2FYTlBZbXBsWTNRc0lIQmhjbUZ0S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hpYVc0dWIyNWpaU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWEp5TG5Od2JHbGpaU2hwTENBeEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmU0pkTENKemIzVnlZMlZTYjI5MElqb2lMM052ZFhKalpTOGlmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWxzYy9kaXN0L2V2ZW50cy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgncmVkdWNlJyk7XG5cbi8qKlxuICogUm9vdCByZWZlcmVuY2UgZm9yIGlmcmFtZXMuXG4gKi9cblxudmFyIHJvb3QgPSAndW5kZWZpbmVkJyA9PSB0eXBlb2Ygd2luZG93XG4gID8gKHRoaXMgfHwgc2VsZilcbiAgOiB3aW5kb3c7XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICogd2UgZG9uJ3Qgd2FudCB0byBzZXJpYWxpemUgdGhlc2UgOilcbiAqXG4gKiBUT0RPOiBmdXR1cmUgcHJvb2YsIG1vdmUgdG8gY29tcG9lbnQgbGFuZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0hvc3Qob2JqKSB7XG4gIHZhciBzdHIgPSB7fS50b1N0cmluZy5jYWxsKG9iaik7XG5cbiAgc3dpdGNoIChzdHIpIHtcbiAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJsb2JdJzpcbiAgICBjYXNlICdbb2JqZWN0IEZvcm1EYXRhXSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5yZXF1ZXN0LmdldFhIUiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcbiAgICAgICYmICghcm9vdC5sb2NhdGlvbiB8fCAnZmlsZTonICE9IHJvb3QubG9jYXRpb24ucHJvdG9jb2xcbiAgICAgICAgICB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgYWRkZWQgdG8gc3VwcG9ydCBJRS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHRyaW0gPSAnJy50cmltXG4gID8gZnVuY3Rpb24ocykgeyByZXR1cm4gcy50cmltKCk7IH1cbiAgOiBmdW5jdGlvbihzKSB7IHJldHVybiBzLnJlcGxhY2UoLyheXFxzKnxcXHMqJCkvZywgJycpOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgZ2l2ZW4gYG9iamAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG9iaikge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG51bGwgIT0gb2JqW2tleV0pIHtcbiAgICAgIHBhaXJzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSlcbiAgICAgICAgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0ID0gc2VyaWFsaXplO1xuXG4gLyoqXG4gICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbmZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnJicpO1xuICB2YXIgcGFydHM7XG4gIHZhciBwYWlyO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYWlycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICBwYXJ0cyA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICBvYmpbZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBFeHBvc2UgcGFyc2VyLlxuICovXG5cbnJlcXVlc3QucGFyc2VTdHJpbmcgPSBwYXJzZVN0cmluZztcblxuLyoqXG4gKiBEZWZhdWx0IE1JTUUgdHlwZSBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICovXG5cbnJlcXVlc3QudHlwZXMgPSB7XG4gIGh0bWw6ICd0ZXh0L2h0bWwnLFxuICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsXG4gIHhtbDogJ2FwcGxpY2F0aW9uL3htbCcsXG4gIHVybGVuY29kZWQ6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybS1kYXRhJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbi8qKlxuICogRGVmYXVsdCBzZXJpYWxpemF0aW9uIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC5zZXJpYWxpemVbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24ob2JqKXtcbiAqICAgICAgIHJldHVybiAnZ2VuZXJhdGVkIHhtbCBoZXJlJztcbiAqICAgICB9O1xuICpcbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemUgPSB7XG4gICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnN0cmluZ2lmeVxuIH07XG5cbiAvKipcbiAgKiBEZWZhdWx0IHBhcnNlcnMuXG4gICpcbiAgKiAgICAgc3VwZXJhZ2VudC5wYXJzZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihzdHIpe1xuICAqICAgICAgIHJldHVybiB7IG9iamVjdCBwYXJzZWQgZnJvbSBzdHIgfTtcbiAgKiAgICAgfTtcbiAgKlxuICAqL1xuXG5yZXF1ZXN0LnBhcnNlID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogcGFyc2VTdHJpbmcsXG4gICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5wYXJzZVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaGVhZGVyIGBzdHJgIGludG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtYXBwZWQgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHN0cikge1xuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoL1xccj9cXG4vKTtcbiAgdmFyIGZpZWxkcyA9IHt9O1xuICB2YXIgaW5kZXg7XG4gIHZhciBsaW5lO1xuICB2YXIgZmllbGQ7XG4gIHZhciB2YWw7XG5cbiAgbGluZXMucG9wKCk7IC8vIHRyYWlsaW5nIENSTEZcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsaW5lID0gbGluZXNbaV07XG4gICAgaW5kZXggPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBmaWVsZCA9IGxpbmUuc2xpY2UoMCwgaW5kZXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdHJpbShsaW5lLnNsaWNlKGluZGV4ICsgMSkpO1xuICAgIGZpZWxkc1tmaWVsZF0gPSB2YWw7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgbWltZSB0eXBlIGZvciB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHlwZShzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnNoaWZ0KCk7XG59O1xuXG4vKipcbiAqIFJldHVybiBoZWFkZXIgZmllbGQgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJhbXMoc3RyKXtcbiAgcmV0dXJuIHJlZHVjZShzdHIuc3BsaXQoLyAqOyAqLyksIGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqPSAqLylcbiAgICAgICwga2V5ID0gcGFydHMuc2hpZnQoKVxuICAgICAgLCB2YWwgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgaWYgKGtleSAmJiB2YWwpIG9ialtrZXldID0gdmFsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIGB4aHJgLlxuICpcbiAqICAtIHNldCBmbGFncyAoLm9rLCAuZXJyb3IsIGV0YylcbiAqICAtIHBhcnNlIGhlYWRlclxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICBBbGlhc2luZyBgc3VwZXJhZ2VudGAgYXMgYHJlcXVlc3RgIGlzIG5pY2U6XG4gKlxuICogICAgICByZXF1ZXN0ID0gc3VwZXJhZ2VudDtcbiAqXG4gKiAgV2UgY2FuIHVzZSB0aGUgcHJvbWlzZS1saWtlIEFQSSwgb3IgcGFzcyBjYWxsYmFja3M6XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnLycpLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICogICAgICByZXF1ZXN0LmdldCgnLycsIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIFNlbmRpbmcgZGF0YSBjYW4gYmUgY2hhaW5lZDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAuc2VuZCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5wb3N0KClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBPciBmdXJ0aGVyIHJlZHVjZWQgdG8gYSBzaW5nbGUgY2FsbCBmb3Igc2ltcGxlIGNhc2VzOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIEBwYXJhbSB7WE1MSFRUUFJlcXVlc3R9IHhoclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5yZXEgPSByZXE7XG4gIHRoaXMueGhyID0gdGhpcy5yZXEueGhyO1xuICAvLyByZXNwb25zZVRleHQgaXMgYWNjZXNzaWJsZSBvbmx5IGlmIHJlc3BvbnNlVHlwZSBpcyAnJyBvciAndGV4dCcgYW5kIG9uIG9sZGVyIGJyb3dzZXJzXG4gIHRoaXMudGV4dCA9ICgodGhpcy5yZXEubWV0aG9kICE9J0hFQUQnICYmICh0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICcnIHx8IHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnKSkgfHwgdHlwZW9mIHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgID8gdGhpcy54aHIucmVzcG9uc2VUZXh0XG4gICAgIDogbnVsbDtcbiAgdGhpcy5zdGF0dXNUZXh0ID0gdGhpcy5yZXEueGhyLnN0YXR1c1RleHQ7XG4gIHRoaXMuc2V0U3RhdHVzUHJvcGVydGllcyh0aGlzLnhoci5zdGF0dXMpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVycyA9IHBhcnNlSGVhZGVyKHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuICB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyk7XG4gIHRoaXMuc2V0SGVhZGVyUHJvcGVydGllcyh0aGlzLmhlYWRlcik7XG4gIHRoaXMuYm9keSA9IHRoaXMucmVxLm1ldGhvZCAhPSAnSEVBRCdcbiAgICA/IHRoaXMucGFyc2VCb2R5KHRoaXMudGV4dCA/IHRoaXMudGV4dCA6IHRoaXMueGhyLnJlc3BvbnNlKVxuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgcmVsYXRlZCBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgLnR5cGVgIHRoZSBjb250ZW50IHR5cGUgd2l0aG91dCBwYXJhbXNcbiAqXG4gKiBBIHJlc3BvbnNlIG9mIFwiQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCJcbiAqIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIGAudHlwZWAgb2YgXCJ0ZXh0L3BsYWluXCIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAvLyBjb250ZW50LXR5cGVcbiAgdmFyIGN0ID0gdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB0eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgdmFyIG9iaiA9IHBhcmFtcyhjdCk7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHRoaXNba2V5XSA9IG9ialtrZXldO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYm9keSBgc3RyYC5cbiAqXG4gKiBVc2VkIGZvciBhdXRvLXBhcnNpbmcgb2YgYm9kaWVzLiBQYXJzZXJzXG4gKiBhcmUgZGVmaW5lZCBvbiB0aGUgYHN1cGVyYWdlbnQucGFyc2VgIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5wYXJzZUJvZHkgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgcGFyc2UgPSByZXF1ZXN0LnBhcnNlW3RoaXMudHlwZV07XG4gIHJldHVybiBwYXJzZSAmJiBzdHIgJiYgKHN0ci5sZW5ndGggfHwgc3RyIGluc3RhbmNlb2YgT2JqZWN0KVxuICAgID8gcGFyc2Uoc3RyKVxuICAgIDogbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IGZsYWdzIHN1Y2ggYXMgYC5va2AgYmFzZWQgb24gYHN0YXR1c2AuXG4gKlxuICogRm9yIGV4YW1wbGUgYSAyeHggcmVzcG9uc2Ugd2lsbCBnaXZlIHlvdSBhIGAub2tgIG9mIF9fdHJ1ZV9fXG4gKiB3aGVyZWFzIDV4eCB3aWxsIGJlIF9fZmFsc2VfXyBhbmQgYC5lcnJvcmAgd2lsbCBiZSBfX3RydWVfXy4gVGhlXG4gKiBgLmNsaWVudEVycm9yYCBhbmQgYC5zZXJ2ZXJFcnJvcmAgYXJlIGFsc28gYXZhaWxhYmxlIHRvIGJlIG1vcmVcbiAqIHNwZWNpZmljLCBhbmQgYC5zdGF0dXNUeXBlYCBpcyB0aGUgY2xhc3Mgb2YgZXJyb3IgcmFuZ2luZyBmcm9tIDEuLjVcbiAqIHNvbWV0aW1lcyB1c2VmdWwgZm9yIG1hcHBpbmcgcmVzcG9uZCBjb2xvcnMgZXRjLlxuICpcbiAqIFwic3VnYXJcIiBwcm9wZXJ0aWVzIGFyZSBhbHNvIGRlZmluZWQgZm9yIGNvbW1vbiBjYXNlcy4gQ3VycmVudGx5IHByb3ZpZGluZzpcbiAqXG4gKiAgIC0gLm5vQ29udGVudFxuICogICAtIC5iYWRSZXF1ZXN0XG4gKiAgIC0gLnVuYXV0aG9yaXplZFxuICogICAtIC5ub3RBY2NlcHRhYmxlXG4gKiAgIC0gLm5vdEZvdW5kXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldFN0YXR1c1Byb3BlcnRpZXMgPSBmdW5jdGlvbihzdGF0dXMpe1xuICAvLyBoYW5kbGUgSUU5IGJ1ZzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDA0Njk3Mi9tc2llLXJldHVybnMtc3RhdHVzLWNvZGUtb2YtMTIyMy1mb3ItYWpheC1yZXF1ZXN0XG4gIGlmIChzdGF0dXMgPT09IDEyMjMpIHtcbiAgICBzdGF0dXMgPSAyMDQ7XG4gIH1cblxuICB2YXIgdHlwZSA9IHN0YXR1cyAvIDEwMCB8IDA7XG5cbiAgLy8gc3RhdHVzIC8gY2xhc3NcbiAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIHRoaXMuc3RhdHVzVHlwZSA9IHR5cGU7XG5cbiAgLy8gYmFzaWNzXG4gIHRoaXMuaW5mbyA9IDEgPT0gdHlwZTtcbiAgdGhpcy5vayA9IDIgPT0gdHlwZTtcbiAgdGhpcy5jbGllbnRFcnJvciA9IDQgPT0gdHlwZTtcbiAgdGhpcy5zZXJ2ZXJFcnJvciA9IDUgPT0gdHlwZTtcbiAgdGhpcy5lcnJvciA9ICg0ID09IHR5cGUgfHwgNSA9PSB0eXBlKVxuICAgID8gdGhpcy50b0Vycm9yKClcbiAgICA6IGZhbHNlO1xuXG4gIC8vIHN1Z2FyXG4gIHRoaXMuYWNjZXB0ZWQgPSAyMDIgPT0gc3RhdHVzO1xuICB0aGlzLm5vQ29udGVudCA9IDIwNCA9PSBzdGF0dXM7XG4gIHRoaXMuYmFkUmVxdWVzdCA9IDQwMCA9PSBzdGF0dXM7XG4gIHRoaXMudW5hdXRob3JpemVkID0gNDAxID09IHN0YXR1cztcbiAgdGhpcy5ub3RBY2NlcHRhYmxlID0gNDA2ID09IHN0YXR1cztcbiAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XG4gIHRoaXMuZm9yYmlkZGVuID0gNDAzID09IHN0YXR1cztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGBFcnJvcmAgcmVwcmVzZW50YXRpdmUgb2YgdGhpcyByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJuIHtFcnJvcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnRvRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgcmVxID0gdGhpcy5yZXE7XG4gIHZhciBtZXRob2QgPSByZXEubWV0aG9kO1xuICB2YXIgdXJsID0gcmVxLnVybDtcblxuICB2YXIgbXNnID0gJ2Nhbm5vdCAnICsgbWV0aG9kICsgJyAnICsgdXJsICsgJyAoJyArIHRoaXMuc3RhdHVzICsgJyknO1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IG1ldGhvZDtcbiAgZXJyLnVybCA9IHVybDtcblxuICByZXR1cm4gZXJyO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5yZXF1ZXN0LlJlc3BvbnNlID0gUmVzcG9uc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdGAgd2l0aCB0aGUgZ2l2ZW4gYG1ldGhvZGAgYW5kIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdChtZXRob2QsIHVybCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIEVtaXR0ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeSB8fCBbXTtcbiAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmhlYWRlciA9IHt9O1xuICB0aGlzLl9oZWFkZXIgPSB7fTtcbiAgdGhpcy5vbignZW5kJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgZXJyID0gbnVsbDtcbiAgICB2YXIgcmVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXMgPSBuZXcgUmVzcG9uc2Uoc2VsZik7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ1BhcnNlciBpcyB1bmFibGUgdG8gcGFyc2UgdGhlIHJlc3BvbnNlJyk7XG4gICAgICBlcnIucGFyc2UgPSB0cnVlO1xuICAgICAgZXJyLm9yaWdpbmFsID0gZTtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVycik7XG4gICAgfVxuXG4gICAgc2VsZi5lbWl0KCdyZXNwb25zZScsIHJlcyk7XG5cbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXR1cm4gc2VsZi5jYWxsYmFjayhlcnIsIHJlcyk7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3X2VyciA9IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCB8fCAnVW5zdWNjZXNzZnVsIEhUVFAgcmVzcG9uc2UnKTtcbiAgICBuZXdfZXJyLm9yaWdpbmFsID0gZXJyO1xuICAgIG5ld19lcnIucmVzcG9uc2UgPSByZXM7XG4gICAgbmV3X2Vyci5zdGF0dXMgPSByZXMuc3RhdHVzO1xuXG4gICAgc2VsZi5jYWxsYmFjayhuZXdfZXJyLCByZXMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNaXhpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogQWxsb3cgZm9yIGV4dGVuc2lvblxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGZuKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBTZXQgdGltZW91dCB0byBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbihtcyl7XG4gIHRoaXMuX3RpbWVvdXQgPSBtcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsZWFyIHByZXZpb3VzIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuX3RpbWVvdXQgPSAwO1xuICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWJvcnQgdGhlIHJlcXVlc3QsIGFuZCBjbGVhciBwb3RlbnRpYWwgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCl7XG4gIGlmICh0aGlzLmFib3J0ZWQpIHJldHVybjtcbiAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcbiAgdGhpcy54aHIuYWJvcnQoKTtcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgdGhpcy5lbWl0KCdhYm9ydCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciBgZmllbGRgIHRvIGB2YWxgLCBvciBtdWx0aXBsZSBmaWVsZHMgd2l0aCBvbmUgb2JqZWN0LlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5zZXQoJ1gtQVBJLUtleScsICdmb29iYXInKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1BUEktS2V5JzogJ2Zvb2JhcicgfSlcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGZpZWxkXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oZmllbGQsIHZhbCl7XG4gIGlmIChpc09iamVjdChmaWVsZCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZmllbGQpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGhlYWRlciBgZmllbGRgLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAudW5zZXQoJ1VzZXItQWdlbnQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgaGVhZGVyIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5nZXRIZWFkZXIgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBDb250ZW50LVR5cGUgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCd4bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ2FwcGxpY2F0aW9uL3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQ29udGVudC1UeXBlJywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBY2NlcHQgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMuanNvbiA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFjY2VwdFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFjY2VwdCA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQWNjZXB0JywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBdXRob3JpemF0aW9uIGZpZWxkIHZhbHVlIHdpdGggYHVzZXJgIGFuZCBgcGFzc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXV0aCA9IGZ1bmN0aW9uKHVzZXIsIHBhc3Mpe1xuICB2YXIgc3RyID0gYnRvYSh1c2VyICsgJzonICsgcGFzcyk7XG4gIHRoaXMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBzdHIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuKiBBZGQgcXVlcnktc3RyaW5nIGB2YWxgLlxuKlxuKiBFeGFtcGxlczpcbipcbiogICByZXF1ZXN0LmdldCgnL3Nob2VzJylcbiogICAgIC5xdWVyeSgnc2l6ZT0xMCcpXG4qICAgICAucXVlcnkoeyBjb2xvcjogJ2JsdWUnIH0pXG4qXG4qIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdmFsXG4qIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuKiBAYXBpIHB1YmxpY1xuKi9cblxuUmVxdWVzdC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbih2YWwpe1xuICBpZiAoJ3N0cmluZycgIT0gdHlwZW9mIHZhbCkgdmFsID0gc2VyaWFsaXplKHZhbCk7XG4gIGlmICh2YWwpIHRoaXMuX3F1ZXJ5LnB1c2godmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFdyaXRlIHRoZSBmaWVsZCBgbmFtZWAgYW5kIGB2YWxgIGZvciBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICogcmVxdWVzdCBib2RpZXMuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoJ2ZvbycsICdiYXInKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ3xCbG9ifEZpbGV9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24obmFtZSwgdmFsKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgcm9vdC5Gb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQobmFtZSwgdmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFF1ZXVlIHRoZSBnaXZlbiBgZmlsZWAgYXMgYW4gYXR0YWNobWVudCB0byB0aGUgc3BlY2lmaWVkIGBmaWVsZGAsXG4gKiB3aXRoIG9wdGlvbmFsIGBmaWxlbmFtZWAuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuYXR0YWNoKG5ldyBCbG9iKFsnPGEgaWQ9XCJhXCI+PGIgaWQ9XCJiXCI+aGV5ITwvYj48L2E+J10sIHsgdHlwZTogXCJ0ZXh0L2h0bWxcIn0pKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHBhcmFtIHtCbG9ifEZpbGV9IGZpbGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uKGZpZWxkLCBmaWxlLCBmaWxlbmFtZSl7XG4gIGlmICghdGhpcy5fZm9ybURhdGEpIHRoaXMuX2Zvcm1EYXRhID0gbmV3IHJvb3QuRm9ybURhdGEoKTtcbiAgdGhpcy5fZm9ybURhdGEuYXBwZW5kKGZpZWxkLCBmaWxlLCBmaWxlbmFtZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kIGBkYXRhYCwgZGVmYXVsdGluZyB0aGUgYC50eXBlKClgIHRvIFwianNvblwiIHdoZW5cbiAqIGFuIG9iamVjdCBpcyBnaXZlbi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBxdWVyeXN0cmluZ1xuICogICAgICAgcmVxdWVzdC5nZXQoJy9zZWFyY2gnKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG11bHRpcGxlIGRhdGEgXCJ3cml0ZXNcIlxuICogICAgICAgcmVxdWVzdC5nZXQoJy9zZWFyY2gnKVxuICogICAgICAgICAuc2VuZCh7IHNlYXJjaDogJ3F1ZXJ5JyB9KVxuICogICAgICAgICAuc2VuZCh7IHJhbmdlOiAnMS4uNScgfSlcbiAqICAgICAgICAgLnNlbmQoeyBvcmRlcjogJ2Rlc2MnIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnanNvbicpXG4gKiAgICAgICAgIC5zZW5kKCd7XCJuYW1lXCI6XCJ0alwifSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwgeC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCgnbmFtZT10aicpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGRlZmF1bHRzIHRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAqICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gICogICAgICAgIC5zZW5kKCduYW1lPXRvYmknKVxuICAqICAgICAgICAuc2VuZCgnc3BlY2llcz1mZXJyZXQnKVxuICAqICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZGF0YVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihkYXRhKXtcbiAgdmFyIG9iaiA9IGlzT2JqZWN0KGRhdGEpO1xuICB2YXIgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcblxuICAvLyBtZXJnZVxuICBpZiAob2JqICYmIGlzT2JqZWN0KHRoaXMuX2RhdGEpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGRhdGEpIHtcbiAgICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnZm9ybScpO1xuICAgIHR5cGUgPSB0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnID09IHR5cGUpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhXG4gICAgICAgID8gdGhpcy5fZGF0YSArICcmJyArIGRhdGFcbiAgICAgICAgOiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gKHRoaXMuX2RhdGEgfHwgJycpICsgZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuICBpZiAoIW9iaiB8fCBpc0hvc3QoZGF0YSkpIHJldHVybiB0aGlzO1xuICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnanNvbicpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW52b2tlIHRoZSBjYWxsYmFjayB3aXRoIGBlcnJgIGFuZCBgcmVzYFxuICogYW5kIGhhbmRsZSBhcml0eSBjaGVjay5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2FsbGJhY2sgPSBmdW5jdGlvbihlcnIsIHJlcyl7XG4gIHZhciBmbiA9IHRoaXMuX2NhbGxiYWNrO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICBmbihlcnIsIHJlcyk7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHgtZG9tYWluIGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyb3NzRG9tYWluRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCdPcmlnaW4gaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJyk7XG4gIGVyci5jcm9zc0RvbWFpbiA9IHRydWU7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggdGltZW91dCBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50aW1lb3V0RXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3RpbWVvdXQgb2YgJyArIHRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnKTtcbiAgZXJyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0cmFuc21pc3Npb24gb2YgY29va2llcyB3aXRoIHgtZG9tYWluIHJlcXVlc3RzLlxuICpcbiAqIE5vdGUgdGhhdCBmb3IgdGhpcyB0byB3b3JrIHRoZSBvcmlnaW4gbXVzdCBub3QgYmVcbiAqIHVzaW5nIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIgd2l0aCBhIHdpbGRjYXJkLFxuICogYW5kIGFsc28gbXVzdCBzZXQgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiXG4gKiB0byBcInRydWVcIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuX3dpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbml0aWF0ZSByZXF1ZXN0LCBpbnZva2luZyBjYWxsYmFjayBgZm4ocmVzKWBcbiAqIHdpdGggYW4gaW5zdGFuY2VvZiBgUmVzcG9uc2VgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB4aHIgPSB0aGlzLnhociA9IHJlcXVlc3QuZ2V0WEhSKCk7XG4gIHZhciBxdWVyeSA9IHRoaXMuX3F1ZXJ5LmpvaW4oJyYnKTtcbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICB2YXIgZGF0YSA9IHRoaXMuX2Zvcm1EYXRhIHx8IHRoaXMuX2RhdGE7XG5cbiAgLy8gc3RvcmUgY2FsbGJhY2tcbiAgdGhpcy5fY2FsbGJhY2sgPSBmbiB8fCBub29wO1xuXG4gIC8vIHN0YXRlIGNoYW5nZVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICBpZiAoNCAhPSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuXG4gICAgLy8gSW4gSUU5LCByZWFkcyB0byBhbnkgcHJvcGVydHkgKGUuZy4gc3RhdHVzKSBvZmYgb2YgYW4gYWJvcnRlZCBYSFIgd2lsbFxuICAgIC8vIHJlc3VsdCBpbiB0aGUgZXJyb3IgXCJDb3VsZCBub3QgY29tcGxldGUgdGhlIG9wZXJhdGlvbiBkdWUgdG8gZXJyb3IgYzAwYzAyM2ZcIlxuICAgIHZhciBzdGF0dXM7XG4gICAgdHJ5IHsgc3RhdHVzID0geGhyLnN0YXR1cyB9IGNhdGNoKGUpIHsgc3RhdHVzID0gMDsgfVxuXG4gICAgaWYgKDAgPT0gc3RhdHVzKSB7XG4gICAgICBpZiAoc2VsZi50aW1lZG91dCkgcmV0dXJuIHNlbGYudGltZW91dEVycm9yKCk7XG4gICAgICBpZiAoc2VsZi5hYm9ydGVkKSByZXR1cm47XG4gICAgICByZXR1cm4gc2VsZi5jcm9zc0RvbWFpbkVycm9yKCk7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgnZW5kJyk7XG4gIH07XG5cbiAgLy8gcHJvZ3Jlc3NcbiAgdmFyIGhhbmRsZVByb2dyZXNzID0gZnVuY3Rpb24oZSl7XG4gICAgaWYgKGUudG90YWwgPiAwKSB7XG4gICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgncHJvZ3Jlc3MnLCBlKTtcbiAgfTtcbiAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcztcbiAgfVxuICB0cnkge1xuICAgIGlmICh4aHIudXBsb2FkICYmIHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XG4gICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge1xuICAgIC8vIEFjY2Vzc2luZyB4aHIudXBsb2FkIGZhaWxzIGluIElFIGZyb20gYSB3ZWIgd29ya2VyLCBzbyBqdXN0IHByZXRlbmQgaXQgZG9lc24ndCBleGlzdC5cbiAgICAvLyBSZXBvcnRlZCBoZXJlOlxuICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvODM3MjQ1L3htbGh0dHByZXF1ZXN0LXVwbG9hZC10aHJvd3MtaW52YWxpZC1hcmd1bWVudC13aGVuLXVzZWQtZnJvbS13ZWItd29ya2VyLWNvbnRleHRcbiAgfVxuXG4gIC8vIHRpbWVvdXRcbiAgaWYgKHRpbWVvdXQgJiYgIXRoaXMuX3RpbWVyKSB7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBzZWxmLnRpbWVkb3V0ID0gdHJ1ZTtcbiAgICAgIHNlbGYuYWJvcnQoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIC8vIHF1ZXJ5c3RyaW5nXG4gIGlmIChxdWVyeSkge1xuICAgIHF1ZXJ5ID0gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QocXVlcnkpO1xuICAgIHRoaXMudXJsICs9IH50aGlzLnVybC5pbmRleE9mKCc/JylcbiAgICAgID8gJyYnICsgcXVlcnlcbiAgICAgIDogJz8nICsgcXVlcnk7XG4gIH1cblxuICAvLyBpbml0aWF0ZSByZXF1ZXN0XG4gIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG5cbiAgLy8gQ09SU1xuICBpZiAodGhpcy5fd2l0aENyZWRlbnRpYWxzKSB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAvLyBib2R5XG4gIGlmICgnR0VUJyAhPSB0aGlzLm1ldGhvZCAmJiAnSEVBRCcgIT0gdGhpcy5tZXRob2QgJiYgJ3N0cmluZycgIT0gdHlwZW9mIGRhdGEgJiYgIWlzSG9zdChkYXRhKSkge1xuICAgIC8vIHNlcmlhbGl6ZSBzdHVmZlxuICAgIHZhciBjb250ZW50VHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICB2YXIgc2VyaWFsaXplID0gcmVxdWVzdC5zZXJpYWxpemVbY29udGVudFR5cGUgPyBjb250ZW50VHlwZS5zcGxpdCgnOycpWzBdIDogJyddO1xuICAgIGlmIChzZXJpYWxpemUpIGRhdGEgPSBzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICAvLyBzZXQgaGVhZGVyIGZpZWxkc1xuICBmb3IgKHZhciBmaWVsZCBpbiB0aGlzLmhlYWRlcikge1xuICAgIGlmIChudWxsID09IHRoaXMuaGVhZGVyW2ZpZWxkXSkgY29udGludWU7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XG4gIH1cblxuICAvLyBzZW5kIHN0dWZmXG4gIHRoaXMuZW1pdCgncmVxdWVzdCcsIHRoaXMpO1xuICB4aHIuc2VuZChkYXRhKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEZhdXggcHJvbWlzZSBzdXBwb3J0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XG4gIHJldHVybiB0aGlzLmVuZChmdW5jdGlvbihlcnIsIHJlcykge1xuICAgIGVyciA/IHJlamVjdChlcnIpIDogZnVsZmlsbChyZXMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFeHBvc2UgYFJlcXVlc3RgLlxuICovXG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogSXNzdWUgYSByZXF1ZXN0OlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgIHJlcXVlc3QoJ0dFVCcsICcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnLCBjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdXJsIG9yIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIC8vIGNhbGxiYWNrXG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB1cmwpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QoJ0dFVCcsIG1ldGhvZCkuZW5kKHVybCk7XG4gIH1cblxuICAvLyB1cmwgZmlyc3RcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVxdWVzdChtZXRob2QsIHVybCk7XG59XG5cbi8qKlxuICogR0VUIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmdldCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnR0VUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEucXVlcnkoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEhFQUQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuaGVhZCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnSEVBRCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIERFTEVURSBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5kZWwgPSBmdW5jdGlvbih1cmwsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0RFTEVURScsIHVybCk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBBVENIIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucGF0Y2ggPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BBVENIJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUE9TVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IGRhdGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBvc3QgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BPU1QnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQVVQgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wdXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BVVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgcmVxdWVzdGAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1ZXN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3VwZXJhZ2VudC9saWIvY2xpZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLyoqXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufTtcblxuLyoqXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICh0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSlcbiAgICAucHVzaChmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIGZ1bmN0aW9uIG9uKCkge1xuICAgIHNlbGYub2ZmKGV2ZW50LCBvbik7XG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIG9uLmZuID0gZm47XG4gIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgLy8gYWxsXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxuICB2YXIgY2I7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG5cbiAgaWYgKGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N1cGVyYWdlbnQvfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogUmVkdWNlIGBhcnJgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge01peGVkfSBpbml0aWFsXG4gKlxuICogVE9ETzogY29tYmF0aWJsZSBlcnJvciBoYW5kbGluZz9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgZm4sIGluaXRpYWwpeyAgXG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIGN1cnIgPSBhcmd1bWVudHMubGVuZ3RoID09IDNcbiAgICA/IGluaXRpYWxcbiAgICA6IGFycltpZHgrK107XG5cbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGN1cnIgPSBmbi5jYWxsKG51bGwsIGN1cnIsIGFycltpZHhdLCArK2lkeCwgYXJyKTtcbiAgfVxuICBcbiAgcmV0dXJuIGN1cnI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N1cGVyYWdlbnQvfi9yZWR1Y2UtY29tcG9uZW50L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICogYXN5bmNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jYW9sYW4vYXN5bmNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMC0yMDE0IENhb2xhbiBNY01haG9uXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBhc3luYyA9IHt9O1xuICAgIGZ1bmN0aW9uIG5vb3AoKSB7fVxuICAgIGZ1bmN0aW9uIGlkZW50aXR5KHYpIHtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvQm9vbCh2KSB7XG4gICAgICAgIHJldHVybiAhIXY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vdElkKHYpIHtcbiAgICAgICAgcmV0dXJuICF2O1xuICAgIH1cblxuICAgIC8vIGdsb2JhbCBvbiB0aGUgc2VydmVyLCB3aW5kb3cgaW4gdGhlIGJyb3dzZXJcbiAgICB2YXIgcHJldmlvdXNfYXN5bmM7XG5cbiAgICAvLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCAoYHNlbGZgKSBpbiB0aGUgYnJvd3NlciwgYGdsb2JhbGBcbiAgICAvLyBvbiB0aGUgc2VydmVyLCBvciBgdGhpc2AgaW4gc29tZSB2aXJ0dWFsIG1hY2hpbmVzLiBXZSB1c2UgYHNlbGZgXG4gICAgLy8gaW5zdGVhZCBvZiBgd2luZG93YCBmb3IgYFdlYldvcmtlcmAgc3VwcG9ydC5cbiAgICB2YXIgcm9vdCA9IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGYgJiYgc2VsZiB8fFxuICAgICAgICAgICAgdHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgJiYgZ2xvYmFsLmdsb2JhbCA9PT0gZ2xvYmFsICYmIGdsb2JhbCB8fFxuICAgICAgICAgICAgdGhpcztcblxuICAgIGlmIChyb290ICE9IG51bGwpIHtcbiAgICAgICAgcHJldmlvdXNfYXN5bmMgPSByb290LmFzeW5jO1xuICAgIH1cblxuICAgIGFzeW5jLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvb3QuYXN5bmMgPSBwcmV2aW91c19hc3luYztcbiAgICAgICAgcmV0dXJuIGFzeW5jO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBvbmx5X29uY2UoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGZuID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJDYWxsYmFjayB3YXMgYWxyZWFkeSBjYWxsZWQuXCIpO1xuICAgICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGZuID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfb25jZShmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoZm4gPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBmbiA9IG51bGw7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8vLyBjcm9zcy1icm93c2VyIGNvbXBhdGlibGl0eSBmdW5jdGlvbnMgLy8vL1xuXG4gICAgdmFyIF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbiAgICB2YXIgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcblxuICAgIC8vIFBvcnRlZCBmcm9tIHVuZGVyc2NvcmUuanMgaXNPYmplY3RcbiAgICB2YXIgX2lzT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgISFvYmo7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9pc0FycmF5TGlrZShhcnIpIHtcbiAgICAgICAgcmV0dXJuIF9pc0FycmF5KGFycikgfHwgKFxuICAgICAgICAgICAgLy8gaGFzIGEgcG9zaXRpdmUgaW50ZWdlciBsZW5ndGggcHJvcGVydHlcbiAgICAgICAgICAgIHR5cGVvZiBhcnIubGVuZ3RoID09PSBcIm51bWJlclwiICYmXG4gICAgICAgICAgICBhcnIubGVuZ3RoID49IDAgJiZcbiAgICAgICAgICAgIGFyci5sZW5ndGggJSAxID09PSAwXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2VhY2goY29sbCwgaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIF9pc0FycmF5TGlrZShjb2xsKSA/XG4gICAgICAgICAgICBfYXJyYXlFYWNoKGNvbGwsIGl0ZXJhdG9yKSA6XG4gICAgICAgICAgICBfZm9yRWFjaE9mKGNvbGwsIGl0ZXJhdG9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYXJyYXlFYWNoKGFyciwgaXRlcmF0b3IpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBpdGVyYXRvcihhcnJbaW5kZXhdLCBpbmRleCwgYXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9tYXAoYXJyLCBpdGVyYXRvcikge1xuICAgICAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGgsXG4gICAgICAgICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0b3IoYXJyW2luZGV4XSwgaW5kZXgsIGFycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmFuZ2UoY291bnQpIHtcbiAgICAgICAgcmV0dXJuIF9tYXAoQXJyYXkoY291bnQpLCBmdW5jdGlvbiAodiwgaSkgeyByZXR1cm4gaTsgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3JlZHVjZShhcnIsIGl0ZXJhdG9yLCBtZW1vKSB7XG4gICAgICAgIF9hcnJheUVhY2goYXJyLCBmdW5jdGlvbiAoeCwgaSwgYSkge1xuICAgICAgICAgICAgbWVtbyA9IGl0ZXJhdG9yKG1lbW8sIHgsIGksIGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2ZvckVhY2hPZihvYmplY3QsIGl0ZXJhdG9yKSB7XG4gICAgICAgIF9hcnJheUVhY2goX2tleXMob2JqZWN0KSwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaXRlcmF0b3Iob2JqZWN0W2tleV0sIGtleSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pbmRleE9mKGFyciwgaXRlbSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFycltpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHZhciBfa2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgayBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9rZXlJdGVyYXRvcihjb2xsKSB7XG4gICAgICAgIHZhciBpID0gLTE7XG4gICAgICAgIHZhciBsZW47XG4gICAgICAgIHZhciBrZXlzO1xuICAgICAgICBpZiAoX2lzQXJyYXlMaWtlKGNvbGwpKSB7XG4gICAgICAgICAgICBsZW4gPSBjb2xsLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gaSA8IGxlbiA/IGkgOiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleXMgPSBfa2V5cyhjb2xsKTtcbiAgICAgICAgICAgIGxlbiA9IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIHJldHVybiBpIDwgbGVuID8ga2V5c1tpXSA6IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2ltaWxhciB0byBFUzYncyByZXN0IHBhcmFtIChodHRwOi8vYXJpeWEub2ZpbGFicy5jb20vMjAxMy8wMy9lczYtYW5kLXJlc3QtcGFyYW1ldGVyLmh0bWwpXG4gICAgLy8gVGhpcyBhY2N1bXVsYXRlcyB0aGUgYXJndW1lbnRzIHBhc3NlZCBpbnRvIGFuIGFycmF5LCBhZnRlciBhIGdpdmVuIGluZGV4LlxuICAgIC8vIEZyb20gdW5kZXJzY29yZS5qcyAoaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL3B1bGwvMjE0MCkuXG4gICAgZnVuY3Rpb24gX3Jlc3RQYXJhbShmdW5jLCBzdGFydEluZGV4KSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBzdGFydEluZGV4ID09IG51bGwgPyBmdW5jLmxlbmd0aCAtIDEgOiArc3RhcnRJbmRleDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KGFyZ3VtZW50cy5sZW5ndGggLSBzdGFydEluZGV4LCAwKTtcbiAgICAgICAgICAgIHZhciByZXN0ID0gQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICByZXN0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCArIHN0YXJ0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChzdGFydEluZGV4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIHJlc3QpO1xuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmd1bWVudHNbMF0sIHJlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ3VycmVudGx5IHVudXNlZCBidXQgaGFuZGxlIGNhc2VzIG91dHNpZGUgb2YgdGhlIHN3aXRjaCBzdGF0ZW1lbnQ6XG4gICAgICAgICAgICAvLyB2YXIgYXJncyA9IEFycmF5KHN0YXJ0SW5kZXggKyAxKTtcbiAgICAgICAgICAgIC8vIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHN0YXJ0SW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIC8vICAgICBhcmdzW2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBhcmdzW3N0YXJ0SW5kZXhdID0gcmVzdDtcbiAgICAgICAgICAgIC8vIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF93aXRob3V0SW5kZXgoaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmF0b3IodmFsdWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLy8vIGV4cG9ydGVkIGFzeW5jIG1vZHVsZSBmdW5jdGlvbnMgLy8vL1xuXG4gICAgLy8vLyBuZXh0VGljayBpbXBsZW1lbnRhdGlvbiB3aXRoIGJyb3dzZXItY29tcGF0aWJsZSBmYWxsYmFjayAvLy8vXG5cbiAgICAvLyBjYXB0dXJlIHRoZSBnbG9iYWwgcmVmZXJlbmNlIHRvIGd1YXJkIGFnYWluc3QgZmFrZVRpbWVyIG1vY2tzXG4gICAgdmFyIF9zZXRJbW1lZGlhdGUgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmIHNldEltbWVkaWF0ZTtcblxuICAgIHZhciBfZGVsYXkgPSBfc2V0SW1tZWRpYXRlID8gZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgLy8gbm90IGEgZGlyZWN0IGFsaWFzIGZvciBJRTEwIGNvbXBhdGliaWxpdHlcbiAgICAgICAgX3NldEltbWVkaWF0ZShmbik7XG4gICAgfSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm9jZXNzLm5leHRUaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFzeW5jLm5leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcbiAgICB9IGVsc2Uge1xuICAgICAgICBhc3luYy5uZXh0VGljayA9IF9kZWxheTtcbiAgICB9XG4gICAgYXN5bmMuc2V0SW1tZWRpYXRlID0gX3NldEltbWVkaWF0ZSA/IF9kZWxheSA6IGFzeW5jLm5leHRUaWNrO1xuXG5cbiAgICBhc3luYy5mb3JFYWNoID1cbiAgICBhc3luYy5lYWNoID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBhc3luYy5lYWNoT2YoYXJyLCBfd2l0aG91dEluZGV4KGl0ZXJhdG9yKSwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5mb3JFYWNoU2VyaWVzID1cbiAgICBhc3luYy5lYWNoU2VyaWVzID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBhc3luYy5lYWNoT2ZTZXJpZXMoYXJyLCBfd2l0aG91dEluZGV4KGl0ZXJhdG9yKSwgY2FsbGJhY2spO1xuICAgIH07XG5cblxuICAgIGFzeW5jLmZvckVhY2hMaW1pdCA9XG4gICAgYXN5bmMuZWFjaExpbWl0ID0gZnVuY3Rpb24gKGFyciwgbGltaXQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gX2VhY2hPZkxpbWl0KGxpbWl0KShhcnIsIF93aXRob3V0SW5kZXgoaXRlcmF0b3IpLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLmZvckVhY2hPZiA9XG4gICAgYXN5bmMuZWFjaE9mID0gZnVuY3Rpb24gKG9iamVjdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gX29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIG9iamVjdCA9IG9iamVjdCB8fCBbXTtcbiAgICAgICAgdmFyIHNpemUgPSBfaXNBcnJheUxpa2Uob2JqZWN0KSA/IG9iamVjdC5sZW5ndGggOiBfa2V5cyhvYmplY3QpLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIGlmICghc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIF9lYWNoKG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKG9iamVjdFtrZXldLCBrZXksIG9ubHlfb25jZShkb25lKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkID49IHNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLmZvckVhY2hPZlNlcmllcyA9XG4gICAgYXN5bmMuZWFjaE9mU2VyaWVzID0gZnVuY3Rpb24gKG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gX29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIG9iaiA9IG9iaiB8fCBbXTtcbiAgICAgICAgdmFyIG5leHRLZXkgPSBfa2V5SXRlcmF0b3Iob2JqKTtcbiAgICAgICAgdmFyIGtleSA9IG5leHRLZXkoKTtcbiAgICAgICAgZnVuY3Rpb24gaXRlcmF0ZSgpIHtcbiAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVyYXRvcihvYmpba2V5XSwga2V5LCBvbmx5X29uY2UoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IG5leHRLZXkoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhpdGVyYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGl0ZXJhdGUoKTtcbiAgICB9O1xuXG5cblxuICAgIGFzeW5jLmZvckVhY2hPZkxpbWl0ID1cbiAgICBhc3luYy5lYWNoT2ZMaW1pdCA9IGZ1bmN0aW9uIChvYmosIGxpbWl0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgX2VhY2hPZkxpbWl0KGxpbWl0KShvYmosIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9lYWNoT2ZMaW1pdChsaW1pdCkge1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gX29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgICAgICBvYmogPSBvYmogfHwgW107XG4gICAgICAgICAgICB2YXIgbmV4dEtleSA9IF9rZXlJdGVyYXRvcihvYmopO1xuICAgICAgICAgICAgaWYgKGxpbWl0IDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHJ1bm5pbmcgPSAwO1xuICAgICAgICAgICAgdmFyIGVycm9yZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgKGZ1bmN0aW9uIHJlcGxlbmlzaCAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvbmUgJiYgcnVubmluZyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAocnVubmluZyA8IGxpbWl0ICYmICFlcnJvcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBuZXh0S2V5KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3Iob2JqW2tleV0sIGtleSwgb25seV9vbmNlKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGVuaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZG9QYXJhbGxlbChmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4oYXN5bmMuZWFjaE9mLCBvYmosIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRvUGFyYWxsZWxMaW1pdChmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgbGltaXQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIGZuKF9lYWNoT2ZMaW1pdChsaW1pdCksIG9iaiwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZG9TZXJpZXMoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIGZuKGFzeW5jLmVhY2hPZlNlcmllcywgb2JqLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hc3luY01hcChlYWNoZm4sIGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gX29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih2YWx1ZSwgZnVuY3Rpb24gKGVyciwgdikge1xuICAgICAgICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdjtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jLm1hcCA9IGRvUGFyYWxsZWwoX2FzeW5jTWFwKTtcbiAgICBhc3luYy5tYXBTZXJpZXMgPSBkb1NlcmllcyhfYXN5bmNNYXApO1xuICAgIGFzeW5jLm1hcExpbWl0ID0gZG9QYXJhbGxlbExpbWl0KF9hc3luY01hcCk7XG5cbiAgICAvLyByZWR1Y2Ugb25seSBoYXMgYSBzZXJpZXMgdmVyc2lvbiwgYXMgZG9pbmcgcmVkdWNlIGluIHBhcmFsbGVsIHdvbid0XG4gICAgLy8gd29yayBpbiBtYW55IHNpdHVhdGlvbnMuXG4gICAgYXN5bmMuaW5qZWN0ID1cbiAgICBhc3luYy5mb2xkbCA9XG4gICAgYXN5bmMucmVkdWNlID0gZnVuY3Rpb24gKGFyciwgbWVtbywgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGFzeW5jLmVhY2hPZlNlcmllcyhhcnIsIGZ1bmN0aW9uICh4LCBpLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IobWVtbywgeCwgZnVuY3Rpb24gKGVyciwgdikge1xuICAgICAgICAgICAgICAgIG1lbW8gPSB2O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyIHx8IG51bGwsIG1lbW8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMuZm9sZHIgPVxuICAgIGFzeW5jLnJlZHVjZVJpZ2h0ID0gZnVuY3Rpb24gKGFyciwgbWVtbywgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXZlcnNlZCA9IF9tYXAoYXJyLCBpZGVudGl0eSkucmV2ZXJzZSgpO1xuICAgICAgICBhc3luYy5yZWR1Y2UocmV2ZXJzZWQsIG1lbW8sIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9maWx0ZXIoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7aW5kZXg6IGluZGV4LCB2YWx1ZTogeH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKF9tYXAocmVzdWx0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xuICAgICAgICAgICAgfSksIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jLnNlbGVjdCA9XG4gICAgYXN5bmMuZmlsdGVyID0gZG9QYXJhbGxlbChfZmlsdGVyKTtcblxuICAgIGFzeW5jLnNlbGVjdExpbWl0ID1cbiAgICBhc3luYy5maWx0ZXJMaW1pdCA9IGRvUGFyYWxsZWxMaW1pdChfZmlsdGVyKTtcblxuICAgIGFzeW5jLnNlbGVjdFNlcmllcyA9XG4gICAgYXN5bmMuZmlsdGVyU2VyaWVzID0gZG9TZXJpZXMoX2ZpbHRlcik7XG5cbiAgICBmdW5jdGlvbiBfcmVqZWN0KGVhY2hmbiwgYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgX2ZpbHRlcihlYWNoZm4sIGFyciwgZnVuY3Rpb24odmFsdWUsIGNiKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih2YWx1ZSwgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGNiKCF2KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGFzeW5jLnJlamVjdCA9IGRvUGFyYWxsZWwoX3JlamVjdCk7XG4gICAgYXN5bmMucmVqZWN0TGltaXQgPSBkb1BhcmFsbGVsTGltaXQoX3JlamVjdCk7XG4gICAgYXN5bmMucmVqZWN0U2VyaWVzID0gZG9TZXJpZXMoX3JlamVjdCk7XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlVGVzdGVyKGVhY2hmbiwgY2hlY2ssIGdldFJlc3VsdCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJyLCBsaW1pdCwgaXRlcmF0b3IsIGNiKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgICAgICAgICAgIGlmIChjYikgY2IoZ2V0UmVzdWx0KGZhbHNlLCB2b2lkIDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGl0ZXJhdGVlKHgsIF8sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjYikgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNiICYmIGNoZWNrKHYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYihnZXRSZXN1bHQodHJ1ZSwgeCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IgPSBpdGVyYXRvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICBlYWNoZm4oYXJyLCBsaW1pdCwgaXRlcmF0ZWUsIGRvbmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYiA9IGl0ZXJhdG9yO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yID0gbGltaXQ7XG4gICAgICAgICAgICAgICAgZWFjaGZuKGFyciwgaXRlcmF0ZWUsIGRvbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jLmFueSA9XG4gICAgYXN5bmMuc29tZSA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mLCB0b0Jvb2wsIGlkZW50aXR5KTtcblxuICAgIGFzeW5jLnNvbWVMaW1pdCA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mTGltaXQsIHRvQm9vbCwgaWRlbnRpdHkpO1xuXG4gICAgYXN5bmMuYWxsID1cbiAgICBhc3luYy5ldmVyeSA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mLCBub3RJZCwgbm90SWQpO1xuXG4gICAgYXN5bmMuZXZlcnlMaW1pdCA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mTGltaXQsIG5vdElkLCBub3RJZCk7XG5cbiAgICBmdW5jdGlvbiBfZmluZEdldFJlc3VsdCh2LCB4KSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBhc3luYy5kZXRlY3QgPSBfY3JlYXRlVGVzdGVyKGFzeW5jLmVhY2hPZiwgaWRlbnRpdHksIF9maW5kR2V0UmVzdWx0KTtcbiAgICBhc3luYy5kZXRlY3RTZXJpZXMgPSBfY3JlYXRlVGVzdGVyKGFzeW5jLmVhY2hPZlNlcmllcywgaWRlbnRpdHksIF9maW5kR2V0UmVzdWx0KTtcbiAgICBhc3luYy5kZXRlY3RMaW1pdCA9IF9jcmVhdGVUZXN0ZXIoYXN5bmMuZWFjaE9mTGltaXQsIGlkZW50aXR5LCBfZmluZEdldFJlc3VsdCk7XG5cbiAgICBhc3luYy5zb3J0QnkgPSBmdW5jdGlvbiAoYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMubWFwKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LCBmdW5jdGlvbiAoZXJyLCBjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHt2YWx1ZTogeCwgY3JpdGVyaWE6IGNyaXRlcmlhfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIF9tYXAocmVzdWx0cy5zb3J0KGNvbXBhcmF0b3IpLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gY29tcGFyYXRvcihsZWZ0LCByaWdodCkge1xuICAgICAgICAgICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhLCBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuYXV0byA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBfb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICAgICAgdmFyIGtleXMgPSBfa2V5cyh0YXNrcyk7XG4gICAgICAgIHZhciByZW1haW5pbmdUYXNrcyA9IGtleXMubGVuZ3RoO1xuICAgICAgICBpZiAoIXJlbWFpbmluZ1Rhc2tzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0cyA9IHt9O1xuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoZm4pIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy51bnNoaWZ0KGZuKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihmbikge1xuICAgICAgICAgICAgdmFyIGlkeCA9IF9pbmRleE9mKGxpc3RlbmVycywgZm4pO1xuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSBsaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdGFza0NvbXBsZXRlKCkge1xuICAgICAgICAgICAgcmVtYWluaW5nVGFza3MtLTtcbiAgICAgICAgICAgIF9hcnJheUVhY2gobGlzdGVuZXJzLnNsaWNlKDApLCBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXJlbWFpbmluZ1Rhc2tzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9hcnJheUVhY2goa2V5cywgZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gX2lzQXJyYXkodGFza3Nba10pID8gdGFza3Nba106IFt0YXNrc1trXV07XG4gICAgICAgICAgICB2YXIgdGFza0NhbGxiYWNrID0gX3Jlc3RQYXJhbShmdW5jdGlvbihlcnIsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2FmZVJlc3VsdHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgX2ZvckVhY2hPZihyZXN1bHRzLCBmdW5jdGlvbih2YWwsIHJrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhZmVSZXN1bHRzW3JrZXldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2FmZVJlc3VsdHNba10gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIHNhZmVSZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNba10gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUodGFza0NvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByZXF1aXJlcyA9IHRhc2suc2xpY2UoMCwgdGFzay5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgZGVhZC1sb2Nrc1xuICAgICAgICAgICAgdmFyIGxlbiA9IHJlcXVpcmVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBkZXA7XG4gICAgICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoIShkZXAgPSB0YXNrc1tyZXF1aXJlc1tsZW5dXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYXMgaW5leGlzdGFudCBkZXBlbmRlbmN5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfaXNBcnJheShkZXApICYmIF9pbmRleE9mKGRlcCwgaykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhcyBjeWNsaWMgZGVwZW5kZW5jaWVzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWR1Y2UocmVxdWlyZXMsIGZ1bmN0aW9uIChhLCB4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoYSAmJiByZXN1bHRzLmhhc093blByb3BlcnR5KHgpKTtcbiAgICAgICAgICAgICAgICB9LCB0cnVlKSAmJiAhcmVzdWx0cy5oYXNPd25Qcm9wZXJ0eShrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgdGFza1t0YXNrLmxlbmd0aCAtIDFdKHRhc2tDYWxsYmFjaywgcmVzdWx0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVhZHkoKSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tbdGFzay5sZW5ndGggLSAxXSh0YXNrQ2FsbGJhY2ssIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG5cbiAgICBhc3luYy5yZXRyeSA9IGZ1bmN0aW9uKHRpbWVzLCB0YXNrLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgREVGQVVMVF9USU1FUyA9IDU7XG4gICAgICAgIHZhciBERUZBVUxUX0lOVEVSVkFMID0gMDtcblxuICAgICAgICB2YXIgYXR0ZW1wdHMgPSBbXTtcblxuICAgICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgICAgIHRpbWVzOiBERUZBVUxUX1RJTUVTLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IERFRkFVTFRfSU5URVJWQUxcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBwYXJzZVRpbWVzKGFjYywgdCl7XG4gICAgICAgICAgICBpZih0eXBlb2YgdCA9PT0gJ251bWJlcicpe1xuICAgICAgICAgICAgICAgIGFjYy50aW1lcyA9IHBhcnNlSW50KHQsIDEwKSB8fCBERUZBVUxUX1RJTUVTO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHR5cGVvZiB0ID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICAgICAgYWNjLnRpbWVzID0gcGFyc2VJbnQodC50aW1lcywgMTApIHx8IERFRkFVTFRfVElNRVM7XG4gICAgICAgICAgICAgICAgYWNjLmludGVydmFsID0gcGFyc2VJbnQodC5pbnRlcnZhbCwgMTApIHx8IERFRkFVTFRfSU5URVJWQUw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgYXJndW1lbnQgdHlwZSBmb3IgXFwndGltZXNcXCc6ICcgKyB0eXBlb2YgdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCA8IDEgfHwgbGVuZ3RoID4gMykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50cyAtIG11c3QgYmUgZWl0aGVyICh0YXNrKSwgKHRhc2ssIGNhbGxiYWNrKSwgKHRpbWVzLCB0YXNrKSBvciAodGltZXMsIHRhc2ssIGNhbGxiYWNrKScpO1xuICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA8PSAyICYmIHR5cGVvZiB0aW1lcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSB0YXNrO1xuICAgICAgICAgICAgdGFzayA9IHRpbWVzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGltZXMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHBhcnNlVGltZXMob3B0cywgdGltZXMpO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgb3B0cy50YXNrID0gdGFzaztcblxuICAgICAgICBmdW5jdGlvbiB3cmFwcGVkVGFzayh3cmFwcGVkQ2FsbGJhY2ssIHdyYXBwZWRSZXN1bHRzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiByZXRyeUF0dGVtcHQodGFzaywgZmluYWxBdHRlbXB0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNlcmllc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2soZnVuY3Rpb24oZXJyLCByZXN1bHQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzQ2FsbGJhY2soIWVyciB8fCBmaW5hbEF0dGVtcHQsIHtlcnI6IGVyciwgcmVzdWx0OiByZXN1bHR9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgd3JhcHBlZFJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJldHJ5SW50ZXJ2YWwoaW50ZXJ2YWwpe1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihzZXJpZXNDYWxsYmFjayl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllc0NhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUgKG9wdHMudGltZXMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBmaW5hbEF0dGVtcHQgPSAhKG9wdHMudGltZXMtPTEpO1xuICAgICAgICAgICAgICAgIGF0dGVtcHRzLnB1c2gocmV0cnlBdHRlbXB0KG9wdHMudGFzaywgZmluYWxBdHRlbXB0KSk7XG4gICAgICAgICAgICAgICAgaWYoIWZpbmFsQXR0ZW1wdCAmJiBvcHRzLmludGVydmFsID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHRzLnB1c2gocmV0cnlJbnRlcnZhbChvcHRzLmludGVydmFsKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhc3luYy5zZXJpZXMoYXR0ZW1wdHMsIGZ1bmN0aW9uKGRvbmUsIGRhdGEpe1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgKHdyYXBwZWRDYWxsYmFjayB8fCBvcHRzLmNhbGxiYWNrKShkYXRhLmVyciwgZGF0YS5yZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhIGNhbGxiYWNrIGlzIHBhc3NlZCwgcnVuIHRoaXMgYXMgYSBjb250cm9sbCBmbG93XG4gICAgICAgIHJldHVybiBvcHRzLmNhbGxiYWNrID8gd3JhcHBlZFRhc2soKSA6IHdyYXBwZWRUYXNrO1xuICAgIH07XG5cbiAgICBhc3luYy53YXRlcmZhbGwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gX29uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIGlmICghX2lzQXJyYXkodGFza3MpKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byB3YXRlcmZhbGwgbXVzdCBiZSBhbiBhcnJheSBvZiBmdW5jdGlvbnMnKTtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB3cmFwSXRlcmF0b3IoaXRlcmF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBfcmVzdFBhcmFtKGZ1bmN0aW9uIChlcnIsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIFtlcnJdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh3cmFwSXRlcmF0b3IobmV4dCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbnN1cmVBc3luYyhpdGVyYXRvcikuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgd3JhcEl0ZXJhdG9yKGFzeW5jLml0ZXJhdG9yKHRhc2tzKSkoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX3BhcmFsbGVsKGVhY2hmbiwgdGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBfaXNBcnJheUxpa2UodGFza3MpID8gW10gOiB7fTtcblxuICAgICAgICBlYWNoZm4odGFza3MsIGZ1bmN0aW9uICh0YXNrLCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0YXNrKF9yZXN0UGFyYW0oZnVuY3Rpb24gKGVyciwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHRzW2tleV0gPSBhcmdzO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jLnBhcmFsbGVsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBfcGFyYWxsZWwoYXN5bmMuZWFjaE9mLCB0YXNrcywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5wYXJhbGxlbExpbWl0ID0gZnVuY3Rpb24odGFza3MsIGxpbWl0LCBjYWxsYmFjaykge1xuICAgICAgICBfcGFyYWxsZWwoX2VhY2hPZkxpbWl0KGxpbWl0KSwgdGFza3MsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuc2VyaWVzID0gZnVuY3Rpb24odGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9wYXJhbGxlbChhc3luYy5lYWNoT2ZTZXJpZXMsIHRhc2tzLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLml0ZXJhdG9yID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VDYWxsYmFjayhpbmRleCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZm4oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrc1tpbmRleF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZuLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChpbmRleCA8IHRhc2tzLmxlbmd0aCAtIDEpID8gbWFrZUNhbGxiYWNrKGluZGV4ICsgMSk6IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYWtlQ2FsbGJhY2soMCk7XG4gICAgfTtcblxuICAgIGFzeW5jLmFwcGx5ID0gX3Jlc3RQYXJhbShmdW5jdGlvbiAoZm4sIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24gKGNhbGxBcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoXG4gICAgICAgICAgICAgICAgbnVsbCwgYXJncy5jb25jYXQoY2FsbEFyZ3MpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIF9jb25jYXQoZWFjaGZuLCBhcnIsIGZuLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBpbmRleCwgY2IpIHtcbiAgICAgICAgICAgIGZuKHgsIGZ1bmN0aW9uIChlcnIsIHkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHkgfHwgW10pO1xuICAgICAgICAgICAgICAgIGNiKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMuY29uY2F0ID0gZG9QYXJhbGxlbChfY29uY2F0KTtcbiAgICBhc3luYy5jb25jYXRTZXJpZXMgPSBkb1NlcmllcyhfY29uY2F0KTtcblxuICAgIGFzeW5jLndoaWxzdCA9IGZ1bmN0aW9uICh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICAgICAgICBpZiAodGVzdCgpKSB7XG4gICAgICAgICAgICB2YXIgbmV4dCA9IF9yZXN0UGFyYW0oZnVuY3Rpb24oZXJyLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGVzdC5hcHBseSh0aGlzLCBhcmdzKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvcihuZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0ZXJhdG9yKG5leHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuZG9XaGlsc3QgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjYWxscyA9IDA7XG4gICAgICAgIHJldHVybiBhc3luYy53aGlsc3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gKytjYWxscyA8PSAxIHx8IHRlc3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMudW50aWwgPSBmdW5jdGlvbiAodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBhc3luYy53aGlsc3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRlc3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuZG9VbnRpbCA9IGZ1bmN0aW9uIChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLmRvV2hpbHN0KGl0ZXJhdG9yLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGVzdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLmR1cmluZyA9IGZ1bmN0aW9uICh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuXG4gICAgICAgIHZhciBuZXh0ID0gX3Jlc3RQYXJhbShmdW5jdGlvbihlcnIsIGFyZ3MpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goY2hlY2spO1xuICAgICAgICAgICAgICAgIHRlc3QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uKGVyciwgdHJ1dGgpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0cnV0aCkge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKG5leHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0ZXN0KGNoZWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuZG9EdXJpbmcgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjYWxscyA9IDA7XG4gICAgICAgIGFzeW5jLmR1cmluZyhmdW5jdGlvbihuZXh0KSB7XG4gICAgICAgICAgICBpZiAoY2FsbHMrKyA8IDEpIHtcbiAgICAgICAgICAgICAgICBuZXh0KG51bGwsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9xdWV1ZSh3b3JrZXIsIGNvbmN1cnJlbmN5LCBwYXlsb2FkKSB7XG4gICAgICAgIGlmIChjb25jdXJyZW5jeSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25jdXJyZW5jeSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjb25jdXJyZW5jeSA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25jdXJyZW5jeSBtdXN0IG5vdCBiZSB6ZXJvJyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2luc2VydChxLCBkYXRhLCBwb3MsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRhc2sgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcS5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghX2lzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZGF0YS5sZW5ndGggPT09IDAgJiYgcS5pZGxlKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxsIGRyYWluIGltbWVkaWF0ZWx5IGlmIHRoZXJlIGFyZSBubyB0YXNrc1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3luYy5zZXRJbW1lZGlhdGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9hcnJheUVhY2goZGF0YSwgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0YXNrLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2sgfHwgbm9vcFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIHEudGFza3MudW5zaGlmdChpdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxLnRhc2tzLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHEudGFza3MubGVuZ3RoID09PSBxLmNvbmN1cnJlbmN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHEuc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUocS5wcm9jZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfbmV4dChxLCB0YXNrcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgd29ya2VycyAtPSAxO1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgIF9hcnJheUVhY2godGFza3MsIGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkodGFzaywgYXJncyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHEudGFza3MubGVuZ3RoICsgd29ya2VycyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBxLmRyYWluKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHEucHJvY2VzcygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3b3JrZXJzID0gMDtcbiAgICAgICAgdmFyIHEgPSB7XG4gICAgICAgICAgICB0YXNrczogW10sXG4gICAgICAgICAgICBjb25jdXJyZW5jeTogY29uY3VycmVuY3ksXG4gICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICAgICAgc2F0dXJhdGVkOiBub29wLFxuICAgICAgICAgICAgZW1wdHk6IG5vb3AsXG4gICAgICAgICAgICBkcmFpbjogbm9vcCxcbiAgICAgICAgICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcGF1c2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHB1c2g6IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIF9pbnNlcnQocSwgZGF0YSwgZmFsc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBraWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcS5kcmFpbiA9IG5vb3A7XG4gICAgICAgICAgICAgICAgcS50YXNrcyA9IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuc2hpZnQ6IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIF9pbnNlcnQocSwgZGF0YSwgdHJ1ZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXEucGF1c2VkICYmIHdvcmtlcnMgPCBxLmNvbmN1cnJlbmN5ICYmIHEudGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKHdvcmtlcnMgPCBxLmNvbmN1cnJlbmN5ICYmIHEudGFza3MubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXNrcyA9IHEucGF5bG9hZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS50YXNrcy5zcGxpY2UoMCwgcS5wYXlsb2FkKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS50YXNrcy5zcGxpY2UoMCwgcS50YXNrcy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IF9tYXAodGFza3MsIGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocS50YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXJzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2IgPSBvbmx5X29uY2UoX25leHQocSwgdGFza3MpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlcihkYXRhLCBjYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHEudGFza3MubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJ1bm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VycztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpZGxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcS50YXNrcy5sZW5ndGggKyB3b3JrZXJzID09PSAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChxLnBhdXNlZCA9PT0gZmFsc2UpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgcS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdW1lQ291bnQgPSBNYXRoLm1pbihxLmNvbmN1cnJlbmN5LCBxLnRhc2tzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgLy8gTmVlZCB0byBjYWxsIHEucHJvY2VzcyBvbmNlIHBlciBjb25jdXJyZW50XG4gICAgICAgICAgICAgICAgLy8gd29ya2VyIHRvIHByZXNlcnZlIGZ1bGwgY29uY3VycmVuY3kgYWZ0ZXIgcGF1c2VcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8PSByZXN1bWVDb3VudDsgdysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShxLnByb2Nlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHE7XG4gICAgfVxuXG4gICAgYXN5bmMucXVldWUgPSBmdW5jdGlvbiAod29ya2VyLCBjb25jdXJyZW5jeSkge1xuICAgICAgICB2YXIgcSA9IF9xdWV1ZShmdW5jdGlvbiAoaXRlbXMsIGNiKSB7XG4gICAgICAgICAgICB3b3JrZXIoaXRlbXNbMF0sIGNiKTtcbiAgICAgICAgfSwgY29uY3VycmVuY3ksIDEpO1xuXG4gICAgICAgIHJldHVybiBxO1xuICAgIH07XG5cbiAgICBhc3luYy5wcmlvcml0eVF1ZXVlID0gZnVuY3Rpb24gKHdvcmtlciwgY29uY3VycmVuY3kpIHtcblxuICAgICAgICBmdW5jdGlvbiBfY29tcGFyZVRhc2tzKGEsIGIpe1xuICAgICAgICAgICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX2JpbmFyeVNlYXJjaChzZXF1ZW5jZSwgaXRlbSwgY29tcGFyZSkge1xuICAgICAgICAgICAgdmFyIGJlZyA9IC0xLFxuICAgICAgICAgICAgICAgIGVuZCA9IHNlcXVlbmNlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoYmVnIDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pZCA9IGJlZyArICgoZW5kIC0gYmVnICsgMSkgPj4+IDEpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIHNlcXVlbmNlW21pZF0pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnID0gbWlkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IG1pZCAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJlZztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIF9pbnNlcnQocSwgZGF0YSwgcHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRhc2sgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcS5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghX2lzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxsIGRyYWluIGltbWVkaWF0ZWx5IGlmIHRoZXJlIGFyZSBubyB0YXNrc1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3luYy5zZXRJbW1lZGlhdGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9hcnJheUVhY2goZGF0YSwgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0YXNrLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IG5vb3BcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcS50YXNrcy5zcGxpY2UoX2JpbmFyeVNlYXJjaChxLnRhc2tzLCBpdGVtLCBfY29tcGFyZVRhc2tzKSArIDEsIDAsIGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHEudGFza3MubGVuZ3RoID09PSBxLmNvbmN1cnJlbmN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHEuc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShxLnByb2Nlc3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdGFydCB3aXRoIGEgbm9ybWFsIHF1ZXVlXG4gICAgICAgIHZhciBxID0gYXN5bmMucXVldWUod29ya2VyLCBjb25jdXJyZW5jeSk7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgcHVzaCB0byBhY2NlcHQgc2Vjb25kIHBhcmFtZXRlciByZXByZXNlbnRpbmcgcHJpb3JpdHlcbiAgICAgICAgcS5wdXNoID0gZnVuY3Rpb24gKGRhdGEsIHByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgX2luc2VydChxLCBkYXRhLCBwcmlvcml0eSwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJlbW92ZSB1bnNoaWZ0IGZ1bmN0aW9uXG4gICAgICAgIGRlbGV0ZSBxLnVuc2hpZnQ7XG5cbiAgICAgICAgcmV0dXJuIHE7XG4gICAgfTtcblxuICAgIGFzeW5jLmNhcmdvID0gZnVuY3Rpb24gKHdvcmtlciwgcGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gX3F1ZXVlKHdvcmtlciwgMSwgcGF5bG9hZCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9jb25zb2xlX2ZuKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9yZXN0UGFyYW0oZnVuY3Rpb24gKGZuLCBhcmdzKSB7XG4gICAgICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChbX3Jlc3RQYXJhbShmdW5jdGlvbiAoZXJyLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjb25zb2xlW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYXJyYXlFYWNoKGFyZ3MsIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZVtuYW1lXSh4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSldKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYy5sb2cgPSBfY29uc29sZV9mbignbG9nJyk7XG4gICAgYXN5bmMuZGlyID0gX2NvbnNvbGVfZm4oJ2RpcicpO1xuICAgIC8qYXN5bmMuaW5mbyA9IF9jb25zb2xlX2ZuKCdpbmZvJyk7XG4gICAgYXN5bmMud2FybiA9IF9jb25zb2xlX2ZuKCd3YXJuJyk7XG4gICAgYXN5bmMuZXJyb3IgPSBfY29uc29sZV9mbignZXJyb3InKTsqL1xuXG4gICAgYXN5bmMubWVtb2l6ZSA9IGZ1bmN0aW9uIChmbiwgaGFzaGVyKSB7XG4gICAgICAgIHZhciBtZW1vID0ge307XG4gICAgICAgIHZhciBxdWV1ZXMgPSB7fTtcbiAgICAgICAgaGFzaGVyID0gaGFzaGVyIHx8IGlkZW50aXR5O1xuICAgICAgICB2YXIgbWVtb2l6ZWQgPSBfcmVzdFBhcmFtKGZ1bmN0aW9uIG1lbW9pemVkKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICB2YXIga2V5ID0gaGFzaGVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKGtleSBpbiBtZW1vKSB7XG4gICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBtZW1vW2tleV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5IGluIHF1ZXVlcykge1xuICAgICAgICAgICAgICAgIHF1ZXVlc1trZXldLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVldWVzW2tleV0gPSBbY2FsbGJhY2tdO1xuICAgICAgICAgICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KFtfcmVzdFBhcmFtKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbW9ba2V5XSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIHZhciBxID0gcXVldWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBxdWV1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBxLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcVtpXS5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbWVtb2l6ZWQubWVtbyA9IG1lbW87XG4gICAgICAgIG1lbW9pemVkLnVubWVtb2l6ZWQgPSBmbjtcbiAgICAgICAgcmV0dXJuIG1lbW9pemVkO1xuICAgIH07XG5cbiAgICBhc3luYy51bm1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoZm4udW5tZW1vaXplZCB8fCBmbikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX3RpbWVzKG1hcHBlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvdW50LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIG1hcHBlcihfcmFuZ2UoY291bnQpLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jLnRpbWVzID0gX3RpbWVzKGFzeW5jLm1hcCk7XG4gICAgYXN5bmMudGltZXNTZXJpZXMgPSBfdGltZXMoYXN5bmMubWFwU2VyaWVzKTtcbiAgICBhc3luYy50aW1lc0xpbWl0ID0gZnVuY3Rpb24gKGNvdW50LCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBhc3luYy5tYXBMaW1pdChfcmFuZ2UoY291bnQpLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgYXN5bmMuc2VxID0gZnVuY3Rpb24gKC8qIGZ1bmN0aW9ucy4uLiAqLykge1xuICAgICAgICB2YXIgZm5zID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gX3Jlc3RQYXJhbShmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IG5vb3A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzeW5jLnJlZHVjZShmbnMsIGFyZ3MsIGZ1bmN0aW9uIChuZXdhcmdzLCBmbiwgY2IpIHtcbiAgICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBuZXdhcmdzLmNvbmNhdChbX3Jlc3RQYXJhbShmdW5jdGlvbiAoZXJyLCBuZXh0YXJncykge1xuICAgICAgICAgICAgICAgICAgICBjYihlcnIsIG5leHRhcmdzKTtcbiAgICAgICAgICAgICAgICB9KV0pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyLCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhhdCwgW2Vycl0uY29uY2F0KHJlc3VsdHMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMuY29tcG9zZSA9IGZ1bmN0aW9uICgvKiBmdW5jdGlvbnMuLi4gKi8pIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLnNlcS5hcHBseShudWxsLCBBcnJheS5wcm90b3R5cGUucmV2ZXJzZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIF9hcHBseUVhY2goZWFjaGZuKSB7XG4gICAgICAgIHJldHVybiBfcmVzdFBhcmFtKGZ1bmN0aW9uKGZucywgYXJncykge1xuICAgICAgICAgICAgdmFyIGdvID0gX3Jlc3RQYXJhbShmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVhY2hmbihmbnMsIGZ1bmN0aW9uIChmbiwgXywgY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncy5jb25jYXQoW2NiXSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ28uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ287XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jLmFwcGx5RWFjaCA9IF9hcHBseUVhY2goYXN5bmMuZWFjaE9mKTtcbiAgICBhc3luYy5hcHBseUVhY2hTZXJpZXMgPSBfYXBwbHlFYWNoKGFzeW5jLmVhY2hPZlNlcmllcyk7XG5cblxuICAgIGFzeW5jLmZvcmV2ZXIgPSBmdW5jdGlvbiAoZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBkb25lID0gb25seV9vbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgICAgICB2YXIgdGFzayA9IGVuc3VyZUFzeW5jKGZuKTtcbiAgICAgICAgZnVuY3Rpb24gbmV4dChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFzayhuZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGVuc3VyZUFzeW5jKGZuKSB7XG4gICAgICAgIHJldHVybiBfcmVzdFBhcmFtKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgYXJncy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5uZXJBcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBpbm5lckFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBpbm5lckFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jLmVuc3VyZUFzeW5jID0gZW5zdXJlQXN5bmM7XG5cbiAgICBhc3luYy5jb25zdGFudCA9IF9yZXN0UGFyYW0oZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICAgIHZhciBhcmdzID0gW251bGxdLmNvbmNhdCh2YWx1ZXMpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBhc3luYy53cmFwU3luYyA9XG4gICAgYXN5bmMuYXN5bmNpZnkgPSBmdW5jdGlvbiBhc3luY2lmeShmdW5jKSB7XG4gICAgICAgIHJldHVybiBfcmVzdFBhcmFtKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiByZXN1bHQgaXMgUHJvbWlzZSBvYmplY3RcbiAgICAgICAgICAgIGlmIChfaXNPYmplY3QocmVzdWx0KSAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIubWVzc2FnZSA/IGVyciA6IG5ldyBFcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIE5vZGUuanNcbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBhc3luYztcbiAgICB9XG4gICAgLy8gQU1EIC8gUmVxdWlyZUpTXG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gaW5jbHVkZWQgZGlyZWN0bHkgdmlhIDxzY3JpcHQ+IHRhZ1xuICAgIGVsc2Uge1xuICAgICAgICByb290LmFzeW5jID0gYXN5bmM7XG4gICAgfVxuXG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYXN5bmMvbGliL2FzeW5jLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBuZXh0VGljayA9IHJlcXVpcmUoJ3Byb2Nlc3MvYnJvd3Nlci5qcycpLm5leHRUaWNrO1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGltbWVkaWF0ZUlkcyA9IHt9O1xudmFyIG5leHRJbW1lZGlhdGVJZCA9IDA7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7IHRpbWVvdXQuY2xvc2UoKTsgfTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBUaGF0J3Mgbm90IGhvdyBub2RlLmpzIGltcGxlbWVudHMgaXQgYnV0IHRoZSBleHBvc2VkIGFwaSBpcyB0aGUgc2FtZS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogZnVuY3Rpb24oZm4pIHtcbiAgdmFyIGlkID0gbmV4dEltbWVkaWF0ZUlkKys7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBmYWxzZSA6IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICBpbW1lZGlhdGVJZHNbaWRdID0gdHJ1ZTtcblxuICBuZXh0VGljayhmdW5jdGlvbiBvbk5leHRUaWNrKCkge1xuICAgIGlmIChpbW1lZGlhdGVJZHNbaWRdKSB7XG4gICAgICAvLyBmbi5jYWxsKCkgaXMgZmFzdGVyIHNvIHdlIG9wdGltaXplIGZvciB0aGUgY29tbW9uIHVzZS1jYXNlXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9qc3BlcmYuY29tL2NhbGwtYXBwbHktc2VndVxuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKG51bGwpO1xuICAgICAgfVxuICAgICAgLy8gUHJldmVudCBpZHMgZnJvbSBsZWFraW5nXG4gICAgICBleHBvcnRzLmNsZWFySW1tZWRpYXRlKGlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpZDtcbn07XG5cbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSB0eXBlb2YgY2xlYXJJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNsZWFySW1tZWRpYXRlIDogZnVuY3Rpb24oaWQpIHtcbiAgZGVsZXRlIGltbWVkaWF0ZUlkc1tpZF07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMjAuXHJcbiAqL1xyXG5leHBvcnQgdmFyIHVybCA9IHtcclxuICAgIGpvaW46ZnVuY3Rpb24oLi4uYXJncykge1xyXG4gICAgICAgIHZhciBqb2luZWQgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkuam9pbignLycpO1xyXG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gbm9ybWFsaXplIChzdHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXC9dKy9nLCAnLycpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFw/L2csICc/JylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCMvZywgJyMnKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcOlxcLy9nLCAnOi8vJylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXC5cXC8vZywgJ1xcLycpO1xyXG4gICAgICAgIH0pKGpvaW5lZCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIHJleCA9IHtcclxuICAgIGh0bWxTaW5nbGVUYWc6KC9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyksXHJcbiAgICBodG1sOi88fCYjP1xcdys7L1xyXG59O1xyXG5cclxuZXhwb3J0IHZhciBjb25zdGFudHMgPSB7XHJcbiAgICBQSTpNYXRoLlBJLFxyXG4gICAgUElfMjogTWF0aC5QSSAqIDIsXHJcbiAgICBSQURfVE9fREVHOjE4MCAvIE1hdGguUEksXHJcbiAgICBERUdfVE9fUkFEOk1hdGguUEkgLyAxODBcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdXRpbHMvdXRpbHMuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMjEuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJ2Fsc2MnO1xyXG5cclxuaW1wb3J0ICogYXMgYWdlbnQgZnJvbSBcInN1cGVyYWdlbnRcIjtcclxuaW1wb3J0ICogYXMgYXN5bmMgZnJvbSBcImFzeW5jXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbnZhciBTSEFERVJfVFlQRSA9IHt9O1xyXG5TSEFERVJfVFlQRVtcInZlcnRleFwiXSA9IFdlYkdMUmVuZGVyaW5nQ29udGV4dC5WRVJURVhfU0hBREVSO1xyXG5TSEFERVJfVFlQRVtcImZyYWdtZW50XCJdID0gV2ViR0xSZW5kZXJpbmdDb250ZXh0LkZSQUdNRU5UX1NIQURFUjtcclxuXHJcbmNsYXNzIFNhbXBsZUZpZWxkIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVye1xyXG4gICAgY29uc3RydWN0b3Ioc3JjLGRpc3Qpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpc1tcIl9zcmNQYXRoXCJdID0gc3JjO1xyXG4gICAgICAgIHRoaXNbXCJfZGlzdFBhdGhcIl0gPSBkaXN0O1xyXG4gICAgICAgIHRoaXMuc2hhZGVyc0RpY3QgPSB7fTtcclxuICAgICAgICB0aGlzLkNPTlNUQU5UUyA9IE9iamVjdC5hc3NpZ24oe30sdXRpbHMuY29uc3RhbnRzKTtcclxuICAgICAgICB0aGlzLkNPTlNUQU5UUy5WID0gdGhpcy5DT05TVEFOVFMuVkVSVEVYX1NIQURFUiA9IFwidmVydGV4XCI7XHJcbiAgICAgICAgdGhpcy5DT05TVEFOVFMuRiA9IHRoaXMuQ09OU1RBTlRTLkZSQUdNRU5UX1NIQURFUiA9IFwiZnJhZ21lbnRcIjtcclxuICAgIH1cclxuXHJcbiAgICBzcmNQYXRoKHVybCl7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnVybC5qb2luKHRoaXMuX3NyY1BhdGgsdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXN0UGF0aCh1cmwpe1xyXG4gICAgICAgIHJldHVybiB1dGlscy51cmwuam9pbih0aGlzLl9kaXN0UGF0aCx1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRPbmVTaGFkZXIoZ2wsdXJsLHR5cGUsbmFtZSxjYil7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50LmdldCh1cmwpLmVuZCgoZXJyLHJlcyk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7XHJcbiAgICAgICAgICAgICAgICBpZighKHR5cGUgaW4gU0hBREVSX1RZUEUpKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihTSEFERVJfVFlQRVt0eXBlXSk7XHJcbiAgICAgICAgICAgICAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCByZXMudGV4dCk7XHJcbiAgICAgICAgICAgICAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhZGVyc0RpY3RbbmFtZV0gPSBzaGFkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodHlwZW9mIGNiPT09XCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgICAgIGNiKGVycixyZXMudGV4dHx8XCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTaGFkZXJzKGdsLGNiLGxvYWRvYmope1xyXG4gICAgICAgIGlmKHR5cGVvZiBjYiE9PVwiZnVuY3Rpb25cIiB8fCAhQXJyYXkuaXNBcnJheShsb2Fkb2JqKSB8fCBsb2Fkb2JqLmxlbmd0aDw9MClyZXR1cm47XHJcblxyXG4gICAgICAgIHZhciB0YXNrcyA9IGxvYWRvYmoubWFwKChsb2FkKT0+e1xyXG4gICAgICAgICAgICBpZihsb2FkLnVybCAmJiBsb2FkLnR5cGUgJiYgbG9hZC5uYW1lKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAobmV4dCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRPbmVTaGFkZXIoZ2wsbG9hZC51cmwsbG9hZC50eXBlLGxvYWQubmFtZSxuZXh0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAobmV4dCk9PntuZXh0KG51bGwsIFwiXCIpfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhc3luYy5zZXJpZXModGFza3MsKCk9PntcclxuICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxhdW5jaChjYW52YXMpe1xyXG4gICAgICAgIC8vVE9ETzrpnIDopoHkvKDlhaVjYW52YXNcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVzdHJ1Y3QoKXtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgdGhpcy5vbkRlc3RydWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImRlc3RydWN0XCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJ1Y3QoKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwib25EZXN0cnVjdCBub3QgaW1wbGVtZW50IHlldCFcIix0aGlzLl9zcmNQYXRoLHRoaXMuX2Rpc3RQYXRoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FtcGxlRmllbGQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovX015V29ya1NwYWNlL19Db21tb25BcHAvUHJvai93ZWJHTFByYXRpY2Uvc3JjL3ZpZXcvY29udGVudC9TYW1wbGVGaWVsZC5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC84LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb2wsSW5wdXR9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxyXG5cclxuY2xhc3MgU2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJzaWRlYmFyXCIgbWQ9ezR9PlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIga2V5IHdvcmRzLi4uJ1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9J1NlYXJjaCdcclxuICAgICAgICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNhbXBsZUl0ZW0oKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTYW1wbGVJdGVtKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2FtcGxlc0xpc3QubWFwKChzYW1wbGUpPT57XHJcbiAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtzYW1wbGUuaWR9PntzYW1wbGUudGl0bGV9PC9saT5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvdmlldy9pbmMvU2lkZUJhci5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbW15WlpNIG9uIDIwMTUvOC83LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gPGZvb3Rlcj48L2Zvb3Rlcj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L19NeVdvcmtTcGFjZS9fQ29tbW9uQXBwL1Byb2ovd2ViR0xQcmF0aWNlL3NyYy92aWV3L2xheW91dC9Gb290ZXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b21teVpaTSBvbiAyMDE1LzgvMjMuXHJcbiAqL1xyXG5pbXBvcnQge0V2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnYWxzYyc7XHJcblxyXG52YXIgbG9vcCA9IFwibG9vcFwiO1xyXG5cclxuY2xhc3MgQW5pbWF0aW9uTWFuYWdlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlcntcclxuXHJcbiAgICBzdGF0aWMgX2luc3RhbmNlO1xyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpe1xyXG4gICAgICAgIGlmKCEoQW5pbWF0aW9uTWFuYWdlci5faW5zdGFuY2UgaW5zdGFuY2VvZiBBbmltYXRpb25NYW5hZ2VyKSl7XHJcbiAgICAgICAgICAgIEFuaW1hdGlvbk1hbmFnZXIuX2luc3RhbmNlID0gbmV3IEFuaW1hdGlvbk1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEFuaW1hdGlvbk1hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9zdG9wU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucnVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCl7XHJcbiAgICAgICAgdGhpcy5fc3RvcFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbG9vcCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcChmb3JjZT10cnVlKXtcclxuICAgICAgICB0aGlzLl9zdG9wU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIGlmKGZvcmNlKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcihsb29wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb29wKGZuKXtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKGxvb3AsZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb29wKCl7XHJcbiAgICAgICAgaWYodGhpcy5fc3RvcFN0YXRlKXJldHVybjtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fbG9vcC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmVtaXQobG9vcCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbk1hbmFnZXIuaW5zdGFuY2VcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9fTXlXb3JrU3BhY2UvX0NvbW1vbkFwcC9Qcm9qL3dlYkdMUHJhdGljZS9zcmMvY29yZS9BbmltYXRpb25NYW5hZ2VyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==