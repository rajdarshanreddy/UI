import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity:1
      })),
      state('hide',   style({
        opacity:0
      })),
      transition('hide => show', animate('600ms ease-in')),
      transition('show => hide', animate('600ms ease-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  show = false;
  
  constructor() { }

get slideInOut(){

  return this.show ? 'show' : 'hide'
}

toggle() {
  this.show = !this.show;
}

  ngOnInit() {
  }



 

}
