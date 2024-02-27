document.getElementById("myHeading").innerHTML = "Hello World";
let headingContent = document.getElementById("myHeading").innerHTML;
console.log(headingContent);

const para = document.createElement("p");
const node = document.createTextNode("This is a text node!!");
para.appendChild(node);
let myDiv = document.getElementById("container");
myDiv.appendChild(para);

function changeText(id) {
  id.innerHTML = "This text has changed!";
}

function myAlert() {
  alert("Hello Galaxy!!");
}
function myLog() {
  console.log("Hello from the console!!");
}

function changeColor() {
  let colors = ["green", "yellow", "red", "blue"];
  let random = Math.floor(Math.random() * colors.length);
  console.log(
    "The random number is: " +
      random +
      ", the random color is: " +
      colors[random]
  );
  document.body.style.backgroundColor = colors[random];
}

document.getElementById("myAlert").addEventListener("click", myAlert);
document.getElementById("myAlert").addEventListener("click", myLog);
document.getElementById("colorButton").addEventListener("click", changeColor);
