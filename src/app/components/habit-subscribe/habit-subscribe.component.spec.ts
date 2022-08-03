import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitSubscribeComponent } from './habit-subscribe.component';

describe('HabitSubscribeComponent', () => {
  let component: HabitSubscribeComponent;
  let fixture: ComponentFixture<HabitSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitSubscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
