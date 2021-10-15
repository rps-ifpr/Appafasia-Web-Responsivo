<?php
	include "header.php";
	header('Content-type: application/json');

	$sql = "select id, nome, sobrenome from usuario where tipo = 1;";
	$res = mysqli_query($con, $sql);
	//$row = mysqli_fetch_all($res);
	$html = "";
	for($i = 0 ; $i < mysqli_num_rows($res) ; $i++){
		$row = mysqli_fetch_assoc($res);
		$html .= "<option value='".$row['id']."'>".$row['nome']." ".$row['sobrenome']."</option>";
	}
	echo $html;

	//echo json_encode($row);
?>