var ui = require("zed/ui");
var fs = require("zed/fs");
var session = require("zed/session");

module.exports = function(info) {
    ui.prompt("What to grep for:", "").then(function(phrase) {
        if(!phrase) {
            return;
        }
        return session.goto("zed::git::grep").then(function() {
            return fs.run(["git", "grep", "-n", "--no-color", phrase]);
        }).then(function(results) {
            session.setText("zed::git::grep", "Git grepping for '" + phrase + "'\n\n" + results);
        });
    });
}
