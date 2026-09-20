function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Examples
console.log(capitalizeWords("hello world"));           // Hello World
console.log(capitalizeWords("the quick brown fox"));   // The Quick Brown Fox
console.log(capitalizeWords("javascript is awesome")); // Javascript Is Awesome
