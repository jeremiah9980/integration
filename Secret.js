// SET YOUR SECRET CODE HERE
const SECRET_CODE = "1010"; // change this anytime

const form = document.getElementById("secretForm");
const input = document.getElementById("secretInput");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() === SECRET_CODE) {
    window.location.href = "index.html"; // redirect to your main site
  } else {
    errorMsg.classList.remove("hidden");
    input.classList.add("shake");

    setTimeout(() => {
      input.classList.remove("shake");
    }, 300);
  }
});
