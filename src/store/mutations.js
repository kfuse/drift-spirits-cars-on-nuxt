export function setShownNitroless(state, shownNitroless) {
  state.shownNitroless = shownNitroless
}

export function setShownPerformance(state, shownPerformance) {
  state.shownPerformance = shownPerformance
}

export function setFilteringText(state, filteringText) {
  state.filteringText = filteringText
}

export function addSelectedCar(state, selectedCar) {
  state.selectedCars.set(selectedCar.key, selectedCar.value)
}

export function deleteSelectedCar(state, selectedCar) {
  state.selectedCars.delete(selectedCar.key)
}

export function clearSelectedCars(state) {
  state.selectedCars.clear()
}

export function setSelectedCarLength(state, selectedCarLength) {
  state.selectedCarLength = selectedCarLength
}

export function setFooterMenuOpen(state, flag) {
  state.footerMenuOpen = flag
}
