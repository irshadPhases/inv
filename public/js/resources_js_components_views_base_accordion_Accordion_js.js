"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_views_base_accordion_Accordion_js"],{

/***/ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordion.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/accordion/CAccordion.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAccordion: () => (/* binding */ CAccordion),
/* harmony export */   CAccordionContext: () => (/* binding */ CAccordionContext)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");





var CAccordionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var CAccordion = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, activeItemKey = _a.activeItemKey, _b = _a.alwaysOpen, alwaysOpen = _b === void 0 ? false : _b, className = _a.className, flush = _a.flush, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "activeItemKey", "alwaysOpen", "className", "flush"]);
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(activeItemKey), _activeItemKey = _c[0], setActiveKey = _c[1];
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])('accordion', { 'accordion-flush': flush }, className) }, rest, { ref: ref }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CAccordionContext.Provider, { value: { _activeItemKey: _activeItemKey, alwaysOpen: alwaysOpen, setActiveKey: setActiveKey } }, children)));
});
CAccordion.propTypes = {
    alwaysOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    activeItemKey: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    flush: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
};
CAccordion.displayName = 'CAccordion';


//# sourceMappingURL=CAccordion.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionBody.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionBody.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAccordionBody: () => (/* binding */ CAccordionBody)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _CAccordionItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CAccordionItem.js */ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionItem.js");
/* harmony import */ var _collapse_CCollapse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../collapse/CCollapse.js */ "./node_modules/@coreui/react/dist/esm/components/collapse/CCollapse.js");







var CAccordionBody = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className"]);
    var visible = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_CAccordionItem_js__WEBPACK_IMPORTED_MODULE_2__.CAccordionItemContext).visible;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_collapse_CCollapse_js__WEBPACK_IMPORTED_MODULE_3__.CCollapse, { className: "accordion-collapse", visible: visible },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])('accordion-body', className) }, rest, { ref: ref }), children)));
});
CAccordionBody.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
};
CAccordionBody.displayName = 'CAccordionBody';


//# sourceMappingURL=CAccordionBody.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionButton.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionButton.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAccordionButton: () => (/* binding */ CAccordionButton)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _CAccordionItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CAccordionItem.js */ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionItem.js");






var CAccordionButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className"]);
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_CAccordionItem_js__WEBPACK_IMPORTED_MODULE_2__.CAccordionItemContext), visible = _b.visible, setVisible = _b.setVisible;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ type: "button", className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])('accordion-button', { collapsed: !visible }, className), "aria-expanded": !visible, onClick: function () { return setVisible(!visible); } }, rest, { ref: ref }), children));
});
CAccordionButton.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
};
CAccordionButton.displayName = 'CAccordionButton';


//# sourceMappingURL=CAccordionButton.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionHeader.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionHeader.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAccordionHeader: () => (/* binding */ CAccordionHeader)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _CAccordionButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CAccordionButton.js */ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionButton.js");






var CAccordionHeader = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])('accordion-header', className) }, rest, { ref: ref }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CAccordionButton_js__WEBPACK_IMPORTED_MODULE_3__.CAccordionButton, null, children)));
});
CAccordionHeader.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
};
CAccordionHeader.displayName = 'CAccordionHeader';


//# sourceMappingURL=CAccordionHeader.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionItem.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionItem.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAccordionItem: () => (/* binding */ CAccordionItem),
/* harmony export */   CAccordionItemContext: () => (/* binding */ CAccordionItemContext)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _CAccordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CAccordion.js */ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordion.js");






var CAccordionItemContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var CAccordionItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, itemKey = _a.itemKey, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className", "itemKey"]);
    var _itemKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(itemKey !== null && itemKey !== void 0 ? itemKey : Math.random().toString(36).slice(2, 11));
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_CAccordion_js__WEBPACK_IMPORTED_MODULE_2__.CAccordionContext), _activeItemKey = _b._activeItemKey, alwaysOpen = _b.alwaysOpen, setActiveKey = _b.setActiveKey;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Boolean(_activeItemKey === _itemKey.current)), visible = _c[0], setVisible = _c[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        !alwaysOpen && visible && setActiveKey(_itemKey.current);
    }, [visible]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setVisible(Boolean(_activeItemKey === _itemKey.current));
    }, [_activeItemKey]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])('accordion-item', className) }, rest, { ref: ref }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CAccordionItemContext.Provider, { value: { setVisible: setVisible, visible: visible } }, children)));
});
CAccordionItem.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    itemKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),
};
CAccordionItem.displayName = 'CAccordionItem';


//# sourceMappingURL=CAccordionItem.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/card/CCard.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/card/CCard.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CCard: () => (/* binding */ CCard)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../props.js */ "./node_modules/@coreui/react/dist/esm/props.js");






var CCard = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, textColor = _a.textColor, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className", "color", "textColor"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])('card', (_b = {},
            _b["bg-".concat(color)] = color,
            _b["text-".concat(textColor)] = textColor,
            _b), className) }, rest, { ref: ref }), children));
});
CCard.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    color: _props_js__WEBPACK_IMPORTED_MODULE_4__.colorPropType,
    textColor: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
};
CCard.displayName = 'CCard';


//# sourceMappingURL=CCard.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/card/CCardBody.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/card/CCardBody.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CCardBody: () => (/* binding */ CCardBody)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");





var CCardBody = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])('card-body', className) }, rest, { ref: ref }), children));
});
CCardBody.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
};
CCardBody.displayName = 'CCardBody';


//# sourceMappingURL=CCardBody.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/card/CCardHeader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/card/CCardHeader.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CCardHeader: () => (/* binding */ CCardHeader)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");





var CCardHeader = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.as, Component = _b === void 0 ? 'div' : _b, className = _a.className, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "as", "className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])('card-header', className) }, rest, { ref: ref }), children));
});
CCardHeader.propTypes = {
    as: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
};
CCardHeader.displayName = 'CCardHeader';


//# sourceMappingURL=CCardHeader.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/collapse/CCollapse.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/collapse/CCollapse.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CCollapse: () => (/* binding */ CCollapse)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _hooks_useForkedRef_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useForkedRef.js */ "./node_modules/@coreui/react/dist/esm/hooks/useForkedRef.js");
/* harmony import */ var _node_modules_react_transition_group_esm_CSSTransition_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/react-transition-group/esm/CSSTransition.js */ "./node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/CSSTransition.js");








var CCollapse = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, horizontal = _a.horizontal, onHide = _a.onHide, onShow = _a.onShow, visible = _a.visible, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className", "horizontal", "onHide", "onShow", "visible"]);
    var collapseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var forkedRef = (0,_hooks_useForkedRef_js__WEBPACK_IMPORTED_MODULE_2__.useForkedRef)(ref, collapseRef);
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), height = _b[0], setHeight = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), width = _c[0], setWidth = _c[1];
    var onEntering = function () {
        onShow && onShow();
        if (horizontal) {
            collapseRef.current && setWidth(collapseRef.current.scrollWidth);
            return;
        }
        collapseRef.current && setHeight(collapseRef.current.scrollHeight);
    };
    var onEntered = function () {
        if (horizontal) {
            setWidth(0);
            return;
        }
        setHeight(0);
    };
    var onExit = function () {
        if (horizontal) {
            collapseRef.current && setWidth(collapseRef.current.scrollWidth);
            return;
        }
        collapseRef.current && setHeight(collapseRef.current.scrollHeight);
    };
    var onExiting = function () {
        onHide && onHide();
        if (horizontal) {
            setWidth(0);
            return;
        }
        setHeight(0);
    };
    var onExited = function () {
        if (horizontal) {
            setWidth(0);
            return;
        }
        setHeight(0);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_node_modules_react_transition_group_esm_CSSTransition_js__WEBPACK_IMPORTED_MODULE_3__["default"], { in: visible, nodeRef: collapseRef, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited, timeout: 350 }, function (state) {
        var currentHeight = height === 0 ? null : { height: height };
        var currentWidth = width === 0 ? null : { width: width };
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(className, {
                'collapse-horizontal': horizontal,
                collapsing: state === 'entering' || state === 'exiting',
                'collapse show': state === 'entered',
                collapse: state === 'exited',
            }), style: (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, currentHeight), currentWidth) }, rest, { ref: forkedRef }), children));
    }));
});
CCollapse.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    horizontal: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
    onHide: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
    onShow: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
    visible: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
};
CCollapse.displayName = 'CCollapse';


//# sourceMappingURL=CCollapse.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/grid/CCol.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/grid/CCol.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CCol: () => (/* binding */ CCol)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");





var BREAKPOINTS = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs',
];
var CCol = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className"]);
    var repsonsiveClassNames = [];
    BREAKPOINTS.forEach(function (bp) {
        var breakpoint = rest[bp];
        delete rest[bp];
        var infix = bp === 'xs' ? '' : "-".concat(bp);
        if (typeof breakpoint === 'number' || typeof breakpoint === 'string') {
            repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint));
        }
        if (typeof breakpoint === 'boolean') {
            repsonsiveClassNames.push("col".concat(infix));
        }
        if (breakpoint && typeof breakpoint === 'object') {
            if (typeof breakpoint.span === 'number' || typeof breakpoint.span === 'string') {
                repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint.span));
            }
            if (typeof breakpoint.span === 'boolean') {
                repsonsiveClassNames.push("col".concat(infix));
            }
            if (typeof breakpoint.order === 'number' || typeof breakpoint.order === 'string') {
                repsonsiveClassNames.push("order".concat(infix, "-").concat(breakpoint.order));
            }
            if (typeof breakpoint.offset === 'number') {
                repsonsiveClassNames.push("offset".concat(infix, "-").concat(breakpoint.offset));
            }
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(repsonsiveClassNames.length > 0 ? repsonsiveClassNames : 'col', className) }, rest, { ref: ref }), children));
});
var span = prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([
    (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['auto']),
]);
var col = prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([
    span,
    prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
        span: span,
        offset: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),
        order: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['first', 'last']),
            (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
            (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
        ]),
    }),
]);
CCol.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    xs: col,
    sm: col,
    md: col,
    lg: col,
    xl: col,
    xxl: col,
};
CCol.displayName = 'CCol';


//# sourceMappingURL=CCol.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/grid/CRow.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/grid/CRow.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CRow: () => (/* binding */ CRow)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");





var BREAKPOINTS = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs',
];
var CRow = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className"]);
    var repsonsiveClassNames = [];
    BREAKPOINTS.forEach(function (bp) {
        var breakpoint = rest[bp];
        delete rest[bp];
        var infix = bp === 'xs' ? '' : "-".concat(bp);
        if (typeof breakpoint === 'object') {
            if (breakpoint.cols) {
                repsonsiveClassNames.push("row-cols".concat(infix, "-").concat(breakpoint.cols));
            }
            if (typeof breakpoint.gutter === 'number') {
                repsonsiveClassNames.push("g".concat(infix, "-").concat(breakpoint.gutter));
            }
            if (typeof breakpoint.gutterX === 'number') {
                repsonsiveClassNames.push("gx".concat(infix, "-").concat(breakpoint.gutterX));
            }
            if (typeof breakpoint.gutterY === 'number') {
                repsonsiveClassNames.push("gy".concat(infix, "-").concat(breakpoint.gutterY));
            }
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])('row', repsonsiveClassNames, className), ref: ref }, children));
});
var bp = prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    cols: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),
    gutter: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]),
    gutterX: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]),
    gutterY: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]),
});
CRow.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    xs: bp,
    sm: bp,
    md: bp,
    lg: bp,
    xl: bp,
    xxl: bp,
};
CRow.displayName = 'CRow';


//# sourceMappingURL=CRow.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


//# sourceMappingURL=extends.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addClass)
/* harmony export */ });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/@coreui/react/dist/esm/node_modules/dom-helpers/esm/hasClass.js");


/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0,_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}


//# sourceMappingURL=addClass.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hasClass)
/* harmony export */ });
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}


//# sourceMappingURL=hasClass.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeClass)
/* harmony export */ });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}


//# sourceMappingURL=removeClass.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CSSTransition$1)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@babel/runtime/helpers/esm/extends.js */ "./node_modules/@coreui/react/dist/esm/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js */ "./node_modules/@coreui/react/dist/esm/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@babel/runtime/helpers/esm/inheritsLoose.js */ "./node_modules/@coreui/react/dist/esm/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _dom_helpers_esm_addClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom-helpers/esm/addClass.js */ "./node_modules/@coreui/react/dist/esm/node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var _dom_helpers_esm_removeClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom-helpers/esm/removeClass.js */ "./node_modules/@coreui/react/dist/esm/node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Transition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Transition.js */ "./node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes.js */ "./node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _utils_reflow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/reflow.js */ "./node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/utils/reflow.js");











var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,_dom_helpers_esm_addClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,_dom_helpers_esm_removeClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_3__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) (0,_utils_reflow_js__WEBPACK_IMPORTED_MODULE_4__.forceReflow)(node);
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props;
        _this$props.classNames;
        var props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Transition_js__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? (0,_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, _Transition_js__WEBPACK_IMPORTED_MODULE_6__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes_js__WEBPACK_IMPORTED_MODULE_8__.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func)
}) : 0;
var CSSTransition$1 = CSSTransition;


//# sourceMappingURL=CSSTransition.js.map


/***/ }),

/***/ "./resources/js/components/views/base/accordion/Accordion.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/views/base/accordion/Accordion.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/grid/CRow.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/grid/CCol.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/card/CCard.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/card/CCardHeader.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/card/CCardBody.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordion.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionItem.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionHeader.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/accordion/CAccordionBody.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components */ "./resources/js/components/components/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Accordion = function Accordion() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_4__.CCol, {
      xs: 12,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CCardHeader, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
            children: "React Accordion"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_7__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-body-secondary small",
            children: "Click the accordions below to expand/collapse the accordion content."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.DocsExample, {
            href: "components/accordion",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAccordion, {
              activeItemKey: 2,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAccordionItem, {
                itemKey: 1,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CAccordionHeader, {
                  children: "Accordion Item #1"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_11__.CAccordionBody, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "This is the first item's accordion body."
                  }), " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
                    children: ".accordion-body"
                  }), ", though the transition does limit overflow."]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAccordionItem, {
                itemKey: 2,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CAccordionHeader, {
                  children: "Accordion Item #2"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_11__.CAccordionBody, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "This is the second item's accordion body."
                  }), " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
                    children: ".accordion-body"
                  }), ", though the transition does limit overflow."]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAccordionItem, {
                itemKey: 3,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CAccordionHeader, {
                  children: "Accordion Item #3"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_11__.CAccordionBody, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "This is the second item's accordion body."
                  }), " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
                    children: ".accordion-body"
                  }), ", though the transition does limit overflow."]
                })]
              })]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
            children: "React Accordion"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small", {
            children: "Flush"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_7__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            className: "text-body-secondary small",
            children: ["Add ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "flush"
            }), " to remove the default ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "background-color"
            }), ", some borders, and some rounded corners to render accordions edge-to-edge with their parent container."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.DocsExample, {
            href: "components/accordion#flush",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAccordion, {
              flush: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAccordionItem, {
                itemKey: 1,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CAccordionHeader, {
                  children: "Accordion Item #1"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_11__.CAccordionBody, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "This is the first item's accordion body."
                  }), " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
                    children: ".accordion-body"
                  }), ", though the transition does limit overflow."]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAccordionItem, {
                itemKey: 2,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CAccordionHeader, {
                  children: "Accordion Item #2"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_11__.CAccordionBody, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "This is the second item's accordion body."
                  }), " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
                    children: ".accordion-body"
                  }), ", though the transition does limit overflow."]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAccordionItem, {
                itemKey: 3,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CAccordionHeader, {
                  children: "Accordion Item #3"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_11__.CAccordionBody, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "This is the second item's accordion body."
                  }), " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
                    children: ".accordion-body"
                  }), ", though the transition does limit overflow."]
                })]
              })]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
            children: "React Accordion"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small", {
            children: "Always open"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_7__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            className: "text-body-secondary small",
            children: ["Add ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "alwaysOpen"
            }), " property to make accordion items stay open when another item is opened."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.DocsExample, {
            href: "components/accordion#flush",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAccordion, {
              alwaysOpen: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAccordionItem, {
                itemKey: 1,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CAccordionHeader, {
                  children: "Accordion Item #1"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_11__.CAccordionBody, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "This is the first item's accordion body."
                  }), " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
                    children: ".accordion-body"
                  }), ", though the transition does limit overflow."]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAccordionItem, {
                itemKey: 2,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CAccordionHeader, {
                  children: "Accordion Item #2"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_11__.CAccordionBody, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "This is the second item's accordion body."
                  }), " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
                    children: ".accordion-body"
                  }), ", though the transition does limit overflow."]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAccordionItem, {
                itemKey: 3,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CAccordionHeader, {
                  children: "Accordion Item #3"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_11__.CAccordionBody, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                    children: "This is the second item's accordion body."
                  }), " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
                    children: ".accordion-body"
                  }), ", though the transition does limit overflow."]
                })]
              })]
            })
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);

/***/ })

}]);