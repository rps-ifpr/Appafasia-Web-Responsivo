$(document).ready(function(){
(function(){
  var alturaTela = $(window).height();
  var tamanho = $(".principal-alt").height();
  $(".complet.altura-rela").height(alturaTela-200);
  $('.altura-rela').css('min-height', alturaTela-200);
  $('#bloco').css('height', alturaTela-400);
  var hasTimer = false;
  $('.bloco').on('click', function() {
    $('.timer').timer({
      editable: true
    });
  });

})();

/*mover objetos*/
    erros = 0;//setar as variaveis antes de começar
    acertos = 0;//setar as variaveis antes de começar

    $(".arrastavel").click(function(){//funçao de pegar o id da imagem
        id = $(this).attr("id")
        value = $(this).attr("value")
        console.log(value+" value e id "+id);
      if (idBloco == "bloco" && value == "true") {
        console.log('bloco e true')
        $("#"+id).remove();//apaga o elemento do lado esquerdo
        
        $("#"+idBloco).append("<img class='responsive-img col s5' src='img/"+id+".png'>");//reescreve o elemento do lado esquerdo
        acertos += 1;//adiciona +1 para os acertos
        console.log(acertos);
      }else {//se tiver errado
        erros += 1;// adiciona +1 aos erros
        $(".erro").attr("value",erros);//escreve no campo erro
      }
      if (acertos == 3) {//parar o tempo
        $('.timer').timer('pause');
        pontuacao = acertos/(erros+1)
        $(".pontuacao").attr("value",pontuacao);
        $("#pesquisa").css('border', 'red solid 3px');
      }
    });

    $(".bloco").click(function(){//quando o usuario clica no bloco
      idBloco = $(this).attr("id");
      $(this).addClass("selecionado");
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
  document.getElementById('data').innerHTML = (now.getDate() + " de " + (now.getMonth()+1) + " de " + now.getFullYear() );
}

audio = 0;
som = function(){
  if (!audio) {
    audio = true;
  }
}


audio1 = new Audio('audio/arquitetura.mp3');
audio2 = new Audio('audio/fotografa.mp3');
audio3 = new Audio('audio/grafico.mp3');
audio4 = new Audio('audio/paisagem.mp3');
audio5 = new Audio('audio/retrato.mp3');


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
