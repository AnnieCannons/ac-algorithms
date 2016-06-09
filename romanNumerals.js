//Learn to speak like a Roman!

//Convert the given number into a roman numeral.

//All roman numerals answers should be provided in upper-case.

//Here are some helpful links:

//1) What are Roman Numerals? http://www.mathsisfun.com/roman-numerals.html

//2) Array.splice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

//3)Array.indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

//4)Array.join() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

//Input = a positive number
//Output= upper-case roman numeral letters 


var translation =[];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var numerals = ['M', 'CM', 'D','CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function speakRoman(num) {
// For loop will loop through the numbers array 
 	for (var i = 0; i < numbers.length; i++){
 //get the first number in the number array that is than num
  	while(num >= numbers[i]){
 //add that letter in the numbers array postion from the numerals array to our translation array
    translation += numerals[i];
 //subtract the number from numbers array from num to get the remainder and repeat loop
    num -= numbers[i];
    }
  }
  console.log(translation);
}

speakRoman(68);


speakRoman(2); // "II".
speakRoman(3); // "III".
speakRoman(4); // "IV".
speakRoman(5); // "V".
speakRoman(9); // "IX".
speakRoman(12); // "XII".
speakRoman(16); // "XVI".
speakRoman(29); // "XXIX".
speakRoman(44); // "XLIV".
speakRoman(45); // "XLV"
speakRoman(68); // "LXVIII"
speakRoman(83); // "LXXXIII"
speakRoman(97); // "XCVII"
speakRoman(99); // "XCIX"
speakRoman(500); // "D"
speakRoman(501); // "DI"
speakRoman(649); // "DCXLIX"
speakRoman(798); // "DCCXCVIII"
speakRoman(891); // "DCCCXCI"
speakRoman(1000); // "M"
speakRoman(1004); // "MIV"
speakRoman(1006); // "MVI"
speakRoman(1023); // "MXXIII"
speakRoman(2014); // "MMXIV"
speakRoman(3999); // "MMMCMXCIX