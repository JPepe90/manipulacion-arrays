function filterByLength(array) {
  // Tu código aquí 👈
  const filtrado = array.filter(item => item.length >= 4);
  console.log(filtrado);
  return filtrado;  
}

const input1 = ['amor', 'sol', 'piedra', 'día'];
const input2 = ['rosa', 'gol', 'pez', 'día', 'gafas'];

filterByLength(input1);
filterByLength(input2);
