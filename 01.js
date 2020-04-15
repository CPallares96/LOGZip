const r_usuario = document.getElementById("r_usuario");
const r_contrasena = document.getElementById("r_contrasena");
const btnInsert = document.getElementById('btnInsert');
const btnCheck = document.getElementById('btnCheck');

btnInsert.onclick = function() {
    localStorage.setItem("r_usuario", r_usuario.value);
    localStorage.setItem("r_contrasena", r_contrasena.value);
};

btnCheck.onclick = function() {

    const storedUser = localStorage.getItem("r_usuario");
    const storedPassword = localStorage.getItem("r_contrasena");

    const userName = document.getElementById("inp_usuario");
    const userPassword = document.getElementById("inp_contrasena");
    console.log(userName.value);
    console.log(userPassword.value);

    console.log(storedUser);
    console.log(userPassword.value);

    if (userName.value == storedUser && userPassword.value == storedPassword) {
        alert('Ingreso exitoso');
        window.location.href = "https://cpallares96.github.io/CRUDZip/";

    } else {
        alert('Usuario o contraseña invalida');
    }
};