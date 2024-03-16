async function ball1() {
  if (true) {
    // false
    return "the ball 1 reached the end of the hill";
  } else {
    throw new Error("the ball 1 failed");
  }
}

async function ball2() {
  if (true) {
    // false
    return "the ball 2 reached the end of the hill";
  } else {
    throw new Error("the ball 2 failed");
  }
}

async function ball3() {
  if (true) {
    // false
    return "the ball 3 reached the end of the hill";
  } else {
    throw new Error("the ball 3 failed");
  }
}
async function execute() {
  try {
    console.log(await ball1());
    console.log(await ball2());
    console.log(await ball3());
  } catch (error) {
    console.log(error);
  }
}
execute();
