/* 
Write a function alphabetSoup(str) that takes a string and returns a string with
the letters in alphabetical order. Assume the input will not contain numbers or punctuation.
Hint: Check out split(), sort() and join() methods at 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Bonus:
If there are spaces in the input, do not include them in the result.
Hint: Check out trim() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/

/**
Examples:

var result = alphabetSoup("hello");
console.log(result) // "ehllo"

var result = alphabetSoup("");
console.log(result) // ""

var result = alphabetSoup("f");
console.log(result) // "f"

var result = alphabetSoup("my string");
console.log(result) // " gimnrsty"

Bonus:
var result = alphabetSoup("my string oh my");
console.log(result) // "ghimmnorstyy"

**/

<<<<<<< HEAD
function alphabetSoup(str) {
	var alphabet = str.split('').sort().join('').trim();
	return alphabet;
	
=======
function alphabetSoup(str) { //Create the function the the parameter str
	//Create a variable to hold the new array
	//Split the string into individual strings that are just one letter
	//Alphabetize them
	//Rejoin them as one string and take out the spaces at the beginning
	var myArray = str.split("").sort().join("").trim();
	return myArray;
>>>>>>> 9410a70a0a1cbbbd1bcda74091881ba2a97a51cb
}