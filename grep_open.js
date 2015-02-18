var session = require("zed/session");

/**
 * Inputs: lines, cursor
 */
module.exports = function(info) {
    var pos = info.inputs.cursor;
    var lines = info.inputs.lines;

    var line = lines[pos.row];
    console.log("Extract from this", line);
    var parts = line.split(':');
    if(parts.length >= 3) {
        return session.goto(parts.slice(0, 2).join(':'));
    }
};
