# manipulacion-arrays
Curso de manipulacion de Arrays de Platzi

## forEach
como metodo para recorrer arrays con arrow functions de forma simplificada. (file: 01-for-each.js)

## Mutabilidad vs inmutabilidad
Cuando un objeto es copia de otro JS no lo copia completamente sino que puede hacer referencia en memoria a parte de este con lo cual una modificacion del objeto original podría significar una alteracion del objeto copiado.

## Metodo map
es Inmutable, crea un nuevo array con el resultado de la transformación. El nuevo array crea el mismo numero de elementos que el array original. (file: 01-map.js)

## Map Reload
Utilizando el spreadOperator ( ...var ) podemos agregar elementos a un objeto con la funcion map sin alterar el objeto original que sucedería debido a la referencia en memoria (ver funcionamiento rta2 vs rta3).

## Filter
Filtra los elementos de un array en funcion a una condicion. Crea u nuevo array. Es inmutable, crea un nuevo array con los elementos que cumplen la condicion y no altera el original. El array resultante puede tener una longitud 0 o como maximo de igual tamaño al original. En el ejemplo con search del archivo (file: 03-map-reload.js) se muestra como utilizar includes en conjunto con la funcion filter para hacer busquedas por caracter o conjunto de caracteres.