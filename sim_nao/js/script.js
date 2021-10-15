audio = 0;
som = function(){
  if (!audio) {
    audio = true;
  }
}


audio1 = new Audio('audio/sim.mp3');
audio2 = new Audio('audio/nao.mp3');
audio3 = new Audio('audio/talvez.mp3');

aud1 = function(){
    audio1.play();
}
aud2 = function(){
    audio2.play();
}
aud3 = function(){
    audio3.play();
}