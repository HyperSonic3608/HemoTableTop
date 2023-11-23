const timer = document.querySelector('.timer')
const c = document.getElementById('myCanvas')
const timerCtx = c.getContext('2d')

var segundos = 0
var intervalId
var timeoutId
var x = 0

function seconds() {
  document.getElementById('time').innerHTML = `${
    (Math.floor(segundos / 1000) < 10 ? '0' : '') + Math.floor(segundos / 1000)
  }:${Math.floor((segundos % 1000) / 10)}`
  requestAnimationFrame(animate)
  segundos += 1000 / (10 / 3 / 0.4)
}

function startTimer() {
  clearTimer()
  timer.style.display = 'flex'
  segundos = 0
  x = 0
  intervalId = setInterval(seconds, 1000 / (10 / 3 / 0.4))
  timeoutId = setTimeout(() => {
    wrongAnswer()
    stopTimer()
    setTimeout(closeQuestion, 500)
  }, 30 * 1000)
}

function stopTimer() {
  clearInterval(intervalId)
  clearTimeout(timeoutId)
  return segundos
}

function clearTimer() {
  timer.style.display = 'none'
  timerCtx.clearRect(0, 0, 5000, 40)
}

function animate() {
  timerCtx.beginPath()
  timerCtx.arc(x, 20, 20, 0, 2 * Math.PI)
  timerCtx.fillStyle = 'rgb(166, 49, 172)'
  timerCtx.fill()
  timerCtx.closePath()
  x = x + window.innerWidth / 250
}