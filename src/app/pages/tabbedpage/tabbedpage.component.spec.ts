import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedpageComponent } from './tabbedpage.component';

describe('TabbedpageComponent', () => {
  let component: TabbedpageComponent;
  let fixture: ComponentFixture<TabbedpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabbedpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
