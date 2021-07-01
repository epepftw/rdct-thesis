import { TestBed } from '@angular/core/testing';

import { UserKeysService } from './user-keys.service';

describe('UserKeysService', () => {
  let service: UserKeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserKeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
