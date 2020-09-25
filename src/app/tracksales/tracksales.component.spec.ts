import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksalesComponent } from './tracksales.component';

describe('TracksalesComponent', () => {
  let component: TracksalesComponent;
  let fixture: ComponentFixture<TracksalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracksalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
