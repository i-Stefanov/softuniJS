function passworvalidator(password) {
  let passwordLength = password.length;
  let digitCounter = 0;
  let isSymbol = true;
  if (passwordLength < 6 || passwordLength > 10) {
    console.log(`Password must be between 6 and 10 characters`);
  }
  for (let i = 0; i < passwordLength; i++) {
    let charCode = password.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      digitCounter++;
      isSymbol = false;
    } else if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      isSymbol = false;
    } else {
      isSymbol = true;
      break;
    }
  }
  if (isSymbol) {
    console.log(`Password must consist only of letters and digits`);
  }
  if (digitCounter < 2) {
    console.log(`Password must have at least 2 digits`);
  }
  if (
    digitCounter >= 2 &&
    !isSymbol &&
    !(passwordLength < 6 || passwordLength > 10)
  ) {
    console.log(`Password is valid`);
  }
  return;
}

// passworvalidator("logIn");
passworvalidator("Pa$s$s");
