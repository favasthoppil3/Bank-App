import { transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.log.group({
    accountnumber: ['', [Validators.required, Validators.pattern('[0-9]*$')]],
    password: ['', [Validators.required]]

  })

  constructor(private data: DatabaseService, private route: Router, private log: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }
  login() {
    var accno: any = this.loginForm.value.accountnumber
    var password: any = this.loginForm.value.password

    this.data.login(accno, password).subscribe((result: any) => {
      if (result) {
        alert(result.message)
        localStorage.setItem("currentaccno", JSON.stringify(accno))
        localStorage.setItem("currentaccountnumber", JSON.stringify(result.currentaccountno))
        localStorage.setItem("username", JSON.stringify(result.username))
        localStorage.setItem("token", JSON.stringify(result.token))
        this.route.navigateByUrl('homepage')
      }
    }, (result) => {
      alert(result.error.message)
    })

  }

}
