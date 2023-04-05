function lettersCahngeNumbers(data) {
  let sequenses = data.split(/\s+/gm);

  let sum = 0;
  let alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  for (let sequense of sequenses) {
    sequense = sequense.split(``);
    let firstLetter = sequense.shift();
    let secondLetter = sequense.pop();
    let number = Number(sequense.join(``));
    if (firstLetter === firstLetter.toUpperCase()) {
      number /= alphabet[firstLetter.toLowerCase()];
    } else {
      number *= alphabet[firstLetter.toLowerCase()];
    }
    if (secondLetter === secondLetter.toUpperCase()) {
      number -= alphabet[secondLetter.toLowerCase()];
    } else {
      number += alphabet[secondLetter.toLowerCase()];
    }
    sum += number;
  }
  console.log(sum.toFixed(2));
}
lettersCahngeNumbers("a1A");
