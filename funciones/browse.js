const fs = require("fs")

function browse(param) {
    let xd = fs.readFileSync("./db.json", "utf-8") // Acostumbrarse a colocar buenos nombres de variables y en camelCase
    let datafinish = JSON.parse(xd);
    var finded = []
    for (let i = 0; i < datafinish.length; i++) {

    if(datafinish[i].title.includes(param)) {
        finded.push(datafinish[i])
    }
    if(datafinish[i].author.includes(param)) {
        finded.push(datafinish[i])
    }
    if(datafinish[i].genre.includes(param)) {
        finded.push(datafinish[i])
    }
    }
    return finded
    }

module.exports = browse