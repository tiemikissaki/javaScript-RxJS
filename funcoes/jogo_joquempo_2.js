let pedra= 0;
let papel= 5;
let tesoura= 2;
let arrPlayer2 = [pedra, papel, tesoura]

let jogadas = [
    {'player1':pedra, 'player2':tesoura, 'resultado':true}, 
    {'player1':pedra, 'player2':papel, 'resultado':false}, 
    
    {'player1':papel, 'player2':pedra, 'resultado':true}, 
    {'player1':papel, 'player2':tesoura, 'resultado':false}, 
    
    {'player1':tesoura, 'player2':papel, 'resultado':true}, 
    {'player1':tesoura, 'player2':pedra, 'resultado':false},
];
 
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

    if( player1 === player2 ) { 
        return descricao(player1, player2, 'Empatou.')
    }

    for (let i = 0; i < jogadas.length; i++) {
        const jogada = jogadas[i];
        if( jogada.player1 === player1 && jogada.player2 === player2){
            let resultado = jogada.resultado ? 'Você venceu.': 'Você perdeu.'
            return descricao(player1, player2, resultado)
        }
        
    }

}



console.log(play(tesoura))