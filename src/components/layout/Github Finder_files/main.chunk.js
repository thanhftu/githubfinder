(window["webpackJsonpgithub-finder"] = window["webpackJsonpgithub-finder"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// Module
exports.push([module.i, "/* Global Styles */\r\n:root {\r\n  --primary-color: #dc3545;\r\n  --dark-color: #333333;\r\n  --light-color: #f4f4f4;\r\n  --danger-color: #dc3545;\r\n  --success-color: #28a745;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 1rem;\r\n  line-height: 1.6;\r\n  background-color: #fff;\r\n  color: #333;\r\n}\r\n\r\na {\r\n  color: var(--primary-color);\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  color: #666;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n/* Utilities */\r\n.container {\r\n  max-width: 1100px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n  padding: 0 2rem;\r\n}\r\n\r\n/* Text Styles*/\r\n.x-large {\r\n  font-size: 4rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.large {\r\n  font-size: 3rem;\r\n  line-height: 1.2;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.lead {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.text-primary {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.text-dark {\r\n  color: var(--dark-color);\r\n}\r\n\r\n.text-success {\r\n  color: var(--success-color);\r\n}\r\n\r\n.text-danger {\r\n  color: var(--danger-color);\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.text-right {\r\n  text-align: right;\r\n}\r\n\r\n.text-left {\r\n  text-align: left;\r\n}\r\n\r\n/* Center All */\r\n.all-center {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin: auto;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n/* Cards */\r\n.card {\r\n  padding: 1rem;\r\n  border: #ccc 1px dotted;\r\n  margin: 0.7rem 0;\r\n}\r\n\r\n/* List */\r\n.list {\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n.list li {\r\n  padding-bottom: 0.3rem;\r\n}\r\n\r\n/* Padding */\r\n.p {\r\n  padding: 0.5rem;\r\n}\r\n.p-1 {\r\n  padding: 1rem;\r\n}\r\n.p-2 {\r\n  padding: 2rem;\r\n}\r\n.p-3 {\r\n  padding: 3rem;\r\n}\r\n.py {\r\n  padding: 0.5rem 0;\r\n}\r\n.py-1 {\r\n  padding: 1rem 0;\r\n}\r\n.py-2 {\r\n  padding: 2rem 0;\r\n}\r\n.py-3 {\r\n  padding: 3rem 0;\r\n}\r\n\r\n/* Margin */\r\n.m {\r\n  margin: 0.5rem;\r\n}\r\n.m-1 {\r\n  margin: 1rem;\r\n}\r\n.m-2 {\r\n  margin: 2rem;\r\n}\r\n.m-3 {\r\n  margin: 3rem;\r\n}\r\n.my {\r\n  margin: 0.5rem 0;\r\n}\r\n.my-1 {\r\n  margin: 1rem 0;\r\n}\r\n.my-2 {\r\n  margin: 2rem 0;\r\n}\r\n.my-3 {\r\n  margin: 3rem 0;\r\n}\r\n\r\n/* Grid */\r\n.grid-2 {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-gap: 1rem;\r\n}\r\n\r\n.grid-3 {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-gap: 1rem;\r\n}\r\n\r\n.grid-4 {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-gap: 1rem;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  background: var(--light-color);\r\n  color: #333;\r\n  padding: 0.4rem 1.3rem;\r\n  font-size: 1rem;\r\n  border: none;\r\n  cursor: pointer;\r\n  margin-right: 0.5rem;\r\n  transition: opacity 0.2s ease-in;\r\n  outline: none;\r\n}\r\n\r\n.btn-link {\r\n  background: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.btn-block {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.btn-sm {\r\n  font-size: 0.8rem;\r\n  padding: 0.3rem 1rem;\r\n  margin-right: 0.2rem;\r\n}\r\n\r\n.badge {\r\n  display: inline-block;\r\n  font-size: 0.8rem;\r\n  padding: 0.2rem 0.7rem;\r\n  text-align: center;\r\n  margin: 0.3rem;\r\n  background: var(--light-color);\r\n  color: #333;\r\n  border-radius: 5px;\r\n}\r\n\r\n.alert {\r\n  padding: 0.7rem;\r\n  margin: 1rem 0;\r\n  opacity: 0.9;\r\n  background: var(--light-color);\r\n  color: #333;\r\n}\r\n\r\n.btn-primary,\r\n.bg-primary,\r\n.badge-primary,\r\n.alert-primary {\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n}\r\n\r\n.btn-light,\r\n.bg-light,\r\n.badge-light,\r\n.alert-light {\r\n  background: var(--light-color);\r\n  color: #333;\r\n}\r\n\r\n.btn-dark,\r\n.bg-dark,\r\n.badge-dark,\r\n.alert-dark {\r\n  background: var(--dark-color);\r\n  color: #fff;\r\n}\r\n\r\n.btn-danger,\r\n.bg-danger,\r\n.badge-danger,\r\n.alert-danger {\r\n  background: var(--danger-color);\r\n  color: #fff;\r\n}\r\n\r\n.btn-success,\r\n.bg-success,\r\n.badge-success,\r\n.alert-success {\r\n  background: var(--success-color);\r\n  color: #fff;\r\n}\r\n\r\n.btn-white,\r\n.bg-white,\r\n.badge-white,\r\n.alert-white {\r\n  background: #fff;\r\n  color: #333;\r\n  border: #ccc solid 1px;\r\n}\r\n\r\n.btn:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.bg-light,\r\n.badge-light {\r\n  border: #ccc solid 1px;\r\n}\r\n\r\n.round-img {\r\n  border-radius: 50%;\r\n}\r\n\r\n/* Forms */\r\ninput {\r\n  margin: 1.2rem 0;\r\n}\r\n\r\n.form-text {\r\n  display: block;\r\n  margin-top: 0.3rem;\r\n  color: #888;\r\n}\r\n\r\ninput[type='text'],\r\ninput[type='email'],\r\ninput[type='password'],\r\ninput[type='date'],\r\nselect,\r\ntextarea {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.4rem;\r\n  font-size: 1.2rem;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\ninput[type='submit'],\r\nbutton {\r\n  font: inherit;\r\n}\r\n\r\ntable th,\r\ntable td {\r\n  padding: 1rem;\r\n  text-align: left;\r\n}\r\n\r\ntable th {\r\n  background: var(--light-color);\r\n}\r\n\r\n/* Navbar */\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.7rem 2rem;\r\n  z-index: 1;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.navbar ul {\r\n  display: flex;\r\n}\r\n\r\n.navbar a {\r\n  color: #fff;\r\n  padding: 0.45rem;\r\n  margin: 0 0.25rem;\r\n}\r\n\r\n.navbar a:hover {\r\n  color: var(--light-color);\r\n}\r\n\r\n.navbar .welcome span {\r\n  margin-right: 0.6rem;\r\n}\r\n\r\n/* Mobile Styles */\r\n@media (max-width: 700px) {\r\n  .hide-sm {\r\n    display: none;\r\n  }\r\n\r\n  .grid-2,\r\n  .grid-3,\r\n  .grid-4 {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  /* Text Styles */\r\n  .x-large {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .large {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .lead {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  /* Navbar */\r\n  .navbar {\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n\r\n  .navbar ul {\r\n    text-align: center;\r\n    justify-content: center;\r\n  }\r\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Narbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/Narbar */ "./src/components/layout/Narbar.js");
/* harmony import */ var _components_users_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/users/Users */ "./src/components/users/Users.js");
/* harmony import */ var _components_users_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users/Search */ "./src/components/users/Search.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Volumes/Data/reactjs/github-finder/src/App.js";







class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      users: [],
      loading: false
    };
  }

  async componentDidMount() {
    console.log(Object({"NODE_ENV":"development","PUBLIC_URL":""}).REACT_APP_GITHUB_CLIENT_ID);
    this.setState({
      loading: true
    });
    const res = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://api.github.com/users?client_id=".concat(Object({"NODE_ENV":"development","PUBLIC_URL":""}).REACT_APP_GITHUB_CLIENT_ID, "&\n      client_secret=").concat(Object({"NODE_ENV":"development","PUBLIC_URL":""}).REACT_APP_GITHUB_CLIENT_SECRET));
    this.setState({
      users: res.data,
      loading: false
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Narbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users_Users__WEBPACK_IMPORTED_MODULE_2__["default"], {
      loading: this.state.loading,
      users: this.state.users,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/layout/Narbar.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Narbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Data/reactjs/github-finder/src/components/layout/Narbar.js";



const Navbar = ({
  icon,
  title
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "nav bg-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), " ", title));
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};
Navbar.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/layout/Spinner.js":
/*!******************************************!*\
  !*** ./src/components/layout/Spinner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spinner_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.gif */ "./src/components/layout/spinner.gif");
/* harmony import */ var _spinner_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spinner_gif__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Data/reactjs/github-finder/src/components/layout/Spinner.js";



const Spinner = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _spinner_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: "loading...",
  style: {
    width: '200px',
    margin: 'auto',
    display: 'block'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/components/layout/spinner.gif":
/*!*******************************************!*\
  !*** ./src/components/layout/spinner.gif ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/spinner.b71b7d60.gif";

/***/ }),

/***/ "./src/components/users/Search.js":
/*!****************************************!*\
  !*** ./src/components/users/Search.js ***!
  \****************************************/
/*! exports provided: Search, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Volumes/Data/reactjs/github-finder/src/components/users/Search.js";

class Search extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      text: ''
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "text",
      placeholder: "Search users...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      value: "search",
      className: "btn btn-dark btn-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/components/users/Useritem.js":
/*!******************************************!*\
  !*** ./src/components/users/Useritem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Data/reactjs/github-finder/src/components/users/Useritem.js";



const UserItem = ({
  user: {
    login,
    avatar_url,
    html_url
  }
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: avatar_url,
    className: "round-img",
    alt: "",
    style: {
      width: "60px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, login), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: html_url,
    className: "btn btn-dark btn-sm my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "More")));
};

UserItem.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UserItem);

/***/ }),

/***/ "./src/components/users/Users.js":
/*!***************************************!*\
  !*** ./src/components/users/Users.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Useritem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Useritem */ "./src/components/users/Useritem.js");
/* harmony import */ var _layout_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Spinner */ "./src/components/layout/Spinner.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Volumes/Data/reactjs/github-finder/src/components/users/Users.js";





const Users = ({
  users,
  loading
}) => {
  if (loading) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: userStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }, users.map(user => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Useritem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: user.id,
      user: user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    })));
  }
};

Users.propTypes = {
  users: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Volumes/Data/reactjs/github-finder/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Volumes/Data/reactjs/github-finder/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Volumes/Data/reactjs/github-finder/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map