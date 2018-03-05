import { Component, OnInit, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    $('.modal').modal();
    $('.modal').modal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '35%', // Starting top style attribute
      endingTop: '20%', // Ending top style attribute

    }
  );
    $('.modal').css('width', '25%');
    $('#modal1').modal('open');
  }
}