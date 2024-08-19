if (confirm("Почати тестування?")) {
  function getRandomNumber(minNum, maxNum) {
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
  }
  function taxValue(prise, percentage) {
    let taxValue = (prise * percentage) / 100;
    return taxValue.toFixed(0);
  }
  let prisesInGrn = [];
  for (let index = 0; index < 10; index++) {
    let randomNumber = getRandomNumber(100, 500);
    prisesInGrn.push(randomNumber);
  }
  const taxValues = [];
  let percentageTax = 20;
  for (let i = 0; i < prisesInGrn.length; i++) {
    let costTax = taxValue(prisesInGrn[i], percentageTax);
    taxValues.push(costTax);
  }
  document.write(`Ціни в грн. = ${prisesInGrn}<br>
    Ціна податку в грн = ${taxValues}`);
}
