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
exports.getOrCreateConversation = void 0;
var db_1 = require("@/lib/db");
exports.getOrCreateConversation = function (memberOneId, memberTwoId) { return __awaiter(void 0, void 0, void 0, function () {
    var conversation, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, findConversation(memberOneId, memberTwoId)];
            case 1:
                _a = (_b.sent());
                if (_a) return [3 /*break*/, 3];
                return [4 /*yield*/, findConversation(memberTwoId, memberOneId)];
            case 2:
                _a = (_b.sent());
                _b.label = 3;
            case 3:
                conversation = _a;
                if (!!conversation) return [3 /*break*/, 5];
                return [4 /*yield*/, createNewConversation(memberOneId, memberTwoId)];
            case 4:
                conversation = _b.sent();
                _b.label = 5;
            case 5: return [2 /*return*/, conversation];
        }
    });
}); };
var findConversation = function (memberOneId, memberTwoId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.db.conversation.findFirst({
                        where: {
                            AND: [
                                { memberOneId: memberOneId },
                                { memberTwoId: memberTwoId },
                            ]
                        },
                        include: {
                            memberOne: {
                                include: {
                                    profile: true
                                }
                            },
                            memberTwo: {
                                include: {
                                    profile: true
                                }
                            }
                        }
                    })];
            case 1: return [2 /*return*/, _b.sent()];
            case 2:
                _a = _b.sent();
                return [2 /*return*/, null];
            case 3: return [2 /*return*/];
        }
    });
}); };
var createNewConversation = function (memberOneId, memberTwoId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.db.conversation.create({
                        data: {
                            memberOneId: memberOneId,
                            memberTwoId: memberTwoId
                        },
                        include: {
                            memberOne: {
                                include: {
                                    profile: true
                                }
                            },
                            memberTwo: {
                                include: {
                                    profile: true
                                }
                            }
                        }
                    })];
            case 1: return [2 /*return*/, _b.sent()];
            case 2:
                _a = _b.sent();
                return [2 /*return*/, null];
            case 3: return [2 /*return*/];
        }
    });
}); };
