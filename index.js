/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  //1. take the timeString and convert it into a regular integer that I can use
    // 1a first split the 24 hour time by the ":" and store only the first array elem
  //2. use conditional logic to properly issue a greeting
  const hour = timeString.split(":")[0];

  if(hour < 12){
    return "Good Morning";
  }
  else if(hour > 12 && hour < 17){
    return "Good Afternoon";
  }
  else{
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greetingString){
  const greetingNode = document.querySelector("#greeting");
  greetingNode.innerText = greetingString;
}