window.addEventListener("load", function(){
    let footer = document.getElementById("footer");
    let navigation = `
    <div class="container">
        <div class="footer-row">
            <div class="footer-links">
                <h4>Nombre de la empresa</h4>
                <p><a href="./us.html">¿Quiénes somos?</a></p>
                <p><a href="./services.html">Conoce nuestros servicios</a></p>
                <p><a href="./contact.html">Solicita una cotización</a></p>
                <p><a href="./login.html" id="admin">Administradores</a></p>
            </div>
            <div class="footer-links">
                <h4>Contáctanos</h4>
                <p><a href="#"><i class="fa-solid fa-phone" ></i> +52 9991 577 539</a></p>
                <p><a href="#"><i class="fa-solid fa-envelope" ></i> karen.891025@gmail.com</a></li></p>
                <p><a href="#"><i class="fa-solid fa-clock" ></i> 09:00 a 18:00 hrs</a></p>
                <p><a href="#"><i class="fa-solid fa-door-closed" ></i> Cerrado los Domingos</a></p>
            </div>
            <div class="footer-links">
                <h4>Redes Sociales</h4>
                <div class="social-link">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div> <br />
                <h4>Desarrollado por</h4>
                <p><a href="https://karen-valenzuela-landero.github.io/">Karen Valenzuela</a></p>
            </div>
        </div>
    </div>  
    `;
    footer.insertAdjacentHTML("afterbegin",navigation);

    admin.addEventListener("click", function(event){
        event.preventDefault();
        const userLogged = JSON.parse(localStorage.getItem("user"));
        //console.log(userLogged);//
        if (userLogged == "" || userLogged == null) {
            location.href ='./login.html';
        } else{
            location.href ='./gestion.html';
        }
    });//admin EvenListener

});//load footer

