$(document).ready(function(){


(function(){
  var alturaTela = $(window).height();
  var tamanho = $(".principal-alt").height();
  $(".complet.altura-rela").height(alturaTela-200);
  $('.altura-rela').css('min-height', alturaTela-200);
  var hasTimer = false;
  // Inicia o tempo
  $('img').on('click', function() {
    $('.timer').timer({
      editable: true
    });
  });

})();

/*mover objetos*/
    erros = 0;//setar as variaveis antes de começar
    acertos = 0;//setar as variaveis antes de começar
    pontuacao = 0;

    $(".categorize_item").click(function(){//funçao de pegar o id da imagem
      value = $(this).attr("value");
      id = $(this).attr("id");
      $(".selecionado").removeClass("selecionado erros");
      $(this).addClass("selecionado");
    });

    $(".categorize").click(function(){//quando o usuario clica no bloco
      if (value == $(this).attr("value")) {
        $("#"+id).remove();//apaga o elemento do lado esquerdo
        //$(this).html("");
        if (id != 0 && value != 0) {
          $(this).append("<img src='img/"+id+".png'class='col s4'>");//reescreve o elemento do lado esquerdo
          acertos += 1;//adiciona +1 para os acertos
          id = 0;
          value = 0;
        }
        //console.log("acertos: "+acertos);
      }else if (id == 0 && value == 0){//se tiver errado
       console.log('pare de clicar ai');
      }else{
       erros += 1;// adiciona +1 aos erros
        $(".erro").attr("value",erros);//escreve no campo erro
        erro(id);
      }
      if (acertos == 8) {//parar o tempo
        $('.timer').timer('pause');
        pontuacao = (acertos*100)/((erros+1));
        $(".pontuacao").attr("value",pontuacao);
        $("#pesquisa").css('border', 'red solid 3px');
      }
    });


  erro = (function(id){
    $("#"+id).addClass("erros");
  });



  $(".legenda").click(function(){legenda();});


  var instance = M.Tooltip.getInstance(".tooltipped");

  legenda = (function(){
    if($(".legenda").is(':checked')){
      $(".aux").addClass("tooltipped");
      $('.tooltipped').tooltip();
    }else{
      $(".aux").removeClass("tooltipped");
    }
  });

  $(".legenda").click(function(){
    $(this).prop("disabled", true);
  });
  $(".som").click(function(){
    $(this).prop("disabled", true);
  });
  $(".supervisionado").click(function(){
    $(this).prop("disabled", true);
  });

});



now = new Date
window.onload = function(){
  document.getElementById('data').innerHTML = (now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear() );
}

audio = 0;
som = function(){
  if (!audio) {
    audio = true;
  }
}


audio1 = new Audio('audio/amarelo.mp3');
audio2 = new Audio('audio/cadeira.mp3');
audio3 = new Audio('audio/azul.mp3');
audio4 = new Audio('audio/fogao.mp3');
audio5 = new Audio('audio/branca.mp3');
audio6 = new Audio('audio/geladeira.mp3');
audio7 = new Audio('audio/rosa.mp3');
audio8 = new Audio('audio/mesa.mp3');

aud1 = function(){
  if (audio) {
    audio1.play();
  }
}
aud2 = function(){
  if (audio) {
    audio2.play();
  }
}
aud3 = function(){
  if (audio) {
    audio3.play();
  }
}
aud4 = function(){
  if (audio) {
    audio4.play();
  }
}
aud5 = function(){
  if (audio) {
    audio5.play();
  }
}
aud6 = function(){
  if (audio) {
   audio6.play();
  }
}
aud7 = function(){
  if (audio) {
    audio7.play();
  }
}
aud8 = function(){
  if (audio) {
    audio8.play();
  }
}
