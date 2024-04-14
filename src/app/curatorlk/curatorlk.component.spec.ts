import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorlkComponent } from './curatorlk.component';

describe('CuratorlkComponent', () => {
  let component: CuratorlkComponent;
  let fixture: ComponentFixture<CuratorlkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuratorlkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuratorlkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
