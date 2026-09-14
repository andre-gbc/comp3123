function moveLastThreeToStart(str) {
  if (str.length < 3) {
    return "String length must be greater than or equal to 3.";
  }
  return str.slice(-3) + str.slice(0, -3);
}

// Examples
console.log(moveLastThreeToStart("Hello"));      // lloHe
console.log(moveLastThreeToStart("JavaScript")); // iptJavaScr
console.log(moveLastThreeToStart("abc"));        // abcabc -> abc (all 3 chars move to start)
console.log(moveLastThreeToStart("ab"));         // String length must be greater than or equal to 3.
