"use client";
"use strict";
exports.__esModule = true;
exports.ModalProvider = void 0;
var create_server_modal_1 = require("@/components/modals/create-server-modal");
var edit_server_modal_1 = require("@/components/modals/edit-server-modal");
var members_modal_1 = require("@/components/modals/members-modal");
var react_1 = require("react");
var invite_modal_1 = require("@/components/modals/invite-modal");
var create_channel_modal_1 = require("@/components/modals/create-channel-modal");
var leave_server_modal_1 = require("@/components/modals/leave-server-modal");
var delete_server_modal_1 = require("@/components/modals/delete-server-modal");
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
        React.createElement(invite_modal_1.InviteModal, null),
        React.createElement(edit_server_modal_1.EditServerModal, null),
        React.createElement(members_modal_1.MembersModal, null),
        React.createElement(create_channel_modal_1.CreateChannelModal, null),
        React.createElement(leave_server_modal_1.LeaveServerModal, null),
        React.createElement(delete_server_modal_1.DeleteServerModal, null)));
};
