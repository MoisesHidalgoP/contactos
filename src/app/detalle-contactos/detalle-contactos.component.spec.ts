import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleContactosComponent } from './detalle-contactos.component';

describe('DetalleContactosComponent', () => {
  let component: DetalleContactosComponent;
  let fixture: ComponentFixture<DetalleContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleContactosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
