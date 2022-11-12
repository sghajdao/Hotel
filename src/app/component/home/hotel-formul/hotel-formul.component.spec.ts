import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFormulComponent } from './hotel-formul.component';

describe('HotelFormulComponent', () => {
  let component: HotelFormulComponent;
  let fixture: ComponentFixture<HotelFormulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelFormulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelFormulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
