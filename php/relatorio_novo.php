<?php
	include "header.php";

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
	if(!empty($atividade)){
		$atividade = "atividade = '".$atividade."' AND";
	}
	if(isset($inicio) && !empty($inicio)){
		if($usuario == 1){
			$sql = "select * from atividades left join usuario on atividades.usuario = usuario.id where ".$atividade." ".$reacao." ".$som." ".$supervisionado." ".$legenda." data >= STR_TO_DATE('".$inicio."', '%Y-%m-%d') AND data <= STR_TO_DATE('".$fim."', '%Y-%m-%d') ";
		}else{
			$sql = "select * from atividades left join usuario on atividades.usuario = usuario.id where andfonoaudiologo = ".$usuario." AND ".$reacao." data >= STR_TO_DATE('".$inicio."', '%Y-%m-%d') AND data <= STR_TO_DATE('".$fim."', '%Y-%m-%d')";
		}
	}else{
		$sql = "select * from atividades left join usuario on atividades.usuario = usuario.id where ".$atividade." ".$reacao." ".$som." ".$supervisionado." ".$legenda." erros >= 0 ";
	}
	
	$res = mysqli_query($con, $sql);
	
	for($i = 0 ; $i < mysqli_num_rows($res) ; $i++){
		$row = mysqli_fetch_assoc($res);
		$count_td++;
		if($row["reacao"] == 'gostei'){
			$count_goste++;
			if($row["som"] == 'sim'){$count_som++;}
			if($row["legenda"] == 'sim'){$count_legen++;}
			if($row["supervisionado"] == 'sim'){$count_sup++;}
		}else{
            $count_ngoste++;
			if($row["som"] == 'sim'){$count_nsom++;}
			if($row["legenda"] == 'sim'){$count_nlegen++;}
			if($row["supervisionado"] == 'sim'){$count_nsup++;}
		}
		
	}
	$nao = $count_td - $count_goste;
	$graficonao = ((($count_td - $count_goste)/$count_td)*100);
	$graficosim = 100 - $graficonao;
	$graficosomnao = ((($count_td - $count_som)/$count_td)*100);
	$graficosomsim = 100 - $graficosomnao;
	$graficolegennao = ((($count_td - $count_legen)/$count_td)*100);
	$graficolegensim = 100 - $graficolegennao;
	$graficosupnao = ((($count_td - $count_sup)/$count_td)*100);
	$graficosupsim = 100 - $graficosupnao;
	
	$ngraficosomnao = ((($count_td - $count_nsom)/$count_td)*100);
	$ngraficosomsim = 100 - $ngraficosomnao;
	$ngraficolegennao = ((($count_td - $count_nlegen)/$count_td)*100);
	$ngraficolegensim = 100 - $ngraficolegennao;
	$ngraficosupnao = ((($count_td - $count_nsup)/$count_td)*100);
	$ngraficosupsim = 100 - $ngraficosupnao;
	
	function tirarcasas($casasd){
	    return number_format(($casasd),2,",",".");
	}
	$html .= "
	        <h4 class='title-gr'>".tirarcasas($graficosim)."% Gostaram</h4>
			<div class='col s4 grafico-box'>
			    <h4>Som</h4>
			    <div class='barras-gr'>
			        <div style='width:".$graficosomsim."%' class='barra sim'>Sim ".tirarcasas($graficosomsim)."%</div>
			        <div style='width:".$graficosomnao."%' class='barra nao'>Não ".tirarcasas($graficosomnao)."%</div>
			    </div>
			</div>
			<div class='col s4 grafico-box'>
			    <h4>Legenda</h4>
			    <div class='barras-gr'>
			        <div style='width:".$graficolegensim."%' class='barra sim'>Sim ".tirarcasas($graficolegensim)."%</div>
			        <div style='width:".$graficolegennao."%' class='barra nao'>Não ".tirarcasas($graficolegennao)."%</div>
			    </div>
			</div>
			<div style='border:0' class='col s4 grafico-box'>
			    <h4>Supervisionado</h4>
			    <div class='barras-gr'>
			        <div style='width:".$graficosupsim."%' class='barra sim'>Sim ".tirarcasas($graficosupsim)."%</div>
			        <div style='width:".$graficosupnao."%' class='barra nao'>Não ".tirarcasas($graficosupnao)."%</div>
			    </div>
			</div>
			<div class='clr'></div>
			<h4 class='title-gr'>".tirarcasas($graficonao)."%  Não gostaram</h4>
			<div class='col s4 grafico-box'>
			    <h4>Som</h4>
			    <div class='barras-gr'>
			        <div style='width:".$ngraficosomsim."%' class='barra sim'>Sim ".tirarcasas($ngraficosomsim)."%</div>
			        <div style='width:".$ngraficosomnao."%' class='barra nao'>Não ".tirarcasas($ngraficosomnao)."%</div>
			    </div>
			</div>
			<div class='col s4 grafico-box'>
			    <h4>Legenda</h4>
			    <div class='barras-gr'>
			        <div style='width:".$ngraficolegensim."%' class='barra sim'>Sim ".tirarcasas($ngraficolegensim)."%</div>
			        <div style='width:".$ngraficolegennao."%' class='barra nao'>Não ".tirarcasas($ngraficolegennao)."%</div>
			    </div>
			</div>
			<div style='border:0' class='col s4 grafico-box'>
			    <h4>Supervisionado</h4>
			    <div class='barras-gr'>
			        <div style='width:".$ngraficosupsim."%' class='barra sim'>Sim ".tirarcasas($ngraficosupsim)."%</div>
			        <div style='width:".$ngraficosupnao."%' class='barra nao'>Não ".tirarcasas($ngraficosupnao)."%</div>
			    </div>
			</div>
		";
	echo $html; 
?>