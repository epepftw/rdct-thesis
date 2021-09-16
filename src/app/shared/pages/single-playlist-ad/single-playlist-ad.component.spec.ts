import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlaylistAdComponent } from './single-playlist-ad.component';

describe('SinglePlaylistAdComponent', () => {
  let component: SinglePlaylistAdComponent;
  let fixture: ComponentFixture<SinglePlaylistAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePlaylistAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlaylistAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
