"use client";
"use strict";
var _a;
exports.__esModule = true;
exports.ServerChannel = void 0;
var utils_1 = require("@/lib/utils");
var client_1 = require("@prisma/client");
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var action_tooltip_1 = require("@/components/action-tooltip");
var use_modal_store_1 = require("@/hooks/use-modal-store");
;
var iconMap = (_a = {},
    _a[client_1.ChannelType.TEXT] = lucide_react_1.Hash,
    _a[client_1.ChannelType.AUDIO] = lucide_react_1.Mic,
    _a[client_1.ChannelType.VIDEO] = lucide_react_1.Video,
    _a);
exports.ServerChannel = function (_a) {
    var channel = _a.channel, server = _a.server, role = _a.role;
    var onOpen = use_modal_store_1.useModal().onOpen;
    var params = navigation_1.useParams();
    var router = navigation_1.useRouter();
    var Icon = iconMap[channel.type];
    var onClick = function () {
        router.push("/servers/" + (params === null || params === void 0 ? void 0 : params.serverId) + "/channels/" + channel.id);
    };
    var onAction = function (e, action) {
        e.stopPropagation();
        onOpen(action, { channel: channel, server: server });
    };
    return (React.createElement("button", { onClick: onClick, className: utils_1.cn("group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1", (params === null || params === void 0 ? void 0 : params.channelId) === channel.id && "bg-zinc-700/20 dark:bg-zinc-700") },
        React.createElement(Icon, { className: "flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" }),
        React.createElement("p", { className: utils_1.cn("line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition", (params === null || params === void 0 ? void 0 : params.channelId) === channel.id && "text-primary dark:text-zinc-200 dark:group-hover:text-white") }, channel.name),
        channel.name !== "general" && role !== client_1.MemberRole.GUEST && (React.createElement("div", { className: "ml-auto flex items-center gap-x-2" },
            React.createElement(action_tooltip_1.ActionTooltip, { label: "Edit" },
                React.createElement(lucide_react_1.Edit, { onClick: function (e) { return onAction(e, "editChannel"); }, className: "hidden group-hover:block h-4 w-4 text-zinc-500 hover:text-zinc-600\n                            dark:text-zinc-400 dark:hover:text-zinc-300 transition" })),
            React.createElement(action_tooltip_1.ActionTooltip, { label: "Remove" },
                React.createElement(lucide_react_1.Trash, { onClick: function (e) { return onAction(e, "deleteChannel"); }, className: "hidden group-hover:block h-4 w-4 text-zinc-500 hover:text-zinc-600\n                            dark:text-zinc-400 dark:hover:text-zinc-300 transition" })))),
        channel.name === "general" && (React.createElement(lucide_react_1.Lock, { className: "ml-auto w-4 h-4 text-zincv=-500 dark:text-zinc-400" }))));
};
