import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainsComponent } from './explains.component';

describe('ExplainsComponent', () => {
  let component: ExplainsComponent;
  let fixture: ComponentFixture<ExplainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
