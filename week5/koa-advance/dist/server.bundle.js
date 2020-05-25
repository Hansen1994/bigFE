/*! For license information please see server.bundle.js.LICENSE.txt */
!function(e){var _={};function c(o){if(_[o])return _[o].exports;var r=_[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=_,c.d=function(e,_,o){c.o(e,_)||Object.defineProperty(e,_,{enumerable:!0,get:o})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,_){if(1&_&&(e=c(e)),8&_)return e;if(4&_&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&_&&"string"!=typeof e)for(var r in e)c.d(o,r,function(_){return e[_]}.bind(null,r));return o},c.n=function(e){var _=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(_,"a",_),_},c.o=function(e,_){return Object.prototype.hasOwnProperty.call(e,_)},c.p="",c(c.s="./src/index.js")}({"./src/api/DemoController.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nclass DemoController {\n  constructor() {}\n\n  async demo(ctx) {\n    ctx.body = {\n      msg: 'body message!'\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new DemoController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL0RlbW9Db250cm9sbGVyLmpzPzIzM2IiXSwibmFtZXMiOlsiRGVtb0NvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsImRlbW8iLCJjdHgiLCJib2R5IiwibXNnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLGNBQU4sQ0FBcUI7QUFDbkJDLGFBQVcsR0FBSSxDQUFFOztBQUNqQixRQUFNQyxJQUFOLENBQVdDLEdBQVgsRUFBZ0I7QUFDZEEsT0FBRyxDQUFDQyxJQUFKLEdBQVc7QUFDVEMsU0FBRyxFQUFFO0FBREksS0FBWDtBQUdEOztBQU5rQjs7QUFTTixtRUFBSUwsY0FBSixFQUFmIiwiZmlsZSI6Ii4vc3JjL2FwaS9EZW1vQ29udHJvbGxlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERlbW9Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvciAoKSB7fVxyXG4gIGFzeW5jIGRlbW8oY3R4KSB7XHJcbiAgICBjdHguYm9keSA9IHtcclxuICAgICAgbXNnOiAnYm9keSBtZXNzYWdlISdcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBEZW1vQ29udHJvbGxlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/DemoController.js\n")},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-static */ "koa-static");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-helmet */ "koa-helmet");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/routes */ "./src/routes/routes.js");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-compose */ "koa-compose");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_compose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-body */ "koa-body");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @koa/cors */ "@koa/cors");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_5__);\nconst koa = __webpack_require__(/*! koa */ "koa");\n\nconst app = new koa();\n\nconst path = __webpack_require__(/*! path */ "path"); // 请求的安全头\n// const helmet = require(\'koa-helmet\')\n// const statics = require(\'koa-static\')\n\n\n\n // const router = require(\'./routes/routes\')\n\n // 将中间件进行整合,项目已经安装了webpack，所以可以使用import，上面也是如此\n\n\n\n // app.use(helmet())\n// app.use(statics(path.join(__dirname, \'../assets\')))\n// app.use(router())\n// 整合,使用koa-compose继承中间件\n\nconst middleware = koa_compose__WEBPACK_IMPORTED_MODULE_3___default()([koa_body__WEBPACK_IMPORTED_MODULE_4___default()(), koa_static__WEBPACK_IMPORTED_MODULE_0___default()(path.join(__dirname, \'../assets\')), _koa_cors__WEBPACK_IMPORTED_MODULE_5___default()(), koa_helmet__WEBPACK_IMPORTED_MODULE_1___default()()]);\napp.use(middleware);\napp.use(Object(_routes_routes__WEBPACK_IMPORTED_MODULE_2__["default"])());\napp.listen(3000, () => {\n  console.log(\'请求OK！\');\n});\n/* WEBPACK VAR INJECTION */}.call(this, "src"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJrb2EiLCJyZXF1aXJlIiwiYXBwIiwicGF0aCIsIm1pZGRsZXdhcmUiLCJjb21wb3NlIiwia29hQm9keSIsInN0YXRpY3MiLCJqb2luIiwiX19kaXJuYW1lIiwiY29ycyIsImhlbG1ldCIsInVzZSIsInJvdXRlciIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxnQkFBRCxDQUFuQjs7QUFDQSxNQUFNQyxHQUFHLEdBQUcsSUFBSUYsR0FBSixFQUFaOztBQUNBLE1BQU1HLElBQUksR0FBR0YsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQixDLENBQ0E7QUFDQTtBQUNBOzs7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7Q0FJQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNRyxVQUFVLEdBQUdDLGtEQUFPLENBQUMsQ0FDekJDLCtDQUFPLEVBRGtCLEVBRXpCQyxpREFBTyxDQUFDSixJQUFJLENBQUNLLElBQUwsQ0FBVUMsU0FBVixFQUFxQixXQUFyQixDQUFELENBRmtCLEVBR3pCQyxnREFBSSxFQUhxQixFQUl6QkMsaURBQU0sRUFKbUIsQ0FBRCxDQUExQjtBQU1BVCxHQUFHLENBQUNVLEdBQUosQ0FBUVIsVUFBUjtBQUNBRixHQUFHLENBQUNVLEdBQUosQ0FBUUMsOERBQU0sRUFBZDtBQUNBWCxHQUFHLENBQUNZLE1BQUosQ0FBVyxJQUFYLEVBQWlCLE1BQUk7QUFDbkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDRCxDQUZELEUiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrb2EgPSByZXF1aXJlKCdrb2EnKVxyXG5jb25zdCBhcHAgPSBuZXcga29hKClcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxyXG4vLyDor7fmsYLnmoTlronlhajlpLRcclxuLy8gY29uc3QgaGVsbWV0ID0gcmVxdWlyZSgna29hLWhlbG1ldCcpXHJcbi8vIGNvbnN0IHN0YXRpY3MgPSByZXF1aXJlKCdrb2Etc3RhdGljJylcclxuaW1wb3J0IHN0YXRpY3MgZnJvbSAna29hLXN0YXRpYydcclxuaW1wb3J0IGhlbG1ldCBmcm9tICdrb2EtaGVsbWV0J1xyXG4vLyBjb25zdCByb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcy9yb3V0ZXMnKVxyXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVzL3JvdXRlcydcclxuLy8g5bCG5Lit6Ze05Lu26L+b6KGM5pW05ZCILOmhueebruW3sue7j+WuieijheS6hndlYnBhY2vvvIzmiYDku6Xlj6/ku6Xkvb/nlKhpbXBvcnTvvIzkuIrpnaLkuZ/mmK/lpoLmraRcclxuaW1wb3J0IGNvbXBvc2UgZnJvbSAna29hLWNvbXBvc2UnXHJcbmltcG9ydCBrb2FCb2R5IGZyb20gJ2tvYS1ib2R5J1xyXG5pbXBvcnQgY29ycyBmcm9tICdAa29hL2NvcnMnXHJcblxyXG5cclxuLy8gYXBwLnVzZShoZWxtZXQoKSlcclxuLy8gYXBwLnVzZShzdGF0aWNzKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9hc3NldHMnKSkpXHJcbi8vIGFwcC51c2Uocm91dGVyKCkpXHJcbi8vIOaVtOWQiCzkvb/nlKhrb2EtY29tcG9zZee7p+aJv+S4remXtOS7tlxyXG5jb25zdCBtaWRkbGV3YXJlID0gY29tcG9zZShbXHJcbiAga29hQm9keSgpLFxyXG4gIHN0YXRpY3MocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2Fzc2V0cycpKSxcclxuICBjb3JzKCksXHJcbiAgaGVsbWV0KClcclxuXSlcclxuYXBwLnVzZShtaWRkbGV3YXJlKVxyXG5hcHAudXNlKHJvdXRlcigpKVxyXG5hcHAubGlzdGVuKDMwMDAsICgpPT57XHJcbiAgY29uc29sZS5sb2coJ+ivt+axgk9L77yBJylcclxufSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n')},"./src/routes/demoRouter.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_DemoController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/DemoController */ "./src/api/DemoController.js");\n\n\nconst router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();\nrouter.get(\'/demo\', _api_DemoController__WEBPACK_IMPORTED_MODULE_1__["default"].demo);\n/* harmony default export */ __webpack_exports__["default"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2RlbW9Sb3V0ZXIuanM/N2EwMSJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJSb3V0ZXIiLCJnZXQiLCJkZW1vQ29udHJvbGxlciIsImRlbW8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyxpREFBSixFQUFmO0FBQ0FELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE9BQVgsRUFBb0JDLDJEQUFjLENBQUNDLElBQW5DO0FBRWVKLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9kZW1vUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJ1xyXG5pbXBvcnQgZGVtb0NvbnRyb2xsZXIgZnJvbSAnLi4vYXBpL0RlbW9Db250cm9sbGVyJ1xyXG5cclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5yb3V0ZXIuZ2V0KCcvZGVtbycsIGRlbW9Db250cm9sbGVyLmRlbW8pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/demoRouter.js\n')},"./src/routes/routes.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-combine-routers */ "koa-combine-routers");\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _demoRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demoRouter */ "./src/routes/demoRouter.js");\n// const combineRouters = require(\'koa-combine-routers\')\n\n // const arouters = require(\'./aRouter\')\n// const brouters = require(\'./bRouter\')\n// module.exports = combineRouters(\n//   arouters,\n//   brouters\n// )\n\n/* harmony default export */ __webpack_exports__["default"] = (koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default()(_demoRouter__WEBPACK_IMPORTED_MODULE_1__["default"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlcy5qcz82NDFiIl0sIm5hbWVzIjpbImNvbWJpbmVSb3V0ZXJzIiwiZGVtb1JvdXRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNlQSx5SEFBYyxDQUFDQyxtREFBRCxDQUE3QiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvcm91dGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgY29tYmluZVJvdXRlcnMgPSByZXF1aXJlKCdrb2EtY29tYmluZS1yb3V0ZXJzJylcclxuaW1wb3J0IGNvbWJpbmVSb3V0ZXJzIGZyb20gJ2tvYS1jb21iaW5lLXJvdXRlcnMnXHJcbmltcG9ydCBkZW1vUm91dGVyIGZyb20gJy4vZGVtb1JvdXRlcidcclxuXHJcbi8vIGNvbnN0IGFyb3V0ZXJzID0gcmVxdWlyZSgnLi9hUm91dGVyJylcclxuLy8gY29uc3QgYnJvdXRlcnMgPSByZXF1aXJlKCcuL2JSb3V0ZXInKVxyXG5cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBjb21iaW5lUm91dGVycyhcclxuLy8gICBhcm91dGVycyxcclxuLy8gICBicm91dGVyc1xyXG4vLyApXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSb3V0ZXJzKGRlbW9Sb3V0ZXIpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n')},"@koa/cors":function(module,exports){eval('module.exports = require("@koa/cors");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa29hL2NvcnNcIj9hNjk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBrb2EvY29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrb2EvY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@koa/cors\n')},koa:function(module,exports){eval('module.exports = require("koa");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n')},"koa-body":function(module,exports){eval('module.exports = require("koa-body");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtYm9keVwiPzNmNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYm9keVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-body\n')},"koa-combine-routers":function(module,exports){eval('module.exports = require("koa-combine-routers");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n')},"koa-compose":function(module,exports){eval('module.exports = require("koa-compose");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tcG9zZVwiPzczMTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWNvbXBvc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtY29tcG9zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-compose\n')},"koa-helmet":function(module,exports){eval('module.exports = require("koa-helmet");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n')},"koa-router":function(module,exports){eval('module.exports = require("koa-router");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n')},"koa-static":function(module,exports){eval('module.exports = require("koa-static");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n')},path:function(module,exports){eval('module.exports = require("path");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n')}});