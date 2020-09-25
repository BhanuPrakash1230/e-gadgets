import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemobilesComponent } from './managemobiles.component';

describe('ManagemobilesComponent', () => {
  let component: ManagemobilesComponent;
  let fixture: ComponentFixture<ManagemobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagemobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagemobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
