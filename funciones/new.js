const fs = require("fs")

function newI(title,author,genre,year,cost,price) {
console.log("Campos introducidos:" + "" + title,author,genre,year,cost,price)
let data = fs.readFileSync("./db.json", "utf-8")

var actionlog = fs.readFileSync("./log.txt", "utf-8");
let datafinal = JSON.parse(data)
var id = datafinal.length

let avaibleids = fs.readFileSync("./avaibleids.json", "utf-8")
let test = JSON.parse(avaibleids)


// Se fija si hay algo en avaibleids.json que pueda usar como futura ID en vez de crear una propiamente.
if(test.length > 0) {
var id = test[0]
console.log("Using an existent ID"+ " " + id)
test.splice(0, 1)
}


// Strings por teclado a Integer Numbers //
var year = parseFloat(year)
var cost = parseFloat(cost)
var price = parseFloat(price)
var id = parseFloat(id)

datafinal.push({id, title, author, genre, year, cost, price})

// camelCase !!!
// ex: guardadoId
// dataParaGuardar
// 
// Y escribí todo en inglés o español los nombres de la variables
let guardadoid = JSON.stringify(test)
let dataparaguardar = JSON.stringify(datafinal)
fs.writeFileSync("./db.json", dataparaguardar)
var actionlog = actionlog + "" + "Creado libro " + title + id + " | Autor: " + author + " | Genero: " + genre
fs.writeFileSync("./log.txt", actionlog)
fs.writeFileSync("./avaibleids.json", guardadoid)

var warnings = ""

// Advertencias para mejorar las practicas del operador y que tenga cuidado al momento de introducir fechas y precios. 
// Aparentemente no funciona, de momento.
if(year == null || price == null || cost == null) {
    var warnings = "| Advertencia: Uno de los valores numéricos introducidos está mal. Recomendamos el uso del edit! ID: " + id

}

return "Libro registrado con éxito." + warnings
}

module.exports = newI