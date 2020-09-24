const formatter = Intl.NumberFormat("pt-BR");

const formatNumber = (number) => {
  return formatter.format(number);
};

export { formatNumber };
