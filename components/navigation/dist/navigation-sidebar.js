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
exports.NavigationSidebar = void 0;
var navigation_1 = require("next/navigation");
var separator_1 = require("@/components/ui/separator");
var scroll_area_1 = require("@/components/ui/scroll-area");
var current_profile_1 = require("@/lib/current-profile");
var db_1 = require("@/lib/db");
var navigation_action_1 = require("./navigation-action");
var navigation_item_1 = require("./navigation-item");
var mode_toggle_1 = require("@/components/mode-toggle");
var nextjs_1 = require("@clerk/nextjs");
exports.NavigationSidebar = function () { return __awaiter(void 0, void 0, void 0, function () {
    var profile, servers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, current_profile_1.currentProfile()];
            case 1:
                profile = _a.sent();
                if (!profile) {
                    return [2 /*return*/, navigation_1.redirect("/")];
                }
                return [4 /*yield*/, db_1.db.server.findMany({
                        where: {
                            members: {
                                some: {
                                    profileId: profile.id
                                }
                            }
                        }
                    })];
            case 2:
                servers = _a.sent();
                return [2 /*return*/, (React.createElement("div", { className: "space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3" },
                        React.createElement(navigation_action_1.NavigationAction, null),
                        React.createElement(separator_1.Separator, { className: "h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" }),
                        React.createElement(scroll_area_1.ScrollArea, { className: "flex-1 w-full" }, servers.map(function (server) {
                            return React.createElement("div", { key: server.id, className: "mb-4" },
                                React.createElement(navigation_item_1.NavigationItem, { id: server.id, name: server.name, imageUrl: server.imageUrl }));
                        })),
                        React.createElement("div", { className: "pb-3 mt-auto flex items-center flex-col gap-y-4" },
                            React.createElement(mode_toggle_1.ModeToggle, null),
                            React.createElement(nextjs_1.UserButton, { afterSignOutUrl: "/", appearance: {
                                    elements: {
                                        avatarBox: "h-[48px] w-[48px]"
                                    }
                                } }))))];
        }
    });
}); };
