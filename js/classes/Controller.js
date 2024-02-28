export default class Controller {
  static playEggs = [[0, 0]];
  static scoreCounter = 0;
  static faultTempCounter = 0;
  static wolfPoz;
  static isBunny;
  static pastTime = 0;
  static timeOfStatic = 500;

  static setBunnyStatus(status) {
    Controller.isBunny = status;
  }

  static setWolfPoz(position) {
    Controller.wolfPoz = position;
    if (
      Controller.playEggs[0][1] === position - 1 &&
      Controller.playEggs[0][0] === 4
    ) {
      Controller.playEggs.shift();
      Controller.scoreCounter++;
    }
  }

  static changeBank() {
    let exclusiveIndex;
    let index;

    switch (Controller.faultTempCounter) {
      case 0:
        exclusiveIndex = 1;
        break;
      case 0.5:
      case 1:
        exclusiveIndex = 3;
        break;
      case 1.5:
      case 2:
        exclusiveIndex = 0;
        break;
      case 2.5:
      case 3:
        exclusiveIndex = 2;
        break;
      case 3.5:
        exclusiveIndex = undefined;
    }

    do {
      index = Math.floor(Math.random() * 4);
    } while (index === exclusiveIndex);
    return index;
  }

  static flag = 0;

  static update(realTime) {
    let delta = realTime - Controller.pastTime;

    //     *****
    function pushEggToPlayEggs() {
      let inclusiveIndex = Controller.changeBank();
      Controller.playEggs.push([0, inclusiveIndex]);
      Controller.flag = 0;
    }

    if (delta > Controller.timeOfStatic) {
      for (let i = 0; i < Controller.playEggs.length; i++) {
        Controller.playEggs[i][0]++;
      }

      // ***************************************************
      if (
        (Controller.flag === 5 && Controller.scoreCounter >= 0) ||
        (Controller.flag === 4 && Controller.scoreCounter >= 5) ||
        (Controller.flag === 3 && Controller.scoreCounter >= 10) ||
        (Controller.flag === 2 && Controller.scoreCounter >= 15) ||
        (Controller.flag === 1 && Controller.scoreCounter >= 700)
      )
        pushEggToPlayEggs();
      Controller.flag++;

      // ******************************************************
      if (Controller.playEggs.length) {
        if (Controller.playEggs[0][0] === 5) {
          if (Controller.wolfPoz - 1 === Controller.playEggs[0][1]) {
            Controller.playEggs.shift();
            Controller.scoreCounter++;
            Controller.timeOfStatic -= Controller.timeOfStatic / 200;
          } else {
            Controller.playEggs.length = 0;
            Controller.faultTempCounter += Controller.isBunny ? 0.5 : 1;
            realTime += 3000;
          }
        }
      }

      console.log("Controller" + Controller.timeOfStatic);
      if (
        Controller.scoreCounter % 100 === 0 &&
        Controller.scoreCounter !== 0 &&
        Controller.scoreCounter !== 700 &&
        Controller.scoreCounter !== 900
      )
        Controller.timeOfStatic *= 1.2;

      if (Controller.scoreCounter === 200 || Controller.scoreCounter === 500) {
        Controller.faultTempCounter = 0;
      }

      if (Controller.scoreCounter === 700) {
        Controller.timeOfStatic *= 1.4;
      }
      Controller.pastTime = realTime;
    }
  }
}
