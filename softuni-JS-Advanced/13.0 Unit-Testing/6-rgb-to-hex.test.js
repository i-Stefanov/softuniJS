const { expect } = require(`chai`);
const rgbToHexColor = require(`./6-rgb-to-hex`);
describe(`form rgb to hex`, () => {
  it(`Should return hex code for black`, () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal(`#000000`);
  });
  it(`Should return hex code for white`, () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal(`#FFFFFF`);
  });
  it(`Should return hex code for numbers in range from 0 to 255 random color`, () => {
    expect(rgbToHexColor(5, 250, 250)).to.equal(`#05FAFA`);
  });
  it(`Should return undefined if numbers are not in range from 0 to 255`, () => {
    expect(rgbToHexColor(246, -4, 28)).to.be.undefined;
    expect(rgbToHexColor(246, 2333, 28)).to.be.undefined;
  });
  it(`Should return undefined if any of the input parameters are of an invalid type`, () => {
    expect(rgbToHexColor({}, {}, {})).to.be.undefined;
    // expect(rgbToHexColor(`a`, `a`, `a`)).to.be.undefined;
    // expect(rgbToHexColor([1], [1], [1])).to.be.undefined;
    // expect(rgbToHexColor(NaN, NaN, NaN)).to.be.undefined;
    // expect(rgbToHexColor(undefined, undefined, undefined)).to.be.undefined;
    // expect(rgbToHexColor(1.1, 1.1, 1.1)).to.be.undefined;
  });
  it(`missing parameter`, () => {
    expect(rgbToHexColor(1, 1)).to.be.undefined;
    expect(rgbToHexColor(1)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });
  it(`Sould return string`, () => {
    expect(rgbToHexColor(2, 2, 2)).to.be.a("string");
  });
});
