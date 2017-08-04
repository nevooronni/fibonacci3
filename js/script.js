//custom javascript 

//back-end
var fibonacciLoop = function(userInput) {
	if(userInput <= 25) {
		return "Fibonacci Series " + loop(userInput);
		} else {
			return "Error enter a number between 0 and 25!"
		}		
}


/*var result = function calcFibonNth(userInput) {
		if(userInput > 2) {
			return calcFibonNth(userInput - 2) + calcFibonNth(userInput - 1); 
		} else if ((userInput === 1) | (userInput === 2))  {
			return 1;
		} else {
			return 0;
		}
}*/

	/*var loop = function(userInput) {
		var resultOfAray = [];
		for(var i = 0; i <= userInput; i++) {
			if(i > 2) {
				j = ((result) + (i -1));
				resultOfAray.push(i);
			}
			else if ((i === 1) | (i === 2)) {
				resultOfAray.push("1");
		} else {
				resultOfAray.push("0");
		}
	}	
	return resultOfAray;
}*/

var loop = function getFibonacci(userInput) {
var output = "";
var oldnumber = -1;
var newnumber = 1;
for (i= 0; i < userInput; i++) {
var prevoldnumber = newnumber;
newnumber = oldnumber + newnumber;
oldnumber = prevoldnumber;
output = output + newnumber + ' ';
}
return output;
}	


//front-end
$(document).ready(function() {
	$("input#go").click(function(event) {
		event.preventDefault();
		var userInput = parseInt($("input#input").val());
		var resultOfAray = loop(userInput);
		$("#output").text(resultOfAray);
	})
});