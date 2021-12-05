import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedZoneLayoutComponent } from './added-zone-layout.component';

describe('AddedZoneLayoutComponent', () => {
  let component: AddedZoneLayoutComponent;
  let fixture: ComponentFixture<AddedZoneLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedZoneLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedZoneLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
