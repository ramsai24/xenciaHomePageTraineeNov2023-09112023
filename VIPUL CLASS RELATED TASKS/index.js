function timer() {
  setTimeout(function () {
    alert("hi ramsai");
  }, 2000);
}

function changeContent() {
  let a = document.querySelector("a");
  console.log(a);
  a.textContent = "flipkart";
  a.setAttribute("href", "https://www.flipkart.com/");
}

document.getElementById("btn").addEventListener("click", changeContent);

document.querySelector("ul button").addEventListener("click", function () {
  console.log(document.querySelector("ul .counter").textContent);
  let numb = parseInt(document.querySelector("ul .counter").textContent);
  console.log(numb);

  document.querySelector("ul .counter").textContent = numb + 1;
});

let x = 0;

document.querySelector(".two").addEventListener("click", function () {
  x += 2;
  let newLi = document.createElement("li");
  newLi.textContent = x;
  document.querySelector(".twoTable").appendChild(newLi);
});

///////////// My Shopping Task related js Code

let myShoppingItems = document.querySelector(".listItems");
myShoppingItems.style.border = "1px solid black";
myShoppingItems.style.margin = "20px";
myShoppingItems.style.padding = "20px";

let itemContainer = document.querySelector(".listItems ul");

document
  .querySelector(".listItems button")
  .addEventListener("click", function () {
    let listItem = document.createElement("li");
    listItem.style.margin = "10px";
    itemContainer.appendChild(listItem);

    let inputElValue = document.getElementById("inputEl").value;

    let spanEl = document.createElement("span");
    spanEl.textContent = document.getElementById("inputEl").value;
    listItem.appendChild(spanEl);

    let deleteEl = document.createElement("button");
    deleteEl.textContent = "Delete";
    deleteEl.setAttribute("id", inputElValue);
    deleteEl.onclick = function (event) {
      console.log(event.target.id);
      itemContainer.removeChild(listItem);
      console.log(`${event.target.id} list is removed`);
    };
    deleteEl.style.marginLeft = "20px";
    listItem.appendChild(deleteEl);

    document.getElementById("inputEl").value = "";

    // let deleteBtn = document.getElementById("delete");

    // deleteBtn.onclick = function (event) {
    //   console.log(event);
    // };

    let idTrace;

    console.log(listItem);
  });
