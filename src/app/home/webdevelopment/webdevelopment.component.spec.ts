import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevelopmentComponent } from './webdevelopment.component';

describe('WebdevelopmentComponent', () => {
  let component: WebdevelopmentComponent;
  let fixture: ComponentFixture<WebdevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebdevelopmentComponent]
    });
    fixture = TestBed.createComponent(WebdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
