document.addEventListener("DOMContentLoaded", () => {
  const dataElement = document.getElementById("data");
  dataElement.innerHTML = localStorage.getItem("data");
});
