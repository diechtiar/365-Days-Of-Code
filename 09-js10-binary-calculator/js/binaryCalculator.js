//create functions for all arithmetic operations

function binaryAdd(operand1, operand2) {
  result = (parseInt(operand1, 2) + parseInt(operand2, 2)).toString(2);
  console.log(result);
  return result;
}

function binarySub(operand1, operand2) {
  result = (parseInt(operand1, 2) - parseInt(operand2, 2)).toString(2);
  console.log(result);
  return result;
}

function binaryMul(operand1, operand2) {
  result = (parseInt(operand1, 2) * parseInt(operand2, 2)).toString(2);
  console.log(result);
  return result;
}

function binaryDiv(operand1, operand2) {
  result = (parseInt(operand1, 2) / parseInt(operand2, 2)).toString(2);
  console.log(result);
  return result;
}

//perform calculations and return result 

function calculate(param) {

//  let result = (binaryDiv('1101', '110') >>> 0).toString(2);
  let operand1 = '';
  let operand2 = '';
  let operator = '';
  let result = '';

  if (param.indexOf('+') !== -1) {
    operator = '+';
  } else if (param.indexOf('-') !== -1) {
    operator = '-';
  } else if (param.indexOf('*') !== -1) {
    operator = '*';
  } else if (param.indexOf('/') !== -1) {
    operator = '/';
  } 
  
  operand1 = param.substring(0, param.indexOf(operator));
  operand2 = param.substring((param.indexOf(operator) + 1));

  switch(operator) {
    case '+': 
      result = binaryAdd(operand1, operand2);
      break;
    case '-': 
      result = binarySub(operand1, operand2);
      break;
    case '*': 
      result = binaryMul(operand1, operand2);
      break;
    case '/': 
      result = binaryDiv(operand1, operand2);
      break;
  }
  console.log(result);
  return result;
}

//update and display result
document.addEventListener('DOMContentLoaded', (event) => {

  let btn0 = document.getElementById('btn0');
  let btn1 = document.getElementById('btn1');
  let resultDisplay = document.getElementById('res');
  let eqlButton = document.getElementById('btnEql');
  let clrButton = document.getElementById('btnClr');
  let sumButton = document.getElementById('btnSum');
  let subButton = document.getElementById('btnSub');
  let mulButton = document.getElementById('btnMul');
  let divButton = document.getElementById('btnDiv');
 
  btn0.addEventListener('click', function(event) {
    resultDisplay.innerHTML += '0';
  });
  btn1.addEventListener('click', function(event) {
    resultDisplay.innerHTML += '1';
  });

  sumButton.addEventListener('click', function(event) {
    resultDisplay.innerHTML += '+';
  });
  subButton.addEventListener('click', function(event) {
    resultDisplay.innerHTML += '-';
  });
  mulButton.addEventListener('click', function(event) {
    resultDisplay.innerHTML += '*';
  });
  divButton.addEventListener('click', function(event) {
    resultDisplay.innerHTML += '/';
  });
  
  eqlButton.addEventListener('click', function(event) {
    resultDisplay.innerHTML = calculate(resultDisplay.innerHTML);
  });
  
  clrButton.addEventListener('click', function (event) {
    resultDisplay.innerHTML = '';
  });

});
  