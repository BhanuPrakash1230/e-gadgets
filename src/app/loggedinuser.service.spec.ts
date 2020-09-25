import { TestBed } from '@angular/core/testing';

import { LoggedinuserService } from './loggedinuser.service';

describe('LoggedinuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggedinuserService = TestBed.get(LoggedinuserService);
    expect(service).toBeTruthy();
  });
});
