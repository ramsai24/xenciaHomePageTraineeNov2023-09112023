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

let obj = {};

let ra;

// console.log(randomColor);
// console.log(countArray);

$(document).ready(function () {
  $("h1").on("click", function () {
    for (let i = 1; i <= levelValue; i++) {
      console.log(i);
      countArray.push(i);
      // console.log(contentArray);
      ra = shuffledEmojisList(contentArray);
      // console.log(shuffledEmojisList(contentArray));
      randomColor.push(ra[0]);
      // console.log(countArray);
      console.log(ra);
      $(`#${ra[0]}`).animate({ opacity: 0.5 }, "slow");
    }
    console.log(randomColor);
    console.log(countArray);
    //   for (let each of randomColor) {
    //     console.log(each);
    //     $(`#${each}`).animate({opacity:0.5})
    //   }
  });
});
