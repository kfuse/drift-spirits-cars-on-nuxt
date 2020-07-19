export function setStars(state, stars) {
  state.stars = stars
}

export function setCars(state, cars) {
  state.cars = cars
}

export function incrementStars(state) {
  let stars = state.stars
  stars++
  if (stars === 8) stars = state.originalStars
  state.stars = stars
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

export function setOriginalSpeed(state, {i, speed}) {
  state.originalCars[i].speed = speed
}

export function setOriginalAcceleration(state, {i, acceleration}) {
  state.originalCars[i].acceleration = acceleration
}

export function setOriginalHandling(state, {i, handling}) {
  state.originalCars[i].handling = handling
}

export function setOriginalNitro(state, {i, nitro}) {
  state.originalCars[i].nitro = nitro
}

export function setOriginalEfficiency(state, {i, efficiency}) {
  state.originalCars[i].efficiency = efficiency
}

export function setOriginalPower(state, {i, power}) {
  state.originalCars[i].power = power
}
