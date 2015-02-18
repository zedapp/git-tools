var fs = require("zed/fs");
var session = require("zed/session");

module.exports = function() {
    var output;
    return fs.run(["git", "status"]).then(function(output_) {
        output = output_;
        return session.goto("zed::git::status");
    }).then(function() {
        return session.setText("zed::git::status", output);
    });
};
