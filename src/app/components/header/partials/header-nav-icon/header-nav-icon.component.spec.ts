import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavIconComponent } from './header-nav-icon.component';

describe('HeaderNavIconComponent', () => {
  let component: HeaderNavIconComponent;
  let fixture: ComponentFixture<HeaderNavIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderNavIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
