import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small => large', animate('300ms ease-in')),
    ]),
  ]
})
export class IconNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
