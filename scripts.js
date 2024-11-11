const decreaseBtn = document.getElementById("decreaseBtn");
const resetBt = document.getElementById("resetBt");
const incremementBtn = document.getElementById("incremementBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;


incremementBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}
