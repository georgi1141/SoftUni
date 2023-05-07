const findNewApartment = require("./findApartment");
const expect = require('chai').expect;

describe("findNewApartment", () => {
  describe("isGoodLocation", function () {
    it('expect to return "You can go on home tour!" when given "Sofia" and true', function () {
      const result = findNewApartment.isGoodLocation("Sofia", true);
      expect(result).to.equal("You can go on home tour!");
    });

    it('expect to return "There is no public transport in area." when given "Varna" and false', function () {
      const result = findNewApartment.isGoodLocation("Varna", false);
      expect(result).to.equal("There is no public transport in area.");
    });

    it('expect to return "This location is not suitable for you." when given "Burgas" and true', function () {
      const result = findNewApartment.isGoodLocation("Burgas", true);
      expect(result).to.equal("This location is not suitable for you.");
    });

    it('expect an error message "Invalid input!" when given a non-string value for city', function () {
      expect(function () {
        findNewApartment.isGoodLocation(123, true);
      }).to.throw(Error, "Invalid input!");
    });

    it('expect an error with message "Invalid input!" when given a non-boolean value for nearPublicTransportation', function () {
      expect(function () {
        findNewApartment.isGoodLocation("Sofia", "yes");
      }).to.throw(Error, "Invalid input!");
    });
  });

  describe("isLargeEnough", function () {
    it('expect to return "[50, 60]" when given [40, 50, 60] and 50', function () {
      const result = findNewApartment.isLargeEnough([40, 50, 60], 50);
      expect(result).to.equal("50, 60");
    });

    it('expect to return "" when given [] and 30', function () {
      const result = findNewApartment.isLargeEnough([], 30);
      expect(result).to.equal("");
    });

    it('expect an error with message "Invalid input!" when given a non-array value for apartments', function () {
      expect(function () {
        findNewApartment.isLargeEnough("not an array", 40);
      }).to.throw(Error, "Invalid input!");
    });

    it('expect an error with message "Invalid input!" when given a non-number value for minimalSquareMeters', function () {
      expect(function () {
        findNewApartment.isLargeEnough([40, 50, 60], "not a number");
      }).to.throw(Error, "Invalid input!");
    });
  });

  describe("isItAffordable", function () {
    it('expect to return "You can afford this home!" when given price 80000 and budget 100000', function () {
      const result = findNewApartment.isItAffordable(80000, 100000);
      expect(result).to.equal("You can afford this home!");
    });

    it('expect to return "You don\'t have enough money for this house!" when given price 120000 and budget 100000', function () {
      const result = findNewApartment.isItAffordable(120000, 100000);
      expect(result).to.equal("You don't have enough money for this house!");
    });
  });
});
