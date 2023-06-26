import { stopWatchState } from './utils/variables.js'

import { minutesDisplay, secondsDisplay } from './elements.js'

import Controls from './resetControls.js';

export let timerTimeOut;

export function stopWatch(minutes, seconds) {
    timerTimeOut = setInterval(() => {
        if(stopWatchState.isPaused) {
            return;
        }

        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        if (minutes === 0 && seconds === 0) {
            clearInterval(timerTimeOut)
            Controls().reset()
            console.log('Cronometro zerado!');
        }

        const minutesFormatados = minutes.toString().padStart(2, '0')
        const secondsFormatados = seconds.toString().padStart(2, '0')

        minutesDisplay.textContent = `${minutesFormatados}`
        secondsDisplay.textContent = `${secondsFormatados}`

    }, 1000)
}