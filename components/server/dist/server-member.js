"use client";
"use strict";
var _a;
exports.__esModule = true;
exports.ServerMember = void 0;
var utils_1 = require("@/lib/utils");
var client_1 = require("@prisma/client");
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var user_avatar_1 = require("@/components/user-avatar");
var roleIconMap = (_a = {},
    _a[client_1.MemberRole.GUEST] = null,
    _a[client_1.MemberRole.MODERATOR] = React.createElement(lucide_react_1.ShieldCheck, { className: "h-4 w-4 ml-2 text-indigo-500" }),
    _a[client_1.MemberRole.ADMIN] = React.createElement(lucide_react_1.ShieldAlert, { className: "h-4 w-4 ml-2 text-rose-500" }),
    _a);
exports.ServerMember = function (_a) {
    var member = _a.member, server = _a.server;
    var params = navigation_1.useParams();
    var router = navigation_1.useRouter();
    var icon = roleIconMap[member.role];
    var onClick = function () {
        router.push("/servers/" + (params === null || params === void 0 ? void 0 : params.serverId) + "/conversations/" + member.id);
    };
    return (React.createElement("button", { onClick: onClick, className: utils_1.cn("group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1", (params === null || params === void 0 ? void 0 : params.memberId) === member.id && "bg-zinc-700/20 dark:bg-zinc-700") },
        React.createElement(user_avatar_1.UserAvatar, { src: member.profile.imageUrl, className: "h-8 w-58 md:h-8 md:w-8" }),
        React.createElement("p", { className: utils_1.cn("font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition", (params === null || params === void 0 ? void 0 : params.memberId) === member.id && "text-primary dark:text-zinc-200 dark:group-hover-text-white") }, member.profile.name)));
};
