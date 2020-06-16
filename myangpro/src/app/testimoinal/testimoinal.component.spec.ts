import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoinalComponent } from './testimoinal.component';

describe('TestimoinalComponent', () => {
  let component: TestimoinalComponent;
  let fixture: ComponentFixture<TestimoinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimoinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
