const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");
console.log(bar);

speed.addEventListener("mousemove", function(e) {
    // setting up inner height to get that 0 px to 409
    const y = e.pageY - this.offsetTop;
    // turning y to percent
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    // making percent display to use that in css
    const height = Math.round(percent * 100) + "%";
    // adding style (percent)
    bar.style.height = height;

    const playbackRate = percent * (max - min) + min;
    // making two places after zero
    bar.textContent = playbackRate.toFixed(2) + "x";
    video.playbackRate = playbackRate;
});
