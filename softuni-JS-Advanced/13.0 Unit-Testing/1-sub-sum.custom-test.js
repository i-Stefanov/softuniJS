const subSum = require(`./1-1-sub-sum-test-added`);
function test() {
  // Arrange
  let expetedSum = 150;
  let numbers = [10, 20, 30, 40, 50, 60];
  let startIndex = 3;
  let endIndex = 300;
  // Act
  let actualSum = subSum(numbers, startIndex, endIndex);
  // Assert
  if (actualSum === expetedSum) {
    console.log(`correct`);
  } else {
    console.log(`Error`);
  }
}
test();
