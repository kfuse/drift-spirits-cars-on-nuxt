export default {
  nuxtClientInit({ commit, state, dispatch }, context) {
    // set carLevel and parts with data from localStorage
    let star = 3
    const id = {
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven'
    }
    for (star = 3; star < 8; star++) {
      if (localStorage.getItem(`content.driftspirits.car.list.${star}stars.carLevel`) !== null) {
        const carLevel = JSON.parse(localStorage.getItem(`content.driftspirits.car.list.${star}stars.carLevel`))
        commit(`${id[star]}Stars/setCarLevel`, carLevel)
      }
      if (localStorage.getItem(`content.driftspirits.car.list.${star}stars.parts`) !== null) {
        const parts = JSON.parse(localStorage.getItem(`content.driftspirits.car.list.${star}stars.parts`))
        commit(`${id[star]}Stars/setParts`, parts)
      }
    }

    // set setting data from localStorage
    if (!JSON.parse(localStorage.getItem("content.driftspirits.car.list.setting"))) {
      localStorage.setItem("content.driftspirits.car.list.setting", JSON.stringify({shownNitroless:false,shownPerformance:false}));
    } else {
      const setting = JSON.parse(localStorage.getItem("content.driftspirits.car.list.setting"));
      commit('setShownNitroless', setting.shownNitroless)
      commit('setShownPerformance', setting.shownPerformance)
    }
  },
  setShownNitroless({ commit, state }, shownNitroless) {
    const setting = {
      shownNitroless: shownNitroless,
      shownPerformance: state.shownPerformance
    }
    localStorage.setItem("content.driftspirits.car.list.setting", JSON.stringify(setting));
    commit('setShownNitroless', shownNitroless)
  },
  setShownPerformance({ commit, state }, shownPerformance) {
    const setting = {
      shownNitroless: state.shownNitroless,
      shownPerformance: shownPerformance
    }
    localStorage.setItem("content.driftspirits.car.list.setting", JSON.stringify(setting));
    commit('setShownPerformance', shownPerformance)
  }
}
