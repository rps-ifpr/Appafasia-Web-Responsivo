<?php
	include "header.php";

	$usuario = $_GET['usuario'];
	$inicio = $_GET['inicio'];
	$fim = $_GET['fim'];
	$reacao = $_GET['reacao'];
	$ordernar = $_GET['ordem'];
	$som = $_GET['som'];
	$legenda = $_GET['legenda'];
	$atividade = $_GET['atividade'];
	$supervisionado = $_GET['supervisionado'];

	if(!empty($ordernar)){
		if($ordernar == "mais"){
			$ordernar = "order by pontuacao DESC";
		}
		if($ordernar == "menos"){
			$ordernar = "order by pontuacao ASC";
		}
		if($ordernar == "maist"){
			$ordernar = "order by tempo DESC";
		}
		if($ordernar == "menost"){
			$ordernar = "order by tempo ASC";
		}
		if($ordernar == "maise"){
			$ordernar = "order by erros DESC";
		}
		if($ordernar == "menose"){
			$ordernar = "order by erros ASC";
		}
	}
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
	if(!empty($atividade)){
		$atividade = "atividade = '".$atividade."' AND";
	}
	if(!empty($legenda)){
		if($legenda == "sim"){
			$legenda = "legenda = 'sim' AND";
		}else{
			$legenda = "legenda = 'nao' AND";
		}
	}
	if(isset($inicio) && !empty($inicio)){
		$sql = "select * from atividades where ".$atividade." ".$reacao." ".$som." ".$supervisionado." ".$legenda." usuario = ".$usuario." and data >= STR_TO_DATE('".$inicio."', '%Y-%m-%d') AND data <= STR_TO_DATE('".$fim."', '%Y-%m-%d') ".$ordernar;
	}else{
		$sql = "select * from atividades where ".$atividade." ".$reacao." ".$som." ".$supervisionado." ".$legenda." usuario = ".$usuario." ".$ordernar;
	}

	$res = mysqli_query($con, $sql);
	$html = "";
	for($i = 0 ; $i < mysqli_num_rows($res) ; $i++){
		$row = mysqli_fetch_assoc($res);
		$html .= "
			<tr>
				<td>".date("d/m/Y", strtotime($row["data"]))."</td>
				<td><a href='atividades.html?atividade=".$row["atividade"]."'>".$row["atividade"]."</a></td>
				<td>".$row["erros"]."</td>
				<td>".$row["pontuacao"]."</td>
				<td>".$row["tempo"]." s</td>   
				<td>".$row["reacao"]."</td>
				<td>".$row["som"]."</td>
				<td>".$row["legenda"]."</td>
				<td>".$row["supervisionado"]."</td>
			</tr>
		";
	}
	echo $html; 

?>