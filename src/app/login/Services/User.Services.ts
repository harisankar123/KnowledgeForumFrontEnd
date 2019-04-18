import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { UserDetail } from '../model/user-login-model';
@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}
    saveUserResult(userDetail: UserDetail): Observable<UserDetail> {
      return this.http.post<UserDetail>(`/api/saveUser`, userDetail);
  }

    login(userName: string, password: string): Observable<boolean> {
        return this.http.post<boolean>('/api/login', {'userName': userName, 'password': password});
    }
    getUser(): Observable<UserDetail[]> {
        return this.http.get<UserDetail[]>(`/api/getUsers`);
    }
}
