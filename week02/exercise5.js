const array = [1, 2, 3, 4];

const calculateSum = array.reduce((sum, value) => sum + value, 0);
const calculateProduct = array.reduce((product, value) => product * value, 1);

console.log(calculateSum);
console.log(calculateProduct);
