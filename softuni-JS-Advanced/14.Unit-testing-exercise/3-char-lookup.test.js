const lookupChar = require(`./3-char-lookup`);
const { expect } = require(`chai`);

describe(`retrieve char from string by given index`, () => {
  it(`should return the char at the given index`, () => {
    expect(lookupChar(`hello`, 1)).to.equal(`e`);
  });
  it(`should return the char at the given index`, () => {
    expect(lookupChar(`hello`, 4)).to.equal(`o`);
  });
  it(`should return the char at the given index`, () => {
    expect(lookupChar(`hello`, 0)).to.equal(`h`);
  });
  it(`should return undefined if the second argument is floating point number`, () => {
    expect(lookupChar(`hello`, 3.2)).to.be.undefined;
  });
  it(`should return undefined if the first argument is not string`, () => {
    expect(lookupChar(3, 3)).to.be.undefined;
  });
  it(`shoudld return undefined if the second argument is not number`, () => {
    expect(lookupChar(`fsaf`, `3`)).to.be.undefined;
  });
  it(`should return undefined if the second argument is not number and the first is not a string`, () => {
    expect(lookupChar(3, `fhgdfhfg`)).to.be.undefined;
  });
  it(`should return incorrect index if the index is bigger than the string length`, () => {
    expect(lookupChar(`aa`, 3)).to.equal(`Incorrect index`);
  });
  it(`should return incorrect index if the index is less than zero`, () => {
    expect(lookupChar(`aa`, -2)).to.equal(`Incorrect index`);
  });
  it(`should return incorrect index if the index is equal to the string length`, () => {
    expect(lookupChar(`aa`, 2)).to.equal(`Incorrect index`);
  });
});
