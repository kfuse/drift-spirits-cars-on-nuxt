<template>
  <div>
    <global-header />
    <div id="content">
      <setting-pane />
      <car-list :data="threeStars" />
    </div>
    <global-footer />
  </div>
</template>

<script>
import globalHeader from '~/components/Organisms/header'
import settingPane from '~/components/Organisms/setting-pane'
import carList from '~/components/Organisms/car-list'
import globalFooter from '~/components/Organisms/footer'
import threeStarsCars from '~/carlist'

export default {
  data() {
    return {
      threeStars: {
        stars: 3,
        id: "threeStars",
        plus: 0,
        cars: threeStarsCars,
        originalCars: JSON.parse(JSON.stringify(threeStarsCars)),
        originalStars: 3,
        carLevel: 1,
        shownNitroless: false,
        shownPerformance: false,
        filteringText: "",
        parts: {
          engine: {
            size: 1,
            level: 1
          },
          transmission: {
            size: 1,
            level: 1
          },
          tire: {
            size: 1,
            level: 1
          },
          nitro: {
            size: 1,
            level: 1
          },
          ecu: {
            size: 1,
            level: 1
          },
          free1: {
            selected: "towerbar",
            type: [
              {text:"", value:""},
              {text:"タワーバー", value:"towerbar"},
              {text:"サスペンション", value:"suspension"},
              {text:"クラッチ", value:"clutch"},
              {text:"シャフト", value:"shaft"},
              {text:"マフラー", value:"muffler"},
              {text:"タービン", value:"turbine"}
            ],
            size: 1,
            level: 1
          },
          free2: {
            selected: "towerbar",
            type: [
              {text:"", value:""},
              {text:"タワーバー", value:"towerbar"},
              {text:"サスペンション", value:"suspension"},
              {text:"クラッチ", value:"clutch"},
              {text:"シャフト", value:"shaft"},
              {text:"マフラー", value:"muffler"},
              {text:"タービン", value:"turbine"}
            ],
            size: 1,
            level: 1
          },
          nakama: {
            speed: 0,
            acceleration: 0,
            handling: 0
          }
        },
        isAppliedParts: false,
        saveMessage: ""
      },
    }
  },
  components: {
    'global-header': globalHeader,
    'setting-pane': settingPane,
    'car-list': carList,
    'global-footer': globalFooter
  }
}
</script>
