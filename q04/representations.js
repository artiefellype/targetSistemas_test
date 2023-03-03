const faturamentoMensalDistribuidoraPorEstado = [
  {state: "SP", faturamentoMensal: 67836.43},
  {state: "RJ", faturamentoMensal: 36678.66},
  {state: "MG", faturamentoMensal: 29229.88},
  {state: "ES", faturamentoMensal: 27165.48},
  {state: "Outros", faturamentoMensal: 19849.53}
]

const monthTotalBilling = faturamentoMensalDistribuidoraPorEstado.reduce((ac, value) => ac + value.faturamentoMensal, 0);

const stateRepresentation = (stateBilling) => {
  return (stateBilling * 100 / monthTotalBilling).toFixed(2);
}

faturamentoMensalDistribuidoraPorEstado.map((el)=>{
  console.log(`${el.state}: ${stateRepresentation(el.faturamentoMensal)}% de representação`)
})



