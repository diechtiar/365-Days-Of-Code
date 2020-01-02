function telephoneCheck(str) {
  // Good luck!

  // must start with a number or a bracket
  // must contain only numbers, dash between digits, space and one pair of brackets
  // 7, 10 or 11 digits
  // if 11 digits, the first is 1

  /*
  valid numbers:
  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555
  555-555-5555
  1 (555) 555-5555
  (555)555-5555
  1(555)555-5555
  1 555 555 5555
  1 456 789 4444
  */

  let regexp = /(^1)?[ -]?((\(\d{3}\))|\d{3})[ -]?\d{3}[ -]?\d{4}$/g;

  let match = str.match(regexp);

  if (match) {
    match = match.join('');
  } else {
    return false;
  }

  if (match === str) {
    return true;
  }

  return false;
}

telephoneCheck("555-5555");
