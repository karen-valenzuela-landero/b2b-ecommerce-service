function createNavbar (){
    let navbar = document.getElementById("navbar");
    let navigation = `
        <nav class="navbar navbar-expand-lg navbar-dark justify-content-between" id="navbar" >
        <div class="container">
            <a class="navbar-brand" href="./index.html">
                <img src="./src/logoAMR.png" alt="Logo AMR" width="80" height="80">
            </a>
        </div>
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
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
        </div>
        </nav>    
    `;
    navbar.insertAdjacentHTML("afterbegin",navigation);
}

createNavbar();