"use strict";

const beachball = document.querySelector(".ball");

let position = 0;
const speed = 400;
const framerate = 100;
let last;

function step() {
    const now = performance.now();
    const delta = now - last || 0;
    last = now;

    position += speed / (1000 / delta);

    if (position > 400) {
        position = 0;
    }

    beachball.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(step);
}

step();