//Fibonacci Challenge!

//Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

//The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

//As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.


function sumFibonacci(num) {
  //input num
  var a = 0;
  var b = 1;
  var total = 0;
  //confirm num is greater than 1
  if (num < 1){
  	console.log("Too small");
    return 1;
  } else {
  	//collect all fibonacci numbers under num in the variable total
    while (b <= num) {
      if (b%2 === 1){
        total += b;
      }
      b = a + b;
      a = b - a;
    }
       console.log(total);
  	    return total; 
  }
  	//output sum of fibonaccis
    console.log(total);
  	    return total; 
}

//TEST CASES
//sumFibonacci(1000); should return 1785.
//sumFibonacci(4000000); should return 4613732.
//sumFibonacci(4); should return 5.
//sumFibonacci(75024); should return 60696.
//sumFibonacci(75025); should return 135721.