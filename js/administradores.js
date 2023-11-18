const alert = document.getElementById("alert-container");
let msj_error;

const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
const emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
const passRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
/*Especificaciones: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial*/

function showErrorMessage (msj_error){
  let showAlert = 
    `<div class="alert alert-warning alert-dismissible show" role="alert" id="alert">
    ${msj_error}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="close-warning"></button> </div>`;
  alert.insertAdjacentHTML("beforeend",showAlert)
  alert.focus();
}//showErrorMessage

function taskcompleted (message){
  Swal.fire({
      position: "top-end",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
}//task completed
 
function validateLogin(mailLogin, passLogin) {
  if(!emailRegEx.test(mailLogin) || mailLogin.length < 6){
      msj_error="Por favor, verifica tu correo electrónico";
      showErrorMessage(msj_error);
      return false;
  }
  if(!passRegEx.test(passLogin)){
      msj_error="La contraseña debe contener: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial (#?!@$ %^&*-).";
      showErrorMessage(msj_error);
      return false;
  }
  return true;
}//validateLogin

btnLogin.addEventListener("click", function(event){
  event.preventDefault();
  alert.innerHTML = "";
  const mailLogin = document.getElementById("mailLogin").value;
  const passLogin = document.getElementById("passLogin").value;
  const isValid = validateLogin(mailLogin, passLogin);

  if (isValid){
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const user = storedUsers.find((person) => person.email == mailLogin);
    console.log(typeof user, user );//
    if(user == undefined){
      msj_error="No existe usuario registrado con este correo";
      showErrorMessage(msj_error);
      console.log("MailNotFound:", msj_error, mailLogin);
    } else {
      if ( user.contraseña !== passLogin) {
        msj_error="Contraseña Incorrecta";
        showErrorMessage(msj_error);
        console.log("IncorrectPassword:", msj_error, passLogin);
      } else {
        console.log("Correcto");
        localStorage.setItem("user", mailLogin);
        localStorage.setItem("pass", passLogin);
        location.href ='./gestion_servicios.html';
      }// if pass check
    }// if user empty
  }// isValid
});//btnLogin

function validateSignup($name,$phone,$email,$pass,$repPw) {  
  if ($name.length < 7) {
    msj_error = "Por favor escribe tu nombre completo";
    showErrorMessage(msj_error);
    return false;
  }
  if(!phoneRegEx.test($phone) ){
      msj_error="El formato del teléfono es incorrecto";
      showErrorMessage(msj_error);
      return false;
  }
  if(!emailRegEx.test($email)|| $email.length < 6){
      msj_error="Por favor, verifica tu correo electrónico";
      showErrorMessage(msj_error);
      return false;
  }
  if(!passRegEx.test($pass)){
      msj_error="La contraseña debe contener: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial (#?!@$ %^&*-).";
      showErrorMessage(msj_error);
      return false;
  }
  if ($repPw !== $pass) {
    msj_error = "Verifica tu contraseña";
    showErrorMessage(msj_error);
    return false;
  } 
  return true;
}//validateSignup

const users = new Array(); 
btnSignUp.addEventListener("click", function(event){
  event.preventDefault();
  alert.innerHTML = "";
  let $name = document.getElementById("suName");
  let $phone = document.getElementById("suPhone");
  let $email = document.getElementById("suEmail");
  let $pass = document.getElementById("suPass");
  let $repPw = document.getElementById("suRepPass");
  const isValid = validateSignup($name.value,$phone.value,$email.value,$pass.value,$repPw.value);

  if (isValid){
    let newUser = `{"nombre": "${$name.value}","teléfono": "${$phone.value}",
      "email": "${$email.value}", "contraseña": "${$pass.value}"}`;
    users.push(JSON.parse(newUser));
    localStorage.setItem("users", JSON.stringify(users));

    taskcompleted("Usuario registrado correctamente");
    $name.value="";
    $phone.value="";
    $email.value="";
    $pass.value="";
    $repPw.value="";
    $name.focus();
  }//isValid
});//btnSignup