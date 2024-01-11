//------Start-----------//
let applicationType = document.getElementById("application-type");
// console.log(applicationType);
let applicationTypeSpanEl = document.getElementById("applicationTypeSpanEl");
// console.log(applicationTypeSpanEl.textContent);
//------end-----------//

//------Start-----------//

let documentType = document.getElementById("document-type");
// console.log(documentType);
let documentTypeSpanEl = $("#documentTypeSpanEl");
console.log(documentTypeSpanEl.text());
//------end-----------//

//------Start-----------//

let documentNum = $("#documentNum");
console.log(documentNum);

let documentNumberSpanEl = $("#documentNumberSpanEl");
console.log(documentNumberSpanEl.text());
//------end-----------//

//------Start-----------//

let fullName = document.getElementById("fullName");
fullName.addEventListener("change", (event) => console.log(event.target.value));

let fullNameSpanEl = document.getElementById("fullNameSpanEl");
console.log(fullNameSpanEl.textContent);

//------end-----------//

//------Start-----------//

let nationality = $("#nationality");
nationality.change((event) => console.log(event.target.value));

let nationalitySpanEl = $("#nationalitySpanEl");
console.log(nationalitySpanEl.text());

//------end-----------//

//------Start-----------//

let dob = $("#dob");
dob.change((event) => console.log(event.target.value));

let dobSpanEl = $("#dobSpanEl");
console.log(dobSpanEl.text());
// dobSpanEl.change((event) => console.log(event.target.value));

//------end-----------//

//------Start-----------//

let contactNum = document.getElementById("contactNum");
contactNum.addEventListener("change", (event) =>
  console.log(event.target.value)
);

let contactNumSpanEl = document.getElementById("contactNumSpanEl");
console.log(contactNumSpanEl.textContent);
//------end-----------//

//------Start-----------//

let companyType = $("#companyType");
nationality.change((event) => console.log(event.target.value));

let companyTypeSpanEl = $("#companyTypeSpanEl");
console.log(companyTypeSpanEl.text());

//------end-----------//

//------Start-----------//

let companyName = document.getElementById("companyName");
companyName.addEventListener("change", (event) =>
  console.log(event.target.value)
);

let companyNameSpanEl = document.getElementById("companyNameSpanEl");
console.log(companyNameSpanEl.textContent);
//------end-----------//

//------Start-----------//

let mainContractorName = $("#mainContractorName");
mainContractorName.change((event) => console.log(event.target.value));

let mainContractorNameSpanEl = $("#mainContractorNameSpanEl");
console.log(mainContractorNameSpanEl.text());

//------end-----------//

//------Start-----------//

let stateWorkDutyInCasinoBoundary = $("#stateWorkDutyInCasinoBoundary");
stateWorkDutyInCasinoBoundary.change((event) =>
  console.log(event.target.value)
);

let stateWorkDutyInCasinoBoundarySpanEl = $(
  "#stateWorkDutyInCasinoBoundarySpanEl"
);
console.log(stateWorkDutyInCasinoBoundarySpanEl.text());

//------end-----------//

//------Start-----------//

let projectDescription = $("#projectDescription");
projectDescription.change((event) => console.log(event.target.value));

let projectDescriptionSpanEl = $("#projectDescriptionSpanEl");
console.log(projectDescriptionSpanEl.text());

//------end-----------//

//------Start-----------//

let contractorPassIssuePeriod = $("#contractorPassIssuePeriod");
contractorPassIssuePeriod.click((event) => console.log(event.target.checked));

let contractorPassIssuePeriodSpanEl = $("#contractorPassIssuePeriodSpanEl");
console.log(contractorPassIssuePeriodSpanEl.text());

//------end-----------//

//------Start-----------//

let longTermPassStartDate = $("#longTermPassStartDate");
longTermPassStartDate.change((event) => console.log(event.target.value));

let longTermPassStartDateSpanEl = $("#longTermPassStartDateSpanEl");
console.log(longTermPassStartDateSpanEl.text());

//------end-----------//

//------Start-----------//

let longTermPassEndDate = $("#longTermPassEndDate");
longTermPassEndDate.change((event) => console.log(event.target.value));

let longTermPassEndDateSpanEl = $("#longTermPassEndDateSpanEl");
console.log(longTermPassEndDateSpanEl.text());

//------end-----------//

//------Start-----------//

let temPass = $("#temPass");
temPass.click((event) => console.log(event.target.checked));

let temPassSpanEl = $("#temPassSpanEl");
console.log(temPassSpanEl.text());

//------end-----------//

//------Start-----------//

let startHours = $("#startHours");
startHours.change((event) => console.log(event.target.value));

//------end-----------//
let numList = [];
let minutesList = [];
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

console.log(minutesList);
//------Start-----------//

let startMinutes = document.getElementById("startMinutes");
// startMinutes.change((event) => console.log(event.target.value));

for (let min of minutesList) {
  let optionElement = document.createElement("option");
  optionElement.textContent = min;
  startMinutes.appendChild(optionElement);
}

//------end-----------//

//------Start-----------//

let endHours = $("#endHours");
endHours.change((event) => console.log(event.target.value));

//------end-----------//
//------Start-----------//

// let endMinutes = $("#endMinutes");
// endMinutes.change((event) => console.log(event.target.value));

let endMinutes = document.getElementById("endMinutes");
// endMinutes.change((event) => console.log(event.target.value));

for (let min of minutesList) {
  let optionElement = document.createElement("option");
  optionElement.textContent = min;
  endMinutes.appendChild(optionElement);
}

//------end-----------//

//------Start-----------//

let dateTempPassSpanEl = $("#dateTempPassSpanEl");
console.log(dateTempPassSpanEl.text());

//------end-----------//

//------Start-----------//

let emailId = $("#emailId");
emailId.change((event) => console.log(event.target.value));

let emailIDSpanEl = $("#emailIDSpanEl");
console.log(emailIDSpanEl.text());

//------end-----------//

//------Start-----------//

let acknowledge = $("#acknowledge");
acknowledge.click((event) => console.log(event.target.checked));

let acknowledgeSpanEl = $("#acknowledgeSpanEl");
console.log(acknowledgeSpanEl.text());

//------end-----------//
