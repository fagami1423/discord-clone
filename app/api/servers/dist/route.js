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
exports.POST = void 0;
var uuid_1 = require("uuid");
var server_1 = require("next/server");
var client_1 = require("@prisma/client");
var current_profile_1 = require("@/lib/current-profile");
var db_1 = require("@/lib/db");
function POST(req) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, imageUrl, profile, server, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, req.json()];
                case 1:
                    _a = _b.sent(), name = _a.name, imageUrl = _a.imageUrl;
                    return [4 /*yield*/, current_profile_1.currentProfile()];
                case 2:
                    profile = _b.sent();
                    if (!profile) {
                        return [2 /*return*/, new server_1.NextResponse("Unauthorized", { status: 401 })];
                    }
                    return [4 /*yield*/, db_1.db.server.create({
                            data: {
                                profileId: profile.id,
                                name: name,
                                imageUrl: imageUrl,
                                inviteCode: uuid_1.v4(),
                                channels: {
                                    create: [
                                        { name: "general", profileId: profile.id },
                                    ]
                                },
                                members: {
                                    create: [
                                        { profileId: profile.id, role: client_1.MemberRole.ADMIN }
                                    ]
                                }
                            }
                        })];
                case 3:
                    server = _b.sent();
                    return [2 /*return*/, server_1.NextResponse.json(server)];
                case 4:
                    error_1 = _b.sent();
                    console.error("[SERVERS_POST]", error_1);
                    return [2 /*return*/, new server_1.NextResponse("Internal Server Error", { status: 500 })];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.POST = POST;
