function cookingByNumbers(num, ...commands) {
  num = Number(num);
  for (const command of commands) {
    switch (command) {
      case `chop`:
        num /= 2;
        break;
      case `dice`:
        num = Math.sqrt(num);
        break;
      case `spice`:
        num += 1;
        break;
      case `bake`:
        num *= 3;
        break;
      case `fillet`:
        num *= 0.8;
        break;

      default:
        break;
    }
    console.log(num.toFixed(0));
  }
}
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
