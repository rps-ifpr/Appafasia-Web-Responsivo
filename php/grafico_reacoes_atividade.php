<?php
	include "header.php";
	header('Content-type: application/json');

	$usuario = $_GET['usuario'];
	$atividade = $_GET['atividade'];

	if($usuario == 1){
		$sql = "select reacao from atividades left join usuario on atividades.usuario = usuario.id where atividade like '".$atividade."';";
	}else{
		$sql = "select reacao from atividades left join usuario on atividades.usuario = usuario.id where atividade like '".$atividade."' and fonoaudiologo = " . $usuario . ";";
	}

	$res = mysqli_query($con, $sql);
	$html = "";
	$a = [];

	for($i = 0 ; $i < mysqli_num_rows($res) ; $i++){
		$row = mysqli_fetch_assoc($res);

		array_push($a, $row["reacao"]);

		// if($i == mysqli_num_rows($res) - 1){
		// 	//$html .= "{\"y\": \"".$row["perc"]."\", \"name\": \"".$row["atividade"]."\"}";
		// 	//$html .= "[1,".round($row["perc"], 2)."]";
		// 	$html .= $row["reacao"];
		// }else{
		// 	//$html .= "{\"y\": \"".$row["perc"]."\", \"name\": \"".$row["atividade"]."\"},";
		// 	//$html .= "[1,".round($row["perc"], 2)."],";
		// 	$html .= $row["reacao"] . ";";
		// }

		//echo json_encode($row);
	}
	$a =  array_count_values($a);
	//echo $html;

	
	echo json_encode($a);

	//echo "[" . $html . "]";
	//return $html;
?>