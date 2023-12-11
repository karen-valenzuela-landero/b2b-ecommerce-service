const totalServices = localStorage.getItem("total_services");
const dataServices = document.getElementById("dataServices");
if (totalServices == null) {
    console.log("No hay servicios registrados en localstorage");
    var total = "0";
    insertNumServices(total);
}else{
	console.log("total de servicios: ",totalServices);
    insertNumServices(totalServices);
}
function insertNumServices(totalServices){
    console.log("insertando:",totalServices);
    const numServices = ` ${totalServices} `;
    dataServices.innerHTML = numServices;
}


const totalAdmins = localStorage.getItem("total_admins");
const dataUsers = document.getElementById("dataUsers");
if (totalAdmins == null) {
    console.log("No hay usuarios registrados en localstorage");
    var total = "0";
    insertNumUsers(total);
}else{
	console.log("total de servicios: ",totalAdmins);
    insertNumUsers(totalAdmins);
}
function insertNumUsers(totalAdmins){
	console.log("insertando:",totalAdmins);
    const numUsers = ` ${totalAdmins} `;
    dataUsers.innerHTML = numUsers;
}




const totalCotiz = localStorage.getItem("total_cotizaciones");
const dataCotiz = document.getElementById("dataCotizaciones");
if (totalCotiz == null) {
    console.log("No hay cotizaciones registrados en la bd");
    var total = "0";
    insertNumCotiz(total);
}else{
	console.log("total de cotizaciones: ",totalCotiz);
    insertNumCotiz(totalCotiz);
}
function insertNumCotiz(totalCotiz){
	console.log("insertando:",totalCotiz);
    const numCotiz = ` ${totalCotiz} `;
    dataCotiz.innerHTML = numCotiz;
}