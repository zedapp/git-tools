var session = require("zed/session");

module.exports = function(info) {
    return session.deleteSession("zed::vc::message.gitcommit");
}
