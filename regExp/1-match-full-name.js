function matchName(input) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;
  let matches = input.matchAll(pattern);
  let arr = [];
  for (const match of matches) {
    arr.push(match[0]);
  }
  console.log(arr.join(` `));
}

matchName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
