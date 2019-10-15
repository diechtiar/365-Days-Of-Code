function factorial(n) {
  let result = n;
  
  if (n > 1) {
    result = result * factorial(n - 1);
  }
  return result;
}

console.log(factorial(6));