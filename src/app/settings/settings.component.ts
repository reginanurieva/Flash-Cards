import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
  constructor( ) { }
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
