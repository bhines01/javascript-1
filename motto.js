function getMotto() {
  let motto = prompt("What is your motto?");
  return motto;
}

function getCount() {
  let count = prompt("What is your count?");
  return count;
}

function printMotto(count, motto) {
  for (let i = 1; i <= count; i++) {
    console.log(motto);
  }
}

let motto = getMotto();
let count = getCount();

printMotto(count, motto);
