"use strict";
exports.__esModule = true;
var mode_toggle_1 = require("@/components/ui/mode-toggle");
var nextjs_1 = require("@clerk/nextjs");
function Home() {
    return (React.createElement("div", null,
        React.createElement(nextjs_1.UserButton, { afterSignOutUrl: "/sign-in" }),
        React.createElement(mode_toggle_1.ModeToggle, null)));
}
exports["default"] = Home;
