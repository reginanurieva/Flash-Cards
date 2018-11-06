import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
