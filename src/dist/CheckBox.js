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
var React = require("react");
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1["default"]("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"], ["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"])));
var FormCheckBox = styled_components_1["default"]("input")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    CheckBox.prototype.render = function () {
        return (React.createElement(Wrapper, null,
            React.createElement(FormCheckBox, { type: "checkbox" }),
            "AAA"));
    };
    return CheckBox;
}(React.Component));
exports["default"] = CheckBox;
var templateObject_1, templateObject_2;
