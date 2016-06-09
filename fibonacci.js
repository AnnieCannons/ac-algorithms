//Fibonacci Challenge!

//Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

//The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

//As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

//Input = a number
//Output = sum of the odd numbers less than the given number




//Do While
function sumFibonacci(num) {
var previous = 0;
var current = 1;
var total = 0;
while(current <= num){
  //use a modulo to check for odd numbers
  if (current % 2 !==0){
  // += those numbers to a variable
    total+=current;
  }
  current += previous;
  //Get the new previous number by subtracting the current number by the old previous number
  previous = current - previous;
  }
  console.log(total);
}

sumFibonacci(1000);


//TEST CASES
//sumFibonacci(1000); should return 1785.
//sumFibonacci(4000000); should return 4613732.
//sumFibonacci(4); should return 5.
//sumFibonacci(75024); should return 60696.
//sumFibonacci(75025); should return 135721.