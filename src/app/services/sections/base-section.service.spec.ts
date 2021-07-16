import { TestBed } from '@angular/core/testing';

import { BaseSectionService } from './base-section.service';

describe('BaseSectionService', () => {
  let service: BaseSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
