const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttonTwo");
const buttonThree = document.querySelector(".buttonThree");

const sourceSafari = document.querySelector("#sourceSafari");
const sourceChrome = document.querySelector("#sourceChrome");
const videoPlayer = document.getElementById("videoPlayer");

const backgroundImage = document.getElementById("backgroundImage");

const videoSourcesChrome = [
  "./content/video/animation-1-vp9-chrome.webm",
  "./content/video/animation-2-vp9-chrome.webm",
  "./content/video/animation-3-vp9-chrome.webm",
];
const videoSourcesSafari = [
  "./content/video/animation-1-hevc-safari.mp4",
  "./content/video/animation-2-hevc-safari.mp4",
  "./content/video/animation-3-hevc-safari.mp4",
];

const imageSources = [
  "./content/images/bg-1.jpg",
  "./content/images/bg-2.jpg",
  "./content/images/bg-3.jpg",
];
// Background images zijn gegenereerd met Adobe FireFly AI tool
// Referentie stijl: Maycon Prasniewski – Dribbble

// actions
buttonOne.onclick = animationOne;
buttonTwo.onclick = animationTwo;
buttonThree.onclick = animationThree;

// Functions
function animationOne() {
  videoPlayer.pause();
  backgroundImage.src = imageSources[0];
  sourceSafari.src = videoSourcesSafari[0];
  sourceChrome.src = videoSourcesChrome[0];
  videoPlayer.load();
}

function animationTwo() {
  videoPlayer.pause();
  backgroundImage.src = imageSources[1];
  sourceSafari.src = videoSourcesSafari[1];
  sourceChrome.src = videoSourcesChrome[1];
  videoPlayer.load();
}

function animationThree() {
  videoPlayer.pause();
  backgroundImage.src = imageSources[2];
  sourceSafari.src = videoSourcesSafari[2];
  sourceChrome.src = videoSourcesChrome[2];
  videoPlayer.load();
}
