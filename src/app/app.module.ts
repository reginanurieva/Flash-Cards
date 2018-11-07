import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing'
import { masterFirebaseConfig } from './apikeys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { TimerComponent } from './timer/timer.component';
import { FlashCardsComponent } from './flash-cards/flash-cards.component';
import { FormsModule }  from '@angular/forms';
import * as $ from 'jquery';
// import { FlipModule } from 'ngx-flip';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};
@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    TimerComponent,
    FlashCardsComponent,
    // CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    // FlipModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
