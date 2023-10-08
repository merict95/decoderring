const substitutionModule = (function () {
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (!isValidAlphabet(alphabet)) return false;

    const inputLowerCase = input.toLowerCase();
    let result = "";

    for (let char of inputLowerCase) {
      if (char === " ") {
        result += " ";
        continue;
      }

      const indexInStandard = standardAlphabet.indexOf(char);
      const indexInAlphabet = alphabet.indexOf(char);

      if (encode) {
        if (indexInStandard !== -1) {
          result += alphabet[indexInStandard];
        } else {
          result += char;
        }
      } else {
        if (indexInAlphabet !== -1) {
          result += standardAlphabet[indexInAlphabet];
        } else {
          result += char;
        }
      }
    }

    return result;
  }

  function isValidAlphabet(alphabet) {
    return alphabet && alphabet.length === 26 && isUnique(alphabet);
  }

  function isUnique(alphabet) {
    const uniqueChars = new Set(alphabet);
    return uniqueChars.size === 26;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
