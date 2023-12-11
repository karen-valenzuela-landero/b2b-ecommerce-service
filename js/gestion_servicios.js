const $alert_container = document.getElementById("alert-container");
const imgDefault = "./src/upload-image.jpg";
let services = new Array();
let message ;

function taskcompleted (message){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
}//taskCompleted

function popupconfirm(type, title, message){
    Swal.fire({
        icon: type,          //     icon: "error",
        title: title,        //     title: "Oops...",
        text: message       //     text: "Something went wrong!"
      });
}   //type (success, error, warning, info, question )

function cleanWarnings(){
    $alert_container.innerHTML = "";
    service_name.style.border="";
    service_description.style.border="";
    btnUploadWidget.style.border="";
}//cleanWarnings

function warningAlert(lblStyled, message){
    lblStyled.style.border="solid thin red";
    let showalert =
        `<div class="alert alert-warning alert-dismissible show" role="alert" id="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="close-warning"></button>
        </div>`;
    $alert_container.insertAdjacentHTML("beforeend",showalert);
    //$alert_container.innerHTML = showalert;
}//warningAlert

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dz4ctdoqw', 
    uploadPreset: 'my-preset'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info); 
            document.getElementById("uploadedimage").setAttribute("src", result.info.secure_url);
        }
    }
);//Cloudinary Widget

btnUploadWidget.addEventListener("click", function(e){
    e.preventDefault();
    myWidget.open();
}, false);//Cloudinary button

function validateService(service_name, service_description, urlImage){
    if (service_name.value.trim().length < 10){
        console.log("nomb: "+service_name.value.length);//test
        message = "El nombre debe tener más de 10 caracteres";
        warningAlert(service_name, message);
        return false;
    }   
    if (service_description.value.trim().length < 20){
        console.log("desc: "+service_description.value.length); //test
        message = "La descripción debe tener más de 20 caracteres";
        warningAlert(service_description, message);
        return false;
    }   
    if(urlImage == "" || urlImage == imgDefault)  {   
        console.log("img url: "+urlImage);//test
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
    const urlImage = $uploadedimage.getAttribute("src");
    const isValid = validateService($service_name, $service_description, urlImage);
    
    if (isValid){
        console.log("nomb: "+$service_name.value.length);
        console.log("desc: "+$service_description.value.length);
        console.log("img url: "+ urlImage);

        let service = `{"nombre": "${$service_name.value}",
            "descripción": "${$service_description.value}",
            "urlImage": "${urlImage}"
            }`; //
        services.push(JSON.parse(service)); //Agrega al array services el JSON de service
        console.log(services);
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
});//btnClear

function loadServices(servicerow){
    console.log("TEST: Entra al loadServices JS");
    let servicios;
    const URL_MAIN='/api/servicios/'; 
    fetch(URL_MAIN,{
        method:'get'
        }).then( function(response){
        response.json()
        .then(function (res){
            console.log("TEST: En fetch");
            console.log(res);
            console.log(res.length);
            servicios=res;
            localStorage.setItem("total_services", res.length);
            Array.from(res).forEach((p,index)=>{
                servicerow.innerHTML += ` 
                <tr>
                    <th class"rowId" scope="row">${p.id}</th>
                    <td class="rowName">${p.nombre}</td>
                    <td class="rowDesc">${p.descripcion}</td>
                    <td class="rowImg">${p.imagen}</td>
                </tr>`;
            }); //for each
        }); //then
        }).catch(function(error){
            console.log("Problema en el JSON", error)
    });
        console.log(document.getElementById("cards_servicios"));      
}//loadServices

window.addEventListener("load", function(){
    let servicerow = document.getElementById("services-table");
    loadServices(servicerow); 
});//onLoad

let refresh = document.getElementById("refresh-icon");
refresh.addEventListener("click", function(event){
    event.preventDefault();
    let servicerow = document.getElementById("services-table");
    loadServices(servicerow); 
});//btnRefresh