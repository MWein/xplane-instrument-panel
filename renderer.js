require('./udpListener')

// Initial Gauges
const setVerticalAirspeedIndicator = require('./instruments/verticalAirspeed')
setVerticalAirspeedIndicator(0)