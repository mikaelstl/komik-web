export const formatNumber = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  }).format(value);
}