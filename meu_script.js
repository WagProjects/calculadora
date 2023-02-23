function calcular(tipo, valor) {
    if (tipo === 'acao'){
        if (valor === 'c'){//limpar o visor
            document.getElementById('painel').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){//Concatenar e exibir os simbolos aritiméticos no painel. 
            document.getElementById('painel').value += valor
        }

        if(valor === '='){//Usando eval() para processar a expressao que se comporta como string até o momento, portanto interpretando apartir de agora como expressao matematica.
            var valor_campo = eval(document.getElementById('painel').value)
            document.getElementById('painel').value = valor_campo
        }


    } else if (tipo === 'valor'){//Concatenar os valores e exibir no painel.
        document.getElementById('painel').value += valor
    }
    
}
