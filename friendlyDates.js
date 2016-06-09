// Friendly Date Ranges
// Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

// The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

// Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

// Additionally, if the date range begins in the current year and ends within one year, the year should not be displayed at the beginning of the friendly range.

// If the range ends in the same month that it begins, do not display the ending year or month.


//Hints
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

//Input = an array of two arrays containing cardinal dates in YYYY-MM-DD format
//Output = an array of the two ordinal dates in MM-DD-YYYY format

function friendlyDates(arr){
  //array to push final elements
var dates=[];
//take out and seperate the dashes
var seperate = [];
  seperate.push(arr[0].split("-"));
  seperate.push(arr[1].split("-"));
  //Loop through the two dates in the array
 for (var i = 0; i < seperate.length; i++){
 //translate a number into its corrisponding month
  
  switch(parseInt(seperate[i][1])){
    case 01 :
          dates.push("Jan");
          break;
    case 02 :
          dates.push("Feb");
          break;
    case 03 : 
          dates.push("March");
          break;
    case 04 :
          dates.push("April");
          break;
    case 05 :
          dates.push("May");
          break;
    case 06 : 
          dates.push("June");
          break;
    case 07 :
          dates.push("July");
          break;
    case 08 :
          dates.push("August");
          break;
    case 09 : 
          dates.push("September");
          break;
    case 10 :
          dates.push("October");
          break;
    case 11 :
          dates.push("November");
          break;
    case 12 : 
          dates.push("December");
          break;
    }
//make day numbers ordinal
   switch(parseInt(seperate[i][2])){
    case 01 :
    case 21 :
    case 31 :
          dates.push(parseInt(seperate[i][2] + "st"));
          break;
    case 02 :
    case 22:
          dates.push(parseInt(seperate[i][2] + "nd"));
          break;
    case 03 :
    case 23 :
          dates.push(parseInt(seperate[i][2] + "rd"));
          break;
    default:
          dates.push(parseInt(seperate[i][2] + "th"));
          break;
    }
  //push the year to the end of each array
   dates.push(parseInt(seperate[i][0]));
  }
console.log(dates);
}

friendlyDates(['2016-07-01', '2016-07-04']);
friendlyDates(["2016-12-01", "2017-02-03"]);
friendlyDates(["2022-09-05", "2023-09-04"]);




// TEST CASES

// friendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
// friendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
// friendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
// friendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
// friendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].
// friendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
// friendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].