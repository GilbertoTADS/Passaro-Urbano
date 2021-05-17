import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OderCompraComponent } from './oder-compra.component';

describe('OderCompraComponent', () => {
  let component: OderCompraComponent;
  let fixture: ComponentFixture<OderCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
