import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowncityComponent } from './dropdowncity.component';

describe('DropdowncityComponent', () => {
  let component: DropdowncityComponent;
  let fixture: ComponentFixture<DropdowncityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdowncityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowncityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
