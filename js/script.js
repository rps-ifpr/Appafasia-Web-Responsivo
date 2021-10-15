var variavel_global; 

if(localStorage.getItem("usuario")){
  if(localStorage.getItem("tipo_usuario") == 1 || localStorage.getItem("usuario") == 1){
    $(".relatorios").show();
  }
  console.log("usuario: " + localStorage.getItem("usuario"));
  console.log("tipo: " + localStorage.getItem("tipo_usuario"));
  $("#icone_usuario").show();
  $("#botao_entrar").hide();
}

if(localStorage.getItem("usuario") == 1){
    $("#menu_relatorio_geral").show();
}

$('.modal').modal();

function AjaxF(){
    var ajax;
    try{
        ajax = new XMLHttpRequest();
    }catch(e){
        try{
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(e){
            try{
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e){
                alert("Seu browser não da suporte à AJAX!");
                return false;
            }
        }
    }
    return ajax;
}

function chamaBanco(url){
    var ajax = AjaxF();
    ajax.onreadystatechange = function(){ 
        if(ajax.readyState == 4){
            variavel_global = ajax.responseText;
           // alert("salvo com sucesso");
        }       
    }
    ajax.open("GET", url, false);
    ajax.setRequestHeader("Content-Type", "text/html");
    ajax.send();
    return variavel_global;
};

login = function(){
  var email = $("#email").val();
  var senha = $("#senha").val();

  var php = "/php/login.php?email="+email+"&senha="+senha;
  console.log(php);
  var resposta = chamaBanco(php);
  console.log(resposta);
  console.log("id:"+resposta[0]+" tipo:"+resposta[1]);
  if(resposta == 0){
    alert("Email não cadastrado ou incorreto");
  }else{
    resposta = resposta.split(";");
    localStorage.setItem("usuario", resposta[0]);
    localStorage.setItem("tipo_usuario", resposta[1]);
    $('#modal1').modal('close');
    $("#icone_usuario").show();
    $("#mensagem_salvar").show();
    $("#botao_entrar").hide();
    location.reload();
  }
}

logout = function(){
  if(confirm("Tem certeza que deseja fazer o logout?")){
    localStorage.removeItem("usuario");
    $("#icone_usuario").hide();
    $("#botao_entrar").show();
    window.location = '/';
  }
}

terminarAtividade = function(reacao, atividade){
  if(reacao == 'gostei'){
    M.toast({html: 'gostei'});
  }else{
    M.toast({html: 'não gostei'});
  }

  tempo = $('.timer').data('seconds'); 
  if(tempo == undefined){
    alert('É necessário iniciar a atividade');
    return;
  }

  if(pontuacao == 0){
    alert('É necessário terminar a atividade');
    return;
  }

  if(localStorage.getItem("usuario") == null){
    if(confirm("É necessário fazer o login para salvar os dados e avaliar a atividade")){
        //initialize all modals           
        

        //now you can open modal from code
        $('#modal1').modal('open');
        return;
    } else {
      location.reload();
      return;
    }    
  }

  if($(".legenda").is(':checked')){
    legenda = "sim";
  }else{
    legenda = "nao";
  }

  if($(".som").is(':checked')){
    som = "sim";
  }else{
    som = "nao";
  }

  if($(".supervisionado").is(':checked')){
    supervisionado = "sim";
  }else{
    supervisionado = "nao";
  }
  if(reacao == 'gostei'){
    if(erros == 0){
      if(legenda == 'sim'){
        alert("Parabéns não teve erros, agora tente sem a legenda");
      }else if (som == 'sim') {
        alert("Parabéns não teve erros, agora tente sem o som");
      }else if (supervisionado == 'sim'){
        alert("Parabéns não teve erros, agora tente sem a supervisão");
      }else{
        alert('Parabens! Continue treinando, você não teve erros.');
      }
    }else{
      if(som != 'sim'){
        alert("Teve algum erro, agora tente adicionar som");
      }else if (legenda != 'sim') {
        alert("Teve algum erro, agora tente adicionar legenda");
      }else if (supervisionado != 'sim'){
        alert("Teve algum erro, agora tente adicionar supervisão");
      }
    }
  }else{
    if(erros == 0){
      if(legenda == 'sim'){
        alert("Que pena não ter gostado você não teve erros, agora tente sem a legenda");
      }else if (som == 'sim') {
        alert("Que pena não ter gostado você não teve erros, agora tente sem o som");
      }else if (supervisionado == 'sim'){
        alert("Que pena não ter gostado você não teve erros, agora tente sem a supervisão");
      }else{
        alert('Parabens! mesmo não gostando você não teve erros');
      }
    }else{
      if(legenda != 'sim'){
        alert("Que pena não ter gostado e mesmo com erros, tente com legenda");
      }else if (som != 'sim') {
        alert("Que pena não ter gostado e mesmo com erros, tente com som");
      }else if (supervisionado != 'sim'){
        alert("Que pena não ter gostado e mesmo com erros, tente com supervisão");
      }
    }
  }


  var parametros = "../../../php/salvar_atividade.php?atividade="+atividade+"&erros="+erros+"&pontuacao="+pontuacao+"&tempo="+tempo+"&reacao="+reacao+"&som="+som+"&legenda="+legenda+"&supervisionado="+supervisionado+"&usuario="+localStorage.getItem("usuario");
  console.log(parametros);
  var resposta = chamaBanco(parametros);
  console.log(resposta);
  if(resposta == 1){
    if(confirm("Atividade salva! Gostaria de realiza-la novamente?")){
      location.reload();
    }else{
      window.location = "../../index.html";
    }
    
  }else{
    alert("atividade não foi salva");
  }
}