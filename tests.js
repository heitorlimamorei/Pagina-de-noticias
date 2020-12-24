
 var Names
 function asd () {
	 var Names = prompt('Coloque seu nome aqui')
	 alert(`Olá ${Names}`)

 }
function afd () {
	 var dips = prompt("Coloque sua questão aqui ")
	 if (dips == "Nomes") {
		 alert(`Nome registrado ${Names}`)
		 console.log("Nome Registrado Logado")
	 }
	 if (dips == "Site") {
		 alert("Esse site está sendo progamado para testar varias tecnologias Web")
	 }
	 if (dips =="Documento") {
		document.write('Caso queira saber mais sobre o codico do site ascesse pagina com F12')
	 }
	 if (dips =="Add") {
		 var Names = prompt("Coloque um Nome aqui")
		 var senhas = prompt("Coloque sua senha")
		 alert(`Confirmando sua senha e ususario , senha ${senhas}, usuario ${Names}`)
		 console.log("Dados Registrados")
		 console.log(`Usuario-${Names}  Senha-${senhas}`)
	 }
	 if (dips == "Games") {
		 var xix = prompt("Quer Jogar um game no seu navegar ?, respondo Sim ou Não")
		 if (xix == "Sim") {
			 var pontos = 0
			 alert("Ok é muito importante você seguir as minhas recomendações!")
			 alert("Vamos começar aperte a tecla F12 para abir as devtols e clique em console")
			 alert("Por lá vc sabe se acertou a pergunta ou não ok ")
			 console.log("Game começado")
			 var zimi = prompt("O atual presidente dos EUA é o Donald Trump ?, Responda com Sim ou Não")
			 if (zimi == "Sim") {
				 console.log("Acertou")
				 var pontos = pontos + 1
				 console.log(`Sua pontuação agora é ${pontos} Pontos!`)
			 }else{
				 console.log("Errou")
				 var pontos = pontos - 1
				 console.log(`Sua pontuação agora é ${pontos} Pontos!`)

			 }
				var zimi1 = prompt("foi o Heitor que programou isso ?")
				if (zimi1 == "Sim") {
				 console.log("Acertou")
				 var pontos = pontos + 1
				 console.log(`Sua pontuação agora é ${pontos} Pontos!`)
			 }else{
				 console.log("Errou")
				 var pontos = pontos - 1
				 console.log(`Sua pontuação agora é ${pontos} Pontos!`)

			 }
			 var klip = prompt("O Google e uma das maiores empresas do mundo ?")
			 if (klip == "Sim") {
				 console.log("Acertou")
				 var pontos = pontos + 1
				 console.log(`Sua pontuação agora é ${pontos} Pontos!`)
			 }else{
				 console.log("Errou")
				 var pontos = pontos - 1
				 console.log(`Sua pontuação agora é ${pontos} Pontos!`)

			 }


		 }else {
			 alert("Jogo não iniciado!")

		 }
	 }

}

