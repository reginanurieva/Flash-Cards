import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FinalpageComponent } from './finalpage/finalpage.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { routing } from './app.routing';

const appRoutes: Routes = [
  {
      path: '',
      component: HomepageComponent
    },

    {
        path: 'finalpage',
        component: FinalpageComponent
      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
