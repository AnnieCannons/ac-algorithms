//We will be opening a store! 

//Compare and update the inventory stored in an array against a second array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item. 

//Input = array nested arrays, and an array of updates
//Output = Edited appended array with items in alphabetical order

// Example inventory lists
var currentInv = [
    [21, "Jackets"],
    [2, "Dress Shirts"],
    [1, "Pairs of Shoes"],
    [5, "Skirts"]
];

var newInv = [
    [2, "Pairs of Shoes"],
    [3, "Watches"],
    [67, "Jackets"],
    [7, "Pants"]
];

function updateInventory(arr1, arr2) {
// Check if the first item in arr1 has a duplicate in arr2
  for(var i=0; i <= arr2.length; i++){
//If these items match, add number of items to output array
    if(arr1[0][1] === arr2[i][1]){
      arr2[i][0] += arr1[0][0];
      arr1.splice(0,1);
    }
  }
//Check if the second item in arr1 has a duplicate in arr2
  for(var j = 0; j <= arr2.length; j++){
//If these items match, add number of items to output array
    if(arr1[1][1] === arr2[j][1]){
      arr2[j][0] += arr1[1][0];
//Remove the duplicate item from arr1
      arr1.splice(1,1);
    }
  }

  //Check if the third item in arr1 has a duplicate in arr2
  for(var k = 0; k <= arr2.length; k++){
//If these items match, add number of items to output array
    if(arr1[2][1] === arr2[k][1]){
      arr2[k][0] += arr1[2][0];
//Remove the duplicate item from arr1
      arr1.splice(2,1);
    }
  }

  //Check if the fourth item in arr1 has a duplicate in arr2
  for(var h = 0; h <= arr2.length; h++){
//If these items match, add number of items to output array
    if(arr1[3][1] === arr2[h][1]){
      arr2[h][0] += arr1[3][0];
//Remove the duplicate item from arr1
      arr1.splice(3,1);
    }
  }
//join the two arrays together
      arr2 = arr2.concat(arr1);
//Alphabe›tize array by strings
      arr2.sort(function(a,b){
        var x = a[1];
        var y = b[1];
        return x - y;
      });
      console.log(arr2);
}
updateInventory(currentInv, newInv);