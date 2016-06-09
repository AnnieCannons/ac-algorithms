//Let's learn spinal case!!

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

//INput = string
//Output = lowercase words seperated by dashes
//methods = .toLowerCase(), .split(), .join()

function spinalCase(str) {
	var array = str.replace(/\s+|_+/g, "-").toLowerCase();

  	console.log(array);
}

spinalCase('This Is Spinal Case');

spinalCase("This Is Spinal Case") //should return "this-is-spinal-case".
 spinalCase("thisIsSpinalCase") //should return "this-is-spinal-case".
 spinalCase("The_Andy_Griffith_Show") //should return "the-andy-griffith-show".
 spinalCase("Teletubbies say Eh-oh") //should return "teletubbies-say-eh-oh".
 spinalCase("AllThe-small Things") //should return "all-the-small-things".