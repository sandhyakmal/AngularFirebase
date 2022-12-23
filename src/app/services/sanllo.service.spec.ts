import { TestBed } from '@angular/core/testing';

import { SanlloService } from './sanllo.service';

describe('SanlloService', () => {
  let service: SanlloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanlloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
