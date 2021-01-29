function touchdate() {
    document.open(URL = "https://www.zwicon.com/how-to-use.html")
}

let permissao = window.prompt('Sua senha ')
let status

    switch (permissao) {
        case 'usuarioap':
            console.log("Usuario aprovado")
            alert('Bem Vindo UserAp!');
            status = "logado";
            break;

            case 'usuarioap1':
                console.log("Usuario aprovado")
                alert('Bem Vindo UserAp1')
                status = "logado";
                break;
             case 'heitor':
                console.log("Usuario aprovado")
                alert('Bem Vindo UserAp2')
                status = "logado";
                break;    

        default:
            console.log('Usuario negado')
            alert('Ascesso Negado')
            document.writeln("USUARIO ILEGAL")
            status = "não aprovado";
            break;
    }