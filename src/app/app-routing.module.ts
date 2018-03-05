import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { CardsViewComponent } from './cards-view/cards-view.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'documents', component: DocumentsComponent},
      {path: 'allservices', component: CardsViewComponent},
      {path: '', redirectTo: 'allservices', pathMatch: 'full'}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
