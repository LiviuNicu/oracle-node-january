//map, filter, find, reduce

let obj = [
  {
    name: "John",
    math: 5,
    science: 10,
  },
  {
    name: "Ana",
    math: 8,
    science: 7,
  },
  {
    name: "Alex",
    math: 10,
    science: 7,
  },
];
let cloneArray = JSON.parse(JSON.stringify(obj));
// for (let i = 0; i < obj.length; i++) {
//   obj[i].math += 1;
// }

const newArray = obj.map((currentElement, index, initialArray) => {
  currentElement.math += 1;
  return currentElement;
});
console.log(newArray);
const newArrayFiltered = obj.filter((currentElement, index, initialArray) => {
  return currentElement.math > 8;
});
console.log(newArrayFiltered);
const newArrayFind = obj.find((currentElement, index, initialArray) => {
  return currentElement.math > 8;
});
console.log(newArrayFind);

const sum = obj.reduce((acumulator, currentElement, index, initialArray) => {
  acumulator += currentElement.science;
  return acumulator;
}, 0);
console.log(sum);
console.log(cloneArray);
