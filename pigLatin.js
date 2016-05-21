//PIG LATIN!

//Translate the provided string to pig latin.

//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

//If a word begins with a vowel you just add "way" to the end.


function translatePigLatin(str) {
  //split input string into array of letters
   var array = str.split("");
    //check first letter from array for vowel state 
    switch (array[0]) {
   	//if vowel, just add "way to end"
      case "a":
   	  case "e":
   	  case "i":
   	  case "o":
   	  case "u":
   		array.push("way");
   		break;
   	//if consonant, move first letter to end and add "ay"
      default:
   		var first = array.shift();
   		array.push(first + "ay");	
   }
   //rejoin array as string
   var result = array.join("");
   console.log(result);
   return result;
}

// TEST CASES
// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".