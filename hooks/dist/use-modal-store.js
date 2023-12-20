"use strict";
exports.__esModule = true;
exports.useModal = void 0;
var zustand_1 = require("zustand");
exports.useModal = zustand_1.create(function (set) { return ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: function (type, data) {
        if (data === void 0) { data = {}; }
        return set({ type: type, isOpen: true, data: data });
    },
    onClose: function () { return set({ type: null, isOpen: false }); }
}); });
