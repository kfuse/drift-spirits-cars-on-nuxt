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
