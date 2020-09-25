import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageaudioComponent } from './manageaudio.component';

describe('ManageaudioComponent', () => {
  let component: ManageaudioComponent;
  let fixture: ComponentFixture<ManageaudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageaudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
