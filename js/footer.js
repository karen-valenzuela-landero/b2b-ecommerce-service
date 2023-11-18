function createFooter (){
    let footer = document.getElementById("footer");
    let navigation = `
    <div class="container">
        <div class="footer-row">
            <div class="footer-links">
                <h4>Compañía</h4>
                <ul>
                    <li><a href="./nosotros.html">Nosotros</a></li>
                    <li><a href="./servicios.html">Nuestros servicios</a></li>
                    <li><a href="./contacto.html">Contacto</a></li>
                </ul> <br />
                <h4><a href="./administradores.html" id="admin">Administradores</a></h4>
            </div>
            <div class="footer-links">
                <h4>Contáctanos</h4>
                <ul>
                    <li><a href="#">+52 5543604500</a></li>
                    <li><a href="#">hello@myemail.com</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Horarios</h4>
                <ul>
                    <li><a href="#">09:00 a 18:00 hrs</a></li>
                    <li><a href="#">(Sunday Closed)</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Redes Sociales</h4>
                <div class="social-link">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/soluciones-integrales-amr/"><i class="fab fa-linkedin"></i></a>
                </div> <br />
                <h4>Desarrollado por</h4>
                <ul>
                    <li><a href="./magicsoft.html">MagicSoft</a></li>
                </ul>
            </div>
        </div>
    </div>  
    `;
    footer.insertAdjacentHTML("afterbegin",navigation);
}

createFooter();

admin.addEventListener("click", function(event){
    event.preventDefault();
    //imagen.style.visibility = "visible";
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

        taskcompleted("El Servicio ha sido guardado");
        $service_name.value="";
        $service_description.value="";
        $service_name.focus();
        imagen.src = imgDefault;
        //imagen.style.visibility = "hidden";
    }
});