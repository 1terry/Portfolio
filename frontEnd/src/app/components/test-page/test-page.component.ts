import { Component, OnInit } from '@angular/core';
import { TimelineElement } from '../horizontal-timeline/timeline-element';


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imagesForSlider = [
    {path: '/assets/CO2.png'},
    {path: '/assets/COVID-Visualizer.png'},
    {path: '/assets/EcoBoost.png'},
    {path: '/assets/COVID-Visualizer.png'},
    {path: '/assets/EcoBoost.png'},
];

  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae 
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, 
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam 
  quisquam, quae, temporibus dolores porro doloribus.`;

  // constructor(@inject(DOCUMENT) private document: Document) { }
  active = 1;

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


  timeline: TimelineElement[] = [
    { caption: '16 Jan', date: new Date(2014, 1, 16), selected: true, title: 'Horizontal Timeline', content: this.content },
    { caption: '28 Feb', date: new Date(2014, 2, 28), title: 'Event title here', content: this.content },
    { caption: '20 Mar', date: new Date(2014, 3, 20), title: 'Event title here', content: this.content },
    { caption: '20 May', date: new Date(2014, 5, 20), title: 'Event title here', content: this.content },
    { caption: '09 Jul', date: new Date(2014, 7, 9), title: 'Event title here', content: this.content },
    { caption: '30 Aug', date: new Date(2014, 8, 30), title: 'Event title here', content: this.content },
    { caption: '15 Sep', date: new Date(2014, 9, 15), title: 'Event title here', content: this.content },
    { caption: '01 Nov', date: new Date(2014, 11, 1), title: 'Event title here', content: this.content },
    { caption: '10 Dec', date: new Date(2014, 12, 10), title: 'Event title here', content: this.content },
    { caption: '29 Jan', date: new Date(2015, 1, 19), title: 'Event title here', content: this.content },
    { caption: '3 Mar', date: new Date(2015, 3, 3), title: 'Event title here', content: this.content },
  ]

  load(){
    this.timeline = [
      { caption: '16 Jan', date: new Date(2014, 1, 16), selected: true, title: 'Horizontal Timeline', content: this.content },
      { caption: '28 Feb', date: new Date(2014, 2, 28), title: 'Event title here', content: this.content },
      { caption: '30 Aug', date: new Date(2014, 8, 30), title: 'Event title here', content: this.content },
      { caption: '15 Sep', date: new Date(2014, 9, 15), title: 'Event title here', content: this.content },
      { caption: '01 Nov', date: new Date(2014, 11, 1), title: 'Event title here', content: this.content },
      { caption: '10 Dec', date: new Date(2014, 12, 10), title: 'Event title here', content: this.content },
      { caption: '29 Jan', date: new Date(2015, 1, 19), title: 'Event title here', content: this.content },
      { caption: '3 Mar', date: new Date(2015, 3, 3), title: 'Event title here', content: this.content },
    ];
  }

 

handleCarouselEvents(event:any) {
  console.log(event);
}
}
