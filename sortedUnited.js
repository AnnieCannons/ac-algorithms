//Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

//Here are some helpful links:

//Array.reduce()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce



//Input = two arrays of numbers
//Output = one array containing the elements in original order from the first arrays and no duplicates
function uniteUnique(arr) { 
//empty array to push final elements to.
 var final = [];
//looping through all the arrays in the parameter.
  for(var i = 0; i < arguments.length; i++){
  //saving each array as a local variable.
  	var num = arguments[i];
  //looping through each individual element
  	for(var k = 0; k < num.length; k++){
 	//checking if my final array already contains a specific number inside.
    	if(final.indexOf(num[k]) === -1){
    //if final array doesnt already contain that number, push it to final array.
         final.push(num[k]);
      }
    }
  }
  console.log(final); 
}

//TEST CASES
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //should return [1, 3, 2, 5, 4].
 uniteUnique([1, 3, 2], [1, [5]], [2, [4]]); //should return [1, 3, 2, [5], [4]].
 uniteUnique([1, 2, 3], [5, 2, 1]); //should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); //should return [1, 2, 3, 5, 4, 6, 7, 8].