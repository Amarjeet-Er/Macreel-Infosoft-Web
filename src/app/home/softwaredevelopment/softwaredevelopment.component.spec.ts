import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaredevelopmentComponent } from './softwaredevelopment.component';

describe('SoftwaredevelopmentComponent', () => {
  let component: SoftwaredevelopmentComponent;
  let fixture: ComponentFixture<SoftwaredevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwaredevelopmentComponent]
    });
    fixture = TestBed.createComponent(SoftwaredevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
