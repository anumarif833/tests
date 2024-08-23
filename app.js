// Q. 01 Write a function that displays current date & time in your browser.


// function time(){
//     var date = new Date()
//     document.write(date)

// }
// time(),"<br><br>";


// Q. 02 Write a function that takes first & last name and then it greets the user using his full name.


// var firstName = prompt("enter your first name:");
// var lastName = prompt("enter your last name:");
// function greet(firstName,lastName){
//     alert(`hello ${firstName} {lastName} have a nice day`)
// }
// greet(firstName,lastName);


// Q. 03 Write a function that adds two numbers (input by user) and returns the of two number.


// var firstNum = +prompt("enter your first number:");
// var secondnNum = +prompt("enter your second number:");
// function sum(firstNum,secondnNum){
//     alert(`sum of ${firstNum} and ${secondnNum} is ${(firstNum+secondnNum)}`)
// }
// sum(firstNum,secondnNum);


// Q. 04  Calculator:
//  Write a function that takes three arguments num1, num2 & operator & computer the desired operation.
// Return and show the desired result in your browser.


// var firstNum = +prompt("enter your first number:");
// var operator = prompt("which operator you want to use:");
// var secondnNum = +prompt("enter your second number:");
// function Calculator(firstNum,operator,secondnNum){
//     if(operator==="+"){
//     alert(` ${firstNum} + ${secondnNum} = ${firstNum+secondnNum}`)
        
//     }else if(operator==="-"){
//     alert(` ${firstNum} -  ${secondnNum} = ${firstNum-secondnNum}`)
        
//     }else if(operator==="*"){
//         alert(` ${firstNum} * ${secondnNum} = ${firstNum*secondnNum}`)

//     }if(operator==="/"){
//     alert(` ${firstNum} / ${secondnNum} = ${firstNum/secondnNum}`)

//     }if(operator==="%"){
//     alert(` ${firstNum} % ${secondnNum} = ${firstNum%secondnNum}`)

//         } else{

//         alert("this oprerat is not available");
          
//  }}
// CalculatorI(firstNum,operator,secondnNum);


// Q. 05 Write a function that squares its argument.

// var num = + prompt("enter number")
// function square(num){
//     alert(num*num)
//     return(num*num)
// }
// square(num);


// Q. 06 Write a function that  computer factorial of a number.


// var factorial = +prompt("enter computer number");
// var factorial = +prompt("enter your first number");


// Q. 07 Write a function that take start and end number as inputs & display counting in your browser.


// var firstNum = +prompt("enter your first number:");
// var secondnNum = +prompt("enter your second number:");

// function counting(firstNum,secondnNum){
// for(var i = firstNum; i<=secondnNum;i++){
//     document.write(i  +  " ")
// }

// }

// counting(firstNum,secondnNum);


// Q. 08 Write a nesteg function that computers hypotense of a right angle triangle.
// hypotenuse2 = Base2 + perpendicular2

// Take base and perpendicular as inputs.
// Outer fancitons : calcolateHypotenuse()
// inner function: calculateSquair()


// Q. 09 Write a function that calculates the area of rectangle.
// A = Width * height 
// pass width and hight in following manner:

// i. Arguments as value
// ii. Arguments as variables


// var width = +prompt("enter width");
// var height = +prompt("enter height");


// function rectangle(width,height){
//     var rectangleCal = width*height
//     return rectangleCal;
// }

// var result = rectangle(width,height)
// alert("area of rectangle is "+ result);


// Q .10 Write a jawaScript function that cheeks whether a passed string is palindrome or not?
// A palindrome is word.phrase, or sequence that reads the same backword as forward,e.g.madam.

 
// var palindrome = string("enter a backword"){
  
// } CANT SOLVE THUS QUSTION.



// Q . 11 Write a jawaScript function that accepts a string as a parameter and converts the first letter of 
// each word of the string in upper case. 

// EXAMPLE STRING : `The quick brown fox`
// EXAMPLE OUTPUT : `The Quick Brown Fox`


// function stringConverter (input){
// var input = prompt("enter any sentence");
// var splits = input.splits(" ");
// var valueStore="";
// for(var i = 0 ; i<splits.langht; i ++){
//     valueStore+=splits[i].charAt(0).toUperCase() + splits[i].slice(1).toLowerCase();
// }return valueStore;
// }
// var result = stringConverter();
// document.write(result);

