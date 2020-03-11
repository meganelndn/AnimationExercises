"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    test.addEventListener("mousemove", theMouseMove);
}

function theMouseMove(evt) {
    evt.target.setAttribute("cx", evt.pageX / window.innerWidth * 500);
    evt.target.setAttribute("cy", evt.pageY / window.innerHeight * 500 * (window.innerHeight / window.innerWidth));
}