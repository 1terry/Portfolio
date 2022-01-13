import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { element } from 'protractor';
import { info } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent{

  // toggleControl = new FormControl(false);

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

  changeColour(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    // alert("WARNING Colours are truly randomized so it may look like ass");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    // var changeColour = document.getElementsByClassName("background");
    const changeColour = Array.from(document.getElementsByClassName('flex-container') as HTMLCollectionOf<HTMLElement>)
    const changeColour2 = Array.from(document.getElementsByClassName('projects-flex') as HTMLCollectionOf<HTMLElement>)
    const changeColour3 = Array.from(document.getElementsByClassName('skills-container') as HTMLCollectionOf<HTMLElement>)

   changeColour.forEach((element) => {
     element.style.backgroundColor = "#" + randomColor;
   });

   changeColour2.forEach((element) => {
    element.style.backgroundColor = "#" + randomColor2;
  });

    changeColour3.forEach((element) => {
    element.style.backgroundColor = "#" + randomColor3;
  });
 }

 //Event for reseting colours
 resetColour(event) {
  const resetColour = Array.from(document.getElementsByClassName('flex-container') as HTMLCollectionOf<HTMLElement>)
  const resetColour2 = Array.from(document.getElementsByClassName('projects-flex') as HTMLCollectionOf<HTMLElement>)
  const resetColour3 = Array.from(document.getElementsByClassName('skills-container') as HTMLCollectionOf<HTMLElement>)

  resetColour.forEach((element) => {
    element.style.background = "#E2D8D8";
  });

  resetColour2.forEach((element) => {
    element.style.background = "#BDBDBD";
  });

  resetColour3.forEach((element) => {
    element.style.background = "#D6D6D6";
  });
 }

darkMode(event){
  let isPresent:boolean = true;
  const icon = Array.from(document.getElementById('darkIcon') as HTMLFormElement)


  // if (icon.array.forEach(element => {
    
  // });)
}

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
  
  
  
    getRef(fullPageRef) {
      this.fullpage_api = fullPageRef;
    }
}


// var changeColour = document.getElementById("background-change");

// function handleClick(this: HTMLElement) {
//     console.log("Clicked!");
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     changeColour.innerHTML =  "#" + randomColor;
//     this.removeEventListener("click", handleClick);
// }

// changeColour?.addEventListener("click", handleClick, false);

