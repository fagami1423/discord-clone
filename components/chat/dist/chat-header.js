"use strict";
exports.__esModule = true;
exports.ChatHeader = void 0;
var lucide_react_1 = require("lucide-react");
var mobile_toggle_1 = require("@/components/mobile-toggle");
var user_avatar_1 = require("@/components/user-avatar");
exports.ChatHeader = function (_a) {
    var serverId = _a.serverId, name = _a.name, type = _a.type, imageUrl = _a.imageUrl;
    return (React.createElement("div", { className: "text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2" },
        React.createElement(mobile_toggle_1.MobileToggle, { serverId: serverId }),
        type === "channel" && (React.createElement(lucide_react_1.Hash, { className: "w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" })),
        type === "conversation" && (React.createElement(user_avatar_1.UserAvatar, { src: imageUrl, className: "h-8 w-8 md:h-8 md:w-8 mr-2" })),
        React.createElement("p", { className: "font-semibold text-md text-black dark:text-white" }, name)));
};
