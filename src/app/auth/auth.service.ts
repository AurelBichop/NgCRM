import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

export type RegisterData = {
  email: string;
  name: string;
  password: string;
};

@Injectable()
export class AuthService {
  register(registerData: RegisterData) {
    return this.http.post(
      'https://x8ki-letl-twmt.n7.xano.io/api:jQodi_tC/auth/signup',
      registerData
    );
  }

  exits(email: string) {
    return this.http
      .post<{ exists: boolean }>(
        'https://x8ki-letl-twmt.n7.xano.io/api:jQodi_tC/user/validation/exist',
        {
          email: email,
        }
      )
      .pipe(map((response) => response.exists));
  }

  login() {}

  logout() {}

  constructor(private http: HttpClient) {}
}
