import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlaylistAdComponent } from './create-playlist-ad.component';

describe('CreatePlaylistAdComponent', () => {
  let component: CreatePlaylistAdComponent;
  let fixture: ComponentFixture<CreatePlaylistAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlaylistAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlaylistAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
