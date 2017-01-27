//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

//Calling this returned function with a single argument will then return the sum:

//var sumTwoAnd = addTogether(2);

//sumTwoAnd(3) returns 5.

//If either argument isn't a valid number , return undefined.

function addTogether() {
 var result;
 var argA = arguments[0];
 var argB = arguments[1];
 if (arguments.length === 2) {
    if (typeof argA !== "number" || typeof argB !== "number") { 
      return undefined;
    } 
    else {
        result = argA + argB;
    }
 } 
 else {
     if (typeof argA !== "number") { 
       return undefined;
     } 
     else {
         return function(key) {
             if (typeof key !== "number") { 
               return undefined;
             } else {
                 result = key + argA;
             }
         };
     } 
 }
  console.log(result);
     return result;
}

addTogether(2,3);

//Test Cases

// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.