// const {chai} = require("chai");
const PaymentPackage = require(`./12.payment`);

const { expect } = require("chai");

describe(`PaymentPackage`, function () {
  describe(`constructor`, function () {
    it(`should create new instance with the given name and value`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      expect(package.name).to.equal(`Test package`);
      expect(package.value).to.equal(100);
    });
    it(`should set default values for VAT and active`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      expect(package.VAT).to.equal(20);
      expect(package.active).to.be.true;
    });
  });
  describe(`name`, function () {
    it(`should get the name of the package`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      expect(package.name).to.equal(`Test package`);
    });
    it(`should set the name to New name`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      package.name = `New name`;
      expect(package.name).to.equal(`New name`);
    });
    it(`should throw an error if the name is not a string`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      expect(() => (package.name = [123, 123])).to.throw(
        `Name must be a non-empty string`
      );
      expect(() => (package.name = 123)).to.throw(
        `Name must be a non-empty string`
      );
    });
    it(`should throw error if the name is empty string`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      expect(() => (package.name = ``)).to.throw(
        `Name must be a non-empty string`
      );
    });
  });
  describe(`value`, function () {
    it(`should return the value`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      expect(package.value).to.equal(100);
      package.value = 123;
      expect(package.value).to.equal(123);
    });
    it(`should return error if the value is not a number or is negative number`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      expect(() => (package.value = `123`)).to.throw(
        `Value must be a non-negative number`
      );
      expect(() => (package.value = -2)).to.throw(
        `Value must be a non-negative number`
      );
      expect(() => (package.value = 0)).to.throw(
        `Value must be a non-negative number`
      );
      expect(() => (package.value = -2.5)).to.throw(
        `Value must be a non-negative number`
      );
      expect(() => (package.value = [2])).to.throw(
        `Value must be a non-negative number`
      );
    });
  });
  describe(`VAT`, function () {
    it(`should return the value`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      expect(package.value).to.equal(100);
    });
    it(`should set VAT to the new value`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      package.value = 123;
      expect(package.value).to.equal(123);
    });
    it(`should return error if the VAT is not a number`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      expect(package.VAT).to.equal(20);
      expect(() => (package.VAT = `123`)).to.throw(
        `VAT must be a non-negative number`
      );
      expect(() => (package.VAT = -2)).to.throw(
        `VAT must be a non-negative number`
      );
      expect(() => (package.VAT = [-2, 2])).to.throw(
        `VAT must be a non-negative number`
      );
    });
  });
  describe(`active`, function () {
    it(`should return true`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      expect(package.active).to.equal(true);
    });
    it(`should set the value of active to false`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      package.active = false;
      expect(package.active).to.equal(false);
    });
    it(`should throw error if the value is not boolean`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      expect(() => (package.active = 123)).to.throw(
        `Active status must be a boolean`
      );
      expect(() => (package.active = `true`)).to.throw(
        `Active status must be a boolean`
      );
      expect(() => (package.active = NaN)).to.throw(
        `Active status must be a boolean`
      );
    });
  });
  describe(`toString() method`, function () {
    it(`should return result`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      const result = `Package: Test package\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`;
      expect(package.toString()).to.equal(result);
    });
    it(`should return string with appended inactive to it`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      package.active = false;
      const result = [
        `Package: Test package (inactive)`,
        `- Value (excl. VAT): 100`,
        `- Value (VAT 20%): 120`,
      ];
      expect(package.toString()).to.equal(result.join(`\n`));
    });
    it(`should return string if VAT is set to 25`, function () {
      const package = new PaymentPackage(`Test package`, 100);
      package.VAT = 25;

      const result = [
        `Package: Test package`,
        `- Value (excl. VAT): 100`,
        `- Value (VAT 25%): 125`,
      ];
      expect(package.toString()).to.equal(result.join(`\n`));
    });
  });
});
