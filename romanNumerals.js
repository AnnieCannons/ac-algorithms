//Learn to speak like a Roman!

//Convert the given number into a roman numeral.

//All roman numerals answers should be provided in upper-case.

//Here are some helpful links:

//1) What are Roman Numerals? http://www.mathsisfun.com/roman-numerals.html

//2) Array.splice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

//3)Array.indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

//4)Array.join() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

function speakRoman(num) {
 	//create variable for remainder
 	var result =[];
 	var thousands, hundreds, tens, ones;
 	//find thousands in num and remainder;
 	var rem = num%1000;
 	//push # of thousands into result array
 	thousands = (num-rem)/1000;
 	if (thousands > 0) {
 		switch (thousands) {
 		case 10:
 			result.push("_X");
 			break;
 		case 9:
 			result.push("_XM");
 			break;
 		case 8:
 			result.push("VMMM");
 			break;
 		case 7:
 			result.push("VMM");
 			break;
 		case 6:
 			result.push("VMM");
 			break;
 		case 5:
 			result.push("V");
 			break;
 		case 4:
 			result.push("MV");
 			break;
 		case 3:
 			result.push("MMM");
 			break;
 		case 2:
 			result.push("MM");
 			break;
 		case 1:
 			result.push("M");
 			break;								
 		}
 	}
 	//find hundreds in remainder and reset remainder
 	hundreds = (rem - (rem%100))/100;
 	rem = rem%100;
 	//push # of hundreds into result array
 	if (hundreds > 0) {
 		switch (hundreds) {
 		
 		case 9:
 			result.push("CM");
 			break;
 		case 8:
 			result.push("DCCC");
 			break;
 		case 7:
 			result.push("DCC");
 			break;
 		case 6:
 			result.push("DC");
 			break;
 		case 5:
 			result.push("D");
 			break;
 		case 4:
 			result.push("CD");
 			break;
 		case 3:
 			result.push("CCC");
 			break;
 		case 2:
 			result.push("CC");
 			break;
 		case 1:
 			result.push("C");
 			break;								
 		}
 	}
 	//find tens in remainder and reset remainder
 	tens = (rem - (rem%10))/10;
 	rem = rem%10;
 	//push # of tens into result array
 	if (tens > 0) {
 		switch (tens) {
 		
 		case 9:
 			result.push("XC");
 			break;
 		case 8:
 			result.push("LXXX");
 			break;
 		case 7:
 			result.push("LXX");
 			break;
 		case 6:
 			result.push("LX");
 			break;
 		case 5:
 			result.push("L");
 			break;
 		case 4:
 			result.push("XL");
 			break;
 		case 3:
 			result.push("XXX");
 			break;
 		case 2:
 			result.push("XX");
 			break;
 		case 1:
 			result.push("X");
 			break;								
 		}
 	}
 	//find ones in remainder
 	ones = rem;
 	//push # of ones into result array
 	if (ones > 0) {
 		switch (ones) {
 		
 		case 9:
 			result.push("IX");
 			break;
 		case 8:
 			result.push("VIII");
 			break;
 		case 7:
 			result.push("VII");
 			break;
 		case 6:
 			result.push("VI");
 			break;
 		case 5:
 			result.push("V");
 			break;
 		case 4:
 			result.push("IV");
 			break;
 		case 3:
 			result.push("III");
 			break;
 		case 2:
 			result.push("II");
 			break;
 		case 1:
 			result.push("I");
 			break;								
 		}
 	}
 	//join result array
 	var roman = result.join("");
 	console.log(roman);
 	return roman;
}
}

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