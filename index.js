const durationInput = document.querySelector('#duration')
const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')
const circle = document.querySelector('circle')

let duration = 0
let timeRemaining = 0
const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)

const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart(totalDuration) {
        duration = totalDuration
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', (perimeter * timeRemaining / duration) - perimeter)
    },
    onComplete(){
        console.log('Timer is completed')
    }
})

