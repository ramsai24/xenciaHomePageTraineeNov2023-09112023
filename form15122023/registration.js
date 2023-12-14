let data = [];

let name = document.getElementById("name");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let area = document.getElementById("area");
let organization = document.getElementById("organization");
let department = document.getElementById("department");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordConform = document.getElementById("passwordConform");
// console.log(
//   name,
//   phone,
//   address,
//   area,
//   organization,
//   email,
//   password,
//   passwordConform
// );

let nameSpanEl = document.getElementById("nameSpanEl");
let phoneSpanEl = document.getElementById("phoneSpanEl");
let addressSpanEl = document.getElementById("addressSpanEl");
let areaSpanEl = document.getElementById("areaSpanEl");
let organizationSpanEl = document.getElementById("organizationSpanEl");
let departmentSpanEl = document.getElementById("departmentSpanEl");
let emailSpanEl = document.getElementById("emailSpanEl");
let passwordSpanEl = document.getElementById("passwordSpanEl");
let passwordConfirmSpanEl = document.getElementById("passwordConfirmSpanEl");

// console.log(
//   nameSpanEl,
//   phoneSpanEl,
//   addressSpanEl,
//   areaSpanEl,
//   organizationSpanEl,
//   emailSpanEl,
//   passwordConfirmSpanEl,
//   passwordSpanEl
// );

/*afterLogin*/
let dataReceived = document.getElementById("dataReceived");
/*afterLogin*/

let registerBtn = document.getElementById("register");
let error = document.getElementById("error");

let loginBtn = document.getElementById("loginBtn");
let status = document.getElementById("status");

name.addEventListener("blur", function (event) {
  if (event.target.value.length === 0) {
    nameSpanEl.textContent = "Enter Name";
  } else {
    nameSpanEl.textContent = "";
  }
});

phone.addEventListener("keydown", function (event) {
  if (event.target.value.length >= 10) {
    // console.log(event.target.value);
    phone.value = event.target.value.slice(0, 9);
  }
});

address.addEventListener("keydown", function (event) {
  if (event.target.value.length >= 250) {
    // console.log(event.target.value);
    address.value = event.target.value.slice(0, 250);
  }
});

area.addEventListener("keydown", function (event) {
  if (event.target.value.length >= 50) {
    // console.log(event.target.value);
    area.value = event.target.value.slice(0, 50);
  }
});

organization.addEventListener("keydown", function (event) {
  if (event.target.value.length >= 50) {
    // console.log(event.target.value);
    organization.value = event.target.value.slice(0, 50);
  }
});

department.addEventListener("keydown", function (event) {
  console.log(department.value.length);
  if (event.target.value.length >= 50) {
    // console.log(event.target.value);

    department.value = event.target.value.slice(0, 50);
    // console.log(department.value.length);
  }
});

email.addEventListener("change", function (event) {
  console.log(email.value);
  if (
    email.value.includes("@") &&
    (email.value.includes(".com") ||
      email.value.includes(".in") ||
      email.value.includes(".aa"))
  ) {
    emailSpanEl.textContent = "";
  } else {
    emailSpanEl.textContent = "Invalid Email";
  }
});

registerBtn.addEventListener("click", function (event) {
  let nameValue = name.value;
  let phoneNubmerValue = phone.value;
  let addressValue = address.value;
  let areaValue = area.value;
  let organizationValue = organization.value;
  let departmentValue = department.value;
  let emailValue = email.value;
  let passwordValue = password.value;
  let cnfPasswordValue = passwordConform.value;

  //   console.log(
  //     nameValue,
  //     phoneNubmerValue,
  //     addressValue,
  //     areaValue,
  //     organizationValue,
  //     departmentValue,
  //     emailValue,
  //     passwordValue,
  //     cnfPasswordValue
  //   );

  if (
    passwordValue === cnfPasswordValue &&
    phoneNubmerValue.length === 10 &&
    addressValue.length <= 250 &&
    areaValue.length <= 50 &&
    organizationValue.length <= 50 &&
    departmentValue.length <= 50 &&
    emailValue.length <= 50
  ) {
    error.textContent = "good";
    data.push({
      id: data.length,
      name: nameValue,
      address: addressValue,
      area: areaValue,
      department: departmentValue,

      email: emailValue,
      phone: phoneNubmerValue,
    });
    name.value = "";
    phone.value = "";
    address.value = "";
    area.value = "";
    organization.value = "";
    department.value = "";
    email.value = "";
    password.value = "";
    passwordConform.value = "";
    console.log(data);
  } else {
    error.textContent = "Invalid Data";
  }
});

console.log(data);
let link = document.getElementById("link");

registerBtn.onclick = function lg(event) {
  // event.view.window.location.pathname = "/form15122023/afterLogin.html";
  // dataReceived.textContent = data[0].name;
  let table = document.createElement("table");
  dataReceived.appendChild(table);

  for (let i of data) {
    console.log(i);
    if (i.id === 0) {
      let tablerow = document.createElement("tr");
      table.appendChild(tablerow);

      let tableHeader1 = document.createElement("th");
      tableHeader1.textContent = "Name";
      tablerow.appendChild(tableHeader1);

      let tableHeader2 = document.createElement("th");
      tableHeader2.textContent = "Address";
      tablerow.appendChild(tableHeader2);

      let tableHeader3 = document.createElement("th");
      tableHeader3.textContent = "Area";
      tablerow.appendChild(tableHeader3);

      let tableHeader4 = document.createElement("th");
      tableHeader4.textContent = "Department";
      tablerow.appendChild(tableHeader4);

      let tableHeader5 = document.createElement("th");
      tableHeader5.textContent = "Email";
      tablerow.appendChild(tableHeader5);

      let tableHeader6 = document.createElement("th");
      tableHeader6.textContent = "Phone Number";
      tablerow.appendChild(tableHeader6);

      let tablerow1 = document.createElement("tr");
      table.appendChild(tablerow1);

      let tabledata11 = document.createElement("td");
      tabledata11.textContent = i.name;
      tablerow1.appendChild(tabledata11);

      let tabledata21 = document.createElement("td");
      tabledata21.textContent = i.address;
      tablerow1.appendChild(tabledata21);

      let tabledata31 = document.createElement("td");
      tabledata31.textContent = i.area;
      tablerow1.appendChild(tabledata31);

      let tabledata41 = document.createElement("td");
      tabledata41.textContent = i.department;
      tablerow1.appendChild(tabledata41);

      let tabledata51 = document.createElement("td");
      tabledata51.textContent = i.email;
      tablerow1.appendChild(tabledata51);

      let tabledata61 = document.createElement("td");
      tabledata61.textContent = i.phone;
      tablerow1.appendChild(tabledata61);
    } else {
      let tablerow2 = document.createElement("tr");
      table.appendChild(tablerow2);

      let tabledata1 = document.createElement("td");
      tabledata1.textContent = i.name;
      tablerow2.appendChild(tabledata1);

      let tabledata2 = document.createElement("td");
      tabledata2.textContent = i.address;
      tablerow2.appendChild(tabledata2);

      let tabledata3 = document.createElement("td");
      tabledata3.textContent = i.area;
      tablerow2.appendChild(tabledata3);

      let tabledata4 = document.createElement("td");
      tabledata4.textContent = i.department;
      tablerow2.appendChild(tabledata4);

      let tabledata5 = document.createElement("td");
      tabledata5.textContent = i.email;
      tablerow2.appendChild(tabledata5);

      let tabledata6 = document.createElement("td");
      tabledata6.textContent = i.phone;
      tablerow2.appendChild(tabledata6);
    }
  }

  console.log(event);
};
