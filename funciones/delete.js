
const fs = require("fs"); 

function delete1(id) {
let data = fs.readFileSync("./db.json", "utf-8");
let datafinal = JSON.parse(data);
var flag = "No se ha encontrado esa busqueda"
for (let i = 0; i < datafinal.length; i++) {
    if(id == datafinal[i].id) {
    datafinal.splice(i,1) 
}
var flag = "Borrado con éxito"

}
let guardado = JSON.stringify(datafinal)
fs.writeFileSync("./db.json", guardado)
return flag
}

module.exports = delete1
