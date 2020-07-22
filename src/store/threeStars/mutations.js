export function setStars(state, stars) {
  state.stars = stars
}

export function incrementStars(state) {
  state.stars++
  if (state.stars === 8) {
    state.stars = state.originalStars
  }
}

export function incrementPlus(state) {
  state.plus++
  if (state.plus === 3) {
    state.plus = 0
  }
}

export function setCars(state, cars) {
  state.cars = cars
}

export function setCarLevel(state, carLevel) {
  state.carLevel = carLevel
}

export function setParts(state, parts) {
  state.parts = parts
}

export function setEngineSize(state, size) {
  state.parts.engine.size = size
}

export function setEngineLevel(state, level) {
  state.parts.engine.level = level
}

export function setTransmissionSize(state, size) {
  state.parts.transmission.size = size
}

export function setTransmissionLevel(state, level) {
  state.parts.transmission.level = level
}

export function setTireSize(state, size) {
  state.parts.tire.size = size
}

export function setTireLevel(state, level) {
  state.parts.tire.level = level
}

export function setNitroSize(state, size) {
  state.parts.nitro.size = size
}

export function setNitroLevel(state, level) {
  state.parts.nitro.level = level
}

export function setEcuSize(state, size) {
  state.parts.ecu.size = size
}

export function setEcuLevel(state, level) {
  state.parts.ecu.level = level
}

export function setFree1Selected(state, selected) {
  state.parts.free1.selected = selected
}

export function setFree1Size(state, size) {
  state.parts.free1.size = size
}

export function setFree1Level(state, level) {
  state.parts.free1.level = level
}

export function setFree2Selected(state, selected) {
  state.parts.free2.selected = selected
}

export function setFree2Size(state, size) {
  state.parts.free2.size = size
}

export function setFree2Level(state, level) {
  state.parts.free2.level = level
}

export function setSpeed(state, {i, speed}) {
  state.cars[i].speed = speed
}

export function setAcceleration(state, {i, acceleration}) {
  state.cars[i].acceleration = acceleration
}

export function setHandling(state, {i, handling}) {
  state.cars[i].handling = handling
}

export function setNitro(state, {i, nitro}) {
  state.cars[i].nitro = nitro
}

export function setEfficiency(state, {i, efficiency}) {
  state.cars[i].efficiency = efficiency
}

export function setPower(state, {i, power}) {
  state.cars[i].power = power
}

export function setBaseSpeed(state, {i, speed}) {
  state.baseCars[i].speed = speed
}

export function setBaseAcceleration(state, {i, acceleration}) {
  state.baseCars[i].acceleration = acceleration
}

export function setBaseHandling(state, {i, handling}) {
  state.baseCars[i].handling = handling
}

export function setBaseNitro(state, {i, nitro}) {
  state.baseCars[i].nitro = nitro
}

export function setBaseEfficiency(state, {i, efficiency}) {
  state.baseCars[i].efficiency = efficiency
}

export function setBasePower(state, {i, power}) {
  state.baseCars[i].power = power
}
