const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    if (!encode) shift = -shift;

    for (let char of input) {
      if (alphabet.includes(char.toLowerCase())) {
        let index = (alphabet.indexOf(char.toLowerCase()) + shift + 26) % 26;
        index = index < 0 ? 26 + index : index; // handle negative shift
        result += alphabet[index];  // always add the lowercase character
      } else {
        result += char;
      }
    }
    return result;
  }

  return { caesar: caesar };

})();

module.exports = { caesar: caesarModule.caesar };

