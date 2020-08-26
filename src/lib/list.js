class List {
  static updatePlusStatus(id, baseCars, plus, store) {
    var i,
        cars = JSON.parse(JSON.stringify(baseCars)),
        powerOffset,
        power,
        speed,
        acceleration,
        handling,
        nitro,
        specs;
    switch (plus) {
      case 0:
        powerOffset = -12;
        specs       = -60;
        break;
      case 1:
        powerOffset = 6;
        specs       = 30;
        break;
      case 2:
        powerOffset = 6;
        specs       = 30;
        break;
    }
    for (i = 0; i < baseCars.length; i++) {
      power = baseCars[i].power + powerOffset;
      speed = baseCars[i].speed + specs;
      acceleration = baseCars[i].acceleration + specs;
      handling = baseCars[i].handling + specs;
      nitro = baseCars[i].nitro + specs;

      cars[i].power = power;
      cars[i].speed = speed;
      cars[i].acceleration = acceleration;
      cars[i].handling = handling;
      cars[i].nitro = nitro;
    }
    store.commit(`${id}/setBaseCars`, cars)
    store.commit(`${id}/setCars`, cars)
  }

  static updateStarStatus(param) {
    var i,
        power,
        speed,
        acceleration,
        handling,
        nitro,
        efficiency,
        specs,
        powerOffset,
        efficOffset,
        id = param.id,
        cars = JSON.parse(JSON.stringify(param.baseCars)),
        baseCars = param.baseCars,
        stars = param.stars,
        originalStars = param.originalStars,
        reset = false,
        store = param.store,
        sevenStarOffset = {};
    if (originalStars < 5) {
      sevenStarOffset.power = 40;
      sevenStarOffset.specs = 200;
      sevenStarOffset.efficiency = 135;
    } else {
      sevenStarOffset.power = 60;
      sevenStarOffset.specs = 300;
      sevenStarOffset.efficiency = 135;
    }
    if (stars === originalStars) {
      reset = true
    }
    switch (stars) {
      case 3:
        powerOffset = -80  - sevenStarOffset.power;
        specs       = -400 - sevenStarOffset.specs;
        efficOffset = -255 - sevenStarOffset.efficiency;
        break;
      case 4:
        if (!reset) {
          powerOffset = 20;
          specs       = 100;
          efficOffset = 75;
        } else {
          powerOffset = -60  - sevenStarOffset.power;
          specs       = -300 - sevenStarOffset.specs;
          efficOffset = -180 - sevenStarOffset.efficiency;
        }
        break;
      case 5:
        if (!reset) {
          powerOffset = 20;
          specs       = 100;
          efficOffset = 80;
        } else {
          powerOffset = -40  - sevenStarOffset.power;
          specs       = -200 - sevenStarOffset.specs;
          efficOffset = -100 - sevenStarOffset.efficiency;
        }
        break;
      case 6:
        if (!reset) {
          powerOffset = 40;
          specs       = 200;
          efficOffset = 100;
        } else {
          powerOffset = -sevenStarOffset.power;
          specs       = -sevenStarOffset.specs;
          efficOffset = -sevenStarOffset.efficiency;
        }
        break;
      case 7:
        powerOffset = sevenStarOffset.power;
        specs       = sevenStarOffset.specs;
        efficOffset = sevenStarOffset.efficiency;
        break;
    }
    for (i = 0; i < baseCars.length; i++) {
      power = baseCars[i].power + powerOffset;
      speed = baseCars[i].speed + specs;
      acceleration = baseCars[i].acceleration + specs;
      handling = baseCars[i].handling + specs;
      nitro = baseCars[i].nitro + specs;
      if (stars === 7 && baseCars[i].xd) {
        efficOffset -= 85;
      } else if (reset && baseCars[i].xd) {
        efficOffset += 85;
      }
      efficiency = baseCars[i].efficiency + efficOffset;

      cars[i].power = power;
      cars[i].speed = speed;
      cars[i].acceleration = acceleration;
      cars[i].handling = handling;
      cars[i].nitro = nitro;
      cars[i].efficiency = efficiency;
    }
    store.commit(`${id}/setBaseCars`, cars)
    store.commit(`${id}/setCars`, cars)
  }

  static updateParts(param) {
    let cars = param.cars,
        baseCars = param.baseCars,
        updatedCars = JSON.parse(JSON.stringify(baseCars)),
        carLevel = param.carLevel,
        parts = param.parts,
        id = param.id,
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
      speed = baseCars[i].speed + specs["engine"] + free["muffler"] + free["turbine"] + nakama["speed"]
      acceleration = baseCars[i].acceleration + specs["transmission"] + free["clutch"] + free["shaft"] + nakama["acceleration"];
      handling = baseCars[i].handling + specs["tire"] + free["towerbar"] + free["suspension"] + nakama["handling"];
      nitro = baseCars[i].nitro + specs["nitro"];
      efficiency = baseCars[i].efficiency - specs["ecu"];
      power = Math.floor((speed + acceleration + handling + nitro) / 20);

      updatedCars[i].power = power;
      updatedCars[i].speed = speed;
      updatedCars[i].acceleration = acceleration;
      updatedCars[i].handling = handling;
      updatedCars[i].nitro = nitro;
      updatedCars[i].efficiency = efficiency;
    }
    store.commit(`${id}/setCars`, updatedCars)
  }

  static resetParts(param) {
    let id = param.id,
        cars = JSON.parse(JSON.stringify(param.baseCars)),
        baseCars = param.baseCars,
        store = param.store;
    for (let i = 0; i < baseCars.length; i++) {
      cars[i].power = baseCars[i].power
      cars[i].speed = baseCars[i].speed
      cars[i].acceleration = baseCars[i].acceleration
      cars[i].handling = baseCars[i].handling
      cars[i].nitro = baseCars[i].nitro
      cars[i].efficiency = baseCars[i].efficiency
    }
    store.commit(`${id}/setCars`, cars)
  }
}

export default List
