import { Component, OnInit } from '@angular/core';

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

handleCarouselEvents(event:any) {
  console.log(event);
}
}
