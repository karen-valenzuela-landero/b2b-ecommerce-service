const user = JSON.parse(localStorage.getItem("user"));

window.addEventListener("load", function(){
    
    let nameAdmin = document.getElementById("userName")
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    nameAdmin.innerHTML = user['nombre'];
    
    let inputHTMLPhone = `<input class="form-control" type="text" name="phoneInput" id="phoneInput" value="${user['teléfono']}" autocomplete="off" readonly>`
    phone.innerHTML += inputHTMLPhone;
    
    let inputHTMLEmail = `<input class="form-control" type="text" name="emailInput" id="emailInput" value="${user['email']}" autocomplete="off" readonly>`
    email.innerHTML += inputHTMLEmail;
    
    let inputHTMLPass = `<input class="form-control" type="password" name="passInput" id="passInput" value="${user['contraseña']}" autocomplete="off" readonly>`
    pass.innerHTML += inputHTMLPass;
});//onLoad

