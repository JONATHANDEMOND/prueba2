import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisonComponent } from './revison.component';

describe('RevisonComponent', () => {
  let component: RevisonComponent;
  let fixture: ComponentFixture<RevisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
