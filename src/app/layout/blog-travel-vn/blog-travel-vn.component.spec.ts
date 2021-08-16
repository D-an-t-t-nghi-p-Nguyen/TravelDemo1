import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTravelVnComponent } from './blog-travel-vn.component';

describe('BlogTravelVnComponent', () => {
  let component: BlogTravelVnComponent;
  let fixture: ComponentFixture<BlogTravelVnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTravelVnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTravelVnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
