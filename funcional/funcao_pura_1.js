// Uma função pura é uma função em que o valor de retorno 
//é determinado APENAS por seus valores de entrada,
// sem efeitos colaterais observáveis

//const PI = 3.141592

//Função impura, pois  impura - PI é um valor externo!
function areaCirc(raio){
    return raio * raio * Math.PI // PI é uma constante e é estável. e o Math é algo externo, por isso é uma função impura. Pois depende de algo externo.
}

console.log(areaCirc(10))

//Função Pura

function areaCircPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.141592))
console.log(areaCircPura(10, Math.PI))