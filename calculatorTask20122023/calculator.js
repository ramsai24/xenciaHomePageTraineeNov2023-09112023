let inputEl = document.querySelector("div #valueInput");
console.log(inputEl.value);

let cummulativeEl = document.querySelector("div #cummulative");
console.log(inputEl.value);

let labelEl = document.querySelector("div label");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiple = document.querySelector("#multiple");
let division = document.querySelector("#division");
// let modulus = document.querySelector("#modulus");
let equalTo = document.querySelector("#equalTo");
let clear = document.querySelector("#clear");
let back = document.querySelector("#back");
// console.log(labelEl.textContent);

let one = document.querySelector(".one");
one.addEventListener("click", function () {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    inputEl.value = "1";
  } else {
    let inputValue = inputEl.value + "1";
    inputEl.value = inputValue;

    console.log(inputValue);
  }
});

let two = document.querySelector(".two");
two.addEventListener("click", function () {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    inputEl.value = "2";
  } else {
    let inputValue = inputEl.value + "2";
    inputEl.value = inputValue;

    console.log(inputValue);
  }
});

let three = document.querySelector(".three");
three.addEventListener("click", function () {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    inputEl.value = "3";
  } else {
    let inputValue = inputEl.value + "3";
    inputEl.value = inputValue;

    console.log(inputValue);
  }
});

let four = document.querySelector(".four");
four.addEventListener("click", function () {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    inputEl.value = "4";
  } else {
    let inputValue = inputEl.value + "4";
    inputEl.value = inputValue;

    console.log(inputValue);
  }
});

let five = document.querySelector(".five");
five.addEventListener("click", function () {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    inputEl.value = "5";
  } else {
    let inputValue = inputEl.value + "5";
    inputEl.value = inputValue;

    console.log(inputValue);
  }
});

let six = document.querySelector(".six");
six.addEventListener("click", function () {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    inputEl.value = "6";
  } else {
    let inputValue = inputEl.value + "6";
    inputEl.value = inputValue;

    console.log(inputValue);
  }
});

let seven = document.querySelector(".seven");
seven.addEventListener("click", function () {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    inputEl.value = "7";
  } else {
    let inputValue = inputEl.value + "7";
    inputEl.value = inputValue;

    console.log(inputValue);
  }
});

let eight = document.querySelector(".eight");
eight.addEventListener("click", function () {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    inputEl.value = "8";
  } else {
    let inputValue = inputEl.value + "8";
    inputEl.value = inputValue;

    console.log(inputValue);
  }
});

let nine = document.querySelector(".nine");
nine.addEventListener("click", function () {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    inputEl.value = "9";
  } else {
    let inputValue = inputEl.value + "9";
    inputEl.value = inputValue;

    console.log(inputValue);
  }
});

let zero = document.querySelector(".zero");
zero.addEventListener("click", function () {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    inputEl.value = "0";
  } else {
    let inputValue = inputEl.value + "0";
    inputEl.value = inputValue;

    console.log(inputValue);
  }
});

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
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    let cummValue = cummulativeEl.value.split(" = ");
    console.log(cummValue);
    console.log(cummValue.length);

    console.log(cummValue[cummValue.length - 1]);
    inputEl.value = parseInt(cummValue[cummValue.length - 1]);
  } else {
    inputValue = inputEl.value;
    console.log(inputValue);
    inputEl.value = inputValue + "+";
  }
});

minus.addEventListener("click", function (event) {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    let cummValue = cummulativeEl.value.split(" = ");
    console.log(cummValue);
    console.log(cummValue.length);

    console.log(cummValue[cummValue.length - 1]);
    inputEl.value = parseInt(cummValue[cummValue.length - 1]);
  } else {
    inputValue = inputEl.value;
    console.log(inputValue);
    inputEl.value = inputValue + "-";
  }
});

multiple.addEventListener("click", function (event) {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    let cummValue = cummulativeEl.value.split(" = ");
    console.log(cummValue);
    console.log(cummValue.length);

    console.log(cummValue[cummValue.length - 1]);
    inputEl.value = parseInt(cummValue[cummValue.length - 1]);
  } else {
    inputValue = inputEl.value;
    console.log(inputValue);
    inputEl.value = inputValue + "*";
  }
});

division.addEventListener("click", function (event) {
  if (inputEl.value.includes(" = ")) {
    cummulativeEl.value = inputEl.value;
    let cummValue = cummulativeEl.value.split(" = ");
    console.log(cummValue);
    console.log(cummValue.length);

    console.log(cummValue[cummValue.length - 1]);
    inputEl.value = parseInt(cummValue[cummValue.length - 1]);
  } else {
    inputValue = inputEl.value;
    console.log(inputValue);
    inputEl.value = inputValue + "/";
  }
});

// modulus.addEventListener("click", function (event) {
//   inputValue = inputEl.value;
//   console.log(inputValue);
//   inputEl.value = inputValue + " % ";
// });

equalTo.addEventListener("click", function () {
  inputValue = inputEl.value;
  let arrayCon;
  let result;

  if (inputValue.includes("+")) {
    if (inputValue.includes(" + ")) {
      arrayCon = inputEl.value.split("+");
      //   console.log(arrayCon);
    }
    arrayCon = inputEl.value.split("+");

    // console.log(arrayCon);

    // process Starts

    for (let each of arrayCon) {
      //   console.log(parseInt(each));
      let item = parseInt(each);
      //   console.log(item);
      result = parseInt(arrayCon[0]);
      result += item;
      //   console.log(result);
    }

    inputEl.value = arrayCon.join(" + ") + " = " + result;

    // process ends
  } else if (inputValue.includes("-")) {
    if (inputValue.includes(" - ")) {
      arrayCon = inputEl.value.split("-");
      //   console.log(arrayCon);
    }
    arrayCon = inputEl.value.split("-");
    console.log(arrayCon);
    // process Starts

    for (let each of arrayCon) {
      //   console.log(parseInt(each));
      let item = parseInt(each);
      //   console.log(item);
      result = parseInt(arrayCon[0]);
      result -= item;
      //   console.log(result);
    }

    inputEl.value = arrayCon.join(" - ") + " = " + result;

    // process ends
  } else if (inputValue.includes("*")) {
    // if (inputValue.inlcude(" * ")) {
    //   arrayCon = inputEl.value.split("*");
    //   console.log(arrayCon);
    // }
    arrayCon = inputEl.value.split("*");
    console.log(arrayCon);

    // process Starts

    for (let each of arrayCon) {
      //   console.log(parseInt(each));
      let item = parseInt(each);
      //   console.log(item);
      result = parseInt(arrayCon[0]);
      result *= item;
    }
    console.log(result);

    inputEl.value = arrayCon.join(" * ") + " = " + result;

    // process ends
  } else if (inputValue.includes("/")) {
    if (inputValue.includes(" / ")) {
      arrayCon = inputEl.value.split("/");
      //   console.log(arrayCon);
    }
    arrayCon = inputEl.value.split("/");
    // console.log(arrayCon);

    // process Starts

    for (let each of arrayCon) {
      //   console.log(parseInt(each));
      let item = parseInt(each);
      //   console.log(item);
      result = parseInt(arrayCon[0]);
      result /= item;
      //   console.log(result);
    }

    inputEl.value = arrayCon.join(" / ") + " = " + result;

    // process ends
  }

  console.log(arrayCon);
  console.log(result);
});

clear.addEventListener("click", function () {
  inputEl.value = "";
  cummulativeEl.value = "";
});

back.addEventListener("click", function () {
  let inputValue = inputEl.value;

  inputEl.value = inputValue.slice(0, inputValue.length - 1);
});
