$(document).ready(function(){
(function(){
  var alturaTela = $(window).height();
  var tamanho = $(".principal-alt").height();
  $(".complet.altura-rela").height(alturaTela-200);
  $('.altura-rela').css('min-height', alturaTela-200);
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
        console.log(value+" value e id "+id);
      if (value == id) {
        $("#"+id).remove();//apaga o elemento do lado esquerdo
        $("#"+idBloco).html("");
        $("#"+idBloco).append("<img class='responsive-img' src='img/"+id+".png'>");//reescreve o elemento do lado esquerdo
        acertos += 1;//adiciona +1 para os acertos
        console.log(acertos);
      }else {//se tiver errado
        erros += 1;// adiciona +1 aos erros
        $(".erro").attr("value",erros);//escreve no campo erro
      }
      if (acertos == 6) {//parar o tempo
        $('.timer').timer('pause');
        pontuacao = acertos/(erros+1)
        $(".pontuacao").attr("value",pontuacao);
        $("#pesquisa").css('border', 'red solid 3px');
      }
    });

    $(".bloco").click(function(){//quando o usuario clica no bloco
      value = $(this).attr("value");
      idBloco = $(this).attr("id");
      $(".selecionado").removeClass("selecionado");
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


audio1 = new Audio('audio/quarto.mp3');
audio2 = new Audio('audio/alcapao.mp3');
audio3 = new Audio('audio/banheiro.mp3');
audio4 = new Audio('audio/sacada.mp3');
audio5 = new Audio('audio/cozinha.mp3');
audio6 = new Audio('audio/sala.mp3');

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
