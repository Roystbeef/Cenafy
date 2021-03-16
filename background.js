const DELAY_IN_MS = 3000;
const VIDEO_LENGTH_IN_MS = 20000;

const VIDEO_HTML_STRING =
  "<video autoplay loop style='height: 100vh; width: 100vw'><source src='https://raw.githubusercontent.com/Roystbeef/Cenafy/master/cena.webm' type='video/webm'><source src='https://raw.githubusercontent.com/Roystbeef/Cenafy/master/cena.mp4' type='video/mp4'></video>";

function cenafy() {
  setTimeout(() => {
    const body = document.body;
    body.innerHTML = VIDEO_HTML_STRING;
    body.style.backgroundColor = "black";
    setTimeout(() => {
      // Wait 20 seconds for cena to finish
      window.location.replace(document.URL);
    }, VIDEO_LENGTH_IN_MS);
  }, DELAY_IN_MS);
}

const chance = Math.floor(Math.random() * 100);
if (chance === 69) {
  cenafy();
}
