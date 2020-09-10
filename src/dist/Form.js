"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 50%;\n"], ["\n\twidth: 50%;\n"])));
var InputText = styled_components_1["default"].input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\n\tborder-radius: 5px;\n\tborder: none\n\n"], ["\n\n\tborder-radius: 5px;\n\tborder: none\n\n"])));
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Input.prototype.render = function () {
        return (react_1["default"].createElement(Wrapper, null,
            react_1["default"].createElement(InputText, null)));
    };
    return Input;
}(react_1["default"].Component));
exports["default"] = Input;
var templateObject_1, templateObject_2;
