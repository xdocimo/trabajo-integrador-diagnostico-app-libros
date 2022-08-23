// ############# IMPORTS ;)  ###############
const read = require("./funciones/read.js")
const edit = require("./funciones/edit.js")
const deletex = require("./funciones/delete.js")
const newI = require("./funciones/new.js")
const browse = require("./funciones/browse.js")
const sort = require("./funciones/sort.js")
const list = require("./funciones/list.js")
// ########################

const opcion = process.argv[2]
switch (opcion) {
    /*
        Ojo con la mala indentación, dificulta la lectura!!
        Cada caso lo podés estructurar así:
            case "read":
                let returnedread = (read())
                console.log(returnedread)
                break;

        Y una buena práctica es la consistencia, que consiste en ser consistente con lo que usamos en el código, por ej: el ";", si lo usás, lo usas en todo tu proyecto, o no lo usás.
        Ex:     
        
        case "read":
            let returnedread = (read());
            console.log(returnedread);
            break;

        o

        case "read":
            let returnedread = (read())
            console.log(returnedread)
            break
    */
    case "read":
    let returnedread = (read())
    console.log(returnedread)
break;
    case "edit":
    let returnededit = (edit(process.argv[3], (process.argv[4]), (process.argv[5])))
    console.log(returnededit)
    break;
    case "delete":
    let returneddelete = (deletex(process.argv[3]))
    console.log(returneddelete)
    break;
    case "new":
    // No hace falta envolver en parentesis la función, a menos que sea closure:
    // let returnednew = newI(process.argv[3], (process.argv[4]), (process.argv[5]), (process.argv[6]), (process.argv[7]), (process.argv[8]))
    let returnednew = (newI(process.argv[3], (process.argv[4]), (process.argv[5]), (process.argv[6]), (process.argv[7]), (process.argv[8])))  
    console.log(returnednew)
    break;
    case "browse":
    let returnedbrow = (browse(process.argv[3])) 
    console.log(returnedbrow)
    break;
    case "sort":
    let returnedsort = (sort(process.argv[3])) 
    console.log(returnedsort)
    break;
    case "list":
    let returnedlist = (list()) 
    console.log(returnedlist)
break;
    default: 
    console.log("Opciones disponibles: list, read, edit, delete, new, browse")
}