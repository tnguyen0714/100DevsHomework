//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ['Independence Day', 'Fast Five', 'Mario']
for (i = 0; i < movieTitles.length(i); i++){
    document.querySelector('h2').innerText += movieTitles[i]
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let arrayOfNumbers = [1, 2, 3]

// for (i=0; i < arrayOfNumbers; i++){
//     arrayOfNumbers[i] = arrayOfNumbers[i] + 3;
// }

nums.forEach((items, i) => {
    arrayOfNumbers[i] = item + 3;
})

//Find the average of all the numbers from question three
sum = 0;

for (i=0; i < arrayOfNumbers.length; i++){
    sum = sum + arrayofNumbers(i);
    average = sum/arrayOfNumbers.length;
}

console.log(average);