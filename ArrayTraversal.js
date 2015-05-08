var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}

function printEach(array) {
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}

function each(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
} 
var names = ["Rusty", "Momo", "Wyatt"];
each (names,alert);
each (names, console.log);//Not working atm???

var min = numbers[0]
var numbers = [56,34,-10,99];
number.forEach(function(n){
	if (n < min) {
		min = n
	}
});
min

function repeat(times,action){
	for(var i=0; i<times;i++){
		action();
	}
}
repeat(3, function() {
   console.log("HELLO!");
})