// $("#main").text("hi");

$("#main").prepend("<h1>Level : <span id='spanEl'>3</span></h1>");
$("#main").addClass("game-container");

$("#one").append("<button id='red'>red</button>");
$("#one").append("<button id='green'>green</button>");
$("#two").append("<button id='blue'>blue</button>");
$("#two").append("<button id ='yellow'>yellow</button>");

$("button").css({ width: "100px", height: "100px", margin: "18px" });

$("#red").css("background-color", "red");
$("#green").css("background-color", "green");
$("#blue").css("background-color", "blue");
$("#yellow").css("background-color", "yellow");

console.log(document.querySelector("#spanEl").textContent);

let levelValue = parseInt(document.querySelector("#spanEl").textContent);
console.log(levelValue);

let contentArray = [
  $("#red").text(),
  $("#blue").text(),
  $("#green").text(),
  $("#yellow").text(),
];

// console.log(contentArray);

var randomColor = [];

let shuffledEmojisList = (contentArray) => {
  //   console.log(contentArray);
  return contentArray.sort(() => Math.random() - 0.5);
};

var countArray = [];
var countObj = {};
var cnt = 0;

let obj = {};

let ra;

var userArray = [];

var oneadd = $("#red").on("click", function (event) {
  userArray.push(event.target.textContent);
  cnt += 1;
  countObj[cnt] = event.target.textContent;

  console.log(userArray);
  console.log(event.target.textContent);
  // console.log(countObj);
  if (cnt === levelValue) {
    compare();
  }
  console.log(cnt);
  return event.target.textContent;
});

console.log(oneadd);
// userArray.push(oneadd[1]);

var onegreen = $("#green").on("click", function (event) {
  userArray.push(event.target.textContent);
  cnt += 1;
  countObj[cnt] = event.target.textContent;

  console.log(userArray);
  console.log(event.target.textContent);
  // console.log(countObj);
  if (cnt === levelValue) {
    compare();
  }
  console.log(cnt);
  return event.target.textContent;
});

console.log(onegreen);
// userArray.push(onegreen[1]);

// $("#blue").on("click", function () {
//   userArray.push($("#blue").text());
//   cnt += 1;
//   countObj[cnt] = $("#blue").text();
//   //   console.log(countObj);
//   //   console.log(userArray);
// });

var oneBlue = $("#blue").on("click", function (event) {
  userArray.push(event.target.textContent);
  cnt += 1;
  countObj[cnt] = event.target.textContent;

  console.log(userArray);
  console.log(event.target.textContent);
  console.log(countObj);
  if (cnt === levelValue) {
    compare();
  }
  console.log(cnt);
  return event.target.textContent;
});

console.log(oneBlue);
// userArray.push(oneBlue[1]);

// $("#yellow").on("click", function () {
//   userArray.push($("#yellow").text());
//   cnt += 1;
//   countObj[cnt] = $("#yellow").text();
//   //   console.log(userArray);
//   //   console.log(countObj);
// });

var oneYellow = $("#yellow").on("click", function (event) {
  userArray.push(event.target.textContent);
  cnt += 1;
  countObj[cnt] = event.target.textContent;

  console.log(userArray);
  console.log(event.target.textContent);
  // console.log(countObj);
  if (cnt === levelValue) {
    compare();
  }
  console.log(cnt);
  return event.target.textContent;
});

console.log(oneYellow);
// userArray.push(oneYellow[1]);

// console.log(userArray);

// console.log(randomColor);
// console.log(countArray);
let count = 0;

function autoColor() {
  let autoArray = [];
  interval = setInterval(function () {
    //   for (let i = 1; i <= levelValue; i++) {
    count += 1;
    if (count > levelValue) {
      clearInterval(interval);
    } else {
      //   console.log(count);
      countArray.push(count);
      // console.log(contentArray);
      ra = shuffledEmojisList(contentArray);
      contentArray = ra;
      // console.log(shuffledEmojisList(contentArray));
      //   randomColor.push(ra[0]);
      // console.log(countArray);
      console.log(ra[0]);
      autoArray.push(ra[0]);
      // console.log(randomColor);
      $(`#${ra[0]}`).addClass("opa");
    }

    //   setInterval(function () {
    //     $(`#${ra[0]}`).addClass("opa");
    //   }, 1000);
    //   }
    setTimeout(function () {
      $(`#${ra[0]}`).removeClass("opa");
    }, 1000);
  }, 3000);

  // console.log(randomColor);
  // console.log(countArray);
  // console.log(userArray);
  // console.log(randomColor);

  // for (let e of randomColor) {
  // setInterval(function () {
  //   for (let e of randomColor) {
  //     console.log(e);
  //     $(`#${e}`).addClass("opa");
  //   }
  //   $;
  // }, 5000);
  // }

  //   for (let each of randomColor) {
  //     console.log(each);
  //     $(`#${each}`).animate({opacity:0.5})
  //   }
  // if (userArray === randomColor) {
  //   console.log(true);
  //   console.log(userArray);
  //   console.log(randomColor);
  // }
  //   console.log(`Level user Array :- ${userArray}`);

  //   return userArray; //please don't use this
  //   console.log(autoArray);
  return autoArray;
}
// console.log(autoOuput);

let autoOuput = autoColor();
// autoOuput
//   .then((response) => {
//     return response.json();
//   })
//   .then((jsonData) => {
//     //statement-1
//     console.log(jsonData); // Object{ value:"The computer tired when it got home because it had a hard drive" }
//   });

//no need below

// let values = [];
// const myPromise = Promise.resolve(autoOuput);
// myPromise.then((value) => {
//   console.log(value); // Output: 'Hello, world!'
//   values = [...value];
// });

//no need above

// console.log(values);

function compare() {
  let count = 0;
  console.log(autoOuput);
  console.log(userArray);
  //   console.log(autoOuput === userArray);
  for (let i = 0; i < levelValue; i++) {
    console.log(i);
    console.log(`${autoOuput[i]}, ${userArray[i]}`);
    if (autoOuput[i] === userArray[i]) {
      count += 1;
    }
  }

  console.log(count === levelValue);

  if (count === levelValue) {
    levelValue += 1;
    $("#spanEl").text(levelValue);
    autoOuput = autoColor();
    console.log("extcuted");
  }
}

// console.log(autoOuput);

// const promiseObject = async () => {
//   const autoOuput = await autoColor();
//   console.log(autoOuput);
//   const jsonData = await autoOuput.json();
//   console.log(jsonData);
// };

// promiseObject();

// console.log(autoOuput);
// console.log(countObj);
//    console.log(`Level user Array :- ${userArray}`);

// console.log(`autoColor :- ${autoOuput[0]}`);
// console.log(countObj);
// console.log(`user Array :- ${userArray}`);
