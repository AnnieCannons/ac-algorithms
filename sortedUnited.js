//Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

//Here are some helpful links:

//Array.reduce()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//input is a collection of array arguments
function uniteUnique(arr) {
  //create result container
  var result = [];
  //for each number in array, check if element is present in result array.
  for (var i=0; i< arguments.length; i++){
     var holder = arguments[i];
    for (var j= 0; j< holder.length; j++) {
      
     if (result.indexOf(holder[j]) === -1) {
  		//if not present, push to new array
  		result.push(holder[j]);
  	} 
  }
}
  return result;
}



//TEST CASES
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].