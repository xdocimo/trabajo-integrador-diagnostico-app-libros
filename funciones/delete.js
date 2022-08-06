
const fs = require("fs"); 

function delete1(id) {
let data = fs.readFileSync("./db.json", "utf-8");
var actionlog = fs.readFileSync("./log.txt", "utf-8");
let datafinal = JSON.parse(data);
var flag = "No se ha encontrado esa busqueda"
for (let i = 0; i < datafinal.length; i++) {
    if(id == datafinal[i].id) {
    datafinal[i].id = "Avaible"
    datafinal[i].title = "-"
    datafinal[i].author = "-"
    datafinal[i].genre = "-"
    datafinal[i].year = "-"
    datafinal[i].cost = "-"
    datafinal[i].price = "Out of stock"      
}
var flag = "Borrado con éxito " + " | Libro: " + datafinal[i].title

}
let guardado = JSON.stringify(datafinal)
fs.writeFileSync("./db.json", guardado)
var actionlog = actionlog + "" + "Borrado libro: ID " + id
fs.writeFileSync("./log.txt", actionlog)
return flag
}

module.exports = delete1
