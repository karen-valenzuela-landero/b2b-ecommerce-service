const servDefault = 10;
const services = JSON.parse(localStorage.getItem("services"));
const servStorage = Object.keys(services).length;
console.log(servStorage);
const dataServices = document.getElementById("dataServices");

const users = JSON.parse(localStorage.getItem("users"));
const usersStorage = Object.keys(users).length;
console.log(usersStorage);
const dataUsers = document.getElementById("dataUsers");

function insertNumServices(){
    let totalServices = servDefault + servStorage;
    console.log(totalServices);
    const numServices = ` ${totalServices} `;
    dataServices.innerHTML = numServices;

}
insertNumServices();

function insertNumUsers(){
    const numUsers = ` ${usersStorage} `;
    dataUsers.innerHTML = numUsers;

}
insertNumUsers();