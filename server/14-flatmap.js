const users = [
  { userId: 1, userName: 'Tom', attributes: ['Nice', 'Cute'] },
  { userId: 2, userName: 'Mike', attributes: ['Lovely'] },
  { userId: 3, userName: 'Nico', attributes: ['Nice', 'Cool'] }
];

const rta = users.map(user => user.attributes).flat();
console.log('mapeo + aplanado: ', rta);

const rta2 = users.flatMap(user => user.attributes);
console.log('mapeo + aplanado con flatMap: ', rta2);