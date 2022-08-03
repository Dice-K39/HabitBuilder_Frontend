import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseHabitsComponent } from './browse-habits.component';

describe('BrowseHabitsComponent', () => {
  let component: BrowseHabitsComponent;
  let fixture: ComponentFixture<BrowseHabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseHabitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
