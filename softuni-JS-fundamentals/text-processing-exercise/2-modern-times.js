function modernTimes(sentence) {
  let pattern = /#[A-Za-z]+/gm;
  let matches = sentence.match(pattern);
  for (const match of matches) {
    console.log(match.replace(`#`, ``));
  }
}
modernTimes(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
