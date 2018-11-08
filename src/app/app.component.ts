import { Component } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  startTimer() {
    console.log("Timer is on");
  }
}
