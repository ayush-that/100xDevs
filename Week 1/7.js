// // Write a program that reverses all the elements in an array
const testArray = [78, 93, 70, 95, 70, 35];
let finalArray = [];
const sizeOfArray = testArray.length;

for (let i = 0; i < sizeOfArray; i++) {
  finalArray[i] = testArray[sizeOfArray - 1 - i];
}

console.log(finalArray);
