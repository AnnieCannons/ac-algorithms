//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user.
//Bonus 1: console log area and perimeter in same sentence with string

function circleCalculation(radius) {

  var area = Math.pow(radius,2)*(22/7);
	var perimeter = (2*radius)*(22/7);
	console.log("the area is " + area + " and the circumference is " + perimeter + ".");
}

//Bonus 2: Make both number whole integers

function circleCalculation(radius) {
    var area = Math.round(radius*radius*(22/7));
	var perimeter = Math.round((2*radius)*(22/7));
	console.log("the area is " + area + " and the circumference is " + perimeter + ".");
}