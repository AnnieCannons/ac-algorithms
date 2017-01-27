/*
All non-prime numbers can be written as a multiplication of that number's prime divisors.
Sounds complicated but it is pretty simple.
Examples:
10 = 2 x 5 --> [2,5]
6 = 2 x 3 --> [2,3]
51 = 3 x 17 --> [3,17]
27 = 3 x 3 x 3 --> [3]
35 = 5 x 7 --> [5,7]
100 = 2 x 2 x 5 x 5 --> [2,5]
111111 = 3 x 7 x 11 x 13 x 37 --> [3,7,11,13,37]

Given a number n, write a function that returns a list of the prime divisors of that number.

Hint: You do not have to worry about finding numbers that are prime to divide the number,
as long as you start from 2 and keep dividing with 2 until you can't anymore before proceeding to 
3,4,5 ... If you divide with 2 as many as times as possible then you won't be able to divide with 4
so you do not need to worry about it.

Hint: If the input number is prime you should get the number as the solution. Your code should take
care of it.
*/

function getPrimes(num) {
    
	var isPrime = function(x) {
      if (x < 2) {
      return false;
      }
	//check to see if the remainder is = 0 when num is divided by 
	//any number between 2 and num
		for (i = 2; i < x; i++) {
			if (x % i === 0) {
			//if remainder is ever =0, return false
				return false;
			} 
		} 
	return true;
    };
    //create container for prime factors of num
    var primeFactors = [];
	
    for (j = 2; j < num; j++) {
    //test if each i is a factor of num	
		if (num % j === 0) {
          //test each factor to see if it's prime
			if (isPrime(j) === true) {
			  //if factor is prime, push to container	
              primeFactors.push(j);
			} 
		} 
	}

  console.log(primeFactors);
}
