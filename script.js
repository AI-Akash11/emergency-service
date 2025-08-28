const copyCounter = document.getElementById('copy-count');
let copyCount = 0;

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-button")) {
    copyCount++;
    copyCounter.innerText = copyCount;

    const card = e.target.closest(".cards");
    const number = card.querySelector(".copy-number").innerText;

    navigator.clipboard.writeText(number).then(() => {
    });
  }
});
