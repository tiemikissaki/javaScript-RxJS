let pedra= 0;
let papel= 5;
let tesoura= 2;

let arrPlayer2 = [pedra, papel, tesoura]

function converter(numero){
    let desc ='';
    switch (numero) {
        case 0:
            desc = '👊'
            break;
        case 2:
            desc = '✌'
            break;
        case 5:
            desc = '🖐'
            break;
        default:
            throw Error('Ops, deu ruim!!!!')
    }
    return desc;
}
function descricao(player1, player2, desc){
    return `Você jogou '${converter(player1)}' e o segundo jogador '${converter(player2)}' => ${desc}`
}

function play(player1){
    let player2 =arrPlayer2[Math.floor(Math.random() * 3)];

    if( player1 === pedra && player2 === tesoura ) {
        return descricao(player1, player2, 'Você perdeu.')
    }

    if( player1 === pedra && player2 === pedra ) { 
        return descricao(player1, player2, 'Empatou.')
    }

    if( player1 === pedra && player2 === papel ) { 
        return descricao(player1, player2, 'Você ganhou.')
    }


    if( player1 === papel && player2 === tesoura ) {
        return descricao(player1, player2, 'Você perdeu.')
    }

    if( player1 === papel && player2 === papel ) { 
        return descricao(player1, player2, 'Empatou.')
    }

    if( player1 === papel && player2 === pedra ) { 
        return descricao(player1, player2, 'Você ganhou.')
    }


    if( player1 === tesoura && player2 === pedra ) {
        return descricao(player1, player2, 'Você perdeu.')
    }

    if( player1 === tesoura && player2 === tesoura ) { 
        return descricao(player1, player2, 'Empatou.')
    }

    if( player1 === tesoura && player2 === papel ) { 
        return descricao(player1, player2, 'Você ganhou.')
    }

}



console.log(play(tesoura))