const round: (num: number) => number = num =>
  Math.round((num + Number.EPSILON) * 100) / 100;

export default round;
