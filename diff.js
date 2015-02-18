var fs = require("zed/fs");
var session = require("zed/session");

module.exports = function(info) {
    var output;
    return fs.run(["git", "diff"]).then(function(output_) {
        output = output_;
        return session.goto("zed::vc::diff.diff");
    }).then(function() {
        return session.setText("zed::vc::diff.diff", output);
    });
};
