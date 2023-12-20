"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var nextjs_1 = require("@clerk/nextjs");
var theme_provider_1 = require("@/components/providers/theme-provider");
var utils_1 = require("@/lib/utils");
var font = google_1.Open_Sans({ subsets: ['latin'] });
exports.metadata = {
    title: 'Team Chat Application',
    description: 'Generated by create next app'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement(nextjs_1.ClerkProvider, null,
        React.createElement("html", { lang: "en" },
            React.createElement("body", { className: utils_1.cn(font.className, "bg-white dark:bg-[#313338]") },
                React.createElement(theme_provider_1.ThemeProvider, { attribute: "class", defaultTheme: "dark", enableSystem: true, storageKey: "discord-theme" }, children)))));
}
exports["default"] = RootLayout;