const path = require('path')
const funcoes = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const arquivos = funcoes.lerDiretorio(caminho)
console.log(arquivos)
