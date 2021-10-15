<?php
	include "header.php";

	$usuario = $_GET['id'];

	$sql = "delete from usuario where id = ".$usuario.";";
	//echo $sql;


	$res = mysqli_query($con, $sql);
	

	if($res == true ){
		echo 1;
	}else{
		echo 0;
	}

?>