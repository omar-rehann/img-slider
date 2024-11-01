let container = document.querySelector(".img-continer");
let imgEl = document.querySelectorAll(".img-continer img");
let right = document.querySelector(".frist");
let left = document.querySelector(".second");
let current = 0;
let timeout;

right.addEventListener("click", () => {
    current++;
    clearTimeout(timeout);
    updateImg();
});

left.addEventListener("click", () => {
    current--;
    clearTimeout(timeout);
    updateImg();
});

function updateImg() {
    if (current >= imgEl.length) {
        current = 0;
    } else if (current < 0) {
        current = imgEl.length - 1;
    }

    container.style.transform = `translateX(-${current * 100}%)`;

    timeout = setTimeout(() => {
        current++;
        updateImg();
    }, 5000);
}

updateImg();