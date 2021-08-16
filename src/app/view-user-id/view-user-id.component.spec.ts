import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserIdComponent } from './view-user-id.component';

describe('ViewUserIdComponent', () => {
  let component: ViewUserIdComponent;
  let fixture: ComponentFixture<ViewUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
