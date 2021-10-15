<?php
	include "header.php";

	$nome = $_GET['nome'];
	$sobrenome = $_GET['sobrenome'];
	$email = $_GET['email'];
	$senha = $_GET['senha'];
	$tipo = $_GET['tipo'];
	$cidade = $_GET['cidade'];
	$estado = $_GET['estado'];
	$bairro = $_GET['bairro'];
	$endereco = $_GET['endereco'];
	$nascimento = $_GET['nascimento'];
	$sexo = $_GET['sexo'];
	$telefone = $_GET['telefone'];

	$fonoaudiologo = $_GET['fonoaudiologo'];
	$profissao = $_['profissao'];

	$sql = "insert into " . $db . ".usuario (data_cadastro, nome, sobrenome, email, senha, tipo, cidade, estado, bairro, endereco, data_nascimento, sexo, telefone, fonoaudiologo, profissao) values (NOW(), '".$nome."', '".$sobrenome."', '".$email."', '".hash('sha512', $senha)."', ".$tipo.", '".$cidade."', '".$estado."', '".$bairro."', '".$endereco."', STR_TO_DATE('".$nascimento."', '%Y-%m-%d'), '".$sexo."', '".$telefone."', ".$fonoaudiologo.", '".$profissao."');";
	//echo $sql;

	$res = mysqli_query($con, $sql);
	//echo $res;
	if($res == true){
		echo $con->insert_id;
	}else{
		echo $con->error;
	}
?>