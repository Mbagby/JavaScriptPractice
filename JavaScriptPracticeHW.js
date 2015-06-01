//Looping Triangle
var loopingATriangle = function(length){
	for(var i=0; i<length;i++){
		var character = "#"
		console.log(character.repeat(i))
	}
}
loopingATriangle(8);

//FizzBuzz
for(i = 1; i <= 100; i++){
	if(i%15===0){
		console.log("FizzBuzz");
	}
	if(i%3===0){
		console.log("Fizz");
	}
	if(i%5===0){
		console.log("Buzz");
	} else
		console.log(i);	
}

//Chess Board
var size = prompt("What size square?")
var grid = "";
for(var x=0;x<size; x++){
	for(var y=0;y<size; y++){
		if((x+y)%2===0){
		grid = grid + " ";
		}else{
		grid = grid + "#";
		}
	}
	grid = grid + "\n";
}
console.log(grid);

//Bottles of Beer
var bottles = 0;
for(var i=99; i>0; i--){
	bottles = i;
    if (bottles === 1){
      console.log( "1 Bottle of beer on the wall, one bottle of beer. You take one down pass it around, no bottles of beer on the wall");
    }else {
	  console.log( bottles + " Bottles of beer on the wall, " + bottles + " bottles of beer. You take one down, pass it around, " +(bottles-1)+ " Bottles of beer on the wall.");
    }
}

//Odd Numbers
for (var i=1; i <1337; i++){
	if (i % 2 != 0){
		console.log(i)
	}
}

//Temperature Converter
var guage = prompt("Would you like to convert to Celcius or Farenheit?");
var temperture = prompt("What temperture would you like to convert?");
if (guage === "Celcius" || "C" ||"c"){
  convertedTemp= (temperture* (9/5) + 32)
  console.log(convertedTemp)
}else{
  convertedTemp = ((temperture-32) * (5/9))
  console.log(convertedTemp)
}






