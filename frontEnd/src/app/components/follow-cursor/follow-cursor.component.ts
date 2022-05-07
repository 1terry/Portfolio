import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-follow-cursor',
  templateUrl: './follow-cursor.component.html',
  styleUrls: ['./follow-cursor.component.scss']
})
export class FollowCursorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = 'Angular 5';
  state = 'center';

  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent) {
    const topLeft = $event.clientX < window.innerWidth / 2 &&
      $event.clientY < window.innerHeight / 2;
    const topRight = $event.clientX > window.innerWidth / 2 &&
      $event.clientY < window.innerHeight / 2;
    const bottomLeft = $event.clientX < window.innerWidth / 2 &&
      $event.clientY > window.innerHeight / 2;
    const bottomRight = $event.clientX > window.innerWidth / 2 &&
      $event.clientY > window.innerHeight / 2;

    if (topLeft) this.moveToTopLeft();
    if (topRight) this.moveToTopRight();
    if (bottomLeft) this.moveToBottomLeft();
    if (bottomRight) this.moveToBottomRight();

  }

  moveToBottomLeft() {
    this.state = 'bottomLeft';
  }

  moveToBottomRight() {
    this.state = 'bottomRight';
  }

  moveToTopRight() {
    this.state = 'topRight';
  }

  moveToTopLeft() {
    this.state = 'topLeft';
  }

  center() {
    this.state = 'center';
  }
}
