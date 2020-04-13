const requireText = require('require-text')
const image = requireText('./headingIndicator.svg', require)


const setHeadingIndicator = heading => {
  // The rotation on the SVG is negative
  const rotation = heading * -1

  const modifiedSVG = image.replace('__rotate__', rotation)
  document.getElementById('headingIndicator').innerHTML = modifiedSVG
}

module.exports = setHeadingIndicator
