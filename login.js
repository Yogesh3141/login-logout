function linkpage() {
    window.open("file:///E:/login/index.html");
  }

  let Email = document.getElementById("email");
  let pwd = document.getElementById("password");
  let login = document.getElementById("login");


  login.addEventListener("click",(e) => {
    e.preventDefault();
    gmailvalidation();
    pwdvalidation();

    let usermail = Email.value.trim();
    let user_pwd = pwd.value.trim();

    // let Userinfo = {
    //   usermail: usermail,
    //   user_password: user_pwd,
    // }; 

    const data = JSON.parse(localStorage.getItem("user"));

    // localStorage.setItem("User_info", JSON.stringify(Userinfo));

    //console.log(data);

    for(i=0; i<data.length; i++){
      if(data[i].Mail === usermail && data[i].PWD  === user_pwd){
        window.open("file:///E:/login/database.html");
      }
      else{
        document.getElementById("loginError").innerHTML = "*IN-Valid User";
      
      }
     
    }
  });

  //validation
  function gmailvalidation() {

    let mailer = document.getElementById("emailError");
    let intmail = document.getElementById("email");
    let validregx =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (Email.value == "") {
      mailer.innerHTML = "*Fill this filed";
      intmail.style.border = "1px solid red";
     
    } 
    else if (!(validregx.test(Email.value.trim()))) {
      mailer.innerHTML = "*invalid email";
      intmail.style.border = "1px solid red";
  
    }
    else{
        mailer.innerHTML = "";
        intmail.style.border = "1px solid green";
    }
  }
  function pwdvalidation(){

       let pwder = document.getElementById("pwdError");
       let inpwd = document.getElementById("password");
       let validpwd =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
       
       if(pwd.value === ""){
          pwder.innerHTML = "*Fill this filed";
          inpwd.style.border = "1px solid red";

       }
       else if(!validpwd.test(pwd.value.trim())){
        pwder.innerHTML = "*invalid password";
        inpwd.style.border = "1px solid red";

       }
       else{
          pwder.innerHTML = "";
          inpwd.style.border = "1px solid green";

       }
  }