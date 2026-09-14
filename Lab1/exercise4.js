function angleType(angle) {
  if (angle <= 0 || angle > 180) {
    return "Invalid angle. Must be between 1 and 180 degrees.";
  } else if (angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle < 180) {
    return "Obtuse angle";
  } else {
    return "Straight angle";
  }
}

// Examples
console.log(angleType(45));  // Acute angle
console.log(angleType(90));  // Right angle
console.log(angleType(120)); // Obtuse angle
console.log(angleType(180)); // Straight angle
console.log(angleType(200)); // Invalid angle. Must be between 1 and 180 degrees.
