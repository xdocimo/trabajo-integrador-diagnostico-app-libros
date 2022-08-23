
const fs = require("fs"); 

function delete1(id) {
let data = fs.readFileSync("./db.json", "utf-8");
let avaibleids = fs.readFileSync("./avaibleids.json", "utf-8");
var actionlog = fs.readFileSync("./log.txt", "utf-8");
let datafinal = JSON.parse(data);
let datafinalid = JSON.parse(avaibleids);
var flag = "No se ha encontrado esa busqueda" // ??

for (let i = 0; i < datafinal.length; i++) {
    if(id == datafinal[i].id) {
        datafinal.splice(i,1) 
        datafinalid.push(id)
}
var flag = "Borrado con éxito "

}
let guardado = JSON.stringify(datafinal)
let guardadoid = JSON.stringify(datafinalid)
fs.writeFileSync("./db.json", guardado)
fs.writeFileSync("./avaibleids.json", guardadoid)
var actionlog = actionlog + " " + "Borrado libro | ID " + id
fs.writeFileSync("./log.txt", actionlog)
return flag
}

module.exports = delete1
