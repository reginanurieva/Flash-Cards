import * as $ from 'jquery';

// export class FlipCard {
//   public flip: any = true;
//   constructor(public front: number) {
//     this.front = 15;
//     this.flip = true;
//   }
//   setFlip() {
//     setInterval(() => {
//       if (this.front === 0) {
//         this.flip = false;
//       } else {
//         this.flip--;
//       }
//     }, 1000);
//   }
// }
export class FlipCard {
  public flip: any = true;
  constructor(public front: number) {
    this.front = 15;
    this.flip = true;
  }

  cardFront () {
    setInterval(() => {
      if (this.front === 0) {
        this.flip = false;
      } else {
        this.flip--;
      }
    }, 1000);
  }

  cardBack () {
    if (this.flip = false) {
      $(".cardFront").hide();
      $(".cardBack").show();
    }
    else {
      $(".cardFront").show();
      $(".cardBack").hide();
    }
  }
}
