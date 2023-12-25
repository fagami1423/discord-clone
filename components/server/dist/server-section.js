"use client";
"use strict";
exports.__esModule = true;
exports.ServerSection = void 0;
var client_1 = require("@prisma/client");
var action_tooltip_1 = require("@/components/action-tooltip");
var lucide_react_1 = require("lucide-react");
var use_modal_store_1 = require("@/hooks/use-modal-store");
;
exports.ServerSection = function (_a) {
    var label = _a.label, role = _a.role, sectionType = _a.sectionType, channelType = _a.channelType, server = _a.server;
    var onOpen = use_modal_store_1.useModal().onOpen;
    return (React.createElement("div", { className: "flex items-center justify-between py-2" },
        React.createElement("p", { className: "text-xs uppercase font-semibold text-zinc-500\n              dark:text-zinc-400" }, label),
        role !== client_1.MemberRole.GUEST && sectionType === "channels" && (React.createElement(action_tooltip_1.ActionTooltip, { label: "create Channel", side: "top" },
            React.createElement("button", { onClick: function () { return onOpen("createChannel", { channelType: channelType }); }, className: "text-zinc-500 hover:text-zinc-400 dark:text-zinc-400\n                        dark:hover:text-zinc-300 transition" },
                React.createElement(lucide_react_1.Plus, { className: "h-4 w-4" })))),
        role === client_1.MemberRole.ADMIN && sectionType === "members" && (React.createElement(action_tooltip_1.ActionTooltip, { label: "Manage Members", side: "top" },
            React.createElement("button", { onClick: function () { return onOpen("members", { server: server }); }, className: "text-zinc-500 hover:text-zinc-400 dark:text-zinc-400\n                        dark:hover:text-zinc-300 transition" },
                React.createElement(lucide_react_1.Settings, { className: "h-4 w-4" }))))));
};
