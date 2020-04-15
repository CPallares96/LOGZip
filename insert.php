<?php

$correo=$_POST['email'];
$usuario=$_POST['usuario'];
$contrasena=$_POST['contraseNa'];

if (!empty($usuario)|| !empty($contrasena) || !empty($email)) {
    $host="locauser";
    $dbUsername="user";
    $dbPassword="";
    $dbname="zipcar";
}
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    
if (mysqli_connect_error()) {
    die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
}
else {
    $INSERT = "INSERT Into usuario (correo, usuario, contraseNa) values($correo, $usuario, $contrasena)";
    if($conn->query($sql)){
        echo "Registro guardado";
    }
    else{
        echo "Error: ". $sql ."<br>". $conn->error;
    }
    $conn->close();
     
}


?>