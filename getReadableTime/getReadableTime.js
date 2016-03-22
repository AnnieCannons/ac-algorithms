/*
Given a number of minutes as an integer, return an object with two properties,
"hour" and "minute", which is equivalent to the input minutes.
Hint: Check out Math.floor function at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Hint: Check out remainder operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder

Bonus 1: Add "day" property

Bonus 2: return -1 if the input is not a number or if 
it is a negative number
*/

/**
Examples:

var result = getReadableTime(102);
console.log(result) // Object {minute: 42, hour: 1}

var result = getReadableTime(12);
console.log(result) // Object {minute: 12, hour: 0}

var result = getReadableTime(1002);
console.log(result) // Object {minute: 42, hour: 16}

var result = getReadableTime(10002);
console.log(result) // Object {minute: 42, hour: 22, day: 6}

var result = getReadableTime("10002");
console.log(result) // -1

var result = getReadableTime();
console.log(result) // -1

var result = getReadableTime(-12);
console.log(result) // -1

**/

<<<<<<< HEAD
//without bonus:

function getReadableTime(minutes) {
	var minutez = Math.floor(minutes);
	var clock = {hour:(minutez/60), minute: (minutez%60)};
	return clock;
	
}

//with bonus 1:

function getReadableTime(minutes) {
	var clock = {
		day: 0,
		hour: 0,
		minutes: 0,
	};
		var totalHour = Math.floor(minutes/60);
		var totalDay = Math.floor(totalHour/24);
		var hoursLeftAfterDays = totalHour%24;
		var remainingMinutes = minutes%60;
		clock.day = totalDay;
		clock.hour = hoursLeftAfterDays;
		clock.minutes = remainingMinutes;

		return clock;
	}


//with bonus 2:

function getReadableTime(minutes) {
	if (typeof minutes !== "number" || (minutes<0)) {
		return -1;
	} else {
	var clock = {
		day: 0,
		hour: 0,
		minutes: 0,
	};
		var totalHour = Math.floor(minutes/60);
		var totalDay = Math.floor(totalHour/24);
		var hoursLeftAfterDays = totalHour%24;
		var remainingMinutes = minutes%60;
		clock.day = totalDay;
		clock.hour = hoursLeftAfterDays;
		clock.minutes = remainingMinutes;

		return clock;
	}	
=======
 


function getReadableTime(minutes) {
	var object = {};
	var totalHour = Math.floor(minutes/60);
	var dayforObject = Math.floor(totalHour/24);
	var remainingHour =totalHour - (dayforObject*24);
	var minutesforObject= minutes % 60;
	object.hour = remainingHour;
	object.minutes = minutesforObject;
	object.day = dayforObject;
	console.log(object);
}

getReadableTime(120);
>>>>>>> 9410a70a0a1cbbbd1bcda74091881ba2a97a51cb
