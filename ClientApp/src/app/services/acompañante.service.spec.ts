import { TestBed } from '@angular/core/testing';

import { AcompañanteService } from './acompañante.service';

describe('AcompañanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcompañanteService = TestBed.get(AcompañanteService);
    expect(service).toBeTruthy();
  });
});
