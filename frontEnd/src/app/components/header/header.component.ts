import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // active = 1;
  constructor() { }


  ngOnInit(): void {
  }

  toResume():void{
    window.open("https://drive.google.com/file/d/1cNTnfjZcLSsWIwO6G4vAAhnAf1-th5JB/view?usp=sharing");
  }

}
