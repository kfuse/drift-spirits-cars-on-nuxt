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
  }
}
