import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingProtocolsComponent } from './incoming-protocols.component';

describe('ProtocolComponent', () => {
  let component: IncomingProtocolsComponent;
  let fixture: ComponentFixture<IncomingProtocolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomingProtocolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomingProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
