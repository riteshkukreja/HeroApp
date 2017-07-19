import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ErrorComponent } from './components/error/error.component';

import { HeroService } from './services/hero.service';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';

const RouteList: Routes = [
  {
    path: '', 
    component: HomeComponent    
  },
  {
    path: 'heroes',
    component: HeroComponent
  },
  {
    path: 'detail',
    component: HeroDetailsComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    ErrorComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      RouteList
    ),
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
