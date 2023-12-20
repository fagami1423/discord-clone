"use client";
"use strict";
exports.__esModule = true;
exports.ActionTooltip = void 0;
var tooltip_1 = require("@/components/ui/tooltip");
var react_1 = require("react");
exports.ActionTooltip = function (_a) {
    var label = _a.label, children = _a.children, side = _a.side, align = _a.align;
    return (react_1["default"].createElement(tooltip_1.TooltipProvider, null,
        react_1["default"].createElement(tooltip_1.Tooltip, { delayDuration: 50 },
            react_1["default"].createElement(tooltip_1.TooltipTrigger, { asChild: true }, children),
            react_1["default"].createElement(tooltip_1.TooltipContent, { side: side, align: align },
                react_1["default"].createElement("p", { className: "font-semibold text-sm capitalize" }, label.toLowerCase())))));
};
