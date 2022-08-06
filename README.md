# trabajo integrador diagnostico app libros

COMMIT 6/8/22 | 04:03

Se agregó función list.js para ver nomas los  titulos, id y autores de todos los libros de la db en vez de todo el array como en read.js

Se añadió sistema de log (registra cambios en la db en un .txt)

Se modificó el delete, ahora en vez de borrar con split modifica los parametros para dejar la ID "disponible"

New.js ahora cerciora de transformar los strings introducidos por teclado con valores númericos (precio, año de lanzamiento y costo) a números integros para almacenarlos correctamente.

Se modifica el new.js, ahora realoja nuevos libros en IDS que fueron borradas haciendo uso de un forloop que revisa si alguna ID está libre.

Se intenta introducir, sin éxito, un sistema de advertencias para quien introduzca texto en vez de números en fields price, year y cost. (NEW.JS) (PENDIENTE)


 
ENTREGA 4/8 | 21:47 (primera versión)
Contiene:


Base de datos (db.json) ✔️
Carga (para crear nuevos libros) (new.js) ✔️
Lectura (para ver los libros) (read.js) ✔️
Edición (para editar, por paramétros) (edit.js) ✔️
Borrado (para borrar libros por ID) (delete.js) ✔️

🎁 BONUSES 🎁

Búsqueda por parámetros (busca un libro con 1 solo parámetro, buscará en los fields de titulo, autor y género) ✔️
Ordenar por precios y año de lanzamiento de forma ascendentente ✔️
