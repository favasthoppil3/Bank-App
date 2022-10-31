import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  database: any = {}

  constructor(private http: HttpClient) { }
  register(accountnum: any, uname: any, pass: any, balance: any) {

    const data = {
      accountnum,
      uname,
      pass,
      balance
    }
    return this.http.post('http://localhost:3000/register', data)
  }

  login(accountnum: any, pass: any) {

    const data = {
      accountnum,
      pass
    }

    return this.http.post('http://localhost:3000/login', data)
  }

  delete(accno: any) {
    return this.http.delete('http://localhost:3000/deleteac/' + accno)
  }
}

