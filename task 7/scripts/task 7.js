if (confirm("Почати тестування?")) {
  function getRandomNumber(minNum, maxNum) {
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
  }
  function priseWithDiscountPercentage(prise, percentage) {
    let discountPercentage = (prise * percentage) / 100;
    return (prise = prise - discountPercentage).toFixed(0);
  }

  let elements = [];
  for (let index = 0; index < 10; index++) {
    let randomNumber = getRandomNumber(100, 2000);
    elements.push(randomNumber);
  }
  document.write(`Ціни товарів = ${elements} <br>Ціни з скидками =    `);
  let priseDiscount = 1000;
  let discountPercentage = 30;
  elements.forEach((element) => {
    if (element >= priseDiscount)
      document.write(
        `${priseWithDiscountPercentage(element, discountPercentage)},`
      );
    else document.write(`${element},`);
  });
}
