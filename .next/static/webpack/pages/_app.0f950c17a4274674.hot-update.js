"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Context/DataContext.jsx":
/*!*********************************!*\
  !*** ./Context/DataContext.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContextData\": function() { return /* binding */ ContextData; },\n/* harmony export */   \"DataContext\": function() { return /* binding */ DataContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _build_contracts_FundraiserFactory_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../build/contracts/FundraiserFactory.json */ \"./build/contracts/FundraiserFactory.json\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/dist/web3.min.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ContextData = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst DataContext = (props)=>{\n    _s();\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(new (web3__WEBPACK_IMPORTED_MODULE_3___default().providers.HttpProvider)(\"https://rpc-mumbai.maticvigil.com\"));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        init();\n    }, []);\n    const init = async ()=>{\n        try {\n            const networkId = await web3.eth.net.getId();\n            const deployedNetwork = FundraiserFactory.networks[networkId];\n            const accounts = await web3.eth.getAccounts();\n            console.log(deployedNetwork, \"deployedNetwork\");\n            console.log(accounts, \"********accounts********\");\n            const instance = new web3.eth.Contract(FundraiserFactory.abi, deployedNetwork && deployedNetwork.address);\n            const funds = await instance.methods.fundraisers(100, 0).call();\n            setFunds(funds);\n            console.log(\"------\", funds);\n            setFunds(funds);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContextData.Provider, {\n            value: {\n                contract,\n                accounts\n            },\n            children: props.children\n        }, void 0, false, {\n            fileName: \"D:\\\\charity_dapp\\\\Context\\\\DataContext.jsx\",\n            lineNumber: 38,\n            columnNumber: 8\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\charity_dapp\\\\Context\\\\DataContext.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DataContext, \"vF5tfE7kXH8EVOaNXajO9J4FRf8=\");\n_c = DataContext;\n\nvar _c;\n$RefreshReg$(_c, \"DataContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db250ZXh0L0RhdGFDb250ZXh0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF5RTtBQUNTO0FBQzFEO0FBQ1U7QUFDbEMsTUFBTVEsNEJBQVlOLG9EQUFhQTtBQUMvQixNQUFNTyxjQUFjLENBQUNDLFFBQVU7O0lBQzNCLE1BQUssQ0FBQ0MsVUFBU0MsWUFBWSxHQUFDWCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3pDLE1BQUssQ0FBQ1ksVUFBU0MsWUFBWSxHQUFDYiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3pDLE1BQU1jLE9BQU8sSUFBSVQsNkNBQUlBLENBQ25CLElBQUlBLG9FQUEyQixDQUFDO0lBRWxDRixnREFBU0EsQ0FBQyxJQUFJO1FBQ1ZjO0lBQ0osR0FBRSxFQUFFO0lBQ0osTUFBTUEsT0FBTyxVQUFZO1FBQ3ZCLElBQUk7WUFDRixNQUFNQyxZQUFZLE1BQU1KLEtBQUtLLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLO1lBQzFDLE1BQU1DLGtCQUFrQkMsa0JBQWtCQyxRQUFRLENBQUNOLFVBQVU7WUFDN0QsTUFBTU4sV0FBVyxNQUFNRSxLQUFLSyxHQUFHLENBQUNNLFdBQVc7WUFDM0NDLFFBQVFDLEdBQUcsQ0FBQ0wsaUJBQWdCO1lBQzVCSSxRQUFRQyxHQUFHLENBQUNmLFVBQVM7WUFDckIsTUFBTWdCLFdBQVcsSUFBSWQsS0FBS0ssR0FBRyxDQUFDVSxRQUFRLENBQ3BDTixrQkFBa0JPLEdBQUcsRUFDckJSLG1CQUFtQkEsZ0JBQWdCUyxPQUFPO1lBRTVDLE1BQU1DLFFBQVEsTUFBTUosU0FBU0ssT0FBTyxDQUFDQyxXQUFXLENBQUMsS0FBSyxHQUFHQyxJQUFJO1lBQzdEQyxTQUFTSjtZQUNUTixRQUFRQyxHQUFHLENBQUMsVUFBVUs7WUFDdEJJLFNBQVNKO1FBQ1gsRUFBRSxPQUFPSyxPQUFPO1lBQ2RYLFFBQVFXLEtBQUssQ0FBQ0E7UUFDaEI7SUFFRjtJQUVGLHFCQUNFLDhEQUFDQztrQkFDRSw0RUFBQy9CLFlBQVlnQyxRQUFRO1lBQUNDLE9BQU87Z0JBQUM5QjtnQkFBU0U7WUFBUTtzQkFDN0NILE1BQU1nQyxRQUFROzs7Ozs7Ozs7OztBQUl2QjtHQXJDTWpDO0tBQUFBO0FBdUMwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db250ZXh0L0RhdGFDb250ZXh0LmpzeD9kMTk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZ1bmRyYWlzZXJGYWN0b3J5Q29udHJhY3QgZnJvbSAnLi4vYnVpbGQvY29udHJhY3RzL0Z1bmRyYWlzZXJGYWN0b3J5Lmpzb24nO1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuaW1wb3J0IFdlYjNNb2RhbCBmcm9tICd3ZWIzbW9kYWwnO1xyXG5jb25zdCBDb250ZXh0RGF0YT1jcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IERhdGFDb250ZXh0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdFtjb250cmFjdCxzZXRDb250cmFjdF09dXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdFthY2NvdW50cyxzZXRBY2NvdW50c109dXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoXHJcbiAgICAgIG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoJ2h0dHBzOi8vcnBjLW11bWJhaS5tYXRpY3ZpZ2lsLmNvbScpLFxyXG4gICAgKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xyXG4gICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IEZ1bmRyYWlzZXJGYWN0b3J5Lm5ldHdvcmtzW25ldHdvcmtJZF07XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRlcGxveWVkTmV0d29yaywnZGVwbG95ZWROZXR3b3JrJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHMsJyoqKioqKioqYWNjb3VudHMqKioqKioqKicpO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgRnVuZHJhaXNlckZhY3RvcnkuYWJpLFxyXG4gICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZnVuZHMgPSBhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmZ1bmRyYWlzZXJzKDEwMCwgMCkuY2FsbCgpO1xyXG4gICAgICAgIHNldEZ1bmRzKGZ1bmRzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tJywgZnVuZHMpO1xyXG4gICAgICAgIHNldEZ1bmRzKGZ1bmRzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH07XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICA8Q29udGV4dERhdGEuUHJvdmlkZXIgdmFsdWU9e3tjb250cmFjdCxhY2NvdW50c319PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9Db250ZXh0RGF0YS5Qcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHtDb250ZXh0RGF0YSxEYXRhQ29udGV4dH1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkZ1bmRyYWlzZXJGYWN0b3J5Q29udHJhY3QiLCJXZWIzIiwiV2ViM01vZGFsIiwiQ29udGV4dERhdGEiLCJEYXRhQ29udGV4dCIsInByb3BzIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsImFjY291bnRzIiwic2V0QWNjb3VudHMiLCJ3ZWIzIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiaW5pdCIsIm5ldHdvcmtJZCIsImV0aCIsIm5ldCIsImdldElkIiwiZGVwbG95ZWROZXR3b3JrIiwiRnVuZHJhaXNlckZhY3RvcnkiLCJuZXR3b3JrcyIsImdldEFjY291bnRzIiwiY29uc29sZSIsImxvZyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiZnVuZHMiLCJtZXRob2RzIiwiZnVuZHJhaXNlcnMiLCJjYWxsIiwic2V0RnVuZHMiLCJlcnJvciIsImRpdiIsIlByb3ZpZGVyIiwidmFsdWUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Context/DataContext.jsx\n"));

/***/ })

});