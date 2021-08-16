import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTravelVnGetIdComponent } from './blog-travel-vn-get-id.component';

describe('BlogTravelVnGetIdComponent', () => {
  let component: BlogTravelVnGetIdComponent;
  let fixture: ComponentFixture<BlogTravelVnGetIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTravelVnGetIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTravelVnGetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
