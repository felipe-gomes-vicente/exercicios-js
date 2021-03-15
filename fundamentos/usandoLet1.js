let numero = 1
{
  let numero = 2 // escopo de bloco
  console.log('dentro =', numero)
}
console.log('fora =', numero)
