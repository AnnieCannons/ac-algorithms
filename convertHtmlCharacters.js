//Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

//Helpful Links
//https://dev.w3.org/html5/html-author/charref
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp


function convertHTML(str) {
  var tester = str.split('');
  var result = [];
  for (var i =0; i < tester.length; i++) {
  	switch (tester[i]) {
  		case "&":
  		 result.push("&amp;");
  		 break;
  		case "<": 
  		result.push("&lt;");
  		 break;
  		case ">": 
  		result.push("&gt;");
  		 break;
  		case '"':  
  		result.push("&quot;");
  		 break;
  		case "'":
  		 result.push("&apos;");
  		 break;
  		default:
  		 result.push(tester[i]);
  		  break;

  	}
 
  }
  result = result.join("");
  return result;
}

convertHTML("Dolce & Gabbana");

//TEST CASES

// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Shindler's List") should return Shindler&​apos;s List.
// convertHTML("<>") should return &​lt;&​gt;.
// convertHTML("abc") should return abc.