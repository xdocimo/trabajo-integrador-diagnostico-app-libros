
const fs = require("fs"); 

function read() {
    // Ojo con la indentación: https://es.javascript.info/article/coding-style/code-style.svg
let data = fs.readFileSync("./db.json", "utf-8");
let datafinal = JSON.parse(data);
return datafinal;

}

module.exports = read
