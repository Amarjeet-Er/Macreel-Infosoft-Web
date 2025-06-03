import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdesignComponent } from './webdesign.component';

describe('WebdesignComponent', () => {
  let component: WebdesignComponent;
  let fixture: ComponentFixture<WebdesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebdesignComponent]
    });
    fixture = TestBed.createComponent(WebdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
