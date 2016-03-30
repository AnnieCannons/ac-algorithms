/*

Given a string, swap the case of each character and return it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

function swapCase(str) {
	var result= ""
	for (i=0; i<str.length; i++) {
	var letter =str[i];
	//if array itemis lowercase, convert to uppercase
	if (letter === letter.toLowerCase()) {
		letter = letter.toUpperCase();
		result += letter;
	//if array item is uppercase (not lowercase), convert to lowercase
	} else {
		letter = letter.toLowerCase();;
		result+= letter;
	}
	return result;
	
}