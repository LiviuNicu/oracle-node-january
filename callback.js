function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

const count = function (a, b, callback) {
  return callback(a, b);
};

console.log(count(7, 2, add));
console.log(count(7, 2, multiply));

console.log(
  count(7, 2, function (a, b) {
    return a - b;
  })
);
