function addTogether (two) {

  if (typeof two !== 'number') return undefined;

  function addTwoAnd(one) {
    if (typeof one !== 'number') {
      return undefined;
    } else {
      return one + two;
    }
  }

  if (arguments.length === 2) {
    return addTwoAnd(arguments[1]);
  } else {
    return addTwoAnd;
  }
}

const result1 = addTogether(2, 3);
const result2 = addTogether(2)([3]);

console.log(result1);
console.log(result2);

// addtogether(2) 
// addtwoand(3)
// return 3 + 2 