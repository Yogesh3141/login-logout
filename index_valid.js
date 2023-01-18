function linkpage(){
  window.open("file:///E:/login/login.html");
}

let firstname = document.getElementById("fname");
let lastname = document.getElementById("lname");
let dob = document.getElementById("dob");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
const form = document.getElementById("form");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  fNameValidation();
  lNameValidation();
  dobValidation();
  mailvalidation();
  passwordvalidation();
  let fname = firstname.value.trim();
  let lname = lastname.value.trim();
  let db = dob.value.trim();
  let mail = email.value.trim();
  let pwd = password.value.trim();

  let User = {
    FristName: fname,
    LastName: lname,
    DOB: db,
    Mail: mail,
    PWD: pwd,
  };
  
  const arr = JSON.parse(localStorage.getItem("user")) || [];
  arr.push(User);
  //console.log(arr);
  
  if(!(firstname.value === "" || lastname.value === "" || dob.value==="" || email.value ==="" || password.value ==="" )){
    //store data in localhost
    localStorage.setItem("user", JSON.stringify(arr));
    form.innerHTML = "<h1 class = 'text-success text-center'>Thanks!</h1>";
  }

});

//validation
function fNameValidation() {
  let errorfid = document.getElementById("fError");
  let inputfid = document.getElementById("fname");
  let f_letters = /^[A-Za-z]+$/;
  if (firstname.value == "") {
    errorfid.innerHTML = "*Fill this frist name filed";
    inputfid.style.border = "1px solid red";
  } else if (!f_letters.test(firstname.value.trim())) {
    errorfid.innerHTML = "*Only Characters Allow";
    inputfid.style.border = "1px solid red";
  } else {
    errorfid.innerHTML = "";
    inputfid.style.border = "1px solid green";
  }
}
function lNameValidation() {
  let errorlid = document.getElementById("lError");
  let inputlid = document.getElementById("lname");
  let l_letters = /^[A-Za-z]+$/;
  if (lastname.value == "") {
    errorlid.innerHTML = "*Fill this last name filed";
    inputlid.style.border = "1px solid red";
  } else if (!l_letters.test(lastname.value.trim())) {
    errorlid.innerHTML = "*Only Characters Allow";
    inputlid.style.border = "1px solid red";
  } else {
    errorlid.innerHTML = "";
    inputlid.style.border = "1px solid green";
  }
}
function dobValidation() {
  let errdobid = document.getElementById("dobError");
  let intdobid = document.getElementById("dob");
  if (lastname.value == "") {
    errdobid.innerHTML = "*Fill this Date of Birth filed";
    intdobid.style.border = "1px solid red";
  } else {
    errdobid.innerHTML = "";
    intdobid.style.border = "1px solid green";
  }
}
function mailvalidation() {
  let errormailid = document.getElementById("mailError");
  let intemailid = document.getElementById("email");
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value == "") {
    errormailid.innerHTML = "*Fill this Mail filed";
    intemailid.style.border = "1px solid red";
  } else if (!validRegex.test(email.value.trim())) {
    errormailid.innerHTML = "*invalid email";
    intemailid.style.border = "1px solid red";
  } else {
    errormailid.innerHTML = "";
    intemailid.style.border = "1px solid green";
  }
}
function passwordvalidation() {
  let errorpwdid = document.getElementById("pwdError");
  let intpwdid = document.getElementById("password");
  let validpwd =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password.value == "") {
    errorpwdid.innerHTML = "Enter Password";
    intpwdid.style.border = "1px solid red";
  } else if (!validpwd.test(password.value.trim())) {
    errorpwdid.innerHTML = "Enter Valid Password";
    intpwdid.style.border = "1px solid red";
  } else {
    errorpwdid.innerHTML = "";
    intpwdid.style.border = "1px solid green";
  }
}

