import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartwearsComponent } from './smartwears.component';

describe('SmartwearsComponent', () => {
  let component: SmartwearsComponent;
  let fixture: ComponentFixture<SmartwearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartwearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartwearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
