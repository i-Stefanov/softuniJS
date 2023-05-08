const subSum = require(`./1-sub-sum-test-added`);
const assert = require(`assert`).strict;
describe(`Sub sum calculator`, () => {
  it(`Should calculate subsum when endIndex is bigger than startIndex and smaller than length and return it`, () => {
    // Arrange
    let expetedSum = 150;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;
    // Act
    let actualSum = subSum(numbers, startIndex, endIndex);
    // Assert
    assert.equal(actualSum, expetedSum);
  });
  it(`startInex should be bigger than 0`, () => {
    // Arrange
    let expetedSum = 60;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = -100;
    let endIndex = 2;
    // Act
    let actualSum = subSum(numbers, startIndex, endIndex);
    // Assert
    assert.equal(actualSum, expetedSum);
  });
  it(`Shoul return NaN when the first passed argument is not an Array`, () => {
    // Arrange

    // Act
    let actualSum = subSum(10, 0, 2);
    // Assert
    assert.equal(actualSum, NaN);
  });
});

// function test() {
//   // if (actualSum === expetedSum) {
//   //   console.log(`correct`);
//   // } else {
//   //   console.log(`Error`);
//   // }
// }
// test();
