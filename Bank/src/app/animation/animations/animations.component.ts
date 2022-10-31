import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '300px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('* => closed', [
        animate('1s'),
        
    
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class AnimationsComponent implements OnInit {
  abc:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
  this.abc=!this.abc

  }
  

}
