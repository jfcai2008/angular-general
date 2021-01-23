import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutknowledgeComponent } from './layoutknowledge.component';

describe('LayoutknowledgeComponent', () => {
  let component: LayoutknowledgeComponent;
  let fixture: ComponentFixture<LayoutknowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutknowledgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
