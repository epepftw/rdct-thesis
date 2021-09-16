import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFileModalAdComponent } from './media-file-modal-ad.component';

describe('MediaFileModalAdComponent', () => {
  let component: MediaFileModalAdComponent;
  let fixture: ComponentFixture<MediaFileModalAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaFileModalAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFileModalAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
