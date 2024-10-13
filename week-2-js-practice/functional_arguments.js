// Write a calculator using functional arguments
// addition part
function add(a, b) {
  ans = a + b;
  return ans;
}

// subtraction part
function sub(a, b) {
  ans = a - b;
  return ans;
}

// multiplication part
function mul(a, b) {
  ans = a * b;
  return ans;
}

//division part
function div(a, b) {
  ans = a / b;
  return ans;
}

// functional arguments part
function func(a, b, arg) {
  let ans = arg(a, b);
  return ans;
}

finalAns = func(12, 31, add);
console.log(finalAns);
