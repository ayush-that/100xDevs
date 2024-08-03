// callback function
// it is when a function calls another function, that another function is passed in as an argument in the main function
// main function
function mathCalc(a, b, Sum) {
  const ans = Sum(a, b);
  return ans;
}

// smaller function
function Sum(a, b) {
  return a + b;
}

// calling the function
const finalAnswer = mathCalc(23, 13, Sum);

// printing the output
console.log(finalAnswer);
