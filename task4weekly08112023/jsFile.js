// console.log("print");

let generalTab = document.getElementById("nav-home-tab");
let companyTab = document.getElementById("nav-profile-tab");
let addressTab = document.getElementById("nav-contact-tab");
let academicTab = document.getElementById("nav-academic-tab");
let skillsTab = document.getElementById("nav-skills-tab");

let general = document.getElementById("nav-home");
let company = document.getElementById("nav-profile");
let address = document.getElementById("nav-contact");
let academic = document.getElementById("nav-academic");
let skills = document.getElementById("nav-skills");

// console.log(generalTab, companyTab, addressTab, academicTab, skillsTab);
// console.log(general, company, address, academic, skills);
let cancelGeneral = document.getElementById("cancelGeneral");
let nextGeneral = document.getElementById("nextGeneral");

// console.log(cancelGeneral, nextGeneral);

let cancelCompany = document.getElementById("cancelCompany");
let previousCompany = document.getElementById("previousCompany");
let nextCompany = document.getElementById("nextCompany");

// console.log(cancelCompany, previousCompany, nextCompany);

let cancelAddress = document.getElementById("cancelAddress");
let previousAddress = document.getElementById("previousAddress");
let nextAddress = document.getElementById("nextAddress");

// console.log(cancelAddress,previousAddress,nextAddress)

let cancelAcademic = document.getElementById("cancelAcademic");
let previousAcademic = document.getElementById("previousAcademic");
let nextAcademic = document.getElementById("nextAcademic");

// console.log(cancelAcademic, previousAcademic, nextAcademic);

let cancelSkills = document.getElementById("cancelSkills");
let previousSkills = document.getElementById("previousSkills");

// console.log(cancelSkills, previousSkills);

let e = document.getElementById("empty");

nextGeneral.onclick = function () {
  //   btnColor();
  general.style.display = "none";
  company.style.display = "block";
  compTab();
};

nextCompany.onclick = function () {
  //   btnColor();
  general.style.display = "none";

  company.style.display = "none";
  address.style.display = "block";
  addTab();
};

nextAddress.onclick = function () {
  //   btnColor();
  general.style.display = "none";

  company.style.display = "none";
  address.style.display = "none";
  academic.style.display = "block";
  acadTab();
};

nextAcademic.onclick = function () {
  //   btnColor();
  general.style.display = "none";

  company.style.display = "none";
  address.style.display = "none";
  academic.style.display = "none";
  skills.style.display = "block";
  skillTab();
};

previousSkills.onclick = function () {
  //   btnColor();
  general.style.display = "none";

  company.style.display = "none";
  address.style.display = "none";
  academic.style.display = "block";
  skills.style.display = "none";

  acadTab();
};

previousAcademic.onclick = function () {
  //   btnColor();
  general.style.display = "none";

  company.style.display = "none";
  address.style.display = "block";
  academic.style.display = "none";
  skills.style.display = "none";

  addTab();
};

previousAddress.onclick = function () {
  //   btnColor();
  general.style.display = "none";

  company.style.display = "block";
  address.style.display = "none";
  academic.style.display = "none";
  skills.style.display = "none";

  compTab();
};

previousCompany.onclick = function () {
  //   btnColor();
  general.style.display = "block";

  company.style.display = "none";
  address.style.display = "none";
  academic.style.display = "none";
  skills.style.display = "none";

  genTab();
};

function genTab() {
  generalTab.style.backgroundColor = "blue";
  companyTab.style.backgroundColor = "red";
  addressTab.style.backgroundColor = "red";
  academicTab.style.backgroundColor = "red";
  skillsTab.style.backgroundColor = "red";
}

generalTab.onclick = function () {
  //   btnColor();
  general.style.display = "block";

  company.style.display = "none";
  address.style.display = "none";
  academic.style.display = "none";
  skills.style.display = "none";

  genTab();
};

function compTab() {
  generalTab.style.backgroundColor = "red";
  companyTab.style.backgroundColor = "blue";
  addressTab.style.backgroundColor = "red";
  academicTab.style.backgroundColor = "red";
  skillsTab.style.backgroundColor = "red";
}

companyTab.onclick = function () {
  //   btnColor();
  general.style.display = "none";

  company.style.display = "block";
  address.style.display = "none";
  academic.style.display = "none";
  skills.style.display = "none";

  compTab();
};

function addTab() {
  generalTab.style.backgroundColor = "red";
  companyTab.style.backgroundColor = "red";
  addressTab.style.backgroundColor = "blue";
  academicTab.style.backgroundColor = "red";
  skillsTab.style.backgroundColor = "red";
}

addressTab.onclick = function () {
  //   btnColor();
  general.style.display = "none";

  company.style.display = "none";
  address.style.display = "block";
  academic.style.display = "none";
  skills.style.display = "none";

  addTab();
};

function acadTab() {
  generalTab.style.backgroundColor = "red";
  companyTab.style.backgroundColor = "red";
  addressTab.style.backgroundColor = "red";
  academicTab.style.backgroundColor = "blue";
  skillsTab.style.backgroundColor = "red";
}

academicTab.onclick = function () {
  //   btnColor();
  general.style.display = "none";

  company.style.display = "none";
  address.style.display = "none";
  academic.style.display = "block";
  skills.style.display = "none";

  acadTab();
};

function skillTab() {
  generalTab.style.backgroundColor = "red";
  companyTab.style.backgroundColor = "red";
  addressTab.style.backgroundColor = "red";
  academicTab.style.backgroundColor = "red";
  skillsTab.style.backgroundColor = "blue";
}

skillsTab.onclick = function () {
  //   btnColor();
  general.style.display = "none";

  company.style.display = "none";
  address.style.display = "none";
  academic.style.display = "none";
  skills.style.display = "block";

  skillTab();
};

cancelCompany.onclick = function () {
  generalTab.style.backgroundColor = "blue";
  companyTab.style.backgroundColor = "red";
  //   btnColor();
  general.style.display = "block";

  company.style.display = "none";
  address.style.display = "none";
  academic.style.display = "none";
  skills.style.display = "none";
};

cancelAddress.onclick = function () {
  generalTab.style.backgroundColor = "blue";
  addressTab.style.backgroundColor = "red";
  //   btnColor();
  general.style.display = "block";

  company.style.display = "none";
  address.style.display = "none";
  academic.style.display = "none";
  skills.style.display = "none";
};

cancelAcademic.onclick = function () {
  generalTab.style.backgroundColor = "blue";
  academicTab.style.backgroundColor = "red";
  //   btnColor();
  general.style.display = "block";

  company.style.display = "none";
  address.style.display = "none";
  academic.style.display = "none";
  skills.style.display = "none";
};

cancelSkills.onclick = function () {
  generalTab.style.backgroundColor = "blue";
  skillsTab.style.backgroundColor = "red";
  //   btnColor();
  general.style.display = "block";

  company.style.display = "none";
  address.style.display = "none";
  academic.style.display = "none";
  skills.style.display = "none";
};

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");
let tab4 = document.getElementById("tab4");
let tab5 = document.getElementById("tab5");

console.log(
  tab1.textContent.toLowerCase() === generalTab.textContent.toLowerCase()
);
console.log(
  tab2.textContent.toLowerCase() === companyTab.textContent.toLowerCase()
);
console.log(
  tab3.textContent.toLowerCase() === addressTab.textContent.toLowerCase()
);
console.log(
  tab4.textContent.toLowerCase() === academicTab.textContent.toLowerCase()
);
console.log(
  tab5.textContent.toLowerCase() === skillsTab.textContent.toLowerCase()
);

// function btnColor() {
//   if (tab1.textContent.toLowerCase() === generalTab.textContent.toLowerCase()) {
//     generalTab.style.backgroundColor = "blue";
//     companyTab.style.backgroundColor = "red";
//     addressTab.style.backgroundColor = "red";
//     academicTab.style.backgroundColor = "red";
//     skillsTab.style.backgroundColor = "red";
//   } else if (
//     tab2.textContent.toLowerCase() === companyTab.textContent.toLowerCase()
//   ) {
//     generalTab.style.backgroundColor = "red";
//     companyTab.style.backgroundColor = "blue";
//     addressTab.style.backgroundColor = "red";
//     academicTab.style.backgroundColor = "red";
//     skillsTab.style.backgroundColor = "red";
//   } else if (
//     tab3.textContent.toLowerCase() === addressTab.textContent.toLowerCase()
//   ) {
//     generalTab.style.backgroundColor = "red";
//     companyTab.style.backgroundColor = "red";
//     addressTab.style.backgroundColor = "blue";
//     academicTab.style.backgroundColor = "red";
//     skillsTab.style.backgroundColor = "red";
//   } else if (
//     tab4.textContent.toLowerCase() === academicTab.textContent.toLowerCase()
//   ) {
//     generalTab.style.backgroundColor = "red";
//     companyTab.style.backgroundColor = "red";
//     addressTab.style.backgroundColor = "red";
//     academicTab.style.backgroundColor = "blue";
//     skillsTab.style.backgroundColor = "red";
//   } else if (
//     tab5.textContent.toLowerCase() === skillsTab.textContent.toLowerCase()
//   ) {
//     generalTab.style.backgroundColor = "red";
//     companyTab.style.backgroundColor = "red";
//     addressTab.style.backgroundColor = "red";
//     academicTab.style.backgroundColor = "red";
//     skillsTab.style.backgroundColor = "blue";
//   }
// }
