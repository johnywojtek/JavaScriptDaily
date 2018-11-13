document.addEventListener("DOMContentLoaded", function() {
        const nav = document.querySelector("nav");
        const height = nav.offsetTop;

        function fixed() {
                if (height < window.scrollY) {
                        document.body.style.paddingTop = `${
                                nav.offsetHeight
                        }px`;
                        nav.classList.add("fixed-nav");
                } else {
                        document.body.style.paddingTop = 0;

                        nav.classList.remove("fixed-nav");
                }
        }
        document.addEventListener("scroll", fixed);
});
