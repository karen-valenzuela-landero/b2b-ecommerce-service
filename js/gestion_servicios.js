let $service_id = document.getElementById("service_id");
let $service_name = document.getElementById("service_name");
let $service_description = document.getElementById("service_description");
let btnImageUpload = document.getElementById("filebutton");
let btnsubmit = document.getElementById("submit");
let data = new Array();

//Cloudinary
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dz4ctdoqw', 
    uploadPreset: 'my-preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )
  btnImageUpload.addEventListener("click", function(e){
    e.preventDefault();
    myWidget.open();
}, false);
// btnImageUpload.onchange = function () {
//     const inputFile = this.files[0]

//     const formData = new FormData()
//     formData.append("file", inputFile)

//     fetch(`377997331566533`, {
//         method: "POST",
//         body: formData,
//     })
//         .then((images) => {
//             console.log(images.url) // here you can save image url into your database
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }


btnsubmit.addEventListener("click", function(event){
    let isValid = true;
    event.preventDefault();

    let type = "";
    let title = "";
    let message = "";

    if ($service_name.value.length < 5){
        type = "error";
        title = "Campo nombre";
        message = "El nombre debe tener más de 5 caracteres";
        popupconfirm(type,title,message);
        isValid=false;
    }//$service_name < 3
    if ($service_description.value.length < 10){
        type = "error";
        title = "Campo Descripción";
        message = "La descripción debe tener más de 10 caracteres";
        popupconfirm(type,title, message);
        isValid=false;
    }//$service_description < 10
    

    if (isValid){
        let service = `{"id" : "${$service_id.value}",
            "nombre": "${$service_name.value}",
            "descripción": "${$service_description.value}"
        }`;
        data.push(JSON.parse(service));
        localStorage.setItem("data", JSON.stringify(data));

        taskcompleted("El Servicio ha sido guardado");
        $service_id.value="";
        $service_name.value="";
        $service_description.value="";
        $service_id.focus();
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
function alerts(message){
    var warningAlert = document.getElementById("warning-alert");
    // Create alert instance
    var myAlert = new bootstrap.Alert(warningAlert);

    btnCloseWarning.addEventListener("click", function(){
        myAlert.close();
    });
}

document.addEventListener("DOMContentLoaded", function(){
    var btnCloseWarning = document.getElementById("close-warning");
    var warningAlert = document.getElementById("warning-alert");

    // Create alert instance
    var myAlert = new bootstrap.Alert(warningAlert);

    btnCloseWarning.addEventListener("click", function(){
        myAlert.close();
    });
});