function playPause() {
    var video = document.getElementById("video_stock");
    var button = document.querySelector(".play__button");

    if (video.paused) {
        video.play();
        button.style.display = "none";
    } else {
        video.pause();
        button.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("video_stock");
    var playButton = document.querySelector(".play-button");

    video.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playButton.style.display = "none";
        } else {
            video.pause();
            playButton.style.display = "block";
        }
    });
});


