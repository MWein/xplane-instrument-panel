const requireText = require('require-text')
const image = requireText('./verticalAirspeed.svg', require)


const setVerticalAirspeedIndicator = speed => {
  // Used to multiply by -1 or 1 once the angle is calculated
  const isNegative = speed < 0

  // Vertical Airspeed is given in actual feet per minute. The gauge shows that divided by 100
  const absSpeed = Math.min(Math.abs(speed) / 100, 20)

  const speedTenAndUnder = absSpeed <= 10 ? absSpeed : 10
  const speedOverTen = Math.min(absSpeed > 10 ? absSpeed - 10 : 0, 5)
  const speedOver15 = absSpeed > 15 ? absSpeed - 15 : 0

  const initialRotation = speedTenAndUnder * 7
  const overTenRotation = speedOverTen * 13
  const over15Rotation = speedOver15 * 7.5

  const totalRotation = (initialRotation + overTenRotation + over15Rotation) * (isNegative ? -1 : 1)

  const modifiedSVG = image.replace('__rotate__', totalRotation)
  document.getElementById('verticalAirspeed').innerHTML = modifiedSVG
}

module.exports = setVerticalAirspeedIndicator
