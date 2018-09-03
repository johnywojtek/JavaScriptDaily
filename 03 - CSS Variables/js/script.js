document.addEventListener("DOMContentLoaded", function() {
    let inputs = document.querySelectorAll(".controls input");
    inputs.forEach(e =>
        e.addEventListener("mousemove", () => {
          const fix = e.dataset.sizing || ""
            document.documentElement.style.setProperty(
                `--${e.name}`,
                `${e.value + fix}`
            );
        })
    );
    let 
});
