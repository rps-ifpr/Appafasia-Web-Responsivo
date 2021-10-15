relatorioGeral = function(){
    $('#paginasRelatorio').html('');

    var data_inicial = $("#data_inicial").val();
    var data_final = $("#data_final").val();
    console.log(data_inicial);    

    php = "../../php/relatorio_geral.php?inicio="+data_inicial+"&fim="+data_final;
    var resposta = chamaBanco(php);
    $("#dadosGerais").html(resposta);

    paginas_relatorio_geral();
   
}

relatorioUsuarios = function(){     
    php = "../../php/mostrar_usuarios.php";
    var resposta = chamaBanco(php);
    $("#dadosUsuariosGeral").html(resposta);

    paginas_relatorio_usuarios();
   
}

relatorioPacientes = function(){
    $('#paginasRelatorioPacientes').html('');

    var data_inicial = $("#data_inicial").val();
    var data_final = $("#data_final").val();
    var data_reacao = $("#data_reacao").val();
    var data_ordem = $("#data_ordem").val();
    var data_som = $("#data_som").val();
    var data_legenda = $("#data_legenda").val();
    var data_supervisionado = $("#data_supervisionado").val();
    var data_atividade = $("#data_atividade").val();
    console.log(data_inicial); 

    php = "../../php/relatorio_pacientes.php?usuario="+localStorage.getItem("usuario")+"&inicio="+data_inicial+"&fim="+data_final+"&reacao="+data_reacao+"&ordem="+data_ordem+"&som="+data_som+"&legenda="+data_legenda+"&supervisionado="+data_supervisionado+"&atividade="+data_atividade;
    var resposta = chamaBanco(php);
    $("#dados").html(resposta);

    paginas_relatorio();
}

relatorioGeralUsuario = function(usuario){
    $('#paginasUsuario').html('');

    var data_inicial = $("#data_inicial").val();
    var data_final = $("#data_final").val();
    var data_reacao = $("#data_reacao").val();
    var data_ordem = $("#data_ordem").val();
    var data_som = $("#data_som").val();
    var data_legenda = $("#data_legenda").val();
    var data_supervisionado = $("#data_supervisionado").val();
     var data_atividade = $("#data_atividade").val();
    console.log(data_inicial); 

    php = "../../php/carregar_conteudo_usuario.php?usuario="+usuario+"&inicio="+data_inicial+"&fim="+data_final+"&reacao="+data_reacao+"&ordem="+data_ordem+"&som="+data_som+"&legenda="+data_legenda+"&supervisionado="+data_supervisionado+"&atividade="+data_atividade;
    var resposta = chamaBanco(php);
    $("#dadosUsuario").html(resposta);
    paginas_usuario();
    graficoAtividades(usuario);
    graficoReacoes(usuario);
    graficoPontuacaoUsuario(usuario);
    graficonovo(data_atividade,data_som,data_inicial,data_final,data_reacao,data_legenda,data_supervisionado);
    // graficoSupervisionado(usuario, 'undefined');
    // graficoSom(usuario, 'undefined');
    // graficoLegenda(usuario, 'undefined');
}

relatorioGeralAtividade = function(atividade){
    $('#paginasAtividade').html('');
    
    var data_inicial = $("#data_inicial").val();
    var data_final = $("#data_final").val();
    var data_reacao = $("#data_reacao").val();
    var data_ordem = $("#data_ordem").val();
    var data_som = $("#data_som").val();
    var data_legenda = $("#data_legenda").val();
    var data_supervisionado = $("#data_supervisionado").val();
    console.log(data_inicial); 

    php = "../../php/carregar_conteudo_atividade.php?atividade="+atividade+"&inicio="+data_inicial+"&fim="+data_final+"&usuario="+localStorage.getItem("usuario")+"&reacao="+data_reacao+"&som="+data_som+"&legenda="+data_legenda+"&supervisionado="+data_supervisionado;
    var resposta = chamaBanco(php);
    console.log(php);
    $("#dadosAtividade").html(resposta);

    paginas_atividade();
    graficonovo(atividade,data_som,data_inicial,data_final,data_reacao,data_legenda,data_supervisionado);
    //graficoAtividades(atividade);
    graficoReacoesAtividade(atividade);
    graficoPontuacaoAtividade(atividade,data_som,data_inicial,data_final,data_reacao,data_legenda,data_supervisionado);
    // graficoSupervisionado(atividade);
    // graficoSom(atividade);
    // graficoLegenda(atividade);
}
graficonovo = function(atividade,data_som,data_inicial,data_final,data_reacao,data_legenda,data_supervisionado){
    $('#graficonovo').html('');
    php = "../../php/relatorio_novo.php?atividade="+atividade+"&inicio="+data_inicial+"&fim="+data_final+"&usuario="+localStorage.getItem("usuario")+"&reacao="+data_reacao+"&som="+data_som+"&legenda="+data_legenda+"&supervisionado="+data_supervisionado;
    var resposta = chamaBanco(php);
    $("#graficonovo").html(resposta);
}
paginas_relatorio_geral = function(){
    $(document).ready(function(){
        $('#tabelaRelatorioGeral').pageMe({
            pagerSelector:'#paginasRelatorio',
            activeColor: 'red',
            prevText:'Anterior',
            nextText:'Seguinte',
            showPrevNext:true,
            hidePageNumbers:false,
            perPage:10
        });
    });
}

paginas_relatorio_usuarios = function(){
    $(document).ready(function(){
        $('#tabelaUsuarios').pageMe({
            pagerSelector:'#paginasRelatorioUsuarios',
            activeColor: 'red',
            prevText:'Anterior',
            nextText:'Seguinte',
            showPrevNext:true,
            hidePageNumbers:false,
            perPage:10
        });
    });
}

paginas_relatorio = function(){
    $(document).ready(function(){
        $('#tabelaRelatorio').pageMe({
            pagerSelector:'#paginasRelatorioPacientes',
            activeColor: 'red',
            prevText:'Anterior',
            nextText:'Seguinte',
            showPrevNext:true,
            hidePageNumbers:false,
            perPage:10
        });
    });
}
    
paginas_usuario = function(){
    $(document).ready(function(){
        $('#tabelaUsuario').pageMe({
            pagerSgraficoSupervisaoelector:'#paginasUsuario',
            activeColor: 'red',
            prevText:'Anterior',
            nextText:'Seguinte',
            showPrevNext:true,
            hidePageNumbers:false,
            perPage:5
        });
    });
}

paginas_atividade = function(){
    $(document).ready(function(){
        $('#tabelaAtividade').pageMe({
            pagerSelector:'#paginasAtividade',
            activeColor: 'red',
            prevText:'Anterior',
            nextText:'Seguinte',
            showPrevNext:true,
            hidePageNumbers:false,
            perPage:5
        });
    });
}

graficoAtividades = function() {
    php = "../../php/grafico_atividades_usuario.php?usuario="+localStorage.getItem("usuario");
    var resposta = chamaBanco(php);  
    console.log(resposta);
    console.log(JSON.parse(resposta));

    var dataPoint = [];
    $.each(JSON.parse(resposta), function(index, value){
        console.log(index + " " + value);
        dataPoint.push({label: index, y: value});
    }); 

    var options = {
        animationEnabled: true,
        title:{
            text: "Atividades"
        },
        legend:{
            horizontalAlign: "right",
            verticalAlign: "center"
        },
        data: [{
            type: "pie",
            showInLegend: false,
            toolTipContent: "<b>{y} {label}</b>: #percent%",
            indexLabel: "{label}",
            legendText: "{label} (#percent%)",
            indexLabelPlacement: "inside",
            dataPoints: 
                dataPoint
        }]
    };

    console.log(options);
    $("#graficoAtividadesUsuario").CanvasJSChart(options);
}

graficoReacoes = function() {
    php = "../../php/grafico_reacoes_usuario.php?usuario="+localStorage.getItem("usuario");
    var resposta = chamaBanco(php);  
    console.log(JSON.parse(resposta));

    var dataPoint = [];
    $.each(JSON.parse(resposta), function(index, value){
        console.log(index + " " + value);
        dataPoint.push({label: index, y: value});
    }); 

    var options = {
        animationEnabled: true,
        title:{
            text: "Reações"
        },
        legend:{
            horizontalAlign: "right",
            verticalAlign: "center"
        },
        data: [{
            type: "pie",
            showInLegend: false,
            toolTipContent: "<b>{y} {label}</b>: #percent%",
            indexLabel: "{label}",
            legendText: "{label} (#percent%)",
            indexLabelPlacement: "inside",
            dataPoints: 
                dataPoint
        }]
    };

    console.log(options);
    $("#graficoReacoesUsuario").CanvasJSChart(options);

}

//@TODO: fazer um gráfico de desempenho, baseando-se em uma atividade específica do usuário
// pode-se considerar o tempo que o usuário leva para fazer o exercicio e a pontuação, conforme o tempo

graficoReacoesAtividade = function(atividade) {
    php = "../../php/grafico_reacoes_atividade.php?atividade="+atividade+"&usuario="+localStorage.getItem("usuario");
    var resposta = chamaBanco(php);  
    console.log(JSON.parse(resposta));

    var dataPoint = [];
    $.each(JSON.parse(resposta), function(index, value){
        console.log(index + " " + value);
        dataPoint.push({label: index, y: value});
    }); 

    var options = {
        animationEnabled: true,
        title:{
            text: "Reações"
        },
        legend:{
            horizontalAlign: "right",
            verticalAlign: "center"
        },
        data: [{
            type: "pie",
            showInLegend: false,
            toolTipContent: "<b>{y} {label} </b>: #percent%",
            indexLabel: "{label}",
            legendText: "{label} (#percent%)",
            indexLabelPlacement: "inside",
            dataPoints: 
                dataPoint
        }]
    };

    console.log(options);
    $("#graficoReacoesAtividade").CanvasJSChart(options);

}
graficoPontuacaoAtividade = function(atividade,data_som,data_inicial,data_final,data_reacao,data_legenda,data_supervisionado){
    php = "../../php/grafico_pontuacao_atividade.php?atividade="+atividade+"&usuario="+localStorage.getItem("usuario")+"&som="+data_som+"&inicio="+data_inicial+"&fim="+data_final+"&legenda="+data_legenda+"&supervisionado="+data_supervisionado;
    var resposta = chamaBanco(php);  
    console.log(JSON.parse(resposta));
    var dataPoint = [];
    $.each(JSON.parse(resposta), function(index, value){
        console.log(index + " " + value);
        dataPoint.push({x: index, y: parseInt(value)});
    }); 

    var options = {
        animationEnabled: true,  
        title:{
            text: "Pontuação"
        },
        axisY: {
            title: "Pontuação",
            includeZero: false
        },
        axisX: {
            title: "Numero de atividades",
            includeZero: false
        },
        data: [{
            type: "spline",
            dataPoints: dataPoint
        }]
    };
    $("#graficoPontuacaoAtividade").CanvasJSChart(options);

}

graficoPontuacaoUsuario = function(usuario){
    php = "../../php/grafico_pontuacao_usuario.php?fono="+localStorage.getItem("usuario")+"&usuario="+usuario;
    var resposta = chamaBanco(php);
    console.log(JSON.parse(resposta));

    var dataPoint = [];
    $.each(JSON.parse(resposta), function(index, value){
        console.log(index + " " + value);
        dataPoint.push({x: index, y: parseInt(value)});
    });

    var options = {
        animationEnabled: true,
        title:{
            text: "Pontuação"
        },
        axisY: {
            title: "Pontuação",
            includeZero: false
        },
        axisX: {
            title: "Numero de atividades",
            includeZero: false
        },
        data: [{
            type: "spline",
            dataPoints: dataPoint
        }]
    };

    $("#graficoPontuacaoUsuario").CanvasJSChart(options);

}

graficoSom = function(usuario, atividade) {
    php = "../../php/grafico_som.php?atividade="+atividade+"&usuario="+localStorage.getItem("usuario");
    console.log(php);
    var resposta = chamaBanco(php);
    console.log(JSON.parse(resposta));

    var dataPoint = [];
    $.each(JSON.parse(resposta), function(index, value){
        console.log(index + " " + value);
        dataPoint.push({label: index, y: value});
    });

    var options = {
        animationEnabled: true,
        title:{
            text: "Som"
        },
        legend:{
            horizontalAlign: "right",
            verticalAlign: "center"
        },
        data: [{
            type: "pie",
            showInLegend: false,
            toolTipContent: "<b>{y} {label} </b>: #percent%",
            indexLabel: "{label}",
            legendText: "{label} (#percent%)",
            indexLabelPlacement: "inside",
            dataPoints:
            dataPoint
        }]
    };

    console.log(options);
    $("#graficoSom").CanvasJSChart(options);

}

graficoLegenda = function(usuario, atividade) {
    php = "../../php/grafico_legenda.php?atividade="+atividade+"&usuario="+localStorage.getItem("usuario");
    var resposta = chamaBanco(php);
    console.log(JSON.parse(resposta));

    var dataPoint = [];
    $.each(JSON.parse(resposta), function(index, value){
        console.log(index + " " + value);
        dataPoint.push({label: index, y: value});
    });

    var options = {
        animationEnabled: true,
        title:{
            text: "Legenda"
        },
        legend:{
            horizontalAlign: "right",
            verticalAlign: "center"
        },
        data: [{
            type: "pie",
            showInLegend: false,
            toolTipContent: "<b>{y} {label} </b>: #percent%",
            indexLabel: "{label}",
            legendText: "{label} (#percent%)",
            indexLabelPlacement: "inside",
            dataPoints:
            dataPoint
        }]
    };

    console.log(options);
    $("#graficoLegenda").CanvasJSChart(options);

}

graficoSupervisionado = function(usuario, atividade) {
    php = "../../php/grafico_supervisao.php?atividade="+atividade+"&usuario="+localStorage.getItem("usuario");
    var resposta = chamaBanco(php);
    console.log(JSON.parse(resposta));

    var dataPoint = [];
    $.each(JSON.parse(resposta), function(index, value){
        console.log(index + " " + value);
        dataPoint.push({label: index, y: value});
    });

    var options = {
        animationEnabled: true,
        title:{
            text: "Supervisionado"
        },
        legend:{
            horizontalAlign: "right",
            verticalAlign: "center"
        },
        data: [{
            type: "pie",
            showInLegend: false,
            toolTipContent: "<b>{y} {label} </b>: #percent%",
            indexLabel: "{label}",
            legendText: "{label} (#percent%)",
            indexLabelPlacement: "inside",
            dataPoints:
            dataPoint
        }]
    };

    console.log(options);
    $("#graficoSupervisao").CanvasJSChart(options);

}

function filtrarNome() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("nome_filtro");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabelaRelatorioGeral");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function filtrarData(){
    var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("data_inicial");
  input2 =  document.getElementById("data_final");

  fDate = Date.parse(input);
    lDate = Date.parse(input2);
    



  table = document.getElementById("tabelaRelatorioGeral");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      cDate = Date.parse(txtValue);

      if((cDate <= lDate && cDate >= fDate)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function excluirUsuario(id){
    console.log(id);
    if(confirm("Tem certeza que gostaria de excluir este usuário?")){
        php = "../../php/excluir_usuario.php?id="+id;
        console.log(php);
        var resposta = chamaBanco(php);
        console.log(resposta);
        if(resposta == 1){
            alert("Usuário excluído com sucesso!");
            location.reload();
        }
        
    }
}