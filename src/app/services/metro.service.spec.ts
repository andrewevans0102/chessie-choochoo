import { TestBed } from '@angular/core/testing';

import { MetroService } from './metro.service';

describe('MetroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetroService = TestBed.get(MetroService);
    expect(service).toBeTruthy();
  });
});
