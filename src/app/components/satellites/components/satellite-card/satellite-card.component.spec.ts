import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteCardComponent } from './satellite-card.component';

describe('SatelliteCardComponent', () => {
  let component: SatelliteCardComponent;
  let fixture: ComponentFixture<SatelliteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatelliteCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatelliteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
