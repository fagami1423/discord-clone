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
var _a, _b;
exports.__esModule = true;
exports.ServerSidebar = void 0;
var client_1 = require("@prisma/client");
var navigation_1 = require("next/navigation");
var lucide_react_1 = require("lucide-react");
var db_1 = require("@/lib/db");
var current_profile_1 = require("@/lib/current-profile");
var scroll_area_1 = require("@/components/ui/scroll-area");
var separator_1 = require("@/components/ui/separator");
var server_header_1 = require("./server-header");
var server_section_1 = require("./server-section");
var server_search_1 = require("./server-search");
var server_channel_1 = require("./server-channel");
var server_member_1 = require("./server-member");
var iconMap = (_a = {},
    _a[client_1.ChannelType.TEXT] = React.createElement(lucide_react_1.Hash, { className: "mr-2 h-4 w-4" }),
    _a[client_1.ChannelType.AUDIO] = React.createElement(lucide_react_1.Mic, { className: "mr-2 h-4 w-4" }),
    _a[client_1.ChannelType.VIDEO] = React.createElement(lucide_react_1.Video, { className: "mr-2 h-4 w-4" }),
    _a);
var roleIconMap = (_b = {},
    _b[client_1.MemberRole.GUEST] = null,
    _b[client_1.MemberRole.MODERATOR] = React.createElement(lucide_react_1.ShieldCheck, { className: "h-4 2-3 mr-2 text-indigo-500" }),
    _b[client_1.MemberRole.ADMIN] = React.createElement(lucide_react_1.ShieldAlert, { className: "h-4 2-3 mr-2 text-rose-500" }),
    _b);
exports.ServerSidebar = function (_a) {
    var serverId = _a.serverId;
    return __awaiter(void 0, void 0, void 0, function () {
        var profile, server, textChannels, audioChannels, videoChannels, members, role;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, current_profile_1.currentProfile()];
                case 1:
                    profile = _c.sent();
                    if (!profile) {
                        return [2 /*return*/, navigation_1.redirect("/")];
                    }
                    return [4 /*yield*/, db_1.db.server.findUnique({
                            where: {
                                id: serverId
                            },
                            include: {
                                channels: {
                                    orderBy: {
                                        createdAt: "asc"
                                    }
                                },
                                members: {
                                    include: {
                                        profile: true
                                    },
                                    orderBy: {
                                        role: "asc"
                                    }
                                }
                            }
                        })];
                case 2:
                    server = _c.sent();
                    textChannels = server === null || server === void 0 ? void 0 : server.channels.filter(function (channel) { return channel.type === client_1.ChannelType.TEXT; });
                    audioChannels = server === null || server === void 0 ? void 0 : server.channels.filter(function (channel) { return channel.type === client_1.ChannelType.AUDIO; });
                    videoChannels = server === null || server === void 0 ? void 0 : server.channels.filter(function (channel) { return channel.type === client_1.ChannelType.VIDEO; });
                    members = server === null || server === void 0 ? void 0 : server.members.filter(function (member) { return member.profileId !== profile.id; });
                    if (!server) {
                        return [2 /*return*/, navigation_1.redirect("/")];
                    }
                    role = (_b = server.members.find(function (member) { return member.profileId === profile.id; })) === null || _b === void 0 ? void 0 : _b.role;
                    return [2 /*return*/, (React.createElement("div", { className: "flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]" },
                            React.createElement(server_header_1.ServerHeader, { server: server, role: role }),
                            React.createElement(scroll_area_1.ScrollArea, { className: "flex-1 px-3" },
                                React.createElement("div", { className: "mt-2" },
                                    React.createElement(server_search_1.ServerSearch, { data: [
                                            {
                                                label: "Text Channels",
                                                type: "channel",
                                                data: textChannels === null || textChannels === void 0 ? void 0 : textChannels.map(function (channel) { return ({
                                                    id: channel.id,
                                                    name: channel.name,
                                                    icon: iconMap[channel.type]
                                                }); })
                                            },
                                            {
                                                label: "Voice Channels",
                                                type: "channel",
                                                data: audioChannels === null || audioChannels === void 0 ? void 0 : audioChannels.map(function (channel) { return ({
                                                    id: channel.id,
                                                    name: channel.name,
                                                    icon: iconMap[channel.type]
                                                }); })
                                            },
                                            {
                                                label: "Video Channels",
                                                type: "channel",
                                                data: videoChannels === null || videoChannels === void 0 ? void 0 : videoChannels.map(function (channel) { return ({
                                                    id: channel.id,
                                                    name: channel.name,
                                                    icon: iconMap[channel.type]
                                                }); })
                                            },
                                            {
                                                label: "Members",
                                                type: "member",
                                                data: members === null || members === void 0 ? void 0 : members.map(function (member) { return ({
                                                    id: member.id,
                                                    name: member.profile.name,
                                                    icon: roleIconMap[member.role]
                                                }); })
                                            },
                                        ] })),
                                React.createElement(separator_1.Separator, { className: "bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" }),
                                !!(textChannels === null || textChannels === void 0 ? void 0 : textChannels.length) && (React.createElement("div", { className: "mb-2" },
                                    React.createElement(server_section_1.ServerSection, { sectionType: "channels", channelType: client_1.ChannelType.TEXT, role: role, label: "Text Channels" }),
                                    React.createElement("div", { className: "space-y-[2px]" }, textChannels.map(function (channel) { return (React.createElement(server_channel_1.ServerChannel, { key: channel.id, channel: channel, role: role, server: server })); })))),
                                !!(audioChannels === null || audioChannels === void 0 ? void 0 : audioChannels.length) && (React.createElement("div", { className: "mb-2" },
                                    React.createElement(server_section_1.ServerSection, { sectionType: "channels", channelType: client_1.ChannelType.AUDIO, role: role, label: "Voice Channels" }),
                                    React.createElement("div", { className: "space-y-[2px]" }, audioChannels.map(function (channel) { return (React.createElement(server_channel_1.ServerChannel, { key: channel.id, channel: channel, role: role, server: server })); })))),
                                !!(videoChannels === null || videoChannels === void 0 ? void 0 : videoChannels.length) && (React.createElement("div", { className: "mb-2" },
                                    React.createElement(server_section_1.ServerSection, { sectionType: "channels", channelType: client_1.ChannelType.VIDEO, role: role, label: "Video Channels" }),
                                    React.createElement("div", { className: "space-y-[2px]" }, videoChannels.map(function (channel) { return (React.createElement(server_channel_1.ServerChannel, { key: channel.id, channel: channel, role: role, server: server })); })))),
                                !!(members === null || members === void 0 ? void 0 : members.length) && (React.createElement("div", { className: "mb-2" },
                                    React.createElement(server_section_1.ServerSection, { sectionType: "members", role: role, label: "Members", server: server }),
                                    React.createElement("div", { className: "space-y-[2px]" }, members.map(function (member) { return (React.createElement(server_member_1.ServerMember, { key: member.id, member: member, server: server })); })))))))];
            }
        });
    });
};
