<?php
	include "header.php";

	$inicio = $_GET['inicio'];
	$fim = $_GET['fim'];

	if(isset($inicio) && !empty($inicio)){
		$sql = "select * from atividades left join usuario on atividades.usuario = usuario.id where data >= STR_TO_DATE('".$inicio."', '%Y-%m-%d') AND data <= STR_TO_DATE('".$fim."', '%Y-%m-%d');";
	}else{
		$sql = "select * from atividades left join usuario on atividades.usuario = usuario.id;";
	}

	
	$res = mysqli_query($con, $sql);
	$html = "";
	for($i = 0 ; $i < mysqli_num_rows($res) ; $i++){
		$row = mysqli_fetch_assoc($res);
		$html .= "
			<tr>
				<td>".date("d/m/Y", strtotime($row["data"]))."</td>
				<td><a href='usuario.html?usuario=".utf8_encode($row["usuario"])."'>".utf8_encode($row["nome"])."</a></td>
				<td><a href='atividades.html?atividade=".$row["atividade"]."'>".$row["atividade"]."</a></td>
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