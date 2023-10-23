//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let sumOfArray = [1,2,3,4,5]

let sum = sumOfArray.reduce( (acc,c) => acc + c, 0);

console.log(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let b4SquareArr = [1,2,3,4,5]

function squaredArray (num) {
    let num = b4SquareArr;
    for(i = 0; i < b4SquareArr.length; i++){
        square = num * num;
        alert(square)
    }
}
//Leon's solution
let newArr = sumOfArray =>sumOfArray.maps(sumOfArray =>sumOfArray**2)

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(){
  //Split string and remove spaces
  const splitString = string.split("");
  //Reverse the string
  let reverseStringArray = splitString.reverse();
  let joinArray = reverseString.join();
  console.log(joinArray)

}

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(str){
    let checkPalindrome = str => alert(str(split('').reverse().join('')))
}
palindrome('esrever')
