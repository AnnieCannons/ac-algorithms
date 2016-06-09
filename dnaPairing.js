//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//Input= string
//output= characters paired in an array(inside a parent array)

//Input= string
//output= characters paired in an array(inside a parent array)

function pairElement(str) {
	//empty array to push results
	var pairs = [];
	var elements = str.split("");
	//pair each element with its matching DNA element
	for (var i = 0; i < elements.length; i++){
  	if (elements[i] === "C"){
   			pairs.push([elements[i], "G"]);
    } else if (elements[i] === "G"){
    			pairs.push([elements[i], "C"]);	
    }  else if (elements[i] === "A") {
    		pairs.push([elements[i], "T"]);
        } else if (elements[i] === "T"){
        		pairs.push([elements[i], "A"]);
        }
  }
	console.log(pairs);
 
}

pairElement("TTGAG");

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]