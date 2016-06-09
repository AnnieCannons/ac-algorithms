//PIG LATIN!

//Translate the provided string to pig latin.

//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

//If a word begins with a vowel you just add "way" to the end.

//Input = string
//Output = string translated to piglatin

function translatePigLatin(str) {
	
	var pigLatin = str.split("");
  //check if the first letter is a constonant or vowel
  switch(pigLatin[0]){
  case "a" :
  case "e" :
  case "i" :
  case "o" : 
  case "u" :
  //if first letter is a vowel, just add "way" to the end of the word 
  //and join together
  	pigLatin.push("way");
    pigLatin = pigLatin.join("");
    break;
  // if first letter is a constonant take the first letter and push it to the end
  //and then push "ay" to the end
  // join together
  default :
  	pigLatin.push(pigLatin.shift());
    pigLatin.push("ay");
    pigLatin = pigLatin.join("");
    break;
  }
  console.log(pigLatin);
}

translatePigLatin("consonant");
//TEST CASES
translatePigLatin("california"); //should return "aliforniacay".
translatePigLatin("paragraphs"); //should return "aragraphspay".
translatePigLatin("glove"); //should return "oveglay".
translatePigLatin("algorithm"); //should return "algorithmway".
translatePigLatin("eight"); //should return "eightway".