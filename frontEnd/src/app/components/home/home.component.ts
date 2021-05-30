import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // constructor(@inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  toGithub():void{
    window.open("https://github.com/1terry","_blank");
  }

  toDevpost():void{
    window.open("https://devpost.com/1terry?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav","_blank");
  }

  toLinkedIn():void{
    window.open("https://www.linkedin.com/in/terry-ju","_blank");
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
