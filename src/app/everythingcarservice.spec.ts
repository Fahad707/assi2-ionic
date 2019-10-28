import { TestBed } from '@angular/core/testing';

import { EverythingcarService } from './everythingcar.service';

describe('EverythingcarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EverythingcarService = TestBed.get(EverythingcarService);
    expect(service).toBeTruthy();
  });
});
