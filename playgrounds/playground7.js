function parseToURL(title) {
  // Tu código aquí 👈
  const rta = title.split(" ").join('-').toLowerCase();
  console.log(rta);
  return rta;
}

const input1 = "La forma de correr Python";
const input2 = "La API para nunca parar de aprender";
const input3 = "Curso de arrays";

parseToURL(input1);
parseToURL(input2);
parseToURL(input3);
