"use strict";
exports.__esModule = true;
var nextjs_1 = require("@clerk/nextjs");
function Home() {
    return (React.createElement("div", null,
        React.createElement(nextjs_1.UserButton, { afterSignOutUrl: "/sign-in" })));
}
exports["default"] = Home;
