function gerarNumeroEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise (resolve =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumeroEntre(1, 60)
    .then(numBingo  => `O número gerado foi ${numBingo}`)
    .then(console.log)