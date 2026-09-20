const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join("")}`;

const colors = ["red", "green", "blue"];
const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);
