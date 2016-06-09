//Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

//Helpful Links
//https://dev.w3.org/html5/html-author/charref
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

function convertHTML(str) {
	//split each character 
	var array = str.split("");
	//loop through individual characters in array
	for ( var i = 0; i < array.length; i++){
		//object to match key with character
  		var entity = { "&" : "&amp;", "<" : "&lt;",  ">" : "&gt;",  "" : "&gt;", "'" : "&apos;"};
  		//selecting the value of the keys
  		for(var key in entity){
  			//if a character in the array matches a key in entity object...
  			if(array[i] === key ){
  			//switch the character to the value of that key
  				array[i] = entity[key];
  			}
  		}
	}
	array=array.join("");
	console.log(array);
}

convertHTML("Dolce & Gabbana");

//TEST CASES

 convertHTML("Dolce & Gabbana"); //should return Dolce &​amp; Gabbana.
 convertHTML("Hamburgers < Pizza < Tacos"); //should return Hamburgers &​lt; Pizza &​lt; Tacos.
 convertHTML("Sixty > twelve"); //should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"'); //should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List"); //should return Shindler&​apos;s List.
convertHTML("<>"); //should return &​lt;&​gt;.
convertHTML("abc"); //should return abc.
