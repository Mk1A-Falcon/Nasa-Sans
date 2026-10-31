const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const date_o = document.querySelector("#datepicker").value || "2024-02-11";

document.querySelector("#app").innerHTML = "<p>Loading...</p>";
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date_o}`).
then(response => response.json()).
then(data => {
  console.log(data);
  return data;
}).
then(data => {
  let media;
  if (data.media_type==="image"){
    media=`<img src="${data.url}">`
  }
  else if (data.url.includes("youtube")) {
    media=`<iframe src="${data.url}" title="${data.title}">`
  }
  else {
    media=`<video src="${data.url}" controls></video>`
  };
  /// I forgot what I was going to write here ig
  document.querySelector("#app").innerHTML=`
  <h1>${data.title}</h1>
  ${media}
  <p>${data.explanation}</p>`
}).catch(err => {
  document.querySelector("#app").innerHTML=`<h2>Error fetching data :(</h2><p>"${err.message}"</p>`
});
 