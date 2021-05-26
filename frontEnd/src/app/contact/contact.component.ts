import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  showSecond=false;
  Change(){
    // if(this.showSecond=false){
    //   this.showSecond=true;
    //   alert('false')
    // }else{
    //   this.showSecond=false;
      alert('true')
    // }
  }
  constructor() {
  
  }
  ngOnInit(): void {
  }
}
