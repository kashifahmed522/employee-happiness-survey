import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessIndexMetricsComponent } from './happiness-index-metrics.component';

describe('HappinessIndexMetricsComponent', () => {
  let component: HappinessIndexMetricsComponent;
  let fixture: ComponentFixture<HappinessIndexMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappinessIndexMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappinessIndexMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
