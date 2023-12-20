"use client";
"use strict";
exports.__esModule = true;
exports.ModalProvider = void 0;
var create_server_modal_1 = require("@/components/modals/create-server-modal");
var react_1 = require("react");
var invite_modal_1 = require("@/components/modals/invite-modal");
exports.ModalProvider = function () {
    var _a = react_1.useState(false), isMounted = _a[0], setIsMounted = _a[1];
    react_1.useEffect(function () {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(create_server_modal_1.CreateServerModal, null),
        React.createElement(invite_modal_1.InviteModal, null)));
};
