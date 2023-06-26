const form = document?.querySelector('#form')
const buttonPlay = document?.querySelector('.play')
const buttonStop = document?.querySelector('.stop')
const buttonPause = document?.querySelector('.pause')
const minutesDisplay = document?.querySelector('.minutes')
const secondsDisplay = document?.querySelector('.seconds')
const inputMinutes = document?.querySelector('.input-minutes')
const inputSeconds = document?.querySelector('.input-seconds')
const buttonUnmuted = document?.querySelector('.unmute')
const buttonMute = document?.querySelector('.mute')

export {
    buttonPlay,
    buttonPause,
    buttonStop,
    form,
    inputMinutes,
    inputSeconds,
    minutesDisplay,
    secondsDisplay,
    buttonUnmuted,
    buttonMute
}