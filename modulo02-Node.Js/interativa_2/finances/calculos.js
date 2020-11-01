//funcoes genericas

const media = (array) => {
  const sum = somatorio(array);
  const media = sum / array.length;
  return media;
};

const somatorio = (array) => {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

export default { media, somatorio, runMethodAsync }; //exportado como padrao
//export { media , somatorio} --exportado sem ser padrao
