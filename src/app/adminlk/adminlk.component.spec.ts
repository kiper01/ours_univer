import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlkComponent } from './adminlk.component';

describe('AdminlkComponent', () => {
  let component: AdminlkComponent;
  let fixture: ComponentFixture<AdminlkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminlkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminlkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
