import { TestBed } from '@angular/core/testing';

import { WidgetLookupService } from './widget-lookup.service';

describe('WidgetLookupService', () => {
  let service: WidgetLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
