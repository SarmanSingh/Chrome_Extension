async function fetchJoke() {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any");
      const data = await response.json();
  
      const jokeElement = document.getElementById("joke");
  
      if (data.type === "single") {
        jokeElement.textContent = data.joke;
      } else if (data.type === "twopart") {
        const setup = data.setup;
        const delivery = data.delivery;
        jokeElement.innerHTML = `<p>${setup}</p><p>${delivery}</p>`;
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    fetchJoke();
  
    const refreshButton = document.getElementById("refreshButton");
    refreshButton.addEventListener("click", fetchJoke);
  });
  