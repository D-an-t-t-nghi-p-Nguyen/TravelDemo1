import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveBlogComponent } from './move-blog.component';

describe('MoveBlogComponent', () => {
  let component: MoveBlogComponent;
  let fixture: ComponentFixture<MoveBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
