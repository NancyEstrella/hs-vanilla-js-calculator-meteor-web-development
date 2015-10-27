
alert("Welcome to the calculator!");

var operator = prompt("What kind of math do you want to do? (+, -, /, *)")

var number_one = prompt("What is your first number?")

var number_two = prompt("What is your second number?")

if (operator == "+"){
  alert(parseInt(number_one) + parseInt(number_two));
}
else if (operator == "-"){
  alert(parseInt(number_one) - parseInt(number_two));
}
else if (operator == "*"){
  alert(parseInt(number_one) * parseInt(number_two));
}
else if (operator == "/"){
  alert(parseInt(number_one) / parseInt(number_two));
}
else {
  alert("You didn't enter a valid operator");
}


