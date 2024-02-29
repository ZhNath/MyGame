export default class Controller {
  static playEggs = [[0, 0]];
  static scoreCounter = 0;
  static faultTempCounter = 0;
  static wolfPoz;
  static isBunny;
  // static isStop = false;

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

  static pastTime = 0;
  static timeOfStatic = 500;
  static refreshedTimes = 0;

  static update(realTime) {
    //     *****
    function pushEggToPlayEggs() {
      let inclusiveIndex = Controller.changeBank();
      Controller.playEggs.push([0, inclusiveIndex]);
      Controller.refreshedTimes = 0;
    }

    let delta = realTime - Controller.pastTime;

    if (delta > Controller.timeOfStatic) {
      for (let i = 0; i < Controller.playEggs.length; i++) {
        Controller.playEggs[i][0]++;
      }

      // ******************
      if (
        (Controller.refreshedTimes === 5 && Controller.scoreCounter >= 0) ||
        (Controller.refreshedTimes === 4 && Controller.scoreCounter >= 5) ||
        (Controller.refreshedTimes === 3 && Controller.scoreCounter >= 10) ||
        (Controller.refreshedTimes === 2 && Controller.scoreCounter >= 15) ||
        (Controller.refreshedTimes === 1 && Controller.scoreCounter >= 700)
      )
        pushEggToPlayEggs();

      Controller.refreshedTimes++;

      // ****************
      if (Controller.playEggs.length) {
        if (Controller.playEggs[0][0] === 5) {
          if (Controller.wolfPoz - 1 === Controller.playEggs[0][1]) {
            Controller.playEggs.shift();
            Controller.scoreCounter++;
            Controller.timeOfStatic -= Controller.timeOfStatic / 200;
          } else {
            Controller.playEggs.length = 0;
            Controller.faultTempCounter += Controller.isBunny ? 0.5 : 1;
            realTime += 1500;
          }
        }
      }

      if (
        Controller.scoreCounter % 100 === 0 &&
        Controller.scoreCounter !== 0 &&
        Controller.scoreCounter !== 700
      ) {
        Controller.timeOfStatic *= 1.2;
      }

      if (Controller.scoreCounter === 700) {
        Controller.timeOfStatic *= 1.4;
      }

      if (Controller.scoreCounter === 3 || Controller.scoreCounter === 500) {
        Controller.faultTempCounter = 0;
        Controller.isStop = true;
      }
      Controller.pastTime = realTime;
    }
  }
}
