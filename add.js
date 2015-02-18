var fs = require("zed/fs");
var session = require("zed/session");

module.exports = function(info) {
    var path = info.path.substring(1);
    return fs.run(["git", "add", path]).then(function(result) {
        if(result.trim()) {
            return console.error("Error:", result);
        }
        return session.flashMessage(info.path, "Added to git", 1000);
    });
};
