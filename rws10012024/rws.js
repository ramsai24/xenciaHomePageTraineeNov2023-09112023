//------Start-----------//
let applicationType = document.getElementById("application-type");
// console.log(applicationType);
let applicationTypeSpanEl = document.getElementById("applicationTypeSpanEl");
// console.log(applicationTypeSpanEl.textContent);
applicationTypeSpanEl.textContent = "";

// event start
applicationType.addEventListener("change", (event) => {
  if (event.target.value === "__ SelectApplication Type___") {
    applicationTypeSpanEl.textContent = "Please select Application Type";
  } else {
    applicationTypeSpanEl.textContent = "";
  }
});

applicationType.addEventListener("blur", (event) => {
  if (event.target.value === "__ SelectApplication Type___") {
    applicationTypeSpanEl.textContent = "Please select Application Type";
  } else {
    applicationTypeSpanEl.textContent = "";
  }
});

// event end
//------end-----------//

//------Start-----------//

let documentType = $("#documentType");
// console.log(documentType.value);
let documentTypeSpanEl = $("#documentTypeSpanEl");
console.log(documentTypeSpanEl.text());

documentTypeSpanEl.text("");

// event start
documentType.change((event) => {
  if (event.target.value === "__ SelectApplication Type___") {
    documentTypeSpanEl.text("Please select Document Type");
  } else {
    documentTypeSpanEl.text("");
  }
});

documentType.blur((event) => {
  if (event.target.value === "__ SelectApplication Type___") {
    documentTypeSpanEl.text("Please select Document Type");
  } else {
    documentTypeSpanEl.text("");
  }
});

// event end
//------end-----------//

//------Start-----------//

let documentNum = $("#documentNum");
console.log(documentNum);

let documentNumberSpanEl = $("#documentNumberSpanEl");
console.log(documentNumberSpanEl.text());

// event start

documentNumberSpanEl.text("");

// documentNum.keydown((event) => {
//   let values = event.target.value;
//   console.log(event.target.value);

//   if (values.includes("")) {
//     // documentNum.prop("value", values.replace("", ""));
//   }

//   //   if (value.includes("e")) {
//   //     value.slice(0, value.length - 2);
//   //   }
// });

// documentNum.change((event) => {
//   if (event.target.value === "") {
//     documentNumberSpanEl.text("Please enter Document Number");
//   } else {
//     documentNumberSpanEl.text("");
//   }
// });

documentNum.blur((event) => {
  if (event.target.value === "") {
    documentNumberSpanEl.text("Please enter Document Number");
  } else {
    documentNumberSpanEl.text("");
  }
});

// event end
//------end-----------//

//------Start-----------//

let fullName = $("#fullName");
// fullName.addEventListener("change", (event) => console.log(event.target.value));

let fullNameSpanEl = $("#fullNameSpanEl");
console.log(fullNameSpanEl.text());

// event start

fullNameSpanEl.text("");
fullName.change((event) => {
  if (event.target.value === "") {
    fullNameSpanEl.text("Please enter Document Number");
  } else {
    fullNameSpanEl.text("");
  }
});

fullName.blur((event) => {
  if (event.target.value === "") {
    fullNameSpanEl.text("Please enter Document Number");
  } else {
    fullNameSpanEl.text("");
  }
});

// event end

//------end-----------//

//------Start-----------//

let nationality = $("#nationality");
nationality.change((event) => console.log(event.target.value));

let nationalitySpanEl = $("#nationalitySpanEl");
console.log(nationalitySpanEl.text());

// event start
nationalitySpanEl.text("");
nationality.change((event) => {
  if (event.target.value === "__ Select Country___") {
    nationalitySpanEl.text("Please select Nationality");
  } else {
    nationalitySpanEl.text("");
  }
});

nationality.blur((event) => {
  if (event.target.value === "__ Select Country___") {
    nationalitySpanEl.text("Please select Nationality");
  } else {
    nationalitySpanEl.text("");
  }
});

// event end

//------end-----------//

//------Start-----------//

let dob = $("#dob");
console.log(dob.text());
// dob.change((event) => console.log(event.target.value));

let dobSpanEl = $("#dobSpanEl");
console.log(dobSpanEl.text());
// dobSpanEl.change((event) => console.log(event.target.value));

// event start
dobSpanEl.text("");

dob.blur((event) => {
  if (event.target.value !== "") {
    dobSpanEl.text("");
  } else {
    dobSpanEl.text("Please select Date");
  }
});

// event end

//------end-----------//

//------Start-----------//

let contactNum = $("#contactNum");
// contactNum.addEventListener("change", (event) =>
//   console.log(event.target.value)
// );

let contactNumSpanEl = $("#contactNumSpanEl");
console.log(contactNumSpanEl.text());

// event start

contactNumSpanEl.text("");
contactNum.change((event) => {
  if (event.target.value === "") {
    contactNumSpanEl.text("Please enter Document Number");
  } else {
    contactNumSpanEl.text("");
  }
});

contactNum.blur((event) => {
  if (event.target.value === "") {
    contactNumSpanEl.text("Please enter Document Number");
  } else {
    contactNumSpanEl.text("");
  }
});

// event end
//------end-----------//

//------Start-----------//

let companyType = $("#companyType");
companyType.change((event) => console.log(event.target.value));

let companyTypeSpanEl = $("#companyTypeSpanEl");
console.log(companyTypeSpanEl.text());

// event start
companyTypeSpanEl.text("");
companyType.change((event) => {
  if (event.target.value === "__ Companay Type___") {
    companyTypeSpanEl.text("Please select Company Type");
  } else {
    companyTypeSpanEl.text("");
  }
});

companyType.blur((event) => {
  if (event.target.value === "__ Companay Type___") {
    companyTypeSpanEl.text("Please select Company Type");
  } else {
    companyTypeSpanEl.text("");
  }
});

// event end

//------end-----------//

//------Start-----------//

let companyName = $("#companyName");
// companyName.addEventListener("change", (event) =>
//   console.log(event.target.value)
// );

let companyNameSpanEl = $("#companyNameSpanEl");
console.log(companyNameSpanEl.text());

// event start

companyNameSpanEl.text("");
companyName.change((event) => {
  if (event.target.value === "") {
    companyNameSpanEl.text("Please enter Company Name");
  } else {
    companyNameSpanEl.text("");
  }
});

companyName.blur((event) => {
  if (event.target.value === "") {
    companyNameSpanEl.text("Please enter Document Number");
  } else {
    companyNameSpanEl.text("");
  }
});

// event end
//------end-----------//

//------Start-----------//

let mainContractorName = $("#mainContractorName");
// mainContractorName.change((event) => console.log(event.target.value));

let mainContractorNameSpanEl = $("#mainContractorNameSpanEl");
console.log(mainContractorNameSpanEl.text());

// event start

mainContractorNameSpanEl.text("");
mainContractorName.change((event) => {
  if (event.target.value === "") {
    mainContractorNameSpanEl.text("Please enter Company Name");
  } else {
    mainContractorNameSpanEl.text("");
  }
});

mainContractorName.blur((event) => {
  if (event.target.value === "") {
    mainContractorNameSpanEl.text("Please enter Document Number");
  } else {
    mainContractorNameSpanEl.text("");
  }
});

// event end

//------end-----------//

//------Start-----------//

let stateWorkDutyInCasinoBoundary = $("#stateWorkDutyInCasinoBoundary");
// stateWorkDutyInCasinoBoundary.change((event) =>
//   console.log(event.target.value)
// );

let stateWorkDutyInCasinoBoundarySpanEl = $(
  "#stateWorkDutyInCasinoBoundarySpanEl"
);
console.log(stateWorkDutyInCasinoBoundarySpanEl.text());

// event start

stateWorkDutyInCasinoBoundarySpanEl.text("");
stateWorkDutyInCasinoBoundary.change((event) => {
  if (event.target.value === "") {
    stateWorkDutyInCasinoBoundarySpanEl.text("Please enter Company Name");
  } else {
    stateWorkDutyInCasinoBoundarySpanEl.text("");
  }
});

stateWorkDutyInCasinoBoundary.blur((event) => {
  if (event.target.value === "") {
    stateWorkDutyInCasinoBoundarySpanEl.text("Please enter Document Number");
  } else {
    stateWorkDutyInCasinoBoundarySpanEl.text("");
  }
});

// event end

//------end-----------//

//------Start-----------//

let projectDescription = $("#projectDescription");
// projectDescription.change((event) => console.log(event.target.value));

let projectDescriptionSpanEl = $("#projectDescriptionSpanEl");
console.log(projectDescriptionSpanEl.text());

// event start

projectDescriptionSpanEl.text("");
projectDescription.change((event) => {
  if (event.target.value === "") {
    projectDescriptionSpanEl.text("Please enter Company Name");
  } else {
    projectDescriptionSpanEl.text("");
  }
});

projectDescription.blur((event) => {
  if (event.target.value === "") {
    projectDescriptionSpanEl.text("Please enter Document Number");
  } else {
    projectDescriptionSpanEl.text("");
  }
});

// event end

//------end-----------//

//------Start-----------//

let contractorPassIssuePeriod = $("#contractorPassIssuePeriod");
contractorPassIssuePeriod.click((event) => console.log(event.target.checked));

let contractorPassIssuePeriodSpanEl = $("#contractorPassIssuePeriodSpanEl");
console.log(contractorPassIssuePeriodSpanEl.text());

// event start

contractorPassIssuePeriodSpanEl.text("");
contractorPassIssuePeriod.click((event) => {
  if (event.target.checked) {
    contractorPassIssuePeriodSpanEl.text("");
  } else {
    contractorPassIssuePeriodSpanEl.text("Please check the Checkbox");
  }
});

// event end

//------end-----------//

//------Start-----------//

let longTermPassStartDate = $("#longTermPassStartDate");
longTermPassStartDate.change((event) => console.log(event.target.value));

let longTermPassStartDateSpanEl = $("#longTermPassStartDateSpanEl");
console.log(longTermPassStartDateSpanEl.text());

// event start
longTermPassStartDateSpanEl.text("");

longTermPassStartDate.blur((event) => {
  if (event.target.value !== "") {
    longTermPassStartDateSpanEl.text("");
  } else {
    longTermPassStartDateSpanEl.text("Please select Date");
  }
});

// event end

//------end-----------//

//------Start-----------//

let longTermPassEndDate = $("#longTermPassEndDate");
// longTermPassEndDate.change((event) => console.log(event.target.value));

let longTermPassEndDateSpanEl = $("#longTermPassEndDateSpanEl");
console.log(longTermPassEndDateSpanEl.text());

// event start
longTermPassEndDateSpanEl.text("");

longTermPassEndDate.blur((event) => {
  if (event.target.value !== "") {
    longTermPassEndDateSpanEl.text("");
  } else {
    longTermPassEndDateSpanEl.text("Please select Date");
  }
});

// event end

//------end-----------//

//------Start-----------//

let temPass = $("#temPass");
temPass.click((event) => console.log(event.target.checked));

let temPassSpanEl = $("#temPassSpanEl");
console.log(temPassSpanEl.text());

// event start

temPassSpanEl.text("");
temPass.click((event) => {
  if (event.target.checked) {
    temPassSpanEl.text("");
  } else {
    temPassSpanEl.text("Please check the Checkbox");
  }
});

// event end

//------end-----------//

//------Start-----------//

//------end-----------//
let numList = [];
let minutesList = [];
let hoursList = [];
for (let i = 48; i < 58; i++) {
  //   console.log(String.fromCharCode(i));
  numList.push(String.fromCharCode(i));
}
for (let each1 of numList) {
  for (let each2 of numList) {
    // console.log(each1 + each2);
    if (parseInt(each1 + each2) >= parseInt("60")) {
      break;
    }
    minutesList.push(each1 + each2);
  }
}

for (let each1 of numList) {
  for (let each2 of numList) {
    // console.log(each1 + each2);
    if (parseInt(each1 + each2) >= parseInt("24")) {
      break;
    }
    hoursList.push(each1 + each2);
  }
}

console.log(hoursList);
//------Start-----------//

let startHours = document.getElementById("startHours");
// startHours.change((event) => console.log(event.target.value));

let startMinutes = document.getElementById("startMinutes");
// startMinutes.change((event) => console.log(event.target.value));

for (let min of hoursList) {
  let optionElement = document.createElement("option");
  optionElement.textContent = min;
  optionElement.setAttribute("value", min);
  optionElement.setAttribute("id", min);
  startHours.appendChild(optionElement);
}

for (let min of minutesList) {
  let optionElement = document.createElement("option");
  optionElement.textContent = min;
  optionElement.setAttribute("value", min);
  optionElement.setAttribute("id", min);
  startMinutes.appendChild(optionElement);
}

//------end-----------//

//------Start-----------//

let endHours = document.getElementById("endHours");
// startHours.change((event) => console.log(event.target.value));

for (let min of hoursList) {
  let optionElement = document.createElement("option");
  optionElement.textContent = min;
  optionElement.setAttribute("value", min);
  optionElement.setAttribute("id", min);
  endHours.appendChild(optionElement);
}

//------end-----------//
//------Start-----------//

// let endMinutes = $("#endMinutes");
// endMinutes.change((event) => console.log(event.target.value));

let endMinutes = document.getElementById("endMinutes");
// endMinutes.change((event) => console.log(event.target.value));

for (let min of minutesList) {
  let optionElement = document.createElement("option");
  optionElement.textContent = min;
  optionElement.setAttribute("value", min);
  optionElement.setAttribute("id", "min" + min);
  endMinutes.appendChild(optionElement);
}

//------end-----------//

let zeroEight = $("#min08");
console.log(zeroEight.text());

//------Start-----------//
let dateTempPass = $("#dateTempPass");

let dateTempPassSpanEl = $("#dateTempPassSpanEl");
console.log(dateTempPassSpanEl.text());

// event start
dateTempPassSpanEl.text("");

dateTempPass.blur((event) => {
  if (event.target.value !== "") {
    dateTempPassSpanEl.text("");
  } else {
    dateTempPassSpanEl.text("Please select Date");
  }
});

// event end

//------end-----------//

//------Start-----------//

let emailId = $("#emailId");
emailId.change((event) => console.log(event.target.value));

let emailIDSpanEl = $("#emailIDSpanEl");
console.log(emailIDSpanEl.text());

// event start

emailIDSpanEl.text("");
emailId.change((event) => {
  if (event.target.value === "") {
    emailIDSpanEl.text("Please enter email ID");
  } else {
    emailIDSpanEl.text("");
  }
});

emailId.blur((event) => {
  if (event.target.value === "") {
    emailIDSpanEl.text("Please enter email ID");
  } else {
    emailIDSpanEl.text("");
  }
});

// event end

//------end-----------//

//------Start-----------//

let acknowledge = $("#acknowledge");
acknowledge.click((event) => console.log(event.target.checked));

let acknowledgeSpanEl = $("#acknowledgeSpanEl");
console.log(acknowledgeSpanEl.text());

// event start

acknowledgeSpanEl.text("");
acknowledge.click((event) => {
  if (event.target.checked) {
    acknowledgeSpanEl.text("");
  } else {
    acknowledgeSpanEl.text("Please check the Checkbox");
  }
});

// event end

//------end-----------//

//------Start-----------//

let emailRwsAbove = $("#emailRwsAbove");
// emailId.change((event) => console.log(event.target.value));

let email1SpanEl = $("#email1SpanEl");
console.log(email1SpanEl.text());

// event start

email1SpanEl.text("");
emailRwsAbove.change((event) => {
  if (event.target.value === "") {
    email1SpanEl.text("Please enter email ID");
  } else {
    email1SpanEl.text("");
  }
});

emailRwsAbove.blur((event) => {
  if (event.target.value === "") {
    email1SpanEl.text("Please enter email ID");
  } else {
    emailRwsAbemail1SpanElove.text("");
  }
});

// event end

//------end-----------//

//------Start-----------//

let emailRwsManager = $("#emailRwsManager");
// emailId.change((event) => console.log(event.target.value));

let email2SpanEl = $("#email2SpanEl");
console.log(email1SpanEl.text());

// event start

email2SpanEl.text("");
emailRwsManager.change((event) => {
  if (event.target.value === "") {
    email2SpanEl.text("Please enter email ID");
  } else {
    email2SpanEl.text("");
  }
});

emailRwsManager.blur((event) => {
  if (event.target.value === "") {
    email2SpanEl.text("Please enter email ID");
  } else {
    email2SpanEl.text("");
  }
});

// event end

//------end-----------//

//------Start-----------//

let nameRwsAbove = $("#nameRwsAbove");
// emailId.change((event) => console.log(event.target.value));

let name1SpanEl = $("#name1SpanEl");
console.log(name1SpanEl.text());

// event start

name1SpanEl.text("");
nameRwsAbove.change((event) => {
  if (event.target.value === "") {
    name1SpanEl.text("Please enter email ID");
  } else {
    name1SpanEl.text("");
  }
});

name1SpanEl.blur((event) => {
  if (event.target.value === "") {
    name1SpanEl.text("Please enter email ID");
  } else {
    name1SpanEl.text("");
  }
});

// event end

//------end-----------//

//------Start-----------//

let nameRwsManager = $("#nameRwsManager");
// emailId.change((event) => console.log(event.target.value));

let name2SpanEl = $("#name2SpanEl");
console.log(email1SpanEl.text());

// event start

name2SpanEl.text("");
nameRwsManager.change((event) => {
  if (event.target.value === "") {
    name2SpanEl.text("Please enter email ID");
  } else {
    name2SpanEl.text("");
  }
});

nameRwsManager.blur((event) => {
  if (event.target.value === "") {
    name2SpanEl.text("Please enter email ID");
  } else {
    name2SpanEl.text("");
  }
});

// event end

//------end-----------//
