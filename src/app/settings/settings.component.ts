import { Component, OnInit } from '@angular/core';
// import { FlipCard } from '../models/flip.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
  constructor( ) { }

  // var timeleft = 10;
  // var downloadTimer = setInterval(function(){
  //
  // document.getElementById("progressBar").value = 10 - --timeleft;
  //   if(timeleft <= 0)
  //     clearInterval(downloadTimer);
  // },1000);


  // function Countdown() => {
  //
  //   var timeleft = 10;
  //   var downloadTimer = setInterval(function(){
  //   timeleft--;
  //   document.getElementById("countdowntimer").textContent = timeleft;
  //   if(timeleft <= 0)
  //       clearInterval(downloadTimer);
  //   },1000);
  // }
  function Countdown() => {
  var timeleft = 10;
  var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 10 - --timeleft;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
},3000);
}



}
