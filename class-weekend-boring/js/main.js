//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "monday" || day === "tuesday" || day ==="wednesday" || day === "thursday" || day === "friday"){
    alert("Its the weekday")
  }else if( day === "saturday" || day === "sunday"){
    alert("Its the weekend")
  }else{
    alert("BORING")
  }
}
