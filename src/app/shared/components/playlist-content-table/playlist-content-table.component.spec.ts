import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistContentTableComponent } from './playlist-content-table.component';

describe('PlaylistContentTableComponent', () => {
  let component: PlaylistContentTableComponent;
  let fixture: ComponentFixture<PlaylistContentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistContentTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistContentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
