import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipDockComponent } from './ship-dock.component';

describe('ShipDockComponent', () => {
  let component: ShipDockComponent;
  let fixture: ComponentFixture<ShipDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipDockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
