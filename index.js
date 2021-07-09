let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

function save() {
  let countString = count + " - ";
  saveEl.textContent += countString;
  count = 0;
  countEl.textContent = 0;
}
