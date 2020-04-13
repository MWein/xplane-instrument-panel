require('./udpListener')

// Initial Gauges

// Vertical Speed Indicator
const setVerticalSpeedIndicator = require('./instruments/verticalSpeed')
setVerticalSpeedIndicator(0)

// Heading Indicator
const setHeadingIndicator = require('./instruments/headingIndicator')
setHeadingIndicator(0)