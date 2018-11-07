import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
  timer: boolean = false;
  @Output() clickSender = new EventEmitter();

  timerButtonClicked(timer: boolean) {
    timer = true;
    console.log(timer);
    this.clickSender.emit(timer);
  }

}
