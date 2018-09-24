function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(el) {
    sliderImages.forEach(e => {
        const slideInAt = window.scrollY + window.innerHeight - e.height / 2;
        const imageBottom = e.offsetTop + e.height;
        const isHalfShown = slideInAt > e.offsetTop;
        const isNotScrollPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrollPast) {
            e.classList.add("active");
        } else {
            e.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", debounce(checkSlide));
