import { handleTimer } from './handleTimer.js'
import { stopWatchState } from './utils/variables.js'
import { timerTimeOut } from "./stopWatch.js"

import Controls from "./resetControls.js"
import Sound from './sounds.js'

import { 
    buttonPause, 
    buttonPlay, 
    buttonStop,
    minutesDisplay,
    secondsDisplay,
    buttonMute,
    buttonUnmuted,
    form
} from './elements.js'

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonUnmuted,
    buttonMute
})

const sound = Sound()


buttonPlay?.addEventListener('click', function() {
    controls.play()
    stopWatchState.isPaused = false
})

buttonPause?.addEventListener('click', function() {
    controls.pause()
    stopWatchState.isPaused = !stopWatchState.isPaused
})

buttonStop?.addEventListener('click', function() {
    clearInterval(timerTimeOut)
    controls.stop()
    minutesDisplay.textContent = '00'
    secondsDisplay.textContent = '00'
})

buttonMute.addEventListener('click', () => {
    controls.stopMusic()
    sound.bgAudio.pause()
})

buttonUnmuted.addEventListener('click', () => {
    controls.playMusic()
    sound.bgAudio.play()
})

form.addEventListener('submit', handleTimer)