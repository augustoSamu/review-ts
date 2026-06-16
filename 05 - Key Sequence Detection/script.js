const currentKeys = [];
const secretWord = "banana";

document.addEventListener("keyup", (e) => {
  currentKeys.push(e.key);

  const word = currentKeys.join("");
  verifyCode(word);
});

function verifyCode(word) {
  if (word.length < secretWord.length) {
    return;
  }

  if (word === secretWord) {
    cornify_add();
    currentKeys = [];
  } else {
    currentKeys.shift();
  }
}
