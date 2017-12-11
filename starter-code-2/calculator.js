// get the user inputs
var value1;
var value2;
var value3;
var value4;
var value5;
var value6;
var choice;
var loop = "y";

while (loop === "y"){
	calcChoice = prompt("Choose your calculator. Type one letter only. 'c' is the calc, 'b' is the BMI calc, 'm' is the mortgage calc.");
	if (calcChoice === "c"){
		value1 = parseInt(prompt("Enter first value")); 
		choice = prompt("Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (sq)areroot (pow)er") || ("a");
		if (choice !== "sq") { 
			value2 = parseInt(prompt("Enter the second value"));
		}
		switch (choice) {
			case "pow":
				alert(Math.pow(value1, value2));
				break;
			case "sq":
				alert(Math.sqrt(value1));
				break;
			case "a":
				alert(value1 + value2);
				break;
			case "s":
				alert(value1 - value2);
				break;	
			case "m":
				alert(value1 * value2);
				break;	
			case "d":
				alert(value1 / value2);
				break;	
			default:
				alert("Unrecognised Input");		
		}
	} else if (calcChoice === "b"){
			value1 = parseInt(prompt("Enter your weight in kg")); 
			value2 = parseFloat(prompt("Enter the height in metres"));
			alert("BMI is: "+(value1/value2)/(value2));
	} else if (calcChoice === "m"){
		value1 = parseFloat(prompt("Input your mortgage loan amount in Pounds and Pence only. Do not use a comma to seperate thousands."));
		//value1 is the Mortage Loan amount, L	
		value2 = parseFloat(prompt("Input your montly interest rate. This is the annual interest rate divided by 12."));
		//value 2 is the Monthly interest rate, this is the percentage/12, this value is equal to, c*100
		value3 = parseInt(prompt("Input the total number of months in the loan. This is the number of years multiplied by 12."));
		//value3 is the Number of months in the loan, interger, n
		value4 = (value2/100);
		//value4 calculates the value of the monthly interest rate and converts it into a decimal value, true value of, c
		value5 = Math.pow((1+value4),value3);
		//value5 calculates the output of ((1+C)^n), exponential
		value6 = (((value1*value4)*(value5))/(value5));
		//value6 calculated the final calculation for monthly re-payment, P
		alert("Your monthly mortgage payment is:£"+(value6));
	}
	loop = prompt("Run again, y/n?");
}







