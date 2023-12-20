"use client";
"use strict";
exports.__esModule = true;
exports.FileUpload = void 0;
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var uploadthing_1 = require("@/lib/uploadthing");
require("@uploadthing/react/styles.css");
exports.FileUpload = function (_a) {
    var onChange = _a.onChange, value = _a.value, endpoint = _a.endpoint;
    var fileType = value === null || value === void 0 ? void 0 : value.split(".").pop();
    if (value && fileType !== "pdf") {
        return (React.createElement("div", { className: "relative w-20 h-20" },
            React.createElement(image_1["default"], { fill: true, src: value, alt: "Upload", className: "rounded-full" }),
            React.createElement("button", { onClick: function () { return onChange(""); }, className: "bg-rose-500 text-white p-1 rounded-full absolute toip-0 right-0 shadow-sm" },
                React.createElement(lucide_react_1.X, { className: "h-4 w-4" }))));
    }
    return (React.createElement(uploadthing_1.UploadDropzone, { endpoint: endpoint, onClientUploadComplete: function (res) {
            onChange(res === null || res === void 0 ? void 0 : res[0].url);
        }, onUploadError: function (error) {
            console.log(error);
        } }));
};
