import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashCardsComponent } from './flash-cards/flash-cards.component'
import { QuizComponent } from './quiz/quiz.component';
import { SettingsComponent } from './settings/settings.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FinalpageComponent } from './finalpage/finalpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



const appRoutes: Routes = [
  {
<<<<<<< HEAD
      path: '',
      component: HomepageComponent
    },

    {
        path: 'finalpage',
        component: FinalpageComponent
      }
=======
    path: '',
    component: HomepageComponent
  },
  {
    path: 'csharp',
    component: FlashCardsComponent
  }, 
  {
    path: 'interview',
    component: FlashCardsComponent
  },
  {
    path: 'js',
    component: FlashCardsComponent
  },
  {
    path: 'html',
    component: FlashCardsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },

>>>>>>> ce283b497e1454f14d66ed9186f92e42633a89e9
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
