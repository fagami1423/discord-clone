"use client";
"use strict";
exports.__esModule = true;
exports.NavigationAction = void 0;
var lucide_react_1 = require("lucide-react");
var action_tooltip_1 = require("@/components/action-tooltip");
exports.NavigationAction = function () {
    return (React.createElement("div", null,
        React.createElement(action_tooltip_1.ActionTooltip, { side: "right", align: "center", label: "Add a server" },
            React.createElement("button", { className: "group flex items-center" },
                React.createElement("div", { className: "flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px]\n                transition-all overflow-hidden items-center justify-center bg-background\n                 dark:bg-neutral-700 group-hover:bg-emerald-500" },
                    React.createElement(lucide_react_1.Plus, { className: "group-hover:text-white transition text-emerald-500", size: 25 }))))));
};
