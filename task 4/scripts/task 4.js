if (confirm("Почати тестування?")) {
  function getRandomNumber(minNum, maxNum) {
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
  }
  let elements = [];
  for (let index = 0; index < 10; index++) {
    let randomNumber = getRandomNumber(1, 200);
    elements.push(randomNumber);
  }
  document.write(`Створений масив = ${elements}<br>Значення більші за 100 =`);
  for (const element of elements) {
    if (element > 100) document.write(` ${element},`);
  }
}
