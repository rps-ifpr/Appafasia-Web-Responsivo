audio = 0;
som = function(){
  if (!audio) {
    audio = true;
  }
}


audio1 = new Audio('audio/agua.mp3');
audio2 = new Audio('audio/comer.mp3');
audio3 = new Audio('audio/caminhar.mp3');
audio4 = new Audio('audio/banheiro.mp3');
audio5 = new Audio('audio/conversar.mp3');
audio6 = new Audio('audio/dormir.mp3');


aud1 = function(){
    audio1.play();
}
aud2 = function(){
    audio2.play();
}
aud3 = function(){
    audio3.play();
}
aud4 = function(){
    audio4.play();
}
aud5 = function(){
    audio5.play();
}
aud6 = function(){
    audio6.play();
}