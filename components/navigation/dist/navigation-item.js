"use client";
"use strict";
exports.__esModule = true;
exports.NavigationItem = void 0;
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var utils_1 = require("@/lib/utils");
var action_tooltip_1 = require("@/components/action-tooltip");
;
exports.NavigationItem = function (_a) {
    var id = _a.id, imageUrl = _a.imageUrl, name = _a.name;
    var params = navigation_1.useParams();
    var router = navigation_1.useRouter();
    return (React.createElement(action_tooltip_1.ActionTooltip, { side: "right", align: "center", label: name },
        React.createElement("button", { onClick: function () { }, className: "group relative flex items-center" },
            React.createElement("div", { className: utils_1.cn("absolute left-0 bg-primary rounded-r-full transition-all w-[4px]", (params === null || params === void 0 ? void 0 : params.serverId) !== id && "group-hover:h-[20px]", (params === null || params === void 0 ? void 0 : params.serverId) === id ? "h-[36px]" : "h-[8px]") }),
            React.createElement("div", { className: utils_1.cn("relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden", (params === null || params === void 0 ? void 0 : params.serverId) === id && "bg-primary/10 text-primary rounded-[16px]") },
                React.createElement(image_1["default"], { fill: true, src: imageUrl, alt: "Channel" })))));
};
