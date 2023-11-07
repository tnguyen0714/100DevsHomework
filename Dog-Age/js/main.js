//Practice javascript syntax by using methods and variables to print a statement that will display 
//your current age and convert your current age to dog years.

//Declare variable that states my current age
let myAge = 27;
//Declare variable with value of 2. Value will change.
let earlyYears = 2;
//Multiply early years by 10.5
earlyYears *= 10.5;
//Subtract myAge by 2. Set the result equal to laterYears.
laterYears = myAge - 2;
//Multiply laterYears variable by 4 to calculate dog years accounted for by later years. 
laterYears *= 4;
//Add laterYears and earlyYears which will equal myAgeInDogYears
myAgeInDogYears = earlyYears + laterYears;
//Create a string with variable myName with method .toLowerCase(). Stores the myName variable in lower case.
let myName = 'Tom'.toLowerCase();
//Use console.log statement to display your name and age in dog years. 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)