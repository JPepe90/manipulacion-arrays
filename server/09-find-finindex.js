const numbers = [1,30,32,49,29,10,13];

// find: si no lo encuentra devuelve undefined
const rta = numbers.find(item => item === 30); 

console.log('respuesta: ', rta);

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

// findIndex: si no lo encuentra devuelve -1
const rta2 = orders.findIndex(item => item.customerName == 'Santiago'); 

console.log('respuesta 2: ', rta2);