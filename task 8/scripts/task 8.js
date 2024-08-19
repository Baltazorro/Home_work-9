if (confirm("Почати тестування?")) {
  let carsNumbers = [
    "AB3452BA",
    "AT2233VA",
    "KA7293KA",
    "J234J",
    "AA3272BB",
    "BA43PAB",
  ];
  document.write(`Початковий масив = ${carsNumbers}<br> Новий масив = `);
  let searchLetter = "A";
  carsNumbers.forEach((element) => {
    if (element[0] === searchLetter) document.write(`${element},`);
  });
}
