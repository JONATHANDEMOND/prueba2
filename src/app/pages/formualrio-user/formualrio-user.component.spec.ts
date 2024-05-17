import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormualrioUserComponent } from './formualrio-user.component';

describe('FormualrioUserComponent', () => {
  let component: FormualrioUserComponent;
  let fixture: ComponentFixture<FormualrioUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormualrioUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormualrioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
