"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.CreateServerModal = void 0;
var z = require("zod");
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var navigation_1 = require("next/navigation");
var axios_1 = require("axios");
var dialog_1 = require("@/components/ui/dialog");
var form_1 = require("@/components/ui/form");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var file_upload_1 = require("../file-upload");
var use_modal_store_1 = require("@/hooks/use-modal-store");
var formSchema = z.object({
    name: z.string().min(1, {
        message: "Server name is required"
    }),
    imageUrl: z.string().min(1, {
        message: "Server image is required"
    })
});
exports.CreateServerModal = function () {
    var _a = use_modal_store_1.useModal(), isOpen = _a.isOpen, onClose = _a.onClose, type = _a.type;
    var router = navigation_1.useRouter();
    var isModalOpen = isOpen && type === "createServer";
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(formSchema),
        defaultValues: {
            name: "",
            imageUrl: ""
        }
    });
    var isLoading = form.formState.isSubmitting;
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].post("/api/servers", values)];
                case 1:
                    _a.sent();
                    form.reset();
                    router.refresh();
                    onClose();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleClose = function () {
        form.reset();
        onClose();
    };
    return (React.createElement(dialog_1.Dialog, { open: isModalOpen, onOpenChange: handleClose },
        React.createElement(dialog_1.DialogContent, { className: "bg-white text-black p-0 overflow-hidden" },
            React.createElement(dialog_1.DialogHeader, { className: "pt-8 px-6" },
                React.createElement(dialog_1.DialogTitle, { className: "text-2xl text-center font-bold" }, "Customize your server"),
                React.createElement(dialog_1.DialogDescription, { className: "text-center text-zinc-500" }, "Give your server a personality with a name and image. You can always change it.")),
            React.createElement(form_1.Form, __assign({}, form),
                React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8" },
                    React.createElement("div", { className: "space-y-8 px-6" },
                        React.createElement("div", { className: "flex items-center justify-center text-center" },
                            React.createElement(form_1.FormField, { control: form.control, name: "imageUrl", render: function (_a) {
                                    var field = _a.field;
                                    return (React.createElement(form_1.FormItem, null,
                                        React.createElement(form_1.FormControl, null,
                                            React.createElement(file_upload_1.FileUpload, { endpoint: "serverImage", value: field.value, onChange: field.onChange }))));
                                } })),
                        React.createElement(form_1.FormField, { control: form.control, name: "name", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, null,
                                    React.createElement(form_1.FormLabel, { className: "uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70" }, "Server name"),
                                    React.createElement(form_1.FormControl, null,
                                        React.createElement(input_1.Input, __assign({ disabled: isLoading, className: "bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0", placeholder: "Enter server name" }, field))),
                                    React.createElement(form_1.FormMessage, null)));
                            } })),
                    React.createElement(dialog_1.DialogFooter, { className: "bg-gray-100 px-6 py-4" },
                        React.createElement(button_1.Button, { variant: "primary", disabled: isLoading }, "Create")))))));
};
