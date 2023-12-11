function createNavbar (){
    let navbar = document.getElementById("navbar");
    let navigation = `
    <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
    <div id="navbar-container" class="container-fluid">
        <a class="navbar-brand" href="./index.html">
            <img src="./src/logoAMR.png" alt="Logo AMR">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarCollapse" aria-controls="navbarCollapse" 
                aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="./index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./nosotros.html">Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./servicios.html">Servicios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./portafolio.html">Portafolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./blog.html">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./contacto.html">Contáctanos</a>
                </li>
            </ul>
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