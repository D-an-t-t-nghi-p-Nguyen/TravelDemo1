import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBlogComponent } from './contact-blog.component';

describe('ContactBlogComponent', () => {
  let component: ContactBlogComponent;
  let fixture: ComponentFixture<ContactBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
