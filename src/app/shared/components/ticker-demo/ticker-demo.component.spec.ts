import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerDemoComponent } from './ticker-demo.component';

describe('TickerDemoComponent', () => {
  let component: TickerDemoComponent;
  let fixture: ComponentFixture<TickerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
