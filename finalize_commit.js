var fs = require("zed/fs");
var session = require("zed/session");

module.exports = function(info) {
    var commitMessage = info.inputs.text;
    var lines = commitMessage.trim().split("\n");
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.length > 0 && line[0] !== "#") {
            newLines.push(line);
        }
    }
    commitMessage = newLines.join("\n").trim();
    var output;
    return fs.run(["git", "commit", "-m", commitMessage]).then(function(output_) {
        output = output_;
        session.deleteSession("zed::vc::message.gitcommit");
        return session.goto("zed::output");
    }).then(function() {
        return session.setText("zed::output", output);
    });
};
