webpackHotUpdate_N_E("pages/team",{

/***/ "./pages/team.js":
/*!***********************!*\
  !*** ./pages/team.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _team_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team.module.css */ \"./pages/team.module.css\");\n/* harmony import */ var _team_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_team_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\nvar _jsxFileName = \"/usr/local/google/home/gehrmann/Documents/GEM-benchmark.github.io/web/pages/team.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import Contact from \"../components/contact\";\n\n\n\n\n // import { faDribble } from '@fortawesome/free-solid-svg-icons'\n\n\nvar contacts = [{\n  id: 1,\n  name: \"Leanne Graham\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\",\n  twitter: \"@test\"\n}, {\n  id: 2,\n  name: \"Ervin Howell\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\"\n}, {\n  id: 3,\n  name: \"Clementine Bauch\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\"\n}, {\n  id: 4,\n  name: \"Clementine Bauch\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\"\n}, {\n  id: 5,\n  name: \"Clementine Bauch\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\"\n}, {\n  id: 6,\n  name: \"Clementine Bauch\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\"\n}, {\n  id: 7,\n  name: \"Patricia Lebsack\",\n  position: \"Assistant Professor\",\n  organization: \"UBC\",\n  website: \"https://test.com\"\n}];\n\nfunction ContactList(teamMembers) {\n  var _this = this;\n\n  return __jsx(\"section\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cards,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, teamMembers.map(function (c) {\n    return __jsx(Contact, {\n      key: c.id,\n      name: c.name,\n      position: c.position,\n      organization: c.organization,\n      website: c.website,\n      twitter: c.twitter,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 61\n      }\n    });\n  }));\n}\n\n_c = ContactList;\n\nfunction Contact(props) {\n  // Optional Website link.\n  var website_tag = \"\";\n\n  if (props.website != undefined) {\n    website_tag = __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: props.website,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      target: \"_blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faDribbble\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 28\n      }\n    })));\n  } // Optional Twitter tag.\n\n\n  var twitter_tag = \"\";\n\n  if (props.twitter != undefined) {\n    var twitter_href = \"https://twitter.com/\" + props.twitter;\n    twitter_tag = __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: twitter_href,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      target: \"_blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faTwitter\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 28\n      }\n    })));\n  }\n\n  return __jsx(\"article\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }, props.name), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, props.position), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, props.organization), website_tag, \" \", twitter_tag);\n}\n\n_c2 = Contact;\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var teamData = _ref.teamData;\n  console.log(teamData);\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    home: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }, \"GEM Team\")), __jsx(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headingXl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 9\n    }\n  }, \"Team\"), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, \"GEM is a community-driven effort with the goal to improve how progress in natural language generation is measured. It would not be possible without a large group of collaborators to take on challenging tasks. This page acts as a directory of our amazing contributors:\"), __jsx(\"div\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.centered,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(ContactList, {\n    contacts: teamData.teamMembers,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }))));\n}\n_c3 = Home;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ContactList\");\n$RefreshReg$(_c2, \"Contact\");\n$RefreshReg$(_c3, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbS5qcz82MzI5Il0sIm5hbWVzIjpbImNvbnRhY3RzIiwiaWQiLCJuYW1lIiwicG9zaXRpb24iLCJvcmdhbml6YXRpb24iLCJ3ZWJzaXRlIiwidHdpdHRlciIsIkNvbnRhY3RMaXN0IiwidGVhbU1lbWJlcnMiLCJzdHlsZXMiLCJjYXJkcyIsIm1hcCIsImMiLCJDb250YWN0IiwicHJvcHMiLCJ3ZWJzaXRlX3RhZyIsInVuZGVmaW5lZCIsImZhRHJpYmJibGUiLCJ0d2l0dGVyX3RhZyIsInR3aXR0ZXJfaHJlZiIsImZhVHdpdHRlciIsImNhcmQiLCJ0aXRsZSIsIkhvbWUiLCJ0ZWFtRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1dGlsU3R5bGVzIiwiaGVhZGluZ1hsIiwiZGVzY3JpcHRpb24iLCJjZW50ZXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUNTQyxNQUFJLEVBQUUsZUFEZjtBQUVFQyxVQUFRLEVBQUUscUJBRlo7QUFHRUMsY0FBWSxFQUFFLEtBSGhCO0FBSUVDLFNBQU8sRUFBRSxrQkFKWDtBQUtFQyxTQUFPLEVBQUU7QUFMWCxDQURlLEVBUWY7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFDU0MsTUFBSSxFQUFFLGNBRGY7QUFFRUMsVUFBUSxFQUFFLHFCQUZaO0FBR0VDLGNBQVksRUFBRSxLQUhoQjtBQUlFQyxTQUFPLEVBQUU7QUFKWCxDQVJlLEVBY2Y7QUFDRUosSUFBRSxFQUFFLENBRE47QUFDU0MsTUFBSSxFQUFFLGtCQURmO0FBRUVDLFVBQVEsRUFBRSxxQkFGWjtBQUdFQyxjQUFZLEVBQUUsS0FIaEI7QUFJRUMsU0FBTyxFQUFFO0FBSlgsQ0FkZSxFQW9CZjtBQUNFSixJQUFFLEVBQUUsQ0FETjtBQUNTQyxNQUFJLEVBQUUs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LElBREYsQ0FWRixDQUpGLENBREY7QUFxQkQ7TUF2QnVCZSxJIiwiZmlsZSI6Ii4vcGFnZXMvdGVhbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG4vLyBpbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGVhbS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRUZWFtRGF0YSB9IGZyb20gXCIuLi9saWIvdGVhbVwiO1xuaW1wb3J0IHsgZmFEcmliYmJsZSwgZmFUd2l0dGVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcbi8vIGltcG9ydCB7IGZhRHJpYmJsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcblxuY29uc3QgY29udGFjdHMgPSBbXG4gIHtcbiAgICBpZDogMSwgbmFtZTogXCJMZWFubmUgR3JhaGFtXCIsXG4gICAgcG9zaXRpb246IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxuICAgIG9yZ2FuaXphdGlvbjogXCJVQkNcIixcbiAgICB3ZWJzaXRlOiBcImh0dHBzOi8vdGVzdC5jb21cIixcbiAgICB0d2l0dGVyOiBcIkB0ZXN0XCJcbiAgfSxcbiAge1xuICAgIGlkOiAyLCBuYW1lOiBcIkVydmluIEhvd2VsbFwiLFxuICAgIHBvc2l0aW9uOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcbiAgICBvcmdhbml6YXRpb246IFwiVUJDXCIsXG4gICAgd2Vic2l0ZTogXCJodHRwczovL3Rlc3QuY29tXCJcbiAgfSxcbiAge1xuICAgIGlkOiAzLCBuYW1lOiBcIkNsZW1lbnRpbmUgQmF1Y2hcIixcbiAgICBwb3NpdGlvbjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXG4gICAgb3JnYW5pemF0aW9uOiBcIlVCQ1wiLFxuICAgIHdlYnNpdGU6IFwiaHR0cHM6Ly90ZXN0LmNvbVwiXG4gIH0sXG4gIHtcbiAgICBpZDogNCwgbmFtZTogXCJDbGVtZW50aW5lIEJhdWNoXCIsXG4gICAgcG9zaXRpb246IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxuICAgIG9yZ2FuaXphdGlvbjogXCJVQkNcIixcbiAgICB3ZWJzaXRlOiBcImh0dHBzOi8vdGVzdC5jb21cIlxuICB9LFxuICB7XG4gICAgaWQ6IDUsIG5hbWU6IFwiQ2xlbWVudGluZSBCYXVjaFwiLFxuICAgIHBvc2l0aW9uOiBcIkFzc2lzdGFudCBQcm9mZXNzb3JcIixcbiAgICBvcmdhbml6YXRpb246IFwiVUJDXCIsXG4gICAgd2Vic2l0ZTogXCJodHRwczovL3Rlc3QuY29tXCJcbiAgfSxcbiAge1xuICAgIGlkOiA2LCBuYW1lOiBcIkNsZW1lbnRpbmUgQmF1Y2hcIixcbiAgICBwb3NpdGlvbjogXCJBc3Npc3RhbnQgUHJvZmVzc29yXCIsXG4gICAgb3JnYW5pemF0aW9uOiBcIlVCQ1wiLFxuICAgIHdlYnNpdGU6IFwiaHR0cHM6Ly90ZXN0LmNvbVwiXG4gIH0sXG4gIHtcbiAgICBpZDogNywgbmFtZTogXCJQYXRyaWNpYSBMZWJzYWNrXCIsXG4gICAgcG9zaXRpb246IFwiQXNzaXN0YW50IFByb2Zlc3NvclwiLFxuICAgIG9yZ2FuaXphdGlvbjogXCJVQkNcIixcbiAgICB3ZWJzaXRlOiBcImh0dHBzOi8vdGVzdC5jb21cIlxuICB9XG5dO1xuXG5mdW5jdGlvbiBDb250YWN0TGlzdCh0ZWFtTWVtYmVycykge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfT57dGVhbU1lbWJlcnMubWFwKGMgPT4gPENvbnRhY3Qga2V5PXtjLmlkfVxuICAgICAgbmFtZT17Yy5uYW1lfSBwb3NpdGlvbj17Yy5wb3NpdGlvbn1cbiAgICAgIG9yZ2FuaXphdGlvbj17Yy5vcmdhbml6YXRpb259IHdlYnNpdGU9e2Mud2Vic2l0ZX1cbiAgICAgIHR3aXR0ZXI9e2MudHdpdHRlcn0vPil9PC9zZWN0aW9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBDb250YWN0KHByb3BzKSB7XG4gIC8vIE9wdGlvbmFsIFdlYnNpdGUgbGluay5cbiAgdmFyIHdlYnNpdGVfdGFnID0gXCJcIjtcbiAgaWYgKHByb3BzLndlYnNpdGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgd2Vic2l0ZV90YWcgPSAoXG4gICAgICA8TGluayBocmVmPXtwcm9wcy53ZWJzaXRlfT5cbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYURyaWJiYmxlfSAvPjwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG5cbiAgLy8gT3B0aW9uYWwgVHdpdHRlciB0YWcuXG4gIHZhciB0d2l0dGVyX3RhZyA9IFwiXCI7XG4gIGlmIChwcm9wcy50d2l0dGVyICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciB0d2l0dGVyX2hyZWYgPSBcImh0dHBzOi8vdHdpdHRlci5jb20vXCIgKyBwcm9wcy50d2l0dGVyXG4gICAgdHdpdHRlcl90YWcgPSAoXG4gICAgICA8TGluayBocmVmPXt0d2l0dGVyX2hyZWZ9PlxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHdpdHRlcn0gLz48L2E+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e3Byb3BzLm5hbWV9PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cHJvcHMucG9zaXRpb259PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwcm9wcy5vcmdhbml6YXRpb259PC9wPlxuICAgICAge3dlYnNpdGVfdGFnfSB7dHdpdHRlcl90YWd9XG4gICAgPC9hcnRpY2xlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdGVhbURhdGEgfSkge1xuICBjb25zb2xlLmxvZyh0ZWFtRGF0YSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkdFTSBUZWFtPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nWGx9PlxuICAgICAgICAgIFRlYW1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBHRU0gaXMgYSBjb21tdW5pdHktZHJpdmVuIGVmZm9ydCB3aXRoIHRoZSBnb2FsIHRvIGltcHJvdmUgaG93IHByb2dyZXNzIGluXG4gICAgICAgICAgbmF0dXJhbCBsYW5ndWFnZSBnZW5lcmF0aW9uIGlzIG1lYXN1cmVkLiBJdCB3b3VsZCBub3QgYmUgcG9zc2libGUgd2l0aG91dFxuICAgICAgICAgIGEgbGFyZ2UgZ3JvdXAgb2YgY29sbGFib3JhdG9ycyB0byB0YWtlIG9uIGNoYWxsZW5naW5nIHRhc2tzLiBUaGlzIHBhZ2VcbiAgICAgICAgICBhY3RzIGFzIGEgZGlyZWN0b3J5IG9mIG91ciBhbWF6aW5nIGNvbnRyaWJ1dG9yczpcbiAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJlZH0+XG4gICAgICAgICAgPENvbnRhY3RMaXN0IGNvbnRhY3RzPXt0ZWFtRGF0YS50ZWFtTWVtYmVyc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgdGVhbURhdGEgPSBhd2FpdCBnZXRUZWFtRGF0YSgpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0ZWFtRGF0YSxcbiAgICB9LFxuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/team.js\n");

/***/ })

})