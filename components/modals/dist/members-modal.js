"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MembersModal = void 0;
var axios_1 = require("axios");
var query_string_1 = require("query-string");
var react_1 = require("react");
var use_modal_store_1 = require("@/hooks/use-modal-store");
var lucide_react_1 = require("lucide-react");
var dialog_1 = require("@/components/ui/dialog");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var scroll_area_1 = require("@/components/ui/scroll-area");
var user_avatar_1 = require("@/components/user-avatar");
var navigation_1 = require("next/navigation");
var roleIconMap = {
    GUEST: null,
    MODERATOR: React.createElement(lucide_react_1.ShieldCheck, { className: "h-4 w-4 ml-2 text-indigo-500" }),
    ADMIN: React.createElement(lucide_react_1.ShieldAlert, { className: "h-4 w-4 ml-2 text-rose-500" })
};
exports.MembersModal = function () {
    var _a, _b;
    var router = navigation_1.useRouter();
    var _c = use_modal_store_1.useModal(), onOpen = _c.onOpen, isOpen = _c.isOpen, onClose = _c.onClose, type = _c.type, data = _c.data;
    var _d = react_1.useState(""), loadingId = _d[0], setLoadingId = _d[1];
    var isModalOpen = isOpen && type === "members";
    var server = data.server;
    var onKick = function (memberId) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setLoadingId(memberId);
                    url = query_string_1["default"].stringifyUrl({
                        url: "/api/members/" + memberId,
                        query: {
                            serverId: server === null || server === void 0 ? void 0 : server.id
                        }
                    });
                    return [4 /*yield*/, axios_1["default"]["delete"](url)];
                case 1:
                    response = _a.sent();
                    onOpen("members", { server: response.data });
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 3:
                    setLoadingId("");
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onRoleChange = function (memberId, role) { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setLoadingId(memberId);
                    url = query_string_1["default"].stringifyUrl({
                        url: "/api/members/" + memberId,
                        query: {
                            serverId: server === null || server === void 0 ? void 0 : server.id
                        }
                    });
                    return [4 /*yield*/, axios_1["default"].patch(url, { role: role })];
                case 1:
                    response = _a.sent();
                    router.refresh();
                    onOpen("members", { server: response.data });
                    return [3 /*break*/, 4];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 4];
                case 3:
                    setLoadingId;
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
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
                    loadingId !== member.id && (React.createElement("div", { className: "ml-auto" },
                    React.createElement(dropdown_menu_1.DropdownMenu, null,
                        React.createElement(dropdown_menu_1.DropdownMenuTrigger, null,
                            React.createElement(lucide_react_1.MoreVertical, { className: "h-4 w-4 text-zinc-500" })),
                        React.createElement(dropdown_menu_1.DropdownMenuContent, { side: "left" },
                            React.createElement(dropdown_menu_1.DropdownMenuSub, null,
                                React.createElement(dropdown_menu_1.DropdownMenuSubTrigger, { className: "flex items-center" },
                                    React.createElement(lucide_react_1.ShieldQuestion, { className: "w-4 h-4 mr-2" }),
                                    React.createElement("span", null, "Role")),
                                React.createElement(dropdown_menu_1.DropdownMenuPortal, null,
                                    React.createElement(dropdown_menu_1.DropdownMenuSubContent, null,
                                        React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return onRoleChange(member.id, "GUEST"); } },
                                            React.createElement(lucide_react_1.Shield, { className: "w-4 h-4 mr-2" }),
                                            "Guest",
                                            member.role === "GUEST" && (React.createElement(lucide_react_1.Check, { className: "w-4 h-4 ml-auto text-indigo-500" }))),
                                        React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return onRoleChange(member.id, "MODERATOR"); } },
                                            React.createElement(lucide_react_1.ShieldCheck, { className: "w-4 h-4 mr-2" }),
                                            "Moderator",
                                            member.role === "MODERATOR" && (React.createElement(lucide_react_1.Check, { className: "w-4 h-4 ml-auto text-indigo-500" })))))),
                            React.createElement(dropdown_menu_1.DropdownMenuSeparator, null),
                            React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return onKick(member.id); } },
                                React.createElement(lucide_react_1.Gavel, { className: "w-4 h-4 mr-2" }),
                                "Kick"))))),
                loadingId === member.id && (React.createElement(lucide_react_1.Loader2, { className: "animate-spin text-zinc-500 ml-auto w-4 h-4" })))); })))));
};
