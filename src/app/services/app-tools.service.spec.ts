import { TestBed } from '@angular/core/testing';

import { AppToolsService } from './app-tools.service';

describe('AppToolsService', () => {
  let service: AppToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
