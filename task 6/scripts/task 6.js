if (confirm("Почати тестування?")) {
  function getRandomNumber(minNum, maxNum) {
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
  }
  let elements = [];
  for (let index = 0; index < 10; index++) {
    let randomNumber = getRandomNumber(1, 20);
    elements.push(randomNumber);
  }
  document.write(
    `Створений масив = ${elements}<br>Масив з перемноженими елементами =  `
  );

  elements.forEach((element) => {
    if (element > elements[0]) element = element * 2;
    document.write(`${element},`);
  });
}
