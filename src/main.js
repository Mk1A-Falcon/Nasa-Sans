const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const date_changer = document.querySelector("#datepicker");



function Apod(date) {   //why? Because now I can call this function whenever the event listener picks up a change in the date and give the function "date" the rest of the func is the guide's only 

document.querySelector("#app").innerHTML = "<p>Loading...</p>";
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`).
then(response => response.json()).
then(data => {
  console.log(data);
  return data;        /// so the guide only uses console for example purposes, I (larp) Do both lol using two .then() 
}).
then(data => {
  let media;
  if (data.media_type==="image"){
    media=`<img src="${data.url}">`
  }
  else if (data.url.includes("youtube")) {   /// not covered in guide
    media=`<iframe src="${data.url}" title="${data.title}"></iframe>`
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
};

/// calling it once so the default date(read devlogs) is shown automatically
Apod("2024-02-11")

/// function for calling the above function when event listener calls the above function :RAHHH:
date_changer.addEventListener("change", () => {
  Apod(date_changer.value);
});