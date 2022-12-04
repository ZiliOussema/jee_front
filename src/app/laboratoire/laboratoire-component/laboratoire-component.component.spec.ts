import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoireComponentComponent } from './laboratoire-component.component';

describe('LaboratoireComponentComponent', () => {
  let component: LaboratoireComponentComponent;
  let fixture: ComponentFixture<LaboratoireComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoireComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoireComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
