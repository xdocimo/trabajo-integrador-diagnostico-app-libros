
const fs = require("fs"); 

function edit(id, opcion, nuevovalor) {
let data = fs.readFileSync("./db.json", "utf-8");
let datafinish = JSON.parse(data);

for (let i = 0; i < datafinish.length; i++) {
    if(id == datafinish[i].id) {
var flag = "Editado con éxito"
switch (opcion) {
    case "title":
    datafinish[i].title = nuevovalor
break;
    case "author":
    datafinish[i].author = nuevovalor
break;
    case "genre":
    datafinish[i].genre = nuevovalor
break;
    case "year":
    datafinish[i].year = nuevovalor
break;
    case "price":
    datafinish[i].price = nuevovalor
default:
    var flag = "Opciones disponibles para modificar: title,author,genre,year,price."
}
}
}


let dataparaguardar = JSON.stringify(datafinish)
fs.writeFileSync("../db.json", dataparaguardar)
return flag
}


module.exports = edit
