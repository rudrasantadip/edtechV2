import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDoubtComponent } from './live-doubt.component';

describe('LiveDoubtComponent', () => {
  let component: LiveDoubtComponent;
  let fixture: ComponentFixture<LiveDoubtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveDoubtComponent]
    });
    fixture = TestBed.createComponent(LiveDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
