'use strict';

const input = document.querySelector("input[type=email]");
const submitBtn = document.querySelector("input[type=submit]");

submitBtn.addEventListener("click", () => {
    if (input.value === "" || !input.value.includes("@")) input.style.outlineColor = "red";
});

input.addEventListener("keyup", () => {
    input.style.removeProperty("outline-color");
    if (input.value.includes("@")) return;
    input.style.outlineColor = "red";
});