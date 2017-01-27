//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//Here are some helpful links:

//Array.push() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

//Array.slice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

//TEST CASES
//chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].


function chunkArrayInGroups(arr, size) {
  //create container for new 2D array
  var chunks = [];
  //place spliced values into that array
  	for (var i = 0; i< arr.length; i++) {
  		chunks.push(arr.slice(arr.length-size, arr.length));
      	//remove spliced values from origial array
      	for (var j=1; j<=size; j++) {
      		arr.pop();
		}  
	}
  return chunks;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);