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
  },
  getFree1Selected(state) {
    return state.parts.free1.selected
  },
  getFree1Size(state) {
    return state.parts.free1.size
  },
  getFree1Level(state) {
    return state.parts.free1.level
  },
  getFree2Selected(state) {
    return state.parts.free2.selected
  },
  getFree2Size(state) {
    return state.parts.free2.size
  },
  getFree2Level(state) {
    return state.parts.free2.level
  },
  getNakamaSpeed(state) {
    return state.parts.nakama.speed
  },
  getNakamaAcceleration(state) {
    return state.parts.nakama.acceleration
  },
  getNakamaHandling(state) {
    return state.parts.nakama.handling
  }
}
