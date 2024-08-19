if (confirm("Почати тестування?")) {
  function getRandomNumber(minNum, maxNum) {
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
  }
  let elements = [];
  for (let index = 0; index < 10; index++) {
    let randomNumber = getRandomNumber(-10, 10);
    elements.push(randomNumber);
  }

  let multiplication = 1;
  for (const element of elements) {
    if (element > 0) multiplication *= element;
  }
  document.write(
    `Створений масив = ${elements}<br>Добуток додатніх елементів = ${multiplication}`
  );
}
