var born = prompt ("What Year Were You Born?");
var year = new Date().getFullYear();
var age = function() {
	var diff = year - parseInt(born);
	console.log(diff + " or " + (diff - 1));
}
console.log(age())

//Execute function by () 
//No coercion

//1)Minimum
function min(x,y){
	console.log(Math.min(x,y));
}
min(2,12);

//2)Recursion
function isEven(x){
	if(x % 2 === 0)
	return "True";
	else
	return "Flase";
}
console.log(isEven(5));

//3)Bean Counting
//I need to select each letter in the string to see if it is a capital B using the countChar function. It should only count the characters IF they are === to "B".

var countBs = function(str, character){
	var count = 0;
	for (var i=0; i <str.length; i++){
		if(str(i) === "B")
			count++;
	}
	return count;
}

//4)Max
function maxOfThree(x,y,z){
	console.log(Math.max(x,y,z));
}
maxOfThree(2,4,6);

//5) Vowel Checker
function vowelChecker("x"){
	if(x == "a" || x == "u" || x == "e"|| x == "i"|| x == "o")
	return "True";
	else
	return "False";
}
console.log(vowelChecker("c"));

//5) Is Prime
//I need to write a function that checks to see if any of the numnbers less than itself and more than one can go into it without a remainder. If one a number can, other than itself and one, than it should output false. Otherwise true.


fuction isPrime(x) {
	for (i = 2; i < x; i++){
		if(x % i === 0)
		return "False";
		else
		return "True";
	}	
}
console.log(isPrime(11));



var theNumber = Number(prompt("Pick a number", ""));
alert("Your number is the square root of " +
      theNumber * theNumber);
      //Question: Why after first line , "" ???


var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of " +
        theNumber * theNumber);


var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);


var i = 1;
for (var i = 0; i < 100; i++) {
  if((i % 5 === 0) && (i % 3 ===0))
  console.log("FizzBuzz");
  else if( i % 3 === 0 )
  console.log("Fizz");
  else if( i % 5 === 0)
  console.log("Buzz");
  else
  console.log(i + 1);
}
