import { Component, OnInit, DoCheck } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FlashCardService } from '../flash-card.service';
import { Router } from '@angular/router';
import { FlashCard } from '../flash-card.model';
import { FLASHCARD } from '../practice'

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css'],
  providers: [FlashCardService]

})
export class FlashCardsComponent implements OnInit {
  flashcards: FlashCard[];

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
