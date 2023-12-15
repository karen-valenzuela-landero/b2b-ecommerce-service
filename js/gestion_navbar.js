const userLogged = JSON.parse(localStorage.getItem("user"));

window.addEventListener("load", function(){  
    let navbar = document.getElementById("navbar");
    let navigation = `
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div id="navbar-container" class="container-fluid">
            <a class="navbar-brand" href="./gestion.html">
              <img src="./src/free-logo-space.jpg" alt="Logo AMR">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" 
            aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Bienvenido ${userLogged['nombre']}</h5>
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
                    <a class="nav-link" href="./gestion.html">
                      <i class="fa-solid fa-square-poll-vertical" style="color: #294bf3;"></i>
                      Dashboard</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./gestion_servicios.html">
                      <i class="fa-brands fa-servicestack" style="color: #294bf3;"></i>
                      Gestión de Servicios</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./registro.html">
                    <i class="fa-solid fa-user-plus" style="color: #294bf3;"></i>
                      Registrar Nuevo Usuario</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./profile.html">
                      <i class="fa-regular fa-address-card" style="color: #294bf3;"></i>
                      Perfil</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" id="logout">
                      <i class="fa-solid fa-right-from-bracket fa-fade" style="color: #294bf3;"></i>
                      Cerrar Sesión</a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </nav>  
      `;
    navbar.insertAdjacentHTML("afterbegin",navigation);
    
    var logout = document.getElementById("logout");
    logout.addEventListener("click", function(event){  
        event.preventDefault();
        localStorage.setItem("user", "");
        location.href ='./index.html';
    });//logout

});//load Navbar
