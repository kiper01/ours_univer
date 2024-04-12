import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestspanelComponent } from './requestspanel.component';

describe('RequestspanelComponent', () => {
  let component: RequestspanelComponent;
  let fixture: ComponentFixture<RequestspanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestspanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
