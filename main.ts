/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Oct 2023
 * This program counts down
*/

// variables
let neoPixelStrip: neopixel.Strip = null
let loopCount: number

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
neoPixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.show()

// on button press
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  loopCount = 4
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
  neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
  neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
  neoPixelStrip.show()
  while ((loopCount) > 0) {
    // countdown
    basic.showString(loopCount.toString())
    neoPixelStrip.setPixelColor((loopCount - 1), neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.show()
    loopCount = loopCount - 1
    // change loopCount
    if ((loopCount) <= 0) {
      basic.showIcon(IconNames.Sad)
      basic.pause(1000)
      basic.clearScreen()
    }
  }
})
