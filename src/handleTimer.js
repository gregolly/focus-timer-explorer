import { stopWatch } from "./stopWatch.js"

import Controls from "./resetControls.js"

import { 
    inputMinutes, 
    inputSeconds, 
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonUnmuted,
    buttonMute
} from './elements.js'


const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonUnmuted,
    buttonMute
})

export function handleTimer(event) {
    event.preventDefault()
    let minutes = parseInt(inputMinutes.value)
    let seconds = parseInt(inputSeconds.value)

    if (isNaN(minutes) || isNaN(seconds)) {
        console.error('Formato de tempo inválido.');
        return;
    }

    stopWatch(minutes, seconds)

    controls.reset()

    inputMinutes.value = ''
    inputSeconds.value = ''
}

