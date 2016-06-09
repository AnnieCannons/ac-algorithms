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


//input = str with words
//output = number -> # of letters in longest word

//break up string into individual words
//find the longest word
//return length

function findLongestWord(str) {
//Create an array to seperate string into individual words
  var sepStr= str.split(" ");
//Sort the words in alpha numeric order, use compare function to compare which word is biggest, and put array into ascending order
  sepStr = sepStr.sort(function(a, b) {
    return a.length - b.length;
  });
//Get the last word in the array and get its length
  var lastWord = sepStr.pop();
   console.log(lastWord.length);
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");


