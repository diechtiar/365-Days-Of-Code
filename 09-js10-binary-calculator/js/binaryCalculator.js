//create functions for all arithmetic operations

function binaryAdd(operand1, operand2) {
  return parseInt(operand1, 2) + parseInt(operand2, 2);
}

function binarySub(operand1, operand2) {
  return parseInt(operand1, 2) - parseInt(operand2, 2);
}
function binaryMul(operand1, operand2) {
  return parseInt(operand1, 2) * parseInt(operand2, 2);
}
function binaryDiv(operand1, operand2) {
  return parseInt(operand1, 2) / parseInt(operand2, 2);
}

//convert string to binary number

function toBinary(string) {

  return binaryNumber;
}

//convert string to decimal number

function toDecimal(string) {

  return decimalNumber;
}

//parse input and perform calculations

//read input

//update and display result

  
  
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log((binaryDiv('1101', '110') >>> 0).toString(2));
    document.getElementById('res').innerHTML = (binaryDiv('1101', '110') >>> 0).toString(2);
  });
  