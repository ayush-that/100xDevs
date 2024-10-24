// approach-1 (has callback hell)
/*
setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("hello");
    setTimeout(function () {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);
*/

// approach-2 (does not have callback hell)
function step3done() {
  console.log("hello there");
}

function step2done() {
  console.log("hello");
  setTimeout(step3done, 5000);
}

function step1done() {
  console.log("hi");
  setTimeout(step2done, 3000);
}

setTimeout(step1done, 1000);
