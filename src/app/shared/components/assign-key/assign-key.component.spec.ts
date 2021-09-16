import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignKeyComponent } from './assign-key.component';

describe('AssignKeyComponent', () => {
  let component: AssignKeyComponent;
  let fixture: ComponentFixture<AssignKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
