/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = dashInsert("13");
console.log(result) // "1-3"

**/

function dashInsert(str) {
	//create a new string to hold output
	var newStr = "";
	// convert to string using base ten
	var strUp = str.toString().split("");
	//locate all conseutive odd numbers
	for (i=0; i<strUp.length; i++) {
	//if trueinsert a dash
      if ((strUp[i] % 2) === 1 && (strUp[i+1]% 2) === 1) {
			newStr += strUp[i] + "-";
		} else {
			newStr += strUp[i];
		}
	
	}
  //return new string
	return newStr;
}