const requireText = require('require-text')
const image = requireText('./verticalSpeed.svg', require)


const setVerticalSpeedIndicator = speed => {
  // Used to multiply by -1 or 1 once the angle is calculated
  const isNegative = speed < 0

  // Vertical Airspeed is given in actual feet per minute. The gauge shows that divided by 100
  const absSpeed = Math.min(Math.abs(speed) / 100, 20)

  const speedTenAndUnder = absSpeed <= 10 ? absSpeed : 10
  const speedOverTen = absSpeed > 10 ? absSpeed - 10 : 0

  const initialRotation = speedTenAndUnder * 7
  const overTenRotation = speedOverTen * 10.25

  const totalRotation = (initialRotation + overTenRotation) * (isNegative ? -1 : 1)

  const modifiedSVG = image.replace('__rotate__', totalRotation)
  document.getElementById('verticalSpeed').innerHTML = modifiedSVG
}

module.exports = setVerticalSpeedIndicator
