var hour = 20;
if (hour >= 6 && hour < 12) {
  console.log("good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}

var role = "guest";
switch (role) {
  case "admin":
    console.log("admin");
    break;
  case "guest":
    console.log("guest");
    break;
  default:
    console.log("Mr. NoBody");
    break;
}
