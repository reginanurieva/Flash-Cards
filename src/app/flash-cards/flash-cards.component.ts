import { Component, OnInit, DoCheck } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FlashCardService } from '../flash-card.service';
import { Router } from '@angular/router';
import { FlashCard } from '../flash-card.model';
import { FLASHCARD } from '../practice';
import * as $ from 'jquery';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css'],
  providers: [FlashCardService]

})
export class FlashCardsComponent implements OnInit {
  flashcards: FlashCard[];

  startTimer() {
    console.log("Timer is on");
  }

  timeLeft: number = 30;
  interval;
    cardCheck() {
    var interval = setInterval(() => {
      if(this.timeLeft <= 0) {
        alert("Stop where you are in the flash cards and reflect on your thoughts");
        this.timeLeft = 30;
      clearInterval(interval);
      } else {
        this.timeLeft--;
      }
    },1000);
  }

  constructor(private flashcardService: FlashCardService, private router: Router){}
    ngOnInit(){
      if(this.router.url === '/csharp'){
        this.flashcards=this.flashcardService.getCsharpQuestions()
      } else if (this.router.url ==='/interview'){
        this.flashcards=this.flashcardService.getInterviewQuestions()
      } else if (this.router.url === '/js'){
        this.flashcards=this.flashcardService.getJSQuestions()
      } else if (this.router.url === '/html'){
        this.flashcards=this.flashcardService.getHTMLQuestions();
      }
    }
}
