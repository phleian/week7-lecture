// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(num) {
  return num ** 2;
}
console.log("The result of squaring the number 3 is " + squareNumber(3)); 

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(number) {
  return number / 2;
}
console.log("Half of 5 is " + halfNumber(5)); 

// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf(num1,num2) {
  percentage = (num1/num2)*100;
  return percentage;
}
console.log("2 is " + percentOf(2,4) + "% of 4");
// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.
function areaOfCircle(radius) {
  area = Math.PI * (radius * radius);
  return area;
}
console.log("The area of a circle with the radius of 2 is " + areaOfCircle(2).toFixed(2))

// EXERCISE 5
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).
function total(x) {
  let half = x/2; // divide the number by 2
  let sqrt = half ** 2;
  let areaCircle = Math.PI * (sqrt * sqrt);
  let percent = (areaCircle/sqrt)*100;
  console.log ("Half of " + x + `is ${half}`);
  console.log (`Squareroot of ${half} is ${sqrt}`);
  console.log (`The Area of a Circle with a radius of ${sqrt} is ${areaCircle}`);
  console.log (`The percentage of the area with the square root of ${sqrt} is ${percent}`);
  return percent; 
}
total(10).toFixed(2) //list out the total of all the operation.

