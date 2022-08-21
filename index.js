
// Team A

const scoreEl = document.getElementById("score")
const increaseEl = document.getElementById("increase")
const decreaseEl = document.getElementById("decrease")

let score = 0

increaseEl.addEventListener("click", function() {
  score += 1
  scoreEl.textContent = score
})

decreaseEl.addEventListener("click", function() {
  score -= 1
  scoreEl.textContent = score
})

// Team B

const scoreTwo = document.getElementById("score-two")
const increaseTwo = document.getElementById("increaseB")
const decreaseTwo = document.getElementById("decreaseB")

let scoreB = 0

increaseTwo.addEventListener("click", function() {
  scoreB += 1
  scoreTwo.textContent = scoreB
})

decreaseTwo.addEventListener("click", function() {
  scoreB -= 1
  scoreTwo.textContent = scoreB
})

// Reset botton

const resetBtn = document.getElementById("reset-btn")

resetBtn.addEventListener("click", function() {
  score = 0
  scoreB = 0
  scoreEl.textContent = 0
  scoreTwo.textContent = 0
})