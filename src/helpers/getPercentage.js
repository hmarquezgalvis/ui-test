export const getPercentage = (value, total, decimals = 0) => {
  return (value * 100 / total).toFixed(decimals);
};