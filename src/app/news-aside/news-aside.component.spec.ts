import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAsideComponent } from './news-aside.component';

describe('NewsAsideComponent', () => {
  let component: NewsAsideComponent;
  let fixture: ComponentFixture<NewsAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAsideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
