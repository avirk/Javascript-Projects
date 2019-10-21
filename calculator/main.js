let symbol = false;
let temp;
let ope;
let dot = false;
let per = false;

function calcNumbers(result) {
  symbol = false;
  if (per == true) {
    per = false;
    form.displayResult.value = result;
  } else if (form.displayResult.value.length < 16) {
    if (form.displayResult.value === '0' || form.displayResult.value == 'NaN')
      form.displayResult.value = result;
    else form.displayResult.value = form.displayResult.value + result;
  }
}

function clearall() {
  dot = false;
  symbol = false;
  form.displayResult.value = 0;
}

//delete the number after an operand.
function delLastValue() {
  symbol = true;
  dot = false;
  temp = form.displayResult.value;
  if (temp.includes('%')) {
    form.displayResult.value = temp.split('%').shift() + '%';
  } else if (temp.includes('/')) {
    form.displayResult.value = temp.split('/').shift() + '/';
  } else if (temp.includes('+')) {
    form.displayResult.value = temp.split('+').shift() + '+';
  } else if (temp[0] === '-' && temp[temp.length - 1] === '-') {
    form.displayResult.value = temp;
  } else if (temp.includes('-')) {
    if (temp[0] === '-' && temp[temp.length - 1] != '-') {
      var a = temp.lastIndexOf('-'); //taking the last index of the ope '-'
      if (a > 0) {
        temp = temp.slice(0, a + 1); // this is slicing the array from 0 to a+1;
        form.displayResult.value = temp;
      } else {
        form.displayResult.value = temp;
        symbol = false; //if symbol will true then other ope will not work after this statement
      }
    } else form.displayResult.value = temp.split('-').shift() + '-';
  } else if (temp.includes('*')) {
    form.displayResult.value = temp.split('*').shift() + '*';
  } else if (!temp.includes('+')) {
    form.displayResult.value = 0;
  }
}

function squareRoot() {
  temp = form.displayResult.value;
  temp = eval(temp);
  ope = temp[temp.length - 1];
  if (temp == 0) {
    return 0;
  } else if (ope == '+' || ope == '-' || ope == '*' || ope == '/') {
    // temp = temp.split(ope).shift();
    temp = temp.substr(0, temp.length - 1);
    form.displayResult.value = Math.sqrt(temp);
  } else {
    form.displayResult.value = Math.sqrt(temp);
  }
}

function deleteIt() {
  symbol = false;
  temp = form.displayResult.value;
  if (temp[0] != '.') {
    dot = false; //because once dot is set to true its not going to set false it self
  }
  if (
    (temp.includes('.') && !temp.includes('+')) ||
    (temp.includes('.') && !temp.includes('-')) ||
    (temp.includes('.') && !temp.includes('/')) ||
    (temp.includes('.') && !temp.includes('*'))
  ) {
    dot = true;
  }

  if (temp[0] != '') {
    form.displayResult.value = temp.substr(0, temp.length - 1);
  } else {
    return 0;
  }
}

function addB() {
  dot = false;
  var add = document.getElementById('addition').value;
  temp = form.displayResult.value;
  ope = temp[temp.length - 1];

  if (temp == '' || temp === 'NaN') {
    return 0;
  } else if (symbol == false) {
    temp = eval(form.displayResult.value);
    temp = Math.round(temp * 1000000) / 1000000; //to fix the floating precision
    form.displayResult.value = temp + add;
    symbol = true;
  } else if (ope === '-' || ope === '*' || ope === '/') {
    form.displayResult.value = temp.substr(0, temp.length - 1);
    form.displayResult.value = form.displayResult.value + add;
    symbol = true;
  }
}

function subB() {
  dot = false;
  var sub = document.getElementById('subtract').value;
  temp = form.displayResult.value;
  ope = temp[temp.length - 1];
  if (temp == '' || temp === 'NaN') {
    return 0;
  } else if (symbol == false) {
    temp = eval(form.displayResult.value);
    form.displayResult.value = temp + sub;
    symbol = true;
  } else if (ope == '+' || ope == '*' || ope == '/') {
    form.displayResult.value = temp.substr(0, temp.length - 1);
    form.displayResult.value = form.displayResult.value + sub;
    symbol = true;
  }
}
function multiB() {
  dot = false;
  var multi = document.getElementById('multi').value;
  temp = form.displayResult.value;
  ope = temp[temp.length - 1];
  if (temp == '' || temp === 'NaN') {
    return 0;
  } else if (symbol == false) {
    temp = eval(form.displayResult.value);
    form.displayResult.value = temp + multi;
    symbol = true;
  } else if (ope == '+' || ope == '-' || ope == '/') {
    form.displayResult.value = temp.substr(0, temp.length - 1);
    form.displayResult.value = form.displayResult.value + multi;
    symbol = true;
  }
}

function divB() {
  dot = false;
  var division = document.getElementById('divide').value;
  temp = form.displayResult.value;
  ope = temp[temp.length - 1];
  if (temp == '' || temp === 'NaN') {
    return 0;
  } else if (symbol == false) {
    temp = eval(form.displayResult.value);
    form.displayResult.value = temp + division;
    symbol = true;
  } else if (ope == '+' || ope == '-' || ope == '*') {
    form.displayResult.value = temp.substr(0, temp.length - 1);
    form.displayResult.value = form.displayResult.value + division;
    symbol = true;
  }
}

function calcPercentage(c) {
  var val;
  var secondVal;
  var secondTemp;
  temp = form.displayResult.value;
  var sign = temp[c];
  val = temp.split(sign).shift(); //extract the value before the sign
  secondVal = temp.split(sign).pop(); //extract the value after the sign
  secondTemp = (((val * secondVal) / 100) * 10000000000) / 10000000000;
  temp = val + sign + secondTemp;
  form.displayResult.value = (eval(temp) * 10000000000) / 10000000000;
  // form.displayResult.value = temp;
  if (form.displayResult.value.includes('.')) {
    dot = true;
  }
  per = true;
  return form.delLastValue.value;
}

function percentB() {
  dot = false;
  var a;
  temp = form.displayResult.value;
  ope = temp[temp.length - 1];
  if (temp == '' || temp === 'NaN') {
    return 0;
  } else if (symbol == false) {
    if (
      temp.includes('+') ||
      temp.includes('*') ||
      temp.includes('/') ||
      temp.includes('-')
    ) {
      if (temp.lastIndexOf('+') > 0) {
        a = temp.lastIndexOf('+');
        calcPercentage(a);
      } else if (temp.lastIndexOf('-') > 0) {
        a = temp.lastIndexOf('-');
        calcPercentage(a);
      } else if (temp.lastIndexOf('*') > 0) {
        a = temp.lastIndexOf('*');
        calcPercentage(a);
      } else if (temp.lastIndexOf('/') > 0) {
        a = temp.lastIndexOf('/');
        calcPercentage(a);
      }
    } else
      form.displayResult.value = ((temp / 100) * 10000000000) / 10000000000;
    per = true;
    // symbol = true;
  }
}

function decimalCalc() {
  if (dot == false) {
    form.displayResult.value += '.';
    dot = true;
  }
}

function fullResult() {
  temp = eval(form.displayResult.value);
  temp = Math.round(temp * 1000000) / 1000000;
  form.displayResult.value = temp;
}

function Square() {
  temp = form.displayResult.value;
  // temp = eval(temp);
  ope = temp[temp.length - 1];
  if (ope == '+' || ope == '-' || ope == '*') {
    temp = temp.substr(0, temp.length - 1);
    form.displayResult.value = temp * 2;
  } else {
    temp = eval(temp);
    form.displayResult.value = temp * 2;
  }
}

function OneFourth() {
  let temp = form.displayResult.value;
  if (temp != 0) temp = eval(form.displayResult.value);
  form.displayResult.value = 1 / temp;
}

function sign() {
  temp = form.displayResult.value;
  var a = temp.lastIndexOf('-');
  if (temp[0] == '-' && a > 0) {
    temp = temp.slice(1, temp.length - 1);
    form.displayResult.value = temp + '-';
  } else if (temp[0] == '-') {
    form.displayResult.value = temp.split('-').pop();
  } else if (temp != '' && temp[0] != 0) {
    form.displayResult.value = '-' + temp;
  }
}
