// کد زیر صرفا جهت یادگیری مفهوم است
// در ادامه بجای این کد های وحشتناک از 
// Promise
// استفاده میکنیم.

function ball1(callback) {
  // callback = ball2
  setTimeout(() => {
    callback(true);
  }, 2000);
}

function ball2(callback) {
  setTimeout(() => {
    callback(true);
  }, 1000);
}

function ball3() {
  setTimeout(() => {
    console.log("the ball three reached the end of the hill");
  }, 3000);
}

ball1((res) => {
  try {
    if (res) {
      console.log("the ball one reached the end of the hill");
      ball2((res) => {
        try {
          if (res) {
            console.log("the ball two reached the end of the hill");
            ball3();
          } else {
            throw new Error("the ball two Failed");
          }
        } catch (error) {
          console.log(error);
        }
      });
    } else {
      throw new Error("the ball one Failed");
    }
  } catch (error) {
    console.log(error);
  }
});

// مفهوم
/*
function ball1(ball2) {
  // callback = ball2
  setTimeout(() => {
    console.log("the ball one reached the end of the hill");
    ball2(ball3);
  }, 2000);
}

function ball2(ball3) {
  setTimeout(() => {
    console.log("the ball two reached the end of the hill");
    ball3();
  }, 1000);
}

function ball3() {
  setTimeout(() => {
    console.log("the ball three reached the end of the hill");
  }, 3000);
}

ball1(ball2);
*/
