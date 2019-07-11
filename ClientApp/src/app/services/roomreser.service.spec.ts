import { TestBed } from '@angular/core/testing';

import { RoomreserService } from './roomreser.service';

describe('RoomreserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomreserService = TestBed.get(RoomreserService);
    expect(service).toBeTruthy();
  });
});
