import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootingsStatsComponent } from './shootings-stats.component';

describe('ShootingsStatsComponent', () => {
  let component: ShootingsStatsComponent;
  let fixture: ComponentFixture<ShootingsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShootingsStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShootingsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
