const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
    it("should encode 'thinkful' to '4432423352125413'", () => {
        expect(polybius("thinkful")).to.equal("4432423352125413");
    });

    it("should decode '4432423352125413' to 'th(i/j)nkful'", () => {
        expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
    });

    it("should handle spaces and maintain them", () => {
        expect(polybius("Hello world")).to.equal('3251131343 2543241341');
        expect(polybius("3251131343 2543241341", false)).to.equal("hello world");
    });

    it("should return false if decoding and input length is odd", () => {
        expect(polybius("44324233521254134", false)).to.be.false;
    });

    it("should handle I and J sharing space", () => {
        expect(polybius("ij")).to.equal("4242");
        expect(polybius("4242", false)).to.equal("(i/j)(i/j)");
    });
});

