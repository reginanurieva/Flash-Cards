import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './apikeys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { TimerComponent } from './timer/timer.component';
import { FlashCardsComponent } from './flash-cards/flash-cards.component';
import * as $ from 'jquery';
import { QuizComponent } from './quiz/quiz.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
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
    QuizComponent,
    // CategoryPipe
    NavbarComponent,
    HomepageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
    // FlipModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
