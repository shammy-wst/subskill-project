function playPause() {
    let video = document.getElementById("video_stock");
    let button = document.querySelector(".play__button");

    if (video.paused) {
        video.play();
        button.style.display = "none";
    } else {
        video.pause();
        button.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let video = document.getElementById("video_stock");
    let playButton = document.querySelector(".play__button");

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


