const { expect } = require(`chai`);
const carService = require(`./03. Car Service`);

describe(`carServise tests`, function () {
  describe(`isItExpensive`, function () {
    it("shuld return The issue with the car is more severe and it will cost more money", () => {
      expect(carService.isItExpensive("Engine")).to.equal(
        "The issue with the car is more severe and it will cost more money"
      );
      expect(carService.isItExpensive("Transmission")).to.equal(
        "The issue with the car is more severe and it will cost more money"
      );
    });
    it(`should return The overall price will be a bit cheaper`, function () {
      expect(carService.isItExpensive("Brake system")).to.equal(
        "The overall price will be a bit cheaper"
      );
      expect(carService.isItExpensive("Fuel system")).to.equal(
        "The overall price will be a bit cheaper"
      );
    });
  });
  describe(`discount`, function () {
    it(`should throw error if args are not numbers`, function () {
      expect(() => carService.discount([], 3)).to.throw("Invalid input");
      expect(() => carService.discount("123", "3")).to.throw("Invalid input");
      expect(() => carService.discount("123", {})).to.throw("Invalid input");
      expect(() => carService.discount(NaN, {})).to.throw("Invalid input");
      expect(() => carService.discount("123", undefined)).to.throw(
        "Invalid input"
      );
      expect(() => carService.discount(3, [])).to.throw("Invalid input");
    });
    it(`should return You cannot apply a discount`, function () {
      expect(carService.discount(2, 1000)).to.equal(
        `You cannot apply a discount`
      );
    });
    it(`should return Discount applied! 15%`, function () {
      expect(carService.discount(3, 100)).to.equal(
        "Discount applied! You saved 15$"
      );
      expect(carService.discount(7, 1000)).to.equal(
        "Discount applied! You saved 150$"
      );
    });
    it(`should return Discount applied! 30%`, function () {
      expect(carService.discount(8, 100)).to.equal(
        "Discount applied! You saved 30$"
      );
      expect(carService.discount(25, 1000)).to.equal(
        "Discount applied! You saved 300$"
      );
    });
  });
  describe(`partsToBuy`, function () {
    it(`should work with array`, function () {
      expect(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
          ],
          ["blowoff valve", "coil springs"]
        )
      ).to.equal(375);
      expect(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
          ],
          ["blowoff valve"]
        )
      ).to.equal(145);
    });
    it(`should throw error`, function () {
      expect(() =>
        carService
          .partsToBuy(`valve`, ["blowoff valve", "coil springs"])
          .to.throw("Invalid input")
      );
      expect(() =>
        carService
          .partsToBuy(5, ["blowoff valve", "coil springs"])
          .to.throw("Invalid input")
      );
      expect(() =>
        carService
          .partsToBuy({}, ["blowoff valve", "coil springs"])
          .to.throw("Invalid input")
      );
      expect(() =>
        carService
          .partsToBuy(undefined, ["blowoff valve", "coil springs"])
          .to.throw("Invalid input")
      );
      expect(() =>
        carService
          .partsToBuy(undefined, '["blowoff valve", "coil springs"]')
          .to.throw("Invalid input")
      );
      expect(() =>
        carService.partsToBuy(undefined, {}).to.throw("Invalid input")
      );
      expect(() =>
        carService
          .partsToBuy(
            [
              { part: "blowoff valve", price: 145 },
              { part: "coil springs", price: 230 },
            ],
            {}
          )
          .to.throw("Invalid input")
      );
      expect(() =>
        carService
          .partsToBuy(
            [
              { part: "blowoff valve", price: 145 },
              { part: "coil springs", price: 230 },
            ],
            5
          )
          .to.throw("Invalid input")
      );
      expect(() => carService.partsToBuy([], []).to.throw("Invalid input"));
    });
  });
});
