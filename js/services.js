const services_cards = document.getElementById("services_cards")
const services = JSON.parse(localStorage.getItem("services"));

function addCard(cards,service){
    const titulo = service['nombre']
    const img = service['urlImage']
    const descripcion = service['descripción']

    const templateCard = ` 
        <div class="col">
            <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front card text-bg-dark">
                <img src=${img} class="card-img" alt=${titulo}>
                <div class="card-img-overlay">
                    <h5 class="card-title">${titulo}</h5>
                </div>
                </div>
                <div class="flip-card-back">
                <h4> <strong>${titulo}</strong></h4>
                <p class="parrafo">${descripcion}</p>
                </div>
            </div>
            </div>
        </div>

       `;

    cards.innerHTML += templateCard;
}
if(services !== null){
    services.forEach(service => {
        console.log(service);
        addCard(services_cards, service); 
    });//services forEach
} else {
    console.log("No se tienen servicios en el localStorage");
}    

const serv1 = {
    nombre: "Distribución de equipo de cómputo.",
    urlImage: "./src/services/service01.jpg",
    descripción: "Equipo de cómputo centralizado y descentralizado. Infraestructura de redes y accesorios periféricos."
}
addCard(services_cards, serv1)

const serv2 = {
    nombre: "Distribución de licencias de software",
    urlImage: "./src/services/service02.jpg",
    descripción: "Integramos nuestras soluciones con licencias de sistema operativo nivel enterprise (Windows, RHEL). Software de diseño gráfico, arquitectónico y de ingeniería (Autodesk, Adobe)." 
}
addCard(services_cards, serv2)

const serv3 = {
    nombre: "Servicios en la nube.",
    urlImage: "./src/services/service03.jpeg",
    descripción: "Servicios en la nube (Azure, AWS, Google Cloud)." 
}
addCard(services_cards, serv3)

const serv4 = {
    nombre: "Desarrollo de Software a la medida.",
    urlImage: "./src/services/service04.jpg",
    descripción: "Utilizamos metodologías ágiles y alcanzamos un alto nivel de madurez de acuerdo con la certificación internacional CMMi DEV5." 
}
addCard(services_cards, serv4)

const serv5 = {
    nombre: "Servicios finacieros. Arrendamiento",
    urlImage: "./src/services/service05.jpeg",
    descripción: "Esta es la estrategia ideal para la renovación constante de tu infraestructura de TI y amortizar el costo financiero de la inversión inicial." 
}
addCard(services_cards, serv5)

const serv6 = {
    nombre: "Servicios administrados.",
    urlImage: "./src/services/service06.jpg",
    descripción: "Administramos y mantenemos tu red, almacenamiento de datos,seguridad informática, gestión de base de datos y soporte técnico." 
}
addCard(services_cards, serv6)

const serv7 = {
    nombre: "SLA",
    urlImage: "./src/services/service07.jpeg",
    descripción: "Ofrecemos acuerdos de nivel de servicio (SLA) que garantizan un alto rendimiento y disponibilidad de los servicios." 
}
addCard(services_cards, serv7)

const serv8 = {
    nombre: "Diseño de Arquitectura de sistemas",
    urlImage: "./src/services/service08.jpg",
    descripción: "Nos adaptamos a las necesidades y presupuesto de tu organización para planificar estratégicamente la infraestructura de IT, ya sea para cómputo centralizado o cómputo descentralizado." 
}
addCard(services_cards, serv8)

const serv9 = {
    nombre: "Implementación de Software de Caja",
    urlImage: "./src/services/service09.jpg",
    descripción: "Adaptamos software de tipo ERP y CRM a las necesidades de tu empresa." 
}
addCard(services_cards, serv9)

const serv10 = {
    nombre: "Servicios Administrativos de la OnSite",
    urlImage: "./src/services/service10.webp",
    descripción: "Junto con los servicios en la nube, le proveemos del servicio de administración de esta desde su empresa." 
}
addCard(services_cards, serv10)


/*  <div class="col">
            <div class="card">
                <img
                    src=${img}
                    class="card-img-top"
                    alt="${titulo}"
                    style="height: 200px"
                />
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">
                    ${descripcion}
                    </p>
                </div>
            </div>
        </div> */