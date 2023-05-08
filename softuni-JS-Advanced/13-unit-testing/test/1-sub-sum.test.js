const subSum = require(`../1-1-sub-sum-test-added`);
const assert = require(`assert`).strict;

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

// function test() {
//   // if (actualSum === expetedSum) {
//   //   console.log(`correct`);
//   // } else {
//   //   console.log(`Error`);
//   // }
// }
// test();
