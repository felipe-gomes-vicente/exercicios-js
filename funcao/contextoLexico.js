const valor = 'Global'

function minhaFuncao() {
  console.log(valor)
}

function exec() {
    const valor = 'Local'// já foi declarado antes trará a const valor = 'Global'
    minhaFuncao()
}
exec()