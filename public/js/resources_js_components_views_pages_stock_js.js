"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_views_pages_stock_js"],{

/***/ "./node_modules/@coreui/icons/dist/esm/free/cil-pencil.js":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/icons/dist/esm/free/cil-pencil.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cilPencil: () => (/* binding */ cilPencil)
/* harmony export */ });
var cilPencil = ["512 512", "<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"];


//# sourceMappingURL=cil-pencil.js.map


/***/ }),

/***/ "./node_modules/@coreui/icons/dist/esm/free/cil-trash.js":
/*!***************************************************************!*\
  !*** ./node_modules/@coreui/icons/dist/esm/free/cil-trash.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cilTrash: () => (/* binding */ cilTrash)
/* harmony export */ });
var cilTrash = ["512 512", "<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"];


//# sourceMappingURL=cil-trash.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/table/CTable.js":
/*!************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/table/CTable.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTable: () => (/* binding */ CTable)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _CTableHead_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CTableHead.js */ "./node_modules/@coreui/react/dist/esm/components/table/CTableHead.js");
/* harmony import */ var _CTableHeaderCell_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CTableHeaderCell.js */ "./node_modules/@coreui/react/dist/esm/components/table/CTableHeaderCell.js");
/* harmony import */ var _CTableBody_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CTableBody.js */ "./node_modules/@coreui/react/dist/esm/components/table/CTableBody.js");
/* harmony import */ var _CTableDataCell_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CTableDataCell.js */ "./node_modules/@coreui/react/dist/esm/components/table/CTableDataCell.js");
/* harmony import */ var _CTableRow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CTableRow.js */ "./node_modules/@coreui/react/dist/esm/components/table/CTableRow.js");
/* harmony import */ var _CTableFoot_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CTableFoot.js */ "./node_modules/@coreui/react/dist/esm/components/table/CTableFoot.js");
/* harmony import */ var _CTableCaption_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CTableCaption.js */ "./node_modules/@coreui/react/dist/esm/components/table/CTableCaption.js");
/* harmony import */ var _CTableResponsiveWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CTableResponsiveWrapper.js */ "./node_modules/@coreui/react/dist/esm/components/table/CTableResponsiveWrapper.js");
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../props.js */ "./node_modules/@coreui/react/dist/esm/props.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@coreui/react/dist/esm/components/table/utils.js");















var CTable = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, align = _a.align, borderColor = _a.borderColor, bordered = _a.bordered, borderless = _a.borderless, caption = _a.caption, captionTop = _a.captionTop, className = _a.className, color = _a.color, columns = _a.columns, footer = _a.footer, hover = _a.hover, items = _a.items, responsive = _a.responsive, small = _a.small, striped = _a.striped, stripedColumns = _a.stripedColumns, tableFootProps = _a.tableFootProps, tableHeadProps = _a.tableHeadProps, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "align", "borderColor", "bordered", "borderless", "caption", "captionTop", "className", "color", "columns", "footer", "hover", "items", "responsive", "small", "striped", "stripedColumns", "tableFootProps", "tableHeadProps"]);
    var columnNames = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getColumnNames)(columns, items); }, [columns, items]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CTableResponsiveWrapper_js__WEBPACK_IMPORTED_MODULE_3__.CTableResponsiveWrapper, { responsive: responsive },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])('table', (_b = {},
                _b["align-".concat(align)] = align,
                _b["border-".concat(borderColor)] = borderColor,
                _b["caption-top"] = captionTop || caption === 'top',
                _b['table-bordered'] = bordered,
                _b['table-borderless'] = borderless,
                _b["table-".concat(color)] = color,
                _b['table-hover'] = hover,
                _b['table-sm'] = small,
                _b['table-striped'] = striped,
                _b['table-striped-columns'] = stripedColumns,
                _b), className) }, rest, { ref: ref }),
            ((caption && caption !== 'top') || captionTop) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CTableCaption_js__WEBPACK_IMPORTED_MODULE_5__.CTableCaption, null, caption || captionTop)),
            columns && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CTableHead_js__WEBPACK_IMPORTED_MODULE_6__.CTableHead, (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, tableHeadProps),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CTableRow_js__WEBPACK_IMPORTED_MODULE_7__.CTableRow, null, columns.map(function (column, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CTableHeaderCell_js__WEBPACK_IMPORTED_MODULE_8__.CTableHeaderCell, (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (column._props && (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, column._props)), (column._style && { style: (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, column._style) }), { key: index }), (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getColumnLabel)(column))); })))),
            items && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CTableBody_js__WEBPACK_IMPORTED_MODULE_9__.CTableBody, null, items.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CTableRow_js__WEBPACK_IMPORTED_MODULE_7__.CTableRow, (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (item._props && (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, item._props)), { key: index }), columnNames &&
                columnNames.map(function (colName, index) {
                    // eslint-disable-next-line unicorn/no-negated-condition
                    return item[colName] !== undefined ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CTableDataCell_js__WEBPACK_IMPORTED_MODULE_10__.CTableDataCell, (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (item._cellProps && (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (item._cellProps['all'] && (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, item._cellProps['all']))), (item._cellProps[colName] && (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, item._cellProps[colName])))), { key: index }), item[colName])) : null;
                }))); }))),
            children,
            footer && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CTableFoot_js__WEBPACK_IMPORTED_MODULE_11__.CTableFoot, (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, tableFootProps),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CTableRow_js__WEBPACK_IMPORTED_MODULE_7__.CTableRow, null, footer.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CTableDataCell_js__WEBPACK_IMPORTED_MODULE_10__.CTableDataCell, (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (typeof item === 'object' && item._props && (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, item._props)), { key: index }), typeof item === 'object' ? item.label : item)); })))))));
});
CTable.propTypes = {
    align: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['bottom', 'middle', 'top']),
    borderColor: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),
    bordered: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),
    borderless: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),
    caption: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().string), prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['top'])]),
    captionTop: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),
    color: _props_js__WEBPACK_IMPORTED_MODULE_13__.colorPropType,
    columns: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().array),
    footer: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().array),
    hover: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),
    items: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().array),
    responsive: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),
        prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
    ]),
    small: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),
    striped: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),
    stripedColumns: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),
    tableFootProps: prop_types__WEBPACK_IMPORTED_MODULE_12___default().shape((0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _CTableFoot_js__WEBPACK_IMPORTED_MODULE_11__.CTableFoot.propTypes)),
    tableHeadProps: prop_types__WEBPACK_IMPORTED_MODULE_12___default().shape((0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _CTableHead_js__WEBPACK_IMPORTED_MODULE_6__.CTableHead.propTypes)),
};
CTable.displayName = 'CTable';


//# sourceMappingURL=CTable.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/table/CTableBody.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/table/CTableBody.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTableBody: () => (/* binding */ CTableBody)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../props.js */ "./node_modules/@coreui/react/dist/esm/props.js");






var CTableBody = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className", "color"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_b = {},
            _b["table-".concat(color)] = color,
            _b), className) || undefined }, rest, { ref: ref }), children));
});
CTableBody.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    color: _props_js__WEBPACK_IMPORTED_MODULE_4__.colorPropType,
};
CTableBody.displayName = 'CTableBody';


//# sourceMappingURL=CTableBody.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/table/CTableCaption.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/table/CTableCaption.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTableCaption: () => (/* binding */ CTableCaption)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var CTableCaption = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, props = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("caption", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, props, { ref: ref }), children));
});
CTableCaption.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
};
CTableCaption.displayName = 'CTableCaption';


//# sourceMappingURL=CTableCaption.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/table/CTableDataCell.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/table/CTableDataCell.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTableDataCell: () => (/* binding */ CTableDataCell)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../props.js */ "./node_modules/@coreui/react/dist/esm/props.js");






var CTableDataCell = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, active = _a.active, align = _a.align, className = _a.className, color = _a.color, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "active", "align", "className", "color"]);
    var Component = rest.scope ? 'th' : 'td';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_b = {},
            _b["align-".concat(align)] = align,
            _b['table-active'] = active,
            _b["table-".concat(color)] = color,
            _b), className) || undefined }, rest, { ref: ref }), children));
});
CTableDataCell.propTypes = {
    active: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    align: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['bottom', 'middle', 'top']),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    color: _props_js__WEBPACK_IMPORTED_MODULE_4__.colorPropType,
};
CTableDataCell.displayName = 'CTableDataCell';


//# sourceMappingURL=CTableDataCell.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/table/CTableFoot.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/table/CTableFoot.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTableFoot: () => (/* binding */ CTableFoot)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../props.js */ "./node_modules/@coreui/react/dist/esm/props.js");






var CTableFoot = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className", "color"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tfoot", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_b = {},
            _b["table-".concat(color)] = color,
            _b), className) || undefined }, rest, { ref: ref }), children));
});
CTableFoot.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    color: _props_js__WEBPACK_IMPORTED_MODULE_4__.colorPropType,
};
CTableFoot.displayName = 'CTableFoot';


//# sourceMappingURL=CTableFoot.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/table/CTableHead.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/table/CTableHead.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTableHead: () => (/* binding */ CTableHead)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../props.js */ "./node_modules/@coreui/react/dist/esm/props.js");






var CTableHead = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className", "color"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_b = {},
            _b["table-".concat(color)] = color,
            _b), className) || undefined }, rest, { ref: ref }), children));
});
CTableHead.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    color: _props_js__WEBPACK_IMPORTED_MODULE_4__.colorPropType,
};
CTableHead.displayName = 'CTableHead';


//# sourceMappingURL=CTableHead.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/table/CTableHeaderCell.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/table/CTableHeaderCell.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTableHeaderCell: () => (/* binding */ CTableHeaderCell)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../props.js */ "./node_modules/@coreui/react/dist/esm/props.js");






var CTableHeaderCell = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "className", "color"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_b = {},
            _b["table-".concat(color)] = color,
            _b), className) || undefined }, rest, { ref: ref }), children));
});
CTableHeaderCell.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    color: _props_js__WEBPACK_IMPORTED_MODULE_4__.colorPropType,
};
CTableHeaderCell.displayName = 'CTableHeaderCell';


//# sourceMappingURL=CTableHeaderCell.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/table/CTableResponsiveWrapper.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/table/CTableResponsiveWrapper.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTableResponsiveWrapper: () => (/* binding */ CTableResponsiveWrapper)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var CTableResponsiveWrapper = function (_a) {
    var children = _a.children, responsive = _a.responsive, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "responsive"]);
    return responsive ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: typeof responsive === 'boolean' ? 'table-responsive' : "table-responsive-".concat(responsive) }, rest), children)) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children));
};
CTableResponsiveWrapper.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    responsive: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
    ]),
};
CTableResponsiveWrapper.displayName = 'CTableResponsiveWrapper';


//# sourceMappingURL=CTableResponsiveWrapper.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/table/CTableRow.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/table/CTableRow.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTableRow: () => (/* binding */ CTableRow)
/* harmony export */ });
/* harmony import */ var _node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/tslib/tslib.es6.js */ "./node_modules/@coreui/react/dist/esm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/classnames/index.js */ "./node_modules/@coreui/react/dist/esm/node_modules/classnames/index.js");
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../props.js */ "./node_modules/@coreui/react/dist/esm/props.js");






var CTableRow = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, active = _a.active, align = _a.align, className = _a.className, color = _a.color, rest = (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "active", "align", "className", "color"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", (0,_node_modules_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_node_modules_classnames_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_b = {},
            _b["align-".concat(align)] = align,
            _b['table-active'] = active,
            _b["table-".concat(color)] = color,
            _b), className) || undefined }, rest, { ref: ref }), children));
});
CTableRow.propTypes = {
    active: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    align: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['bottom', 'middle', 'top']),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    color: _props_js__WEBPACK_IMPORTED_MODULE_4__.colorPropType,
};
CTableRow.displayName = 'CTableRow';


//# sourceMappingURL=CTableRow.js.map


/***/ }),

/***/ "./node_modules/@coreui/react/dist/esm/components/table/utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@coreui/react/dist/esm/components/table/utils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getColumnLabel: () => (/* binding */ getColumnLabel),
/* harmony export */   getColumnNames: () => (/* binding */ getColumnNames),
/* harmony export */   getColumnNamesFromItems: () => (/* binding */ getColumnNamesFromItems),
/* harmony export */   pretifyName: () => (/* binding */ pretifyName)
/* harmony export */ });
var pretifyName = function (name) {
    return name
        .replace(/[-_.]/g, ' ')
        .replace(/ +/g, ' ')
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .split(' ')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(' ');
};
var getColumnLabel = function (column) { var _a; return typeof column === 'object' ? (_a = column.label) !== null && _a !== void 0 ? _a : pretifyName(column.key) : pretifyName(column); };
var getColumnNames = function (columns, items) {
    return columns
        ? columns.map(function (column) {
            return typeof column === 'object' ? column.key : column;
        })
        : items && getColumnNamesFromItems(items);
};
var getColumnNamesFromItems = function (items) {
    return Object.keys(items[0] || {}).filter(function (el) { return el.charAt(0) !== '_'; });
};


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./resources/js/components/views/pages/stock.js":
/*!******************************************************!*\
  !*** ./resources/js/components/views/pages/stock.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-pencil.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-trash.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/dist/index.es.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/table/CTable.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/table/CTableHead.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/table/CTableRow.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/table/CTableHeaderCell.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/table/CTableBody.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/table/CTableDataCell.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/esm/components/button/CButton.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Stock = function Stock() {
  var tableExample = [{
    id: 1,
    name: "S21 ultra",
    model: "2021",
    brand: "Samsung",
    qty: 200
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "d-grid gap-2 d-md-flex justify-content-md-end mb-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        color: "primary",
        className: "me-md-2",
        to: "/stock-form",
        children: "Add new +"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CTable, {
      align: "middle",
      className: "mb-0 border",
      hover: true,
      responsive: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_4__.CTableHead, {
        className: "text-nowrap",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CTableRow, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CTableHeaderCell, {
            className: "bg-body-tertiary text-center",
            children: "ID"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CTableHeaderCell, {
            className: "bg-body-tertiary",
            children: "Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CTableHeaderCell, {
            className: "bg-body-tertiary ",
            children: "Model"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CTableHeaderCell, {
            className: "bg-body-tertiary",
            children: "Brand"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CTableHeaderCell, {
            className: "bg-body-tertiary ",
            children: "QTY"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CTableHeaderCell, {
            className: "bg-body-tertiary text-center",
            children: "Action"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_7__.CTableBody, {
        children: tableExample.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CTableRow, {
            "v-for": "item in tableItems",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CTableDataCell, {
              className: "text-center",
              children: item.id
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CTableDataCell, {
              children: item.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CTableDataCell, {
              children: item.model
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CTableDataCell, {
              children: item.brand
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CTableDataCell, {
              children: item.qty
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CTableDataCell, {
              className: "text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "d-grid gap-2 d-md-flex justify-content-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CButton, {
                  color: "primary",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
                    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_10__.cilPencil
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_9__.CButton, {
                  color: "danger",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
                    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_11__.cilTrash
                  })
                })]
              })
            })]
          }, index);
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stock);

/***/ })

}]);