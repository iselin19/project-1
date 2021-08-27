input.onButtonPressed(Button.A, function () {
    basic.showString("dodo")
    basic.showIcon(IconNames.Giraffe)
    basic.clearScreen()
    basic.showLeds(`
        . # . # #
        # . . # #
        # # . . #
        # . # . #
        . # . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("julian er kul")
    basic.showString("" + (images.createBigImage(`
        . . # . # # # . # .
        . . # . . . # . # #
        # # # # # . # # # #
        # . # . # . . # . #
        # . . . # # # # . #
        `)))
})
input.onGesture(Gesture.Shake, function () {
    roll = randint(1, 6)
    if (roll == 6) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (roll == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (roll == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (roll == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # # .
            . . . # .
            . # # # .
            `)
    }
    if (roll == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    }
    if (roll == 1) {
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    basic.clearScreen()
})
let roll = 0
music.playMelody("- G E A D - E - ", 120)
basic.forever(function () {
	
})
