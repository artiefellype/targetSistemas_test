let frase = "socorram-me, subi no onibus em marrocos"

const revertString = (str) => {
  let revertedFrase = ""

  for(let i = str.length -1; i >= 0; i--){
    revertedFrase += str[i]
  }

  return revertedFrase
}

console.log(frase)
console.log(revertString(frase));