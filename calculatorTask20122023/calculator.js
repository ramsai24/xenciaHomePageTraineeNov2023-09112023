let inputEl = document.querySelector("div #valueInput");
console.log(inputEl.value);

let labelEl = document.querySelector("div label");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiple = document.querySelector("#multiple");
let division = document.querySelector("#division");
// let modulus = document.querySelector("#modulus");
let equalTo = document.querySelector("#equalTo");
// console.log(labelEl.textContent);
var inputValue;

let inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "%"];

inputEl.addEventListener("keydown", function (event) {
  //   console.log(inputEl.event.value);
  //   inputValue = inputEl.event.value;
  //   if (inputArray.includes(inputValue)) {
  //     inputEl.value = inputValue;
  //   } else {
  //     inputEl.value = "";
  //   }
});

// console.log(inputValue);

plus.addEventListener("click", function (event) {
  inputValue = inputEl.value;
  console.log(inputValue);
  inputEl.value = inputValue + " + ";
});

minus.addEventListener("click", function (event) {
  inputValue = inputEl.value;
  console.log(inputValue);
  inputEl.value = inputValue + " - ";
});

multiple.addEventListener("click", function (event) {
  inputValue = inputEl.value;
  console.log(inputValue);
  inputEl.value = inputValue + " * ";
});

division.addEventListener("click", function (event) {
  inputValue = inputEl.value;
  console.log(inputValue);
  inputEl.value = inputValue + " / ";
});

// modulus.addEventListener("click", function (event) {
//   inputValue = inputEl.value;
//   console.log(inputValue);
//   inputEl.value = inputValue + " % ";
// });

equalTo.addEventListener("click", function () {
  inputValue = inputEl.value;

  if (inputValue.includes("+")) {
    let arrayCon = inputEl.value.split(" + ");
    console.log(arrayCon);
  } else if (inputValue.includes("-")) {
    let arrayCon = inputEl.value.split(" - ");
    console.log(arrayCon);
  } else if (inputValue.includes("*")) {
    let arrayCon = inputEl.value.split(" * ");
    console.log(arrayCon);
  } else if (inputValue.includes("/")) {
    let arrayCon = inputEl.value.split(" / ");
    console.log(arrayCon);
  }
});
