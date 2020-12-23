let permissao;
 let permissao = window.prompt('sua senha ') 

switch (permissao) {
    case 'usuarioap':
        console.log("Usuario aprovado")
        alert('Bem Vindo UserAp!');
        break;
        
    default:
        console.log('Usuario negado')
        alert('Ascesso Negado')
        open(URL='https://www.youtube.com/watch?v=ZZXEMrzzsTU')
        break;
}
function afd() {
    console.log("Pedido de Usuario")
    console.log(`Nome de usuario${permissao}`)
    alert(`Nome de usuario:${permissao} Status: Logado`)
}