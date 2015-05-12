//A function that calls itself

//1. A Base Case
//2. Recursive Step

function factorial(n){
  if (n === 0){
  	 return 1;
  }
  return (n * factorial(n-1));
  }  	
factorial(5);


//Factorial

// 5!
// 5*4*3*2*1

// 0! == 1

function factorial(n){
  var result =n;
  while(n>1){
  	n-=1;
  	result *= n
  }  	
}
factorial(5)
//120