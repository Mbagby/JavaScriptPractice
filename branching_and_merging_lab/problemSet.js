

function frameYourPhrase(phrase) {
   var length = 
   brokenPhrase = phrase.split(" ")


   return "**********\n* Hello  *\n* World! *\n**********";
}

function isPrime(num) {
    for (i=2; i< num; i++){
      if (num % i === 0){
        return (num + " is Not prime");
      }
      else{
        return (num + " is prime");
      }
    }
}
console.log(isPrime(11));


console.log(frameYourPhrase("Hello World!"));
console.log(frameYourPhrase("This should print a new box!"));

if (isPrime(5)) {
    console.log("5 is Prime");
} else {
    console.log("You made an error, 5 should be prime");
}

if (isPrime(13)) {
    console.log("13 is Prime");
} else {
    console.log("You made an error, 13 should be prime");
}

if (isPrime(10)) {
    console.log("You made an error, 10 is not Prime");
} else {
    console.log("10 is divisible by 2 and 5");
}

