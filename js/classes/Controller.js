export default class Controller {
  static playEggs = [];
  static scoreCounter = 0;
  static faultTempCounter = 0;
  static wolfPoz;
  static isBunny;
  static pastTime = 0;

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

  static update(realTime) {
    let delta = realTime - Controller.pastTime;
    //     *****
    if (delta > 700) {
      console.log("update");
      for (let i = 0; i < Controller.playEggs.length; i++) {
        Controller.playEggs[i][0]++;
      }

      let index = Math.floor(Math.random() * 4);
      Controller.playEggs.push([0, index]);

      if (Controller.playEggs.length) {
        if (Controller.playEggs[0][0] === 5) {
          if (Controller.wolfPoz - 1 === Controller.playEggs[0][1]) {
            Controller.playEggs.shift();
            Controller.scoreCounter++;
          } else {
            Controller.playEggs.length = 0;
            Controller.faultTempCounter += Controller.isBunny ? 0.5 : 1;
            realTime += 3000;
          }
        }
      }

      Controller.pastTime = realTime;
    }
  }
}
