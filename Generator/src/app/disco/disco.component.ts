import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class DiscoComponent implements OnInit {
  color:Array<string>=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black"];
  numbers:Array<number>=[,Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)];
  m=function(){
    return Math.floor(Math.random()*10);
  };
  constructor() { }

  ngOnInit() {
  }

}
