
const fs = require("fs"); 

function read() {
let data = fs.readFileSync("./db.json", "utf-8");
let datafinal = JSON.parse(data);
return datafinal;

}

module.exports = read
