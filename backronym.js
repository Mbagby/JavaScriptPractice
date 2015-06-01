 var backronym = function(string){
 var array = string.split("");
 var newArray = [];
	for(var i =0; i<array.length; i++){
		if (string[i] === "A" || string[i] === "a"){
			newArray.push("Antagonistic");
		}else if (string[i] === "B" || string[i] === "b"){
			newArray.push("Bothering");
		}else if (string[i] === "C" || string[i] ==="c"){
			newArray.push("Charmander");
		}else if (string[i] === "D" ||string[i] === "d"){
			newArray.push("Dunce");
		}else if (string[i] === "E" || string[i] ==="e"){
			newArray.push("Egotistical");
		}else if (string[i] === "F" || string[i] ==="f"){
			newArray.push("Flouncy");
		}else if (string[i] === "G" || string[i] ==="g"){
			newArray.push("Godess");
		}else if (string[i] === "H" || string[i] ==="h"){
			newArray.push("Highjacker");
		}else if (string[i] === "I" || string[i] ==="i"){
			newArray.push("Illiterate");
		}else if (string[i] === "J" || string[i] ==="j"){
			newArray.push("Jubilant");
		}else if (string[i] === "K" || string[i] ==="k"){
			newArray.push("Killer");
        }else if (string[i] === "L" || string[i] ==="l"){
			newArray.push("Litigious");
        }else if (string[i] === "M" || string[i] ==="m"){
			newArray.push("Magestic");
        }else if (string[i] === "N" || string[i] ==="n"){
			newArray.push("Naughty");
        }else if (string[i] === "O" || string[i] ==="o"){
			newArray.push("Oblivious");
        }else if (string[i] === "P" || string[i] ==="p"){
			newArray.push("Joyous");
        }else if (string[i] === "Q" || string[i] ==="q"){
			newArray.push("Quak");
        }else if (string[i] === "R" || string[i] ==="r"){
			newArray.push("Rebellious");
        }else if (string[i] === "S" || string[i] ==="s"){
			newArray.push("Selfish");
        }else if (string[i] === "T" || string[i] ==="t"){
			newArray.push("Timid");  
        }else if (string[i] === "U" || string[i] ==="u"){
			newArray.push("Ubiquitous");  
        }else if (string[i] === "V" || string[i] ==="v"){
			newArray.push("Vulgar");  
        }else if (string[i] === "W" || string[i] ==="w"){
			newArray.push("Wallowing");
        }else if (string[i] === "X" || string[i] ==="x"){
			newArray.push("Xenophobic");
        }else if (string[i] === "Y" || string[i] ==="y"){
			newArray.push("Youthful");
        }else if (string[i] === "Z" || string[i] ==="z"){
			newArray.push("Zealous");
        }
	}
   return(newArray);
};
var name = prompt("What is your name?");
console.log(backronym(name));
