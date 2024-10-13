// Find the sum 1 to a number
function sum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = ans + i;
  }
  return ans;
}

const ans = sum(100);
console.log(ans);
