"use client";
"use strict";
exports.__esModule = true;
exports.ServerHeader = void 0;
var client_1 = require("@prisma/client");
var lucide_react_1 = require("lucide-react");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var use_modal_store_1 = require("@/hooks/use-modal-store");
exports.ServerHeader = function (_a) {
    var server = _a.server, role = _a.role;
    var onOpen = use_modal_store_1.useModal().onOpen;
    var isAdmin = role === client_1.MemberRole.ADMIN;
    var isModerator = isAdmin || role === client_1.MemberRole.MODERATOR;
    return (React.createElement(dropdown_menu_1.DropdownMenu, null,
        React.createElement(dropdown_menu_1.DropdownMenuTrigger, { className: "focus:outline-none", asChild: true },
            React.createElement("button", { className: "w-full text-md font-semibold flex\n                  items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2\n                  hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition" },
                server.name,
                React.createElement(lucide_react_1.ChevronDown, { className: "h-5 w-5 ml-auto" }))),
        React.createElement(dropdown_menu_1.DropdownMenuContent, { className: "w-56 text-xs font-medium text-black\n              dark:text-neutral-400 space-y-[2px]" },
            isModerator && (React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return onOpen("invite", { server: server }); }, className: "text-indigo-600 dark:text-indigo-400\n                      px-3 py-2 text-sm cursor-pointer" },
                "Invite People",
                React.createElement(lucide_react_1.UserPlus, { className: "h-4 w-4 ml-auto" }))),
            isAdmin && (React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return onOpen("editServer", { server: server }); }, className: "px-3 py-2 text-sm cursor-pointer" },
                "Server Settings",
                React.createElement(lucide_react_1.Settings, { className: "h-4 w-4 ml-auto" }))),
            isAdmin && (React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return onOpen("members", { server: server }); }, className: "px-3 py-2 text-sm cursor-pointer" },
                "Manage Members",
                React.createElement(lucide_react_1.Users, { className: "h-4 w-4 ml-auto" }))),
            isModerator && (React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return onOpen("createChannel"); }, className: "px-3 py-2 text-sm cursor-pointer" },
                "Create Channel",
                React.createElement(lucide_react_1.PlusCircle, { className: "h-4 w-4 ml-auto" }))),
            isModerator && (React.createElement(dropdown_menu_1.DropdownMenuSeparator, null)),
            isAdmin && (React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return onOpen("deleteServer", { server: server }); }, className: "text-rose-500 px-3 py-2 text-sm cursor-pointer" },
                "Delete Server",
                React.createElement(lucide_react_1.Trash, { className: "h-4 w-4 ml-auto" }))),
            !isAdmin && (React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return onOpen("leaveServer", { server: server }); }, className: "text-rose-500 px-3 py-2 text-sm cursor-pointer" },
                "Leave Server",
                React.createElement(lucide_react_1.LogOut, { className: "h-4 w-4 ml-auto" }))))));
};
