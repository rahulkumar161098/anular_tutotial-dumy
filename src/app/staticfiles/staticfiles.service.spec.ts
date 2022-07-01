import { TestBed } from '@angular/core/testing';

import { StaticfilesService } from './staticfiles.service';

describe('StaticfilesService', () => {
  let service: StaticfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
