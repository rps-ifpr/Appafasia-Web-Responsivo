cadastrarUsuario = function(){
	var nome = $("#nome").val();
	var sobrenome = $("#sobrenome").val();
	var senha = $("#senha").val();
	var email = $("#email").val();
    var tipo = $("#tipo").val();
    var nascimento = $("#nascimento").val();
    var cidade = $("#cidade").val();
    var estado = $("#estado").val();
    var endereco = $("#endereco").val();
    var bairro = $("#bairro").val();
    var sexo = $("#sexo").val();
    var telefone = $("#telefone").val();

    var profissao = $("#profissao").val();
    var fonoaudiologo = $("#lista_fonoaudiologo").val();

	php = "../../php/cadastrar_usuario.php?nome="+nome+"&senha="+senha+"&sobrenome="+sobrenome+"&email="+email+"&tipo="+tipo+"&nascimento="+nascimento+
    "&cidade="+cidade+"&estado="+estado+"&endereco="+endereco+"&bairro="+bairro+"&sexo="+sexo+"&telefone="+telefone+"&fonoaudiologo="+fonoaudiologo+
    "&profissao="+profissao;
    console.log(php);
    var resposta = chamaBanco(php);
    console.log(resposta);
    
    if(resposta.toLowerCase().indexOf("duplicate") >= 0){
        alert("E-mail já existe, não foi possível cadastrar.");
        return false;
    }

    if(resposta > 0){
    	alert("Usuário cadastrado com sucesso!");
        window.location = "../../atividade/";
    }
}

cadastrarCategoria = function(){
    var imagem = $("#imagem");
    console.log(imagem);
    if(imagem.files.length > 4){
        alert("Só é permitido inserir no máximo 4 imagens para cada categoria.");
    }
}

mostrar_fonoaudiologos = function(){
    php = "../../php/mostrar_fonoaudiologos.php";
    var resposta = chamaBanco(php);
    $("#lista_fonoaudiologo").html(resposta); 

    $('#lista_fonoaudiologo').formSelect();  
}

$('select').change(function () {
  if($("#tipo").val() == 2){
    $("#fono").show();
    $("#outro").hide();
  }
  if($("#tipo").val() == 3){
    $("#outro").show();
    $("#fono").hide();
  }
});