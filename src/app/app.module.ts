import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web'
import { IvyCarouselModule } from 'angular-responsive-carousel2';






export function playerFactory(): any {  
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
  
    LottieModule.forRoot({player:playerFactory}),
  
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
