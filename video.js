let permissao = window.prompt('Sua senha ')

    switch (permissao) {
        case 'usuarioap':
            console.log("Usuario aprovado")
            alert('Bem Vindo UserAp!');
            document.write(`Logado com : ${permissao}`)
            break;

            case 'usuarioap1':
                console.log("Usuario aprovado")
                alert('Bem Vindo UserAp1')
                document.write(`Logado com : ${permissao}`)
                break;
             case 'heitor':
                console.log("Usuario aprovado")
                alert('Bem Vindo UserAp2')
                document.write(`Logado com : ${permissao}`)
                break;    

        default:
            console.log('Usuario negado')
            alert('Ascesso Negado')
            document.writeln("USUARIO ILEGAL")
            break;
    }
    function ghu (){
    console.log("Pedido de Usuario")
    console.log(`Nome de usuario${permissao}`)
    alert(`Nome de usuario:${permissao} Status: Logado`)
    }