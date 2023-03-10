function addNewAttr(array) {
  // Tu código aquí 👈
  const taxAtt = array.map((element) => {
    return {
      ...element,
      taxes: Math.trunc(element.price * 0.19)
    };
  });
  return taxAtt;
}

const input1 = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
];

const exec = addNewAttr(input1);
console.log(exec);