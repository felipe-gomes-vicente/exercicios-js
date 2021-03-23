const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
  return new Promise(resolve => {
    fs.readFile(caminho, function(__dirname, conteudo) {
      resolve(conteudo.toString())
    })
    
  })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
  .then(conteudo => conteudo.split('\n'))
  .then(linhas => linhas.join(','))
  .then(conteudo => `O valor final é : ${conteudo}`)
  .then(console.log)
  //.then(linhas => console.log(linhas[1]))
  //.then(linhas => console.log(linhas.length))