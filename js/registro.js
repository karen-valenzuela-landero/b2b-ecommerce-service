const signupAlert = document.getElementById("signup-alert-container");
let msj_error;
let users; 

const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
const emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
const passRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
/*Especificaciones: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial*/

function showErrorMessage (signAlert, lblError, msj_error){
  lblError.style.border="solid thin red";
  let showAlert = 
    `<div class="alert alert-warning alert-dismissible show" role="alert" id="alert">
    ${msj_error}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="close-warning"></button> </div>`;
    signAlert.insertAdjacentHTML("beforeend",showAlert);
    signAlert.focus();
}//showErrorMessage

function cleanSignupWarnings(){
  signupAlert.innerHTML = "";
  suName.style.border="";
  suPhone.style.border="";
  suEmail.style.border="";
  suPass.style.border="";
  suRepPass.style.border="";
}//cleanSignupWarnings

function cleanSignUpForm(){
    suName.value="";
    suPhone.value="";
    suEmail.value="";
    suPass.value="";
    suRepPass.value="";
    suName.style.border="";
    suPhone.style.border="";
    suEmail.style.border="";
    suPass.style.border="";
    suRepPass.style.border="";
    suName.focus();
}//cleanSignUpForm

function taskcompleted (message){
  Swal.fire({
      position: "top-end",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
}//task completed

function validateSignup(name,phone,email,pass,repPw) {  
  if (name.value.trim().length < 10) {
    msj_error = "Por favor, escribe tu nombre completo. Debe tener más de 10 caracteres.";
    showErrorMessage(signupAlert, name, msj_error);
    return false;
  } 
  if(!phoneRegEx.test(phone.value) || parseInt(phone.value).toString().length != 10){
      console.log(parseInt(phone.value));  
      msj_error="Por favor, verifica tu teléfono. El formato correcto es '7866235685'.";
      showErrorMessage(signupAlert, phone, msj_error);
      return false;
  }
  if(!emailRegEx.test(email.value)|| email.value.trim().length < 8){
      msj_error="Por favor, verifica tu correo electrónico. El formato correcto es 'usuario@dominio.com'.";
      showErrorMessage(signupAlert, email, msj_error);
      return false;
  }
  if(!passRegEx.test(pass.value)){
      msj_error="La contraseña debe contener: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial (#?!@$ %^&*-).";
      showErrorMessage(signupAlert, pass, msj_error);
      return false;
  }
  if (repPw.value.trim() !== pass.value.trim()) {
    msj_error = "Por favor, verifica tu contraseña.";
    showErrorMessage(signupAlert, repPw, msj_error);
    return false;
  } 
  return true;
}//validateSignup

btnSignUp.addEventListener("click", function(event){
  event.preventDefault();
  cleanSignupWarnings();
  let $name = document.getElementById("suName");
  let $phone = document.getElementById("suPhone");
  let $email = document.getElementById("suEmail");
  let $pass = document.getElementById("suPass");
  let $repPw = document.getElementById("suRepPass");
  const isValid = validateSignup($name,$phone,$email,$pass,$repPw);
  
  if (isValid){
    users = localStorage.getItem("users");
    users = users==null ? new Array() : JSON.parse("users");
    let newUser = `{"nombre": "${$name.value}","teléfono": "${$phone.value}",
      "email": "${$email.value}", "contraseña": "${$pass.value}"}`;

    users.push(JSON.parse(newUser));//TODO: CHANGE to Fetch method POST
    localStorage.setItem("users", JSON.stringify(users));//TODO: CHANGE to Fetch method POST

    taskcompleted("Usuario registrado correctamente");
    cleanSignUpForm();
  }//isValid
});//btnSignup