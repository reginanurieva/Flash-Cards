import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashCardsComponent } from './flash-cards/flash-cards.component'
import { QuizComponent } from './quiz/quiz.component';
import { SettingsComponent } from './settings/settings.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
