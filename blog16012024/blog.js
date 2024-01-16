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

let home = document.createElement("a");
home.textContent = "Home";
navContainer1.appendChild(home);

let arrowHome = document.createElement("i");
arrowHome.id = "arrowHome";
arrowHome.setAttribute("name", "send");
arrowHome.classList.add("fa-solid", "fa-angle-down");
home.appendChild(arrowHome);

let about = document.createElement("a");

about.textContent = "About";
navContainer1.appendChild(about);

let arrowAbout = document.createElement("i");
arrowAbout.setAttribute("name", "send");
arrowAbout.id = "arrowAbout";
arrowAbout.classList.add("fa-solid", "fa-angle-down");
about.appendChild(arrowAbout);

let fashion = document.createElement("a");
fashion.textContent = "Fashion";
navContainer1.appendChild(fashion);

let arrowFashion = document.createElement("i");
arrowFashion.setAttribute("name", "send");
arrowFashion.id = "arrowFashion";
arrowFashion.classList.add("fa-solid", "fa-angle-down");
fashion.appendChild(arrowFashion);

let photography = document.createElement("a");
photography.textContent = "Photography";
navContainer1.appendChild(photography);

let arrowPhotography = document.createElement("i");
arrowPhotography.setAttribute("name", "send");
arrowPhotography.id = "arrowPhotography";
arrowPhotography.classList.add("fa-solid", "fa-angle-down");
photography.appendChild(arrowPhotography);

let style = document.createElement("a");
style.textContent = "Style";
navContainer1.appendChild(style);

let arrowStyle = document.createElement("i");
arrowStyle.setAttribute("name", "send");
arrowStyle.id = "arrowStyle";
arrowStyle.classList.add("fa-solid", "fa-angle-down");
style.appendChild(arrowStyle);

let posts = document.createElement("a");
posts.textContent = "Posts";
navContainer1.appendChild(posts);

let arrowPosts = document.createElement("i");
arrowPosts.setAttribute("name", "send");
arrowPosts.id = "arrowPosts";
arrowPosts.classList.add("fa-solid", "fa-angle-down");
posts.appendChild(arrowPosts);

let pages = document.createElement("a");
pages.textContent = "Pages";
navContainer1.appendChild(pages);

let arrowPages = document.createElement("i");

arrowPages.id = "arrowPages";
arrowPages.setAttribute("name", "send");
arrowPages.classList.add("fa-solid", "fa-angle-down");
pages.appendChild(arrowPages);

let contact = document.createElement("a");
contact.textContent = "Contact";
navContainer1.appendChild(contact);

let arrowContact = document.createElement("i");
arrowContact.setAttribute("name", "send");
arrowContact.id = "arrowContact";
arrowContact.classList.add("fa-solid", "fa-angle-down");
contact.appendChild(arrowContact);

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
mainTilte.textContent = "DOLUS BLOG";
mainTilte.style.textAlign = "center";
mainTilte.style.paddingTop = "30px";

bottomContentContent.appendChild(mainTilte);

//-------------------------Slider-Container

let sliderContainer = document.createElement("div");
sliderContainer.setAttribute("class", "slider-container");
sliderContainer.textContent = "hi";
bottomContentContent.appendChild(sliderContainer);

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
      "Fashion is a term used interchangeably to describe the creation of clothing, footwear, accessories, cosmetics, and jewellery of different cultural aesthetics and their mix and match into outfits that depict distinctive ways of dressing (styles and trends) as signifiers of social status, self-expression, and group ...",
  },
  {
    id: 2,
    btnId: "toys",
    styleType: "Toys",
    imgUrl:
      "https://res.cloudinary.com/daoquetki/image/upload/v1705400118/blog%20task16012024/dnvbs4fwdg0ydr90rlcc.jpg",
    title: "My Summer Diary",
    style: "Lifestyle",
    desImgUrl:
      "https://res.cloudinary.com/daoquetki/image/upload/v1705401529/blog%20task16012024/bd08nfvuum5wofuqkaqa.jpg",
    description:
      "Fashion is a term used interchangeably to describe the creation of clothing, footwear, accessories, cosmetics, and jewellery of different cultural aesthetics and their mix and match into outfits that depict distinctive ways of dressing (styles and trends) as signifiers of social status, self-expression, and group ...",
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

var indexObj = { indexValue: 0 };

let cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards-container");
bottomContentContent.appendChild(cardsContainer);

for (let each of itemsArray) {
  let indexValue;
  let cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.setAttribute("id", each.btnId);
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
  imageCard.src = each.imgUrl;
  imageCard.setAttribute("name", "cardImage");
  imageCard.setAttribute("alt", each.id);
  cardButton.appendChild(imageCard);
}

let details = itemsArray[0];
let descriptionContainer = document.createElement("div");
descriptionContainer.setAttribute("class", "description-container");
bottomContentContent.appendChild(descriptionContainer);

let descriptionImage = document.createElement("img");
descriptionImage.setAttribute("src", details.desImgUrl);
descriptionImage.setAttribute("name", "descriptionImage");
descriptionContainer.appendChild(descriptionImage);

//------------------------Details-Container

let detailsContainer = document.createElement("div");
detailsContainer.classList.add("details-container");
descriptionContainer.appendChild(detailsContainer);

let detailsHead = document.createElement("h4");
detailsHead.textContent = details.btnId;
detailsContainer.appendChild(detailsHead);

//------------------------Caption-Container------Start

let captionContainer = document.createElement("div");
captionContainer.classList.add("caption-container");

detailsContainer.appendChild(captionContainer);

let caption = document.createElement("p");
caption.textContent = details.style;
captionContainer.appendChild(caption);

let hrLine = document.createElement("hr");
hrLine.style.color = "red";
hrLine.style.width = "60%";

captionContainer.appendChild(hrLine);

//------------------------Caption-Container------End

let description = document.createElement("p");
description.textContent = details.description;
description.style.textAlign = "start";
detailsContainer.appendChild(description);

let continueReadingBtn = document.createElement("button");
continueReadingBtn.textContent = "CONTINUE READING";
continueReadingBtn.style.textAlign = "start";
detailsContainer.appendChild(continueReadingBtn);

//------------------------Description-Container
function descriptionFunctionality(index) {
  //   console.log(indexObj.indexValue);
  descriptionContainer.textContent = "";
  let details = itemsArray[index];

  bottomContentContent.removeChild(descriptionContainer);
  descriptionContainer = document.createElement("div");

  descriptionContainer.setAttribute("class", "description-container");
  bottomContentContent.appendChild(descriptionContainer);

  descriptionImage = document.createElement("img");
  descriptionImage.setAttribute("src", details.desImgUrl);
  descriptionImage.setAttribute("name", "descriptionImage");
  descriptionContainer.appendChild(descriptionImage);

  //------------------------Details-Container

  detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");
  descriptionContainer.appendChild(detailsContainer);

  detailsHead = document.createElement("h4");
  detailsHead.textContent = details.btnId;
  detailsContainer.appendChild(detailsHead);

  //------------------------Caption-Container------Start

  captionContainer = document.createElement("div");
  captionContainer.classList.add("caption-container");

  detailsContainer.appendChild(captionContainer);

  caption = document.createElement("p");
  caption.textContent = details.style;
  captionContainer.appendChild(caption);

  hrLine = document.createElement("hr");
  hrLine.style.color = "red";
  hrLine.style.width = "60%";

  captionContainer.appendChild(hrLine);

  //------------------------Caption-Container------End

  description = document.createElement("p");
  description.textContent = details.description;
  description.style.textAlign = "start";
  detailsContainer.appendChild(description);

  continueReadingBtn = document.createElement("button");
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
