// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood = 'sushi'
favoriteFood = 'Pho'
alert(favoriteFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let second = 'Hello, string'
alert(second[2])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNums(num1, num2, num3){
    let prod = (num1/num2) * num3
    alert(prod)
}

threeNums(1,2,3)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot (n1){
    let cube = Math.cbrt(n1)
    console.log(cube)
}
cubeRoot(8)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkForSummer(month){
    let monthLowerCase = month.toLowerCase()
    if(monthLowerCase === 'june' || monthLowerCase === 'july' || monthLowerCase === 'august'){
        alert(yay)
    }else{
        alert('boo')
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipMultiplesOfFive (n){
    for(let i = 1; i <= n; i++){
        if(n % 5 !== 0){
            console.log(i)
        }
    }
}