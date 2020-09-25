import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagelaptopsComponent } from './managelaptops.component';

describe('ManagelaptopsComponent', () => {
  let component: ManagelaptopsComponent;
  let fixture: ComponentFixture<ManagelaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagelaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagelaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
