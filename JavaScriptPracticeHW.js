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
	console.log( bottles + " Bottles of beer on the wall " + bottles + " bottles of beer. You take one down, pass it around " +(bottles-1)+ " Bottles of beer on the wall.");
};

