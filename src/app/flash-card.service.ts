import { Injectable, Component, OnInit } from '@angular/core';
import { FlashCardsComponent } from './flash-cards/flash-cards.component'
import { FLASHCARD } from './practice'
import { FlashCard } from './flash-card.model'
import { AngularFirestore } from '@angular/fire/firestore';
import { empty } from 'rxjs/Observer';

@Injectable()
export class FlashCardService {
   constructor() {}

   getCards(){
    return FLASHCARD;
  }

  getCsharpQuestions(){
    let arr: FlashCard[]=[]
    FLASHCARD.forEach(function(card){
      if(card.category === "Csharp"){
        arr.push(card);
        console.log(arr)
      } else if (card.category === "MySQL"){
        arr.push(card)
      }
    })
    return arr;
  }


  getJSQuestions(){
    let arr: FlashCard[]=[]
    FLASHCARD.forEach(function(card){
      if(card.category === "JS"){
        arr.push(card);
      }
    })
    return arr;
  }

  getInterviewQuestions(){
    let arr: FlashCard[]=[]
    FLASHCARD.forEach(function(card){
      if(card.category === "interview"){
        arr.push(card);
      }
    })
    return arr;
  }
  getHTMLQuestions(){
    let arr: FlashCard[]=[]
    FLASHCARD.forEach(function(card){
      if(card.category === "html"){
        arr.push(card);
        console.log(arr)
      } else if (card.category === "angular"){
        arr.push(card)
      }
    })
    return arr;
  }

  // getCsharpQuestions() {
  //   let card = FLASHCARD; 
  //   let newAr: FlashCard[]=[];
  //   for(var i=0; i<=card.length -1; i++) {
  //     if(card[i].category === "Csharp"){
  //       newAr.push(card[i])
  //     }
  //   }
  //   return newAr;
  // }

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
