//Map the Stars!

//Return a new array that transforms the element's average altitude into their orbital periods.

//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

//You can read about orbital periods on wikipedia. https://en.wikipedia.org/wiki/Orbital_period

//The values should be rounded to the nearest whole number. The body being orbited is Earth.

//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

//Helpful Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var resultArr = [];
  for (var i = 0; i<arr.length; i++) {
    //create container for orbit semi-major axis(a)
  var semiM = earthRadius + arr[i].avgAlt;
  //cube (a), divide by GM(mu), and take square root,multiply that result by 2pi
  var resultA = (Math.pow(semiM, 3))/GM;
  var resultB = Math.pow((resultA), 0.5);
  var result = Math.round((2*Math.PI)* resultB);
  //announce orbital period
  resultArr.push({name: arr[i].name, orbitalPeriod: result});
}
console.log(resultArr);}


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//TEST CASES

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
//orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].