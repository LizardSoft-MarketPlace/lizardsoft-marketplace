import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-allcards',
  templateUrl: './allcards.component.html',
  styleUrls: ['./allcards.component.sass']
})

export class AllcardsComponent{

  @Input() cardNumber;

}
