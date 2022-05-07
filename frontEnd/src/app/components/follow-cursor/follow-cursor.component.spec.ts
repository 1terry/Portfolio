import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowCursorComponent } from './follow-cursor.component';

describe('FollowCursorComponent', () => {
  let component: FollowCursorComponent;
  let fixture: ComponentFixture<FollowCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowCursorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
