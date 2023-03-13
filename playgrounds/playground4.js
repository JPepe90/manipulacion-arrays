function calcSum(numbers) {
  // Tu código aquí 👈
  const suma = numbers.reduce((sum, element) => {
    return sum + element;
  }, 0);
  console.log(suma);
  return suma;
}

const input1 = [1, 1, 1];
const input2 = [2, 4, 8];

calcSum(input1);
calcSum(input2);