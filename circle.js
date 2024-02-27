let unit = "inches";
let radius = prompt("Enter a radius in " + unit);
let circleArea = Math.PI * radius * radius;

let userRoundPreference = prompt("Would you like to round? (y/n)");

if (
  userRoundPreference === "y" ||
  userRoundPreference === "Y" ||
  userRoundPreference === "YES" ||
  userRoundPreference === "yes" ||
  userRoundPreference === "Yes"
) {
  circleArea = circleArea.toFixed();
}

alert("The area in " + unit + " is " + circleArea + ".");
