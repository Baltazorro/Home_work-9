if (confirm("Почати тестування?")) {
  let numbetOfElements = parseInt(prompt("Введіть кількість елементів", "6"));
  let middle = numbetOfElements / 2;
  let usersElements = new Array(numbetOfElements).fill(1);
  usersElements.fill(7, middle);
  document.write(`${usersElements}`);
}
