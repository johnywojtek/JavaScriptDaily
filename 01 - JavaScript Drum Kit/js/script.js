document.addEventListener("DOMContentLoaded", function() {
    console.log("afwafawfawfwa");

    window.addEventListener("keydown", e => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        console.log(e);

        const div = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.clasList.add("playing");
    });
    const keys = document.querySelectorAll(".key");
    keys.forEach(key =>
        key.addEventListener("transitionend", removeTransition)
    );
    function removeTransition(e) {
        console.log(e);
    }
});
