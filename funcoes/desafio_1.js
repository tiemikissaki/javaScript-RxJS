// 1) 
//somar (3) (4) (5)

//2)
//fn -> 3 * 7
//fn -> 3 + 7
//fn -> 3 - 7
//calcular (3) (7) (fn)

//resposta do professor:
//1) 
function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c
     }
   }
}

const somarAB = somar(3)(4)
console.log(somarAB(13))
console.log(somar(13)(20)(30))

//2) 

function calcular(x) {
    return function(y){
        return function(fn){
            return fn(x, y)
        }
    }
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

function retornaValor(a, b ) {
    return `Valor A: ${a} e Valor do B: ${b}`
}

const r1 = calcular(10)(5)(subtrair)
const r2 = calcular(10)(5)(multiplicar)
const r3 = calcular('teste')('nada')(retornaValor)
console.log(r3)
console.log(r1)
console.log(r2)