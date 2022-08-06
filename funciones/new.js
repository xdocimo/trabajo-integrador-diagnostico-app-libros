const fs = require("fs")

function newI(title,author,genre,year,cost,price) {
console.log("Campos introducidos:" + "" + title,author,genre,year,cost,price)
let data = fs.readFileSync("./db.json", "utf-8")
var actionlog = fs.readFileSync("./log.txt", "utf-8");
let datafinal = JSON.parse(data)
var id = datafinal.length

// Strings por teclado a Integer Numbers //
var year = parseFloat(year)
var cost = parseFloat(cost)
var price = parseFloat(price)

// Revisa si una ID ha sido borrada para suplantarla en vez de crear una nueva. (Función delete solo cambia el field de ID por "Avaible" en vez de usar un slice convencional, de esta forma
// El programa puede saber si hay una disponibilidad sin ninguna complicación.
// Francamente optimizable. // 

var flag = false

for (let i = 0; i < datafinal.length; i++) {
    if(datafinal[i].id == "Avaible") {
        datafinal[i].id = i
        datafinal[i].title = title
        datafinal[i].author = author
        datafinal[i].genre = genre
        datafinal[i].year = year
        datafinal[i].cost = cost
        datafinal[i].price = price
        var flag = true
    }
}
if(flag == false) {
    datafinal.push({id, title, author, genre, year, cost, price})
}

let dataparaguardar = JSON.stringify(datafinal)
fs.writeFileSync("./db.json", dataparaguardar)
var actionlog = actionlog + "" + "Creado libro " + title + id + " | Autor: " + author + " | Genero: " + genre
fs.writeFileSync("./log.txt", actionlog)

var warnings = ""

// Advertencias para mejorar las practicas del operador y que tenga cuidado al momento de introducir fechas y precios. 
// Aparentemente no funciona, de momento.
if(year == null || price == null || cost == null) {
    var warnings = "| Advertencia: Uno de los valores numéricos introducidos está mal. Recomendamos el uso del edit! ID: " + id

}

return "Libro registrado con éxito." + warnings
}

module.exports = newI