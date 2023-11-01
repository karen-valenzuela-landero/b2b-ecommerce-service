//SEND EMAIL FROM CONTACT FORM

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('4KBe--5Op9om1VvvF');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
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
                    title: 'Datos enviados a AMR'
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
                    title: 'Problemas al enviar sus datos. Intente de nuevo'
                  })
            });
    });
}