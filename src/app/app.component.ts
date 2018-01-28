import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  favcardstitle = [
    {cardName: "Taxi", content: "You can rent a taxi"},
    {cardName: "Food", content: "You can order some food"},
    {cardName: "Gifts", content: "You can give a gift"}
  ];
  allcardstitle = [
    {cardName: "Taxi", content: "You can rent a taxi"},
    {cardName: "Food", content: "You can order some food"},
    {cardName: "Gifts", content: "You can give a gift"},
    {cardName: "Barbershop", content: "We will make you a hairdo"},
    {cardName: "Flowers", content: "You can order flowers"}
  ] 
}
