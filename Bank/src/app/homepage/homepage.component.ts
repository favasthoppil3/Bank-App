import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';
const options = {
  headers: new HttpHeaders
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  deleteacc: any
  accno: any
  accountNo: any

  username: any
  transaction: any
  amount: any

  waccountnumber: any
  wpassword: any
  wamount: any

  amounts: any
  accountnumber: any
  abc: any
  name: any

  depositForm = this.dep.group({
    daccountno: ['', [Validators.required]],
    dpassword: ['', [Validators.required]],
    damount: ['', [Validators.required]]

  })

  withdrawForm = this.dep.group({
    waccountnumber: ['', [Validators.required]],
    wpassword: ['', [Validators.required]],
    wamount: ['', [Validators.required]]

  })
  constructor(private data: DatabaseService, private route: Router, private dep: FormBuilder, private http: HttpClient) {

  }


  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('username') || '')
    this.accountNo = JSON.parse(localStorage.getItem('currentaccountnumber') || '')

  }


  deposit() {
    const data = {
      accountnum: this.depositForm.value.daccountno,
      pass: this.depositForm.value.dpassword,
      balance: this.depositForm.value.damount
    }
    if (this.depositForm.valid) {

      console.log("data", data)
      this.http.post("http://localhost:3000/deposit", data, this.getOptions()).subscribe((result: any) => {
        if (result) {
          console.log("result", result)
          alert(result.message)
        }

      }, (result) => {
        alert(result.error.message)
      })

    } else {
      alert("")
    }
  }

  getOptions() {
    var token = JSON.parse(localStorage.getItem('token') || '')
    console.log("token", token)
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.append('x-access-token', token)
      console.log("headers", headers)
      options.headers = headers
    }
    return options
  }

  withdraw() {
    const data = {
      accountnum: this.withdrawForm.value.waccountnumber,
      pass: this.withdrawForm.value.wpassword,
      balance: this.withdrawForm.value.wamount
    }
    console.log("data", data)

    this.http.post("http://localhost:3000/withdraw", data, this.getOptions()).subscribe((result: any) => {
      if (result) {
        console.log("result", result)
        alert(result.message)
      }
    }, (result) => {
      alert(result.error.message)
    })
  }
  deleteaccount() {
    this.deleteacc = JSON.parse(localStorage.getItem('currentaccno') || '')
  }
  cancel() {
    this.deleteacc = ""
  }
  deleted(event:
    any) {
    this.data.delete(event).subscribe((result: any) => {
      if (result) {
        alert(result.message)
        localStorage.removeItem('currentaccountnumber')
        this.route.navigateByUrl('')
      }
    })
  }


  logout() {
    localStorage.removeItem('currentaccno')
    localStorage.removeItem('username')
    this.route.navigateByUrl('')

  }

}



