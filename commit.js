var fs = require("zed/fs");
var session = require("zed/session");

module.exports = function(info) {
    var dryRun;
    return fs.run(["git", "commit", "--dry-run"]).then(function(dryRun_) {
        dryRun = dryRun_.trim();

        return session.goto("zed::vc::message.gitcommit|write");
    }).then(function() {
        var text = "\n# Please enter the commit message for your changes above.\n";
        text += "# Lines starting with '#' will be ignored.\n#\n";
        text += "# Press Ctrl-Shift-C to finalize the commit or Esc to cancel.\n";
        text += "#\n";
        text += "# " + dryRun.replace(/\n/g, "\n# ");
        return session.setText("zed::vc::message.gitcommit", text);
    });
};
