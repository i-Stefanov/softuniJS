const mathEnforcer = require(`./4-math-enforcer`);
const { expect } = require(`chai`);
describe(`mathEnforcer`, () => {
  let calc;
  beforeEach(() => {
    calc = mathEnforcer;
  });
  it(`should return number plus five when addFive() is called with number arg`, () => {
    expect(calc.addFive(5)).to.equal(10);
  });
  it(`should return number plus five when addFive() is called with floating point number arg`, () => {
    expect(calc.addFive(5.5)).to.be.closeTo(10.5, 0.01);
  });
  it(`should return number plus five when addFive() is called with negative number arg`, () => {
    expect(calc.addFive(-5)).to.equal(0);
  });
  it(`should return undefined if argument is non number`, () => {
    expect(calc.addFive(`www`)).to.be.undefined;
  });
  it(`should return the number passed minus ten when subtractTen()`, () => {
    expect(calc.subtractTen(13)).to.equal(3);
  });
  it(`should return the number passed minus ten when subtractTen() is passed negative number`, () => {
    expect(calc.subtractTen(-3)).to.equal(-13);
  });
  it(`should return the number passed minus ten when subtractTen() is passed floating point number`, () => {
    expect(calc.subtractTen(-3.5)).to.be.closeTo(-13.5, 0.01);
  });
  it(`should return the undefined when arg is not a number subtractTen()`, () => {
    expect(calc.subtractTen(`w`)).to.be.undefined;
  });
  it(`should return undefined if one of the two args is not a number`, () => {
    expect(calc.sum(`w`, 3)).to.be.undefined;
    expect(calc.sum(3, `w`)).to.be.undefined;
    expect(calc.sum(`eee`, `w`)).to.be.undefined;
  });
  it(`should return the sum of two numbers passed as args`, () => {
    expect(calc.sum(1, 4)).to.equal(5);
    expect(calc.sum(0, 4)).to.equal(4);
    expect(calc.sum(0.5, 4)).to.be.closeTo(4.5, 0.01);
    expect(calc.sum(-0.5, 4)).to.be.closeTo(3.5, 0.01);
    expect(calc.sum(-0.5, -4)).to.be.closeTo(-4.5, 0.01);
  });
});
