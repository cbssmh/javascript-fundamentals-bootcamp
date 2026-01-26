const button = document.querySelector("#btn");
const input = document.querySelector("#name");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  result.textContent = `Hello, ${input.value}`;
});
