const playBtn = document.querySelector(".play-btn"),
  pauseBtn = document.querySelector(".pause-btn"),
  video = document.querySelector("#video");

playBtn.addEventListener("click", (e) => {
  video.play();
  playBtn.classList.add("hide");
  pauseBtn.classList.remove("hide");
});

pauseBtn.addEventListener("click", (e) => {
  video.pause();
  pauseBtn.classList.add("hide");
  playBtn.classList.remove("hide");
});
