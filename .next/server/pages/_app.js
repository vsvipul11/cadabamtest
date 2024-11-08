/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/AuthContext.js":
/*!*********************************!*\
  !*** ./contexts/AuthContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"accessToken\");\n        if (token) {\n            // Validate token and set user\n            setIsAuthenticated(true);\n        // You might want to fetch user details here\n        }\n    }, []);\n    const login = (userData, token)=>{\n        setUser(userData);\n        setIsAuthenticated(true);\n        localStorage.setItem(\"accessToken\", token);\n    };\n    const logout = ()=>{\n        setUser(null);\n        setIsAuthenticated(false);\n        localStorage.removeItem(\"accessToken\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/vipulsharma/Downloads/cadabamtest-main/contexts/AuthContext.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThFO0FBRTlFLE1BQU1LLDRCQUFjSixvREFBYUE7QUFFMUIsTUFBTUssZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUSxpQkFBaUJDLG1CQUFtQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2REUsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxRQUFRQyxhQUFhQyxPQUFPLENBQUM7UUFDbkMsSUFBSUYsT0FBTztZQUNULDhCQUE4QjtZQUM5QkQsbUJBQW1CO1FBQ25CLDRDQUE0QztRQUM5QztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1JLFFBQVEsQ0FBQ0MsVUFBVUo7UUFDdkJILFFBQVFPO1FBQ1JMLG1CQUFtQjtRQUNuQkUsYUFBYUksT0FBTyxDQUFDLGVBQWVMO0lBQ3RDO0lBRUEsTUFBTU0sU0FBUztRQUNiVCxRQUFRO1FBQ1JFLG1CQUFtQjtRQUNuQkUsYUFBYU0sVUFBVSxDQUFDO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNkLFlBQVllLFFBQVE7UUFBQ0MsT0FBTztZQUFFYjtZQUFNRTtZQUFpQks7WUFBT0c7UUFBTztrQkFDakVYOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTWUsVUFBVSxJQUFNbkIsaURBQVVBLENBQUNFLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWRhYmFtc3dlYnNpdGUvLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qcz81OWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0F1dGhlbnRpY2F0ZWQsIHNldElzQXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgLy8gVmFsaWRhdGUgdG9rZW4gYW5kIHNldCB1c2VyXG4gICAgICBzZXRJc0F1dGhlbnRpY2F0ZWQodHJ1ZSk7XG4gICAgICAvLyBZb3UgbWlnaHQgd2FudCB0byBmZXRjaCB1c2VyIGRldGFpbHMgaGVyZVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvZ2luID0gKHVzZXJEYXRhLCB0b2tlbikgPT4ge1xuICAgIHNldFVzZXIodXNlckRhdGEpO1xuICAgIHNldElzQXV0aGVudGljYXRlZCh0cnVlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzVG9rZW4nLCB0b2tlbik7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldFVzZXIobnVsbCk7XG4gICAgc2V0SXNBdXRoZW50aWNhdGVkKGZhbHNlKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvZ2luLCBsb2dvdXQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzQXV0aGVudGljYXRlZCIsInNldElzQXV0aGVudGljYXRlZCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ2luIiwidXNlckRhdGEiLCJzZXRJdGVtIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/AuthContext.js\n");

/***/ }),

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: () => (/* binding */ CartContext),\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartProvider = ({ children })=>{\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedCart = localStorage.getItem(\"cart\");\n        if (storedCart) {\n            setCart(JSON.parse(storedCart));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"cart\", JSON.stringify(cart));\n    }, [\n        cart\n    ]);\n    const addToCart = (item)=>{\n        setCart((prevCart)=>{\n            const existingItem = prevCart.find((cartItem)=>cartItem.id === item.id);\n            if (existingItem) {\n                return prevCart;\n            }\n            return [\n                ...prevCart,\n                item\n            ];\n        });\n    };\n    const removeFromCart = (itemId)=>{\n        setCart((prevCart)=>prevCart.filter((item)=>item.id !== itemId));\n    };\n    const clearCart = ()=>{\n        setCart([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addToCart,\n            removeFromCart,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/vipulsharma/Downloads/cadabamtest-main/contexts/CartContext.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9DYXJ0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtFO0FBRTNELE1BQU1JLDRCQUFjSCxvREFBYUEsR0FBRztBQUVwQyxNQUFNSSxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLGFBQWFDLGFBQWFDLE9BQU8sQ0FBQztRQUN4QyxJQUFJRixZQUFZO1lBQ2RELFFBQVFJLEtBQUtDLEtBQUssQ0FBQ0o7UUFDckI7SUFDRixHQUFHLEVBQUU7SUFFTE4sZ0RBQVNBLENBQUM7UUFDUk8sYUFBYUksT0FBTyxDQUFDLFFBQVFGLEtBQUtHLFNBQVMsQ0FBQ1I7SUFDOUMsR0FBRztRQUFDQTtLQUFLO0lBRVQsTUFBTVMsWUFBWSxDQUFDQztRQUNqQlQsUUFBUSxDQUFDVTtZQUNQLE1BQU1DLGVBQWVELFNBQVNFLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxFQUFFLEtBQUtMLEtBQUtLLEVBQUU7WUFDeEUsSUFBSUgsY0FBYztnQkFDaEIsT0FBT0Q7WUFDVDtZQUNBLE9BQU87bUJBQUlBO2dCQUFVRDthQUFLO1FBQzVCO0lBQ0Y7SUFFQSxNQUFNTSxpQkFBaUIsQ0FBQ0M7UUFDdEJoQixRQUFRLENBQUNVLFdBQWFBLFNBQVNPLE1BQU0sQ0FBQyxDQUFDUixPQUFTQSxLQUFLSyxFQUFFLEtBQUtFO0lBQzlEO0lBRUEsTUFBTUUsWUFBWTtRQUNoQmxCLFFBQVEsRUFBRTtJQUNaO0lBRUEscUJBQ0UsOERBQUNKLFlBQVl1QixRQUFRO1FBQUNDLE9BQU87WUFBRXJCO1lBQU1TO1lBQVdPO1lBQWdCRztRQUFVO2tCQUN2RXBCOzs7Ozs7QUFHUCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FkYWJhbXN3ZWJzaXRlLy4vY29udGV4dHMvQ2FydENvbnRleHQuanM/ODRjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRDYXJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKTtcbiAgICBpZiAoc3RvcmVkQ2FydCkge1xuICAgICAgc2V0Q2FydChKU09OLnBhcnNlKHN0b3JlZENhcnQpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xuICB9LCBbY2FydF0pO1xuXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChpdGVtKSA9PiB7XG4gICAgc2V0Q2FydCgocHJldkNhcnQpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IHByZXZDYXJ0LmZpbmQoKGNhcnRJdGVtKSA9PiBjYXJ0SXRlbS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgICBpZiAoZXhpc3RpbmdJdGVtKSB7XG4gICAgICAgIHJldHVybiBwcmV2Q2FydDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbLi4ucHJldkNhcnQsIGl0ZW1dO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKGl0ZW1JZCkgPT4ge1xuICAgIHNldENhcnQoKHByZXZDYXJ0KSA9PiBwcmV2Q2FydC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGl0ZW1JZCkpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQ2FydCA9ICgpID0+IHtcbiAgICBzZXRDYXJ0KFtdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjYXJ0LCBhZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0LCBjbGVhckNhcnQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FydENvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnQiLCJzZXRDYXJ0Iiwic3RvcmVkQ2FydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9DYXJ0IiwiaXRlbSIsInByZXZDYXJ0IiwiZXhpc3RpbmdJdGVtIiwiZmluZCIsImNhcnRJdGVtIiwiaWQiLCJyZW1vdmVGcm9tQ2FydCIsIml0ZW1JZCIsImZpbHRlciIsImNsZWFyQ2FydCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CartContext */ \"./contexts/CartContext.js\");\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__.CartProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/vipulsharma/Downloads/cadabamtest-main/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/vipulsharma/Downloads/cadabamtest-main/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vipulsharma/Downloads/cadabamtest-main/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3dCO0FBQ0E7QUFFdkQsU0FBU0UsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0osK0RBQVlBO2tCQUNYLDRFQUFDQywrREFBWUE7c0JBQ1gsNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhZGFiYW1zd2Vic2l0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9BdXRoQ29udGV4dCc7XG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9DYXJ0Q29udGV4dCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q2FydFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NhcnRQcm92aWRlcj5cbiAgICA8L0F1dGhQcm92aWRlcj4gXG4gICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIkNhcnRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();