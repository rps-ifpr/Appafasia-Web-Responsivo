$(document).ready(function(){
(function(){
  var alturaTela = $(window).height();
  var tamanho = $(".principal-alt").height();
  $(".principal-alt").height(alturaTela-200);
  $('.altura-rela').css('min-height', alturaTela-200);
  var hasTimer = false;
  $('.img').on('click', function() {
    $('.timer').timer({
      editable: true
    });
  });

})();

/*mover objetos*/
    erros = 0;//setar as variaveis antes de começar
    acertos = 0;//setar as variaveis antes de começar
    cont = 0;
    ids = [];

    $(".img").click(function(){
        if (ids.length<1) {//verifica se o array tem um valor
          ids[cont] = $(this).attr("id");//adiciona o id na posição 0
          cont++
          $(this).addClass("selecionado");
        }else{
          if (ids.length=1) {//verifica se o array tem dois valor
            ids[cont] = $(this).attr("id");//adiciona o id na posição 1
            $(this).addClass("selecionado");
            conferir(ids);//manda para a função
            cont = 0;//zera o contador
            ids = [];//zera o array

          }
        }
    });

    conferir = (function(ids){
      //verifica se o valor é igual e se o ID é diferente
      if ( ($("#"+ids[0]).attr("value") == $("#"+ids[1]).attr("value")) && (ids[0] != ids[1])) {
        acertos += 1;//adiciona +1 para os acertos
        console.log(acertos);
        $("#"+ids[0]).remove()//remove primeiro elemento do vetor
        $("#"+ids[1]).remove()//remove segundo elemento do vetor
      }
      else {//se tiver errado
        erros += 1;// adiciona +1 aos erros
        $(".erro").attr("value",erros);//escreve no campo erro
        $(".selecionado").removeClass("selecionado");
      }
      if (acertos == 5) {//parar o tempo
        $('.timer').timer('pause');
        pontuacao = acertos/(erros+1)
        $(".pontuacao").attr("value",pontuacao);
        $("#pesquisa").css('border', 'red solid 3px');
      }
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

audio1 = new Audio('audio/caixa2.mp3');
audio2 = new Audio('audio/flor-escura.mp3');
audio3 = new Audio('audio/positivo.mp3');
audio4 = new Audio('audio/flor-branca.mp3');
audio5 = new Audio('audio/negativo.mp3');
audio6 = new Audio('audio/pesado.mp3');
audio7 = new Audio('audio/magro.mp3');
audio8 = new Audio('audio/caixa1.mp3');
audio9 = new Audio('audio/gordo.mp3');
audio10 = new Audio('audio/leve.mp3');


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
aud9 = function(){
  if (audio) {
   audio9.play();
  }
}
aud10 = function(){
  if (audio) {
   audio10.play();
  }
}
