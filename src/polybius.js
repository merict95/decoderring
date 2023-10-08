const polybiusModule = (function () {

  const square = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "(i/j)", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"]
  ];

  function polybius(input, encode = true) {
    if (!encode && (input.replace(/ /g, '').length % 2 !== 0)) return false;
    
    let result = "";
    if (encode) {
      for (let char of input.toLowerCase()) {
        if (char === "i" || char === "j") {
          result += "42";
          continue;
        }
        for (let i = 0; i < square.length; i++) {
          for (let j = 0; j < square[i].length; j++) {
            if (square[i][j] === char) {
              result += `${j + 1}${i + 1}`;
            }
          }
        }
        if (char === " ") result += " ";
      }
    } else {
      for (let i = 0; i < input.length; i += 2) {
        const char = input[i];
        if (char === " ") {
          result += " ";
          i--;  // adjust to account for space
        } else {
          const col = parseInt(char) - 1;
          const row = parseInt(input[i + 1]) - 1;
          result += square[row][col];
        }
      }
    }
    return result;
  }

  return { polybius: polybius };

})();

module.exports = { polybius: polybiusModule.polybius };
