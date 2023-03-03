const billingInfo = require("./data/dados.json");

// Criando vetor sem informacoes de feriados e finais de semana
let billing = billingInfo.filter((value) => value.valor != 0);

let monthAverage =
  billing.reduce((ac, value) => ac + value.valor, 0) / billing.length;

/* Visto que foi pedido para ignorar finais de semana apenas para o calculo da media */
let lowestBillingAmount_withWeekends = billingInfo.reduce(
  (ac, value) => (value.valor < ac ? value.valor : ac),
  Infinity
);

/* Utilizando acumulador do reduce para retornar o valor mais baixo comparado aos demais iniciando acumulador com valor infinito*/
let lowestBillingAmount = billing.reduce(
  (ac, value) => (value.valor < ac ? value.valor : ac),
  Infinity
);

/* Utilizando acumulador do reduce para retornar o valor mais alto comparado aos demais iniciando acumulador com valor 0*/
let higherBillingValue = billing.reduce(
  (ac, value) => (value.valor > ac ? value.valor : ac),
  0
);

let daysWithAboveAverageBilling = billing.filter(
  (value) => value.valor > monthAverage
).length;


console.log(
  "O menor valor de faturamento ocorrido em um dia do mês (contando feriados e finais de semana): ",
  lowestBillingAmount_withWeekends
);
console.log(
  "O menor valor de faturamento ocorrido em um dia do mês: ",
  lowestBillingAmount
);
console.log(
  "O maior valor de faturamento ocorrido em um dia do mês: ",
  higherBillingValue
);
console.log(
  "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ",
  daysWithAboveAverageBilling
);
