const heartCounter = document.getElementById("heart-count");
let heartCount = 0;

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("heart-icon")) {
    heartCount++;
    
    heartCounter.innerText = heartCount;
  }
});