import { Injectable, Component, OnInit } from '@angular/core';
import { FlashCardsComponent } from './flash-cards/flash-cards.component'
import { FLASHCARD } from './practice'
import { FlashCard } from './flash-card.model'
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FlashCardService {
   constructor() {}

   getCards(){
    return FLASHCARD;
  }

  // getCsharpQuestions(){
  //   var emptyArray: FlashCard[]=[];

  //   for(var i=0; i<FLASHCARD.length; i++){
  //     if(FLASHCARD[i].category === "Csharp"){
  //       emptyArray.push(FLASHCARD[i])
  //     }
  //     console.log(emptyArray)
  //       return emptyArray;
  //   }
  // }
  getCsharpQuestions(){
    var cards = FLASHCARD;
    var emptyArray: FlashCard[]=[];
    for(let flashcard of cards){
      console.log(cards[5])
      if(flashcard.category === "Csharp"){
        emptyArray.push(flashcard)
      }
      console.log(emptyArray.length)
      return emptyArray;
    }
  }

  // getMySqlQuestions(){
  //   var emptyArray: FlashCard[]=[];
  //   for(i=0; i<FLASHCARD.length; i++){
  //     if(FLASHCARD[i].category === "MySQL"){
  //       emptyArray.push(FLASHCARD[i])
  //     }
  //       return emptyArray;
  //     }
  //   }
  }
