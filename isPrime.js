/*

Given a number between 1 and 2^16, return true if the number is prime, return false if it is not.
Remember 2 is a prime number and 1 is not.

Hint: You may not need to check numbers up to num to check for primeness.

*/

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
	for ( i = 2; i <= num; i++){//Check all number less than input num
		if (num % i === 0){
          console.log(num + " is not a prime number");
			return false;
        }
      return true;
	}
}
isPrime(1);




