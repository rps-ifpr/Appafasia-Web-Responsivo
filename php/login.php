<?php
	include "header.php";

	$email = $_GET['email'];
	$senha = $_GET['senha'];

	$sql = "select id, tipo from usuario where email = '".$email."' and  senha = '".hash('sha512', $senha)."';";
	//echo $sql;


	$res = mysqli_query($con, $sql);
	$row = mysqli_fetch_row($res);

	if($row == null){
		echo 0;
	}else{
		echo $row[0] . ";" . $row[1];
	}

?>