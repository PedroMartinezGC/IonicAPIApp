import { TestBed } from '@angular/core/testing';

import { UpdateViewsService } from './update-views.service';

describe('UpdateViewsService', () => {
  let service: UpdateViewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateViewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
