import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeMediaComponent } from './youtube-media.component';

describe('YoutubeMediaComponent', () => {
  let component: YoutubeMediaComponent;
  let fixture: ComponentFixture<YoutubeMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
