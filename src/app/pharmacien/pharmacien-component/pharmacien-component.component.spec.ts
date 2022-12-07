import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacienComponentComponent } from './pharmacien-component.component';

describe('PharmacienComponentComponent', () => {
  let component: PharmacienComponentComponent;
  let fixture: ComponentFixture<PharmacienComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacienComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacienComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
