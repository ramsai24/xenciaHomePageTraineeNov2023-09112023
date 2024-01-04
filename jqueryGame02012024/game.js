// $("#main").text("hi");

$("#main").prepend("<h1>Level : <span id='spanEl'>5</span></h1>");
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

let obj = {};

let ra;

let userArray = [];

$("#red").on("click", function () {
  userArray.push($("#red").text());
  console.log(userArray);
});

$("#green").on("click", function () {
  userArray.push($("#green").text());
  console.log(userArray);
});

$("#blue").on("click", function () {
  userArray.push($("#blue").text());
  console.log(userArray);
});

$("#yellow").on("click", function () {
  userArray.push($("#yellow").text());
  console.log(userArray);
});

// console.log(userArray);

// console.log(randomColor);
// console.log(countArray);
let count = 0;
$(document).ready(function () {
  $("h1").on("click", function () {
    interval = setInterval(function () {
      //   for (let i = 1; i <= levelValue; i++) {
      count += 1;
      if (count > levelValue) {
        clearInterval(interval);
      } else {
        console.log(count);
        countArray.push(count);
        // console.log(contentArray);
        ra = shuffledEmojisList(contentArray);
        contentArray = ra;
        // console.log(shuffledEmojisList(contentArray));
        //   randomColor.push(ra[0]);
        // console.log(countArray);
        console.log(ra[0]);
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
  });
});
