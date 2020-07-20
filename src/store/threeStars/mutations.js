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
