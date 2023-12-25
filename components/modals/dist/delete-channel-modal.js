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
exports.DeleteChannelModal = void 0;
var query_string_1 = require("query-string");
var axios_1 = require("axios");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var dialog_1 = require("@/components/ui/dialog");
var use_modal_store_1 = require("@/hooks/use-modal-store");
var button_1 = require("@/components/ui/button");
exports.DeleteChannelModal = function () {
    var _a = use_modal_store_1.useModal(), isOpen = _a.isOpen, onClose = _a.onClose, type = _a.type, data = _a.data;
    var router = navigation_1.useRouter();
    var isModalOpen = isOpen && type === "deleteChannel";
    var server = data.server, channel = data.channel;
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var onClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setIsLoading(true);
                    url = query_string_1["default"].stringifyUrl({
                        url: "/api/channels/" + (channel === null || channel === void 0 ? void 0 : channel.id),
                        query: {
                            serverId: server === null || server === void 0 ? void 0 : server.id
                        }
                    });
                    return [4 /*yield*/, axios_1["default"]["delete"](url)];
                case 1:
                    _a.sent();
                    onClose();
                    router.refresh();
                    router.push("/servers/" + (server === null || server === void 0 ? void 0 : server.id));
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 3:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(dialog_1.Dialog, { open: isModalOpen, onOpenChange: onClose },
        React.createElement(dialog_1.DialogContent, { className: "bg-white text-black p-0 overflow-hidden" },
            React.createElement(dialog_1.DialogHeader, { className: "pt-8 px-6" },
                React.createElement(dialog_1.DialogTitle, { className: "text-2xl text-center font-bold" }, "Delete Channel"),
                React.createElement(dialog_1.DialogDescription, { className: "text-center text-zinc-500" },
                    "Are you sure you want to do this? ",
                    React.createElement("br", null),
                    React.createElement("span", { className: "text-indigo-500 font-semibold" },
                        "#", channel === null || channel === void 0 ? void 0 :
                        channel.name),
                    " will be permanently deleted.")),
            React.createElement(dialog_1.DialogFooter, { className: "bg-gray-100 px-6 py-4" },
                React.createElement("div", { className: "flex items-center justify-between w-full" },
                    React.createElement(button_1.Button, { disabled: isLoading, onClick: onClose, variant: "ghost" }, "Cancel"),
                    React.createElement(button_1.Button, { disabled: isLoading, variant: "primary", onClick: onClick }, "Confirm"))))));
};
