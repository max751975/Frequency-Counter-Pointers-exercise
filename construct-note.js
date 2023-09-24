// add whatever parameters you deem necessary
function constructNote(msg, letters) {
  let msgFreq = {};
  let lettersFreq = {};

  // frequency counter of letters
  for (let char of letters) {
    lettersFreq = lettersFreq[char] + 1 || 1;
  }
  //   frequency  counter for message
  for (let char of msg) {
    msgFreq = msgFreq[char] + 1 || 1;
  }
  //   compare message frequency with letters frequency
  for (let char of msgFreq) {
    if (!lettersFreq[char]) return false;
    if (msgFreq[char] > lettersFreq[char]) return false;
  }
  return true;
}
