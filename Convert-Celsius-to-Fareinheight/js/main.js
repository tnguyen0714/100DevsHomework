//Convert C to F
//1. Find formula to Convert from C to F
//2. Type in temp in F and print temp in C.

document.querySelector('#ConvertButton').addEventListener('click', convert)

function convert() {
    //grab value from Celsius
    let temp = document.querySelector('#CelsiusInput').value
    //Convert celsius value to farenheight
    temp = temp * 9/5 +32
    //print temp
    document.querySelector('#CelsiusConverted').innerText = temp
  }