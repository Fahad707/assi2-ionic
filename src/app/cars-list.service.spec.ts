import { TestBed } from '@angular/core/testing';

import { CarsListService } from './cars-list.service';

describe('CarsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsListService = TestBed.get(CarsListService);
    expect(service).toBeTruthy();
  });
});
