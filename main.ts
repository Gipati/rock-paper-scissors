let Send_hånd_til = 0
input.onGesture(Gesture.Shake, function () {
    Send_hånd_til = randint(1, 3)
    if (Send_hånd_til == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (Send_hånd_til == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (Send_hånd_til == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
    	
    }
})
