let $alert_container = document.getElementById("alert-container");
let $service_name = document.getElementById("service_name");
let $service_description = document.getElementById("service_description");
let btnImageUpload = document.getElementById("filebutton");
let btnsubmit = document.getElementById("submit");
let services = new Array();
let infowidget;

console.log($alert_container);
//Cloudinary
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dz4ctdoqw', 
    uploadPreset: 'my-preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        infowidget = result.info; //test
        console.log(infowidget);  //test
        return infowidget;  //test
    }
    }
  )
  btnImageUpload.addEventListener("click", function(e){
    e.preventDefault();
    myWidget.open();
}, false);

//Submit Data
btnsubmit.addEventListener("click", function(event){
    event.preventDefault();
    let isValid = true;
    let message = "";
    cleanWarnings();
    
    if ($service_name.value.length < 10){
        console.log("nomb: "+$service_name.value.length);//test
        message = "El nombre debe tener más de 10 caracteres";
        warningAlert($service_name, message);
        isValid=false;
    }   //$service_name < 10
    if ($service_description.value.length < 20){
        console.log("desc: "+$service_description.value.length); //test
        message = "La descripción debe tener más de 20 caracteres";
        warningAlert($service_description, message);
        isValid=false;
    }   //$service_description < 20
    if(infowidget == "")  {   
        console.log("btnimg: "+btnImageUpload.value);//test
        console.log("cloudinary: "+infowidget);//test
        message = "Por favor seleccione una imagen";
        warningAlert(btnImageUpload, message);
        return false;
    }

    if (isValid){
        console.log("nomb: "+$service_name.value.length);
        console.log("desc: "+$service_description.value.length);
        console.log("widget: "+ myWidget);
        console.log("result.info: "+infowidget);

        let service = `{"nombre": "${$service_name.value}",
            "descripción": "${$service_description.value}"
        }`;
        services.push(JSON.parse(service)); //Agrega al array services el JSON de service
        localStorage.setItem("services", JSON.stringify(services)); //Agrega al localStorage el array de servicios en String

        //tests
        /* console.log(typeof service);   //String
        console.log(typeof JSON.parse(service));   //String a Objeto
        console.log(typeof JSON.stringify(JSON.parse(service))); //Objeto a String
        console.log(typeof services);   */   //array de Objetos

        taskcompleted("El Servicio ha sido guardado");
        $service_name.value="";
        $service_description.value="";
        $service_name.focus();
    }
});

function taskcompleted (message){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
}
//type (success, error, warning, info, question )
function popupconfirm(type, title, message){
    Swal.fire({
        icon: type,          //     icon: "error",
        title: title,        //     title: "Oops...",
        text: message       //     text: "Something went wrong!"
      });
}

function cleanWarnings(){
    $alert_container.innerHTML = "";
    $service_name.style.border="";
    $service_description.style.border="";
}

function warningAlert(lblStyled, message){

    lblStyled.style.border="solid thin red";

    let showalert =
        `<div class="alert alert-warning alert-dismissible show" role="alert" id="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="close-warning"></button>
        </div>`;
    $alert_container.insertAdjacentHTML("beforeend",showalert);
    //$alert_container.innerHTML = showalert;
}

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    $alert_container.innerHTML = "";
    $service_name.value="";
    $service_description.value="";
    $service_name.focus();
    $service_name.style.border="";
    $service_description.style.border="";
  
  
  });

//https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-alerts.php
/*  document.addEventListener("DOMContentLoaded", function(){
     var btnCloseWarning = document.getElementById("close-warning");
     var alert = document.getElementById("alert");
     var myAlert = new bootstrap.Alert(alert);

     btnCloseWarning.addEventListener("click", function(){
         myAlert.close();
     });
 }); */