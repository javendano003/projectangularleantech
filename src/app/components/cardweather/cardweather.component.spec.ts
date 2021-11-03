import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardweatherComponent } from './cardweather.component';

describe('CardweatherComponent', () => {
  let component: CardweatherComponent;
  let fixture: ComponentFixture<CardweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardweatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
