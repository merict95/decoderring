const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests", () => {
  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      expect(substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false)).to.equal("message");
    });

    it("should work with any kind of key with unique characters", () => {
      expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.equal("message");
    });

    it("should handle special characters in the alphabet", () => {
      expect(substitution("ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", false)).to.equal("message");
    });
    
    it("should preserve spaces", () => {
      expect(substitution("yp ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", false)).to.equal("my message");
    });
  });
});