function ball1() {
  return new Promise(function (resolve, reject) {
    if (true) {
      // false
      resolve("the ball 1 reached the end of the hill");
    } else {
      reject("the ball 1 failed");
    }
  });
}

function ball2() {
  return new Promise(function (resolve, reject) {
    if (true) {
      // false
      resolve("the ball 2 reached the end of the hill");
    } else {
      reject("the ball 2 failed");
    }
  });
}

function ball3() {
  return new Promise(function (resolve, reject) {
    if (true) {
      // false
      resolve("the ball 3 reached the end of the hill");
    } else {
      reject("the ball 3 failed");
    }
  });
}
ball1()
  .then((msg) => {
    console.log(msg);
    return ball2();
  })
  .then((msg) => {
    console.log(msg);
    return ball3();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
