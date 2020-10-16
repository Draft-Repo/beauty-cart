(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./resources/js/admin/containers/DefaultLayout/DefaultLayout.js":
/*!**********************************************************************!*\
  !*** ./resources/js/admin/containers/DefaultLayout/DefaultLayout.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../nav */ "./resources/js/admin/nav.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ "./resources/js/admin/routes.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





 // sidebar nav config

 // routes config



var loading = function loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "animated fadeIn pt-3 text-center"
  }, "Loading...");
};

var DefaultAside = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./DefaultAside */ "./resources/js/admin/containers/DefaultLayout/DefaultAside.js"));
});
var DefaultFooter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./DefaultFooter */ "./resources/js/admin/containers/DefaultLayout/DefaultFooter.js"));
});
var DefaultHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./DefaultHeader */ "./resources/js/admin/containers/DefaultLayout/DefaultHeader.js"));
});

var DefaultLayout = /*#__PURE__*/function (_Component) {
  _inherits(DefaultLayout, _Component);

  var _super = _createSuper(DefaultLayout);

  function DefaultLayout() {
    _classCallCheck(this, DefaultLayout);

    return _super.apply(this, arguments);
  }

  _createClass(DefaultLayout, [{
    key: "signOut",
    value: function signOut(e) {
      e.preventDefault();
      this.props.history.push('/login');
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppHeader"], {
        fixed: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: loading()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultHeader, {
        onLogout: function onLogout(e) {
          return _this.signOut(e);
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebar"], {
        fixed: true,
        display: "lg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarHeader"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarForm"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarNav2"], _extends({
        navConfig: _nav__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, this.props, {
        router: react_router_dom__WEBPACK_IMPORTED_MODULE_1__
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarFooter"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarMinimizer"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: loading()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (route, idx) {
        return route.component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          key: idx,
          path: route.path,
          exact: route.exact,
          name: route.name,
          render: function render(props) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(route.component, props);
          }
        }) : null;
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppAside"], {
        fixed: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: loading()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultAside, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: loading()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultFooter, null))));
    }
  }]);

  return DefaultLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./resources/js/admin/nav.js":
/*!***********************************!*\
  !*** ./resources/js/admin/nav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  items: [{
    name: 'Home',
    url: '/',
    icon: 'icon-home'
  }, {
    title: true,
    name: 'Inventory'
  }, {
    name: 'Product',
    url: '/products',
    icon: 'icon-layers',
    children: [{
      name: 'Add Product',
      url: '/product/add/',
      icon: 'fa fa-plus-square'
    }, {
      name: 'All Products',
      url: '/products',
      icon: 'fa fa-cubes'
    }, {
      name: 'Required List',
      url: '/product/required',
      icon: 'icon-puzzle'
    }, {
      name: 'Low Stock',
      url: '/product/low-stock',
      icon: 'fa fa-database'
    }, {
      name: 'Demand List',
      url: '/product/demand',
      icon: 'fa fa-eye'
    }, {
      name: 'Categories',
      url: '/categories',
      icon: ''
    }]
  }, {
    name: 'Sales',
    url: '/sales',
    icon: 'fa fa-shopping-cart',
    children: [{
      name: 'New Sale',
      url: '/sale/new',
      icon: 'fa fa-cart-plus'
    }, {
      name: 'All Sales',
      url: '/sales',
      icon: 'fa fa-check-square-o'
    }, {
      name: 'Order',
      url: '/sale/order',
      icon: 'fa fa-cart-arrow-down'
    }, {
      name: 'Pending',
      url: '/sale/pending',
      icon: 'fa fa-hourglass-half'
    }, {
      name: 'Return',
      url: '/sale/return',
      icon: 'fa fa-reply'
    }]
  }, {
    title: true,
    name: 'Promotion'
  }, {
    name: 'Discount',
    url: '/discount',
    icon: 'fa fa-retweet'
  }, {
    name: 'Offer',
    url: '/offer',
    icon: 'fa fa-bullhorn'
  }, {
    title: true,
    name: 'Others'
  }, {
    name: 'Customers',
    url: '/customers/',
    icon: 'icon-people'
  }, {
    name: 'Settings',
    url: '/settings/',
    icon: 'icon-settings'
  }]
});

/***/ }),

/***/ "./resources/js/admin/routes.js":
/*!**************************************!*\
  !*** ./resources/js/admin/routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Breadcrumbs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./views/Base/Breadcrumbs/Breadcrumbs */ "./resources/js/admin/views/Base/Breadcrumbs/Breadcrumbs.jsx"));
});
var Cards = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./views/Base/Cards/Cards */ "./resources/js/admin/views/Base/Cards/Cards.jsx"));
});
var Carousels = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./views/Base/Carousels/Carousels */ "./resources/js/admin/views/Base/Carousels/Carousels.jsx"));
});
var Collapses = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./views/Base/Collapses/Collapses */ "./resources/js/admin/views/Base/Collapses/Collapses.jsx"));
});
var Dropdowns = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./views/Base/Dropdowns/Dropdowns */ "./resources/js/admin/views/Base/Dropdowns/Dropdowns.jsx"));
});
var Forms = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./views/Base/Forms/Forms */ "./resources/js/admin/views/Base/Forms/Forms.jsx"));
});
var Jumbotrons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ./views/Base/Jumbotrons/Jumbotrons */ "./resources/js/admin/views/Base/Jumbotrons/Jumbotrons.jsx"));
});
var ListGroups = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./views/Base/ListGroups/ListGroups */ "./resources/js/admin/views/Base/ListGroups/ListGroups.jsx"));
});
var Navbars = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./views/Base/Navbars/Navbars */ "./resources/js/admin/views/Base/Navbars/Navbars.jsx"));
});
var Navs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./views/Base/Navs/Navs */ "./resources/js/admin/views/Base/Navs/Navs.jsx"));
});
var Paginations = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./views/Base/Paginations/Pagnations */ "./resources/js/admin/views/Base/Paginations/Pagnations.jsx"));
});
var Popovers = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! ./views/Base/Popovers/Popovers */ "./resources/js/admin/views/Base/Popovers/Popovers.jsx"));
});
var ProgressBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./views/Base/ProgressBar/ProgressBar */ "./resources/js/admin/views/Base/ProgressBar/ProgressBar.jsx"));
});
var Switches = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ./views/Base/Switches/Switches */ "./resources/js/admin/views/Base/Switches/Switches.jsx"));
});
var Tables = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! ./views/Base/Tables/Tables */ "./resources/js/admin/views/Base/Tables/Tables.jsx"));
});
var Tabs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./views/Base/Tabs/Tabs */ "./resources/js/admin/views/Base/Tabs/Tabs.jsx"));
});
var Tooltips = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./views/Base/Tooltips/Tooltips */ "./resources/js/admin/views/Base/Tooltips/Tooltips.jsx"));
});
var BrandButtons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./views/Buttons/BrandButtons/BrandButtons */ "./resources/js/admin/views/Buttons/BrandButtons/BrandButtons.jsx"));
});
var ButtonDropdowns = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ./views/Buttons/ButtonDropdowns/ButtonDropdowns */ "./resources/js/admin/views/Buttons/ButtonDropdowns/ButtonDropdowns.jsx"));
});
var ButtonGroups = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./views/Buttons/ButtonGroups/ButtonGroups */ "./resources/js/admin/views/Buttons/ButtonGroups/ButtonGroups.jsx"));
});
var Buttons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./views/Buttons/Buttons/Buttons */ "./resources/js/admin/views/Buttons/Buttons/Buttons.jsx"));
});
var Charts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./views/Charts/Charts */ "./resources/js/admin/views/Charts/Charts.jsx"));
});
var Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ./views/Dashboard/Dashboard */ "./resources/js/admin/views/Dashboard/Dashboard.jsx"));
});
var CoreUIIcons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ./views/Icons/CoreUIIcons/CoreUIIcons */ "./resources/js/admin/views/Icons/CoreUIIcons/CoreUIIcons.jsx"));
});
var Flags = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./views/Icons/Flags/Flags */ "./resources/js/admin/views/Icons/Flags/Flags.jsx"));
});
var FontAwesome = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 41).then(__webpack_require__.bind(null, /*! ./views/Icons/FontAwesome/FontAwesome */ "./resources/js/admin/views/Icons/FontAwesome/FontAwesome.jsx"));
});
var SimpleLineIcons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! ./views/Icons/SimpleLineIcons/SimpleLineIcons */ "./resources/js/admin/views/Icons/SimpleLineIcons/SimpleLineIcons.jsx"));
});
var Alerts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 43).then(__webpack_require__.bind(null, /*! ./views/Notifications/Alerts/Alerts */ "./resources/js/admin/views/Notifications/Alerts/Alerts.jsx"));
});
var Badges = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 44).then(__webpack_require__.bind(null, /*! ./views/Notifications/Badges/Badges */ "./resources/js/admin/views/Notifications/Badges/Badges.jsx"));
});
var Modals = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 45).then(__webpack_require__.bind(null, /*! ./views/Notifications/Modals/Modals */ "./resources/js/admin/views/Notifications/Modals/Modals.jsx"));
});
var Colors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(50)]).then(__webpack_require__.bind(null, /*! ./views/Theme/Colors/Colors */ "./resources/js/admin/views/Theme/Colors/Colors.jsx"));
});
var Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 51).then(__webpack_require__.bind(null, /*! ./views/Theme/Typography/Typography */ "./resources/js/admin/views/Theme/Typography/Typography.jsx"));
});
var Widgets = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./views/Widgets/Widgets */ "./resources/js/admin/views/Widgets/Widgets.jsx"));
});
var Users = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./views/Users/Users */ "./resources/js/admin/views/Users/Users.jsx"));
});
var User = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./views/Users/User */ "./resources/js/admin/views/Users/User.jsx"));
});
var Customers = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(9), __webpack_require__.e(38)]).then(__webpack_require__.bind(null, /*! ./views/Customers/Customers */ "./resources/js/admin/views/Customers/Customers.jsx"));
});
var Customer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./views/Customers/Customer */ "./resources/js/admin/views/Customers/Customer.jsx"));
}); // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

var routes = [{
  path: '/',
  exact: true,
  name: 'Home'
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard
}, {
  path: '/theme',
  exact: true,
  name: 'Theme',
  component: Colors
}, {
  path: '/theme/colors',
  name: 'Colors',
  component: Colors
}, {
  path: '/theme/typography',
  name: 'Typography',
  component: Typography
}, {
  path: '/base',
  exact: true,
  name: 'Base',
  component: Cards
}, {
  path: '/base/cards',
  name: 'Cards',
  component: Cards
}, {
  path: '/base/forms',
  name: 'Forms',
  component: Forms
}, {
  path: '/base/switches',
  name: 'Switches',
  component: Switches
}, {
  path: '/base/tables',
  name: 'Tables',
  component: Tables
}, {
  path: '/base/tabs',
  name: 'Tabs',
  component: Tabs
}, {
  path: '/base/breadcrumbs',
  name: 'Breadcrumbs',
  component: Breadcrumbs
}, {
  path: '/base/carousels',
  name: 'Carousel',
  component: Carousels
}, {
  path: '/base/collapses',
  name: 'Collapse',
  component: Collapses
}, {
  path: '/base/dropdowns',
  name: 'Dropdowns',
  component: Dropdowns
}, {
  path: '/base/jumbotrons',
  name: 'Jumbotrons',
  component: Jumbotrons
}, {
  path: '/base/list-groups',
  name: 'List Groups',
  component: ListGroups
}, {
  path: '/base/navbars',
  name: 'Navbars',
  component: Navbars
}, {
  path: '/base/navs',
  name: 'Navs',
  component: Navs
}, {
  path: '/base/paginations',
  name: 'Paginations',
  component: Paginations
}, {
  path: '/base/popovers',
  name: 'Popovers',
  component: Popovers
}, {
  path: '/base/progress-bar',
  name: 'Progress Bar',
  component: ProgressBar
}, {
  path: '/base/tooltips',
  name: 'Tooltips',
  component: Tooltips
}, {
  path: '/buttons',
  exact: true,
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/buttons',
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/button-dropdowns',
  name: 'Button Dropdowns',
  component: ButtonDropdowns
}, {
  path: '/buttons/button-groups',
  name: 'Button Groups',
  component: ButtonGroups
}, {
  path: '/buttons/brand-buttons',
  name: 'Brand Buttons',
  component: BrandButtons
}, {
  path: '/icons',
  exact: true,
  name: 'Icons',
  component: CoreUIIcons
}, {
  path: '/icons/coreui-icons',
  name: 'CoreUI Icons',
  component: CoreUIIcons
}, {
  path: '/icons/flags',
  name: 'Flags',
  component: Flags
}, {
  path: '/icons/font-awesome',
  name: 'Font Awesome',
  component: FontAwesome
}, {
  path: '/icons/simple-line-icons',
  name: 'Simple Line Icons',
  component: SimpleLineIcons
}, {
  path: '/notifications',
  exact: true,
  name: 'Notifications',
  component: Alerts
}, {
  path: '/notifications/alerts',
  name: 'Alerts',
  component: Alerts
}, {
  path: '/notifications/badges',
  name: 'Badges',
  component: Badges
}, {
  path: '/notifications/modals',
  name: 'Modals',
  component: Modals
}, {
  path: '/widgets',
  name: 'Widgets',
  component: Widgets
}, {
  path: '/charts',
  name: 'Charts',
  component: Charts
}, {
  path: '/users',
  exact: true,
  name: 'Users',
  component: Users
}, {
  path: '/users/:id',
  exact: true,
  name: 'User Details',
  component: User
}, {
  path: '/customers',
  exact: true,
  name: 'Customers',
  component: Customers
}, {
  path: '/customer/:id',
  exact: true,
  name: 'Customers',
  component: Customer
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

}]);