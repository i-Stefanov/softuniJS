const isOddOrEven = require(`./2-even-odd`);
const { expect } = require(`chai`);
describe(`isOddOrEven`, () => {
  it(`should return undefined if argument is not a string`, () => {
    expect(isOddOrEven(2)).to.be.undefined;
  });
  it(`should return undefined if argument is not a string`, () => {
    expect(isOddOrEven(343)).to.be.undefined;
  });
  it(`should return even if string length is even`, () => {
    expect(isOddOrEven(`aaaa`)).to.equal(`even`);
  });
  it(`should return odd if string length is odd`, () => {
    expect(isOddOrEven(`aaa`)).to.equal(`odd`);
  });
  it(`passing multiple strings`, () => {
    expect(isOddOrEven(`aaa`)).to.equal(`odd`);
    expect(isOddOrEven(`aaaa`)).to.equal(`even`);
  });
});
