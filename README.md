# manipulacion-arrays
Curso de manipulacion de Arrays de Platzi

## Spread Operations
Copiar arrays ernteros con [...array] 

## forEach
como metodo para recorrer arrays con arrow functions de forma simplificada. (file: 01-for-each.js)

## Mutabilidad vs inmutabilidad
Cuando un objeto es copia de otro JS no lo copia completamente sino que puede hacer referencia en memoria a parte de este con lo cual una modificacion del objeto original podría significar una alteracion del objeto copiado.

## Metodo map
es Inmutable, crea un nuevo array con el resultado de la transformación. El nuevo array crea el mismo numero de elementos que el array original. (file: 01-map.js)

## Map Reload
Utilizando el spreadOperator ( ...var ) podemos agregar elementos a un objeto con la funcion map sin alterar el objeto original que sucedería debido a la referencia en memoria (ver funcionamiento rta2 vs rta3).

## Filter
Filtra los elementos de un array en funcion a una condicion. Crea un nuevo array. Es inmutable, crea un nuevo array con los elementos que cumplen la condicion y no altera el original. El array resultante puede tener una longitud 0 o como maximo de igual tamaño al original. En el ejemplo con search del archivo (file: 03-map-reload.js) se muestra como utilizar INCLUDES en conjunto con la funcion filter para hacer busquedas por caracter o conjunto de caracteres.

## Reduce
Toma un array y lo reduce a un solo valor, no devuelve un array. Se utiliza mucho para hacer calculos.

## Some
Analiza un array y devuelve true si por lo menos alguno de los elementos cumple con la condicion indicada. devuelve true o false

## Every
Evalua que todos los elementos del array cumplan con la condicion. Devuelve true o false.

## Find
Similar a filter pero va a retornar el primer elemento que cumple con la condicion.

## Includes
Metodo para buscar dentro de un array si existe determinado elemento. Tambien sirve para buscar determinado/s carater/es dentro de un string.

## Join
Nos sirve para unificar todo un array con algun tipo de formato o string.

## Concat
Es inmutable, no modifica el array original sino que genera uno nuevo.

## Flat y FlatMap
permite aplanar una matriz de muchos niveles

## Funciones Mutables
Agregar elementos: array.push(newElement)
Eliminar elementos: array.splice(initialIndex, numberOfElements)

## Sort
Sirve para ordenar un array sobre si mismo