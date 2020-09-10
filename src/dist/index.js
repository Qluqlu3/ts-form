"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var Input_1 = require("./Input");
var styled_components_1 = require("styled-components");
var Password_1 = require("./Password");
var Radio_1 = require("./Radio");
var Select_1 = require("./Select");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 100vw;\n\theight: 100vh;\n\tmargin: 0px;\n\tpadding: 10px;\n\tbackground: #999;\n"], ["\n\twidth: 100vw;\n\theight: 100vh;\n\tmargin: 0px;\n\tpadding: 10px;\n\tbackground: #999;\n"])));
var Text = styled_components_1["default"].h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: #222;\n"], ["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: #222;\n"])));
react_dom_1["default"].render(react_1["default"].createElement(Wrapper, null,
    react_1["default"].createElement(Text, null, "\u30D5\u30A9\u30FC\u30E0"),
    react_1["default"].createElement(Input_1["default"], null),
    react_1["default"].createElement(Password_1["default"], null),
    react_1["default"].createElement(Radio_1["default"], null),
    react_1["default"].createElement(Select_1["default"], null)), document.getElementById('root'));
var templateObject_1, templateObject_2;
