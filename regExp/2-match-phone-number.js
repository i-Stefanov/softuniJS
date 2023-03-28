function matchPhone(input) {
  let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/gm;
  let text = input.shift();
  let validNumbers = text.match(pattern);
  console.log(validNumbers.join(`, `));
}
matchPhone([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
