import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTemplateComponent } from './zone-template.component';

describe('ZoneTemplateComponent', () => {
  let component: ZoneTemplateComponent;
  let fixture: ComponentFixture<ZoneTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
