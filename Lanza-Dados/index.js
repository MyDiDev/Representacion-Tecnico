function rollDice() {
  const numOfDice = document.getElementById("number").value;
  const result = document.getElementById("result");
  const dices = document.getElementById("img");
  const values = [];
  const img = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    img.push(`<img src='${value}.png' alt='Dice${value}'>`);
  }

  result.textContent = `Dice ${values.join(", ")}`;
  dices.innerHTML = img.join("");
}
