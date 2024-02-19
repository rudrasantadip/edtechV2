import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachwithusComponent } from './teachwithus.component';

describe('TeachwithusComponent', () => {
  let component: TeachwithusComponent;
  let fixture: ComponentFixture<TeachwithusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachwithusComponent]
    });
    fixture = TestBed.createComponent(TeachwithusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
