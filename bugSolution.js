function foo(a, b) {
  if (isNaN(a) && isNaN(b)) {
    return true; // Consider NaNs equal
  } else if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(foo(NaN, NaN)); // true
console.log(foo(5,5)); //true
console.log(NaN === NaN); //false
console.log(isNaN(NaN)); //true