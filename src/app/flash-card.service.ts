import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FlashCardsComponent } from './flash-cards/flash-cards.component'
import { FLASHCARD } from './practice'
import { FlashCard } from './flash-card.model'

@Injectable()
export class FlashCardService {
flashcards: FirebaseListObservable<any[]>;

 constructor(private database: AngularFireDatabase) {
   this.flashcards = database.list('FlashCard');
   }

  getCards(){
    return this.flashcards;
  }
}
