import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FavcardsComponent } from './favcards/favcards.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { FooterComponent } from './footer/footer.component';
import { AllcardsComponent } from './allcards/allcards.component';
import { DocumentsComponent } from './documents/documents.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';




@NgModule({
  declarations: [
    AppComponent,
    FavcardsComponent,
    HeaderComponent,
    LeftnavComponent,
    FooterComponent,
    AllcardsComponent,
    DocumentsComponent,
    CardsViewComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
