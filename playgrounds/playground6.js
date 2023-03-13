function filterByTerm(array, term) {
  // Tu código aquí 👈
  const rta = array.filter(item => item.includes(term));
  console.log(rta);
  return rta;
}

const input1 = ["ana", "santi", "nico", "anastasia"];
const termino1 = "ana";

filterByTerm(input1, termino1);

const input2 = ["ana", "santi", "nico", "anastasia"];
const termino2 = "xyz";

filterByTerm(input2, termino2);