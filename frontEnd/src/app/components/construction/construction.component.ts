import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent {
  title = 'Angular 6 Project!';
   //array of months.
   months = ["January", "Feburary", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
   isavailable = true;
   myClickFunction(event) { 
      //just added console.log which will display the event details in browser on click of the button.
      alert("Button is clicked");
      console.log(event);
   }
}
