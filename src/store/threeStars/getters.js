export default {
  getCarLevel(state) {
    return state.carLevel
  },
  getEngineSize(state) {
    return state.parts.engine.size
  },
  getEngineLevel(state) {
    return state.parts.engine.level
  }
}
