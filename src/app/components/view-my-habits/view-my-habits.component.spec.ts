import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyHabitsComponent } from './view-my-habits.component';

describe('ViewMyHabitsComponent', () => {
  let component: ViewMyHabitsComponent;
  let fixture: ComponentFixture<ViewMyHabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyHabitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
