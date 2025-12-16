const text = "> Beyond your awareness.";
const speed = 150;

let index = 0;

window.addEventListener("DOMContentLoaded", () => {
    const terminal = document.getElementById("terminal");
    const subtitle = document.getElementById("subtitle");

    if (!terminal || !subtitle) return;

    function typeWriter() {
        if (index < text.length) {
            terminal.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                subtitle.classList.add("show");
            }, 400);
        }
    }

    typeWriter();
});
