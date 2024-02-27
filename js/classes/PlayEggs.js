// import EggsGroup from "./EggsGroup.js";
// import Bunny from "./Bunny.js";

// export default class PlayEggs extends EggsGroup {
//   static wolfPoz;
//   constructor(x, y, k) {
//     super(x, y, k);
//     this.pastTime = 0;
//   }

  //   setWolfPosition() {
  //     if (
  //       this.playEgg[0][1] === this.wolf.position - 1 &&
  //       this.playEgg[0][0] === 4
  //     ) {
  //       this.playEggs.shift();
  //       ScoreCounter.scoreCounter++;
  //     }
  //   }

  //   update(realTime) {
  //     let delta = realTime - this.pastTime;
  //     //     *****
  //     if (delta > 700) {
  //       for (let i = 0; i < this.playEggs.length; i++) {
  //         this.playEggs[i][0]++;
  //         console.log("playEgg: " + this.playEggs.length);
  //       }

  //       let index = Math.floor(Math.random() * 4);
  //       this.playEggs.push([0, index]);

  // if (this.playEggs.length) {
  //   if (this.playEggs[0][0] === 5) {
  //     if (PlayEggs.wolfPoz - 1 === this.playEggs[0][1]) {
  //       this.playEggs.shift();
  //       ScoreCounter.scoreCounter++;
  //     } else {
  //       this.playEggs.length = 0;
  //       PlayEggs.faultCounter += Bunny.isBunny ? 0.5 : 1;
  //       realTime += 3000;
  //     }
  //   }
  // }

  //       this.pastTime = realTime;
  //     }
  //   }
}
