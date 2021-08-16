import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesBlogComponent } from './features-blog.component';

describe('FeaturesBlogComponent', () => {
  let component: FeaturesBlogComponent;
  let fixture: ComponentFixture<FeaturesBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
