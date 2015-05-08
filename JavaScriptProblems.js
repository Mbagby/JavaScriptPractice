
//AsciiArt
//Ask them how many rows
//Ask them what character to use
//These should be your two inputs into function (x,y)
//number of spaces is half the length
//number of columns=(row + (row-1))
var rows = 5;
var columns = rows +(rows + 1);
var character = "*";
for (var i = 0; i <= rows; i++){
  character = character + "**";
   console.log(character);
}
 //Use .repeat
//add empty string " " before if character.length != columns
//  if (character.length != columns){
 //   console.log(" "+character);

//Fibonacci Sequence

//Honestly. This is my biggest win in this class so far. I have been struggling with the HW problems and having to spend an insane amount of time fixing errors and undefineds. This time I did it on the first try. Talked it out and then wrote the code. Yay!

//start with 0 and 1 because 0 does add to -1 to create 1.
//take the 0 and 1 element and add them together to return another element. Add that element to the array, repeat incrementing by one each time until we reach the 100th element. 

array = [0,1];
for (i =0; i < 100; i++){
  array.push(array[i] + array[i+1]);
}
console.log(array);


//Multiplication Table
//Need to use a for loop

//Uniq
//We need to use a for loop to look to see if any array[i] equals another element of the array
var uniq = function(array){
	for(t=0;t<array.length;t++){
		var temp = array[t];
		return(temp)
		for(n=0;n<array.length;n++){
			if temp === array[n];
			//delete the element of the array
		}
	}
}
//Problem: This code will delete the intire array when the position of the array is in the same position put into the temporary variable.

//Reversing an Array using a new array
var reverseArray = function(array){
	var newArray = [];
	for(var i=array.length - 1; i >=0;i--){
		newArray.push(array[i]);
	}
	return(newArray)
};
console.log(reverseArray[6,13,47,8]);

//Reversing an Array in place
var reverseArrayInPlace = function(array){
	var temporary = 0;
	for (var i = 0; i < array.length; i++);
		temporary = array[i];
		array[i]= array[array.length-i-1];
		array[array.length-i-1]= temporary;
}
console.log(reverseArrayInPlace[8,12,24,82,3]);

//Palindrome Checker
//First we need to split the string
//Then create a reverse of the array
//And then compare the value of the letters or numbers in position [i]
var reverseArray = function(array){
	var newArray = [];
	for(var i=array.length - 1; i >=0;i--){
		newArray.push(array[i]);
	}
	return(newArray)
}
var palindrome = function(array){
	for(var i=0; i<array.length;i++);
		if array[i]===newArray[i]{
			"True"
		}
};
console.log(palindrome("eattrre"));











