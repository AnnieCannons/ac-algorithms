/*

Given a number between 1 and 2^16, return true if the number is prime, return false if it is not.
Remember 2 is a prime number and 1 is not.

Hint: You may not need to check numbers up to num to check for primeness.

*/

//identify all numbers between 1 and 2^16
//check to see if the remainder is = 0 when each is divided by any numbr between 2^16
//if remainder is ever =0, return false
//if remainder is never= 0, returnt true

/**

Examples:

var result = isPrime(1)
console.log(result) // false

var result = isPrime(2)
console.log(result) // true

var result = isPrime(3)
console.log(result) // true

var result = isPrime(4)
console.log(result) // false

var result = isPrime(29)
console.log(result) // true

var result = isPrime(51)
console.log(result) // false

**/

function isPrime(num) {
	//return false if number is 1 or less
	if (num <== 1) {
      return false;
    }
	//check to see if the remainder is = 0 when num is divided by 
	//any number between 2 and num
	for(i=2; i<num; i++) {
		if (num%i === 0) {
			//if remainder is ever =0, return false
			return false;
		} 
	} 
	return true;
}