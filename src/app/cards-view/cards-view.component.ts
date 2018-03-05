import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.sass']
})
export class CardsViewComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
