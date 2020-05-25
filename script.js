const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//Time padding
function timePad(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}

//Format time
function formatTime(time) {
  if (time < 3600) {
    return `${timePad(Math.floor(time / 60) % 60)}:${timePad(
      Math.floor(time) % 60
    )}`;
  } else {
    return `${timePad(Math.floor(time / 3600))}:${timePad(
      Math.floor(time / 60) % 60
    )}:${timePad(Math.floor(time) % 60)}`;
  }
}

//Toggle video status
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = "<i class='fas fa-play fa-2x'></i>";
  } else {
    play.innerHTML = "<i class='fas fa-pause fa-2x'></i>";
  }
}

//Update video progress
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  timestamp.innerText = `${formatTime(video.currentTime)}`;
}

//Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//Set video progress
function setVideoProgress() {
  video.currentTime = (progress.value / 100) * video.duration;
}

//Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
