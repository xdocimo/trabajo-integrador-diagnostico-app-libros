#trabajo integrador diagnostico app libros

COMMIT 6/8/22 | 20:32
En este commit, se soluciona definitivamente y de forma más limpia el problema de las IDS UNICAS. Se comienza a utilizar avaibleids.json, JSON en donde se registrará todas las ids que sean borradas desde delete.js y al usar NEW.JS primero se fijará si hay alguna avaibleid para usar en vez de usar el length del archivo, en caso de que sí, usará esa y la borrará de avaibleids.json. 

Reemplaza la anterior solución que era (básicamente) hacer que el delete actue como edit y en vez de usar un splice() modificaba los parametros a "Avaible" para que el new iterara en búsqueda de estos parámetros en vez de crear uno.


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
