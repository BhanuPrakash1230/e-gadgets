import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesmartwearsComponent } from './managesmartwears.component';

describe('ManagesmartwearsComponent', () => {
  let component: ManagesmartwearsComponent;
  let fixture: ComponentFixture<ManagesmartwearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesmartwearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesmartwearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
