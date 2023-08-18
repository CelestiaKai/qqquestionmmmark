"use strict";

document.addEventListener("DOMContentLoaded", () => {
    let play_button = document.getElementById("play-button");
    let audio_player = document.getElementById("audio-player");
    let hidden_text = document.getElementById("hidden-text");

    play_button.addEventListener("click", () => {
        audio_player.play();
        play_button.style.display = "none";
        hidden_text.style.display = "block";
    });
});
