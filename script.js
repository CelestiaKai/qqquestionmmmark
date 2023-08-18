document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-button");
    const audioPlayer = document.getElementById("audio-player");
    const hiddenText = document.getElementById("hidden-text");

    playButton.addEventListener("click", function() {
        audioPlayer.play();
        playButton.style.display = "none";
        hiddenText.style.display = "block";
    });
});
