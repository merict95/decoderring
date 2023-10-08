const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
    it("should encode 'thinkful' with a shift of 3 to 'wklqnixo'", () => {
        expect(caesar("thinkful", 3)).to.equal("wklqnixo");
    });

    it("should decode 'wklqnixo' with a shift of 3 to 'thinkful'", () => {
        expect(caesar("wklqnixo", 3, false)).to.equal("thinkful");
    });

    it("should handle negative shifts", () => {
        expect(caesar("thinkful", -3)).to.equal("qefkhcri");
    });

    it("should maintain spaces and other symbols", () => {
        expect(caesar("This is a secret message!", 8)).to.equal("bpqa qa i amkzmb umaaiom!");
        expect(caesar("BPQA qa I amkzmb umaaiom!", 8, false)).to.equal("this is a secret message!");
    });

    it("should ignore capital letters", () => {
        expect(caesar("A Message", 3)).to.equal("d phvvdjh");
        expect(caesar("D mHssage", -3)).to.equal("a jeppxdb");
    });

    it("should return false if shift is not present or invalid", () => {
        expect(caesar("thinkful")).to.be.false;
        expect(caesar("thinkful", 99)).to.be.false;
        expect(caesar("thinkful", -26)).to.be.false;
    });
});
