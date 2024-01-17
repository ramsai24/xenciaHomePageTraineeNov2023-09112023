//------------------------Bg-Container
let bgContainer = document.createElement("div");
// bgContainer.textContent = "Hello World !";
bgContainer.classList.add("bg-container");

document.body.appendChild(bgContainer);

//------------------------Content-Container

let contentContainer = document.createElement("div");
contentContainer.classList.add("content-container");
bgContainer.appendChild(contentContainer);

//------------------------Header-Container

let headerContainer = document.createElement("nav");
headerContainer.classList.add("header-container");
contentContainer.appendChild(headerContainer);

//------------------------Nav-Container1

let navContainer1 = document.createElement("nav");
headerContainer.appendChild(navContainer1);

//------------------------home-Tab

let home = document.createElement("a");
home.classList.add("hovering");
home.textContent = "Home";
navContainer1.appendChild(home);

///----------------------------arrow box

let arrowHome = document.createElement("i");
arrowHome.id = "arrowHome";
arrowHome.setAttribute("name", "arrow");
arrowHome.classList.add("fa-solid", "fa-angle-down", "down-arrow");
home.appendChild(arrowHome);

let ulContainerHome = document.createElement("ul");
ulContainerHome.classList.add("ul-container");
home.appendChild(ulContainerHome);

let listItemsArray = [
  "Home",
  "About",
  "Fashion",
  "Photography",
  "Style",
  "Posts",
];

for (let eachItem of listItemsArray) {
  let listItem = document.createElement("li");
  listItem.textContent = eachItem;
  ulContainerHome.appendChild(listItem);
}

//------------------------about-Tab

let about = document.createElement("a");
about.classList.add("hovering");
about.textContent = "About";

navContainer1.appendChild(about);

let arrowAbout = document.createElement("i");
arrowAbout.setAttribute("name", "send");
arrowAbout.id = "arrowAbout";
arrowAbout.classList.add("fa-solid", "fa-angle-down", "down-arrow");
about.appendChild(arrowAbout);

let ulContainerAbout = document.createElement("ul");
ulContainerAbout.classList.add("ul-container");
about.appendChild(ulContainerAbout);

for (let eachItem of listItemsArray) {
  let listItem = document.createElement("li");
  listItem.textContent = eachItem;
  ulContainerAbout.appendChild(listItem);
}

//------------------------fashion-Tab

let fashion = document.createElement("a");
fashion.classList.add("hovering");
fashion.textContent = "Fashion";
navContainer1.appendChild(fashion);

let arrowFashion = document.createElement("i");
arrowFashion.setAttribute("name", "send");
arrowFashion.id = "arrowFashion";
arrowFashion.classList.add("fa-solid", "fa-angle-down", "down-arrow");
fashion.appendChild(arrowFashion);

let ulContainerFashion = document.createElement("ul");
ulContainerFashion.classList.add("ul-container");
fashion.appendChild(ulContainerFashion);

for (let eachItem of listItemsArray) {
  let listItem = document.createElement("li");
  listItem.textContent = eachItem;
  ulContainerFashion.appendChild(listItem);
}

//------------------------Photography-Tab

let photography = document.createElement("a");
photography.classList.add("hovering");
photography.textContent = "Photography";
navContainer1.appendChild(photography);

let arrowPhotography = document.createElement("i");
arrowPhotography.setAttribute("name", "send");
arrowPhotography.id = "arrowPhotography";
arrowPhotography.classList.add("fa-solid", "fa-angle-down", "down-arrow");
photography.appendChild(arrowPhotography);

let ulContainerPhotography = document.createElement("ul");
ulContainerPhotography.classList.add("ul-container");
photography.appendChild(ulContainerPhotography);

for (let eachItem of listItemsArray) {
  let listItem = document.createElement("li");
  listItem.textContent = eachItem;
  ulContainerPhotography.appendChild(listItem);
}

//------------------------Style-Tab

let style = document.createElement("a");
style.classList.add("hovering");
style.textContent = "Style";
navContainer1.appendChild(style);

let arrowStyle = document.createElement("i");
arrowStyle.setAttribute("name", "send");
arrowStyle.id = "arrowStyle";
arrowStyle.classList.add("fa-solid", "fa-angle-down", "down-arrow");
style.appendChild(arrowStyle);

let ulContainerStyle = document.createElement("ul");
ulContainerStyle.classList.add("ul-container");
style.appendChild(ulContainerStyle);

for (let eachItem of listItemsArray) {
  let listItem = document.createElement("li");
  listItem.textContent = eachItem;
  ulContainerStyle.appendChild(listItem);
}

//------------------------Post-Tab

let posts = document.createElement("a");
posts.classList.add("hovering");
posts.textContent = "Posts";
navContainer1.appendChild(posts);

let arrowPosts = document.createElement("i");
arrowPosts.setAttribute("name", "send");
arrowPosts.id = "arrowPosts";
arrowPosts.classList.add("fa-solid", "fa-angle-down", "down-arrow");
posts.appendChild(arrowPosts);

let ulContainerPost = document.createElement("ul");
ulContainerPost.classList.add("ul-container");
posts.appendChild(ulContainerPost);

for (let eachItem of listItemsArray) {
  let listItem = document.createElement("li");
  listItem.textContent = eachItem;
  ulContainerPost.appendChild(listItem);
}

//------------------------Pages-Tab

let pages = document.createElement("a");
pages.classList.add("hovering");
pages.textContent = "Pages";
navContainer1.appendChild(pages);

let arrowPages = document.createElement("i");

arrowPages.id = "arrowPages";
arrowPages.setAttribute("name", "send");
arrowPages.classList.add("fa-solid", "fa-angle-down");
pages.appendChild(arrowPages);

let ulContainerPages = document.createElement("ul");
ulContainerPages.classList.add("ul-container");
pages.appendChild(ulContainerPages);

for (let eachItem of listItemsArray) {
  let listItem = document.createElement("li");
  listItem.textContent = eachItem;
  ulContainerPages.appendChild(listItem);
}

//------------------------Contact-Tab

let contact = document.createElement("a");
contact.classList.add("hovering");
contact.textContent = "Contact";
navContainer1.appendChild(contact);

let arrowContact = document.createElement("i");
arrowContact.setAttribute("name", "send");
arrowContact.id = "arrowContact";
arrowContact.classList.add("fa-solid", "fa-angle-down", "down-arrow");
contact.appendChild(arrowContact);

let ulContainerContact = document.createElement("ul");
ulContainerContact.classList.add("ul-container");
contact.appendChild(ulContainerContact);

for (let eachItem of listItemsArray) {
  let listItem = document.createElement("li");
  listItem.textContent = eachItem;
  ulContainerContact.appendChild(listItem);
}

//------------------------Nav-Container2

let navContainer2 = document.createElement("nav");
headerContainer.appendChild(navContainer2);

let search = document.createElement("i");
search.id = "search";
search.classList.add("fa-solid", "fa-magnifying-glass");
navContainer2.appendChild(search);

let logOutIcon = document.createElement("img");
logOutIcon.src =
  "https://res.cloudinary.com/daoquetki/image/upload/v1705390018/blog%20task16012024/riqaoavlooqsr7vjuaic.png";
logOutIcon.setAttribute("alt", "logout");
logOutIcon.setAttribute("name", "logout");
navContainer2.appendChild(logOutIcon);

//-------------------------bottom-Content-container

let bottomContentContent = document.createElement("div");
// bottomContentContent.textContent = "ok";
contentContainer.appendChild(bottomContentContent);

//-------------------------main-Title

let mainTilte = document.createElement("h1");
mainTilte.classList.add("main-title");
mainTilte.textContent = "DOLUS BLOG";
mainTilte.style.textAlign = "center";
mainTilte.style.paddingTop = "30px";

bottomContentContent.appendChild(mainTilte);

//---------------------IMAGES LIST

let imagesList = [
  "https://res.cloudinary.com/daoquetki/image/upload/v1705485292/blog%20task16012024/z9ipmer02r39qgkbgnzp.jpg",
  "https://res.cloudinary.com/daoquetki/image/upload/v1705485292/blog%20task16012024/azy31d1npsct8so4pyfo.jpg",
  "https://res.cloudinary.com/daoquetki/image/upload/v1705485292/blog%20task16012024/gptbfmqtjcstglyrdfso.jpg",
];

let count = 0;
let countOfImagesList = imagesList.length;
console.log(countOfImagesList);

//-------------------------Slider-Container

let sliderContainer = document.createElement("div");
sliderContainer.setAttribute("class", "slider-container");
// sliderContainer.textContent = "hi";
bottomContentContent.appendChild(sliderContainer);

let leftSlideBtn = document.createElement("button");
leftSlideBtn.classList.add("fa-solid", "fa-arrow-left", "left-arrow");
leftSlideBtn.setAttribute("name", "arrowBtn");
sliderContainer.appendChild(leftSlideBtn);

let imgSlide = document.createElement("img");

imgSlide.setAttribute("name", "img-slide");

imgSlide.src = imagesList[0];
// "https://res.cloudinary.com/daoquetki/image/upload/v1705468160/blog%20task16012024/rjbhatg2eqn0tivsnlyt.jpg";
sliderContainer.appendChild(imgSlide);

leftSlideBtn.onclick = function () {
  count -= 1;
  if (count <= 0) {
    count = 0;
  }
  console.log(count);

  imgSlide.src = imagesList[count];
  imgSlide.classList.add("animation-class");
  setTimeout(function () {
    imgSlide.classList.remove("animation-class");
  }, 1001);
};

let rightSlideBtn = document.createElement("button");
rightSlideBtn.classList.add("fa-solid", "fa-arrow-right");
rightSlideBtn.setAttribute("name", "arrowBtn");
rightSlideBtn.onclick = function () {
  count += 1;
  if (count >= countOfImagesList) {
    count = 2;
  }
  console.log(count);

  imgSlide.src = imagesList[count];
  imgSlide.classList.add("animation-class");
  setTimeout(function () {
    imgSlide.classList.remove("animation-class");
  }, 1001);
};
sliderContainer.appendChild(rightSlideBtn);

//-------------------------cards-container

let itemsArray = [
  {
    id: 1,
    styleType: "Travel",
    btnId: "travel",
    imgUrl:
      "https://res.cloudinary.com/daoquetki/image/upload/v1705400165/blog%20task16012024/rrflccrhiq72sfv5w4xl.jpg",
    title: "My Summer Diary",
    style: "Lifestyle",
    desImgUrl:
      "https://res.cloudinary.com/daoquetki/image/upload/v1705401529/blog%20task16012024/zknc1rplcoy7axgur407.jpg",
    description:
      "Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.",
  },
  {
    id: 2,
    btnId: "toys",
    styleType: "Toys",
    imgUrl:
      "https://res.cloudinary.com/daoquetki/image/upload/v1705468159/blog%20task16012024/tdhgxkwq4xstrpyumpzo.jpg",
    title: "My Summer Diary",
    style: "Lifestyle",
    desImgUrl:
      "https://res.cloudinary.com/daoquetki/image/upload/v1705401529/blog%20task16012024/bd08nfvuum5wofuqkaqa.jpg",
    description:
      "A toy is an object that's made for a child to play with. Your favorite childhood toy might have been a dollhouse, a stuffed animal, or a set of blocks. Some toys are specifically designed for play, like a small wooden train set or a baby's shape sorter.A toy is an object that's made for a child to play with. Your favorite childhood toy might have been a dollhouse, a stuffed animal, or a set of blocks. Some toys are specifically designed for play, like a small wooden train set or a baby's shape sorter.",
  },
  {
    id: 3,
    btnId: "fashion",
    styleType: "fashion",
    imgUrl:
      "https://res.cloudinary.com/daoquetki/image/upload/v1705399854/blog%20task16012024/edzceq9w1yuecuye7feh.webp",
    title: "My Summer Diary",
    desImgUrl:
      "https://res.cloudinary.com/daoquetki/image/upload/v1705401529/blog%20task16012024/ss6d3pghptnrio9tcbgl.jpg",
    style: "Lifestyle",
    description:
      "Fashion is a term used interchangeably to describe the creation of clothing, footwear, accessories, cosmetics, and jewellery of different cultural aesthetics and their mix and match into outfits that depict distinctive ways of dressing (styles and trends) as signifiers of social status, self-expression, and group ...",
  },
];

// var indexObj = { indexValue: 0 };

let cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards-container");
bottomContentContent.appendChild(cardsContainer);

for (let each of itemsArray) {
  let indexValue;
  let cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  // cardButton.setAttribute("id", each.btnId);s
  //   cardButton.addEventListener("click", function (event) {
  //     // console.log(event.target.id);
  //     // event.target.reload();
  //     bottomContentContent.removeChild(descriptionContainer);

  //     index = itemsArray.findIndex((each) => {
  //       if (event.target.id === each.btnId) {
  //         return true;
  //       }
  //     });

  //     indexObj["indexValue"] = index;
  //     console.log(index);
  //     console.log(indexObj);

  //     // console.log();
  //     descriptionFunctionality(indexObj.indexValue);
  //   });
  //   cardButton.onclick = () => {
  //     index = each.id;
  //     console.log("event happend");
  //   };
  cardsContainer.appendChild(cardButton);

  let imageCard = document.createElement("img");
  imageCard.setAttribute("id", each.btnId);
  imageCard.src = each.imgUrl;
  imageCard.setAttribute("name", "cardImage");
  imageCard.setAttribute("alt", each.id);
  cardButton.appendChild(imageCard);
}

let details = itemsArray[0];
let descriptionContainer = document.createElement("div");
descriptionContainer.setAttribute("class", "description-container");
bottomContentContent.appendChild(descriptionContainer);

let borderContainer = document.createElement("div");
borderContainer.classList.add("border-container");
descriptionContainer.appendChild(borderContainer);

let descriptionImage = document.createElement("img");
descriptionImage.setAttribute("src", details.desImgUrl);
descriptionImage.classList.add("description-img");
descriptionImage.setAttribute("name", "descriptionImage");
borderContainer.appendChild(descriptionImage);

//------------------------Details-Container

let detailsContainer = document.createElement("div");
detailsContainer.classList.add("details-container");
descriptionContainer.appendChild(detailsContainer);

let detailsHead = document.createElement("h4");
detailsHead.textContent = details.btnId.toUpperCase();
detailsContainer.appendChild(detailsHead);

//------------------------Caption-Container------Start

let captionContainer = document.createElement("div");
captionContainer.classList.add("caption-container");

detailsContainer.appendChild(captionContainer);

let caption = document.createElement("p");
caption.textContent = details.style;
caption.style.fontSize = "12px";
caption.style.fontWeight = "500";
captionContainer.appendChild(caption);

let hrLine = document.createElement("hr");
// hrLine.style.border = "1px solid";
hrLine.classList.add("hr-line");
hrLine.style.color = "red";
hrLine.style.width = "60%";

captionContainer.appendChild(hrLine);

//------------------------Caption-Container------End

let description = document.createElement("p");
description.classList.add("description");
description.textContent = details.description;
description.style.textAlign = "start";
detailsContainer.appendChild(description);

let continueReadingBtn = document.createElement("button");
continueReadingBtn.classList.add("contBtn");
continueReadingBtn.textContent = "CONTINUE READING";
continueReadingBtn.style.textAlign = "start";
detailsContainer.appendChild(continueReadingBtn);

//------------------------Description-Container
function descriptionFunctionality(index) {
  //   console.log(indexObj.indexValue);
  // descriptionContainer.textContent = "";
  let details = itemsArray[index];

  bottomContentContent.removeChild(descriptionContainer);
  descriptionContainer = document.createElement("div");

  descriptionContainer.setAttribute("class", "description-container");
  bottomContentContent.appendChild(descriptionContainer);

  // borderContainer = document.createElement("div");
  borderContainer.classList.add("border-container");
  descriptionContainer.appendChild(borderContainer);

  // descriptionImage = document.createElement("img");
  descriptionImage.setAttribute("src", details.desImgUrl);
  descriptionImage.setAttribute("name", "descriptionImage");
  borderContainer.appendChild(descriptionImage);

  //------------------------Details-Container

  detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");
  descriptionContainer.appendChild(detailsContainer);

  detailsHead = document.createElement("h4");
  detailsHead.textContent = details.btnId.toUpperCase();
  detailsContainer.appendChild(detailsHead);

  //------------------------Caption-Container------Start

  captionContainer = document.createElement("div");
  captionContainer.classList.add("caption-container");

  detailsContainer.appendChild(captionContainer);

  caption = document.createElement("p");
  caption.textContent = details.style;
  caption.style.fontSize = "12px";
  caption.style.fontWeight = "500";
  captionContainer.appendChild(caption);

  hrLine = document.createElement("hr");
  hrLine.classList.add("hr-line");
  hrLine.style.color = "red";
  hrLine.style.width = "60%";

  captionContainer.appendChild(hrLine);

  //------------------------Caption-Container------End

  description = document.createElement("p");
  description.classList.add("description");
  description.textContent = details.description;
  description.style.textAlign = "start";
  detailsContainer.appendChild(description);

  continueReadingBtn = document.createElement("button");
  continueReadingBtn.classList.add("contBtn");
  continueReadingBtn.textContent = "CONTINUE READING";
  continueReadingBtn.style.textAlign = "start";
  detailsContainer.appendChild(continueReadingBtn);
}

let newIndex = 0;

for (let each of itemsArray) {
  let fashionEvent = document.getElementById(each.btnId);
  fashionEvent.onclick = function (event) {
    console.log("event Occured");
    // console.log(event.target);

    let traceIndex = itemsArray.findIndex((each) => {
      if (each.btnId === event.target.id) {
        console.log(each.btnId);
        return true;
      }
    });
    console.log(traceIndex);
    newIndex = traceIndex;
    descriptionFunctionality(newIndex);
  };
}
