import { TestBed } from '@angular/core/testing';

import { AlumnDataService } from './alumn-data.service';

describe('AlumnDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnDataService = TestBed.get(AlumnDataService);
    expect(service).toBeTruthy();
  });
});
