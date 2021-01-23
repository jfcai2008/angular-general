import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsoccerComponent } from './layoutsoccer.component';

describe('LayoutsoccerComponent', () => {
  let component: LayoutsoccerComponent;
  let fixture: ComponentFixture<LayoutsoccerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsoccerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
