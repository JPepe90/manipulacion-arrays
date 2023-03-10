const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicolas",
    total: 2400,
    delivered: false,
  },
];
console.log('original: ', orders);

// --------------------------------------------------------------------------------------
const totals = orders.map(elements => elements.total);
console.log('totales: ', totals);

// --------------------------------------------------------------------------------------
// const rta2 = orders.map((element) => {
//   element.tax = .19; 
//   return element; // ESTAMOS MODIFICANDO EL OBJETO PRINCIPAL!!
// });
// console.log('tax: ', rta2);

// --------------------------------------------------------------------------------------
const rta3 = orders.map((element) => {
  return {
    ...element, // si usamos spreadOperator creamos un objeto nuevo que no pisa al original
    tax: .19
  };
});
console.log('tax: ', rta3);

// --------------------------------------------------------------------------------------
const filtered = orders.filter(item => item.delivered == true && item.total > 100);
console.log('delivered: ', filtered);

const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  });
}
console.log(search('Nico'));


console.log('original: ', orders); // Orderes originales
