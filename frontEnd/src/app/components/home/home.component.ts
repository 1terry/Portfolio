import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { TimelineElement } from '../horizontal-timeline/timeline-element';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae 
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, 
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam 
  quisquam, quae, temporibus dolores porro doloribus.`;

  // constructor(@inject(DOCUMENT) private document: Document) { }
  active = 1;
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

  imagesForSlider = [
    {path: '/assets/CO2.png'},
    {path: '/assets/COVID-Visualizer.png'},
    {path: '/assets/EcoBoost.png'},
    {path: '/assets/COVID-Visualizer.png'},
    {path: '/assets/EcoBoost.png'},
  ];

  handleCarouselEvents(event:any) {
    console.log(event);
  }

  title = 'frontEnd';
  config: any;
  fullpage_api: any;
  
    constructor() {
  
      // for more details on config options please visit fullPage.js docs
      this.config = {
  
        // fullpage options
        licenseKey: 'YOUR LICENSE KEY HERE',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#menu',
        navigation: true,
  
        // fullpage callbacks
        afterResize: () => {
          console.log("After resize");
        },
        afterLoad: (origin, destination, direction) => {
          console.log(origin.index);
        }
      };
    }
  
    getRef(fullPageRef) {
      this.fullpage_api = fullPageRef;
    }

}
