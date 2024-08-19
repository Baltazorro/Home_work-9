if (confirm("Почати тестування?")) {
  let names = ["Roman", "Olga", "Maria", "Andrew", "Natali"];
  document.write(`Початковий масив = ${names}<br> Новий масив = `);

  names.forEach((element) => {
    document.write(`${element[0]}`);
  });
}
