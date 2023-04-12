function login(arr) {
  let user = arr[0];
  let password = "";
  let tempPass = "";
  let wrongPass = 0;

  for (let i = user.length - 1; i >= 0; i--) {
    password += user[i];
  }
  for (let i = 1; i < arr.length; i++) {
    tempPass = arr[i];

    if (tempPass === password) {
      console.log(`User ${user} logged in.`);
      break;
    } else {
      wrongPass++;
      if (wrongPass === 4) {
        console.log(`User ${user} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
    }
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
