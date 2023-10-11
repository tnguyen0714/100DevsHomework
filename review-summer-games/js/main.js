//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiplyArray(arr){
    let product = 1;
    for(i = 0; i < arr.length; i++){
        product *= arr[i];
    }
    alert(product)
}
multiplyArray([10,2,3])