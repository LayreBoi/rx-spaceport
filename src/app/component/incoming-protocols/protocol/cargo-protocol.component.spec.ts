import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoProtocolComponent } from './cargo-protocol.component';

describe('ProtocolComponent', () => {
  let component: CargoProtocolComponent;
  let fixture: ComponentFixture<CargoProtocolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargoProtocolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
