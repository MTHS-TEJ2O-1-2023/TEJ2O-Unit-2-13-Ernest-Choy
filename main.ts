/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Oct 2023
 * This program counts down
*/

let loopCount: number = 4

// setup 
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// on button press
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  let neoPixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
  while (loopCount < -1) {
    basic.showString(loopCount.toString())
    neoPixelStrip.setPixelColor(loopCount, neopixel.colors(NeoPixelColors.Black))
    loopCount = loopCount - 1

  if (loopCount = -1)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.clearScreen()
  }
})
