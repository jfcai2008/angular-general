import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProachesComponent } from './proaches.component';

describe('ProachesComponent', () => {
  let component: ProachesComponent;
  let fixture: ComponentFixture<ProachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
