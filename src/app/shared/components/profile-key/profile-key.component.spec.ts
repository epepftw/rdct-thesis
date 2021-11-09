import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileKeyComponent } from './profile-key.component';

describe('ProfileKeyComponent', () => {
  let component: ProfileKeyComponent;
  let fixture: ComponentFixture<ProfileKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
