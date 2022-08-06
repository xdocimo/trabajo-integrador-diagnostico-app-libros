
const fs = require("fs"); 

function list() {
let data = fs.readFileSync("./db.json", "utf-8");
let datafinal = JSON.parse(data);
var lista = []
for (let i = 0; i < datafinal.length; i++) {
    lista.push("Titulo: " +"" + datafinal[i].title + " | ID: " + datafinal[i].id + " " + "| Autor: " + datafinal[i].author) 
    }
return lista;

}

module.exports = list
