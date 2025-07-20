import { TestBed } from '@angular/core/testing';

import { ContactService } from './contato';

describe('Contato', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
