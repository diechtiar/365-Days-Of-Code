function palindrome(text) {
  const regex = /[a-z0-9]/g;
  let chars = [];
  let srahc = [];

  chars = text.toLowerCase().match(regex) || ['x', 'y'];
  srahc = Array.from(chars).reverse();

  console.log(chars);
  console.log(srahc);
  console.log(chars.join(''));
  console.log(srahc.join(''));

  if (chars.join('') === srahc.join('')) {
    return true;
  }
 
  return false;

}

// console.log(palindrome("1 eye for of 1 eye."));

console.log(palindrome("0_0 (: /-\ :) 0-0"));