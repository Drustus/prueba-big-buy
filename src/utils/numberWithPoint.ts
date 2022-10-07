const numberWithPoint: (number: number) => string = number => {
  return number
    .toFixed(2)
    .toString()
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default numberWithPoint;
