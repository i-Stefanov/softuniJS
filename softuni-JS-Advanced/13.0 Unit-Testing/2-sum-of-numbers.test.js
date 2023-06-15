const sum = require("./2-sum-of-numbers");

const { expect } = require(`chai`);
describe(`Sum calculator`, () => {
  it(`Should return the sum of the array elements`, () => {
    expect(sum([1, 2, 3])).to.equal(6);
  });
  it(`Should return the element if there is only one element`, () => {
    expect(sum([1])).to.equal(1);
  });
  it(`Should return zero if the array is empty`, () => {
    expect(sum([])).to.equal(0);
  });
  it(`Should return the sum even if there is a negative number`, () => {
    expect(sum([1, 2, 3, -3])).to.equal(3);
  });
  it(`Should return NaN if there are only non number elements in the array`, () => {
    expect(sum([`q`, `w`])).to.be.NaN;
  });
});
