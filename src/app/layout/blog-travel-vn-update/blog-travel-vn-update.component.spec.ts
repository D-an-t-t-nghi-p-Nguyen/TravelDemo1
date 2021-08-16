import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTravelVnUpdateComponent } from './blog-travel-vn-update.component';

describe('BlogTravelVnUpdateComponent', () => {
  let component: BlogTravelVnUpdateComponent;
  let fixture: ComponentFixture<BlogTravelVnUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTravelVnUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTravelVnUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
