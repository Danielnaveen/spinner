const options = {
  food: ["Pizza 🍕", "Burger 🍔", "Fries 🍟", "Salad 🥗", "Ice Cream 🍨"],
  movie: ["Action 🎥", "Comedy 😂", "Horror 👻", "Sci-Fi 🤖", "Romance ❤️"],
  activity: ["Go for a walk 🚶‍♂️", "Play a game 🎮", "Read a book 📚", "Nap 😴", "Workout 🏋️‍♂️"]
};

function spinDecision() {
  const category = document.getElementById("category").value;
  const choices = options[category];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `👉 ${randomChoice}`;
}
