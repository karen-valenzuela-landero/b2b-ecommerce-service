const services = JSON.parse(localStorage.getItem("services"));
const dataServices = document.getElementById("dataServices");
if (services == null) {
    console.log("No hay servicios registrados en localstorage");
    var total = "0";
    insertNumServices(total);
}else{
    insertNumServices(services.length);
}
function insertNumServices(totalServices){
    const numServices = ` ${totalServices} `;
    dataServices.innerHTML = numServices;
}


const users = JSON.parse(localStorage.getItem("users"));
const dataUsers = document.getElementById("dataUsers");
if (users == null) {
    console.log("No hay usuarios registrados en localstorage");
    var total = "0";
    insertNumUsers(total);
}else{
    insertNumUsers(users.length);
}
function insertNumUsers(totalAdmins){
    const numUsers = ` ${totalAdmins} `;
    dataUsers.innerHTML = numUsers;
}


const cotiz = JSON.parse(localStorage.getItem("cotiz"));
const dataCotiz = document.getElementById("dataCotizaciones");
if (cotiz == null) {
    console.log("No hay cotizaciones registrados en localStorage");
    var total = "0";
    insertNumCotiz(total);
}else{
    insertNumCotiz(cotiz.length);
}
function insertNumCotiz(totalCotiz){
    const numCotiz = ` ${totalCotiz} `;
    dataCotiz.innerHTML = numCotiz;
}


window.addEventListener("load",  function(){
    let cotizrow = document.getElementById("cotiz-table");
    let id = 0;
    if (cotiz != null) {
        cotiz.forEach(p => {
            id= id + 1;
            cotizrow.innerHTML += ` 
            <tr>
                <th class"rowId" scope="row">${id}</th>
                <td >${p.empresa}</td>
                <td >${p.nombre}</td>
                <td >${p.email}</td>
                <td >${p.telefono}</td>
                <td >${p.mensaje}</td>
            </tr>`;
        });
    }      
    
});//onLoad