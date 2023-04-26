let unit = "inches";
let radius = prompt("Enter a radius in " + unit);
let area = Math.PI * radius * radius;

let roundPreference = prompt("Would you like to round? (y/n)");

if (
  roundPreference === "y" ||
  roundPreference === "Y" ||
  roundPreference === "yes" ||
  roundPreference === "Yes" ||
  roundPreference === "YES"
) {
  area = Math.round(area);
}

console.log("The area in " + unit + " is " + area + ".");
