import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FavcardsComponent } from './favourite_cards/favcards.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { FooterComponent } from './footer/footer.component';
import { AllcardsComponent } from './allcards/allcards.component';


@NgModule({
  declarations: [
    AppComponent,
    FavcardsComponent,
    HeaderComponent,
    LeftnavComponent,
    FooterComponent,
    AllcardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
