"use strict";

document.addEventListener("DOMContentLoaded", init);

async function init() {
    let response = await fetch("optimised.svg");
    let mySvgData = await response.text();
    document.querySelector("section").innerHTML = mySvgData;

    document.querySelector("#shapes").addEventListener("click", clickedColor);
    document.querySelector("#colors").addEventListener("click", clickedShape);
}