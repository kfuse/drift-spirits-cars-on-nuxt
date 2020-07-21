export default {
  getCarLevel(state) {
    return state.carLevel
  },
  getEngineSize(state) {
    return state.parts.engine.size
  },
  getEngineLevel(state) {
    return state.parts.engine.level
  },
  getTransmissionSize(state) {
    return state.parts.transmission.size
  },
  getTransmissionLevel(state) {
    return state.parts.transmission.level
  },
  getTireSize(state) {
    return state.parts.tire.size
  },
  getTireLevel(state) {
    return state.parts.tire.level
  },
  getNitroSize(state) {
    return state.parts.nitro.size
  },
  getNitroLevel(state) {
    return state.parts.nitro.level
  },
  getEcuSize(state) {
    return state.parts.ecu.size
  },
  getEcuLevel(state) {
    return state.parts.ecu.level
  }
}
