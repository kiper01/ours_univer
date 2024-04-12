import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleelkComponent } from './enrolleelk.component';

describe('EnrolleelkComponent', () => {
  let component: EnrolleelkComponent;
  let fixture: ComponentFixture<EnrolleelkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrolleelkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrolleelkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
