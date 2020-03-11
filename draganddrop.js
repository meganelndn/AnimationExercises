"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    svg.addEventListener("mousedown", startDrag);
    svg.addEventListener("mousemove", drag);
    svg.addEventListener("mouseup", endDrag);
}

function startDrag(evt) {
    //svg.addEventListener("mousemove", drag);
}

function drag(evt) {
    evt.target.setAttribute("cx", evt.pageX / window.innerWidth * 500);
    evt.target.setAttribute("cy", evt.pageY / window.innerHeight * 500 * (window.innerHeight / window.innerWidth));
}

function endDrag(evt) {
    svg.removeEventListener("mousemove", drag);
}