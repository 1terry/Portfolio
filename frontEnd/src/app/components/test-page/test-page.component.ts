import { Component, OnInit } from '@angular/core';
import { TimelineElement } from '../horizontal-timeline/timeline-element';


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent{

  config: any;
  fullpage_api: any;
  
    constructor() {
  
      // for more details on config options please visit fullPage.js docs
      this.config = {
  
        // fullpage options
        licenseKey: 'YOUR LICENSE KEY HERE',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#menu',
  
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

 

handleCarouselEvents(event:any) {
  console.log(event);
}
}
