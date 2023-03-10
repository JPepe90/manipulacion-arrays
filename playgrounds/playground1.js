function multiplyElements(array) {
  // Tu código aquí 👈
  const multi = array.map(element => element * 2);
  console.log(multi);
  return multi;
}

multiplyElements([2, 4, 5, 6, 8]);
multiplyElements([1, 1, -2, -3]);