import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  constructor() { }
  timeLeft: number = 5;
  interval;
    cardCheck() {
    var interval = setInterval(() => {
      if(this.timeLeft <= 0) {
        $(".card-front").hide();
        $(".card-back").show();
      clearInterval(interval);
      } else {
        this.timeLeft--;
        console.log(this.timeLeft);
      }
    },1000);
  }
}
