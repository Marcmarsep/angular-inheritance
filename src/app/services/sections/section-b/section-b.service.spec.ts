import { TestBed } from '@angular/core/testing';

import { SectionBService } from './section-b.service';

describe('SectionBService', () => {
  let service: SectionBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
