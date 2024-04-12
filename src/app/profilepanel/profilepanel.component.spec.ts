import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepanelComponent } from './profilepanel.component';

describe('ProfilepanelComponent', () => {
  let component: ProfilepanelComponent;
  let fixture: ComponentFixture<ProfilepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilepanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
