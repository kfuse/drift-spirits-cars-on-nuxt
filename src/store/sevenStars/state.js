import sevenStarsCars from './carlist'

export default () => ({
  id: "sevenStars",
  stars: 7,
  plus: 0,
  cars: sevenStarsCars,
  baseCars: JSON.parse(JSON.stringify(sevenStarsCars)),
  originalStars: 7,
  carLevel: 1,
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
  }
})
