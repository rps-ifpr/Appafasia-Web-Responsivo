<?php
	include "header.php";

	$sql = "select * from atividades left join usuario on atividades.usuario = usuario.id;";
	$res = mysqli_query($con, $sql);
	$html = "";
	for($i = 0 ; $i < mysqli_num_rows($res) ; $i++){
		$row = mysqli_fetch_assoc($res);
		echo $row["nome"];
		$html .= "
			<tr>
				<td>".$row["data"]."</td>
				<td><a href='usuario.html?usuario=".utf8_encode($row["usuario"])."'>".utf8_encode($row["nome"])."</a></td>
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