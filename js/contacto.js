//SEND EMAIL FROM CONTACT FORM

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('4KBe--5Op9om1VvvF');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = validaciones();
        if(isValid){
          let form = document.getElementById("contact-form");
          // these IDs from the previous steps
          emailjs.sendForm('service_w2y4zyc', 'contact-template', form)
              .then(function() {
                  console.log('SUCCESS!');
                  const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                    Toast.fire({
                      icon: 'success',
                      title: 'Sus datos fueron enviados correctamente. Pronto nos pondremos en contacto con usted.'
                    })
              }, function(error) {
                  console.log('FAILED...', error);
                  const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                    Toast.fire({
                      icon: 'error',
                      title: 'Ocurrió un error al enviar sus datos. Intente de nuevo por favor.'
                    })
              });
        } 
    });
}

function validaciones(){
  const contact_name = document.getElementById("contact_name").value;
  const contact_company = document.getElementById("contact_company").value;
  const contact_email = document.getElementById("contact_email").value;
  const contact_phone = parseInt(document.getElementById("contact_phone").value);
  const contact_message = document.getElementById("contact_message").value;
  const contact_service = document.getElementById("contact_service"); 
  const service_value = contact_service.options[contact_service.selectedIndex].value;
  const service_text = contact_service.options[contact_service.selectedIndex].text;
  console.log(service_value,service_text );

  console.log(`${contact_name} length:${contact_name.length} es tipo ${typeof(contact_name)}, 
  ${contact_company} length:${contact_company.length} es tipo ${typeof(contact_company)}, 
  ${contact_email} length:${contact_email.length} es tipo ${typeof(contact_email)},
  ${contact_phone} length:${contact_phone.toString().length} es tipo ${typeof(contact_phone)},
  ${service_value} length:${service_value.length} es tipo ${typeof(service_value)},
  ${service_text} length:${service_text.length} es tipo ${typeof(service_text)},
  ${contact_message} length:${contact_message.length} es tipo ${typeof(contact_message)} `);

  let msg_error;
  if (contact_name.length < 10) {
    msg_error="El nombre del contacto debe tener más de 10 caracteres";
    showErrorMessage(msg_error);
    return false;
  }
  if (contact_company.length < 10) {
    msg_error="La Razón Social debe tener más de 10 caracteres";
    showErrorMessage(msg_error);
    return false;
  }
  //Reference: https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
  let mailRegEx = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
  if (mailRegEx.test(contact_email) || contact_email.length < 10) {
    msg_error="El formato del correo es incorrecto";
    showErrorMessage(msg_error);
    return false;
  }
  if (isNaN(contact_phone) || contact_phone.toString().length != 10) {
    msg_error = "El número telefónico debe ser de 10 números";
    showErrorMessage(msg_error);
    return false;
  }
  if (service_value == 0) {
    msg_error="Por favor selecciona una opción";
    showErrorMessage(msg_error);
    return false;
  }
  if (contact_message.length < 20) {
    msg_error="El mensaje debe contener al menos 20 caracteres";
    showErrorMessage(msg_error);
    return false;
  }
  
  return true;

}

function showErrorMessage(msg_error){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'error',
    title: msg_error
  })
}