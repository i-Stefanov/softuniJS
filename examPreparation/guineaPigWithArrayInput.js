function guineaPig(arr) {
  food = arr[0] * 1000;
  hay = arr[1] * 1000;
  cover = arr[2] * 1000;
  puppyWeight = arr[3] * 1000;
  let daysInMonth = 30;
  for (let day = 1; day <= daysInMonth; day++) {
    food -= 300;
    if (day % 2 === 0) {
      hay -= food * 0.05;
    }
    if (day % 3 === 0) {
      cover = cover - puppyWeight * 0.33333;
    }
    if (food <= 0 || hay <= 0 || cover <= 0) {
      console.log("Merry must go to the pet store!");
      return;
    }
  }
  let congrats = console.log(
    `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
      2
    )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}."`
  );
  return congrats;
}
guineaPig(["10", "5", "5.2", "1"]);
// guineaPig(1, 1.5, 3, 1.5);
