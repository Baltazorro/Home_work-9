if (confirm("Почати тестування?")) {
  let numbetOfElements = parseInt(prompt("Введіть кількість елементів", "10"));

  let usersElements = new Array(numbetOfElements).fill(1);
  usersElements.fill(7, 5);
  document.write(`${usersElements}`);
}
