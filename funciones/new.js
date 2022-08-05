const fs = require("fs")

function newI(title,author,genre,year,cost,price) {
    console.log(title,author,genre,year,cost,price)
let data = fs.readFileSync("./db.json", "utf-8")
let datafinal = JSON.parse(data)
let id = datafinal.length

datafinal.push({id, title, author, genre, year, cost, price})

let dataparaguardar = JSON.stringify(datafinal)
fs.writeFileSync("./db.json", dataparaguardar)

return "Libro registrado con éxito."

}

module.exports = newI