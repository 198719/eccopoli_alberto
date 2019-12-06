<?php

$nombre = $_POST['nombre'];
$mensaje = $_POST['mensaje'];
$email = $_POST['email'];


$mailsend = mail ('info@antal-sat.com', 'Desde antal-sat.com', "De: $nombre \r\nMensaje: $mensaje\r\n email: $email\r\n");

if ($mailsend) {header('Location:mensajeok.html');} else {echo "Disculpa, tu mensaje no pudo ser entregado, por favor inténtalo de nuevo más tarde.";} 

?>