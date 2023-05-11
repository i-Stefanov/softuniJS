const createCalculator = require(`./7-create-calculator`);
const { expect } = require(`chai`);
describe(`check calculator functionality`, () => {
  let calc;
  beforeEach(() => {
    calc = createCalculator();
  });

  it(`returns zero initial value`, () => {
    expect(calc.get()).to.equal(0);
  });
  it(`internal sum can't be modified`, () => {
    calc.value = 5;
    expect(calc.get()).to.equal(0);
  });
  it(`works with one number`, () => {
    calc.add(1);
    expect(calc.get()).to.equal(1);
  });
  it(`works with more than one number`, () => {
    calc.add(1);
    calc.add(1);
    expect(calc.get()).to.equal(2);
  });
  it(`can add numbers passed as string`, () => {
    calc.add(`1`);
    expect(calc.get()).to.equal(1);
  });
  it(`can subtract numbers`, () => {
    calc.subtract(1);
    expect(calc.get()).to.equal(-1);
  });
  it(`can subtract numbers more than once`, () => {
    calc.subtract(1);
    calc.subtract(1);
    expect(calc.get()).to.equal(-2);
  });
  it(`can subtract numbers passed as string`, () => {
    calc.subtract(1);
    calc.subtract(`1`);
    expect(calc.get()).to.equal(-2);
  });
});
