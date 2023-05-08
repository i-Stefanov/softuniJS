const { expect } = require(`chai`);
const isSymmetric = require(`./5-check-for-symmetry`);
describe(`Symmetry checker`, () => {
  it(`works with symmetric nummeric array`, () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });
  it(`works with symmetric char array`, () => {
    expect(isSymmetric([`a`, `b`, `b`, `a`])).to.be.true;
  });
  it(`works with array with odd number of elements`, () => {
    expect(isSymmetric([`a`, `b`, `a`, `b`, `a`])).to.be.true;
  });
  it(`doesn't work with non symmetric nummeric array`, () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });
  it(`doesn't work with non symmetric char array`, () => {
    expect(isSymmetric([`a`, `b`, `a`, `a`])).to.be.false;
  });
  it(`doesn't work with other than an array argument`, () => {
    expect(isSymmetric(1)).to.be.false;
    expect(isSymmetric({})).to.be.false;
    expect(isSymmetric(`a`)).to.be.false;
    expect(isSymmetric(NaN)).to.be.false;
    expect(isSymmetric(undefined)).to.be.false;
  });
  it(`doesn't work with non symmetric char array`, () => {
    expect(isSymmetric([`a`, `b`, `a`, `a`])).to.be.false;
  });
  it(`doesn't work with symmetric array but with different type elements`, () => {
    expect(isSymmetric([1, 2, 2, `1`])).to.be.false;
  });
});
