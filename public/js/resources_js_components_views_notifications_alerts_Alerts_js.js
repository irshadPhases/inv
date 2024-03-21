"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_views_notifications_alerts_Alerts_js"],{

/***/ "./node_modules/@coreui/react/dist/esm/components/alert/CAlert.js":
/*!************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/alert/CAlert.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAlert: () => (/* binding */ CAlert)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _close_button_CCloseButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../close-button/CCloseButton.js */ "./node_modules/@coreui/react/dist/esm/components/close-button/CCloseButton.js");
/* harmony import */ var _hooks_useForkedRef_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useForkedRef.js */ "./node_modules/@coreui/react/dist/esm/hooks/useForkedRef.js");
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../props.js */ "./node_modules/@coreui/react/dist/esm/props.js");
/* harmony import */ var _node_modules_react_transition_group_esm_Transition_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/react-transition-group/esm/Transition.js */ "./node_modules/@coreui/react/dist/esm/node_modules/react-transition-group/esm/Transition.js");










var CAlert = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, _b = _a.color, color = _b === void 0 ? 'primary' : _b, dismissible = _a.dismissible, variant = _a.variant, _c = _a.visible, visible = _c === void 0 ? true : _c, onClose = _a.onClose, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className", "color", "dismissible", "variant", "visible", "onClose"]);
    var alertRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var forkedRef = (0,_hooks_useForkedRef_js__WEBPACK_IMPORTED_MODULE_2__.useForkedRef)(ref, alertRef);
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(visible), _visible = _d[0], setVisible = _d[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setVisible(visible);
    }, [visible]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_node_modules_react_transition_group_esm_Transition_js__WEBPACK_IMPORTED_MODULE_3__["default"], { in: _visible, mountOnEnter: true, nodeRef: alertRef, onExit: onClose, timeout: 150, unmountOnExit: true }, function (state) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])('alert', variant === 'solid' ? "bg-".concat(color, " text-white") : "alert-".concat(color), {
            'alert-dismissible fade': dismissible,
            show: state === 'entered',
        }, className), role: "alert" }, rest, { ref: forkedRef }),
        children,
        dismissible && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_close_button_CCloseButton_js__WEBPACK_IMPORTED_MODULE_5__.CCloseButton, { onClick: function () { return setVisible(false); } }))); }));
});
CAlert.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    color: _props_js__WEBPACK_IMPORTED_MODULE_7__.colorPropType.isRequired,
    dismissible: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
    variant: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    visible: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
};
CAlert.displayName = 'CAlert';


//# sourceMappingURL=CAlert.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/alert/CAlertHeading.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/alert/CAlertHeading.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAlertHeading: () => (/* binding */ CAlertHeading)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");





var CAlertHeading = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.as, Component = _b === void 0 ? 'h4' : _b, className = _a.className, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "as", "className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])('alert-heading', className) }, rest, { ref: ref }), children));
});
CAlertHeading.propTypes = {
    as: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
};
CAlertHeading.displayName = 'CAlertHeading';


//# sourceMappingURL=CAlertHeading.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/alert/CAlertLink.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/alert/CAlertLink.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAlertLink: () => (/* binding */ CAlertLink)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _link_CLink_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link/CLink.js */ "./node_modules/@coreui/react/dist/esm/components/link/CLink.js");






var CAlertLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_link_CLink_js__WEBPACK_IMPORTED_MODULE_2__.CLink, (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])('alert-link', className) }, rest, { ref: ref }), children));
});
CAlertLink.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
};
CAlertLink.displayName = 'CAlertLink';


//# sourceMappingURL=CAlertLink.js.map


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

/***/ "./resources/js/components/views/notifications/alerts/Alerts.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/views/notifications/alerts/Alerts.js ***!
  \**********************************************************************/
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
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/alert/CAlert.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/alert/CAlertLink.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/alert/CAlertHeading.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components */ "./resources/js/components/components/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Alerts = function Alerts() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_4__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CCardHeader, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
            children: "React Alert"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_7__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            className: "text-body-secondary small",
            children: ["React Alert is prepared for any length of text, as well as an optional close button. For a styling, use one of the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              children: "required"
            }), " contextual ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "color"
            }), ' ', "props (e.g., ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "primary"
            }), "). For inline dismissal, use the", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "https://coreui.io/react/docs/components/alert#dismissing",
              children: "dismissing prop"
            }), "."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__.DocsExample, {
            href: "components/alert",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "primary",
              children: "A simple primary alert\u2014check it out!"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "secondary",
              children: "A simple secondary alert\u2014check it out!"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "success",
              children: "A simple success alert\u2014check it out!"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "danger",
              children: "A simple danger alert\u2014check it out!"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "warning",
              children: "A simple warning alert\u2014check it out!"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "info",
              children: "A simple info alert\u2014check it out!"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "light",
              children: "A simple light alert\u2014check it out!"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "dark",
              children: "A simple dark alert\u2014check it out!"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_4__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
            children: "React Alert"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small", {
            children: "Link color"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_7__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            className: "text-body-secondary small",
            children: ["Use the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "<CAlertLink>"
            }), " component to immediately give matching colored links inside any alert."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__.DocsExample, {
            href: "components/alert#link-color",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "primary",
              children: ["A simple primary alert with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAlertLink, {
                href: "#",
                children: "an example link"
              }), ". Give it a click if you like."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "secondary",
              children: ["A simple secondary alert with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAlertLink, {
                href: "#",
                children: "an example link"
              }), ". Give it a click if you like."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "success",
              children: ["A simple success alert with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAlertLink, {
                href: "#",
                children: "an example link"
              }), ". Give it a click if you like."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "danger",
              children: ["A simple danger alert with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAlertLink, {
                href: "#",
                children: "an example link"
              }), ". Give it a click if you like."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "warning",
              children: ["A simple warning alert with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAlertLink, {
                href: "#",
                children: "an example link"
              }), ". Give it a click if you like."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "info",
              children: ["A simple info alert with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAlertLink, {
                href: "#",
                children: "an example link"
              }), ". Give it a click if you like."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "light",
              children: ["A simple light alert with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAlertLink, {
                href: "#",
                children: "an example link"
              }), ". Give it a click if you like."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "dark",
              children: ["A simple dark alert with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CAlertLink, {
                href: "#",
                children: "an example link"
              }), ". Give it a click if you like."]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_4__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
            children: "React Alert"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small", {
            children: "Additional content"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_7__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-body-secondary small",
            children: "Alert can also incorporate supplementary components & elements like heading, paragraph, and divider."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.DocsExample, {
            href: "components/alert#additional-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "success",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_10__.CAlertHeading, {
                as: "h4",
                children: "Well done!"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                children: "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "mb-0",
                children: "Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
              })]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_4__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
            children: "React Alert"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small", {
            children: "Dismissing"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_7__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            className: "text-body-secondary small",
            children: ["Alerts can also be easily dismissed. Just add the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "dismissible"
            }), " prop."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.DocsExample, {
            href: "components/alert#dismissing",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CAlert, {
              color: "warning",
              dismissible: true,
              onClose: function onClose() {
                alert('👋 Well, hi there! Thanks for dismissing me.');
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                children: "Go right ahead"
              }), " and click that dimiss over there on the right."]
            })
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alerts);

/***/ })

}]);