function createNavbar (){
    let navbar = document.getElementById("navbar");
    let navigation = `
    <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
        <a class="navbar-brand" href="./index.html">
            <img src="./src/logoAMR.png" alt="Logo AMR" width="70" height="70">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="./nosotros.html">Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="./servicios.html">Servicios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="./portafolio.html">Portafolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="./blog.html">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="./contacto.html">Contáctanos</a>
                </li>
            </ul>
        </div>
    </nav>   
    `;
    navbar.insertAdjacentHTML("afterbegin",navigation);
}

createNavbar();