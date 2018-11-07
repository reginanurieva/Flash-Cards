import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  constructor() { }
  timeLeft: number = 30;
  interval;
    cardFront() {
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = 30;
        }
      },1000);
    }
    cardBack () {
    if (this.timeLeft === 0) {
      $(".cardFront").hide();
      $(".cardBack").show();
    } else {
      $(".cardFront").show();
      $(".cardBack").hide();
    }
  }

}
