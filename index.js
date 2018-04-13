/**
  * The count function counts the occurence of words in a text,
  * ignoring most punctuation as well as words of length inferior or equal to 2.
  * It throws if the provided argument is not a string.
  * It otherwise returns an object of shape: { wordInText: occurenceOfWordInTheText }.
  *
  * Examples:
  * > count("aaa bbb bbb . cc")
  * {aaa: 1, bbb: 2}
  *
  * > count(2)
  * Error: Invalid argument provided to count. Text should be a string.
  */

function count(text) {
  if (typeof text !== "string") {
    throw new Error("Invalid argument provided to count. Text should be a string.");
  }
  var cleanText = clean(text);
  var words = extractWords(cleanText);
  var result = countWords(words);
  return result;
}

function clean(text) {
  // Removing punctuation, line breaks and downcasing.
  // The regex might need to be improved over time.
  var regex = /[!@#$%^&*()-=_+|;':",.<>?'«»’‘\n{}\[\]\\]/g;
  return text
    .replace(regex, ' ')
    .toLowerCase();
}

function extractWords(text) {
  return text
    .split(" ")
    .filter(validateWord);
}

function validateWord(word) {
  return word.length > 2;
}

function countWords(words) {
  return words.reduce(countWordsReducer, {});
}

function countWordsReducer(acc, val) {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}

module.exports = count;
