class List {
  static updatePlusStatus(cars, plus) {
    var i,
        power,
        specs;
    switch (plus) {
      case 0:
        power = -12;
        specs = -60;
        break;
      case 1:
        power = 6;
        specs = 30;
        break;
      case 2:
        power = 6;
        specs = 30;
        break;
    }
    for (i = 0; i < cars.length; i++) {
      cars[i].power += power;
      cars[i].speed += specs;
      cars[i].acceleration += specs;
      cars[i].handling += specs;
      cars[i].nitro += specs;
    }
  }

  static updateStarStatus(cars, star, option) {
    var i,
        power,
        specs,
        reset = option.reset,
        originalStars = option.originalStars,
        sevenStarOffset = {},
        efficiency;
    if (originalStars < 5) {
      sevenStarOffset.power = 40;
      sevenStarOffset.specs = 200;
      sevenStarOffset.efficiency = 135;
    } else {
      sevenStarOffset.power = 60;
      sevenStarOffset.specs = 300;
      sevenStarOffset.efficiency = 135;
    }
    switch (star) {
      case 3:
        power      = -80  - sevenStarOffset.power;
        specs      = -400 - sevenStarOffset.specs;
        efficiency = -255 - sevenStarOffset.efficiency;
        break;
      case 4:
        if (!reset) {
          power      = 20;
          specs      = 100;
          efficiency = 75;
        } else {
          power      = -60  - sevenStarOffset.power;
          specs      = -300 - sevenStarOffset.specs;
          efficiency = -180 - sevenStarOffset.efficiency;
        }
        break;
      case 5:
        if (!reset) {
          power      = 20;
          specs      = 100;
          efficiency = 80;
        } else {
          power      = -40  - sevenStarOffset.power;
          specs      = -200 - sevenStarOffset.specs;
          efficiency = -100 - sevenStarOffset.efficiency;
        }
        break;
      case 6:
        if (!reset) {
          power = 40;
          specs = 200;
          efficiency = 100;
        } else {
          power      = -sevenStarOffset.power;
          specs      = -sevenStarOffset.specs;
          efficiency = -sevenStarOffset.efficiency;
        }
        break;
      case 7:
        power      = sevenStarOffset.power;
        specs      = sevenStarOffset.specs;
        efficiency = sevenStarOffset.efficiency;
        break;
    }
    for (i = 0; i < cars.length; i++) {
      cars[i].power += power;
      cars[i].speed += specs;
      cars[i].acceleration += specs;
      cars[i].handling += specs;
      cars[i].nitro += specs;
      if (star === 7 && cars[i].xd) {
        cars[i].efficiency -= 85;
      } else if (reset && cars[i].xd) {
        cars[i].efficiency += 85;
      }
      cars[i].efficiency += efficiency;
    }
  }

  static updateParts(param) {
    let cars = param.cars,
        originalCars = param.originalCars,
        carLevel = param.carLevel,
        parts = param.parts,
        id = param.id,
        mode = param.mode,
        store = param.store,
        i,
        key,
        speed,
        acceleration,
        handling,
        nitro,
        efficiency,
        power,
        coefficient,
        carLevelRotation = ["engine", "tire", "transmission", "nitro", "ecu"],
        rotationIndex = 0,
        specs = {engine:0, transmission:0, tire:0, nitro:0, ecu:0, free1:0, free2:0},
        free = {towerbar:0, suspension:0, clutch:0, shaft:0, muffler:0, turbine:0},
        nakama = {speed:0, acceleration:0, handling:0};
    if (parts && typeof parts.nakama === "undefined") {
      parts.nakama = {
        speed: 0,
        acceleration: 0,
        handling: 0
      };
    }
    for (key in parts) {
      if (parts[key].size == 0) continue;
      if (key === "ecu") {
        specs[key] = (parseInt(parts[key].size, 10)) * 5 + (parseInt(parts[key].level, 10) - 1);
      } else if (key.match(/free/)) {
        if (parts[key].selected === "towerbar" || parts[key].selected === "clutch" || parts[key].selected === "muffler") {
          coefficient = 2;
        } else {
          coefficient = 3;
        }
        free[parts[key].selected] += (parseInt(parts[key].size, 10) - 1) * coefficient + parseInt(parts[key].level, 10) * coefficient;
        if (parseInt(parts[key].size, 10) === 13) {
          free[parts[key].selected] += 91;
        }
      } else if (key.match(/nakama/)) {
        nakama.speed        = parseInt(parts.nakama.speed, 10);
        nakama.acceleration = parseInt(parts.nakama.acceleration, 10);
        nakama.handling     = parseInt(parts.nakama.handling, 10);
      } else {
        // speed, acceleration, handling, nitro
        specs[key] = (parseInt(parts[key].size, 10) - 1) * 5 + parseInt(parts[key].level, 10) * 5;
        if (parseInt(parts[key].size, 10) === 21) {
          specs[key] += 105;
        } else if (parseInt(parts[key].size, 10) === 22) {
          specs[key] += 110;
        }
      }
    }
    for (i = 0; i < carLevel; i++) {
      if (i === 0) continue;
      rotationIndex = (i - 1) % 5;
      if (rotationIndex === 4) {
        specs[carLevelRotation[rotationIndex]] += 1;
        if (i === 95) {
          //レベル96なら燃費2改善
          specs[carLevelRotation[rotationIndex]] += 1;
        }
      } else {
        specs[carLevelRotation[rotationIndex]] += 5;
      }
    }
    for (i = 0; i < cars.length; i++) {
      if (mode === "set") {
        speed = originalCars[i].speed + specs["engine"] + free["muffler"] + free["turbine"] + nakama["speed"]
        acceleration = originalCars[i].acceleration + specs["transmission"] + free["clutch"] + free["shaft"] + nakama["acceleration"];
        handling = originalCars[i].handling + specs["tire"] + free["towerbar"] + free["suspension"] + nakama["handling"];
        nitro = originalCars[i].nitro + specs["nitro"];
        efficiency = originalCars[i].efficiency - specs["ecu"];
        power = Math.floor((speed + acceleration + handling + nitro) / 20);
      } else {
        speed = originalCars[i].speed - specs["engine"] - free["muffler"] - free["turbine"] - nakama["speed"]
        acceleration = originalCars[i].acceleration - specs["transmission"] - free["clutch"] - free["shaft"] - nakama["acceleration"];
        handling = originalCars[i].handling - specs["tire"] - free["towerbar"] - free["suspension"] - nakama["handling"];
        nitro = originalCars[i].nitro - specs["nitro"];
        efficiency = originalCars[i].efficiency + specs["ecu"];
        power = Math.floor((speed + acceleration + handling + nitro) / 20);
      }
      store.commit(`${id}/setSpeed`, {i, speed})
      store.commit(`${id}/setAcceleration`, {i, acceleration})
      store.commit(`${id}/setHandling`, {i, handling})
      store.commit(`${id}/setNitro`, {i, nitro})
      store.commit(`${id}/setEfficiency`, {i, efficiency})
      store.commit(`${id}/setPower`, {i, power})
    }
  }

  static resetParts(param) {
    let id = param.id,
        cars = param.cars,
        originalCars = param.originalCars,
        store = param.store;
    for (let i = 0; i < cars.length; i++) {
      let speed = originalCars[i].speed
      let acceleration = originalCars[i].acceleration
      let handling = originalCars[i].handling
      let nitro = originalCars[i].nitro
      let efficiency = originalCars[i].efficiency
      let power = originalCars[i].power
      store.commit(`${id}/setSpeed`, {i, speed})
      store.commit(`${id}/setAcceleration`, {i, acceleration})
      store.commit(`${id}/setHandling`, {i, handling})
      store.commit(`${id}/setNitro`, {i, nitro})
      store.commit(`${id}/setEfficiency`, {i, efficiency})
      store.commit(`${id}/setPower`, {i, power})
    }
  }
}

export default List
