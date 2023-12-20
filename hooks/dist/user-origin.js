"use strict";
exports.__esModule = true;
exports.useOrigin = void 0;
var react_1 = require("react");
exports.useOrigin = function () {
    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    var origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : "";
    if (!mounted) {
        return "";
    }
    return origin;
};
