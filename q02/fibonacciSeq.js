
let number = 21

const belongsToFibonacci = (value) => {

  let prev = 0
  let actual = 1

  while(actual <= value){
    if(actual === value){
      return true
    }

    let prox = prev + actual
    prev = actual
    actual = prox

  }
  return false
}

console.log((belongsToFibonacci(number) ? `${number} pertence a sequência Fibonacci`: `${number} não pertence a sequência Fibonacci`))