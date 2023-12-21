"use strict";
exports.__esModule = true;
exports.UserAvatar = void 0;
var avatar_1 = require("@/components/ui/avatar");
var utils_1 = require("@/lib/utils");
exports.UserAvatar = function (_a) {
    var src = _a.src, className = _a.className;
    return (React.createElement(avatar_1.Avatar, { className: utils_1.cn("h-7 w-7 md:h-10 md:w-10", className) },
        React.createElement(avatar_1.AvatarImage, { src: src })));
};
