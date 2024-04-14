import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleelkprofileComponent } from './enrolleelkprofile.component';

describe('EnrolleelkprofileComponent', () => {
  let component: EnrolleelkprofileComponent;
  let fixture: ComponentFixture<EnrolleelkprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrolleelkprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrolleelkprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
