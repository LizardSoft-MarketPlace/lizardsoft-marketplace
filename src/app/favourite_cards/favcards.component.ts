import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-favcard',
    templateUrl: './favcards.component.html',
    styleUrls: ['./favcards.component.sass']
})

export class FavcardsComponent {
    @Input() cardNumber;
}
