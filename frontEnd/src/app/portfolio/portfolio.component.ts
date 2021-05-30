import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toProj1():void{
    window.open("https://www.figma.com/file/NOGYTw7FKEc3HkpVhoA0mW/Prototype-Design-Sprint");
  }

  toProj2():void{
    window.open("https://vast-wave-55816.herokuapp.com/");
  }

  toProj3():void{
    window.open("https://htn2021covid.herokuapp.com/");
  }
}
