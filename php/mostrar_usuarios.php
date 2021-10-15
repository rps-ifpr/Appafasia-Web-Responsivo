<?php
	include "header.php";
	header('Content-type: application/json');

	$sql = "select * from usuario where id != 1;";
	$res = mysqli_query($con, $sql);
	//$row = mysqli_fetch_all($res);
	$html = "";
	for($i = 0 ; $i < mysqli_num_rows($res) ; $i++){
		$row = mysqli_fetch_assoc($res);
		switch ($row['tipo']) {
			case 1:
				$tipo = 'Fonoaudiólogo';
				break;
			
			case 2:
				$tipo = 'Paciente';
				break;

			default:
				$tipo = 'Outro';
				break;
		}
		if($row["data_nascimento"] == '0000-00-00'){
			$data = "";
		}else{
			$data = date("d/m/Y", strtotime($row["data_nascimento"]));
		}

		$sql2 = "select nome,sobrenome from usuario where id = ".$row["fonoaudiologo"].";";
	
		$res2 = mysqli_query($con, $sql);
		$row2 = mysqli_fetch_assoc($res2);

		$html .= "
			<tr>
				<td class='off-mob'>".date("d/m/Y", strtotime($row["data_cadastro"]))."</td>
				<td><a href='usuario.html?usuario=".utf8_encode($row["id"])."'>".utf8_encode($row["nome"])." ".utf8_encode($row["sobrenome"])."</a></td>
				<td class='off-mob'>".$row["email"]."</td>
				<td>".$tipo."</td>
				<td class='off-mob'>".$row["fonoaudiologo"]."</td>
				<td class='off-mob'>".$data."</td>
				<td>".$row["cidade"]."</td>
				<td class='off-mob'>".$row["estado"]."</td>
				<td class='off-mob'>".$row["endereco"]."</td>
				<td class='off-mob'>".$row["bairro"]."</td>
				<td>".$row["sexo"]."</td>
				<td>".$row["telefone"]."</td>
				<td><a href='javascript:excluirUsuario(".$row["id"].")'>Excluir</a></td>
			</tr>
		";
	}
	echo $html;

	//echo json_encode($row);
?>