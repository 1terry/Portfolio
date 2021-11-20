import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})


export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toASL():void{
    window.open("https://github.com/JTao02/ASL_Alphabet_Interpretation","_blank");
  }

}
