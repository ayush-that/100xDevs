// Write a program that prints all the even numbers in an array
// test array
const ages = [21, 34, 22, 45, 35, 56];

// main loop
for (i = 0; i <= ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}
