import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsauriosDetallesComponent } from './usaurios-detalles.component';

describe('UsauriosDetallesComponent', () => {
  let component: UsauriosDetallesComponent;
  let fixture: ComponentFixture<UsauriosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsauriosDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsauriosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
