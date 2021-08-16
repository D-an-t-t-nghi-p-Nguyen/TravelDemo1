import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVnIdComponent } from './view-vn-id.component';

describe('ViewVnIdComponent', () => {
  let component: ViewVnIdComponent;
  let fixture: ComponentFixture<ViewVnIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVnIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVnIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
