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
var Wrapper = styled_components_1["default"]('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"], ["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"])));
var FormSelect = styled_components_1["default"]('select')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\twidth: 150px;\n\theight: 30px;\n\tborder-radius: 5px;\n"], ["\n\twidth: 150px;\n\theight: 30px;\n\tborder-radius: 5px;\n"])));
var Option = styled_components_1["default"]('option')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Select.prototype.render = function () {
        var lists = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF'];
        return (React.createElement(Wrapper, null,
            React.createElement(FormSelect, null, lists.map(function (list) {
                return React.createElement(Option, null, list);
            }))));
    };
    return Select;
}(React.Component));
exports["default"] = Select;
var templateObject_1, templateObject_2, templateObject_3;
