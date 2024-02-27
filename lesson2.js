let colors = ["green", "blue", "red", "yellow", "purple"];
let sports = ["baseball", "basketball", "football"];

let person = { name: "Bryan", age: 70 };

function displayArray(array) {
  for (let item of array) {
    console.log(item);
  }
}

displayArray(colors);
displayArray(sports);
