function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

// first approach to use this
/*
async function wait() {
  await setTimeoutPromisified(2000);
  console.log("Waited 2 seconds.");
}

wait();
*/

// second approach to use this
setTimeoutPromisified(2000).then(() => {
  console.log("Waited 2 seconds.");
});
