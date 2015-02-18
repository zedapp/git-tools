var fs = require("zed/fs");
var session = require("zed/session");

module.exports = function(info) {
    var path = info.path.slice(1);
    var output;
    return fs.run(["git", "blame", path]).then(function(output_) {
        output = output_;
        return session.goto("zed::git::blame::" + path);
    }).then(function() {
        return session.setText("zed::git::blame::" + path, output);
    });
};
