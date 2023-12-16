const submit = document.getElementById("submit");
const clean = document.getElementById("clean");
const $alert_container = document.getElementById("alert-container");
const emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
let message;
const cotiz = new Array();

function taskcompleted (stateMail, message){
  Swal.fire({
      position: "top-end",
      icon: stateMail,
      title: message,
      showConfirmButton: false,
      timer: 1500
    });

  contact_name.value="";
  contact_company.value="";
  contact_email.value="";
  contact_phone.value="";
  contact_message.value="";
  service_value="0";
}//taskCompleted

function cleanWarnings(){
  $alert_container.innerHTML = "";
  contact_name.style.border="";
  contact_company.style.border="";
  contact_email.style.border="";
  contact_phone.style.border="";
  contact_message.style.border="";
  contact_service.style.border="";
}//cleanWarnings

function cleanForm(){
  contact_name.style.border="";
  contact_company.style.border="";
  contact_email.style.border="";
  contact_phone.style.border="";
  contact_message.style.border="";
  contact_service.style.border="";
  contact_name.value="";
  contact_company.value="";
  contact_email.value="";
  contact_phone.value="";
  contact_message.value="";
  contact_service.value="0";
  contact_company.focus();
}//clean Form

function showErrorMessage (lblError, msj_error){
  lblError.style.border="solid thin red";
  let showAlert = 
    `<div class="alert alert-warning alert-dismissible show" role="alert" id="alert">
    ${msj_error}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="close-warning"></button> </div>`;
    $alert_container.insertAdjacentHTML("beforeend",showAlert)
    $alert_container.focus();
}//showErrorMessage

function validateContact(contact_name, contact_company, contact_email, contact_phone, contact_message, service_value){
  
  /* console.log(`${contact_name.value} length:${contact_name.value.length} es tipo ${typeof(contact_name.value)}, 
  ${contact_company.value} length:${contact_company.value.length} es tipo ${typeof(contact_company.value)}, 
  ${contact_email.value} length:${contact_email.value.length} es tipo ${typeof(contact_email.value)},
  ${contact_phone.value} length:${contact_phone.value.toString().length} es tipo ${typeof(parseInt(contact_phone.value))},
  ${service_value} length:${service_value.length} es tipo ${typeof(service_value)},
  ${contact_message.value} length:${contact_message.value.length} es tipo ${typeof(contact_message.value)} `);
 */
  if (contact_company.value.trim().length < 10) {
    message="La Razón Social debe tener más de 10 caracteres";
    showErrorMessage(contact_company, message);
    return false;
  }
  if (contact_name.value.trim().length < 10) {
    message = "Por favor, escribe tu nombre completo. El nombre del contacto debe tener más de 10 caracteres.";
    showErrorMessage(contact_name, message);
    return false;
  }
  // if(isNaN(parseInt(contact_phone.value)) || parseInt(contact_phone.value).length != 10) {
  if (!phoneRegEx.test(contact_phone.value) || parseInt(contact_phone.value).toString().length != 10){
    //console.log(parseInt(contact_phone.value), contact_phone.value.length);
    message = "Por favor, verifica tu teléfono. El formato correcto es '7866235685'.";
    showErrorMessage(contact_phone, message);
    return false;
  }
  if (!emailRegEx.test(contact_email.value) || contact_email.value.trim().length < 8) {
    message="Por favor, verifica tu correo electrónico. El formato correcto es 'usuario@dominio.com'.";
    showErrorMessage(contact_email, message);
    return false;
  }
  if (service_value == "0") {
    message="Por favor, selecciona una opción";
    showErrorMessage(contact_service, message);
    return false;
  }
  if (contact_message.value.trim().length < 20) {
    message="El mensaje debe contener al menos 20 caracteres";
    showErrorMessage(contact_message, message);
    return false;
  }
  return true;
}//validateContact

const serviceID = 'service_w2y4zyc';
const templateID = 'contact-template';

submit.addEventListener("click", function(event) {
    event.preventDefault();
    cleanWarnings();
    const contact_name = document.getElementById("contact_name");
    const contact_company = document.getElementById("contact_company");
    const contact_email = document.getElementById("contact_email");
    const contact_phone = document.getElementById("contact_phone");
    const contact_message = document.getElementById("contact_message");
    const contact_service = document.getElementById("contact_service"); 
    const service_value = contact_service.options[contact_service.selectedIndex].value;
    const service_text = contact_service.options[contact_service.selectedIndex].text;
    //console.log(service_value,service_text );//
    const isValid = validateContact(contact_name, contact_company, contact_email, contact_phone, contact_message, service_value);

    let company = contact_company.value;
    let nombre = contact_name.value;
    let phone = contact_phone.value;
    let email = contact_email.value;
    let message = contact_message.value;

    if(isValid){

      (function() {
        emailjs.init('4KBe--5Op9om1VvvF');
      })();

      let form = document.getElementById("contact-form");
      emailjs.sendForm(serviceID, templateID, form)
          .then(function() {
              console.log('SUCCESS!');
              taskcompleted( "success", "Cotización enviada correctamente");
              cleanForm();

              addContizToLocalStorage(nombre, company, email, phone, message, service_value);

          }, function(error) {
              console.log('FAILED...', error);
              taskcompleted( "error", "Falla en el servidor. Inténtelo de nuevo");
          });//emailJS
    }//if is valid 
});//SUBMIT addEvenListener


function addContizToLocalStorage(contact_name, contact_company, contact_email, contact_phone, contact_message, service_value){
    const cotiz = JSON.parse(localStorage.getItem("cotiz"));
    let newCotiz = `{"empresa": "${contact_company}","nombre": "${contact_name}",
      "email": "${contact_email}", "telefono": "${contact_phone}", "mensaje": "${contact_message}",
      "servicio": "${service_value}"}`;
    if (cotiz == null ) {
      cotiz=[];
    }
    cotiz.push(JSON.parse(newCotiz));//TODO: CHANGE to Fetch method POST
    localStorage.setItem("cotiz", JSON.stringify(cotiz));//TODO: CHANGE to Fetch method POST
}

/* clean.addEventListener('click', function (event) {
  event.preventDefault();
  cleanForm();
});//CLEAN addEvenListener  */