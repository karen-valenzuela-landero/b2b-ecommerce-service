let $alert_container = document.getElementById("alert-container");

let btnImageUpload = document.getElementById("upload_widget");
let services = new Array();
let infowidget;
const imgDefault = "./src/upload-image.jpg";
let message ;

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
    service_name.style.border="";
    service_description.style.border="";
    btnUploadWidget.style.border="";
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

//Cloudinary
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dz4ctdoqw', 
    uploadPreset: 'my-preset'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info); 
            document.getElementById("uploadedimage").setAttribute("src", result.info.secure_url);
        }
    }
);

btnUploadWidget.addEventListener("click", function(e){
    e.preventDefault();
    myWidget.open();
}, false);

function validateService(service_name, service_description, uploadedimage){
    if (service_name.value.length < 10){
        console.log("nomb: "+service_name.value.length);//test
        message = "El nombre debe tener más de 10 caracteres";
        warningAlert(service_name, message);
        return false;
    }   
    if (service_description.value.length < 20){
        console.log("desc: "+service_description.value.length); //test
        message = "La descripción debe tener más de 20 caracteres";
        warningAlert(service_description, message);
        return false;
    }   
    if(uploadedimage.getAttribute("src") == "" || uploadedimage.getAttribute("src") == imgDefault)  {   
        console.log("img url: "+uploadedimage.getAttribute("src"));//test
        message = "Por favor seleccione una imagen";
        warningAlert(btnUploadWidget, message);
        return false;
    }
    return true;
}//validateService

btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    cleanWarnings();
    const $service_name = document.getElementById("service_name");
    const $service_description = document.getElementById("service_description");
    const $uploadedimage = document.getElementById("uploadedimage");
    const isValid = validateService($service_name, $service_description, $uploadedimage);
    
    if (isValid){
        console.log("nomb: "+$service_name.value.length);
        console.log("desc: "+$service_description.value.length);
        console.log("img url: "+ $uploadedimage.getAttribute("src"));

        let service = `{"nombre": "${$service_name.value}",
            "descripción": "${$service_description.value}"
            }`; //,"imagen": "${$uploadedimage.value.secure_url}"
        services.push(JSON.parse(service)); //Agrega al array services el JSON de service
        localStorage.setItem("services", JSON.stringify(services)); //Agrega al localStorage el array de servicios en String

        taskcompleted("Servicio registrado correctamente");
        $service_name.value="";
        $service_description.value="";
        $service_name.focus();
        $uploadedimage.src = imgDefault;
    }
});//btnSubmit



btnClear.addEventListener("click", function(event){
    event.preventDefault();
    $alert_container.innerHTML = "";
    service_name.value="";
    service_description.value="";
    service_name.focus();
    service_name.style.border="";
    service_description.style.border="";
    uploadedimage.src = imgDefault;
});
