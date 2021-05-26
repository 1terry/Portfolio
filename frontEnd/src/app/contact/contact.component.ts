import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  showSecond: boolean;

  Change(){
    if(this.showSecond===false){
      this.showSecond=true;
      alert(this.showSecond)
    }else{
      this.showSecond=false;
      alert(this.showSecond)
    }
  }
  constructor() {   
    this.showSecond = false;
  }
  ngOnInit(): void {
  }
}
