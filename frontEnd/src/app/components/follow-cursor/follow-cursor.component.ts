import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-cursor',
  templateUrl: './follow-cursor.component.html',
  styleUrls: ['./follow-cursor.component.scss']
})
export class FollowCursorComponent implements OnInit {

  constructor() { }

  // Initialize circle here probs
  ngOnInit(): void {
  }

  update() {
    let c = document.getElementById("ball") as HTMLCanvasElement;
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();

    // Line algorithm: pointx and y from cursor vs point 
    // Move set amount every tick towards cursor if behind cursor, otherwise 

    // Here we track pointer
    let pointerX = -1;
    let pointerY = -1;
    document.onmousemove = function (event) {
      pointerX = event.pageX;
      pointerY = event.pageY;
    }
  }

  // https://www.codegrepper.com/code-examples/javascript/get+cursor+position+javascript

}
