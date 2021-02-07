module.exports = function check(str, bracketsConfig) {
  const closeSymbols = [];
  let currentPair;
  for (const currentS of str) {
    if ((currentPair = bracketsConfig.find(el => el[1] === currentS))) {
      if (closeSymbols.length > 0 && closeSymbols[closeSymbols.length - 1] === currentS) {
        closeSymbols.pop()
      } else if (currentPair[0] === currentS) {
        closeSymbols.push(currentPair[1]);
      } else {
        return false;
      }
    } else if ((currentPair = bracketsConfig.find(el => el[0] === currentS))) {
      closeSymbols.push(currentPair[1]);
    }
  }
  return closeSymbols.length === 0;
}