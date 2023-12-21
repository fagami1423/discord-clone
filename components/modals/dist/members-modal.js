"use client";
"use strict";
exports.__esModule = true;
exports.MembersModal = void 0;
var use_modal_store_1 = require("@/hooks/use-modal-store");
var lucide_react_1 = require("lucide-react");
var dialog_1 = require("@/components/ui/dialog");
var scroll_area_1 = require("@/components/ui/scroll-area");
var user_avatar_1 = require("@/components/user-avatar");
var react_1 = require("react");
var roleIconMap = {
    'GUEST': null,
    'MODERATOR': React.createElement(lucide_react_1.ShieldCheck, { className: "h-4 w-4 ml-2 text-indigo-500" }),
    'ADMIN': React.createElement(lucide_react_1.ShieldAlert, { className: "h-4 w-4 ml-2 text-rose-500" })
};
exports.MembersModal = function () {
    var _a, _b;
    var _c = use_modal_store_1.useModal(), onOpen = _c.onOpen, isOpen = _c.isOpen, onClose = _c.onClose, type = _c.type, data = _c.data;
    var _d = react_1.useState(""), loadingId = _d[0], setLoadingId = _d[1];
    var isModalOpen = isOpen && type === "members";
    var server = data.server;
    return (React.createElement(dialog_1.Dialog, { open: isModalOpen, onOpenChange: onClose },
        React.createElement(dialog_1.DialogContent, { className: "bg-white text-black overflow-hidden" },
            React.createElement(dialog_1.DialogHeader, { className: "pt-8 px-6" },
                React.createElement(dialog_1.DialogTitle, { className: "text-2xl text-center font-bold" }, "Manage Members"),
                React.createElement(dialog_1.DialogDescription, { className: "text-center text-zinc-500" }, (_a = server === null || server === void 0 ? void 0 : server.members) === null || _a === void 0 ? void 0 :
                    _a.length,
                    " Members")),
            React.createElement(scroll_area_1.ScrollArea, { className: "mt-8 max-h-[420px] pr-6" }, (_b = server === null || server === void 0 ? void 0 : server.members) === null || _b === void 0 ? void 0 : _b.map(function (member) { return (React.createElement("div", { key: member.id, className: "flex items-center gap-x-2 mb-6" },
                React.createElement(user_avatar_1.UserAvatar, { src: member.profile.imageUrl }),
                React.createElement("div", { className: "flex flex-col gap-y-1" },
                    React.createElement("div", { className: "text-xs font-semibold flex items-center gap-x-1" },
                        member.profile.name,
                        roleIconMap[member.role]),
                    React.createElement("p", { className: "text-xs text-zinc-500" }, member.profile.email)),
                server.profileId !== member.profileId &&
                    loadingId !== member.id && (React.createElement("div", { className: "ml-auto" }, "Actions!")))); })))));
};
