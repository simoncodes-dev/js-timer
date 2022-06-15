class Timer {
    constructor(durationInput, startBtn, pauseBtn, callbacks){
        //Assign this to the HTML objects needed
        this.durationInput = durationInput
        this.startBtn = startBtn
        this.pauseBtn = pauseBtn
        
        if (callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }

        // Add click events to buttons
        this.startBtn.addEventListener('click',this.start)
        this.pauseBtn.addEventListener('click', this.pause)
    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining)
        }
        this.tick()
        this.timerId = setInterval(this.tick, 50)
    }
    pause = () => {
        clearInterval(this.timerId)
    }
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause()
            if (this.onComplete) {
                this.onComplete()
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.05
            if (this.onTick) {
                this.onTick(this.timeRemaining)
            }
        }
    }
    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    }
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2)
    }
}