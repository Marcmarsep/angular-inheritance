import { TestBed } from '@angular/core/testing';

import { SectionAService } from './section-a.service';

describe('SectionAService', () => {
  let service: SectionAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
