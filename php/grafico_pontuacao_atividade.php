<?php
	include "header.php";
	header('Content-type: application/json');

	$usuario = $_GET['usuario'];
	$atividade = $_GET['atividade'];
	$inicio = $_GET['inicio'];
	$fim = $_GET['fim'];
	$reacao = $_GET['reacao'];
	$som = $_GET['som'];
	$legenda = $_GET['legenda'];
	$supervisionado = $_GET['supervisionado'];


	if(!empty($reacao)){
		if($reacao == "gostei"){
			$reacao = "reacao = 'gostei' AND";
		}else{
			$reacao = "reacao = 'nao gostei' AND";
		}
	}
	if(!empty($som)){
		if($som == "sim"){
			$som = "som = 'sim' AND";
		}else{
			$som = "som = 'nao' AND";
		}
	}
	if(!empty($supervisionado)){
		if($supervisionado == "sim"){
			$supervisionado = "supervisionado = 'sim' AND";
		}else{
			$supervisionado = "supervisionado = 'nao' AND";
		}
	}
	if(!empty($legenda)){
		if($legenda == "sim"){
			$legenda = "legenda = 'sim' AND";
		}else{
			$legenda = "legenda = 'nao' AND";
		}
	}

	if(isset($inicio) && !empty($inicio)){
		if($usuario == 1){
			$sql = "select pontuacao from atividades left join usuario on atividades.usuario = usuario.id where ".$som." ".$supervisionado." ".$legenda." ".$reacao." atividade like '".$atividade."' data >= STR_TO_DATE('".$inicio."', '%Y-%m-%d') AND data <= STR_TO_DATE('".$fim."', '%Y-%m-%d');";
		}else{
			$sql = "select pontuacao from atividades left join usuario on atividades.usuario = usuario.id where fonoaudiologo = " . $usuario . " AND ".$som." ".$supervisionado." ".$legenda." ".$reacao." atividade like '".$atividade."' data >= STR_TO_DATE('".$inicio."', '%Y-%m-%d') AND data <= STR_TO_DATE('".$fim."', '%Y-%m-%d');";
		}
	}else{
		$sql = "select pontuacao from atividades left join usuario on atividades.usuario = usuario.id where ".$som." ".$supervisionado." ".$legenda." ".$reacao." ".$som." ".$som." atividade like '".$atividade."';";

	}

	$res = mysqli_query($con, $sql);
	$html = "";
	$a = [];

	for($i = 0 ; $i < mysqli_num_rows($res) ; $i++){
		$row = mysqli_fetch_assoc($res);

		array_push($a, $row["pontuacao"]);

		// if($i == mysqli_num_rows($res) - 1){
		// 	//$html .= "{\"y\": \"".$row["perc"]."\", \"name\": \"".$row["atividade"]."\"}";
		// 	//$html .= "[1,".round($row["perc"], 2)."]";
		// 	$html .= $row["pontuacao"];
		// }else{
		// 	//$html .= "{\"y\": \"".$row["perc"]."\", \"name\": \"".$row["atividade"]."\"},";
		// 	//$html .= "[1,".round($row["perc"], 2)."],";
		// 	$html .= $row["pontuacao"] . ";";
		// }

		//echo json_encode($row);
	}
	//$a =  array_count_values($a);
	//echo $html;

	
	echo json_encode($a);

	//echo "[" . $html . "]";
	//return $html;
?>