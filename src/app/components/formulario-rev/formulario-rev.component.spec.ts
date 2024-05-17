import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRevComponent } from './formulario-rev.component';

describe('FormularioRevComponent', () => {
  let component: FormularioRevComponent;
  let fixture: ComponentFixture<FormularioRevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioRevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
