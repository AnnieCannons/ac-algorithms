//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.


function findLongestWord(str) {
  //input is a string
  //split str into array of strings of words and set that array as a variable
  var newArray = str.split(" ");
  //create array to hold length of each word in array of str's words
  var numArray = [];
  //assess length of each word item in that array and push into a new array
  for (var i=0; i<newArray.length; i++) {
  	numArray.push(newArray[i].length);
  }
  //locate and store (or simply return) the maximum length
  var result = Math.max(...numArray);
  //output is a number that reflects the length of the longest string
  return result;
}

