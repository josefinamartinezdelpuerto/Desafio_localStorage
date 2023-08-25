document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("inputText");
  const textButton = document.getElementById("buttonText");
  textButton.addEventListener("click", () => {
    localStorage.setItem("data", inputElement.value);
  });
});
