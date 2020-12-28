webpackHotUpdate_N_E("pages/team",{

/***/ "./pages/team.js":
/*!***********************!*\
  !*** ./pages/team.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _team_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team.module.css */ \"./pages/team.module.css\");\n/* harmony import */ var _team_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_team_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\nvar _jsxFileName = \"/usr/local/google/home/gehrmann/Documents/GEM-benchmark.github.io/web/pages/team.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import Contact from \"../components/contact\";\n\n\n\n\n // import { faDribble } from '@fortawesome/free-solid-svg-icons'\n\n\nvar contacts = [{\n  id: 1,\n  name: \"Leanne Graham\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\",\n  twitter: \"@test\"\n}, {\n  id: 2,\n  name: \"Ervin Howell\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\"\n}, {\n  id: 3,\n  name: \"Clementine Bauch\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\"\n}, {\n  id: 4,\n  name: \"Clementine Bauch\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\"\n}, {\n  id: 5,\n  name: \"Clementine Bauch\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\"\n}, {\n  id: 6,\n  name: \"Clementine Bauch\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\"\n}, {\n  id: 7,\n  name: \"Patricia Lebsack\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\"\n}];\n\nfunction ContactList(props) {\n  var _this = this;\n\n  return __jsx(\"section\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cards,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, props.contacts.map(function (c) {\n    return __jsx(Contact, {\n      key: c.id,\n      name: c.name,\n      position: c.position,\n      organization: c.organization,\n      website: c.website,\n      twitter: c.twitter,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 64\n      }\n    });\n  }));\n}\n\n_c = ContactList;\n\nfunction Contact(props) {\n  // Optional Website link.\n  var website_tag = \"\";\n\n  if (props.website != undefined) {\n    console.log(\"yay\");\n    website_tag = __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: props.website,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      target: \"_blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faDribbble\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 28\n      }\n    })));\n  } // Optional Twitter tag.\n\n\n  var twitter_tag = \"\";\n\n  if (props.twitter != undefined) {\n    console.log(\"yay\");\n    var twitter_href = \"https://twitter.com/\" + props.twitter;\n    twitter_tag = __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: twitter_href,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      target: \"_blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faTwitter\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 28\n      }\n    })));\n  }\n\n  return __jsx(\"article\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, props.name), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, props.position), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }, props.organization), website_tag, \" \", twitter_tag);\n}\n\n_c2 = Contact;\nvar __N_SSG = true;\nfunction Home() {\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    home: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }, \"GEM Team\")), __jsx(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headingXl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, \"Team\"), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, \"GEM is a community-driven effort with the goal to improve how progress in natural language generation is measured. It would not be possible without a large group of collaborators to take on challenging tasks. This page acts as a directory of our amazing contributors:\"), __jsx(\"div\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.centered,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  }, __jsx(ContactList, {\n    contacts: contacts,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }))));\n}\n_c3 = Home;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ContactList\");\n$RefreshReg$(_c2, \"Contact\");\n$RefreshReg$(_c3, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbS5qcz82MzI5Il0sIm5hbWVzIjpbImNvbnRhY3RzIiwiaWQiLCJuYW1lIiwicG9zaXRpb24iLCJvcmdhbml6YXRpb24iLCJ3ZWJzaXRlIiwidHdpdHRlciIsIkNvbnRhY3RMaXN0IiwicHJvcHMiLCJzdHlsZXMiLCJjYXJkcyIsIm1hcCIsImMiLCJDb250YWN0Iiwid2Vic2l0ZV90YWciLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiZmFEcmliYmJsZSIsInR3aXR0ZXJfdGFnIiwidHdpdHRlcl9ocmVmIiwiZmFUd2l0dGVyIiwiY2FyZCIsInRpdGxlIiwiSG9tZSIsInV0aWxTdHlsZXMiLCJoZWFkaW5nWGwiLCJkZXNjcmlwdGlvbiIsImNlbnRlcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBQ1NDLE1BQUksRUFBRSxlQURmO0FBRUVDLFVBQVEsRUFBRSxxQkFGWjtBQUdFQyxjQUFZLEVBQUUsS0FIaEI7QUFJRUMsU0FBTyxFQUFFLGtCQUpYO0FBS0VDLFNBQU8sRUFBRTtBQUxYLENBRGUsRUFRZjtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUNTQyxNQUFJLEVBQUUsY0FEZjtBQUVFQyxVQUFRLEVBQUUscUJBRlo7QUFHRUMsY0FBWSxFQUFFLEtBSGhCO0FBSUVDLFNBQU8sRUFBRTtBQUpYLENBUmUsRUFjZjtBQUNFSixJQUFFLEVBQUUsQ0FETjtBQUNTQyxNQUFJLEVBQUUsa0JBRGY7QUFFRUMsVUFBUSxFQUFFLHFCQUZaO0FBR0VDLGNBQVksRUFBRSxLQUhoQjtBQUlFQyxTQUFPLEVBQUU7QUFKWCxDQWRlLEVBb0JmO0FBQ0VKLElBQUUsRUFBRSxDQUROO0FBQ1NDLE1BQUksRUFBRSxrQkFEZjtBQUVFQyxVQUFRLEVBQUUscUJB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O0FBcUJEO01BdEJ1QndCLEkiLCJmaWxlIjoiLi9wYWdlcy90ZWFtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbi8vIGltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90ZWFtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGdldFRlYW1EYXRhIH0gZnJvbSBcIi4uL2xpYi90ZWFtXCI7XG5pbXBvcnQgeyBmYURyaWJiYmxlLCBmYVR3aXR0ZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xuLy8gaW1wb3J0IHsgZmFEcmliYmxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuXG5jb25zdCBjb250YWN0cyA9IFtcbiAge1xuICAgIGlkOiAxLCBuYW1lOiBcIkxlYW5uZSBHcmFoYW1cIixcbiAgICBwb3NpdGlvbjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXG4gICAgb3JnYW5pemF0aW9uOiBcIlVCQ1wiLFxuICAgIHdlYnNpdGU6IFwiaHR0cHM6Ly90ZXN0LmNvbVwiLFxuICAgIHR3aXR0ZXI6IFwiQHRlc3RcIlxuICB9LFxuICB7XG4gICAgaWQ6IDIsIG5hbWU6IFwiRXJ2aW4gSG93ZWxsXCIsXG4gICAgcG9zaXRpb246IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxuICAgIG9yZ2FuaXphdGlvbjogXCJVQkNcIixcbiAgICB3ZWJzaXRlOiBcImh0dHBzOi8vdGVzdC5jb21cIlxuICB9LFxuICB7XG4gICAgaWQ6IDMsIG5hbWU6IFwiQ2xlbWVudGluZSBCYXVjaFwiLFxuICAgIHBvc2l0aW9uOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcbiAgICBvcmdhbml6YXRpb246IFwiVUJDXCIsXG4gICAgd2Vic2l0ZTogXCJodHRwczovL3Rlc3QuY29tXCJcbiAgfSxcbiAge1xuICAgIGlkOiA0LCBuYW1lOiBcIkNsZW1lbnRpbmUgQmF1Y2hcIixcbiAgICBwb3NpdGlvbjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXG4gICAgb3JnYW5pemF0aW9uOiBcIlVCQ1wiLFxuICAgIHdlYnNpdGU6IFwiaHR0cHM6Ly90ZXN0LmNvbVwiXG4gIH0sXG4gIHtcbiAgICBpZDogNSwgbmFtZTogXCJDbGVtZW50aW5lIEJhdWNoXCIsXG4gICAgcG9zaXRpb246IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxuICAgIG9yZ2FuaXphdGlvbjogXCJVQkNcIixcbiAgICB3ZWJzaXRlOiBcImh0dHBzOi8vdGVzdC5jb21cIlxuICB9LFxuICB7XG4gICAgaWQ6IDYsIG5hbWU6IFwiQ2xlbWVudGluZSBCYXVjaFwiLFxuICAgIHBvc2l0aW9uOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcbiAgICBvcmdhbml6YXRpb246IFwiVUJDXCIsXG4gICAgd2Vic2l0ZTogXCJodHRwczovL3Rlc3QuY29tXCJcbiAgfSxcbiAge1xuICAgIGlkOiA3LCBuYW1lOiBcIlBhdHJpY2lhIExlYnNhY2tcIixcbiAgICBwb3NpdGlvbjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXG4gICAgb3JnYW5pemF0aW9uOiBcIlVCQ1wiLFxuICAgIHdlYnNpdGU6IFwiaHR0cHM6Ly90ZXN0LmNvbVwiXG4gIH1cbl07XG5cbmZ1bmN0aW9uIENvbnRhY3RMaXN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9Pntwcm9wcy5jb250YWN0cy5tYXAoYyA9PiA8Q29udGFjdCBrZXk9e2MuaWR9XG4gICAgICBuYW1lPXtjLm5hbWV9IHBvc2l0aW9uPXtjLnBvc2l0aW9ufVxuICAgICAgb3JnYW5pemF0aW9uPXtjLm9yZ2FuaXphdGlvbn0gd2Vic2l0ZT17Yy53ZWJzaXRlfVxuICAgICAgdHdpdHRlcj17Yy50d2l0dGVyfS8+KX08L3NlY3Rpb24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbnRhY3QocHJvcHMpIHtcbiAgLy8gT3B0aW9uYWwgV2Vic2l0ZSBsaW5rLlxuICB2YXIgd2Vic2l0ZV90YWcgPSBcIlwiO1xuICBpZiAocHJvcHMud2Vic2l0ZSAhPSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLmxvZyhcInlheVwiKTtcbiAgICB3ZWJzaXRlX3RhZyA9IChcbiAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLndlYnNpdGV9PlxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRHJpYmJibGV9IC8+PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cblxuICAvLyBPcHRpb25hbCBUd2l0dGVyIHRhZy5cbiAgdmFyIHR3aXR0ZXJfdGFnID0gXCJcIjtcbiAgaWYgKHByb3BzLnR3aXR0ZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5sb2coXCJ5YXlcIik7XG4gICAgdmFyIHR3aXR0ZXJfaHJlZiA9IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiArIHByb3BzLnR3aXR0ZXJcbiAgICB0d2l0dGVyX3RhZyA9IChcbiAgICAgIDxMaW5rIGhyZWY9e3R3aXR0ZXJfaHJlZn0+XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFUd2l0dGVyfSAvPjwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57cHJvcHMubmFtZX08L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwcm9wcy5wb3NpdGlvbn08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Byb3BzLm9yZ2FuaXphdGlvbn08L3A+XG4gICAgICB7d2Vic2l0ZV90YWd9IHt0d2l0dGVyX3RhZ31cbiAgICA8L2FydGljbGU+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5HRU0gVGVhbTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ1hsfT5cbiAgICAgICAgICBUZWFtXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgR0VNIGlzIGEgY29tbXVuaXR5LWRyaXZlbiBlZmZvcnQgd2l0aCB0aGUgZ29hbCB0byBpbXByb3ZlIGhvdyBwcm9ncmVzcyBpblxuICAgICAgICAgIG5hdHVyYWwgbGFuZ3VhZ2UgZ2VuZXJhdGlvbiBpcyBtZWFzdXJlZC4gSXQgd291bGQgbm90IGJlIHBvc3NpYmxlIHdpdGhvdXRcbiAgICAgICAgICBhIGxhcmdlIGdyb3VwIG9mIGNvbGxhYm9yYXRvcnMgdG8gdGFrZSBvbiBjaGFsbGVuZ2luZyB0YXNrcy4gVGhpcyBwYWdlXG4gICAgICAgICAgYWN0cyBhcyBhIGRpcmVjdG9yeSBvZiBvdXIgYW1hemluZyBjb250cmlidXRvcnM6XG4gICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyZWR9PlxuICAgICAgICAgIDxDb250YWN0TGlzdCBjb250YWN0cz17Y29udGFjdHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHRlYW1EYXRhID0gYXdhaXQgZ2V0VGVhbURhdGEoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdGVhbURhdGEsXG4gICAgfSxcbiAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/team.js\n");

/***/ })

})