"use strict";
exports.__esModule = true;
exports.useModal = void 0;
var zustand_1 = require("zustand");
exports.useModal = zustand_1.create(function (set) { return ({
    type: null,
    isOpen: false,
    onOpen: function (type) { return set({ type: type, isOpen: true }); },
    onClose: function () { return set({ type: null, isOpen: false }); }
}); });
