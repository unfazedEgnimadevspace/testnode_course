const { PI } = Math;
exports.area = (r) => {
  return PI * r ** 2;
};

exports.circumference = (r) => {
  return 2 * PI * r;
};
