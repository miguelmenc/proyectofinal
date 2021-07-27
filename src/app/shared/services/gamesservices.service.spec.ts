import { TestBed } from '@angular/core/testing';

import { GamesservicesService } from './gamesservices.service';

describe('GamesservicesService', () => {
  let service: GamesservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
