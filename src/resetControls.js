export default function Controls({
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonUnmuted,
    buttonMute
}) {
    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonStop.classList.remove('hide')
    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function reset() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonStop.classList.remove('hide')
    }

    function stop() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        buttonStop.classList.add('hide')
    }

    function playMusic() {
        buttonUnmuted.classList.add('hide')
        buttonMute.classList.remove('hide')
    }

    function stopMusic() {
        buttonUnmuted.classList.remove('hide')
        buttonMute.classList.add('hide')
    }

    return {
        play, 
        pause, 
        reset,
        stop,
        playMusic,
        stopMusic
    }
}


