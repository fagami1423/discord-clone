"use client";
"use strict";
exports.__esModule = true;
exports.ServerSearch = void 0;
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var command_1 = require("@/components/ui/command");
var navigation_1 = require("next/navigation");
exports.ServerSearch = function (_a) {
    var data = _a.data;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var router = navigation_1.useRouter();
    var params = navigation_1.useParams();
    react_1.useEffect(function () {
        var down = function (e) {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(function (open) { return !open; });
            }
        };
        document.addEventListener("keydown", down);
        return function () { return document.removeEventListener("keydown", down); };
    }, []);
    var onclick = function (_a) {
        var id = _a.id, type = _a.type;
        setOpen(false);
        if (type === "member") {
            return router.push("/servers/" + (params === null || params === void 0 ? void 0 : params.serverId) + "/conversations/" + id);
        }
        if (type === "channel") {
            return router.push("/servers/" + (params === null || params === void 0 ? void 0 : params.serverId) + "/channels/" + id);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: function () { setOpen(true); }, className: "group px-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 \n                dark:hover:bg-zinc-700/50 transition" },
            React.createElement(lucide_react_1.Search, { className: "w-4 h-4 text-zinc-500 dark:text-zinc-400" }),
            React.createElement("p", { className: "font-semibold text-sm text-zinc-500 dark:text-zinc-400\n                    group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition" }, "Search"),
            React.createElement("kbd", { className: "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded\n                    border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto" },
                React.createElement("span", { className: "text-xs" }, "\u2318"),
                "K")),
        React.createElement(command_1.CommandDialog, { open: open, onOpenChange: setOpen },
            React.createElement(command_1.CommandInput, { placeholder: "Search all channels and members" }),
            React.createElement(command_1.CommandList, null,
                React.createElement(command_1.CommandEmpty, null, "No Results found"),
                data.map(function (_a) {
                    var label = _a.label, type = _a.type, data = _a.data;
                    if (!(data === null || data === void 0 ? void 0 : data.length))
                        return null;
                    return (React.createElement(command_1.CommandGroup, { key: label, heading: label }, data === null || data === void 0 ? void 0 : data.map(function (_a) {
                        var id = _a.id, icon = _a.icon, name = _a.name;
                        return (React.createElement(command_1.CommandItem, { key: id, onSelect: function () { return onclick({ id: id, type: type }); } },
                            icon,
                            React.createElement("span", null, name)));
                    })));
                })))));
};
