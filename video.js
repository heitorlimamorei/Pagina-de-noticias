let permissao = window.prompt('Sua senha ')
let status

    switch (permissao) {
        case 'usuarioap':
            console.log("Usuario aprovado")
            alert('Bem Vindo UserAp!');
            document.write(`Logado com : ${permissao}`)
            status = "logado";
            break;

            case 'usuarioap1':
                console.log("Usuario aprovado")
                alert('Bem Vindo UserAp1')
                document.write(`Logado com : ${permissao}`)
                status = "logado";
                break;
             case 'heitor':
                console.log("Usuario aprovado")
                alert('Bem Vindo UserAp2')
                document.write(`Logado com : ${permissao}`)
                status = "logado";
                break;    

        default:
            console.log('Usuario negado')
            alert('Ascesso Negado')
            document.writeln("USUARIO ILEGAL")
            status = "não aprovado";
            break;
    }
    function ghu (){
    console.log("Pedido de Usuario")
    console.log(`Nome de usuario${permissao}`)
    alert(`Nome de usuario:${permissao} Status: ${status}`)
    
    }