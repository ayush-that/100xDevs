// Write a program to print the biggest number in an array
// test array
const testArray = [12, 33, 13, 23, 12, 312, 12, 31];

// assume biggest number
let answer = testArray[0];

// main loop
for (i = 0; i <= testArray.length; i++) {
  if (testArray[i] > answer) {
    answer = testArray[i];
  }
}

// print the output
console.log(answer);
