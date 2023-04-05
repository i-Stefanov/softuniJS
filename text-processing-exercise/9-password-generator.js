function passwordGenerator(data) {
  let [firstString, secondString, word] = data;
  word = word.toUpperCase().split(``);
  let betaPassword = firstString + secondString;
  let vowels = ["a", "e", "i", "o", "u"];
  let index = 0;
  for (let i = 0; i < betaPassword.length; i++) {
    let isVowel = false;
    let currentLetter = betaPassword[i];

    for (const vowel of vowels) {
      if (currentLetter === vowel) {
        isVowel = true;
        break;
      }
    }
    if (isVowel) {
      while (i < betaPassword.length) {
        let charFromWord = word[index++];
        if (index === word.length) {
          index = 0;
        }
        betaPassword = betaPassword.replace(currentLetter, charFromWord);
        break;
      }
    }
  }
  console.log(
    `Your generated password is ${betaPassword.split(``).reverse().join(``)}`
  );
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
