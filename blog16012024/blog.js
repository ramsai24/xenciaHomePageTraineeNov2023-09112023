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

let bottomContentContent = docuemnt.createElement("nav");
// bottomContentContent.textContent = "ok";
contentContainer.appendChild(bottomContentContent);

let mainTilte = docuemnt.createElement("h1");
mainTilte.textContent = "DOLUS BLOG";
mainTilte.style.color = "black";
bottomContentContent.appendChild(mainTilte);
