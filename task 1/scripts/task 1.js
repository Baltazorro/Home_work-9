if (confirm("Почати тестування?")) {
  let numbetOfElements = parseInt(prompt("Введіть кількість елементів", "5"));

  let usersElements = new Array(numbetOfElements).fill(0);
  document.write(`${usersElements}`);
}
