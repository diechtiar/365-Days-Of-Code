function convertToRoman(num) {

  const romanNumerals = new Map(
    [
      [1, 'I'], [2, 'II'], [3, 'III'], [4, 'IV'], [5, 'V'], [6, 'VI'], [7, 'VII'], [8, 'VIII'], [9, 'IX'],
      [10, 'X'], [20, 'XX'], [30, 'XXX'], [40, 'XL'], [50, 'L'], [60, 'LX'], [70, 'LXX'], [80, 'LXXX'], [90, 'XC'], 
      [100, 'C'], [200, 'CC'], [300, 'CCC'], [400, 'CD'], [500, 'D'], [600, 'DC'], [700, 'DCC'], [800, 'DCCC'], [900, 'CM'], 
      [1000, 'M'], [2000, 'MM'], [3000, 'MMM'], 
    ]
  );

  let numberParts = num.toString()
    .split('')
    .reverse();

  // console.log(numberParts);
  let romanNum = [];

  let zeroes = '';

  for (let i = 0; i < 4; i++) {
    romanNum.unshift(romanNumerals.get(numberParts[i] * `1${zeroes}`));
    zeroes = zeroes + '0';
  }
  /*
  romanNum.unshift(romanNumerals.get(numberParts[0] * 1));
  romanNum.unshift(romanNumerals.get(numberParts[1] * 10));
  romanNum.unshift(romanNumerals.get(numberParts[2] * 100));
  romanNum.unshift(romanNumerals.get(numberParts[3] * 1000));
 */

  return romanNum.join('');
}

console.log(convertToRoman(3999));