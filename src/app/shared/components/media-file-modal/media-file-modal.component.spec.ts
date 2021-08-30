import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFileModalComponent } from './media-file-modal.component';

describe('MediaFileModalComponent', () => {
  let component: MediaFileModalComponent;
  let fixture: ComponentFixture<MediaFileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaFileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
