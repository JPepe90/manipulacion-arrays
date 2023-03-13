const matriz = [
  [1,2,3, ['i', 't', ['?', '¿']]],
  [4,5,6, ['a', 'b', ['#', '%', '&', ['.', ',', ';']]]],
  [7,8,9, ['v', 's', ['-', '<', '>', '+', ['(', ')', '{']]]]
];

// Resolver con ciclos for! Ejercicio para entrevista!!!!
// (posibilidad de usar recursividad)


const rta = matriz.flat(3); // 3 es el nivel al que vamos a aplanar la matriz

console.log('respuesta: ', rta);