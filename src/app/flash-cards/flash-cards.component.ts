import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FlashCardService } from '../flash-card.service';
import { Router } from '@angular/router';
import { FlashCard } from '../flash-card.model';
import { FLASHCARD } from '../practice'
import { FlipModule } from 'ngx-flip'

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css'],
  providers: [FlashCardService]

})
export class FlashCardsComponent implements OnInit {
  flashcards: FirebaseListObservable<any[]>;
  constructor(private flashcardService: FlashCardService){}

    ngOnInit(){
      this.flashcards = this.flashcardService.getCards();
      console.log(this.flashcards);
    }

}
