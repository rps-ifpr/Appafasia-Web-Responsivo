<?php
	include "header.php";

	$usuario = $_GET['usuario'];
	$atividade = $_GET['atividade'];
	$inicio = $_GET['inicio'];
	$fim = $_GET['fim'];
	$reacao = $_GET['reacao'];
	$ordernar = $_GET['ordem'];
	$som = $_GET['som'];
	$legenda = $_GET['legenda'];
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
		if($usuario == 1){
			$sql = "select * from atividades left join usuario on atividades.usuario = usuario.id where ".$atividade." ".$reacao." ".$som." ".$supervisionado." ".$legenda." data >= STR_TO_DATE('".$inicio."', '%Y-%m-%d') AND data <= STR_TO_DATE('".$fim."', '%Y-%m-%d') ".$ordernar;
		}else{
			$sql = "select * from atividades left join usuario on atividades.usuario = usuario.id where andfonoaudiologo = ".$usuario." and ".$reacao." data >= STR_TO_DATE('".$inicio."', '%Y-%m-%d') AND data <= STR_TO_DATE('".$fim."', '%Y-%m-%d') order by data;";
		}
	}else{
		$sql = "select * from atividades left join usuario on atividades.usuario = usuario.id where ".$atividade." ".$reacao." ".$som." ".$supervisionado." ".$legenda." erros >= 0 ".$ordernar;
	}
	
	$res = mysqli_query($con, $sql);
	$html = "";
	for($i = 0 ; $i < mysqli_num_rows($res) ; $i++){
		$row = mysqli_fetch_assoc($res);
		if($row["reacao"] == 'gostei'){
			if($row["som"] == 'sim'){$count_som++;}
			if($row["legenda"] == 'sim'){$count_legen++;}
			if($row["supervisionado"] == 'sim'){$count_sup++;}
		}else{

		}
		$html .= "
			<tr>
				<td>".date("d/m/Y", strtotime($row["data"]))."</td>
				<td><a href='usuario.html?usuario=".$row["usuario"]."'>".$row["nome"]."</a></td>
				<td class='off-mob'>".$row["erros"]."</td>
				<td>".$row["pontuacao"]."</td>
				<td class='off-mob'>".$row["tempo"]." s</td>
				<td>".$row["reacao"]."</td>
				<td class='off-mob'>".$row["som"]."</td>
				<td class='off-mob'>".$row["legenda"]."</td>
				<td class='off-mob'>".$row["supervisionado"]."</td>
			</tr>
		";
	}
	echo $html; 
?>