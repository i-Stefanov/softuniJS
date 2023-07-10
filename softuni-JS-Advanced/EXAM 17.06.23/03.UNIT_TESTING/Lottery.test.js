const { expect } = require(`chai`);
const lottery = require(`./Lottery`);
describe(`lottery`, function () {
  describe(`buyLotteryTicket`, function () {
    it("should throw Invalid input", function () {
      expect(() => lottery.buyLotteryTicket("", "", true)).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(5, 5, "true")).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(5, 5, [true])).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket("", "", {})).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(5, "", true)).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket("5", "", true)).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(0, 2, true)).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(1, 0, true)).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(-2, 5, true)).to.throw(
        "Invalid input!"
      );
    });
    it(`should throw Unable to buy lottery ticket!`, function () {
      expect(() => lottery.buyLotteryTicket(5, 5, false)).to.throw(
        "Unable to buy lottery ticket!"
      );
    });
    it(`should work`, function () {
      expect(lottery.buyLotteryTicket(5, 5, true)).to.equal(
        "You bought 5 tickets for 25$."
      );
    });
  });
  describe(`checkTicket`, function () {
    it("should throw Invalid input!", function () {
      expect(() => lottery.checkTicket(1, 1)).to.throw("Invalid input!");
      expect(() => lottery.checkTicket("", {})).to.throw("Invalid input!");
      expect(() => lottery.checkTicket(-1, "1,2,3,4,5,6")).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.checkTicket(NaN, 1)).to.throw("Invalid input!");
      expect(() => lottery.checkTicket(1, "1")).to.throw("Invalid input!");

      expect(() => lottery.checkTicket(1, "1")).to.throw("Invalid input!");
    });
    it("should throw Invalid input! if length !== 6", function () {
      expect(() =>
        lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
      ).to.throw("Invalid input!");
      expect(() => lottery.checkTicket([], [])).to.throw("Invalid input!");
      expect(() =>
        lottery.checkTicket([1, 2, 3, 4, "5"], [1, 2, 3, 4, 5])
      ).to.throw("Invalid input!");
    });
    it(`should work`, function () {
      expect(
        lottery.checkTicket([1, 2, 3, 4, 23, 5], [1, 2, 3, 4, 52, 16])
      ).to.equal("Congratulations you win, check your reward!");
      expect(
        lottery.checkTicket([1, 2, 3, 4, 23, 5], [1, 2, 3, 4, 23, 5])
      ).to.equal("You win the JACKPOT!!!");
    });
  });
  describe(`secondChance`, function () {
    it("should throw invalid input", function () {
      expect(() => lottery.secondChance(1, 1)).to.throw("Invalid input!");
      expect(() => lottery.secondChance([1], 1)).to.throw("Invalid input!");
      expect(() => lottery.secondChance({}, 1)).to.throw("Invalid input!");
      expect(() => lottery.secondChance("1", 1)).to.throw("Invalid input!");
    });
    it("should work", function () {
      expect(lottery.secondChance(1, [1, 2, 3, 4, 5, 6])).to.equal(
        "You win our second chance prize!"
      );
      expect(lottery.secondChance(3, [1, 2, 3, 4, 5, 6])).to.equal(
        "You win our second chance prize!"
      );
      expect(lottery.secondChance(13, [1, 2, 3, 4, 5, 6])).to.equal(
        "Sorry, your ticket didn't win!"
      );
    });
  });
});
