const items = [1,3,2,3];

const rta = items.reduce((obj, item) => {
  if (obj[item]) {
    obj[item]++;
  } else {
    obj[item] = 1;
  }
  return obj;
}, {});

console.log('resultado: ', rta);