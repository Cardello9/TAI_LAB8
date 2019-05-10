//import { TestBed } from '@angular/core/testing';
/*
import { HttpIntercepterBasicAuthService } from './interceptor-auth.service';

describe('InterceptorAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntercepterBasicAuthService = TestBed.get(HttpIntercepterBasicAuthService);
    expect(service).toBeTruthy();
  });
});
*/

import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});


/*
import { InterceptorAuthService } from './interceptor-auth.service';

describe('InterceptorAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptorAuthService = TestBed.get(InterceptorAuthService);
    expect(service).toBeTruthy();
  });
});
*/