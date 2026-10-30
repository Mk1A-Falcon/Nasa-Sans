const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const date_o = document.querySelector("#datepicker").value || "2024-02-11";

document.querySelector("#app").innerHTML = "<p>Loading...</p>";
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date_o}`).
then(response => response.json()).
then(data => {
  console.log(data);
})