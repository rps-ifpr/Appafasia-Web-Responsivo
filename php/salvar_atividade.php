<?php
	include "header.php";

	date_default_timezone_set('America/Sao_Paulo');
// CRIA UMA VARIAVEL E ARMAZENA A HORA ATUAL DO FUSO-HORÀRIO DEFINIDO (BRASÍLIA)
    $data = date('d/m/Y H:i:s');


	$atividade = $_GET['atividade'];
	$erros = $_GET['erros'];
	$pontuacao = $_GET['pontuacao'];
	$tempo = $_GET['tempo'];
	$reacao = $_GET['reacao'];
	$som = $_GET['som'];
	$legenda = $_GET['legenda'];
	$supervisionado = $_GET['supervisionado'];
	$usuario = $_GET['usuario'];

	$sql = "insert into " . $db . ".atividades (data, atividade, erros, pontuacao, tempo, reacao, som, legenda, supervisionado, usuario) values (NOW(), '".$atividade."', '".$erros."', '".$pontuacao."', '".$tempo."', '".$reacao."', '".$som."', '".$legenda."', '".$supervisionado."', ".$usuario." );";


	$res = mysqli_query($con, $sql);
	if($res == true){
		echo 1;
	}else{
		echo 0;
	}
?>