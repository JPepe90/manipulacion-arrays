function checkArray(array) {
  // Tu código aquí 👈
  const rta = array.every(item => item % 2 == 0);
  console.log(rta);
  return rta;
}

const input1 = [2, 4, 6, 8, 10];
const input2 = [1, 3, 5, 7, 10, 11];

checkArray(input1);
checkArray(input2);