function createNavbar (){
    let navbar = document.getElementById("navbar");
    let navigation = `
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <div id="navbar-container" class="container-fluid">
                <a class="navbar-brand" href="./login.html">
                    <img src="./src/logoAMR.png" alt="Logo AMR">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link" href="./index.html">
                                    <i class="fa-solid fa-house" style="color: #294bf3;"></i>
                                    Ir a Página Principal</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./login.html">
                                    <i class="fa-solid fa-right-to-bracket" style="color: #294bf3;"></i>
                                    Iniciar Sesión</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./registro.html">
                                    <i class="fa-solid fa-user-plus" style="color: #294bf3;"></i>
                                    Registrarse</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>    
        `;
    navbar.insertAdjacentHTML("afterbegin",navigation);
}
createNavbar();

document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});//nav-link active

/* const userLogged = localStorage.getItem("user");
window.addEventListener("load", function(event){  
    if(userLogged == "" || userLogged==null){
        location.href ='./login.html';
    }else{
        location.href ='./gestion.html';
    }
});//validate logged */

