{ 
  { 
    { 
      { 
        var sera = 'Será???' 
        console.log(sera)
      } 
    } 
  } 
}
console.log(sera)// mesmo fora do bloco a variavel é visível

function teste() {
    var local = 123
}

teste()
console.log(local) // não é acessível fora da função