import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTravelVnAddComponent } from './blog-travel-vn-add.component';

describe('BlogTravelVnAddComponent', () => {
  let component: BlogTravelVnAddComponent;
  let fixture: ComponentFixture<BlogTravelVnAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTravelVnAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTravelVnAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
