/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: katherine
 * Created on: Mar 2026
 * This program ...
*/


//happy  
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Variables to store the two random numbers
let number1 = 0
let number2 = 0

// On start, generate 2 random integers from 0 to 99
number1 = randint(0, 99)
number2 = randint(0, 99)

// On button A, show the 1st number
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString( '#1:' + number1)
    basic.showIcon(IconNames.Happy)
})

// On button B, show the 2nd number
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString( '#2:' + number2)
    basic.showIcon(IconNames.Happy)
})

// On shake, compare the numbers using if...else
input.onGesture(Gesture.Shake, function () {
    if (number1 < number2) {
        basic.clearScreen()
        basic.showString( number1 + " < " + number2 )
    } else {
        basic.clearScreen()
        basic.showString(number1 + " > " + number2)
    }
    basic.showIcon(IconNames.Sad)
})
