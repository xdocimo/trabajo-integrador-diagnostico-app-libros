function sort(choice) {

    const fs = require("fs"); 
    var data = fs.readFileSync("./db.json", "utf-8")
    var datafinish = JSON.parse(data)
  
    var precios = []
    var años = []
    
switch (choice) {
    case "prices":
    for (let i = 0; i < datafinish.length; i++) {
    precios.push(datafinish[i].price) 
    }
    precios.sort((a, b) => {
        if(a == b) {
          return 0; 
        }
        if(a > b) {
          return -1;
        }
        return 1;
      });

console.log(precios)
break;


case "years":
    for (let i = 0; i < datafinish.length; i++) {
    años.push(datafinish[i].year) 
    }
    años.sort((a, b) => {
        if(a == b) {
          return 0; 
        }
        if(a > b) {
          return -1;
        }
        return 1;
      });
console.log(años)
break;

case "reviews":
// Futura implementación, returneará en base a su rating.
break;

default:
console.log("Opciones para sort: years, prices. (Descending)")
}

}
module.exports = sort
