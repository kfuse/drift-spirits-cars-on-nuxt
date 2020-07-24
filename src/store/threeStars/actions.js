export default {
  setCarLevel({ commit, state }, carLevel) {
    localStorage.setItem(`content.driftspirits.car.list.${state.stars}stars.carLevel`, JSON.stringify(carLevel));
    commit('setCarLevel', carLevel)
  },
  setParts({ commit, state }, parts) {
    localStorage.setItem(`content.driftspirits.car.list.${state.stars}stars.parts`, JSON.stringify(parts));
    commit('setParts', parts)
  }
}
